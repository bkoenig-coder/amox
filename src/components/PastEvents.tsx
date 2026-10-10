import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { PAST_EVENTS, type PastEvent } from '../data/pastEvents';

interface PastEventsProps {
  kind?: PastEvent['kind'];
}

export const PastEvents: React.FC<PastEventsProps> = ({ kind }) => {
  const [open, setOpen] = useState<{ src: string; alt: string } | null>(null);
  const events = PAST_EVENTS.filter((e) => !kind || e.kind === kind);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="pe">
      {events.map((ev) => (
        <article key={ev.id} className="pe-event">
          <header>
            <h3>{ev.title}</h3>
            <span>{ev.date}{ev.place ? ' · ' + ev.place : ''}</span>
          </header>
          <div className={'pe-mosaic pe-n' + ev.photos.length + (ev.poster ? ' pe-poster' : '')}>
            {ev.photos.map((ph, i) => (
              <button key={ph.src} className={'pe-ph pe-ph-' + i} onClick={() => setOpen(ph)} aria-label={'Томоор харах: ' + ph.alt}>
                <img src={ph.src} alt={ph.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </article>
      ))}

      {open && (
        <div className="pe-lightbox" role="dialog" aria-label={open.alt} onClick={() => setOpen(null)}>
          <button className="pe-close" aria-label="Хаах" onClick={() => setOpen(null)}><X size={22} /></button>
          <img src={open.src} alt={open.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style>{`
        .pe { display: flex; flex-direction: column; gap: 56px; }
        .pe-event header { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; padding-bottom: 14px; margin-bottom: 18px; border-bottom: 1px solid var(--border-strong); }
        .pe-event h3 { font-size: clamp(1.3rem, 2.4vw, 1.7rem); }
        .pe-event header span { font-size: .9rem; font-weight: 600; color: var(--accent); text-align: right; }
        .pe-mosaic { display: grid; gap: 12px; height: clamp(260px, 38vw, 440px); }
        .pe-n3 { grid-template-columns: 1.6fr 1fr; grid-template-rows: 1fr 1fr; }
        .pe-n3 .pe-ph-0 { grid-row: 1 / span 2; }
        .pe-n2 { grid-template-columns: 1fr 1fr; }
        .pe-poster { height: auto; grid-template-rows: auto; align-items: start; }
        .pe-poster .pe-ph img { height: auto; display: block; }
        .pe-ph { padding: 0; border: 0; border-radius: 20px; overflow: hidden; cursor: zoom-in; background: #ECECE8; min-height: 0; }
        .pe-ph img { width: 100%; height: 100%; object-fit: cover; transition: transform .7s ease; }
        .pe-ph:hover img { transform: scale(1.05); }
        .pe-lightbox { position: fixed; inset: 0; z-index: 10000; background: rgba(8,8,12,.92); display: flex; align-items: center; justify-content: center; padding: 28px; cursor: zoom-out; }
        .pe-lightbox img { max-width: 100%; max-height: 100%; border-radius: 12px; cursor: default; }
        .pe-close { position: absolute; top: 18px; right: 18px; width: 44px; height: 44px; border-radius: 50%; border: 0; background: rgba(255,255,255,.14); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .pe-close:hover { background: rgba(255,255,255,.28); }
        @media (max-width: 640px) {
          .pe-mosaic { height: auto; }
          .pe-n3 { grid-template-columns: 1fr 1fr; grid-template-rows: 200px 130px; }
          .pe-n3 .pe-ph-0 { grid-column: 1 / -1; grid-row: 1; }
          .pe-n3 .pe-ph-1, .pe-n3 .pe-ph-2 { grid-row: 2; }
          .pe-n2 { grid-template-rows: 150px; }
          .pe-ph { border-radius: 14px; }
        }
      `}</style>
    </div>
  );
};
