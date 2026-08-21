import React from 'react';
import { motion } from 'framer-motion';

export const MarqueeTicker: React.FC = () => {
  const items = [
    { text: 'YOUTH LEADERSHIP', color: '#0062D2' },
    { text: 'AMOX IN AUSTRIA', color: '#E00613' },
    { text: 'STUDENTS INFO DAY 2026 (9-Р САР)', color: '#0052CC' },
    { text: 'SUN FESTIVAL 2027', color: '#F85A40' },
    { text: '9-CHAPTER STUDENT GUIDE', color: '#E00613' },
    { text: 'DORMITORY FINDER', color: '#0062D2' },
    { text: 'MA35 VISA & INSURANCE', color: '#E00613' },
    { text: 'ALUMNI MENTORSHIP', color: '#0062D2' },
    { text: 'VIENNA • GRAZ • LINZ', color: '#E00613' },
    { text: 'SEIT 2007', color: '#0062D2' }
  ];

  return (
    <div className="scrolling-ticker" style={{
      background: '#071120',
      color: '#FFFFFF',
      padding: '16px 0',
      overflow: 'hidden',
      position: 'relative',
      borderTop: '1px solid rgba(0, 82, 204, 0.2)',
      borderBottom: '1px solid rgba(224, 6, 19, 0.2)'
    }}>
      <motion.div
        className="ticker-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration: 26, repeat: Infinity }}
        style={{ display: 'inline-flex', gap: 36, whiteSpace: 'nowrap' }}
      >
        {[...items, ...items].map((item, idx) => (
          <span 
            key={idx} 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              fontWeight: 800,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12
            }}
          >
            <span style={{ color: item.color, fontSize: '1.2rem' }}>✦</span>
            {item.text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
