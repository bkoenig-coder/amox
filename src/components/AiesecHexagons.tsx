import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Gem, Heart, Leaf, Trophy, Users } from 'lucide-react';

export const AiesecHexagonsLeft: React.FC = () => {
  return (
    <div className="hex-cluster-wrapper">
      <div className="hex-cluster left-cluster">
        {/* 1. Top Hexagon - Activating Leadership */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="hex-item hex-pos-1"
          style={{ backgroundColor: '#037EF3' }}
        >
          <Flag size={28} color="#FFFFFF" strokeWidth={2.2} />
          <h4>Activating Leadership</h4>
        </motion.div>

        {/* 2. Middle Hexagon - Demonstrating Integrity */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="hex-item hex-pos-2"
          style={{ backgroundColor: '#F85A40' }}
        >
          <Gem size={28} color="#FFFFFF" strokeWidth={2.2} />
          <h4>Demonstrating Integrity</h4>
        </motion.div>

        {/* 3. Bottom Hexagon - Enjoying Participation */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="hex-item hex-pos-3"
          style={{ backgroundColor: '#F4B400' }}
        >
          <Heart size={28} color="#FFFFFF" strokeWidth={2.2} />
          <h4>Enjoying Participation</h4>
        </motion.div>
      </div>

      <style>{`
        .hex-cluster-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .hex-cluster.left-cluster {
          position: relative;
          width: 270px;
          height: 410px;
        }
        .hex-pos-1 { position: absolute; top: 0; right: 15px; }
        .hex-pos-2 { position: absolute; top: 130px; left: 10px; }
        .hex-pos-3 { position: absolute; top: 260px; right: 15px; }

        @media (max-width: 992px) {
          .hex-cluster.left-cluster {
            position: static;
            width: auto;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 14px;
          }
          .hex-pos-1, .hex-pos-2, .hex-pos-3 {
            position: static !important;
            width: 110px;
            height: 125px;
            padding: 10px;
          }
          .hex-pos-1 h4, .hex-pos-2 h4, .hex-pos-3 h4 {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
};

export const AiesecHexagonsRight: React.FC = () => {
  return (
    <div className="hex-cluster-wrapper">
      <div className="hex-cluster right-cluster">
        {/* 4. Top Hexagon - Acting Sustainably */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="hex-item hex-pos-4"
          style={{ backgroundColor: '#00C16E' }}
        >
          <Leaf size={28} color="#FFFFFF" strokeWidth={2.2} />
          <h4>Acting Sustainably</h4>
        </motion.div>

        {/* 5. Middle Hexagon - Striving For Excellence */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="hex-item hex-pos-5"
          style={{ backgroundColor: '#002D62' }}
        >
          <Trophy size={28} color="#FFFFFF" strokeWidth={2.2} />
          <h4>Striving for Excellence</h4>
        </motion.div>

        {/* 6. Bottom Hexagon - Living Diversity */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="hex-item hex-pos-6"
          style={{ backgroundColor: '#00878A' }}
        >
          <Users size={28} color="#FFFFFF" strokeWidth={2.2} />
          <h4>Living Diversity</h4>
        </motion.div>
      </div>

      <style>{`
        .hex-cluster.right-cluster {
          position: relative;
          width: 270px;
          height: 410px;
        }
        .hex-pos-4 { position: absolute; top: 0; left: 15px; }
        .hex-pos-5 { position: absolute; top: 130px; right: 10px; }
        .hex-pos-6 { position: absolute; top: 260px; left: 15px; }

        @media (max-width: 992px) {
          .hex-cluster.right-cluster {
            position: static;
            width: auto;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 14px;
          }
          .hex-pos-4, .hex-pos-5, .hex-pos-6 {
            position: static !important;
            width: 110px;
            height: 125px;
            padding: 10px;
          }
          .hex-pos-4 h4, .hex-pos-5 h4, .hex-pos-6 h4 {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
};

