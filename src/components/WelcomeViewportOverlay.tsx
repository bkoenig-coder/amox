import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, X, Compass, Flag, ShieldCheck, Heart } from 'lucide-react';
import { TypewriterLoop } from './TypewriterLoop';

export const WelcomeViewportOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the welcome overlay in this session
    const hasSeenWelcome = sessionStorage.getItem('amox_welcome_seen');
    if (!hasSeenWelcome) {
      // Small delay for smooth mounting
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    confetti({
      particleCount: 110,
      spread: 90,
      origin: { y: 0.5 }
    });
    sessionStorage.setItem('amox_welcome_seen', 'true');
    setIsOpen(false);
  };

  const handleReplay = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating Replay Welcome Pill (Bottom-left corner) */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReplay}
          style={{
            position: 'fixed',
            bottom: 24,
            left: 24,
            zIndex: 999,
            background: 'linear-gradient(135deg, #0A192F 0%, #037EF3 100%)',
            color: '#FFFFFF',
            border: '1.5px solid rgba(255, 255, 255, 0.3)',
            borderRadius: 'var(--radius-pill)',
            padding: '10px 18px',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.82rem',
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(3, 126, 243, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            backdropFilter: 'blur(8px)'
          }}
          title="Мэндчилгээг дахин тоглуулах"
          aria-label="Тавтай морил мэндчилгээ"
        >
          <span style={{ fontSize: '1rem' }}>👋</span>
          <span>Тавтай морил!</span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00C16E', boxShadow: '0 0 8px #00C16E' }} />
        </motion.button>
      )}

      {/* Full-Screen Animated Viewport Splash Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              y: '-100%', 
              opacity: 0,
              transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } 
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'radial-gradient(circle at 50% 30%, #0c234b 0%, #071328 65%, #030a16 100%)',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px 20px',
              overflow: 'hidden',
              cursor: 'default'
            }}
          >
            {/* Ambient Animated Mesh Blobs in Background */}
            <motion.div
              animate={{ 
                scale: [1, 1.25, 1],
                x: [0, 40, 0],
                y: [0, -30, 0]
              }}
              transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '15%',
                left: '20%',
                width: 320,
                height: 320,
                borderRadius: '50%',
                background: 'rgba(3, 126, 243, 0.35)',
                filter: 'blur(90px)',
                pointerEvents: 'none'
              }}
            />

            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, -40, 0],
                y: [0, 40, 0]
              }}
              transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute',
                bottom: '15%',
                right: '20%',
                width: 340,
                height: 340,
                borderRadius: '50%',
                background: 'rgba(248, 90, 64, 0.3)',
                filter: 'blur(100px)',
                pointerEvents: 'none'
              }}
            />

            {/* Skip Button Top-Right */}
            <button
              onClick={handleDismiss}
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-pill)',
                padding: '8px 16px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                backdropFilter: 'blur(10px)',
                transition: 'var(--transition)'
              }}
              title="Хаах / Алгасах"
            >
              <span>Алгасах (Skip)</span>
              <X size={15} />
            </button>

            {/* Main Center Animated Card */}
            <motion.div
              initial={{ scale: 0.88, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{
                maxWidth: 780,
                width: '100%',
                textAlign: 'center',
                position: 'relative',
                zIndex: 10,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1.5px solid rgba(255, 255, 255, 0.15)',
                borderRadius: 28,
                padding: 'clamp(28px, 6vw, 48px) clamp(20px, 5vw, 40px)',
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.2)',
                backdropFilter: 'blur(16px)'
              }}
            >
              {/* Logo & National Flags Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 20,
                  padding: '6px 20px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
                }}
              >
                <img
                  src="/assets/logo.png"
                  alt="AMOX Logo"
                  style={{ height: 26, width: 'auto', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))' }}
                />
                <span style={{ fontSize: '0.84rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  🇦🇹 Seit 2007 &bull; Австри дахь Монгол Оюутны Холбоо 🇲🇳
                </span>
              </motion.div>

              {/* Big Mongolian Welcome Greeting */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: 16,
                  color: '#FFFFFF'
                }}
              >
                Манай цахим талбарт{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #037EF3 0%, #00C16E 50%, #F85A40 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  Тавтай Морил!
                </span>
              </motion.h1>

              {/* SSG Motto Loop Banner */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 22px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(3, 126, 243, 0.35)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 0 25px rgba(3, 126, 243, 0.35)',
                  marginBottom: 20
                }}
              >
                <Sparkles size={16} color="#FFDF00" />
                <span style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', fontWeight: 800, color: '#FFFFFF' }}>
                  🤝 Хуваалцъя &bull; 💡 Дэмжье &bull; 🚀 Хамтдаа хөгжье
                </span>
                <span style={{ fontSize: '0.8rem', opacity: 0.75, fontWeight: 700 }}>(SSG)</span>
              </motion.div>

              {/* Mongolian Vision Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                style={{
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                  color: 'rgba(255, 255, 255, 0.92)',
                  lineHeight: 1.7,
                  maxWidth: 640,
                  margin: '0 auto 28px'
                }}
              >
                Бид эв нэгдлийг эрхэмлэн, мэдлэгийг түгээж, оюутан залуусаа дэмжин, шинэлэг бүхний түүчээ болж хамтдаа хөгжинө.
              </motion.p>

              {/* Interactive Typewriter Feature Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  marginBottom: 32,
                  fontSize: '0.92rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                <span>Танилцах боломжтой:</span>
                <TypewriterLoop
                  words={[
                    'Sun Festival 2027',
                    'Student Guide',
                    'Students Info Day',
                    'AMOX Students Info Day 2026',
                    'Housing & Dorm Finder',
                    'MA35 Visa & ÖGK Center',
                    '1-on-1 Mentorship'
                  ]}
                  highlightColor="#FFDF00"
                />
              </motion.div>

              {/* Action Button: Explore Site */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.95 }}
                style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}
              >
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="aiesec-btn-primary"
                  style={{
                    padding: '14px 36px',
                    fontSize: '1.02rem',
                    fontWeight: 800,
                    boxShadow: '0 8px 30px rgba(3, 126, 243, 0.6)',
                    border: '2px solid rgba(255, 255, 255, 0.4)'
                  }}
                >
                  <span>Цааш үзэх &bull; Сайтад нэвтрэх</span>
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
