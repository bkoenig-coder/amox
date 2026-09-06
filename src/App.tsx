import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { WelcomeViewportOverlay } from './components/WelcomeViewportOverlay';
import { HomePage } from './pages/HomePage';
import { SunFestivalPage } from './pages/SunFestivalPage';
import { GuidePage } from './pages/GuidePage';
import { HousingPage } from './pages/HousingPage';
import { VisaInsurancePage } from './pages/VisaInsurancePage';
import { AboutPage } from './pages/AboutPage';
import { ImpressumPage } from './pages/ImpressumPage';

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global Ctrl+K Shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
        
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sun-festival" element={<SunFestivalPage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/housing" element={<HousingPage />} />
            <Route path="/visa-insurance" element={<VisaInsurancePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
          </Routes>
        </main>

        <Footer />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <WelcomeViewportOverlay />
      </div>
    </BrowserRouter>
  );
};
