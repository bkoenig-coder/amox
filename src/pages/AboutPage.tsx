import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Users, 
  History, 
  Award, 
  CheckCircle2, 
  Mail, 
  Send, 
  ArrowRight, 
  ShieldCheck, 
  GraduationCap, 
  Heart, 
  Sparkles, 
  Globe, 
  Compass, 
  Flag, 
  Gem, 
  Leaf, 
  Trophy, 
  ChevronDown, 
  ExternalLink 
} from 'lucide-react';
import { HandDrawnLoop, HandDrawnWave } from '../components/HandDrawnSVGs';
import { CascadingCollage } from '../components/CascadingCollage';
import { TIMELINE_HISTORY } from '../data/eventsData';

export const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mentor' | 'volunteer'>('mentor');
  
  // Mentorship Form State
  const [mentorForm, setMentorForm] = useState({
    name: '',
    email: '',
    phone: '',
    targetUniversity: 'Universität Wien',
    fieldOfStudy: 'Computer Science & Software',
    level: 'Bachelor',
    question: ''
  });
  const [mentorSubmitted, setMentorSubmitted] = useState(false);

  // Volunteer / Join Team State
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    university: 'Universität Wien',
    role: 'events',
    motivation: ''
  });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleMentorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMentorSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
    confetti({
      particleCount: 110,
      spread: 90,
      origin: { y: 0.6 }
    });
  };

  const boardMembers = [
    {
      name: 'Б. Тэмүүлэн',
      role: 'Ерөнхийлөгч (President)',
      university: 'Uni Wien • Data Science M.Sc.',
      bio: 'Холбооны ерөнхий стратеги, гадаад харилцаа, Австрийн их сургуулиудтай хийх албан ёсны хамтын ажиллагааг удирдан чиглүүлдэг.',
      image: '/assets/student-male.jpg',
      badge: 'Leadership'
    },
    {
      name: 'Э. Ариунзаяа',
      role: 'Дэд Ерөнхийлөгч & Менторшил',
      university: 'WU Wien • International Business',
      bio: '1-on-1 Ментор хөтөлбөр, шинэ оюутны дасан зохицох өдөрлөг болон карьер хөгжүүлэлтийн төслүүдийг хариуцдаг.',
      image: '/assets/student-female.jpg',
      badge: 'Mentorship'
    },
    {
      name: 'М. Бат-Эрдэнэ',
      role: 'Sun Festival Төслийн Менежер',
      university: 'TU Wien • Mechanical Engineering',
      bio: 'Европ дахь Монгол оюутнуудын спортын нэгдсэн наадам, сагсан бөмбөг, волейболын лиг, логистикийг хариуцдаг.',
      image: '/assets/media_1787152152741.jpg',
      badge: 'Sports & Event'
    },
    {
      name: 'Н. Хулан',
      role: 'Мэдээлэл & MA35 Визний Хөтөч',
      university: 'Uni Wien • Law & European Studies',
      bio: '9 бүлэг оюутны гарын авлага, MA35 визний өргөдлийн зааварчилгаа, Австрийн хууль дүрмийн зөвлөгөөг боловсруулдаг.',
      image: '/assets/media_1787152257891.jpg',
      badge: 'Guide & Visa'
    }
  ];

  const faqs = [
    {
      q: 'AMOX гэж ямар байгууллага вэ? Албан ёсны бүртгэлтэй юу?',
      a: 'AMOX (Verein der Mongolischen Studenten in Österreich) нь 2007 онд Австри улсын Дотоод Хэргийн Яамны ZVR-д албан ёсоор бүртгэгдсэн, ашгийн бус, оюутан залуусын төрийн бус байгууллага юм.'
    },
    {
      q: 'Менторшил хөтөлбөрт хэн хамрагдах боломжтой вэ? Үнэ төлбөртэй юу?',
      a: 'Австри улсын их дээд сургуульд суралцахаар бэлтгэж буй, эсвэл одоо суралцаж буй бүх Монгол оюутнуудад 100% үнэ төлбөргүй нээлттэй. Та өөрийн сонирхож буй сургуулийн ахмад төгсөгчтэй 1-on-1 холбогдох боломжтой.'
    },
    {
      q: 'AMOX багт хэрхэн нэгдэж волонтер хийх вэ?',
      a: 'Энэхүү хуудасны доод хэсэгт байрлах "Багт нэгдэх" формоор дамжуулан маркетинг, эвент зохион байгуулалт, оюутны гарын авлага боловсруулах зэрэг багуудад бүртгүүлэх боломжтой.'
    },
    {
      q: 'Sun Festival спортын наадам хэзээ болдог вэ?',
      a: 'Жил бүрийн 7-р сард Вена хотноо уламжлал болгон зохиогддог. Сагсан бөмбөг, волейбол, хөлбөмбөг, теннис, ширээний теннис, шатрын 6 төрлөөр явагддаг.'
    }
  ];

  return (
    <div className="about-page" style={{ overflowX: 'hidden' }}>
      {/* -------------------------------------------------------------
          1. HERO SECTION - AIESEC Dark Scenic Background
          ------------------------------------------------------------- */}
      <section
        id="about-intro"
        style={{
          position: 'relative',
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(180deg, rgba(0, 20, 50, 0.72) 0%, rgba(0, 20, 50, 0.85) 100%), url(/assets/student-male.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          color: '#FFFFFF',
          padding: '130px 0 80px',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 880 }}>
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
                background: 'rgba(255, 255, 255, 0.16)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                fontSize: '0.84rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: 20
              }}
            >
              <span>🇦🇹 Verein der Mongolischen Studenten &bull; Seit 2007</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                lineHeight: 1.15,
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: 20,
                letterSpacing: '-0.03em'
              }}
            >
              About{' '}
              <span className="doodle-wrap">
                AMOX Austria
                <HandDrawnLoop color="#037EF3" />
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                color: 'rgba(255, 255, 255, 0.92)',
                lineHeight: 1.7,
                maxWidth: 700,
                margin: '0 auto 30px'
              }}
            >
              Австри улсад суралцаж буй Монгол оюутан залуусыг нэгтгэн, тэдний эрдэм боловсрол, карьер, хууль эрх зүйн баталгаа болон соёл спортын манлайллыг дэмжих 100% оюутны байгууллага.
            </p>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#history" className="aiesec-btn-primary">
                <span>18 Жилийн Түүх</span>
                <ArrowRight size={16} />
              </a>
              <a href="#mentor" className="aiesec-btn-outline">
                <span>Ментор хүсэх / Багт нэгдэх</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. MISSION & VISION MANIFESTO
          ------------------------------------------------------------- */}
      <section style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 60,
              alignItems: 'center'
            }}
            className="program-row"
          >
            <div>
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: 'var(--aiesec-blue)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 10
                }}
              >
                Who We Are &bull; Алсын Хараа
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                  fontWeight: 300,
                  marginBottom: 24,
                  lineHeight: 1.2
                }}
              >
                <span className="doodle-wrap" style={{ fontWeight: 800 }}>
                  Залуусаас
                  <HandDrawnWave color="#037EF3" />
                </span>{' '}
                Залуусын Төлөө
              </h2>

              <p style={{ fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--text-sub)', marginBottom: 20 }}>
                <strong>AMOX (Austrian Mongolian Students Association)</strong> нь 2007 оноос эхлэн Вена, Грац, Линц, Зальцбург хотуудын их дээд сургуулиудад суралцаж буй Монгол оюутнуудын харилцаа холбоо, мэдээллийн нэгдсэн гүүр болсоор ирсэн.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ background: '#EFF6FF', color: 'var(--aiesec-blue)', padding: 8, borderRadius: '50%', flexShrink: 0 }}>
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Алсын Хараа (Vision)</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Австри дахь Монгол оюутан бүр дэлхийн жишигт нийцсэн өндөр боловсрол эзэмшиж, салбар бүрийн тэргүүлэх манлайлагч болон төлөвших.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ background: '#FFF7ED', color: 'var(--aiesec-orange)', padding: 8, borderRadius: '50%', flexShrink: 0 }}>
                    <Flag size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Эрхэм Зорилго (Mission)</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Оюутны виз, дотуур байр, 9 бүлэг гарын авлага, 1-on-1 менторшил болон Sun Festival спортын наадмаар дамжуулан оюутан залуусыг бүх талаар дэмжих.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <CascadingCollage
                img1="/assets/student-female.jpg"
                img2="/assets/media_1787152152741.jpg"
                img3="/assets/media_1787152257891.jpg"
                alt="AMOX оюутан хамт олон"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. CORE VALUES SECTION (The 6 AIESEC Pillars)
          ------------------------------------------------------------- */}
      <section style={{ padding: '90px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--aiesec-blue)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Our Foundations
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: 4 }}>
              Үнэт Зүйлс (Core Values)
            </h2>
            <p style={{ color: 'var(--text-sub)', maxWidth: 600, margin: '8px auto 0' }}>
              AMOX холбооны бүх үйл ажиллагаа, хөтөлбөр, хамтын ажиллагааны үндэс суурь
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 24
            }}
          >
            <div className="timeline-card" style={{ borderLeft: '4px solid #037EF3' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ background: '#EFF6FF', color: '#037EF3', padding: 10, borderRadius: 12 }}>
                  <Flag size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Activating Leadership</h4>
                  <span style={{ fontSize: '0.75rem', color: '#037EF3', fontWeight: 700 }}>МАНЛАЙЛАЛ</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.6 }}>
                Залууст санаачлага гаргах, арга хэмжээ зохион байгуулах, өөрийн манлайллын ур чадварыг бодитоор хөгжүүлэх талбар олгоно.
              </p>
            </div>

            <div className="timeline-card" style={{ borderLeft: '4px solid #F85A40' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ background: '#FFF7ED', color: '#F85A40', padding: 10, borderRadius: 12 }}>
                  <Gem size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Demonstrating Integrity</h4>
                  <span style={{ fontSize: '0.75rem', color: '#F85A40', fontWeight: 700 }}>ШУДАРГА &amp; ИЛ ТОД</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.6 }}>
                Холбооны санхүү, үйл ажиллагаа, дүрэм журам 100% нээлттэй, хариуцлагатай, гишүүдийнхээ эрх ашгийн төлөө ажиллана.
              </p>
            </div>

            <div className="timeline-card" style={{ borderLeft: '4px solid #F4B400' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ background: '#FEF9C3', color: '#B45309', padding: 10, borderRadius: 12 }}>
                  <Heart size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Enjoying Participation</h4>
                  <span style={{ fontSize: '0.75rem', color: '#B45309', fontWeight: 700 }}>НӨХӨРЛӨЛ &amp; ОРОЛЦОО</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.6 }}>
                Хамтдаа суралцах, спорт соёлын арга хэмжээнд идэвхтэй оролцох, бие биедээ урам зориг бэлэглэх эерэг уур амьсгалыг бүрдүүлнэ.
              </p>
            </div>

            <div className="timeline-card" style={{ borderLeft: '4px solid #00C16E' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ background: '#F0FDF4', color: '#00C16E', padding: 10, borderRadius: 12 }}>
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Acting Sustainably</h4>
                  <span style={{ fontSize: '0.75rem', color: '#00C16E', fontWeight: 700 }}>ТОГТВОРТОЙ ХӨГЖИЛ</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.6 }}>
                Үе үеийн оюутнуудад өвлөгдөн үлдэх систем, цахим гарын авлага, байгууллагын залгамж халааг чанартай авч явна.
              </p>
            </div>

            <div className="timeline-card" style={{ borderLeft: '4px solid #002D62' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ background: '#EFF6FF', color: '#002D62', padding: 10, borderRadius: 12 }}>
                  <Trophy size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Striving for Excellence</h4>
                  <span style={{ fontSize: '0.75rem', color: '#002D62', fontWeight: 700 }}>ЧАНАРЫН СТАНДАРТ</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.6 }}>
                Эрдэм шинжилгээ, хэлний бэлтгэл, карьер болон спортын тэмцээндээ өндөр гүйцэтгэл, дээд амжилтыг зорьдог.
              </p>
            </div>

            <div className="timeline-card" style={{ borderLeft: '4px solid #00878A' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ background: '#ECFEFF', color: '#00878A', padding: 10, borderRadius: 12 }}>
                  <Users size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Living Diversity</h4>
                  <span style={{ fontSize: '0.75rem', color: '#00878A', fontWeight: 700 }}>ОЛОН ТАЛТ БАЙДАЛ</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.6 }}>
                Австрийн бүх их сургууль, салбар бүрийн мэргэжил, соёлын ялгааг хүндэтгэн хамтдаа нэгдэж хүчирхэг баг болно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. 18-YEAR INTERACTIVE HISTORY TIMELINE
          ------------------------------------------------------------- */}
      <section id="history" style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--aiesec-blue)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Seit 2007 &bull; 18 Жилийн Түүх
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: 4 }}>
              Түүхэн Замнал &amp; Онцлох Үйл Явдлууд
            </h2>
            <p style={{ color: 'var(--text-sub)', marginTop: 8 }}>
              Үүсгэн байгуулагдсан цагаас өнөөг хүртэл бүтээсэн замнал
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {TIMELINE_HISTORY.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 6 }}
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid var(--border)',
                  borderRadius: 20,
                  padding: '24px 28px',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  gap: 22,
                  alignItems: 'flex-start'
                }}
              >
                <div
                  style={{
                    background: idx === 4 ? 'var(--aiesec-blue)' : idx === 1 ? 'var(--aiesec-orange)' : '#0A192F',
                    color: '#FFFFFF',
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-pill)',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  {item.year}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 6 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-sub)', lineHeight: 1.65 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. EXECUTIVE BOARD & LEADERSHIP TEAM
          ------------------------------------------------------------- */}
      <section id="board" style={{ padding: '100px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--aiesec-blue)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Executive Board
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: 4 }}>
              Удирдах Зөвлөл &amp; Баг Хамт Олон
            </h2>
            <p style={{ color: 'var(--text-sub)', maxWidth: 600, margin: '8px auto 0' }}>
              Австрийн их сургуулиудад суралцаж буй оюутнуудын сайн дурын манлайллын баг
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 28
            }}
          >
            {boardMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div style={{ height: 240, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'rgba(3, 126, 243, 0.9)',
                      color: '#FFFFFF',
                      padding: '4px 10px',
                      borderRadius: 6,
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}
                  >
                    {member.badge}
                  </div>
                </div>

                <div style={{ padding: 22, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 4 }}>
                    {member.name}
                  </h4>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--aiesec-blue)', marginBottom: 8, display: 'block' }}>
                    {member.role}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <GraduationCap size={15} /> {member.university}
                  </span>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', lineHeight: 1.6, flexGrow: 1 }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. INTERACTIVE 1-ON-1 MENTORSHIP & JOIN TEAM FORM
          ------------------------------------------------------------- */}
      <section id="mentor" style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 24,
              padding: 'clamp(22px, 5vw, 44px)',
              boxShadow: '0 20px 50px rgba(0, 45, 98, 0.09)',
              border: '1.5px solid var(--border)'
            }}
          >
            {/* Form Mode Switcher Tabs */}
            <div
              className="scroll-x-touch"
              style={{
                display: 'flex',
                background: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-pill)',
                padding: 4,
                marginBottom: 32,
                border: '1px solid var(--border)',
                gap: 4
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('mentor')}
                style={{
                  flex: 1,
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  background: activeTab === 'mentor' ? 'var(--aiesec-blue)' : 'transparent',
                  color: activeTab === 'mentor' ? '#FFFFFF' : 'var(--text-sub)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  whiteSpace: 'nowrap'
                }}
              >
                👥 1-on-1 Ментор Зөвлөгөө Авах
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('volunteer')}
                style={{
                  flex: 1,
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  background: activeTab === 'volunteer' ? 'var(--aiesec-orange)' : 'transparent',
                  color: activeTab === 'volunteer' ? '#FFFFFF' : 'var(--text-sub)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  whiteSpace: 'nowrap'
                }}
              >
                ✨ AMOX Багт Нэгдэх &bull; Volunteer
              </button>
            </div>

            {/* TAB 1: MENTORSHIP FORM */}
            {activeTab === 'mentor' && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: 28 }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 6 }}>
                    Ахмад Оюутнаас 1-on-1 Ментор Зөвлөгөө Авах
                  </h3>
                  <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem' }}>
                    Таны сонирхож буй сургууль, мэргэжлийн чиглэлээр амжилттай суралцаж буй ахмад оюутантай үнэ төлбөргүй холбож өгнө.
                  </p>
                </div>

                {mentorSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      textAlign: 'center',
                      padding: 'clamp(24px, 5vw, 40px)',
                      backgroundColor: '#EFF6FF',
                      borderRadius: 18,
                      border: '1.5px solid rgba(3, 126, 243, 0.3)'
                    }}
                  >
                    <CheckCircle2 size={54} color="var(--aiesec-blue)" style={{ margin: '0 auto 16px' }} />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 8, color: 'var(--text-main)' }}>
                      Хүсэлт Амжилттай Илгээгдлээ!
                    </h3>
                    <p style={{ color: 'var(--text-sub)', lineHeight: 1.6, maxWidth: 540, margin: '0 auto' }}>
                      Баярлалаа, <strong>{mentorForm.name}</strong>. Бид <strong>{mentorForm.targetUniversity}</strong>-ийн <strong>{mentorForm.fieldOfStudy}</strong> чиглэлээр суралцаж буй ментортой холбон 48 цагийн дотор и-мэйлээр хариу илгээх болно.
                    </p>
                    <button
                      onClick={() => setMentorSubmitted(false)}
                      className="aiesec-btn-primary"
                      style={{ marginTop: 24 }}
                    >
                      Өөр хүсэлт илгээх
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleMentorSubmit}>
                    <div className="form-2col-grid">
                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                          Таны Нэр *
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          required
                          placeholder="Овог Нэр"
                          value={mentorForm.name}
                          onChange={(e) => setMentorForm({ ...mentorForm, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                          И-мэйл Хаяг *
                        </label>
                        <input
                          type="email"
                          className="form-input"
                          required
                          placeholder="example@email.com"
                          value={mentorForm.email}
                          onChange={(e) => setMentorForm({ ...mentorForm, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-2col-grid">
                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                          Сонирхож буй Их Сургууль *
                        </label>
                        <select
                          className="form-select"
                          value={mentorForm.targetUniversity}
                          onChange={(e) => setMentorForm({ ...mentorForm, targetUniversity: e.target.value })}
                        >
                          <option value="Universität Wien">Universität Wien (Uni Wien)</option>
                          <option value="TU Wien">TU Wien (Техникийн Их Сургууль)</option>
                          <option value="WU Wien">WU Wien (Эдийн Засгийн Их Сургууль)</option>
                          <option value="MedUni Wien">MedUni Wien (Анагаах)</option>
                          <option value="JKU Linz">JKU Linz</option>
                          <option value="Uni Graz">Uni Graz</option>
                          <option value="BOKU Wien">BOKU Wien</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                          Мэргэжлийн Чиглэл *
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          required
                          placeholder="Жишээ: IT, Эдийн засаг, Анагаах..."
                          value={mentorForm.fieldOfStudy}
                          onChange={(e) => setMentorForm({ ...mentorForm, fieldOfStudy: e.target.value })}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                        Асуух Зүйл / Зөвлөгөө авах сэдэв
                      </label>
                      <textarea
                        className="form-textarea"
                        rows={3}
                        placeholder="Та юун дээр голчлон зөвлөгөө авмаар байна вэ? (VWU герман курс, MA35 визний өргөдөл, 20 цагийн ажил, хичээл сонголт...)"
                        value={mentorForm.question}
                        onChange={(e) => setMentorForm({ ...mentorForm, question: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="aiesec-btn-primary"
                      style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
                    >
                      <span>Ментор хүсэлт илгээх (Үнэ төлбөргүй)</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* TAB 2: VOLUNTEER / JOIN TEAM FORM */}
            {activeTab === 'volunteer' && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: 28 }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 6 }}>
                    AMOX Багт Нэгдэх &bull; Youth Leadership
                  </h3>
                  <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem' }}>
                    Монгол оюутан залуусынхаа төлөө хамтдаа зүтгэж, манлайлал ба эвент зохион байгуулалтын олон улсын туршлага хуримтлуулаарай.
                  </p>
                </div>

                {volunteerSubmitted ? (
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
                    <CheckCircle2 size={54} color="var(--aiesec-orange)" style={{ margin: '0 auto 16px' }} />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 8, color: 'var(--text-main)' }}>
                      Тавтай Морил, Багт Нэгдэх Хүсэлтийг Хүлээн Авлаа!
                    </h3>
                    <p style={{ color: 'var(--text-sub)', lineHeight: 1.6, maxWidth: 540, margin: '0 auto' }}>
                      Баярлалаа, <strong>{volunteerForm.name}</strong>. Бид таны хүсэлтийг шалган, ойрын хугацаанд болох AMOX Team Welcome уулзалтад урих болно.
                    </p>
                    <button
                      onClick={() => setVolunteerSubmitted(false)}
                      className="aiesec-btn-primary"
                      style={{ marginTop: 24, background: 'var(--aiesec-orange)', borderColor: 'var(--aiesec-orange)' }}
                    >
                      Өөр хүсэлт илгээх
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleVolunteerSubmit}>
                    <div className="form-2col-grid">
                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                          Таны Нэр *
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          required
                          placeholder="Овог Нэр"
                          value={volunteerForm.name}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                          И-мэйл Хаяг *
                        </label>
                        <input
                          type="email"
                          className="form-input"
                          required
                          placeholder="example@email.com"
                          value={volunteerForm.email}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-2col-grid">
                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                          Суралцаж буй Сургууль *
                        </label>
                        <select
                          className="form-select"
                          value={volunteerForm.university}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, university: e.target.value })}
                        >
                          <option value="Universität Wien">Universität Wien</option>
                          <option value="TU Wien">TU Wien</option>
                          <option value="WU Wien">WU Wien</option>
                          <option value="MedUni Wien">MedUni Wien</option>
                          <option value="Бусад">Австрийн бусад сургууль</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                          Сонирхож буй Баг / Үүрэг *
                        </label>
                        <select
                          className="form-select"
                          value={volunteerForm.role}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, role: e.target.value })}
                        >
                          <option value="events">🏆 Sun Festival &amp; Эвент зохион байгуулалт</option>
                          <option value="marketing">🎨 Дизайн, Медиа &amp; Сошиал маркетинг</option>
                          <option value="guide">📖 Оюутны гарын авлага &amp; Виз судалгаа</option>
                          <option value="partnership">🤝 Гадаад харилцаа &amp; Түншлэл</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                        Өөрийн тухай товч танилцуулга
                      </label>
                      <textarea
                        className="form-textarea"
                        rows={3}
                        placeholder="Та өөрийн давуу тал, сонирхол, өмнөх туршлагаасаа хуваалцаарай..."
                        value={volunteerForm.motivation}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, motivation: e.target.value })}
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
                        borderColor: 'var(--aiesec-orange)'
                      }}
                    >
                      <span>AMOX Багт Нэгдэх Хүсэлт Илгээх</span>
                      <Sparkles size={16} />
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          7. FAQ ACCORDION & VEREIN LEGAL INFO
          ------------------------------------------------------------- */}
      <section style={{ padding: '90px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--aiesec-blue)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              FAQ &amp; Legal Info
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: 4 }}>
              Түгээмэл Асуултууд &amp; Албан Ёсны Мэдээлэл
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 50 }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                      color: 'var(--aiesec-blue)'
                    }}
                  />
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ padding: '0 24px 20px', color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: 1.7 }}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Official Verein Legal Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              padding: '28px 32px',
              border: '1px solid var(--border)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 20,
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 4 }}>
                🇦🇹 Verein der Mongolischen Studenten in Österreich
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                ZVR-Zahl (Австрийн Дотоод Хэргийн Яамны Бүртгэлийн Дугаар): Албан ёсны ТББ статус Seit 2007
              </p>
            </div>
            <a
              href="mailto:contact@amox.at"
              className="aiesec-btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.88rem' }}
            >
              <Mail size={15} />
              <span>Холбоо барих</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
