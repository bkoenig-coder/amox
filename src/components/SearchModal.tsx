import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Home, ShieldCheck, Trophy, ArrowRight } from 'lucide-react';
import { GUIDE_CHAPTERS } from '../data/guideData';
import { DORMS_DATA } from '../data/dormsData';
import { EVENTS_DATA } from '../data/eventsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredGuides = query.trim() ? GUIDE_CHAPTERS.filter(g => 
    g.title.toLowerCase().includes(query.toLowerCase()) || 
    g.summary.toLowerCase().includes(query.toLowerCase())
  ) : GUIDE_CHAPTERS.slice(0, 3);

  const filteredDorms = query.trim() ? DORMS_DATA.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase()) ||
    d.city.toLowerCase().includes(query.toLowerCase()) ||
    d.district.toLowerCase().includes(query.toLowerCase())
  ) : DORMS_DATA.slice(0, 2);

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 'clamp(20px, 8vh, 80px) 14px 20px'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--surface)',
          width: '100%',
          maxWidth: 640,
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-modal)',
          border: '1px solid var(--border)',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease'
        }}
      >
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '16px 20px',
          borderBottom: '1px solid var(--border)'
        }}>
          <Search size={20} color="var(--aiesec-blue)" />
          <input
            type="text"
            placeholder="Хайх: MA35 виз, дотуур байр, элсэлт, 20 цагийн ажил..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              fontFamily: 'var(--font-body)',
              background: 'transparent',
              color: 'var(--text-main)'
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            style={{
              background: 'var(--bg-subtle)',
              border: 'none',
              borderRadius: '50%',
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-muted)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Search Results Area */}
        <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: '16px 20px' }}>
          {/* Section: Guide */}
          <div style={{ marginBottom: 20 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              📖 Оюутны Гарын Авлага ({filteredGuides.length})
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
              {filteredGuides.map(guide => (
                <div
                  key={guide.id}
                  onClick={() => handleSelect(`/guide#${guide.id}`)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-subtle)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'var(--transition)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <BookOpen size={16} color="var(--primary)" />
                    <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      Бүлэг {guide.chapterNumber}: {guide.title}
                    </span>
                  </div>
                  <ArrowRight size={14} color="var(--text-muted)" />
                </div>
              ))}
            </div>
          </div>

          {/* Section: Dorms */}
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              🏠 Дотуур Байр ({filteredDorms.length})
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
              {filteredDorms.map(dorm => (
                <div
                  key={dorm.id}
                  onClick={() => handleSelect(`/housing`)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-subtle)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'var(--transition)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Home size={16} color="var(--secondary)" />
                    <div>
                      <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {dorm.name} ({dorm.city})
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: 8 }}>
                        €{dorm.pricePerMonth}/сар
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={14} color="var(--text-muted)" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '12px 20px',
          background: 'var(--bg-subtle)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <span>🔍 Шуурхай хайх: ESC дарж хаана</span>
          <span>AMOX Seit 2007</span>
        </div>
      </div>
    </div>
  );
};
