import React, { useEffect, useState } from 'react';
import { CalendarDays, Check, Clock, MapPin, Users } from 'lucide-react';
import { fetchEvents, formatDate, isPast, registerForEvent, type PublicEvent } from '../lib/api';
import { PastEvents } from '../components/PastEvents';
import { EventIndex } from '../components/EventIndex';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  consent: boolean;
  website: string; // honeypot
}
const EMPTY: FormState = { fullName: '', phone: '', email: '', consent: false, website: '' };

const RegisterForm: React.FC<{ event: PublicEvent; onDone: () => void }> = ({ event, onDone }) => {
  const [f, setF] = useState<FormState>(EMPTY);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [ok, setOk] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setF((s) => ({ ...s, [k]: k === 'consent' ? e.target.checked : e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      await registerForEvent({ eventId: event.id, ...f });
      setOk(true);
      onDone();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  if (ok) {
    return (
      <div className="ev-ok" role="status">
        <span className="ev-ok-icon"><Check size={22} /></span>
        <div>
          <strong>Бүртгэл амжилттай!</strong>
          <p>{f.fullName}, таныг «{event.title}» арга хэмжээнд бүртгэлээ. Мэдээллийг {f.email} хаягаар эсвэл утсаар баталгаажуулна.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="ev-form" onSubmit={submit} noValidate>
      <label>
        Овог, нэр
        <input className="form-input" value={f.fullName} onChange={set('fullName')} placeholder="Бат-Эрдэнэ Болд" autoComplete="name" required />
      </label>
      <div className="ev-row">
        <label>
          Утасны дугаар
          <input className="form-input" value={f.phone} onChange={set('phone')} placeholder="+43 660 1234567" autoComplete="tel" inputMode="tel" required />
        </label>
        <label>
          И-мэйл
          <input className="form-input" type="email" value={f.email} onChange={set('email')} placeholder="name@example.com" autoComplete="email" required />
        </label>
      </div>
      {/* honeypot — hidden from people */}
      <input className="ev-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.website} onChange={set('website')} />
      <label className="ev-consent">
        <input type="checkbox" checked={f.consent} onChange={set('consent')} />
        <span>Миний нэр, утас, и-мэйлийг зөвхөн энэ арга хэмжээг зохион байгуулахад ашиглахыг зөвшөөрч байна.</span>
      </label>
      {error && <p className="ev-error" role="alert">{error}</p>}
      <button className="btn btn-dark" disabled={busy}>{busy ? 'Илгээж байна…' : 'Бүртгүүлэх'}</button>
    </form>
  );
};

export const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<PublicEvent[] | null>(null);
  const [loadError, setLoadError] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  const load = () =>
    fetchEvents()
      .then((e) => { setEvents(e); setLoadError(''); })
      .catch((err: Error) => setLoadError(err.message));

  useEffect(() => { load(); }, []);

  // open the form when arriving via /events#some-id
  useEffect(() => {
    if (events && window.location.hash) {
      const id = window.location.hash.slice(1);
      if (events.some((e) => e.id === id)) setOpenId(id);
    }
  }, [events]);

  const upcoming = (events || []).filter((e) => !isPast(e.date));
  const past = (events || []).filter((e) => isPast(e.date)).reverse();

  return (
    <div className="events-page">
      <section className="ep-hero">
        <div className="container">
          <span className="section-subtitle">Арга хэмжээ</span>
          <h1>Арга хэмжээнд бүртгүүлэх</h1>
          <p>Овог нэр, утас, и-мэйлээ үлдээгээд л бүртгэл дуусна. Бүртгэлийн мэдээллийг зохион байгуулагчид үзнэ.</p>
        </div>
      </section>

      <section className="ep-body">
        <div className="container">
          {events === null && !loadError && <p className="ep-note">Ачаалж байна…</p>}
          {loadError && <p className="ev-error" role="alert">{loadError}</p>}
          {events && upcoming.length === 0 && (
            <div className="ep-empty">
              <CalendarDays size={28} />
              <p>Одоогоор зарлагдсан арга хэмжээ алга. Шинэ арга хэмжээ нэмэгдэхэд энд харагдана.</p>
            </div>
          )}

          <ul className="ep-list">
            {upcoming.map((e) => {
              const open = openId === e.id;
              const canRegister = e.registrationOpen && !e.full;
              return (
                <li key={e.id} id={e.id} className="ep-card">
                  <div className="ep-main">
                    <div className="ep-date">
                      <b>{Number(e.date.split('-')[2])}</b>
                      <span>{e.date.slice(0, 4)} · {Number(e.date.split('-')[1])}-р сар</span>
                    </div>
                    <div className="ep-info">
                      <h2>{e.title}</h2>
                      <ul className="ep-meta">
                        <li><CalendarDays size={15} /> {formatDate(e.date)}</li>
                        {e.time && <li><Clock size={15} /> {e.time}</li>}
                        <li><MapPin size={15} /> {e.location}</li>
                        <li>
                          <Users size={15} /> {e.registered} бүртгүүлсэн{e.capacity > 0 ? ' / ' + e.capacity : ''}
                        </li>
                      </ul>
                      {e.description && <p>{e.description}</p>}
                    </div>
                    <div className="ep-cta">
                      {canRegister ? (
                        <button className={open ? 'btn btn-outline' : 'btn btn-dark'} onClick={() => setOpenId(open ? null : e.id)}>
                          {open ? 'Хаах' : 'Бүртгүүлэх'}
                        </button>
                      ) : (
                        <span className="ep-closed">{e.full ? 'Бүртгэл дүүрсэн' : 'Бүртгэл хаагдсан'}</span>
                      )}
                    </div>
                  </div>
                  {open && canRegister && (
                    <div className="ep-form-wrap">
                      <RegisterForm event={e} onDone={load} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="ep-archive">
            <span className="section-subtitle">Архив</span>
            <h2>Өмнөх арга хэмжээнүүд</h2>
            <p>AMOX-ийн зохион байгуулсан өмнөх арга хэмжээнүүдийн зургууд.</p>
            <PastEvents />
          </div>

          <div className="ep-archive" id="all-events">
            <span className="section-subtitle">Бүх арга хэмжээ</span>
            <h2>AMOX-ийн арга хэмжээнүүд, 2015–2026</h2>
            <p>Facebook дээр зарласан бүх арга хэмжээний постер, огноо, байршил.</p>
            <EventIndex />
          </div>

          {past.length > 0 && (
            <>
              <h3 className="ep-past-title">Болсон арга хэмжээнүүд</h3>
              <ul className="ep-past">
                {past.map((e) => (
                  <li key={e.id}><span>{formatDate(e.date)}</span> {e.title}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <style>{`
        .ep-hero { padding: calc(var(--nav-h) + 40px) 0 48px; background: var(--canvas-2); }
        .ep-hero h1 { font-size: clamp(2.2rem, 5vw, 3.6rem); margin: 6px 0 14px; }
        .ep-hero p { max-width: 560px; font-size: 1.08rem; }
        .ep-body { padding: 56px 0 120px; }
        .ep-note { color: var(--text-muted); }
        .ep-empty { display: flex; align-items: center; gap: 16px; padding: 28px; border: 1px dashed var(--border-strong); border-radius: 22px; color: var(--text-sub); }
        .ep-list { list-style: none; display: flex; flex-direction: column; gap: 16px; }
        .ep-card { background: #fff; border: 1px solid var(--line); border-radius: 26px; overflow: hidden; scroll-margin-top: 110px; }
        .ep-main { display: grid; grid-template-columns: 130px 1fr auto; gap: 28px; align-items: center; padding: 28px 30px; }
        .ep-date b { display: block; font-size: 3rem; font-weight: 700; letter-spacing: -0.05em; line-height: 1; color: var(--accent); }
        .ep-date span { display: block; margin-top: 6px; font-size: .78rem; font-weight: 600; color: var(--text-muted); }
        .ep-info h2 { font-size: 1.45rem; margin-bottom: 10px; }
        .ep-meta { list-style: none; display: flex; flex-wrap: wrap; gap: 6px 18px; margin-bottom: 10px; font-size: .88rem; color: var(--text-sub); }
        .ep-meta li { display: inline-flex; align-items: center; gap: 6px; }
        .ep-meta svg { color: var(--accent); }
        .ep-info p { font-size: .96rem; white-space: pre-line; }
        .ep-closed { font-size: .85rem; font-weight: 600; color: var(--text-muted); background: var(--canvas-2); padding: 9px 16px; border-radius: 999px; white-space: nowrap; }
        .ep-form-wrap { padding: 4px 30px 30px; border-top: 1px solid var(--line); background: var(--canvas-2); }
        .ev-form { display: flex; flex-direction: column; gap: 16px; max-width: 640px; padding-top: 24px; }
        .ev-form label { display: flex; flex-direction: column; gap: 6px; font-size: .86rem; font-weight: 600; color: var(--ink); }
        .ev-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .ev-consent { flex-direction: row !important; align-items: flex-start; gap: 10px !important; font-weight: 400 !important; color: var(--text-sub) !important; }
        .ev-consent input { margin-top: 4px; width: 17px; height: 17px; accent-color: var(--accent); flex-shrink: 0; }
        .ev-hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
        .ev-error { color: #B42318; background: #FEECEC; padding: 10px 14px; border-radius: 12px; font-size: .9rem; }
        .ev-form .btn { align-self: flex-start; }
        .ev-form .btn:disabled { opacity: .6; cursor: wait; }
        .ev-ok { display: flex; gap: 16px; align-items: flex-start; padding-top: 26px; }
        .ev-ok-icon { width: 44px; height: 44px; border-radius: 50%; background: var(--green); color: #fff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ev-ok p { font-size: .95rem; margin-top: 4px; }
        .ep-archive { margin-top: 88px; }
        .ep-archive h2 { font-size: clamp(1.8rem, 3.6vw, 2.6rem); margin: 4px 0 10px; }
        .ep-archive > p { max-width: 520px; margin-bottom: 40px; }
        .ep-past-title { margin: 56px 0 14px; font-size: 1.2rem; }
        .ep-past { list-style: none; display: flex; flex-direction: column; gap: 8px; color: var(--text-sub); font-size: .95rem; }
        .ep-past span { display: inline-block; min-width: 170px; color: var(--text-muted); }
        @media (max-width: 760px) {
          .ep-main { grid-template-columns: 1fr; gap: 16px; padding: 22px; }
          .ep-date { display: flex; align-items: baseline; gap: 12px; }
          .ep-date b { font-size: 2.4rem; }
          .ep-form-wrap { padding: 4px 22px 24px; }
          .ev-row { grid-template-columns: 1fr; }
          .ep-past span { display: block; }
        }
      `}</style>
    </div>
  );
};
