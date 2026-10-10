import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ClipboardList, MapPin, Trophy } from 'lucide-react';
import { PastEvents } from '../components/PastEvents';

const NEXT = [
  { Icon: CalendarDays, title: 'Огноо', text: 'Удахгүй зарлагдана' },
  { Icon: MapPin, title: 'Байршил', text: 'Удахгүй зарлагдана' },
  { Icon: Trophy, title: 'Тэмцээний төрөл & дүрэм', text: 'Удахгүй зарлагдана' },
  { Icon: ClipboardList, title: 'Багийн бүртгэл', text: 'Удахгүй нээгдэнэ' }
];

export const SunFestivalPage: React.FC = () => {
  return (
    <div className="sun-page">
      {/* Hero */}
      <section id="festival-hero" className="sun-hero">
        <div className="sun-sky" aria-hidden="true">
          <div className="sun-rays" />
          <div className="sun-disc" />
          <span className="sun-cloud c1" />
          <span className="sun-cloud c2" />
        </div>

        <div className="container sun-hero-in">
          <span className="sun-badge">Спортын наадам</span>
          <h1>Нарны <span className="sun-grad">Баяр</span></h1>
          <p className="sun-lead">
            Европ дахь Монголчуудын спортын наадам. Вена хотод жил бүр зохиогддог бөгөөд сагсан бөмбөг, волейбол, хөлбөмбөг зэрэг төрлөөр тэмцэлддэг.
          </p>
          <p className="sun-quote">«Хамтдаа бүтээсэн уламжлал, хамтдаа үргэлжлэх түүх»</p>
          <div className="sun-cta">
            <a href="#next" className="btn btn-dark">Дараагийн наадам</a>
            <a href="#gallery" className="btn btn-outline">Өмнөх наадмын зургууд</a>
          </div>

          <span className="sun-pill p1">Сагсан бөмбөг</span>
          <span className="sun-pill p2">Волейбол</span>
          <span className="sun-pill p3">Хөлбөмбөг</span>
        </div>

        <div className="sun-photos container" aria-hidden="true">
          <img className="sp sp1" src="/assets/events/sun-2022-1.webp" alt="" />
          <img className="sp sp2" src="/assets/events/sun-2025-2.webp" alt="" />
          <img className="sp sp3" src="/assets/events/sun-2023-1.webp" alt="" />
          <img className="sp sp4" src="/assets/events/sun-2024-1.webp" alt="" />
        </div>

        <div className="sun-marquee" aria-hidden="true">
          <div className="sun-marquee-track">
            {[0, 1].map((k) => (
              <span key={k}>НАРНЫ БАЯР · СПОРТ · НӨХӨРЛӨЛ · ХАМТДАА · ВЕНА · НАРНЫ БАЯР · СПОРТ · НӨХӨРЛӨЛ · ХАМТДАА · ВЕНА ·&nbsp;</span>
            ))}
          </div>
        </div>
      </section>

      {/* Next edition: not decided yet */}
      <section id="next" style={{ padding: '96px 0 40px', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: 620, marginBottom: 40 }}>
            <span className="section-subtitle">Дараагийн наадам</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 12 }}>Удахгүй зарлагдана</h2>
            <p>
              Дараагийн Нарны Баярын огноо, байршил, тэмцээний төрөл, дүрмийг одоогоор шийдээгүй байна. Шийдэгдмэгц энэ хуудас болон AMOX-ийн албан ёсны хаягуудаар зарлана.
            </p>
          </div>
          <div className="sun-next">
            {NEXT.map(({ Icon, title, text }) => (
              <div key={title} className="sun-next-card">
                <span className="sun-next-icon"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28, fontSize: '.95rem' }}>
            Мэдээг дагахыг хүсвэл <Link to="/about#official-channels" style={{ color: 'var(--accent)', fontWeight: 600 }}>албан ёсны хаягуудыг</Link> харна уу.
          </p>
        </div>
      </section>

      {/* Photos */}
      <section id="gallery" style={{ padding: '56px 0 110px', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <span className="section-subtitle">Зургийн цомог</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)', marginBottom: 32 }}>Өмнөх наадмын зургууд</h2>
          <PastEvents kind="sun" />
        </div>
      </section>

      <style>{`
        .sun-hero { position: relative; overflow: hidden; padding: calc(var(--nav-h) + 56px) 0 0; text-align: center;
          background: linear-gradient(180deg, #FFF3DC 0%, #FFE2C2 52%, #FFFFFF 100%); }
        .sun-sky { position: absolute; inset: 0; pointer-events: none; }
        .sun-disc { position: absolute; top: -170px; right: -120px; width: 560px; height: 560px; border-radius: 50%;
          background: radial-gradient(circle at 50% 50%, #FFE08A 0%, #FFB84D 42%, rgba(255,160,64,.35) 62%, rgba(255,160,64,0) 72%);
          animation: sunPulse 7s ease-in-out infinite; }
        .sun-rays { position: absolute; top: -170px; right: -120px; width: 560px; height: 560px; border-radius: 50%;
          background: repeating-conic-gradient(from 0deg, rgba(255,170,60,.28) 0deg 6deg, rgba(255,170,60,0) 6deg 18deg);
          -webkit-mask-image: radial-gradient(circle, #000 25%, transparent 70%); mask-image: radial-gradient(circle, #000 25%, transparent 70%);
          animation: spinSlow 80s linear infinite; transform: scale(1.7); }
        .sun-cloud { position: absolute; height: 54px; border-radius: 999px; background: rgba(255,255,255,.75); filter: blur(1px); }
        .sun-cloud::before, .sun-cloud::after { content: ''; position: absolute; background: inherit; border-radius: 50%; }
        .sun-cloud::before { width: 54px; height: 54px; top: -24px; left: 22px; }
        .sun-cloud::after { width: 38px; height: 38px; top: -16px; left: 70px; }
        .sun-cloud.c1 { width: 150px; top: 22%; left: 6%; animation: cloudDrift 26s ease-in-out infinite; }
        .sun-cloud.c2 { width: 110px; top: 44%; right: 18%; opacity: .8; animation: cloudDrift 32s ease-in-out infinite reverse; }
        .sun-hero-in { position: relative; z-index: 2; max-width: 860px; }
        .sun-badge { display: inline-block; padding: 6px 16px; border-radius: 999px; background: #fff; border: 1px solid rgba(12,12,15,.08); font-size: .82rem; font-weight: 700; color: var(--ink); box-shadow: 0 2px 10px rgba(12,12,15,.05); }
        .sun-hero h1 { font-size: clamp(3.4rem, 10vw, 7.2rem); line-height: .98; letter-spacing: -0.05em; margin: 18px 0 20px; }
        .sun-grad { background: linear-gradient(100deg, #F0643A, #FFB020, #F0643A); background-size: 200% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: gradSlide 6s linear infinite; }
        @keyframes gradSlide { to { background-position: 200% 0; } }
        .sun-lead { font-size: clamp(1.05rem, 2vw, 1.2rem); max-width: 640px; margin: 0 auto 10px; color: #4a3b2b; }
        .sun-quote { font-style: italic; margin-bottom: 28px; color: #7a5a35; }
        .sun-cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .sun-pill { position: absolute; padding: 8px 16px; border-radius: 999px; background: #fff; font-size: .85rem; font-weight: 700; box-shadow: 0 8px 22px rgba(240,100,58,.18); color: var(--ink); }
        .sun-pill.p1 { left: -6%; top: 18%; animation: floatSlow 6s ease-in-out infinite; }
        .sun-pill.p2 { right: -4%; top: 52%; animation: floatReverse 7s ease-in-out infinite; }
        .sun-pill.p3 { left: 2%; bottom: 8%; animation: floatSlow 8s ease-in-out infinite; }
        .sun-photos { position: relative; z-index: 2; display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 64px; align-items: end; }
        .sp { width: 100%; height: 220px; object-fit: cover; border-radius: 22px; border: 5px solid #fff; box-shadow: 0 18px 40px rgba(120,60,0,.18); }
        .sp1 { transform: translateY(18px) rotate(-3deg); } .sp2 { transform: translateY(-4px) rotate(2deg); height: 250px; }
        .sp3 { transform: translateY(8px) rotate(-1.5deg); height: 240px; } .sp4 { transform: translateY(22px) rotate(3deg); }
        .sun-marquee { position: relative; z-index: 3; margin-top: 56px; background: var(--ink); color: #fff; overflow: hidden; white-space: nowrap; padding: 16px 0; font-weight: 800; letter-spacing: .22em; font-size: .95rem; }
        .sun-marquee-track { display: inline-block; animation: tick 38s linear infinite; }
        @keyframes tick { to { transform: translateX(-50%); } }
        @keyframes sunPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
        @keyframes cloudDrift { 0%,100% { transform: translateX(0); } 50% { transform: translateX(60px); } }
        @media (max-width: 900px) {
          .sun-pill { display: none; }
          .sun-photos { grid-template-columns: repeat(2, 1fr); margin-top: 44px; }
          .sp, .sp2, .sp3 { height: 170px; }
          .sp3, .sp4 { display: none; }
          .sun-disc, .sun-rays { width: 380px; height: 380px; top: -120px; right: -120px; }
        }
        .sun-next { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .sun-next-card { background: var(--canvas-2); border-radius: 22px; padding: 26px 24px; }
        .sun-next-icon { width: 46px; height: 46px; border-radius: 14px; background: #fff; color: var(--accent); display: flex; align-items: center; justify-content: center; margin-bottom: 26px; }
        .sun-next-card h3 { font-size: 1.1rem; margin-bottom: 6px; }
        .sun-next-card p { font-size: .92rem; color: var(--text-muted); font-weight: 600; }
        @media (max-width: 900px) { .sun-next { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) {
          .sun-next { grid-template-columns: 1fr; }
          }
      `}</style>
    </div>
  );
};
