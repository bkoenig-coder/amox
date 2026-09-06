import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Trophy, 
  BookOpen, 
  Home, 
  ShieldCheck, 
  Users, 
  Sparkles,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { 
  FacebookIcon, 
  InstagramIcon, 
  YoutubeIcon, 
  SoundcloudIcon 
} from './ChannelIcons';

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
                className="nav-brand-sub"
                style={{
                  fontSize: '0.72rem',
                  display: 'block',
                  color: isTransparent ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)',
                  fontWeight: 500
                }}
              >
                Mongolian Students Association in Austria
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
                      <span>MA35 Виз &amp; E-Card</span>
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

          {/* Right Actions - Search, CTA, and Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              style={{
                background: isTransparent ? 'rgba(255,255,255,0.18)' : 'var(--bg-subtle)',
                border: isTransparent ? '1px solid rgba(255,255,255,0.25)' : '1px solid var(--border)',
                borderRadius: 12,
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: isTransparent ? '#FFFFFF' : 'var(--text-main)',
                backdropFilter: 'blur(8px)',
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
                background: isMobileMenuOpen 
                  ? 'var(--aiesec-blue)' 
                  : isTransparent 
                  ? 'rgba(255,255,255,0.18)' 
                  : 'var(--bg-subtle)',
                border: isTransparent && !isMobileMenuOpen ? '1px solid rgba(255,255,255,0.25)' : '1px solid var(--border)',
                borderRadius: 12,
                color: isMobileMenuOpen ? '#FFFFFF' : isTransparent ? '#FFFFFF' : 'var(--text-main)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isMobileMenuOpen ? '0 4px 14px rgba(3, 126, 243, 0.35)' : 'none'
              }}
              className="mobile-toggle"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
                  backgroundColor: 'rgba(5, 15, 35, 0.65)',
                  backdropFilter: 'blur(8px)',
                  zIndex: 998
                }}
              />

              {/* Drawer Content */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  top: 76,
                  left: 0,
                  right: 0,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '0 0 26px 26px',
                  borderBottom: '2px solid rgba(3, 126, 243, 0.25)',
                  padding: '16px 16px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                  boxShadow: '0 24px 60px rgba(0, 20, 50, 0.25)',
                  maxHeight: 'calc(90vh - 76px)',
                  overflowY: 'auto',
                  zIndex: 999
                }}
              >
                {/* Home Nav Item */}
                <NavLink
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    padding: '10px 14px',
                    borderRadius: 14,
                    background: isActive ? '#EFF6FF' : '#F8FAFC',
                    border: isActive ? '1px solid rgba(3, 126, 243, 0.25)' : '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  })}
                  end
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Sparkles size={18} color="var(--aiesec-blue)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--text-main)' }}>Нүүр хуудас</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AMOX Home &bull; Австри дахь оюутнууд</div>
                    </div>
                  </div>
                  <ChevronRight size={16} color="#A0AEC0" />
                </NavLink>

                {/* Section 1: Core Student Services */}
                <div>
                  <div style={{ padding: '0 6px 6px', fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Оюутны Хөтөч &amp; Төвүүд
                  </div>

                  <div style={{ background: '#F8FAFC', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
                    <Link
                      to="/guide"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(0,0,0,0.05)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <BookOpen size={18} color="var(--aiesec-blue)" />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>9 Бүлэг Оюутны Хөтөч</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Сургууль, элсэлт, даатгал, визний мэдээлэл</div>
                        </div>
                      </div>
                      <ChevronRight size={16} color="#A0AEC0" />
                    </Link>

                    <Link
                      to="/housing"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(0,0,0,0.05)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Home size={18} color="var(--aiesec-teal)" />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>Дотуур Байр Хайгч (15+ Байр)</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Вена, Грац, Линц оюутны байрнууд</div>
                        </div>
                      </div>
                      <ChevronRight size={16} color="#A0AEC0" />
                    </Link>

                    <Link
                      to="/visa-insurance"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        textDecoration: 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <ShieldCheck size={18} color="var(--aiesec-orange)" />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>MA35 Виз &amp; E-Card Төв</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Герман и-мэйл генератор &amp; бичиг баримт</div>
                        </div>
                      </div>
                      <ChevronRight size={16} color="#A0AEC0" />
                    </Link>
                  </div>
                </div>

                {/* Section 2: Events & Organization */}
                <div>
                  <div style={{ padding: '0 6px 6px', fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Хөтөлбөр &amp; Байгууллага
                  </div>

                  <div style={{ background: '#F8FAFC', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
                    <Link
                      to="/sun-festival"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(0,0,0,0.05)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Trophy size={18} color="#D97706" />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>AMOX Sun Festival 2027</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Европ дахь Монголчуудын спортын наадам</div>
                        </div>
                      </div>
                      <ChevronRight size={16} color="#A0AEC0" />
                    </Link>

                    <Link
                      to="/about#mentor"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(0,0,0,0.05)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#FAF5FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <GraduationCap size={18} color="var(--aiesec-purple)" />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>Students Info Day 2026</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>9-р сарын өдөрлөг &amp; 1-on-1 менторшил</div>
                        </div>
                      </div>
                      <ChevronRight size={16} color="#A0AEC0" />
                    </Link>

                    <Link
                      to="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        textDecoration: 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Users size={18} color="var(--aiesec-blue)" />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>Бидний тухай &amp; Алсын хараа</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Seit 2007, ZVR 107178700, Удирдах зөвлөл</div>
                        </div>
                      </div>
                      <ChevronRight size={16} color="#A0AEC0" />
                    </Link>
                  </div>
                </div>

                {/* Section 3: Official Social Channels Row */}
                <div style={{ padding: '10px 12px', background: '#F8FAFC', borderRadius: 16, border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Албан ёсны хаягууд
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--aiesec-blue)', fontWeight: 700 }}>
                      AMOX Channels
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
                    <a
                      href="https://www.facebook.com/groups/AmoxAustriaGroup/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ flex: 1, height: 38, background: '#FFFFFF', borderRadius: 10, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                      title="Facebook Group"
                    >
                      <FacebookIcon size={18} color="#1877F2" />
                    </a>
                    <a
                      href="https://www.instagram.com/amox_at/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ flex: 1, height: 38, background: '#FFFFFF', borderRadius: 10, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                      title="Instagram"
                    >
                      <InstagramIcon size={18} color="#E1306C" />
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=F0kR6q0v13s"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ flex: 1, height: 38, background: '#FFFFFF', borderRadius: 10, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                      title="YouTube"
                    >
                      <YoutubeIcon size={18} color="#FF0000" />
                    </a>
                    <a
                      href="https://soundcloud.com/amox-podcast"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ flex: 1, height: 38, background: '#FFFFFF', borderRadius: 10, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                      title="SoundCloud Podcast"
                    >
                      <SoundcloudIcon size={18} color="#FF5500" />
                    </a>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <Link
                  to="/about#mentor"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="aiesec-btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '13px',
                    borderRadius: 'var(--radius-pill)',
                    fontWeight: 800,
                    fontSize: '0.94rem',
                    boxShadow: '0 8px 24px rgba(3, 126, 243, 0.35)'
                  }}
                >
                  <span>🎓 Менторшил авах / Багт нэгдэх</span>
                  <ArrowRight size={16} />
                </Link>
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
        @media (max-width: 540px) {
          .nav-brand-sub {
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
