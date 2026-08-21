import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, Calendar, MapPin, Trophy, Camera } from 'lucide-react';

export interface FestivalPhoto {
  id: string;
  year: string;
  title: string;
  category: string;
  image: string;
  location: string;
  description: string;
}

export const FESTIVAL_PHOTOS: FestivalPhoto[] = [
  {
    id: 'photo-1',
    year: '2025',
    title: 'Сагсан Бөмбөгийн Шигшээ Тоглолт & Алтан Медаль',
    category: '🏀 Сагсан бөмбөг',
    image: '/assets/sun_festival_basketball.jpg',
    location: 'Вена Хот • Sportzentrum',
    description: 'Европын 16 шилдэг баг өрсөлдөж, финалд Vienna Warriors болон Berlin Stars багууд тунасан гал гарсан шийдвэрлэх мөч.'
  },
  {
    id: 'photo-2',
    year: '2025',
    title: 'Волейболын Аваргын Төлөөх Шийдвэрлэх Өрсөлдөөн',
    category: '🏐 Волейбол',
    image: '/assets/sun_festival_volleyball.jpg',
    location: 'Вена Хот • Төв Арена',
    description: 'Холимог болон эрэгтэй 12 багийн 5 сет үргэлжилсэн өрсөлдөөн, Австри дахь оюутан залуусын хамтын дэмжлэг.'
  },
  {
    id: 'photo-3',
    year: '2024',
    title: 'Sun Festival Нээлтийн Ёслол & Залуусын Цугларалт',
    category: '🎉 Нээлтийн Ёслол',
    image: '/assets/media_1787152152741.jpg',
    location: 'Вена Их Сургуулийн Спорт Цогцолбор',
    description: 'Австри, Герман, Чех, Унгараас хүрэлцэн ирсэн 300 гаруй тамирчид, хөгжөөн дэмжигчдийн нэгдсэн жагсаал.'
  },
  {
    id: 'photo-4',
    year: '2024',
    title: 'Цом & Медаль Гардуулах Ёслолын Мөч',
    category: '🏆 Шагнал Гардуулалт',
    image: '/assets/media_1787152257891.jpg',
    location: 'Sportarena Wien',
    description: 'Нийт €3,000 шагналын сан бүхий 6 төрлийн аваргуудад цом, өргөмжлөл, ивээн тэтгэгчдийн бэлэг гардуулав.'
  },
  {
    id: 'photo-5',
    year: '2023',
    title: 'Ширээний Теннис & Шатрын Оюуны Тэмцээн',
    category: '♟️ Шатар & 🏓 Теннис',
    image: '/assets/student-male.jpg',
    location: 'Вена Хот • Клуб',
    description: 'Хурд, авхаалж самбаа, тактик шаардсан блиц тоглолтууд өндөр өрсөлдөөнтэй өрнөв.'
  }
];

export const FestivalPhotoSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const filteredPhotos = selectedYear === 'all' 
    ? FESTIVAL_PHOTOS 
    : FESTIVAL_PHOTOS.filter(p => p.year === selectedYear);

  const currentPhoto = filteredPhotos[currentIndex] || filteredPhotos[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  // Autoplay
  useEffect(() => {
    if (isPaused || lightboxOpen) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, lightboxOpen, filteredPhotos.length]);

  return (
    <div 
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Year Filter Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
        {['all', '2025', '2024', '2023'].map((year) => (
          <button
            key={year}
            onClick={() => {
              setSelectedYear(year);
              setCurrentIndex(0);
            }}
            style={{
              padding: '8px 20px',
              borderRadius: 'var(--radius-pill)',
              border: selectedYear === year ? '2px solid var(--aiesec-orange)' : '1px solid var(--border)',
              background: selectedYear === year ? 'var(--aiesec-orange)' : '#FFFFFF',
              color: selectedYear === year ? '#FFFFFF' : 'var(--text-main)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
          >
            {year === 'all' ? '🌟 Бүх Наадмын Зургууд' : `🏆 ${year} Он`}
          </button>
        ))}
      </div>

      {/* Main Slide Card */}
      <div
        style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          backgroundColor: '#0F172A',
          boxShadow: '0 25px 50px rgba(0, 45, 98, 0.15)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div style={{ position: 'relative', height: 'clamp(380px, 50vw, 560px)' }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentPhoto.id}
              src={currentPhoto.image}
              alt={currentPhoto.title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </AnimatePresence>

          {/* Dark Gradient Overlay with Details */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.92) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: 'clamp(20px, 4vw, 44px)',
              color: '#FFFFFF'
            }}
          >
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
              <span
                style={{
                  backgroundColor: 'var(--aiesec-orange)',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: 20,
                  fontSize: '0.8rem',
                  fontWeight: 800
                }}
              >
                {currentPhoto.category}
              </span>
              <span
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(6px)',
                  padding: '4px 12px',
                  borderRadius: 20,
                  fontSize: '0.8rem',
                  fontWeight: 700
                }}
              >
                {currentPhoto.year} Оны Наадам
              </span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 2.1rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.25,
                marginBottom: 10,
                letterSpacing: '-0.02em'
              }}
            >
              {currentPhoto.title}
            </h3>

            <p
              style={{
                fontSize: 'clamp(0.88rem, 1.5vw, 1rem)',
                color: '#E2E8F0',
                maxWidth: 720,
                lineHeight: 1.6,
                marginBottom: 16
              }}
            >
              {currentPhoto.description}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: '0.82rem', color: '#94A3B8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={14} color="var(--aiesec-orange)" />
                {currentPhoto.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Camera size={14} color="var(--aiesec-blue)" />
                AMOX Media Team
              </span>
            </div>
          </div>

          {/* Lightbox Trigger Button */}
          <button
            onClick={() => setLightboxOpen(true)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
            title="Томоор үзэх"
          >
            <Maximize2 size={18} />
          </button>
        </div>

        {/* Prev / Next Arrows */}
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.9)',
            border: 'none',
            borderRadius: '50%',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0F172A',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            zIndex: 10,
            transition: 'var(--transition)'
          }}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.9)',
            border: 'none',
            borderRadius: '50%',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0F172A',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            zIndex: 10,
            transition: 'var(--transition)'
          }}
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Thumbnails Navigation Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${filteredPhotos.length}, 1fr)`,
          gap: 12,
          marginTop: 16
        }}
      >
        {filteredPhotos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => setCurrentIndex(index)}
            style={{
              padding: 0,
              border: currentIndex === index ? '3px solid var(--aiesec-orange)' : '2px solid transparent',
              borderRadius: 14,
              overflow: 'hidden',
              background: '#000',
              cursor: 'pointer',
              height: 76,
              position: 'relative',
              opacity: currentIndex === index ? 1 : 0.6,
              transition: 'var(--transition)'
            }}
          >
            <img
              src={photo.image}
              alt={photo.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '2px 4px',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {photo.year} • {photo.category.split(' ')[1] || photo.category}
            </div>
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.92)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 30
            }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: '#fff',
                borderRadius: '50%',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>
            <img
              src={currentPhoto.image}
              alt={currentPhoto.title}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: 16,
                boxShadow: '0 20px 60px rgba(0,0,0,0.8)'
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
