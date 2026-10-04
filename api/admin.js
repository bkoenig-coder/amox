import {
  adminPassword, clientIp, deleteEvent, deleteRegistration, isAdmin, json,
  listEvents, listRegistrations, rateLimited, saveEvent
} from './_lib/core.js';
import { storageMode } from './_lib/store.js';

// One endpoint for every admin action. The password is sent in the
// x-admin-password header; there are no accounts or sessions.
export default async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  try {
    if (!adminPassword()) {
      return json(res, 503, { error: 'ADMIN_PASSWORD тохируулаагүй байна (Vercel → Settings → Environment Variables).' });
    }
    if (rateLimited('admin:' + clientIp(req), 60, 10 * 60 * 1000)) {
      return json(res, 429, { error: 'Хэт олон оролдлого. Түр хүлээнэ үү.' });
    }
    if (!isAdmin(req)) {
      await new Promise((r) => setTimeout(r, 500));
      return json(res, 401, { error: 'Нууц үг буруу байна.' });
    }

    const body = req.body && typeof req.body === 'object' ? req.body : {};
    switch (body.action) {
      case 'login':
        return json(res, 200, { ok: true, storage: storageMode() });
      case 'events':
        return json(res, 200, { events: await listEvents() });
      case 'saveEvent': {
        const r = await saveEvent(body.event || {});
        if (r.error) return json(res, 400, { error: r.error });
        return json(res, 200, { event: r.event });
      }
      case 'deleteEvent':
        await deleteEvent(body.id);
        return json(res, 200, { ok: true });
      case 'registrations':
        return json(res, 200, { registrations: await listRegistrations(body.eventId) });
      case 'deleteRegistration':
        await deleteRegistration(body.eventId, body.key);
        return json(res, 200, { ok: true });
      default:
        return json(res, 400, { error: 'Unknown action' });
    }
  } catch (err) {
    console.error(err);
    json(res, 500, { error: 'Серверийн алдаа гарлаа.' });
  }
}
