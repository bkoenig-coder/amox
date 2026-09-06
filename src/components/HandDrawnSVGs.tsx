import React from 'react';
import { motion } from 'framer-motion';

// Hand-drawn animated loop highlight
export const HandDrawnLoop: React.FC<{ color?: string; className?: string }> = ({
  color = '#037EF3',
  className = ''
}) => (
  <svg
    viewBox="0 0 240 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`doodle-blue-loop ${className}`}
    preserveAspectRatio="none"
  >
    <motion.path
      d="M12 42C45 15 170 8 222 25C238 30 234 52 188 60C120 72 20 62 8 46C-3 32 35 18 90 20"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
    />
  </svg>
);

// Hand-drawn animated wavy underline
export const HandDrawnWave: React.FC<{ color?: string; className?: string }> = ({
  color = '#F85A40',
  className = ''
}) => (
  <svg
    viewBox="0 0 260 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`doodle-wave-underline ${className}`}
    preserveAspectRatio="none"
  >
    <motion.path
      d="M6 18C30 18 42 6 68 6C94 6 106 18 132 18C158 18 170 6 196 6C222 6 234 18 254 18"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    />
  </svg>
);
