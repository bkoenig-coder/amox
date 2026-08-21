import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Gem, Heart, Leaf, Trophy, Users } from 'lucide-react';

export const AiesecHexagonsLeft: React.FC = () => {
  return (
    <div className="hex-cluster" style={{ position: 'relative', width: 280, height: 420 }}>
      {/* 1. Top Hexagon - Activating Leadership */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="hex-item"
        style={{
          backgroundColor: '#037EF3',
          position: 'absolute',
          top: 0,
          right: 20
        }}
      >
        <Flag size={30} color="#FFFFFF" strokeWidth={2.2} />
        <h4>Activating Leadership</h4>
      </motion.div>

      {/* 2. Middle Hexagon - Demonstrating Integrity */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="hex-item"
        style={{
          backgroundColor: '#F85A40',
          position: 'absolute',
          top: 130,
          left: 10
        }}
      >
        <Gem size={30} color="#FFFFFF" strokeWidth={2.2} />
        <h4>Demonstrating Integrity</h4>
      </motion.div>

      {/* 3. Bottom Hexagon - Enjoying Participation */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="hex-item"
        style={{
          backgroundColor: '#F4B400',
          position: 'absolute',
          top: 260,
          right: 20
        }}
      >
        <Heart size={30} color="#FFFFFF" strokeWidth={2.2} />
        <h4>Enjoying Participation</h4>
      </motion.div>
    </div>
  );
};

export const AiesecHexagonsRight: React.FC = () => {
  return (
    <div className="hex-cluster" style={{ position: 'relative', width: 280, height: 420 }}>
      {/* 4. Top Hexagon - Acting Sustainably */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="hex-item"
        style={{
          backgroundColor: '#00C16E',
          position: 'absolute',
          top: 0,
          left: 20
        }}
      >
        <Leaf size={30} color="#FFFFFF" strokeWidth={2.2} />
        <h4>Acting Sustainably</h4>
      </motion.div>

      {/* 5. Middle Hexagon - Striving For Excellence */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="hex-item"
        style={{
          backgroundColor: '#002D62',
          position: 'absolute',
          top: 130,
          right: 10
        }}
      >
        <Trophy size={30} color="#FFFFFF" strokeWidth={2.2} />
        <h4>Striving for Excellence</h4>
      </motion.div>

      {/* 6. Bottom Hexagon - Living Diversity */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="hex-item"
        style={{
          backgroundColor: '#00878A',
          position: 'absolute',
          top: 260,
          left: 20
        }}
      >
        <Users size={30} color="#FFFFFF" strokeWidth={2.2} />
        <h4>Living Diversity</h4>
      </motion.div>
    </div>
  );
};
