import React, { useState, useEffect } from 'react';

interface TypewriterLoopProps {
  words?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  prefix?: string;
  highlightColor?: string;
}

export const TypewriterLoop: React.FC<TypewriterLoopProps> = ({
  words = [
    'Sun Festival 2027',
    'Student Guide',
    'Students Info Day',
    'AMOX Students Info Day 2026',
    'Housing & Dorm Finder',
    'MA35 Visa & ÖGK Center',
    '1-on-1 Mentorship'
  ],
  typingSpeed = 85,
  deletingSpeed = 45,
  pauseDuration = 1800,
  className = '',
  prefix = '',
  highlightColor = 'var(--aiesec-blue)'
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentText === currentWord) {
      // Word is fully typed, pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && currentText === '') {
      // Word is fully deleted, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Typing or deleting next character
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`typewriter-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      {prefix && <span style={{ marginRight: 8 }}>{prefix}</span>}
      <span
        style={{
          color: highlightColor,
          fontWeight: 800,
          position: 'relative',
          display: 'inline-block',
          minWidth: '1ch'
        }}
      >
        {currentText}
      </span>
      <span
        className="typewriter-cursor"
        aria-hidden="true"
        style={{
          display: 'inline-block',
          marginLeft: 2,
          fontWeight: 300,
          color: highlightColor,
          opacity: 1
        }}
      >
        |
      </span>
    </span>
  );
};
