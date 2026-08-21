import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Trophy, Users, Handshake, CheckCircle2, ArrowRight } from 'lucide-react';

export const AudienceSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'sports' | 'mentorship' | 'partners'>('students');

  const tabs = [
    { id: 'students', label: 'Шинээр Ирэгсэд & Оюутнууд', icon: GraduationCap },
    { id: 'sports', label: 'Sun Festival & Спорт', icon: Trophy },
    { id: 'mentorship', label: 'Менторшил & 20h Ажил', icon: Users },
    { id: 'partners', label: 'Хамтрагч & Спонсорууд', icon: Handshake }
  ];

  return (
    <section className="audience-section" style={{ padding: '60px 0 30px' }}>
      <div className="container">
        <div className="section-title-wrap text-center">
          <span className="section-subtitle">ТА ХЭН БЭ? &bull; ЗОРИЛТОТ ЧИГЛЭЛ</span>
          <h2>Хэрэгцээндээ Тохирсон Дэмжлэгийг Сонгоорой</h2>
          <p>
            AMOX холбоо нь Австри дахь оюутан залуус, шинээр ирэгсэд, спорт сонирхогчид болон хамтрагч байгууллагуудад зориулсан тусгай дэмжлэгийг үзүүлдэг.
          </p>
        </div>

        {/* Tab Buttons with Animated Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 36 }}>
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  border: '2px solid transparent',
                  background: isActive ? 'var(--primary)' : 'var(--bg-subtle)',
                  color: isActive ? '#FFFFFF' : 'var(--text-sub)',
                  cursor: 'pointer',
                  boxShadow: isActive ? 'var(--shadow-primary-btn)' : 'none',
                  transition: 'var(--transition)'
                }}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'students' && (
            <motion.div
              key="students"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 40,
                boxShadow: 'var(--shadow-card)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: 40,
                alignItems: 'center'
              }}
            >
              <div>
                <span className="badge badge-primary" style={{ marginBottom: 14 }}>ОЮУТАН ЗАЛУУСТ ЗОРИУЛАВ</span>
                <h3 style={{ fontSize: '1.9rem', marginBottom: 14 }}>Австрид Суралцах, Амьдрах Цогц Дэмжлэг</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-sub)', marginBottom: 24 }}>
                  Хэрэв та Австри улсын их сургуульд элсэхээр төлөвлөж буй эсвэл шинэхэн ирсэн оюутан бол бид дотуур байрны сонголт, MA35 визний өргөдөл, даатгал болон герман хэлний бэлтгэл курсийн талаар алхам алхмаар зааварчилна.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link to="/guide" className="btn btn-primary">Гарын авлага унших <ArrowRight size={16} /></Link>
                  <Link to="/housing" className="btn btn-outline">Дотуур байр хайх</Link>
                </div>
              </div>
              <div style={{ background: 'var(--primary-light)', padding: 26, borderRadius: 'var(--radius-md)', border: '1px solid rgba(224,6,19,0.15)' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>Их Сургуулиудын Элсэлт</h5>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Uni Wien, TU Wien, WU, MedUni, Graz, Linz</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>15+ Дотуур Байрны Нэгдсэн Сан</h5>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>OeAD, STUWO, WIHAST, Base19, Milestone</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'sports' && (
            <motion.div
              key="sports"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 40,
                boxShadow: 'var(--shadow-card)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: 40,
                alignItems: 'center'
              }}
            >
              <div>
                <span className="badge badge-yellow" style={{ marginBottom: 14 }}>СПОРТЫН НЭГДСЭН НААДАМ</span>
                <h3 style={{ fontSize: '1.9rem', marginBottom: 14 }}>AMOX Sun Festival 2027 &bull; Вена Хот</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-sub)', marginBottom: 24 }}>
                  Европын өнцөг булан бүрээс (Австри, Герман, Чех, Унгар, Швейцар) хүрэлцэн ирэх Монгол залуусын сагсан бөмбөг, гар бөмбөг, хөлбөмбөг, теннис, шатрын аварга шалгаруулах их наадам.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link to="/sun-festival#register" className="btn btn-primary">Багаа бүртгүүлэх <ArrowRight size={16} /></Link>
                  <Link to="/sun-festival" className="btn btn-outline">Наадмын дүрэм үзэх</Link>
                </div>
              </div>
              <div style={{ background: 'var(--primary-light)', padding: 26, borderRadius: 'var(--radius-md)', border: '1px solid rgba(224,6,19,0.15)' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Trophy size={22} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>€3,000+ Шагналын Сан</h5>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>6 төрлийн аваргууд &amp; шилдэг тамирчид</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'mentorship' && (
            <motion.div
              key="mentorship"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 40,
                boxShadow: 'var(--shadow-card)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: 40,
                alignItems: 'center'
              }}
            >
              <div>
                <span className="badge badge-primary" style={{ marginBottom: 14 }}>КАРЬЕР &amp; ТУРШЛАГА</span>
                <h3 style={{ fontSize: '1.9rem', marginBottom: 14 }}>Ахмад Оюутны Менторшил &amp; 20h Ажил</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-sub)', marginBottom: 24 }}>
                  Австрийн ТОП сургуулиудад амжилттай суралцаж буй болон Австрийн компаниудад мэргэжлээрээ ажиллаж буй ахмад төгсөгчдөөс хичээл сонголт, AMS 20 цагийн ажиллах зөвшөөрлийн үнэ төлбөргүй зөвлөгөө аваарай.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link to="/about#mentor" className="btn btn-primary">Ментор холбогдох <ArrowRight size={16} /></Link>
                  <Link to="/guide#chapter-5-work" className="btn btn-outline">20 цагийн ажил судлах</Link>
                </div>
              </div>
              <div style={{ background: 'var(--primary-light)', padding: 26, borderRadius: 'var(--radius-md)', border: '1px solid rgba(224,6,19,0.15)' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Users size={22} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>1-on-1 Ментор Сүлжээ</h5>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>IT, Бизнес, Анагаах, Инженерчлэлийн чиглэлээр</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'partners' && (
            <motion.div
              key="partners"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 40,
                boxShadow: 'var(--shadow-card)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: 40,
                alignItems: 'center'
              }}
            >
              <div>
                <span className="badge badge-primary" style={{ marginBottom: 14 }}>ХАМТЫН АЖИЛЛАГАА</span>
                <h3 style={{ fontSize: '1.9rem', marginBottom: 14 }}>Хамтрагч Байгууллага &amp; Спонсорууд</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-sub)', marginBottom: 24 }}>
                  AMOX нь Австри дахь Монгол Улсын Элчин сайдын яам, их сургуулиудын оюутны холбоод (ÖH), бизнес болон соёлын байгууллагуудтай хамтран залуусын боловсрол, спортыг дэмжин ажилладаг.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link to="/about#partners" className="btn btn-primary">Хамтрагчид үзэх <ArrowRight size={16} /></Link>
                  <a href="mailto:contact@amox.at" className="btn btn-outline">Санал хүсэлт илгээх</a>
                </div>
              </div>
              <div style={{ background: 'var(--primary-light)', padding: 26, borderRadius: 'var(--radius-md)', border: '1px solid rgba(224,6,19,0.15)' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Handshake size={22} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>500+ Залууст Хүрэх Суваг</h5>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Австри дахь албан ёсны хамтын ажиллагааны хөтөлбөрүүд</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
