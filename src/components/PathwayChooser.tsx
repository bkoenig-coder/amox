import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Home, GraduationCap, Trophy, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PathwayChooser: React.FC = () => {
  const [selectedPathway, setSelectedPathway] = useState<'visa' | 'housing' | 'admission' | 'sports'>('visa');

  const pathways = [
    {
      id: 'visa',
      icon: ShieldCheck,
      title: 'MA35 Виз & Цаг Авах',
      sub: 'Герман өргөдөл бэлдэх, сунгалт',
      cardTitle: '🛂 MA35 Визний Өргөдөл & И-мэйл Генератор',
      cardDesc: 'MA35 цагаа баталгаажуулах, дутуу материалаа герман хэл дээр алдаагүй илгээх интерактив и-мэйл үүсгэгчийг ашиглаарай.',
      btnText: 'И-мэйл үүсгэх →',
      btnHref: '/visa-insurance'
    },
    {
      id: 'housing',
      icon: Home,
      title: 'Дотуур Байр Олох',
      sub: 'Вена, Грац, Линцийн 15+ байр',
      cardTitle: '🏠 Оюутны Дотуур Байр Хайгч & Харьцуулалт',
      cardDesc: 'OeAD, STUWO, WIHAST, Base19 зэрэг 15+ дотуур байрны үнэ, байршил, нөхцөлийг нэг дороос шүүж үзээрэй.',
      btnText: 'Байр хайх →',
      btnHref: '/housing'
    },
    {
      id: 'admission',
      icon: GraduationCap,
      title: 'Их Сургуулийн Элсэлт',
      sub: 'Герман курс (VWU), шалгалт',
      cardTitle: '🎓 Их Сургуулийн Элсэлт & VWU Германы Курс',
      cardDesc: 'Uni Wien, TU Wien, WU сургуулиудын элсэлтийн алхмууд, баримт бичгийн баталгаажуулалт, VWU хэлний бэлтгэл.',
      btnText: 'Элсэлтийн хөтөч унших →',
      btnHref: '/guide#chapter-1-admission'
    },
    {
      id: 'sports',
      icon: Trophy,
      title: 'Sun Festival Тэмцээн',
      sub: 'Сагс, волейбол, хөлбөмбөг бүртгэл',
      cardTitle: '🏆 AMOX Sun Festival 2027 Их Наадам',
      cardDesc: 'Сагсан бөмбөг, волейбол, хөлбөмбөг, шатар, теннисний тэмцээнд багаа бүртгүүлж €3,000+ шагналын төлөө өрсөлдөөрэй.',
      btnText: 'Баг бүртгүүлэх →',
      btnHref: '/sun-festival#register'
    }
  ];

  const current = pathways.find(p => p.id === selectedPathway) || pathways[0];

  return (
    <section className="pathway-section" style={{ padding: '60px 0', background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-subtle) 100%)' }}>
      <div className="container">
        <div style={{
          background: 'var(--surface)',
          border: '1.5px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          padding: 40,
          boxShadow: 'var(--shadow-card)'
        }}>
          <div className="text-center" style={{ maxWidth: 680, margin: '0 auto 32px' }}>
            <span className="section-subtitle">ИНТЕРАКТИВ ХЭРЭГСЭЛ &bull; 1-CLICK FINDER</span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: 10 }}>Та яг одоо юу шийдмээр байна вэ?</h2>
            <p style={{ color: 'var(--text-muted)' }}>Өөрийн нөхцөл байдалд тохирох товчийг дарахад хамгийн оновчтой заавар, холбоосууд харагдана.</p>
          </div>

          {/* Option Buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 14,
            marginBottom: 30
          }}>
            {pathways.map(p => {
              const Icon = p.icon;
              const isActive = selectedPathway === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPathway(p.id as any)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 8,
                    padding: 20,
                    background: isActive ? '#FFFFFF' : 'var(--bg-subtle)',
                    border: `2px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 8px 24px rgba(224, 6, 19, 0.15)' : 'none',
                    transition: 'var(--transition)'
                  }}
                >
                  <Icon size={24} color={isActive ? 'var(--primary)' : 'var(--text-muted)'} />
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-main)' }}>
                    {p.title}
                  </span>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    {p.sub}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Result Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: 32,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 28,
                flexWrap: 'wrap',
                boxShadow: 'var(--shadow-modal)'
              }}
            >
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: 8 }}>{current.cardTitle}</h4>
                <p style={{ color: '#CBD5E1', fontSize: '1rem', maxWidth: 620 }}>{current.cardDesc}</p>
              </div>
              <Link to={current.btnHref} className="btn btn-white btn-lg">
                {current.btnText}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
