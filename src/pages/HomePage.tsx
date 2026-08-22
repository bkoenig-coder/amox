import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Building2, 
  Rocket, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  ArrowDown,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { HandDrawnLoop, HandDrawnWave } from '../components/HandDrawnSVGs';
import { AiesecHexagonsLeft, AiesecHexagonsRight } from '../components/AiesecHexagons';
import { CascadingCollage } from '../components/CascadingCollage';
import { EVENTS_DATA } from '../data/eventsData';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTool, setSelectedTool] = useState('/guide');
  const [selectedCity, setSelectedCity] = useState('wien');

  const handleToolSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTool === '/housing' && selectedCity !== 'all') {
      navigate(`/housing?city=${selectedCity}`);
    } else {
      navigate(selectedTool);
    }
  };

  const getEventImage = (category: string) => {
    switch (category) {
      case 'sports':
        return '/assets/sun_festival_basketball.jpg';
      case 'academic':
        return '/assets/student-female.jpg';
      case 'community':
        return '/assets/media_1787152152741.jpg';
      default:
        return '/assets/student-male.jpg';
    }
  };

  return (
    <div className="aiesec-homepage" style={{ overflowX: 'hidden' }}>
      {/* -------------------------------------------------------------
          1. HERO SECTION (#intro) - Exact AIESEC Austria Layout (2026)
          ------------------------------------------------------------- */}
      <section
        id="intro"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(180deg, rgba(0, 20, 50, 0.68) 0%, rgba(0, 20, 50, 0.82) 100%), url(/assets/student-female.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          color: '#FFFFFF',
          padding: '120px 0 100px',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 18px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(255, 255, 255, 0.16)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                fontSize: '0.86rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: 28
              }}
            >
              <span>🇦🇹 Seit 2007 &bull; Activating Mongolian Youth Leadership in Austria 2026</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.4rem)',
                lineHeight: 1.12,
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: 24,
                letterSpacing: '-0.03em'
              }}
            >
              Leadership for{' '}
              <span className="doodle-wrap">
                youth
                <HandDrawnLoop color="#037EF3" />
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.94)',
                lineHeight: 1.75,
                maxWidth: 780,
                margin: '0 auto 36px',
                fontWeight: 400
              }}
            >
              Австри дахь Монгол оюутан, залуусыг нэгтгэж, дэмжиж, хөгжүүлэх AMOX холбоо.
              <br />
              Суралцах, ажиллах, хөгжих боломж, мэдээлэл, зөвлөгөө, соёлын үйл ажиллагаа болон Монгол залуусын хамтын оролцоог дэмжих нэгдсэн платформ.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <a href="#the-amox-way" className="aiesec-btn-primary">
                <span>Хөтөлбөрүүдтэй танилцах</span>
                <ArrowRight size={17} />
              </a>
              <Link to="/about#mentor" className="aiesec-btn-outline">
                <span>🎓 9-р Сарын Өдөрлөгт Бүртгүүлэх</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Signature Circular SCROLL DOWN rotating badge */}
        <a href="#the-amox-way" className="scroll-down-badge" aria-label="Scroll Down">
          <svg className="scroll-down-text" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="transparent"
            />
            <text fontSize="10.5" fontWeight="700" letterSpacing="2.5" fill="#1D2129">
              • SCROLL DOWN • SCROLL DOWN 
            </text>
          </svg>
          <div className="scroll-down-arrow">
            <ArrowDown size={20} color="var(--aiesec-blue)" />
          </div>
        </a>
      </section>

      {/* -------------------------------------------------------------
          2. "THE AMOX WAY" & VALUES HEXAGON CLUSTERS SECTION
          ------------------------------------------------------------- */}
      <section
        id="the-amox-way"
        style={{
          position: 'relative',
          padding: '130px 0 100px',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden'
        }}
      >
        {/* Animated Background Outline Marquee */}
        <div className="outline-text-marquee-container">
          <div className="outline-text-marquee">
            the amox way &nbsp; the amox way &nbsp; the amox way &nbsp; the amox way &nbsp;
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Main Title with Blue Doodle */}
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: 12
              }}
            >
              Leadership for{' '}
              <span className="doodle-wrap">
                youth
                <HandDrawnLoop color="#037EF3" />
              </span>
            </h2>
          </div>

          {/* 3-Column Values Showcase */}
          <div
            className="values-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: 40,
              alignItems: 'center'
            }}
          >
            {/* Left 3-Hexagon Cluster */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <AiesecHexagonsLeft />
            </div>

            {/* Center High-Elegance Manifesto */}
            <div style={{ textAlign: 'center', padding: '0 20px', maxWidth: 680, margin: '0 auto' }}>
              <p
                style={{
                  fontSize: 'clamp(1.12rem, 2.2vw, 1.35rem)',
                  lineHeight: 1.8,
                  color: 'var(--text-main)',
                  fontWeight: 700,
                  marginBottom: 14
                }}
              >
                Австри дахь Монгол оюутан, залуусыг нэгтгэж, дэмжиж, хөгжүүлэх AMOX холбоо.
              </p>
              <p
                style={{
                  fontSize: 'clamp(0.98rem, 1.8vw, 1.1rem)',
                  lineHeight: 1.8,
                  color: 'var(--text-sub)',
                  fontWeight: 400,
                  marginBottom: 20
                }}
              >
                Суралцах, ажиллах, хөгжих боломж, мэдээлэл, зөвлөгөө, соёлын үйл ажиллагаа болон Монгол залуусын хамтын оролцоог дэмжих нэгдсэн платформ.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                2007 онд үүсгэн байгуулагдсан, залуусаас залуусын төлөө тасралтгүй 19 дэх жилдээ.
              </p>
            </div>

            {/* Right 3-Hexagon Cluster */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <AiesecHexagonsRight />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. MILESTONE STATISTICS SECTION (19+ YEARS)
          ------------------------------------------------------------- */}
      <section
        style={{
          backgroundColor: '#F8FAFC',
          padding: '70px 0',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 40,
              textAlign: 'center'
            }}
          >
            {/* Stat 1 */}
            <motion.div whileHover={{ y: -4 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  backgroundColor: '#EFF6FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'var(--aiesec-blue)'
                }}
              >
                <Globe size={32} strokeWidth={2} />
              </div>
              <h3
                style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  lineHeight: 1,
                  marginBottom: 8
                }}
              >
                19+
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-sub)' }}>
                Жилийн түүх &bull; Seit 2007
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Тасралтгүй үйл ажиллагаа ба хамт олон
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div whileHover={{ y: -4 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  backgroundColor: '#F0FDF4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'var(--aiesec-teal)'
                }}
              >
                <Building2 size={32} strokeWidth={2} />
              </div>
              <h3
                style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  lineHeight: 1,
                  marginBottom: 8
                }}
              >
                1,500+
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-sub)' }}>
                Монгол Оюутан &amp; Төгсөгчид
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Uni Wien, TU Wien, WU, Graz, Linz
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div whileHover={{ y: -4 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  backgroundColor: '#FFF7ED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'var(--aiesec-orange)'
                }}
              >
                <Rocket size={32} strokeWidth={2} />
              </div>
              <h3
                style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  lineHeight: 1,
                  marginBottom: 8
                }}
              >
                50+
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-sub)' }}>
                Наадам, Хэлэлцүүлэг &amp; Төсөл
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Students Info Day 2026, Sun Festival 2027
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. "PROGRAMS FOR YOU" - Cascading Photo Collages & Wavy Squiggles
          ------------------------------------------------------------- */}
      <section style={{ padding: '110px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: 12
              }}
            >
              Programs for{' '}
              <span className="doodle-wrap">
                you
                <HandDrawnLoop color="#037EF3" />
              </span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-sub)' }}>
              Австри дахь амьдрал, их сургууль, спорт ба карьерын бүх талын дэмжлэг
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 110 }}>
            {/* Program 1: Sun Festival (Next coming in 2027) */}
            <div
              className="program-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 0.9fr',
                gap: 60,
                alignItems: 'center'
              }}
            >
              <div>
                <CascadingCollage
                  img1="/assets/sun_festival_basketball.jpg"
                  img2="/assets/sun_festival_volleyball.jpg"
                  img3="/assets/media_1787152152741.jpg"
                  alt="AMOX Sun Festival наадам"
                />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.7rem)',
                    fontWeight: 300,
                    marginBottom: 20
                  }}
                >
                  <span className="doodle-wrap" style={{ fontWeight: 700 }}>
                    Sun Festival 2027
                    <HandDrawnWave color="#F85A40" />
                  </span>{' '}
                  &amp; Sports
                </h3>

                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-sub)', marginBottom: 20 }}>
                  Европ дахь Монголчуудын спортын дараагийн их наадам 2027 оны 7-р сард Вена хотноо уламжлал ёсоор болно. Сагсан бөмбөг, гар бөмбөг, хөлбөмбөг, теннис, шатрын 6 төрөлт тэмцээн.
                </p>

                <Link to="/sun-festival" className="discover-pill pill-orange">
                  <span>2027 Наадам &amp; Зургийн цомог</span>
                  <div className="arrow-circle">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>

            {/* Program 2: 9 Chapter Student Guide & Housing */}
            <div
              className="program-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.9fr 1.1fr',
                gap: 60,
                alignItems: 'center'
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.7rem)',
                    fontWeight: 300,
                    marginBottom: 20
                  }}
                >
                  <span className="doodle-wrap" style={{ fontWeight: 700 }}>
                    Student Guide
                    <HandDrawnWave color="#00878A" />
                  </span>{' '}
                  &amp; Housing
                </h3>

                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-sub)', marginBottom: 20 }}>
                  2026/2027 хичээлийн жилийн их сургуулийн элсэлт, MA35 визний өргөдөл үүсгэгч, E-Card даатгал, болон 15+ оюутны дотуур байрны нэгдсэн харьцуулалт.
                </p>

                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link to="/guide" className="discover-pill pill-teal">
                    <span>9 Бүлэг Хөтөч унших</span>
                    <div className="arrow-circle">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                  <Link to="/housing" className="discover-pill pill-teal">
                    <span>Байр хайх</span>
                    <div className="arrow-circle">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </div>
              </div>

              <div>
                <CascadingCollage
                  img1="/assets/student-male.jpg"
                  img2="/assets/student-female.jpg"
                  img3="/assets/media_1787152257891.jpg"
                  alt="Оюутны хөтөч болон дотуур байр"
                  reverse
                />
              </div>
            </div>

            {/* Program 3: Mentorship & Students Info Day 2026 */}
            <div
              className="program-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 0.9fr',
                gap: 60,
                alignItems: 'center'
              }}
            >
              <div>
                <CascadingCollage
                  img1="/assets/media_1787152152741.jpg"
                  img2="/assets/student-female.jpg"
                  img3="/assets/student-male.jpg"
                  alt="Ахмад оюутны менторшил"
                />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.7rem)',
                    fontWeight: 300,
                    marginBottom: 20
                  }}
                >
                  <span className="doodle-wrap" style={{ fontWeight: 700 }}>
                    Students Info Day
                    <HandDrawnWave color="#D97706" />
                  </span>{' '}
                  &amp; Mentorship
                </h3>

                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-sub)', marginBottom: 20 }}>
                  2026 оны 9-р сарын дундуур болох шинэ оюутны нэгдсэн өдөрлөг, Uni Wien, TU Wien, WU төгсөгч ахмад оюутнуудын 1-on-1 менторшил, цагийн ажил, хичээл сонголт.
                </p>

                <Link to="/about#mentor" className="discover-pill pill-gold">
                  <span>9-р Сарын Өдөрлөгт Бүртгүүлэх</span>
                  <div className="arrow-circle">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. FEATURED SPOTLIGHT: STUDENTS INFO DAY 2026 (MID-SEPTEMBER)
          ------------------------------------------------------------- */}
      <section className="youth-forum-banner" style={{ background: '#0052CC' }}>
        <div className="youth-forum-marquee">
          <span>AMOX STUDENTS INFO DAY 2026 • SEPTEMBER ORIENTATION • SUN FESTIVAL 2027 •</span>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            className="youth-banner-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: 40,
              alignItems: 'center'
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.2)',
                  padding: '4px 14px',
                  borderRadius: 20,
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: 16
                }}
              >
                📅 2026 ОНЫ 9-Р САРЫН ДУНДУУР • VIRTUAL &amp; IN-PERSON
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: '#FFFFFF',
                  marginBottom: 20
                }}
              >
                AMOX Students Info Day 2026
              </h2>

              <p
                style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.92)',
                  marginBottom: 30,
                  maxWidth: 580
                }}
              >
                Австрийн их сургуулиудад шинээр ирж буй болон бэлтгэл курсийн оюутнуудад зориулсан мэдээллийн нэгдсэн өдөрлөг. MA35 виз, E-Card даатгал, дотуур байр, хичээл сонголт ба ахмад оюутнуудын 1-on-1 зөвлөгөө.
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link
                  to="/about#mentor"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#0052CC',
                    padding: '13px 32px',
                    borderRadius: 'var(--radius-pill)',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
                  }}
                >
                  <span>Өдөрлөгт үнэгүй бүртгүүлэх</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/guide"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    border: '2px solid #FFFFFF',
                    padding: '13px 32px',
                    borderRadius: 'var(--radius-pill)',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8
                  }}
                >
                  <span>9 Бүлэг Хөтөчтэй танилцах</span>
                </Link>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img
                src="/assets/media_1787152152741.jpg"
                alt="AMOX Students Info Day"
                style={{
                  width: '100%',
                  maxHeight: 380,
                  objectFit: 'cover',
                  borderRadius: 20,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  border: '4px solid rgba(255,255,255,0.4)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. INTERACTIVE QUICK FINDER / TOOLS INTEGRATION
          ------------------------------------------------------------- */}
      <section style={{ padding: '90px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 24,
              padding: 'clamp(24px, 5vw, 44px)',
              boxShadow: '0 15px 45px rgba(0, 45, 98, 0.08)',
              border: '1px solid var(--border)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: 30 }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8 }}>
                Шуурхай хайлт &amp; Оюутны хэрэгслүүд (2026)
              </h3>
              <p style={{ color: 'var(--text-sub)' }}>
                Хэрэгцээт гарын авлага, дотуур байр болон MA35 өргөдлөө шууд нээгээрэй
              </p>
            </div>

            <form onSubmit={handleToolSubmit}>
              <div
                className="quick-finder-form-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr)) auto',
                  gap: 16,
                  alignItems: 'flex-end'
                }}
              >
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>
                    ХӨТӨЛБӨР / ХЭРЭГЦЭЭ
                  </label>
                  <select
                    className="form-select"
                    value={selectedTool}
                    onChange={(e) => setSelectedTool(e.target.value)}
                  >
                    <option value="/guide">📖 9 Бүлэг Оюутны Гарын Авлага</option>
                    <option value="/housing">🏠 Дотуур Байр Хайх (15+ Байр)</option>
                    <option value="/visa-insurance">🛂 MA35 Герман И-мэйл Генератор</option>
                    <option value="/sun-festival">🏆 Sun Festival 2027 Тэмцээн</option>
                    <option value="/about#mentor">🎓 9-р Сарын Students Info Day</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>
                    ХОТ / БҮС НУТАГ
                  </label>
                  <select
                    className="form-select"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option value="wien">🇦🇹 Вена (Wien)</option>
                    <option value="graz">🇦🇹 Грац (Graz)</option>
                    <option value="linz">🇦🇹 Линц (Linz)</option>
                    <option value="all">🇦🇹 Австри даяар</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="aiesec-btn-primary"
                  style={{ padding: '14px 28px', height: 'fit-content', width: '100%', justifyContent: 'center' }}
                >
                  <span>Шуурхай нээх</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          7. UPCOMING EVENTS SPOTLIGHT (2026/2027)
          ------------------------------------------------------------- */}
      <section style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 44,
              flexWrap: 'wrap',
              gap: 16
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: 'var(--aiesec-blue)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                Upcoming Events &bull; 2026 / 2027
              </span>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: 4 }}>
                Ойрын арга хэмжээнүүд &amp; Наадам
              </h3>
            </div>
            <Link
              to="/about#mentor"
              style={{
                color: 'var(--aiesec-blue)',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              <span>Бүртгүүлэх</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: 24
            }}
          >
            {EVENTS_DATA.map((event) => (
              <div
                key={event.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 18,
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={getEventImage(event.category)}
                    alt={event.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: event.id.includes('students-info-day') ? 'var(--aiesec-blue)' : 'rgba(0, 45, 98, 0.85)',
                      color: '#FFFFFF',
                      padding: '4px 10px',
                      borderRadius: 6,
                      fontSize: '0.78rem',
                      fontWeight: 700
                    }}
                  >
                    {event.badge}
                  </div>
                </div>

                <div style={{ padding: 22, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 10 }}>
                    {event.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)', marginBottom: 16, flexGrow: 1 }}>
                    {event.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Calendar size={14} color="var(--aiesec-blue)" />
                      <span>{event.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <MapPin size={14} color="var(--aiesec-orange)" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <Link
                    to={event.linkUrl}
                    className="aiesec-btn-primary"
                    style={{ padding: '10px 18px', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}
                  >
                    <span>{event.linkText}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
