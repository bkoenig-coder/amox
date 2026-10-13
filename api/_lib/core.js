import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { listPaths, readJson, removePath, writeJson } from './store.js';

const isProd = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';

export const adminPassword = () => process.env.ADMIN_PASSWORD || (isProd ? '' : 'admin');

// Registrations live under a secret prefix derived from the admin password,
// so even in a public store the paths cannot be guessed.
const regPrefix = () =>
  'registrations-' +
  createHmac('sha256', adminPassword() || 'unset').update('amox-registrations').digest('hex').slice(0, 24);

const sha = (s) => createHash('sha256').update(s).digest();
export const isAdmin = (req) => {
  const given = String(req.headers['x-admin-password'] || '');
  const real = adminPassword();
  if (!real) return false;
  return timingSafeEqual(sha(given), sha(real));
};

// ---------- helpers ----------
export const json = (res, status, body) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
};

const ID_RE = /^[a-z0-9][a-z0-9-]{2,60}$/;
export const validId = (id) => typeof id === 'string' && ID_RE.test(id);

const clean = (v, max) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);

const makeId = (title) => {
  const slug = clean(title, 80)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 36);
  return (slug || 'event') + '-' + randomBytes(3).toString('hex');
};

// ---------- events ----------
export async function listEvents() {
  const paths = await listPaths('events/');
  const events = (await Promise.all(paths.map((p) => readJson(p)))).filter(Boolean);
  return events.sort((a, b) => (a.date + ' ' + (a.time || '')).localeCompare(b.date + ' ' + (b.time || '')));
}

export function parseEvent(input, existing) {
  const e = {
    id: (existing && existing.id) || (validId(input.id) ? input.id : makeId(input.title)),
    title: clean(input.title, 140),
    date: clean(input.date, 10),
    time: clean(input.time, 5),
    location: clean(input.location, 160),
    description: String(input.description == null ? '' : input.description).trim().slice(0, 2000),
    capacity: Math.max(0, Math.min(100000, parseInt(input.capacity, 10) || 0)),
    registrationOpen: input.registrationOpen !== false,
    createdAt: (existing && existing.createdAt) || new Date().toISOString(),
    hasImage: Boolean(existing && existing.hasImage),
    imageV: (existing && existing.imageV) || 0
  };
  if (e.title.length < 3) return { error: 'Гарчиг дор хаяж 3 тэмдэгт байна.' };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(e.date) || Number.isNaN(Date.parse(e.date))) return { error: 'Огноо буруу байна.' };
  if (e.time && !/^([01]\d|2[0-3]):[0-5]\d$/.test(e.time)) return { error: 'Цаг буруу байна (жишээ: 18:30).' };
  if (e.location.length < 2) return { error: 'Байршлаа оруулна уу.' };
  return { event: e };
}

export async function saveEvent(input) {
  let existing = null;
  if (validId(input.id)) existing = await readJson('events/' + input.id + '.json');
  const parsed = parseEvent(input, existing);
  if (parsed.error) return parsed;
  const ev = parsed.event;
  if (typeof input.image === 'string' && input.image) {
    if (!IMG_RE.test(input.image) || input.image.length > 900000) return { error: 'Зураг буруу эсвэл хэт том байна (дээд тал нь ~600 KB).' };
    await writeJson('event-images/' + ev.id + '.json', { dataUrl: input.image });
    ev.hasImage = true;
    ev.imageV = Date.now();
  } else if (input.removeImage === true && ev.hasImage) {
    await removePath('event-images/' + ev.id + '.json');
    ev.hasImage = false;
    ev.imageV = 0;
  }
  await writeJson('events/' + ev.id + '.json', ev);
  return parsed;
}

const IMG_RE = /^data:image\/(webp|jpeg|png);base64,[A-Za-z0-9+/]+=*$/;

export async function getEventImage(id) {
  if (!validId(id)) return null;
  const row = await readJson('event-images/' + id + '.json');
  const m = row && typeof row.dataUrl === 'string' && row.dataUrl.match(/^data:(image\/(?:webp|jpeg|png));base64,(.+)$/);
  return m ? { type: m[1], buffer: Buffer.from(m[2], 'base64') } : null;
}

export async function deleteEvent(id) {
  if (!validId(id)) return;
  await removePath('events/' + id + '.json');
  await removePath('event-images/' + id + '.json');
  for (const p of await listPaths(regPrefix() + '/' + id + '/')) await removePath(p);
}

// ---------- registrations ----------
export async function countRegistrations(eventId) {
  return (await listPaths(regPrefix() + '/' + eventId + '/')).length;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9][0-9\s().-]{5,19}$/;

export async function register(input) {
  const eventId = input.eventId;
  if (!validId(eventId)) return { status: 400, error: 'Арга хэмжээ олдсонгүй.' };
  const event = await readJson('events/' + eventId + '.json');
  if (!event) return { status: 404, error: 'Арга хэмжээ олдсонгүй.' };
  if (!event.registrationOpen) return { status: 409, error: 'Энэ арга хэмжээний бүртгэл хаагдсан байна.' };

  const fullName = clean(input.fullName, 100);
  const phone = clean(input.phone, 24);
  const email = clean(input.email, 160).toLowerCase();
  if (fullName.length < 3 || !fullName.includes(' ')) return { status: 400, error: 'Овог, нэрээ бүтнээр нь бичнэ үү.' };
  if (!PHONE_RE.test(phone)) return { status: 400, error: 'Утасны дугаар буруу байна.' };
  if (!EMAIL_RE.test(email)) return { status: 400, error: 'И-мэйл хаяг буруу байна.' };
  if (input.consent !== true) return { status: 400, error: 'Мэдээлэл ашиглахыг зөвшөөрнө үү.' };

  if (event.capacity > 0 && (await countRegistrations(eventId)) >= event.capacity) {
    return { status: 409, error: 'Бүртгэл дүүрсэн байна.' };
  }

  const key = createHash('sha256').update(email).digest('hex').slice(0, 32);
  const ok = await writeJson(
    regPrefix() + '/' + eventId + '/' + key + '.json',
    { key, eventId, fullName, phone, email, createdAt: new Date().toISOString() },
    { overwrite: false }
  );
  if (!ok) return { status: 409, error: 'Энэ и-мэйлээр аль хэдийн бүртгүүлсэн байна.' };
  return { status: 200, ok: true };
}

export async function listRegistrations(eventId) {
  if (!validId(eventId)) return [];
  const paths = await listPaths(regPrefix() + '/' + eventId + '/');
  const rows = (await Promise.all(paths.map((p) => readJson(p)))).filter(Boolean);
  return rows.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

export async function deleteRegistration(eventId, key) {
  if (!validId(eventId) || !/^[a-f0-9]{32}$/.test(String(key))) return;
  await removePath(regPrefix() + '/' + eventId + '/' + key + '.json');
}

export async function deleteAllRegistrations(eventId) {
  if (!validId(eventId)) return 0;
  const paths = await listPaths(regPrefix() + '/' + eventId + '/');
  for (const p of paths) await removePath(p);
  return paths.length;
}

// Remove the registrations (not the events) of events that ended more than `days` days ago.
export async function purgeOldRegistrations(days) {
  const d = Math.max(1, Math.min(3650, parseInt(days, 10) || 30));
  const limit = new Date(Date.now() - d * 86400000).toISOString().slice(0, 10);
  let removed = 0, events = 0;
  for (const ev of await listEvents()) {
    if (ev.date < limit) {
      const n = await deleteAllRegistrations(ev.id);
      if (n) { removed += n; events += 1; }
    }
  }
  return { removed, events, before: limit };
}

// ---------- tiny in-memory rate limit (best effort per serverless instance) ----------
const hits = new Map();
export function rateLimited(key, max, windowMs) {
  const now = Date.now();
  const arr = (hits.get(key) || []).filter((t) => now - t < windowMs);
  arr.push(now);
  hits.set(key, arr);
  return arr.length > max;
}
export const clientIp = (req) =>
  String((req.headers['x-forwarded-for'] || (req.socket && req.socket.remoteAddress) || 'unknown')).split(',')[0].trim();
