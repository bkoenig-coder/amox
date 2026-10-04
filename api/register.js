import { clientIp, json, rateLimited, register } from './_lib/core.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  try {
    const body = req.body && typeof req.body === 'object' ? req.body : {};
    // honeypot: real people never fill this hidden field
    if (body.website) return json(res, 200, { ok: true });
    if (rateLimited('reg:' + clientIp(req), 60, 60 * 60 * 1000)) {
      return json(res, 429, { error: 'Хэт олон оролдлого. Хэсэг хүлээгээд дахин оролдоно уу.' });
    }
    const result = await register(body);
    if (result.error) return json(res, result.status, { error: result.error });
    json(res, 200, { ok: true });
  } catch (err) {
    console.error(err);
    json(res, 500, { error: 'Серверийн алдаа гарлаа. Дахин оролдоно уу.' });
  }
}
