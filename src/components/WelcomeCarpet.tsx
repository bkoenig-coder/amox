import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const KEY = 'amox_welcome_seen';
const STRIPS = 6;
const GREETINGS = ['Тавтай морил', 'Willkommen', 'Welcome'];

// First-visit welcome: a full-viewport "carpet" that lifts away in staggered
// panels to reveal the site. Shown once per browser session, on the home page only.
export const WelcomeCarpet: React.FC = () => {
  const { pathname } = useLocation();
  const [phase, setPhase] = useState<'idle' | 'show' | 'lift' | 'done'>('idle');
  const [word, setWord] = useState(0);

  useEffect(() => {
    if (pathname !== '/') return;
    let seen = false;
    try { seen = sessionStorage.getItem(KEY) === '1'; } catch { /* storage blocked */ }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen || reduce) { setPhase('done'); return; }
    setPhase('show');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // greeting rotation + auto lift
  useEffect(() => {
    if (phase !== 'show') return;
    document.body.style.overflow = 'hidden';
    const rot = window.setInterval(() => setWord((w) => Math.min(w + 1, GREETINGS.length - 1)), 650);
    const lift = window.setTimeout(() => setPhase('lift'), 2300);
    return () => { window.clearInterval(rot); window.clearTimeout(lift); };
  }, [phase]);

  useEffect(() => {
    if (phase !== 'lift') return;
    try { sessionStorage.setItem(KEY, '1'); } catch { /* ignore */ }
    const done = window.setTimeout(() => {
      document.body.style.overflow = '';
      setPhase('done');
    }, 1300);
    return () => window.clearTimeout(done);
  }, [phase]);

  useEffect(() => () => { document.body.style.overflow = ''; }, []);

  if (phase === 'idle' || phase === 'done') return null;

  return (
    <div className={`wc ${phase === 'lift' ? 'wc-lift' : ''}`} role="dialog" aria-label="Тавтай морил">
      <div className="wc-strips" aria-hidden="true">
        {Array.from({ length: STRIPS }).map((_, i) => (
          <span key={i} style={{ ['--i' as string]: i }} />
        ))}
      </div>

      <div className="wc-content">
        <img src="/assets/logo.png" alt="" width={84} height={84} />
        <div className="wc-word" key={word}>{GREETINGS[word]}</div>
        <p>Австри дахь Монголын Оюутны Холбоо</p>
        <div className="wc-bar" aria-hidden="true"><i /></div>
      </div>

      <button className="wc-skip" onClick={() => setPhase('lift')}>Үргэлжлүүлэх</button>

      <style>{`
        .wc { position: fixed; inset: 0; z-index: 99999; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .wc-strips { position: absolute; inset: 0; display: grid; grid-template-columns: repeat(${STRIPS}, 1fr); }
        .wc-strips span {
          position: relative; background: var(--night);
          background-image: radial-gradient(120% 70% at 50% 0%, rgba(51,71,255, calc(.42 - var(--i) * .05)), transparent 70%);
          transition: transform 1s cubic-bezier(.76, 0, .24, 1); transition-delay: calc(var(--i) * 70ms);
          border-right: 1px solid rgba(255,255,255,.04);
        }
        .wc-lift .wc-strips span { transform: translateY(-101%); }
        .wc-content { position: relative; z-index: 2; text-align: center; color: #fff; padding: 0 24px; transition: opacity .4s ease, transform .5s ease; }
        .wc-lift .wc-content, .wc-lift .wc-skip { opacity: 0; transform: translateY(-14px); pointer-events: none; }
        .wc-content img { margin: 0 auto 28px; border-radius: 50%; background: #fff; animation: wcPop .8s cubic-bezier(.2,.8,.2,1) both; }
        .wc-word { font-size: clamp(2.6rem, 8vw, 5.4rem); font-weight: 800; letter-spacing: -0.045em; line-height: 1; animation: wcWord .6s cubic-bezier(.2,.8,.2,1) both; }
        .wc-content p { margin-top: 18px; color: rgba(255,255,255,.7); font-size: 1.05rem; animation: wcWord .8s .15s cubic-bezier(.2,.8,.2,1) both; }
        .wc-bar { width: 160px; height: 3px; border-radius: 3px; background: rgba(255,255,255,.18); margin: 36px auto 0; overflow: hidden; }
        .wc-bar i { display: block; height: 100%; width: 100%; background: #fff; transform-origin: left; animation: wcFill 2.3s linear both; }
        .wc-skip { position: absolute; z-index: 3; bottom: 32px; left: 50%; transform: translateX(-50%); background: transparent; color: rgba(255,255,255,.75); border: 1px solid rgba(255,255,255,.3); border-radius: 999px; padding: 9px 20px; font: inherit; font-size: .88rem; cursor: pointer; transition: background .2s, color .2s, opacity .4s; }
        .wc-skip:hover { background: #fff; color: var(--night); }
        .wc-lift .wc-skip { transform: translate(-50%, -14px); }
        @keyframes wcPop { from { opacity: 0; transform: scale(.6) rotate(-12deg); } to { opacity: 1; transform: none; } }
        @keyframes wcWord { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        @keyframes wcFill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </div>
  );
};
