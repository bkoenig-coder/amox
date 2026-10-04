import { countRegistrations, json, listEvents } from './_lib/core.js';

// Public: list events with how many people have registered (no personal data).
export default async function handler(req, res) {
  if (req.method !== 'GET') return json(res, 405, { error: 'Method not allowed' });
  try {
    const events = await listEvents();
    const out = await Promise.all(
      events.map(async (e) => {
        const registered = await countRegistrations(e.id);
        return {
          id: e.id,
          title: e.title,
          date: e.date,
          time: e.time,
          location: e.location,
          description: e.description,
          capacity: e.capacity,
          registrationOpen: e.registrationOpen,
          registered,
          full: e.capacity > 0 && registered >= e.capacity
        };
      })
    );
    json(res, 200, { events: out });
  } catch (err) {
    console.error(err);
    json(res, 500, { error: 'Серверийн алдаа гарлаа.' });
  }
}
