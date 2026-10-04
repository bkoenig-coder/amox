import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="foot">
      <div className="container foot-card">
        <div className="foot-top">
          <div className="foot-brand">
            <Link to="/" className="foot-logo">
              <img src="/assets/logo.png" alt="" width={44} height={44} />
              <span>AMOX</span>
            </Link>
            <p>Австри дахь Монголын Оюутны Холбоо. Оюутнуудын өөрсдийнх нь холбоо — 2007 оноос.</p>
            <a className="foot-mail" href="mailto:amox.org@gmail.com">amox.org@gmail.com</a>
          </div>

          <div className="foot-col">
            <h5>Оюутанд</h5>
            <Link to="/guide">Оюутны хөтөч</Link>
            <Link to="/housing">Байр хайгч</Link>
            <Link to="/visa-insurance">Виз &amp; Даатгал</Link>
            <Link to="/about#mentor">Ментор</Link>
          </div>

          <div className="foot-col">
            <h5>Холбоо</h5>
            <Link to="/about">Бидний тухай</Link>
            <Link to="/events">Арга хэмжээ</Link>
            <Link to="/sun-festival">Нарны Баяр</Link>
            <Link to="/about#board">Багт нэгдэх</Link>
            <Link to="/impressum">Impressum</Link>
          </div>

          <div className="foot-col">
            <h5>Дага</h5>
            <a href="https://www.facebook.com/groups/AmoxAustriaGroup" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/amox_at/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/channel/UCx2WabubQ10shpkeOeLUpbQ/videos" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://soundcloud.com/amox-podcast" target="_blank" rel="noopener noreferrer">Подкаст</a>
          </div>
        </div>

        <div className="foot-word" aria-hidden="true">AMOX</div>

        <div className="foot-bottom">
          <span>© 2026 AMOX · Verein der mongolischen Studenten in Österreich · ZVR-Zahl 107178700</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Дээш буцах">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .foot { padding: 0 0 20px; }
        .foot-card { background: var(--night); color: #fff; border-radius: 32px; padding: 64px 56px 28px !important; overflow: hidden; max-width: 1240px; position: relative; }
        .foot-top { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 48px; position: relative; z-index: 2; }
        .foot-logo { display: inline-flex; align-items: center; gap: 12px; text-decoration: none; color: #fff; font-weight: 800; font-size: 1.4rem; letter-spacing: -0.02em; }
        .foot-logo img { border-radius: 50%; background: #fff; }
        .foot-brand p { color: rgba(255,255,255,.65); margin: 18px 0; max-width: 320px; font-size: .95rem; }
        .foot-mail { color: #fff; font-weight: 500; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,.4); padding-bottom: 2px; }
        .foot-mail:hover { border-color: #fff; }
        .foot-col { display: flex; flex-direction: column; gap: 12px; }
        .foot-col h5 { font-size: .8rem; color: rgba(255,255,255,.45); font-weight: 500; margin-bottom: 6px; letter-spacing: 0; }
        .foot-col a { color: rgba(255,255,255,.88); text-decoration: none; font-size: .95rem; width: fit-content; transition: color .2s, transform .2s; }
        .foot-col a:hover { color: #fff; transform: translateX(3px); }
        .foot-word { font-size: clamp(5rem, 22vw, 17rem); font-weight: 800; letter-spacing: -0.06em; line-height: .8; margin: 56px 0 0 -0.04em; background: linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,0) 90%); -webkit-background-clip: text; background-clip: text; color: transparent; user-select: none; }
        .foot-bottom { position: relative; z-index: 2; display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-top: -8px; padding-top: 22px; border-top: 1px solid rgba(255,255,255,.12); font-size: .78rem; color: rgba(255,255,255,.5); }
        .foot-bottom button { flex-shrink: 0; width: 38px; height: 38px; border-radius: 50%; border: 1px solid rgba(255,255,255,.25); background: transparent; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background .2s, color .2s; }
        .foot-bottom button:hover { background: #fff; color: var(--night); }
        @media (max-width: 820px) { .foot-card { padding: 44px 26px 24px !important; border-radius: 26px; } .foot-top { grid-template-columns: 1fr 1fr; gap: 36px; } .foot-brand { grid-column: 1 / -1; } }
      `}</style>
    </footer>
  );
};
