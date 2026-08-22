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
          <Flag className="hex-icon" size={26} color="#FFFFFF" strokeWidth={2.2} />
          <h4>Activating Leadership</h4>
        </motion.div>

        {/* 2. Middle Hexagon - Demonstrating Integrity */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="hex-item hex-pos-2"
          style={{ backgroundColor: '#F85A40' }}
        >
          <Gem className="hex-icon" size={26} color="#FFFFFF" strokeWidth={2.2} />
          <h4>Demonstrating Integrity</h4>
        </motion.div>

        {/* 3. Bottom Hexagon - Enjoying Participation */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="hex-item hex-pos-3"
          style={{ backgroundColor: '#F4B400' }}
        >
          <Heart className="hex-icon" size={26} color="#FFFFFF" strokeWidth={2.2} />
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
            position: static !important;
            width: 100% !important;
            max-width: 380px !important;
            height: auto !important;
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: clamp(6px, 2vw, 12px) !important;
            justify-items: center !important;
            align-items: center !important;
            margin: 0 auto !important;
          }
          .hex-cluster.left-cluster .hex-item {
            position: static !important;
            width: 100% !important;
            max-width: 116px !important;
            min-width: 84px !important;
            height: clamp(96px, 27vw, 128px) !important;
            padding: 8px 4px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .hex-cluster.left-cluster .hex-item h4 {
            font-size: clamp(0.56rem, 1.8vw, 0.68rem) !important;
            line-height: 1.15 !important;
            margin-top: 4px !important;
            letter-spacing: 0.02em !important;
            text-align: center !important;
            word-break: break-word !important;
          }
          .hex-cluster.left-cluster .hex-item .hex-icon,
          .hex-cluster.left-cluster .hex-item svg {
            width: clamp(18px, 4.5vw, 24px) !important;
            height: clamp(18px, 4.5vw, 24px) !important;
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
          <Leaf className="hex-icon" size={26} color="#FFFFFF" strokeWidth={2.2} />
          <h4>Acting Sustainably</h4>
        </motion.div>

        {/* 5. Middle Hexagon - Striving For Excellence */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="hex-item hex-pos-5"
          style={{ backgroundColor: '#002D62' }}
        >
          <Trophy className="hex-icon" size={26} color="#FFFFFF" strokeWidth={2.2} />
          <h4>Striving for Excellence</h4>
        </motion.div>

        {/* 6. Bottom Hexagon - Living Diversity */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="hex-item hex-pos-6"
          style={{ backgroundColor: '#00878A' }}
        >
          <Users className="hex-icon" size={26} color="#FFFFFF" strokeWidth={2.2} />
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
            position: static !important;
            width: 100% !important;
            max-width: 380px !important;
            height: auto !important;
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: clamp(6px, 2vw, 12px) !important;
            justify-items: center !important;
            align-items: center !important;
            margin: 0 auto !important;
          }
          .hex-cluster.right-cluster .hex-item {
            position: static !important;
            width: 100% !important;
            max-width: 116px !important;
            min-width: 84px !important;
            height: clamp(96px, 27vw, 128px) !important;
            padding: 8px 4px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .hex-cluster.right-cluster .hex-item h4 {
            font-size: clamp(0.56rem, 1.8vw, 0.68rem) !important;
            line-height: 1.15 !important;
            margin-top: 4px !important;
            letter-spacing: 0.02em !important;
            text-align: center !important;
            word-break: break-word !important;
          }
          .hex-cluster.right-cluster .hex-item .hex-icon,
          .hex-cluster.right-cluster .hex-item svg {
            width: clamp(18px, 4.5vw, 24px) !important;
            height: clamp(18px, 4.5vw, 24px) !important;
          }
        }
      `}</style>
    </div>
  );
};

