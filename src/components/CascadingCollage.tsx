import React from 'react';
import { motion } from 'framer-motion';

interface CascadingCollageProps {
  img1: string;
  img2: string;
  img3: string;
  alt: string;
  reverse?: boolean;
}

export const CascadingCollage: React.FC<CascadingCollageProps> = ({
  img1,
  img2,
  img3,
  alt,
  reverse = false
}) => {
  return (
    <div
      className="cascading-collage-wrapper"
      style={{
        transform: reverse ? 'scaleX(-1)' : 'none'
      }}
    >
      <motion.img
        src={img3}
        alt={alt}
        className="collage-img-3"
        style={{ transform: reverse ? 'scaleX(-1)' : undefined }}
        whileHover={{ scale: 1.04 }}
      />
      <motion.img
        src={img1}
        alt={alt}
        className="collage-img-1"
        style={{ transform: reverse ? 'scaleX(-1)' : undefined }}
        whileHover={{ scale: 1.04 }}
      />
      <motion.img
        src={img2}
        alt={alt}
        className="collage-img-2"
        style={{ transform: reverse ? 'scaleX(-1)' : undefined }}
        whileHover={{ scale: 1.04 }}
      />
    </div>
  );
};
