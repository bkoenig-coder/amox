import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Globe, ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const partners = [
    { name: 'Universität Wien', type: 'Uni' },
    { name: 'TU Wien', type: 'Tech Uni' },
    { name: 'WU Wien', type: 'Business' },
    { name: 'OeAD Austria', type: 'Exchange' },
    { name: 'STUWO Housing', type: 'Dorm' },
    { name: 'ÖGK Austria', type: 'Insurance' },
    { name: 'Монгол Улсын ЭСЯ', type: 'Embassy' }
  ];

  return (
    <footer style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border)', padding: '60px 0 40px' }}>
      <div className="container">
        {/* National & Academic Partners Showcase */}
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
              marginBottom: 24
            }}
          >
            Хамтран ажилладаг их дээд сургуулиуд &amp; Түншүүд
          </h4>
          <div className="partner-logo-grid">
            {partners.map((p, idx) => (
              <div key={idx} className="partner-logo-card">
                <span style={{ fontSize: '0.85rem' }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 40,
            paddingBottom: 40,
            borderBottom: '1px solid var(--border)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <img src="/assets/logo.png" alt="AMOX Logo" style={{ height: 36, width: 'auto' }} />
              <div>
                <strong style={{ fontSize: '1.1rem', color: 'var(--aiesec-blue)', display: 'block' }}>AMOX Austria</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Seit 2007 • 2026</span>
              </div>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: 16 }}>
              Австри дахь Монголын Оюутны Холбоо — Залуусын манлайлал, 9-р сарын Students Info Day, тэтгэлэг &amp; эрдэм шинжилгээний гүүр.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a
                href="https://www.instagram.com/amox_at/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.82rem',
                  color: 'var(--aiesec-blue)',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                <Camera size={15} /> @amox_at
              </a>
              <a
                href="https://www.facebook.com/MongolianStudentAssociationInAustria"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.82rem',
                  color: 'var(--aiesec-blue)',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                <Globe size={15} /> Facebook
              </a>
            </div>
          </div>

          <div>
            <h5 style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: 14, color: 'var(--text-main)' }}>Хөтөлбөрүүд</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.88rem' }}>
              <li><Link to="/about#mentor" style={{ textDecoration: 'none', color: 'var(--text-sub)' }}>🎓 Students Info Day (9-р сар)</Link></li>
              <li><Link to="/sun-festival" style={{ textDecoration: 'none', color: 'var(--text-sub)' }}>🏆 AMOX Sun Festival 2027</Link></li>
              <li><Link to="/guide" style={{ textDecoration: 'none', color: 'var(--text-sub)' }}>📖 9 Бүлэг Оюутны Гарын Авлага</Link></li>
              <li><Link to="/housing" style={{ textDecoration: 'none', color: 'var(--text-sub)' }}>🏠 Оюутны Дотуур Байр Хайгч</Link></li>
              <li><Link to="/visa-insurance" style={{ textDecoration: 'none', color: 'var(--text-sub)' }}>🛂 MA35 Виз &amp; E-Card Төв</Link></li>
            </ul>
          </div>

          <div>
            <h5 style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: 14, color: 'var(--text-main)' }}>Оюутны дэмжлэг</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.88rem' }}>
              <li><Link to="/about#mentor" style={{ textDecoration: 'none', color: 'var(--text-sub)' }}>👥 1-on-1 Менторшил</Link></li>
              <li><Link to="/guide#calculator" style={{ textDecoration: 'none', color: 'var(--text-sub)' }}>💶 Амьжиргааны зардлын тооцоо</Link></li>
              <li><Link to="/visa-insurance#email-gen" style={{ textDecoration: 'none', color: 'var(--text-sub)' }}>✉️ MA35 Герман өргөдөл үүсгэгч</Link></li>
              <li><Link to="/about" style={{ textDecoration: 'none', color: 'var(--text-sub)' }}>🇦🇹 Австрийн хууль дүрмийн заавар</Link></li>
            </ul>
          </div>

          <div>
            <h5 style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: 14, color: 'var(--text-main)' }}>Холбогдох</h5>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', marginBottom: 8 }}>
              Вена хот, Бүгд Найрамдах Австри Улс
            </p>
            <a
              href="mailto:contact@amox.at"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.86rem',
                color: 'var(--aiesec-blue)',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              <Mail size={15} /> contact@amox.at
            </a>
          </div>
        </div>

        {/* Minimal Legal Footer Matching AIESEC Austria */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 24,
            gap: 16,
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            <span>© AMOX in Austria 2026. </span>
            <span>Der Verein für mongolische Studierende und Jugendliche in Österreich.</span>
          </div>

          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Impressum &amp; Privacy</Link>
            <button
              onClick={scrollToTop}
              style={{
                background: 'var(--aiesec-blue)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Дээш буцах"
              aria-label="Back to Top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
