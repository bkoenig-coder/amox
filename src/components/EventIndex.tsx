import React, { useEffect, useState } from 'react';
import { CalendarDays, MapPin, X } from 'lucide-react';
import { ALL_EVENTS, type AmoxEvent } from '../data/allEvents';

const FILTERS: { id: 'all' | AmoxEvent['kind']; label: string }[] = [
  { id: 'all', label: 'Бүгд' },
  { id: 'sun', label: 'Нарны Баяр' },
  { id: 'student-day', label: 'Оюутны өдөрлөг' },
  { id: 'community', label: 'Бусад' }
];

export const EventIndex: React.FC = () => {
  const [filter, setFilter] = useState<'all' | AmoxEvent['kind']>('all');
  const [open, setOpen] = useState<AmoxEvent | null>(null);
  const events = ALL_EVENTS.filter((e) => filter === 'all' || e.kind === filter);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="ei">
      <div className="ei-filters" role="tablist" aria-label="Арга хэмжээний төрөл">
        {FILTERS.map((f) => (
          <button key={f.id} role="tab" aria-selected={filter === f.id} className={filter === f.id ? 'on' : ''} onClick={() => setFilter(f.id)}>
            {f.label}
          </button>
        ))}
      </div>

      <ul className="ei-grid">
        {events.map((e) => (
          <li key={e.id} className="ei-card">
            {e.cover ? (
              <button className="ei-cover" onClick={() => setOpen(e)} aria-label={'Постерыг томоор харах: ' + e.title}>
                <img src={e.cover} alt={e.title} loading="lazy" />
              </button>
            ) : (
              <div className="ei-cover ei-nocover" aria-hidden="true"><CalendarDays size={30} /></div>
            )}
            <div className="ei-body">
              <span className="ei-date">{e.date}</span>
              <h3>{e.title}</h3>
              {e.place && <p><MapPin size={14} /> {e.place}</p>}
            </div>
          </li>
        ))}
      </ul>

      {open && open.cover && (
        <div className="ei-lightbox" role="dialog" aria-label={open.title} onClick={() => setOpen(null)}>
          <button className="ei-close" aria-label="Хаах" onClick={() => setOpen(null)}><X size={22} /></button>
          <img src={open.cover} alt={open.title} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style>{`
        .ei-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
        .ei-filters button { border: 1px solid var(--border-strong); background: transparent; color: var(--text-sub); font: inherit; font-size: .9rem; font-weight: 600; padding: 8px 18px; border-radius: 999px; cursor: pointer; transition: background .2s, color .2s, border-color .2s; }
        .ei-filters button:hover { border-color: var(--ink); color: var(--ink); }
        .ei-filters button.on { background: var(--ink); border-color: var(--ink); color: #fff; }
        .ei-grid { list-style: none; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .ei-card { background: #fff; border: 1px solid var(--line); border-radius: 22px; overflow: hidden; display: flex; flex-direction: column; transition: transform .3s ease, box-shadow .3s ease; }
        .ei-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(12,12,15,.08); }
        .ei-cover { display: block; width: 100%; aspect-ratio: 16 / 10; padding: 0; border: 0; background: #F1F1EE; cursor: zoom-in; }
        .ei-cover img { width: 100%; height: 100%; object-fit: contain; display: block; }
        .ei-nocover { display: flex; align-items: center; justify-content: center; color: var(--text-light); cursor: default; }
        .ei-body { padding: 18px 20px 22px; display: flex; flex-direction: column; gap: 6px; }
        .ei-date { font-size: .8rem; font-weight: 700; color: var(--accent); letter-spacing: .02em; }
        .ei-body h3 { font-size: 1.05rem; line-height: 1.3; }
        .ei-body p { display: flex; gap: 6px; align-items: flex-start; font-size: .86rem; color: var(--text-muted); }
        .ei-body p svg { flex-shrink: 0; margin-top: 3px; }
        .ei-lightbox { position: fixed; inset: 0; z-index: 10000; background: rgba(8,8,12,.92); display: flex; align-items: center; justify-content: center; padding: 28px; cursor: zoom-out; }
        .ei-lightbox img { max-width: 100%; max-height: 100%; border-radius: 12px; cursor: default; }
        .ei-close { position: absolute; top: 18px; right: 18px; width: 44px; height: 44px; border-radius: 50%; border: 0; background: rgba(255,255,255,.14); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        @media (max-width: 960px) { .ei-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .ei-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
};
