import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const AnimatedNumber: React.FC<CounterProps> = ({ target, prefix = '', suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }, [isInView, target]);

  return (
    <div ref={ref} style={{ padding: 12, textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '3.2rem',
        fontWeight: 900,
        lineHeight: 1,
        color: '#FFFFFF',
        marginBottom: 8,
        letterSpacing: '-1px'
      }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.92)', fontWeight: 700 }}>
        {label}
      </div>
    </div>
  );
};

export const MilestoneCounters: React.FC = () => {
  return (
    <section style={{
      padding: '65px 0',
      background: 'linear-gradient(135deg, #003E9E 0%, #0052CC 45%, #E00613 100%)',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 24,
          textAlign: 'center'
        }}>
          <AnimatedNumber target={19} suffix="+" label="Жилийн Баялаг Түүх (Seit 2007)" />
          <AnimatedNumber target={500} suffix="+" label="Оюутан Залуусын Сүлжээ" />
          <AnimatedNumber target={12} suffix="+" label="Австрийн Их Сургуулиуд" />
          <AnimatedNumber target={6} suffix="+" label="Жил Тутмын Эвент Наадам" />
          <AnimatedNumber target={32} suffix="+" label="Оролцогч Баг Тамирчид" />
        </div>
      </div>
    </section>
  );
};
