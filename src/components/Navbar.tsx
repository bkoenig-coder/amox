import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Trophy, 
  BookOpen, 
  Home, 
  ShieldCheck, 
  Users, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Navbar color mode: transparent on home top, white when scrolled or on inner pages
  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          backgroundColor: isTransparent ? 'transparent' : '#FFFFFF',
          boxShadow: isTransparent ? 'none' : '0 2px 20px rgba(0, 0, 0, 0.08)',
          borderBottom: isTransparent ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 76
          }}
        >
          {/* Brand Logo - AIESEC Left Aligned Style */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              textDecoration: 'none',
              color: isTransparent ? '#FFFFFF' : 'var(--text-main)'
            }}
          >
            <img
              src="/assets/logo.png"
              alt="AMOX Logo"
              style={{
                height: 42,
                width: 'auto',
                filter: isTransparent ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' : 'none'
              }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    letterSpacing: '-0.02em',
                    color: isTransparent ? '#FFFFFF' : 'var(--aiesec-blue)'
                  }}
                >
                  AMOX
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: isTransparent ? 'rgba(255,255,255,0.25)' : 'var(--aiesec-blue)',
                    color: '#FFFFFF'
                  }}
                >
                  Seit 2007
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  display: 'block',
                  color: isTransparent ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)',
                  fontWeight: 500
                }}
              >
                Austria Mongolian Students
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 28
            }}
            className="desktop-nav"
          >
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: isTransparent
                  ? '#FFFFFF'
                  : isActive
                  ? 'var(--aiesec-blue)'
                  : 'var(--text-main)',
                transition: 'var(--transition)'
              })}
              end
            >
              Нүүр
            </NavLink>

            {/* For Students Dropdown */}
            <div
              onMouseEnter={() => setActiveDropdown('students')}
              onMouseLeave={() => setActiveDropdown(null)}
              style={{ position: 'relative' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: isTransparent ? '#FFFFFF' : 'var(--text-main)',
                  padding: '8px 0'
                }}
              >
                <span>Оюутнуудад</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: activeDropdown === 'students' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s'
                  }}
                />
              </div>

              <AnimatePresence>
                {activeDropdown === 'students' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: -20,
                      width: 260,
                      backgroundColor: '#FFFFFF',
                      borderRadius: 14,
                      boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                      padding: 12,
                      border: '1px solid rgba(0,0,0,0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 4
                    }}
                  >
                    <Link
                      to="/guide"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 12px',
                        borderRadius: 8,
                        textDecoration: 'none',
                        color: 'var(--text-main)',
                        fontSize: '0.88rem',
                        fontWeight: 600
                      }}
                      className="nav-dropdown-item"
                    >
                      <BookOpen size={16} color="var(--aiesec-blue)" />
                      <span>9 Бүлэг Гарын Авлага</span>
                    </Link>
                    <Link
                      to="/housing"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 12px',
                        borderRadius: 8,
                        textDecoration: 'none',
                        color: 'var(--text-main)',
                        fontSize: '0.88rem',
                        fontWeight: 600
                      }}
                      className="nav-dropdown-item"
                    >
                      <Home size={16} color="var(--aiesec-teal)" />
                      <span>Оюутны Байр Хайгч</span>
                    </Link>
                    <Link
                      to="/visa-insurance"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 12px',
                        borderRadius: 8,
                        textDecoration: 'none',
                        color: 'var(--text-main)',
                        fontSize: '0.88rem',
                        fontWeight: 600
                      }}
                      className="nav-dropdown-item"
                    >
                      <ShieldCheck size={16} color="var(--aiesec-orange)" />
                      <span>MA35 Виз & E-Card</span>
                    </Link>
                    <Link
                      to="/about#mentor"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 12px',
                        borderRadius: 8,
                        textDecoration: 'none',
                        color: 'var(--text-main)',
                        fontSize: '0.88rem',
                        fontWeight: 600
                      }}
                      className="nav-dropdown-item"
                    >
                      <Users size={16} color="var(--aiesec-purple)" />
                      <span>Ахмад Оюутны Менторшил</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Programs & Events */}
            <NavLink
              to="/sun-festival"
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: isTransparent
                  ? '#FFFFFF'
                  : isActive
                  ? 'var(--aiesec-blue)'
                  : 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                gap: 6
              })}
            >
              <Trophy size={16} color={isTransparent ? '#FFDD00' : 'var(--aiesec-orange)'} />
              <span>Sun Festival</span>
            </NavLink>

            {/* About AMOX */}
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: isTransparent
                  ? '#FFFFFF'
                  : isActive
                  ? 'var(--aiesec-blue)'
                  : 'var(--text-main)'
              })}
            >
              Бидний тухай
            </NavLink>
          </nav>

          {/* Right Actions - Search, CTA, and Member Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              style={{
                background: isTransparent ? 'rgba(255,255,255,0.18)' : 'var(--bg-subtle)',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: isTransparent ? '#FFFFFF' : 'var(--text-main)',
                transition: 'var(--transition)'
              }}
            >
              <Search size={18} />
            </button>

            {/* Join CTA Button - hidden on tiny mobile, visible on desktop/tablet */}
            <Link
              to="/about#mentor"
              className={`desktop-cta ${isTransparent ? 'aiesec-btn-outline' : 'aiesec-btn-primary'}`}
              style={{
                padding: '8px 18px',
                fontSize: '0.85rem'
              }}
            >
              <span>Бидэнтэй нэгдэх</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: isTransparent ? 'rgba(255,255,255,0.18)' : 'var(--bg-subtle)',
                border: 'none',
                borderRadius: 10,
                color: isTransparent ? '#FFFFFF' : 'var(--text-main)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40
              }}
              className="mobile-toggle"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  position: 'fixed',
                  top: 76,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 998
                }}
              />

              {/* Drawer Content */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  top: 76,
                  left: 0,
                  right: 0,
                  backgroundColor: '#FFFFFF',
                  borderBottom: '2px solid var(--border)',
                  padding: '20px 20px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  maxHeight: 'calc(100vh - 86px)',
                  overflowY: 'auto',
                  zIndex: 999
                }}
              >
                <NavLink
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={({ isActive }) => ({
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: isActive ? 'var(--aiesec-blue)' : 'var(--text-main)',
                    textDecoration: 'none',
                    padding: '10px 14px',
                    borderRadius: 10,
                    background: isActive ? 'var(--bg-subtle)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                  })}
                  end
                >
                  <Sparkles size={18} color="var(--aiesec-blue)" />
                  <span>Нүүр хуудас</span>
                </NavLink>

                <div style={{ padding: '6px 14px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Оюутны Хөтөч &amp; Үйлчилгээ
                </div>

                <Link
                  to="/guide"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    padding: '10px 14px',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'var(--bg-subtle)'
                  }}
                >
                  <BookOpen size={18} color="var(--aiesec-blue)" />
                  <span>📖 9 Бүлэг Оюутны Гарын Авлага</span>
                </Link>

                <Link
                  to="/housing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    padding: '10px 14px',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'var(--bg-subtle)'
                  }}
                >
                  <Home size={18} color="var(--aiesec-teal)" />
                  <span>🏠 Дотуур Байр Хайгч (15+ Байр)</span>
                </Link>

                <Link
                  to="/visa-insurance"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    padding: '10px 14px',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'var(--bg-subtle)'
                  }}
                >
                  <ShieldCheck size={18} color="var(--aiesec-orange)" />
                  <span>🛂 MA35 Виз &amp; E-Card Төв</span>
                </Link>

                <div style={{ padding: '6px 14px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Хөтөлбөр &amp; Наадам
                </div>

                <Link
                  to="/sun-festival"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--aiesec-orange)',
                    textDecoration: 'none',
                    padding: '10px 14px',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: '#FFF7ED'
                  }}
                >
                  <Trophy size={18} color="var(--aiesec-orange)" />
                  <span>AMOX Sun Festival 2027</span>
                </Link>

                <Link
                  to="/about#mentor"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--aiesec-purple)',
                    textDecoration: 'none',
                    padding: '10px 14px',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: '#FAF5FF'
                  }}
                >
                  <Users size={18} color="var(--aiesec-purple)" />
                  <span>🎓 9-р Сарын Өдөрлөг &amp; Менторшил</span>
                </Link>

                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    padding: '10px 14px',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                  }}
                >
                  <span>Бидний тухай &bull; Түүх &bull; Үнэт зүйлс</span>
                </Link>

                <div style={{ marginTop: 8, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                  <Link
                    to="/about#mentor"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="aiesec-btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
                  >
                    <span>Бидэнтэй нэгдэх (1-on-1 Ментор)</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Style for responsive nav display */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-cta {
            display: none !important;
          }
        }
        .nav-dropdown-item:hover {
          background-color: var(--bg-subtle);
          color: var(--aiesec-blue) !important;
        }
      `}</style>
    </>
  );
};
