import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { OFFICIAL_CHANNELS } from '../data/associationData';
import { FacebookIcon, InstagramIcon, YoutubeIcon, SoundcloudIcon, GoogleDocIcon } from './ChannelIcons';

const STYLE: Record<string, { bg: string; tint: string }> = {
  'facebook-group': { bg: '#1877F2', tint: 'var(--tint-sky)' },
  instagram: { bg: '#D6286E', tint: '#FFE6F0' },
  youtube: { bg: '#E02D2D', tint: '#FFE8E6' },
  podcast: { bg: '#F26A1B', tint: 'var(--tint-peach)' },
  'study-video': { bg: '#3347FF', tint: 'var(--tint-lilac)' },
  'study-article': { bg: '#12926B', tint: 'var(--tint-mint)' }
};

const icon = (id: string) => {
  switch (id) {
    case 'facebook-group': return <FacebookIcon size={22} color="#fff" />;
    case 'instagram': return <InstagramIcon size={22} color="#fff" />;
    case 'youtube':
    case 'study-video': return <YoutubeIcon size={22} color="#fff" />;
    case 'podcast': return <SoundcloudIcon size={22} color="#fff" />;
    default: return <GoogleDocIcon size={22} color="#fff" />;
  }
};

export const OfficialChannelsSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="official-channels" className="oc">
      <div className="container">
        <div className="oc-head reveal">
          <span className="section-subtitle">Холбоо барих</span>
          <h2>Манай албан ёсны хаягууд</h2>
          <p>Мэдээ, зар, подкаст, видео, гарын авлага — AMOX-ийн албан ёсны хаягууд.</p>
        </div>

        <div className="oc-grid">
          {OFFICIAL_CHANNELS.map((c, i) => {
            const s = STYLE[c.id] ?? { bg: '#3347FF', tint: 'var(--tint-lilac)' };
            const isCopied = copiedId === c.id;
            return (
              <article key={c.id} className="oc-card reveal" style={{ ['--d' as string]: `${i * 60}ms`, ['--tint' as string]: s.tint }}>
                <div className="oc-top">
                  <span className="oc-icon" style={{ background: s.bg }}>{icon(c.id)}</span>
                  <span className="oc-badge">{c.badge}</span>
                </div>
                <h3>{c.title}</h3>
                {c.handle && <span className="oc-handle">{c.handle}</span>}
                <p>{c.description}</p>
                <div className="oc-actions">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="oc-open">
                    {c.actionText} <ArrowUpRight size={16} />
                  </a>
                  <button
                    type="button"
                    className={isCopied ? 'oc-copy done' : 'oc-copy'}
                    onClick={() => handleCopy(c.id, c.url)}
                    aria-label="Линк хуулах"
                    title="Линк хуулах"
                  >
                    {isCopied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .oc { padding: 112px 0 96px; }
        .oc-head { max-width: 560px; margin-bottom: 52px; }
        .oc-head h2 { font-size: clamp(2.1rem, 4.4vw, 3.2rem); margin-bottom: 14px; }
        .oc-head p { font-size: 1.05rem; }
        .oc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .oc-card { display: flex; flex-direction: column; padding: 28px; border-radius: 26px; background: var(--tint); transition: transform .3s ease, box-shadow .3s ease, opacity .8s ease; }
        .oc-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(12,12,15,.08); }
        .oc-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 36px; }
        .oc-icon { width: 46px; height: 46px; border-radius: 14px; display: flex; align-items: center; justify-content: center; }
        .oc-badge { font-size: .74rem; font-weight: 600; color: var(--ink); background: rgba(255,255,255,.75); padding: 5px 11px; border-radius: 999px; }
        .oc-card h3 { font-size: 1.2rem; line-height: 1.3; margin-bottom: 4px; }
        .oc-handle { font-size: .85rem; font-weight: 600; color: var(--text-sub); margin-bottom: 10px; }
        .oc-card p { font-size: .93rem; flex: 1; margin-bottom: 26px; color: #3f3f48; }
        .oc-actions { display: flex; gap: 8px; }
        .oc-open { flex: 1; display: inline-flex; align-items: center; justify-content: space-between; padding: 12px 18px; border-radius: 999px; background: var(--ink); color: #fff; text-decoration: none; font-weight: 600; font-size: .9rem; transition: background .2s; }
        .oc-open:hover { background: #2a2a33; }
        .oc-open svg { transition: transform .2s; } .oc-open:hover svg { transform: translate(2px,-2px); }
        .oc-copy { width: 46px; border: 0; border-radius: 999px; cursor: pointer; background: rgba(255,255,255,.75); color: var(--ink); display: flex; align-items: center; justify-content: center; transition: background .2s; }
        .oc-copy:hover { background: #fff; }
        .oc-copy.done { background: var(--green); color: #fff; }
        @media (max-width: 980px) { .oc-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 620px) { .oc { padding: 72px 0 64px; } .oc-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
};
