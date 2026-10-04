import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchEvents, isPast, type PublicEvent } from '../lib/api';
import { ArrowRight, ArrowUpRight, BookOpen, Building2, MapPin, ShieldCheck, Users } from 'lucide-react';
import { OfficialChannelsSection } from '../components/OfficialChannelsSection';
import { AnimatedStatNumber } from '../components/AnimatedStatCounter';
import { EVENTS_DATA } from '../data/eventsData';
import { AMOX_MISSION_VISION } from '../data/associationData';

const SERVICES = [
  { to: '/guide', Icon: BookOpen, title: 'Оюутны хөтөч', text: 'Элсэлтээс даатгал хүртэл 9 бүлэгт ойлгомжтой тайлбарласан гарын авлага.', tint: 'var(--tint-lilac)' },
  { to: '/housing', Icon: Building2, title: 'Байр хайгч', text: 'OeAD, STUWO зэрэг 15+ байрны үнэ, байршлыг харьцуулж үзэх.', tint: 'var(--tint-sky)' },
  { to: '/visa-insurance', Icon: ShieldCheck, title: 'Виз & Даатгал', text: 'MA35-д илгээх и-мэйл бэлтгэх, E-Card даатгалын тайлбар.', tint: 'var(--tint-peach)' },
  { to: '/about#mentor', Icon: Users, title: 'Ментор', text: 'Ахмад оюутнуудтай холбогдож, ганцаарчилсан зөвлөгөө авах.', tint: 'var(--tint-mint)' }
];

// Compact date chip shown beside each event
const DATE_CHIP: Record<string, [string, string]> = {
  'students-info-day-2026': ['19', 'IX · 2026'],
  'ma35-deadline-winter-2026': ['IX–X', '2026'],
  'sun-festival-2027': ['V', '2027'],
  'housing-early-booking-2026': ['26/27', 'Хичээлийн жил']
};

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

interface AgendaItem {
  id: string;
  title: string;
  description: string;
  location: string;
  chip: [string, string];
  to: string;
}

const fromLive = (e: PublicEvent): AgendaItem => {
  const [y, m, d] = e.date.split('-').map(Number);
  return {
    id: e.id,
    title: e.title,
    description: e.description,
    location: e.location,
    chip: [String(d), ROMAN[m - 1] + ' · ' + y],
    to: '/events#' + e.id
  };
};

export const HomePage: React.FC = () => {
  // Events added by the admin (with registration). Falls back to the built-in
  // list until at least one event has been added.
  const [live, setLive] = useState<PublicEvent[]>([]);
  useEffect(() => {
    fetchEvents().then((e) => setLive(e.filter((x) => !isPast(x.date)))).catch(() => undefined);
  }, []);

  const agenda: AgendaItem[] =
    live.length > 0
      ? live.slice(0, 5).map(fromLive)
      : EVENTS_DATA.map((e) => ({
          id: e.id,
          title: e.title,
          description: e.description,
          location: e.location,
          chip: DATE_CHIP[e.id] ?? ['—', ''],
          to: e.linkUrl
        }));

  return (
    <div className="home">
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        <div className="container hero-in">
          <span className="pill a1"><i /> Seit 2007 · Вена</span>
          <h1 className="a2">
            Австри дахь Монгол оюутнуудын <span className="hl">нэгдсэн холбоо</span>
          </h1>
          <p className="hero-lead a3">
            Шинээр ирсэн оюутанд зөвлөгөө өгч, байр, виз, сургуулийн асуудалд нь тусалж, хамт олонтой нь холбодог. Холбоог оюутнууд өөрсдөө удирддаг.
          </p>
          <div className="hero-cta a4">
            <Link to="/about#mentor" className="btn btn-dark">Холбоонд нэгдэх <ArrowRight size={16} /></Link>
            <Link to="/guide" className="btn btn-outline">Оюутны хөтөч</Link>
          </div>
        </div>

        <div className="container">
          <div className="bento a4">
            <figure className="b b-photo">
              <img src="/assets/sun_festival_basketball.jpg" alt="Нарны Баяр наадмын тэмцээн, Вена" />
              <figcaption><MapPin size={14} /> Нарны Баяр · Вена</figcaption>
            </figure>
            <div className="b b-illus b-peach">
              <img src="/assets/student-female.jpg" alt="" />
            </div>
            <div className="b b-stat b-accent">
              <strong><AnimatedStatNumber target={19} suffix="+" /></strong>
              <span>жилийн түүх</span>
            </div>
            <div className="b b-stat b-lilac">
              <strong><AnimatedStatNumber target={1500} suffix="+" /></strong>
              <span>оюутан, төгсөгч</span>
            </div>
            <div className="b b-illus b-sky">
              <img src="/assets/media_1787152152741.jpg" alt="" />
              <span className="b-tag">Students Info Day · 9-р сар</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section className="sec about">
        <div className="container about-grid">
          <div>
            <span className="section-subtitle reveal">Бид хэн бэ</span>
            <h2 className="sec-title reveal">Оюутнуудын өөрсдийнх нь холбоо</h2>
          </div>
          <div className="reveal">
            <p className="lede">
              AMOX (Verein der mongolischen Studenten in Österreich) 2007 онд байгуулагдсан. Бид Австри дахь Монгол оюутнуудын эрх ашгийг хамгаалж, мэдээлэл, туршлагаа бие биедээ хуваалцдаг.
            </p>
            <p>
              Оюутан биш ч Австрид амьдардаг Монгол хүн бүхэнд манай хаалга нээлттэй. Students Info Day, Нарны Баяр спортын наадам зэрэг арга хэмжээг зохион байгуулж, шинээр ирсэн оюутнуудад гарын авлага, ментор, байр, визний зөвлөгөөгөөр тусалдаг.
            </p>
            <div className="badges">
              <span className="tag">Албан ёсоор бүртгэлтэй</span>
              <span className="tag">ZVR-Zahl 107178700</span>
              <span className="tag">Ашгийн бус</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="sec sec-tight">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="section-subtitle reveal">Үйлчилгээ</span>
              <h2 className="sec-title reveal">Оюутанд зориулсан үйлчилгээ</h2>
            </div>
            <p className="sec-sub reveal">Австрид шинээр ирсэн ч, хэдэн жил болсон ч — хэрэгтэй мэдээлэл нэг дор.</p>
          </div>

          <div className="services">
            {SERVICES.map(({ to, Icon, title, text, tint }, i) => (
              <Link key={to} to={to} className="svc reveal" style={{ background: tint, ['--d' as string]: `${i * 70}ms` }}>
                <span className="svc-icon"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="svc-go"><ArrowUpRight size={20} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Feature ---------- */}
      <section className="sec sec-tight">
        <div className="container">
          <div className="feature reveal">
            <div className="feature-copy">
              <span className="pill pill-dark"><i /> 2026 оны 9-р сар</span>
              <h2>AMOX Students Info Day</h2>
              <p>
                AMOX-ийн шинэ оюутнуудыг угтах уулзалт. Виз, даатгал, байр, хичээл сонголтоор ахмад оюутнуудаас шууд асууж, зөвлөгөө аваарай.
              </p>
              <Link to="/about#mentor" className="btn btn-light">Бүртгүүлэх <ArrowRight size={16} /></Link>
            </div>
            <img src="/assets/media_1787152152741.jpg" alt="AMOX Students Info Day" />
          </div>
        </div>
      </section>

      {/* ---------- Events ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="section-subtitle reveal">Календарь</span>
              <h2 className="sec-title reveal">Удахгүй болох үйл ажиллагаа</h2>
            </div>
          </div>

          <ul className="events">
            {agenda.map((e, i) => {
              const [big, small] = e.chip;
              return (
                <li key={e.id} className="reveal" style={{ ['--d' as string]: `${i * 60}ms` }}>
                  <Link to={e.to} className="ev">
                    <div className="ev-date"><b>{big}</b><span>{small}</span></div>
                    <div className="ev-body">
                      <h3>{e.title}</h3>
                      <p>{e.description}</p>
                      <span className="ev-meta"><MapPin size={13} /> {e.location}</span>
                    </div>
                    <span className="ev-go"><ArrowUpRight size={20} /></span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link to="/events" className="btn btn-dark all-events">Бүх арга хэмжээ, бүртгэл <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* ---------- Mission ---------- */}
      <section className="sec sec-tint">
        <div className="container">
          <span className="section-subtitle reveal">Зорилго</span>
          <h2 className="motto reveal">
            Хуваалцъя. Дэмжье. <span className="hl">Хамтдаа хөгжье.</span>
          </h2>
          <p className="motto-sub reveal">{AMOX_MISSION_VISION.vision.text}</p>

          <div className="pillars">
            {AMOX_MISSION_VISION.mission.pillars.map((p, i) => (
              <div key={p.id} className="pillar reveal" style={{ ['--d' as string]: `${i * 90}ms` }}>
                <span className="pillar-no">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialChannelsSection />

      <style>{`
        .sec { padding: 112px 0; }
        .sec-tight { padding: 56px 0; }
        .sec-tint { background: var(--canvas-2); }
        .sec-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 40px; margin-bottom: 44px; }
        .sec-title { font-size: clamp(2rem, 4.2vw, 3.1rem); }
        .sec-sub { max-width: 340px; font-size: 1.02rem; }
        .pill { display: inline-flex; align-items: center; gap: 9px; padding: 7px 15px; border-radius: 999px; background: #fff; border: 1px solid var(--line); font-size: .84rem; font-weight: 600; color: var(--ink); box-shadow: 0 2px 10px rgba(12,12,15,.04); }
        .pill i { width: 7px; height: 7px; border-radius: 50%; background: var(--green); box-shadow: 0 0 0 4px rgba(18,146,107,.18); }
        .pill-dark { background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.2); color: #fff; box-shadow: none; }
        .hl { color: var(--accent); }

        /* ---- hero ---- */
        .hero { position: relative; overflow: hidden; padding: calc(var(--nav-h) + 56px) 0 72px; }
        .blob { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; opacity: .7; }
        .blob-1 { width: 520px; height: 520px; left: -140px; top: -80px; background: #E3E5FF; animation: blobA 18s ease-in-out infinite; }
        .blob-2 { width: 480px; height: 480px; right: -120px; top: 120px; background: #FFE9DC; animation: blobB 22s ease-in-out infinite; }
        .hero-in { position: relative; z-index: 2; text-align: center; display: flex; flex-direction: column; align-items: center; }
        .a1,.a2,.a3,.a4 { opacity: 0; animation: fadeUp .9s cubic-bezier(.2,.7,.2,1) forwards; }
        .a1 { animation-delay: .05s; } .a2 { animation-delay: .15s; } .a3 { animation-delay: .27s; } .a4 { animation-delay: .38s; }
        .hero h1 { font-size: clamp(2.5rem, 6.2vw, 5rem); line-height: 1.04; letter-spacing: -0.045em; max-width: 920px; margin: 22px 0 22px; }
        .hero-lead { font-size: 1.15rem; max-width: 600px; color: var(--text-sub); }
        .hero-cta { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 34px; }

        .bento { position: relative; z-index: 2; margin-top: 64px; display: grid; grid-template-columns: repeat(12, 1fr); grid-template-rows: 210px 210px; gap: 16px; }
        .b { position: relative; border-radius: 28px; overflow: hidden; margin: 0; }
        .b img { width: 100%; height: 100%; object-fit: cover; transition: transform 1s ease; }
        .b:hover img { transform: scale(1.05); }
        .b-photo { grid-column: 1 / span 5; grid-row: 1 / span 2; }
        .b-photo figcaption { position: absolute; left: 16px; bottom: 16px; display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,.92); color: var(--ink); font-size: .82rem; font-weight: 600; padding: 7px 13px; border-radius: 999px; backdrop-filter: blur(6px); }
        .b-illus { background: var(--tint-peach); }
        .b-peach { grid-column: 6 / span 4; grid-row: 1; }
        .b-sky { grid-column: 9 / span 4; grid-row: 2; background: var(--tint-sky); }
        .b-tag { position: absolute; left: 14px; bottom: 14px; background: rgba(255,255,255,.92); color: var(--ink); font-size: .78rem; font-weight: 600; padding: 6px 12px; border-radius: 999px; }
        .b-stat { display: flex; flex-direction: column; justify-content: flex-end; padding: 24px; }
        .b-stat strong { font-size: clamp(2.2rem, 4vw, 3.2rem); font-weight: 700; letter-spacing: -0.04em; line-height: 1; }
        .b-stat > span { margin-top: 8px; font-size: .92rem; font-weight: 500; opacity: .8; }
        .b-accent { grid-column: 10 / span 3; grid-row: 1; background: var(--accent); color: #fff; }
        .b-lilac { grid-column: 6 / span 3; grid-row: 2; background: var(--tint-lilac); color: var(--ink); }

        /* ---- about ---- */
        .about-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 72px; align-items: start; }
        .lede { font-size: 1.25rem; line-height: 1.6; color: var(--ink); font-weight: 500; letter-spacing: -0.01em; margin-bottom: 18px; }
        .about-grid p { font-size: 1.02rem; margin-bottom: 14px; }
        .badges { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }
        .badges .tag { background: var(--canvas-2); color: var(--text-sub); border: 1px solid var(--line); }

        /* ---- services ---- */
        .services { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .svc { position: relative; display: flex; flex-direction: column; min-height: 260px; padding: 32px; border-radius: 30px; text-decoration: none; color: var(--ink); transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s, opacity .8s ease; }
        .svc:hover { transform: translateY(-6px); box-shadow: 0 24px 50px rgba(12,12,15,.1); }
        .svc-icon { width: 48px; height: 48px; border-radius: 15px; background: #fff; display: flex; align-items: center; justify-content: center; margin-bottom: auto; }
        .svc h3 { font-size: 1.7rem; margin: 40px 0 8px; }
        .svc p { max-width: 380px; font-size: .98rem; color: #3f3f48; }
        .svc-go { position: absolute; right: 26px; top: 26px; width: 44px; height: 44px; border-radius: 50%; background: #fff; display: flex; align-items: center; justify-content: center; transition: transform .3s, background .3s, color .3s; }
        .svc:hover .svc-go { background: var(--ink); color: #fff; transform: rotate(45deg); }

        /* ---- feature ---- */
        .feature { position: relative; overflow: hidden; display: grid; grid-template-columns: 1.1fr .9fr; gap: 48px; align-items: center; border-radius: 40px; padding: clamp(32px, 5vw, 64px); color: #fff;
          background: radial-gradient(60% 90% at 100% 0%, rgba(51,71,255,.6), transparent 70%), radial-gradient(40% 60% at 0% 100%, rgba(240,100,58,.25), transparent 70%), var(--night); }
        .feature h2 { color: #fff; font-size: clamp(2.1rem, 4.6vw, 3.4rem); margin: 20px 0 18px; }
        .feature p { color: rgba(255,255,255,.78); font-size: 1.08rem; max-width: 480px; margin-bottom: 30px; }
        .feature img { width: 100%; height: 340px; object-fit: cover; border-radius: 28px; background: #fff; }

        /* ---- events ---- */
        .events { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .ev { display: grid; grid-template-columns: 150px 1fr 48px; gap: 28px; align-items: center; padding: 26px 30px; border-radius: 26px; background: var(--canvas-2); text-decoration: none; color: var(--ink); transition: background .3s, transform .3s, box-shadow .3s; }
        .ev:hover { background: #fff; box-shadow: 0 16px 40px rgba(12,12,15,.08); transform: translateY(-2px); outline: 1px solid var(--line); }
        .ev-date b { display: block; font-size: 2.4rem; font-weight: 700; letter-spacing: -0.04em; line-height: 1; color: var(--accent); }
        .ev-date span { display: block; margin-top: 8px; font-size: .78rem; font-weight: 600; color: var(--text-muted); }
        .ev-body h3 { font-size: 1.3rem; margin-bottom: 6px; }
        .ev-body p { font-size: .95rem; max-width: 640px; }
        .ev-meta { display: inline-flex; align-items: center; gap: 6px; margin-top: 10px; font-size: .82rem; color: var(--text-muted); font-weight: 500; }
        .all-events { margin-top: 28px; }
        .ev-go { width: 46px; height: 46px; border-radius: 50%; background: #fff; display: flex; align-items: center; justify-content: center; transition: background .3s, color .3s, transform .3s; }
        .ev:hover .ev-go { background: var(--ink); color: #fff; transform: rotate(45deg); }

        /* ---- mission ---- */
        .motto { font-size: clamp(2.4rem, 6vw, 4.8rem); line-height: 1.04; letter-spacing: -0.045em; max-width: 940px; margin-bottom: 22px; }
        .motto-sub { font-size: 1.12rem; max-width: 560px; margin-bottom: 60px; }
        .pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .pillar { background: #fff; border-radius: 26px; padding: 32px; border: 1px solid var(--line); }
        .pillar-no { display: block; font-size: 3.4rem; font-weight: 700; letter-spacing: -0.05em; line-height: 1; color: var(--accent-soft); -webkit-text-stroke: 1.5px var(--accent); margin-bottom: 36px; }
        .pillar h3 { font-size: 1.4rem; margin-bottom: 10px; }
        .pillar p { font-size: .95rem; }

        @media (max-width: 960px) {
          .about-grid, .feature { grid-template-columns: 1fr; gap: 32px; }
          .sec-head { flex-direction: column; align-items: flex-start; gap: 12px; }
          .services { grid-template-columns: 1fr; }
          .pillars { grid-template-columns: 1fr; }
          .bento { grid-template-rows: 190px 190px 190px; }
          .b-photo { grid-column: 1 / span 7; grid-row: 1 / span 2; }
          .b-peach { grid-column: 8 / span 5; grid-row: 1; }
          .b-accent { grid-column: 8 / span 5; grid-row: 2; }
          .b-lilac { grid-column: 1 / span 5; grid-row: 3; }
          .b-sky { grid-column: 6 / span 7; grid-row: 3; }
        }
        @media (max-width: 640px) {
          .sec { padding: 72px 0; } .sec-tight { padding: 40px 0; }
          .hero { padding-bottom: 48px; }
          .bento { grid-template-columns: 1fr 1fr; grid-template-rows: 240px 150px 150px 190px; gap: 12px; margin-top: 44px; }
          .b { border-radius: 22px; }
          .b-photo { grid-column: 1 / -1; grid-row: 1; }
          .b-peach { display: none; }
          .b-accent { grid-column: 1; grid-row: 2; }
          .b-lilac { grid-column: 2; grid-row: 2; }
          .b-sky { grid-column: 1 / -1; grid-row: 3 / span 2; }
          .b-stat { padding: 18px; }
          .ev { grid-template-columns: 1fr; gap: 14px; padding: 22px; }
          .ev-go { display: none; }
          .ev-date { display: flex; align-items: baseline; gap: 12px; } .ev-date span { margin-top: 0; }
          .svc { min-height: 220px; padding: 26px; }
        }
      `}</style>
    </div>
  );
};
