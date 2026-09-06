import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Globe, ArrowUp, Mail, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const partners = [
    { name: 'Uni Wien', type: 'Их Сургууль', icon: '🏛️' },
    { name: 'TU Wien', type: 'Техникийн Их Сургууль', icon: '⚙️' },
    { name: 'WU Wien', type: 'Эдийн Засгийн Их Сургууль', icon: '📈' },
    { name: 'OeAD Housing', type: 'Орон Сууц & Солилцоо', icon: '🏠' },
    { name: 'STUWO', type: 'Оюутны Байр', icon: '🏢' },
    { name: 'ÖGK Austria', type: 'Даатгал', icon: '🛡️' },
    { name: 'Монгол ЭСЯ', type: 'Вена Хот', icon: '🇲🇳' }
  ];

  return (
    <footer className="amox-footer">
      <div className="container">
        {/* National & Academic Partners Showcase */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '3px 12px',
              borderRadius: 'var(--radius-pill)',
              background: '#EFF6FF',
              color: 'var(--aiesec-blue)',
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 10
            }}
          >
            <span>🇦🇹 National &amp; Academic Network</span>
          </div>

          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
              fontWeight: 800,
              color: 'var(--text-main)',
              marginBottom: 14
            }}
          >
            Хамтран ажилладаг их дээд сургуулиуд &amp; Түншүүд
          </h4>

          {/* Parallel Partner Badges */}
          <div className="partner-parallel-grid">
            {partners.map((p, idx) => (
              <div key={idx} className="partner-parallel-card">
                <span style={{ fontSize: '1rem' }}>{p.icon}</span>
                <div style={{ textAlign: 'left', minWidth: 0 }}>
                  <strong style={{ display: 'block', fontSize: '0.74rem', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</strong>
                  <span style={{ fontSize: '0.64rem', color: 'var(--text-muted)', display: 'block' }}>{p.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Giant Unending Moving AMOX Marquee Banner */}
        <div className="footer-amox-marquee-wrap" aria-hidden="true">
          <div className="footer-amox-marquee-track">
            <span>AMOX</span>
            <span className="marquee-dot">•</span>
            <span className="marquee-outline">SEIT 2007</span>
            <span className="marquee-dot">•</span>
            <span>YOUTH LEADERSHIP</span>
            <span className="marquee-dot">•</span>
            <span className="marquee-outline">AMOX</span>
            <span className="marquee-dot">•</span>
            <span>AUSTRIA</span>
            <span className="marquee-dot">•</span>
            <span>AMOX</span>
            <span className="marquee-dot">•</span>
            <span className="marquee-outline">SEIT 2007</span>
            <span className="marquee-dot">•</span>
            <span>YOUTH LEADERSHIP</span>
            <span className="marquee-dot">•</span>
            <span className="marquee-outline">AMOX</span>
            <span className="marquee-dot">•</span>
            <span>AUSTRIA</span>
            <span className="marquee-dot">•</span>
          </div>
        </div>

        {/* Top Brand Banner Row */}
        <div className="footer-brand-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/assets/logo.png" alt="AMOX Logo" style={{ height: 34, width: 'auto' }} />
            <div>
              <strong style={{ fontSize: '1.05rem', color: 'var(--aiesec-blue)', display: 'block', fontWeight: 900, letterSpacing: '0.02em' }}>
                AMOX
              </strong>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Seit 2007 &bull; 19 дэх жилдээ
              </span>
            </div>
          </div>

          <p className="footer-brand-desc">
            <strong style={{ color: 'var(--aiesec-blue)', display: 'block', marginBottom: 4 }}>
              🤝 Хуваалцъя &bull; 💡 Дэмжье &bull; 🚀 Хамтдаа хөгжье (SSG)
            </strong>
            Бид эв нэгдлийг эрхэмлэн, мэдлэгийг түгээж, оюутан залуусаа дэмжин хамтдаа хөгжинө.
          </p>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <a
              href="https://www.facebook.com/groups/AmoxAustriaGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-btn"
              title="Австри дахь Монгол Оюутны Холбоо албан ёсны групп"
            >
              <Globe size={13} color="#1877F2" />
              <span>FB Групп</span>
            </a>
            <a
              href="https://www.instagram.com/amox_at/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-btn"
            >
              <Camera size={13} color="#E1306C" />
              <span>@amox_at</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCx2WabubQ10shpkeOeLUpbQ/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-btn"
            >
              <span style={{ color: '#FF0000', fontSize: '11px', fontWeight: 900 }}>▶</span>
              <span>YouTube</span>
            </a>
            <a
              href="https://soundcloud.com/amox-podcast"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-btn"
            >
              <span style={{ color: '#FF5500', fontSize: '11px' }}>🎙️</span>
              <span>Подкаст</span>
            </a>
          </div>
        </div>

        {/* 3 PARALLEL COLUMNS: Холбоо барих | Хөтөлбөрүүд | Оюутны Дэмжлэг */}
        <div className="footer-three-parallel-grid">
          {/* Column 1: Холбоо барих */}
          <div className="footer-col">
            <h5 className="footer-col-title">Холбоо барих</h5>
            <div className="footer-col-content">
              <div className="footer-contact-item">
                <MapPin size={13} color="var(--aiesec-orange)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>Вена хот, Австри</span>
              </div>
              <a href="mailto:contact@amox.at" className="footer-email-link">
                <Mail size={13} color="var(--aiesec-blue)" style={{ flexShrink: 0 }} />
                <span>contact@amox.at</span>
              </a>
              <div className="footer-contact-item" style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>
                <ShieldCheck size={13} color="var(--aiesec-teal)" style={{ flexShrink: 0 }} />
                <span>ZVR-Zahl: <strong>107178700</strong></span>
              </div>
              <Link to="/impressum" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--aiesec-blue)', fontSize: '0.72rem', fontWeight: 600, textDecoration: 'none', marginTop: 2 }}>
                <span>Хууль зүйн бүртгэл &amp; Impressum →</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Хөтөлбөрүүд */}
          <div className="footer-col">
            <h5 className="footer-col-title">Хөтөлбөрүүд</h5>
            <ul className="footer-links-list">
              <li><Link to="/about#mentor">🎓 Info Day (9-р сар)</Link></li>
              <li><Link to="/sun-festival">🏆 Sun Festival 2027</Link></li>
              <li><Link to="/guide">📖 Оюутны Хөтөч</Link></li>
              <li><Link to="/housing">🏠 Байр Хайгч</Link></li>
              <li><Link to="/visa-insurance">🛂 MA35 Виз Төв</Link></li>
              <li><Link to="/about#official-channels">🌐 Албан Ёсны Хаягууд</Link></li>
            </ul>
          </div>

          {/* Column 3: Оюутны Дэмжлэг & Эх Сурвалж */}
          <div className="footer-col">
            <h5 className="footer-col-title">Оюутны Дэмжлэг &amp; Нийтлэл</h5>
            <ul className="footer-links-list">
              <li><Link to="/about#mentor">👥 Ментор Зөвлөгөө</Link></li>
              <li><a href="https://docs.google.com/document/d/18X8c1iTN8rQPaVyUCq34wE5ApBgyHJvyvdSv4IGEWbY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">📄 Австрид суралцах нийтлэл</a></li>
              <li><a href="https://youtu.be/j_DwiLspu08" target="_blank" rel="noopener noreferrer">🎥 Суралцах видео хөтөч</a></li>
              <li><Link to="/guide#calculator">💶 Зардлын Тооцоо</Link></li>
              <li><Link to="/visa-insurance#email-generator">✉️ MA35 И-мэйл</Link></li>
              <li><Link to="/about#board">✨ Багт Нэгдэх</Link></li>
              <li><Link to="/impressum">⚖️ Impressum &amp; Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Minimal Legal Footer Bar */}
        <div className="footer-legal-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.72rem', flexWrap: 'wrap' }}>
            <span>© AMOX 2026. </span>
            <span className="legal-verein-text">
              Verein der mongolischen Studenten in Österreich - &quot;AMOX&quot; • ZVR-Zahl: 107178700
            </span>
          </div>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <Link to="/impressum" style={{ color: 'var(--aiesec-blue)', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 700 }}>
              Impressum &amp; Privacy
            </Link>
            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              title="Дээш буцах"
              aria-label="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .amox-footer {
          background-color: #F8FAFC;
          border-top: 1.5px solid var(--border);
          padding: 40px 0 28px;
          position: relative;
          overflow: hidden;
        }

        /* Top Partner Parallel Badges */
        .partner-parallel-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
          margin-bottom: 24px;
        }

        .partner-parallel-card {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.02);
          transition: var(--transition);
        }

        .partner-parallel-card:hover {
          transform: translateY(-1px);
          border-color: var(--aiesec-blue);
          box-shadow: 0 4px 12px rgba(3, 126, 243, 0.08);
        }

        /* Giant Unending Moving AMOX Marquee Banner */
        .footer-amox-marquee-wrap {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          padding: 10px 0;
          margin-bottom: 24px;
          background: linear-gradient(90deg, rgba(3, 126, 243, 0.04), rgba(248, 90, 64, 0.04), rgba(3, 126, 243, 0.04));
          border-radius: 12px;
          border: 1px solid rgba(3, 126, 243, 0.08);
          user-select: none;
        }

        @keyframes footerMarqueeAnim {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .footer-amox-marquee-track {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          animation: footerMarqueeAnim 22s linear infinite;
          font-family: var(--font-heading);
          font-size: clamp(1.4rem, 4vw, 2.2rem);
          font-weight: 900;
          letter-spacing: 0.08em;
          color: var(--aiesec-blue);
          text-transform: uppercase;
        }

        .footer-amox-marquee-track .marquee-outline {
          -webkit-text-stroke: 1.5px var(--aiesec-blue);
          color: transparent;
        }

        .footer-amox-marquee-track .marquee-dot {
          color: var(--aiesec-orange);
          font-size: 1rem;
        }

        /* Brand Banner Row */
        .footer-brand-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-bottom: 18px;
          margin-bottom: 22px;
          border-bottom: 1px solid var(--border);
        }

        .footer-brand-desc {
          font-size: 0.78rem;
          color: var(--text-sub);
          line-height: 1.5;
          max-width: 480px;
          margin: 0;
        }

        /* 3 PARALLEL COLUMNS GRID */
        .footer-three-parallel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: clamp(10px, 3vw, 32px);
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border);
        }

        .footer-col {
          min-width: 0;
        }

        .footer-col-title {
          font-family: var(--font-heading);
          font-size: clamp(0.78rem, 1.8vw, 0.86rem);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 12px;
          color: var(--text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .footer-col-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: clamp(0.7rem, 1.6vw, 0.78rem);
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          color: var(--text-sub);
          line-height: 1.35;
          word-break: break-word;
        }

        .footer-email-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--aiesec-blue);
          text-decoration: none;
          font-weight: 700;
          line-height: 1.35;
          word-break: break-all;
        }

        .footer-email-link:hover {
          text-decoration: underline;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: clamp(0.7rem, 1.6vw, 0.78rem);
          padding: 0;
          margin: 0;
        }

        .footer-links-list a {
          text-decoration: none;
          color: var(--text-sub);
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .footer-links-list a:hover {
          color: var(--aiesec-blue);
          transform: translateX(2px);
        }

        .social-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          background: #FFFFFF;
          border: 1px solid var(--border);
          color: var(--text-main);
          font-size: 0.74rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
          transition: var(--transition);
        }

        .social-pill-btn:hover {
          border-color: var(--aiesec-blue);
          color: var(--aiesec-blue);
          transform: translateY(-1px);
        }

        /* Bottom Legal Bar */
        .footer-legal-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          padding-top: 18px;
          gap: 12px;
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .back-to-top-btn {
          background: var(--aiesec-blue);
          color: #FFFFFF;
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: 0 2px 8px rgba(3, 126, 243, 0.25);
        }

        .back-to-top-btn:hover {
          background: var(--aiesec-blue-dark);
          transform: translateY(-2px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .partner-parallel-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
          }
        }

        @media (max-width: 640px) {
          .partner-parallel-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 6px;
          }
          .footer-brand-banner {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .legal-verein-text {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};
