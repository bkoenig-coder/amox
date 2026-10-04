import React, { useCallback, useEffect, useState } from 'react';
import { Download, LogOut, Pencil, Plus, Trash2, Users } from 'lucide-react';
import {
  admin, formatDate, getAdminPassword, setAdminPassword,
  type AdminEvent, type Registration
} from '../lib/api';

const EMPTY: AdminEvent = {
  title: '', date: '', time: '', location: '', description: '', capacity: 0, registrationOpen: true
};

// Prefix cells that spreadsheets would treat as formulas
const csvCell = (v: string) => {
  const safe = /^[=+\-@\t\r]/.test(v) ? "'" + v : v;
  return '"' + safe.replace(/"/g, '""') + '"';
};

export const AdminPage: React.FC = () => {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');
  const [loginError, setLoginError] = useState('');
  const [storage, setStorage] = useState('');
  const [events, setEvents] = useState<AdminEvent[]>([]);
  const [form, setForm] = useState<AdminEvent>(EMPTY);
  const [formError, setFormError] = useState('');
  const [busy, setBusy] = useState(false);
  const [viewId, setViewId] = useState<string | null>(null);
  const [regs, setRegs] = useState<Registration[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    document.title = 'Admin — AMOX';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  const loadEvents = useCallback(async () => {
    const r = await admin<{ events: AdminEvent[] }>('events');
    setEvents(r.events);
  }, []);

  // restore an existing session
  useEffect(() => {
    if (!getAdminPassword()) return;
    admin<{ storage: string }>('login')
      .then((r) => { setAuthed(true); setStorage(r.storage); return loadEvents(); })
      .catch(() => setAdminPassword(''));
  }, [loadEvents]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const r = await admin<{ storage: string }>('login', {}, pw);
      setAdminPassword(pw);
      setStorage(r.storage);
      setAuthed(true);
      setPw('');
      await loadEvents();
    } catch (err) {
      setLoginError((err as Error).message);
    }
  };

  const logout = () => {
    setAdminPassword('');
    setAuthed(false);
    setEvents([]);
    setViewId(null);
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setFormError('');
    try {
      await admin('saveEvent', { event: form });
      setForm(EMPTY);
      await loadEvents();
    } catch (err) {
      setFormError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const remove = async (ev: AdminEvent) => {
    if (!ev.id) return;
    if (!window.confirm('«' + ev.title + '» арга хэмжээ болон бүх бүртгэлийг устгах уу?')) return;
    await admin('deleteEvent', { id: ev.id });
    if (viewId === ev.id) setViewId(null);
    await loadEvents();
  };

  const showRegs = async (id: string) => {
    if (viewId === id) { setViewId(null); return; }
    const r = await admin<{ registrations: Registration[] }>('registrations', { eventId: id });
    setRegs(r.registrations);
    setCounts((c) => ({ ...c, [id]: r.registrations.length }));
    setViewId(id);
  };

  const delReg = async (key: string) => {
    if (!viewId || !window.confirm('Энэ бүртгэлийг устгах уу?')) return;
    await admin('deleteRegistration', { eventId: viewId, key });
    setRegs((rs) => rs.filter((r) => r.key !== key));
    setCounts((c) => ({ ...c, [viewId]: Math.max(0, (c[viewId] || 1) - 1) }));
  };

  const exportCsv = (ev: AdminEvent) => {
    const rows = [['Овог нэр', 'Утас', 'И-мэйл', 'Бүртгүүлсэн огноо']].concat(
      regs.map((r) => [r.fullName, r.phone, r.email, r.createdAt])
    );
    const csv = '﻿' + rows.map((r) => r.map(csvCell).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'registrations-' + (ev.id || 'event') + '.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const field = (k: keyof AdminEvent) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: k === 'capacity' ? Number(e.target.value) || 0 : e.target.value }));

  if (!authed) {
    return (
      <div className="adm-wrap">
        <form className="adm-login" onSubmit={login}>
          <h1>Админ</h1>
          <p>Арга хэмжээ нэмэх, бүртгэлийг харахын тулд нууц үгээ оруулна уу.</p>
          <input className="form-input" type="password" placeholder="Нууц үг" value={pw} onChange={(e) => setPw(e.target.value)} autoFocus />
          {loginError && <p className="adm-error" role="alert">{loginError}</p>}
          <button className="btn btn-dark">Нэвтрэх</button>
        </form>
        <AdminStyles />
      </div>
    );
  }

  const viewing = events.find((e) => e.id === viewId);

  return (
    <div className="adm-wrap">
      <div className="container adm">
        <header className="adm-head">
          <div>
            <h1>Арга хэмжээний админ</h1>
            <span className="adm-store">Хадгалалт: {storage}</span>
          </div>
          <button className="btn btn-outline" onClick={logout}><LogOut size={15} /> Гарах</button>
        </header>

        <section className="adm-card">
          <h2>{form.id ? 'Арга хэмжээг засах' : 'Шинэ арга хэмжээ нэмэх'}</h2>
          <form onSubmit={save} className="adm-form">
            <label>Гарчиг<input className="form-input" value={form.title} onChange={field('title')} placeholder="AMOX Students Info Day 2026" required /></label>
            <div className="adm-row">
              <label>Огноо<input className="form-input" type="date" value={form.date} onChange={field('date')} required /></label>
              <label>Цаг (заавал биш)<input className="form-input" type="time" value={form.time} onChange={field('time')} /></label>
              <label>Хүний тоо (0 = хязгааргүй)<input className="form-input" type="number" min={0} value={form.capacity} onChange={field('capacity')} /></label>
            </div>
            <label>Байршил<input className="form-input" value={form.location} onChange={field('location')} placeholder="Вена, Uni Wien" required /></label>
            <label>Тайлбар<textarea className="form-textarea" rows={4} value={form.description} onChange={field('description')} placeholder="Арга хэмжээний товч тайлбар…" /></label>
            <label className="adm-check">
              <input type="checkbox" checked={form.registrationOpen} onChange={(e) => setForm((f) => ({ ...f, registrationOpen: e.target.checked }))} />
              Бүртгэл нээлттэй
            </label>
            {formError && <p className="adm-error" role="alert">{formError}</p>}
            <div className="adm-actions">
              <button className="btn btn-dark" disabled={busy}><Plus size={15} /> {form.id ? 'Хадгалах' : 'Нэмэх'}</button>
              {form.id && <button type="button" className="btn btn-outline" onClick={() => setForm(EMPTY)}>Болих</button>}
            </div>
          </form>
        </section>

        <section className="adm-card">
          <h2>Арга хэмжээнүүд ({events.length})</h2>
          {events.length === 0 && <p className="adm-muted">Одоогоор арга хэмжээ алга. Дээрх маягтаар нэмнэ үү.</p>}
          <ul className="adm-list">
            {events.map((ev) => (
              <li key={ev.id}>
                <div className="adm-li-main">
                  <strong>{ev.title}</strong>
                  <span>{formatDate(ev.date)}{ev.time ? ' · ' + ev.time : ''} · {ev.location}</span>
                  <span className="adm-muted">
                    {ev.registrationOpen ? 'Бүртгэл нээлттэй' : 'Бүртгэл хаалттай'}
                    {ev.capacity > 0 ? ' · хязгаар ' + ev.capacity : ''}
                    {ev.id && counts[ev.id] !== undefined ? ' · ' + counts[ev.id] + ' бүртгэл' : ''}
                  </span>
                </div>
                <div className="adm-li-actions">
                  <button className="btn btn-outline" onClick={() => ev.id && showRegs(ev.id)}><Users size={15} /> Бүртгэл</button>
                  <button className="btn btn-outline" onClick={() => { setForm(ev); window.scrollTo({ top: 0, behavior: 'smooth' }); }}><Pencil size={15} /> Засах</button>
                  <button className="btn btn-outline adm-danger" onClick={() => remove(ev)}><Trash2 size={15} /> Устгах</button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {viewing && (
          <section className="adm-card">
            <div className="adm-reg-head">
              <h2>«{viewing.title}» — бүртгэлүүд ({regs.length})</h2>
              {regs.length > 0 && <button className="btn btn-dark" onClick={() => exportCsv(viewing)}><Download size={15} /> CSV татах</button>}
            </div>
            {regs.length === 0 ? (
              <p className="adm-muted">Одоогоор бүртгүүлсэн хүн алга.</p>
            ) : (
              <div className="adm-table-wrap">
                <table className="adm-table">
                  <thead><tr><th>#</th><th>Овог нэр</th><th>Утас</th><th>И-мэйл</th><th>Огноо</th><th /></tr></thead>
                  <tbody>
                    {regs.map((r, i) => (
                      <tr key={r.key}>
                        <td>{i + 1}</td>
                        <td>{r.fullName}</td>
                        <td>{r.phone}</td>
                        <td>{r.email}</td>
                        <td>{r.createdAt.slice(0, 16).replace('T', ' ')}</td>
                        <td><button className="adm-icon" onClick={() => delReg(r.key)} aria-label="Устгах"><Trash2 size={15} /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </div>
      <AdminStyles />
    </div>
  );
};

const AdminStyles: React.FC = () => (
  <style>{`
    .adm-wrap { min-height: 100vh; padding: calc(var(--nav-h) + 30px) 0 100px; background: var(--canvas-2); }
    .adm-login { max-width: 400px; margin: 60px auto; background: #fff; border: 1px solid var(--line); border-radius: 26px; padding: 36px; display: flex; flex-direction: column; gap: 14px; }
    .adm-login h1 { font-size: 1.8rem; }
    .adm { display: flex; flex-direction: column; gap: 22px; max-width: 980px; }
    .adm-head { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
    .adm-head h1 { font-size: clamp(1.6rem, 3vw, 2.2rem); }
    .adm-store { font-size: .8rem; color: var(--text-muted); }
    .adm-card { background: #fff; border: 1px solid var(--line); border-radius: 26px; padding: 28px; }
    .adm-card h2 { font-size: 1.25rem; margin-bottom: 18px; }
    .adm-form { display: flex; flex-direction: column; gap: 16px; }
    .adm-form label { display: flex; flex-direction: column; gap: 6px; font-size: .85rem; font-weight: 600; }
    .adm-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
    .adm-check { flex-direction: row !important; align-items: center; gap: 10px !important; }
    .adm-check input { width: 17px; height: 17px; accent-color: var(--accent); }
    .adm-actions { display: flex; gap: 10px; }
    .adm-error { color: #B42318; background: #FEECEC; padding: 10px 14px; border-radius: 12px; font-size: .9rem; }
    .adm-muted { color: var(--text-muted); font-size: .88rem; }
    .adm-list { list-style: none; display: flex; flex-direction: column; }
    .adm-list li { display: flex; justify-content: space-between; gap: 16px; align-items: center; padding: 18px 0; border-top: 1px solid var(--line); flex-wrap: wrap; }
    .adm-list li:first-child { border-top: 0; }
    .adm-li-main { display: flex; flex-direction: column; gap: 3px; font-size: .92rem; }
    .adm-li-main strong { font-size: 1.02rem; }
    .adm-li-actions { display: flex; gap: 8px; flex-wrap: wrap; }
    .adm .btn { padding: 9px 16px; font-size: .86rem; }
    .adm-danger { color: #B42318 !important; border-color: #F2C2BE !important; }
    .adm-danger:hover { background: #FEECEC !important; color: #B42318 !important; }
    .adm-reg-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 8px; }
    .adm-reg-head h2 { margin-bottom: 0; }
    .adm-table-wrap { overflow-x: auto; margin-top: 14px; }
    .adm-table { width: 100%; border-collapse: collapse; font-size: .9rem; }
    .adm-table th { text-align: left; font-size: .75rem; color: var(--text-muted); font-weight: 600; padding: 8px 12px; border-bottom: 1px solid var(--line); }
    .adm-table td { padding: 11px 12px; border-bottom: 1px solid var(--line); white-space: nowrap; }
    .adm-icon { border: 0; background: transparent; cursor: pointer; color: var(--text-muted); padding: 6px; border-radius: 8px; }
    .adm-icon:hover { background: #FEECEC; color: #B42318; }
    @media (max-width: 700px) { .adm-row { grid-template-columns: 1fr; } .adm-card { padding: 20px; } }
  `}</style>
);
