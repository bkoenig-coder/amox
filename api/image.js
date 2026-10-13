import { getEventImage, json } from './_lib/core.js';

// Public: an event's poster image (stored in the private Blob store, served through here).
export default async function handler(req, res) {
  if (req.method !== 'GET') return json(res, 405, { error: 'Method not allowed' });
  try {
    const id = new URL(req.url || '/', 'http://localhost').searchParams.get('id');
    const img = await getEventImage(id);
    if (!img) return json(res, 404, { error: 'Not found' });
    res.statusCode = 200;
    res.setHeader('Content-Type', img.type);
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.end(img.buffer);
  } catch (err) {
    console.error(err);
    json(res, 500, { error: 'Серверийн алдаа гарлаа.' });
  }
}
