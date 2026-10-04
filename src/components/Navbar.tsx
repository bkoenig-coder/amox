import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
}

const LINKS = [
  { to: '/about', label: 'Бидний тухай' },
  { to: '/events', label: 'Арга хэмжээ' },
  { to: '/guide', label: 'Хөтөч' },
  { to: '/housing', label: 'Байр' },
  { to: '/visa-insurance', label: 'Виз & Даатгал' },
  { to: '/sun-festival', label: 'Нарны Баяр' }
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="nav">
      <div className="container">
        <div className={`nav-pill ${scrolled ? 'is-scrolled' : ''}`}>
          <Link to="/" className="nav-brand" aria-label="AMOX — нүүр хуудас">
            <img src="/assets/logo.png" alt="" width={36} height={36} />
            <span>AMOX</span>
          </Link>

          <nav className="nav-links" aria-label="Үндсэн цэс">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="nav-icon-btn" onClick={onOpenSearch} aria-label="Хайх">
              <Search size={17} />
            </button>
            <Link to="/about#mentor" className="btn btn-dark nav-cta">Нэгдэх</Link>
            <button
              className="nav-icon-btn nav-burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Цэс хаах' : 'Цэс нээх'}
              aria-expanded={open}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="nav-drawer">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/about#mentor" className="btn btn-dark" style={{ marginTop: 10 }}>Холбоонд нэгдэх</Link>
          </div>
        )}
      </div>

      <style>{`
        .nav { position: fixed; top: 14px; left: 0; right: 0; z-index: 1000; pointer-events: none; }
        .nav .container { pointer-events: none; }
        .nav-pill, .nav-drawer { pointer-events: auto; }
        .nav-pill { display: flex; align-items: center; justify-content: space-between; gap: 20px; height: 64px; padding: 0 12px 0 18px;
          background: rgba(255,255,255,.78); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid var(--line); border-radius: 999px; transition: box-shadow .3s, background .3s; }
        .nav-pill.is-scrolled { background: rgba(255,255,255,.92); box-shadow: 0 10px 34px rgba(12,12,15,.09); }
        .nav-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--ink); font-weight: 800; font-size: 1.15rem; letter-spacing: -0.02em; }
        .nav-brand img { border-radius: 50%; }
        .nav-links { display: none; align-items: center; gap: 2px; }
        .nav-links a, .nav-drawer a:not(.btn) { text-decoration: none; font-weight: 500; font-size: .93rem; color: var(--text-sub); padding: 9px 15px; border-radius: 999px; white-space: nowrap; transition: background .2s, color .2s; }
        .nav-links a:hover { background: var(--canvas-2); color: var(--ink); }
        .nav-links a.active { background: var(--accent-soft); color: var(--accent); font-weight: 600; }
        .nav-actions { display: flex; align-items: center; gap: 8px; }
        .nav-icon-btn { width: 40px; height: 40px; border-radius: 50%; border: 0; background: transparent; color: var(--ink); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background .2s; }
        .nav-icon-btn:hover { background: var(--canvas-2); }
        .nav-cta { display: none !important; padding: 10px 20px !important; font-size: .9rem !important; }
        .nav-drawer { margin-top: 8px; display: flex; flex-direction: column; padding: 12px; background: rgba(255,255,255,.96); backdrop-filter: blur(18px); border: 1px solid var(--line); border-radius: 24px; box-shadow: 0 20px 50px rgba(12,12,15,.12); max-height: calc(100vh - 110px); overflow-y: auto; }
        .nav-drawer a:not(.btn) { font-size: 1.02rem; padding: 14px 16px; border-radius: 14px; }
        .nav-drawer a.active { background: var(--accent-soft); color: var(--accent); font-weight: 600; }
        @media (min-width: 1120px) {
          .nav-links { display: flex; }
          .nav-cta { display: inline-flex !important; }
          .nav-burger, .nav-drawer { display: none !important; }
        }
      `}</style>
    </header>
  );
};
