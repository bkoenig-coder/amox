import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Globe, ArrowUp, Mail, MapPin, ExternalLink, GraduationCap, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const partners = [
    { name: 'Universität Wien', type: 'Uni Wien', icon: '🏛️' },
    { name: 'TU Wien', type: 'Техникийн Их Сургууль', icon: '⚙️' },
    { name: 'WU Wien', type: 'Эдийн Засгийн Их Сургууль', icon: '📈' },
    { name: 'OeAD Housing', type: 'Орон Сууц & Солилцоо', icon: '🏠' },
    { name: 'STUWO Housing', type: 'Оюутны Байр', icon: '🏢' },
    { name: 'ÖGK Austria', type: 'Эрүүл Мэндийн Даатгал', icon: '🛡️' },
    { name: 'Монгол Улсын ЭСЯ', type: 'Вена Хот', icon: '🇲🇳' }
  ];

  return (
    <footer className="amox-footer">
      <div className="container">
        {/* National & Academic Partners Showcase */}
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 16px',
              borderRadius: 'var(--radius-pill)',
              background: '#EFF6FF',
              color: 'var(--aiesec-blue)',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 16
            }}
          >
            <span>🇦🇹 National &amp; Academic Network</span>
          </div>

          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
              fontWeight: 800,
              color: 'var(--text-main)',
              marginBottom: 20
            }}
          >
            Хамтран ажилладаг их дээд сургуулиуд &amp; Түнш байгууллагууд
          </h4>

          {/* Parallel Partner Cards Grid / Scroll */}
          <div className="partner-parallel-grid">
            {partners.map((p, idx) => (
              <div key={idx} className="partner-parallel-card">
                <span style={{ fontSize: '1.2rem' }}>{p.icon}</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--text-main)' }}>{p.name}</strong>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{p.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parallel Footer Navigation Columns */}
        <div className="footer-parallel-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <img src="/assets/logo.png" alt="AMOX Logo" style={{ height: 42, width: 'auto' }} />
              <div>
                <strong style={{ fontSize: '1.15rem', color: 'var(--aiesec-blue)', display: 'block', fontWeight: 800 }}>
                  AMOX Austria
                </strong>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Seit 2007 &bull; 19 дэх жилдээ
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', lineHeight: 1.65, marginBottom: 18 }}>
              Австри дахь Монгол оюутан, залуусыг нэгтгэж, дэмжиж, хөгжүүлэх 100% оюутны ашгийн бус төрийн бус байгууллага.
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a
                href="https://www.instagram.com/amox_at/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
              >
                <Camera size={14} color="#E1306C" />
                <span>@amox_at</span>
              </a>
              <a
                href="https://www.facebook.com/MongolianStudentAssociationInAustria"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
              >
                <Globe size={14} color="#1877F2" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Column 2: Contact & Location */}
          <div className="footer-col contact-col">
            <h5 className="footer-col-title">Холбоо барих</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.86rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: 'var(--text-sub)' }}>
                <MapPin size={16} color="var(--aiesec-orange)" style={{ flexShrink: 0, marginTop: 3 }} />
                <span>Вена хот, Бүгд Найрамдах Австри Улс</span>
              </div>
              <a
                href="mailto:contact@amox.at"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: 'var(--aiesec-blue)',
                  textDecoration: 'none',
                  fontWeight: 700
                }}
              >
                <Mail size={16} color="var(--aiesec-blue)" />
                <span>contact@amox.at</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                <ShieldCheck size={14} color="var(--aiesec-teal)" />
                <span>ZVR-Zahl: Албан ёсны бүртгэлтэй ТББ</span>
              </div>
            </div>
          </div>

          {/* Column 3: Programs & Events */}
          <div className="footer-col links-col">
            <h5 className="footer-col-title">Хөтөлбөрүүд</h5>
            <ul className="footer-links-list">
              <li><Link to="/about#mentor">🎓 Students Info Day (9-р сар)</Link></li>
              <li><Link to="/sun-festival">🏆 AMOX Sun Festival 2027</Link></li>
              <li><Link to="/guide">📖 9 Бүлэг Оюутны Гарын Авлага</Link></li>
              <li><Link to="/housing">🏠 Оюутны Дотуур Байр Хайгч</Link></li>
              <li><Link to="/visa-insurance">🛂 MA35 Виз &amp; E-Card Төв</Link></li>
            </ul>
          </div>

          {/* Column 4: Student Support */}
          <div className="footer-col links-col">
            <h5 className="footer-col-title">Оюутны Дэмжлэг</h5>
            <ul className="footer-links-list">
              <li><Link to="/about#mentor">👥 1-on-1 Ментор Зөвлөгөө</Link></li>
              <li><Link to="/guide#calculator">💶 Амьжиргааны Төсвийн Тооцоо</Link></li>
              <li><Link to="/visa-insurance#email-generator">✉️ MA35 Герман И-мэйл Үүсгэгч</Link></li>
              <li><Link to="/about#board">✨ AMOX Багт Нэгдэх</Link></li>
              <li><Link to="/about#history">🏛️ 19 Жилийн Түүхэн Замнал</Link></li>
            </ul>
          </div>
        </div>

        {/* Minimal Legal Footer Bar */}
        <div className="footer-legal-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>© AMOX Austria 2026. </span>
            <span className="legal-verein-text">Der Verein für mongolische Studierende und Jugendliche in Österreich.</span>
          </div>

          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.82rem' }}>
              Impressum &amp; Privacy
            </Link>
            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              title="Дээш буцах"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .amox-footer {
          background-color: #F8FAFC;
          border-top: 1.5px solid var(--border);
          padding: 60px 0 36px;
          position: relative;
        }

        /* Top Parallel Partners Grid */
        .partner-parallel-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
          margin-bottom: 40px;
        }

        .partner-parallel-card {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
          transition: var(--transition);
        }

        .partner-parallel-card:hover {
          transform: translateY(-2px);
          border-color: var(--aiesec-blue);
          box-shadow: 0 6px 16px rgba(3, 126, 243, 0.08);
        }

        /* Main Parallel Footer 4-Column Grid */
        .footer-parallel-grid {
          display: grid;
          grid-template-columns: 1.3fr 1.1fr 1fr 1fr;
          gap: 36px;
          padding-bottom: 36px;
          border-bottom: 1px solid var(--border);
        }

        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 800;
          margin-bottom: 16px;
          color: var(--text-main);
          letter-spacing: -0.01em;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.88rem;
        }

        .footer-links-list a {
          text-decoration: none;
          color: var(--text-sub);
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
        }

        .footer-links-list a:hover {
          color: var(--aiesec-blue);
          transform: translateX(3px);
        }

        .social-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          background: #FFFFFF;
          border: 1px solid var(--border);
          color: var(--text-main);
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: var(--transition);
        }

        .social-pill-btn:hover {
          border-color: var(--aiesec-blue);
          color: var(--aiesec-blue);
          transform: translateY(-2px);
        }

        /* Bottom Legal Bar */
        .footer-legal-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          padding-top: 24px;
          gap: 16px;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .back-to-top-btn {
          background: var(--aiesec-blue);
          color: #FFFFFF;
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(3, 126, 243, 0.3);
        }

        .back-to-top-btn:hover {
          background: var(--aiesec-blue-dark);
          transform: translateY(-2px);
        }

        /* Responsive Breakpoints - Parallel 2-Column Grid on Mobile/Tablet */
        @media (max-width: 992px) {
          .footer-parallel-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
          .partner-parallel-grid {
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            gap: 8px;
          }
          .partner-parallel-card {
            padding: 10px 12px;
          }
        }

        @media (max-width: 600px) {
          .partner-parallel-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .legal-verein-text {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};
