import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Users, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Flame, 
  Medal, 
  Send,
  Bell
} from 'lucide-react';
import { HandDrawnLoop, HandDrawnWave } from '../components/HandDrawnSVGs';
import { FestivalPhotoSlider } from '../components/FestivalPhotoSlider';

export const SunFestivalPage: React.FC = () => {
  const [formData, setFormData] = useState({
    sport: 'basketball_men',
    teamName: '',
    captainName: '',
    phone: '',
    email: '',
    country: 'Austria - Wien',
    playerCount: '7',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 }
    });
  };

  const sportsList = [
    { 
      id: 'basketball_men', 
      name: 'Сагсан бөмбөг (Эрэгтэй)', 
      categoryType: 'Багийн төрөл (5x5)', 
      teams: '16 Баг', 
      icon: '🏀',
      color: '#F85A40',
      rules: '5x5 Бүсийн тоглолт, 4 үе 10 минут, FIBA албан ёсны дүрэм, хасагдах шатны шууд плей-офф.'
    },
    { 
      id: 'basketball_women', 
      name: 'Сагсан бөмбөг (Эмэгтэй)', 
      categoryType: 'Багийн төрөл (5x5)', 
      teams: '8 Баг', 
      icon: '🏀',
      color: '#F85A40',
      rules: '5x5 Бүсийн тоглолт, 4 үе 8 минут, шилдэг тоглогчийн тусгай өргөмжлөлтэй.'
    },
    { 
      id: 'volleyball', 
      name: 'Гар бөмбөг (Холимог 4+2)', 
      categoryType: 'Багийн төрөл (Холимог)', 
      teams: '12 Баг', 
      icon: '🏐',
      color: '#037EF3',
      rules: '3 сетээр 25 оноо, шийдвэрлэх сет 15 оноо. Багт хамгийн багадаа 2 эмэгтэй тоглогч талбайд байна.'
    },
    { 
      id: 'football', 
      name: 'Хөлбөмбөг (Mini Football)', 
      categoryType: 'Багийн төрөл (5+1)', 
      teams: '10 Баг', 
      icon: '⚽',
      color: '#00C16E',
      rules: '5+1 Талбайн тоглогч, 2 үе 15 минут, гүйлтийн солилцоо, хасагдах шатны шууд плей-офф.'
    },
    { 
      id: 'table_tennis', 
      name: 'Ширээний теннис', 
      categoryType: 'Ганцаарчилсан', 
      teams: '32 Тамирчин', 
      icon: '🏓',
      color: '#F4B400',
      rules: 'Ганцаарчилсан эрэгтэй / эмэгтэй ангилал, 11 оноо 3 сет, ITTF стандартын ширээ.'
    },
    { 
      id: 'tennis', 
      name: 'Талбайн теннис', 
      categoryType: 'Ганцаарчилсан', 
      teams: '16 Тамирчин', 
      icon: '🎾',
      color: '#00878A',
      rules: 'Ганцаарчилсан ангилал, Hard court талбай, Tie-break систем.'
    },
    { 
      id: 'chess', 
      name: 'Шатар (Блиц & Rapid)', 
      categoryType: 'Ганцаарчилсан', 
      teams: '30 Тамирчин', 
      icon: '♟️',
      color: '#002D62',
      rules: 'Швейцар систем 7 өрөг, 10 мин + 5 сек нэмэлт цаг, FIDE дүрмээр явагдана.'
    }
  ];

  const championsHallOfFame = [
    { year: '2025', sport: '🏀 Сагсан бөмбөг', winner: 'Vienna Warriors 🇦🇹', mvp: 'М. Батбилэг' },
    { year: '2025', sport: '🏐 Гар бөмбөг', winner: 'Graz Nomads 🇦🇹', mvp: 'Э. Сарнай' },
    { year: '2024', sport: '🏀 Сагсан бөмбөг', winner: 'Berlin Stars 🇩🇪', mvp: 'Т. Тэмүүлэн' },
    { year: '2024', sport: '⚽ Хөлбөмбөг', winner: 'Prague Hawks 🇨🇿', mvp: 'Б. Анхбаяр' },
    { year: '2023', sport: '🏀 Сагсан бөмбөг', winner: 'Munich Mongols 🇩🇪', mvp: 'О. Эрдэнэбат' }
  ];

  return (
    <div className="sun-festival-page" style={{ overflowX: 'hidden' }}>
      {/* -------------------------------------------------------------
          1. HERO SECTION - Next Sun Festival 2027 Mega Announcement
          ------------------------------------------------------------- */}
      <section
        id="festival-hero"
        style={{
          position: 'relative',
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(180deg, rgba(0, 20, 50, 0.72) 0%, rgba(0, 20, 50, 0.88) 100%), url(/assets/sun_festival_basketball.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          color: '#FFFFFF',
          padding: '140px 0 90px',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 920 }}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 18px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(248, 90, 64, 0.25)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(248, 90, 64, 0.5)',
                fontSize: '0.86rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#FFE4E6',
                marginBottom: 22
              }}
            >
              <Flame size={16} color="var(--aiesec-orange)" />
              <span>Next Mega Event • AMOX Sun Festival 2027 • Seit 2012</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.4rem)',
                lineHeight: 1.12,
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: 22,
                letterSpacing: '-0.03em'
              }}
            >
              AMOX Sun Festival{' '}
              <span className="doodle-wrap">
                2027
                <HandDrawnLoop color="#F85A40" />
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.92)',
                lineHeight: 1.7,
                maxWidth: 760,
                margin: '0 auto 34px'
              }}
            >
              Европ дахь Монголчуудын спортын дараагийн нэгдсэн наадам <strong>2027 оны 7-р сард</strong> Вена хотноо уламжлал ёсоор зохион байгуулагдана. Сагсан бөмбөг, гар бөмбөг, хөлбөмбөг, теннис, шатрын 6 төрөлт нээлттэй наадам.
            </p>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="#register" 
                className="aiesec-btn-primary" 
                style={{ background: 'var(--aiesec-orange)', borderColor: 'var(--aiesec-orange)', boxShadow: '0 8px 24px rgba(248,90,64,0.4)' }}
              >
                <span>2027 Баг Урьдчилан Бүртгүүлэх</span>
                <ArrowRight size={16} />
              </a>
              <a href="#gallery" className="aiesec-btn-outline">
                <span>📸 Өмнөх Наадмын Зургууд (2025, 2024)</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. TOURNAMENT KEY STATS & INFO BAR
          ------------------------------------------------------------- */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '60px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 28,
              textAlign: 'center'
            }}
          >
            <div style={{ padding: '10px 16px' }}>
              <div style={{ color: 'var(--aiesec-orange)', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                <Calendar size={28} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 4 }}>2027 Оны 7-р сар</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Бямба, Ням гарагт 09:00 - 20:00</p>
            </div>

            <div style={{ padding: '10px 16px' }}>
              <div style={{ color: 'var(--aiesec-blue)', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                <MapPin size={28} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 4 }}>Sportzentrum Wien</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Вена Хот • Төв Спорт Цогцолбор</p>
            </div>

            <div style={{ padding: '10px 16px' }}>
              <div style={{ color: '#D97706', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                <Trophy size={28} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 4 }}>Цом &amp; Медаль</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Аваргын цом, медаль &amp; өргөмжлөл</p>
            </div>

            <div style={{ padding: '10px 16px' }}>
              <div style={{ color: 'var(--aiesec-teal)', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                <Users size={28} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 4 }}>32+ Баг &bull; 500+ Хүн</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Австри, Герман, Чех, Унгар, Швейцар</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. INTERACTIVE PHOTO CAROUSEL & GALLERY (Previous Years)
          ------------------------------------------------------------- */}
      <section id="gallery" style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--aiesec-orange)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Photo Highlights &bull; Seit 2012
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800, marginTop: 4 }}>
              Өмнөх Наадмын{' '}
              <span className="doodle-wrap">
                Онцлох Агшнууд
                <HandDrawnWave color="#F85A40" />
              </span>
            </h2>
            <p style={{ color: 'var(--text-sub)', maxWidth: 640, margin: '10px auto 0' }}>
              2025, 2024, 2023 оны тэмцээнүүдийн шийдвэрлэх тоглолтууд, аваргуудын цом гардуулах мөч ба оюутан залуусын нөхөрлөл
            </p>
          </div>

          {/* Dedicated Rich Carousel Slider */}
          <FestivalPhotoSlider />
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. 6 SPORTS CATEGORIES INTERACTIVE CARDS & RULES
          ------------------------------------------------------------- */}
      <section style={{ padding: '100px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--aiesec-blue)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Tournament Categories &bull; 2027
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: 4 }}>
              Тэмцээний Төрөл &amp; Дүрэм
            </h2>
            <p style={{ color: 'var(--text-sub)', maxWidth: 600, margin: '8px auto 0' }}>
              2027 оны наадамд өөрийн сонирхсон спортын төрлөөр баг бүрдүүлэн урьдчилан бүртгүүлээрэй
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: 24
            }}
          >
            {sportsList.map((sport) => (
              <div
                key={sport.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 20,
                  border: '1px solid var(--border)',
                  padding: 24,
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition)'
                }}
                className="timeline-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: '2.4rem' }}>{sport.icon}</span>
                  <span
                    style={{
                      backgroundColor: '#EFF6FF',
                      color: 'var(--aiesec-blue)',
                      padding: '4px 12px',
                      borderRadius: 20,
                      fontSize: '0.78rem',
                      fontWeight: 800
                    }}
                  >
                    {sport.teams}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 8 }}>
                  {sport.name}
                </h3>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    borderTop: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                    marginBottom: 16
                  }}
                >
                  <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>Ангилал:</span>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--aiesec-orange)' }}>{sport.categoryType}</strong>
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: 20, flexGrow: 1 }}>
                  {sport.rules}
                </p>

                <a
                  href="#register"
                  onClick={() => setFormData({ ...formData, sport: sport.id })}
                  className="aiesec-btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '11px',
                    fontSize: '0.88rem'
                  }}
                >
                  <span>2027 Баг бүртгүүлэх</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. WEEKEND SCHEDULE & VENUE DETAILS
          ------------------------------------------------------------- */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 40,
              alignItems: 'center'
            }}
            className="program-row"
          >
            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--aiesec-orange)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Schedule &bull; 2 Өдрийн Хөтөлбөр
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, marginTop: 4, marginBottom: 24 }}>
                Наадмын Хуваарь (2027)
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ backgroundColor: '#F8FAFC', padding: 20, borderRadius: 16, borderLeft: '4px solid var(--aiesec-blue)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <Calendar size={18} color="var(--aiesec-blue)" />
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800 }}>1 дэх өдөр • Бямба гараг</h4>
                  </div>
                  <ul style={{ paddingLeft: 20, fontSize: '0.88rem', color: 'var(--text-sub)', lineHeight: 1.7 }}>
                    <li><strong>09:00 - 10:00:</strong> Багуудын нэгдсэн бүртгэл &amp; Нээлтийн ёслол</li>
                    <li><strong>10:00 - 14:00:</strong> Сагсан бөмбөг, волейболын хэсгийн тоглолтууд</li>
                    <li><strong>14:00 - 18:00:</strong> Хөлбөмбөг, ширээний теннис, шатрын эхний тойргууд</li>
                    <li><strong>18:00 - 20:00:</strong> Шөвгийн 8-ын шалгаруулалт</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: '#F8FAFC', padding: 20, borderRadius: 16, borderLeft: '4px solid var(--aiesec-orange)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <Trophy size={18} color="var(--aiesec-orange)" />
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800 }}>2 дахь өдөр • Ням гараг</h4>
                  </div>
                  <ul style={{ paddingLeft: 20, fontSize: '0.88rem', color: 'var(--text-sub)', lineHeight: 1.7 }}>
                    <li><strong>10:00 - 13:00:</strong> Хагас шигшээ тоглолтууд (Semi-Finals)</li>
                    <li><strong>14:00 - 17:30:</strong> Алтан медалийн төлөөх Финал тоглолтууд</li>
                    <li><strong>18:00 - 19:30:</strong> Цом, шагнал гардуулах хаалтын ёслол</li>
                    <li><strong>20:00:</strong> AMOX Sun Festival After-Party &amp; Networking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Venue & Location Card */}
            <div>
              <div
                style={{
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  borderRadius: 24,
                  padding: 'clamp(24px, 5vw, 36px)',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <MapPin size={26} color="var(--aiesec-orange)" />
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF' }}>Sportzentrum Wien</h3>
                    <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Төв Спортын Ордон</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: 20 }}>
                  Австрийн Вена хотын нийтийн тээврээр (U-Bahn, Tram) шууд холбогдсон, мэргэжлийн стандартад нийцсэн паркетан шал, гэрэлтүүлэг, үзэгчдийн суудлын багтаамжтай цогцолбор.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.85rem', color: '#E2E8F0', marginBottom: 24 }}>
                  <div>🚆 <strong>U-Bahn:</strong> U1 / U2 шугам, ойролцоо буудал 3 мин алхах</div>
                  <div>🚗 <strong>Зогсоол:</strong> Цогцолборын үнэгүй зогсоолтой</div>
                  <div>🍔 <strong>Хоол &amp; Ундаа:</strong> Монгол хоол, ундааны асарууд ажиллана</div>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aiesec-btn-primary"
                  style={{ width: '100%', justifyContent: 'center', background: 'var(--aiesec-orange)', borderColor: 'var(--aiesec-orange)' }}
                >
                  <span>Google Maps дээр нээх</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. INTERACTIVE TEAM REGISTRATION FORM (2027)
          ------------------------------------------------------------- */}
      <section id="register" style={{ padding: '80px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 24,
              padding: 'clamp(22px, 5vw, 44px)',
              boxShadow: '0 20px 50px rgba(0, 45, 98, 0.09)',
              border: '1.5px solid var(--border)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--aiesec-orange)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Online Registration &bull; Sun Festival 2027
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', fontWeight: 800, marginTop: 4 }}>
                2027 Наадамд Баг Урьдчилан Бүртгүүлэх
              </h2>
              <p style={{ color: 'var(--text-sub)', marginTop: 6, fontSize: '0.92rem' }}>
                Маягтыг бөглөж илгээснээр зохион байгуулах комиссоос бэлтгэл мэдээлэл болон дүрмийн зааврыг и-мэйлээр илгээнэ.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: 'center',
                  padding: 'clamp(24px, 5vw, 40px)',
                  backgroundColor: '#FFF7ED',
                  borderRadius: 18,
                  border: '1.5px solid rgba(248, 90, 64, 0.3)'
                }}
              >
                <CheckCircle2 size={56} color="var(--aiesec-orange)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 8, color: 'var(--text-main)' }}>
                  Бүртгэл Амжилттай Хүлээгдэж Авлаа!
                </h3>
                <p style={{ color: 'var(--text-sub)', lineHeight: 1.6, maxWidth: 540, margin: '0 auto 24px' }}>
                  Баярлалаа! Багийн ахлагч <strong>{formData.captainName}</strong> ({formData.phone}), <strong>{formData.teamName}</strong> багийн 2027 наадмын урьдчилсан бүртгэл системд орлоо. Тоглолтын хуваарь, бэлтгэлийг <strong>{formData.email}</strong> хаягаар илгээнэ.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="aiesec-btn-primary"
                  style={{ background: 'var(--aiesec-orange)', borderColor: 'var(--aiesec-orange)' }}
                >
                  Өөр баг бүртгүүлэх
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-2col-grid">
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                      Спортын Төрөл *
                    </label>
                    <select
                      className="form-select"
                      value={formData.sport}
                      onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
                    >
                      <option value="basketball_men">🏀 Сагсан бөмбөг (Эрэгтэй)</option>
                      <option value="basketball_women">🏀 Сагсан бөмбөг (Эмэгтэй)</option>
                      <option value="volleyball">🏐 Гар бөмбөг (Холимог 4+2)</option>
                      <option value="football">⚽ Хөлбөмбөг (Mini Football)</option>
                      <option value="table_tennis">🏓 Ширээний теннис</option>
                      <option value="tennis">🎾 Талбайн теннис</option>
                      <option value="chess">♟️ Шатар</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                      Багийн Нэр *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      placeholder="Жишээ: Vienna Warriors"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-2col-grid">
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                      Ахлагчийн Овог Нэр *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      placeholder="Овог Нэр"
                      value={formData.captainName}
                      onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                      Холбогдох Утас *
                    </label>
                    <input
                      type="tel"
                      className="form-input"
                      required
                      placeholder="+43 676 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-2col-grid">
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                      И-мэйл Хаяг *
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      required
                      placeholder="captain@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                      Улс / Хот *
                    </label>
                    <select
                      className="form-select"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    >
                      <option value="Austria - Wien">🇦🇹 Австри (Вена)</option>
                      <option value="Austria - Graz">🇦🇹 Австри (Грац)</option>
                      <option value="Austria - Linz">🇦🇹 Австри (Линц)</option>
                      <option value="Germany - Munich">🇩🇪 Герман (Мюнхен)</option>
                      <option value="Germany - Berlin">🇩🇪 Герман (Берлин)</option>
                      <option value="Czechia - Prague">🇨🇿 Чех (Прага)</option>
                      <option value="Hungary - Budapest">🇭🇺 Унгар (Будапешт)</option>
                      <option value="Switzerland - Zurich">🇨🇭 Швейцар (Цюрих)</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                    Нэмэлт Мэдээлэл / Тоглогчдын тоо
                  </label>
                  <textarea
                    className="form-textarea"
                    rows={3}
                    placeholder="Тоглогчдын нэрс, өмсгөлийн өнгө, тусгай хүсэлт..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="aiesec-btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '14px',
                    background: 'var(--aiesec-orange)',
                    borderColor: 'var(--aiesec-orange)',
                    boxShadow: '0 8px 24px rgba(248, 90, 64, 0.35)'
                  }}
                >
                  <span>2027 Наадамд Бүртгүүлэх</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          7. HALL OF FAME - PAST CHAMPIONS (2025, 2024, 2023)
          ------------------------------------------------------------- */}
      <section style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#D97706', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Hall of Fame
            </span>
            <h3 style={{ fontSize: '2.1rem', fontWeight: 800, marginTop: 4 }}>
              Өмнөх Жилүүдийн Аваргууд
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
            {championsHallOfFame.map((champ, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFBEB',
                  border: '1px solid #FDE68A',
                  borderRadius: 16,
                  padding: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#B45309' }}>{champ.year} ОН</span>
                  <Medal size={18} color="#D97706" />
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#78350F' }}>{champ.winner}</h4>
                <div style={{ fontSize: '0.82rem', color: '#92400E' }}>{champ.sport}</div>
                <div style={{ fontSize: '0.78rem', color: '#B45309', marginTop: 4 }}>MVP: {champ.mvp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
