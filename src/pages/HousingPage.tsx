import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Home, Search, Star, MapPin, ExternalLink, Filter, ShieldCheck } from 'lucide-react';
import { DORMS_DATA, Dormitory } from '../data/dormsData';

export const HousingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCity = searchParams.get('city') || 'all';

  const [selectedCity, setSelectedCity] = useState<string>(initialCity);
  const [selectedProvider, setSelectedProvider] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(750);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const city = searchParams.get('city');
    if (city) setSelectedCity(city.toLowerCase());
  }, [searchParams]);

  const filteredDorms = DORMS_DATA.filter(dorm => {
    const matchesCity = selectedCity === 'all' || dorm.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesProvider = selectedProvider === 'all' || dorm.provider === selectedProvider;
    const matchesPrice = dorm.pricePerMonth <= maxPrice;
    const matchesQuery = !searchQuery.trim() ||
      dorm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dorm.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dorm.recommendedFor.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCity && matchesProvider && matchesPrice && matchesQuery;
  });

  return (
    <div className="housing-page">
      {/* Header */}
      <section style={{
        padding: '60px 0 40px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, var(--bg-subtle) 100%)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container text-center">
          <span className="section-subtitle">ОЮУТНЫ ОРОН БАЙР &bull; LIVE DIRECTORY</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 2.8rem)', marginBottom: 14 }}>
            Австрийн <span className="gradient-text">Дотуур Байр Хайгч</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 660, margin: '0 auto 20px' }}>
            OeAD, STUWO, WIHAST, Base19 зэрэг 15+ оюутны байрны үнэ, байршил, нөхцөлийн нэгдсэн систем.
          </p>
        </div>
      </section>

      {/* Main Filter & Listing Section */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          {/* Mobile Filter Toggle Button */}
          <div className="mobile-filter-bar" style={{ marginBottom: 16 }}>
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="aiesec-btn-outline"
              style={{
                width: '100%',
                justifyContent: 'space-between',
                padding: '12px 18px',
                borderRadius: 12,
                color: 'var(--text-main) !important',
                borderColor: 'var(--border-strong)'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700 }}>
                <Filter size={16} color="var(--aiesec-blue)" />
                Шүүлтүүр тохируулах {selectedCity !== 'all' || selectedProvider !== 'all' || maxPrice < 750 ? '(Идэвхтэй)' : ''}
              </span>
              <span>{isMobileFilterOpen ? '▲ Хаах' : '▼ Нээх'}</span>
            </button>
          </div>

          <div
            className="housing-layout-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: 32,
              alignItems: 'flex-start'
            }}
          >
            {/* Left Filter Sidebar */}
            <div
              className={`housing-filter-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}
              style={{
                background: 'var(--surface)',
                border: '1.5px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: 24,
                boxShadow: 'var(--shadow-card)',
                position: 'sticky',
                top: 90
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: '1.1rem', fontWeight: 800 }}>
                <Filter size={18} color="var(--aiesec-blue)" />
                Шүүлтүүр
              </div>

              {/* City Filter */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: 8 }}>Хот сонгох</label>
                <select
                  className="form-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="all">Бүх Хот</option>
                  <option value="wien">Вена (Wien)</option>
                  <option value="graz">Грац (Graz)</option>
                  <option value="linz">Линц (Linz)</option>
                </select>
              </div>

              {/* Provider Filter */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: 8 }}>Байрны Байгууллага</label>
                <select
                  className="form-select"
                  value={selectedProvider}
                  onChange={(e) => setSelectedProvider(e.target.value)}
                >
                  <option value="all">Бүх Байгууллага</option>
                  <option value="OeAD">OeAD Housing</option>
                  <option value="STUWO">STUWO Housing</option>
                  <option value="Base19">Base19</option>
                  <option value="WIHAST">WIHAST</option>
                  <option value="Milestone">Milestone</option>
                </select>
              </div>

              {/* Price Range Slider */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.85rem', fontWeight: 700 }}>
                  <span>Дээд Үнэ:</span>
                  <span style={{ color: 'var(--aiesec-blue)', fontWeight: 800 }}>€{maxPrice} / сар</span>
                </div>
                <input
                  type="range"
                  min={350}
                  max={750}
                  step={25}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--aiesec-blue)' }}
                />
              </div>

              <button
                onClick={() => {
                  setSelectedCity('all');
                  setSelectedProvider('all');
                  setMaxPrice(750);
                  setSearchQuery('');
                }}
                className="aiesec-btn-outline"
                style={{ width: '100%', padding: '10px', fontSize: '0.85rem', color: 'var(--text-main) !important', borderColor: 'var(--border-strong)', justifyContent: 'center' }}
              >
                Шүүлтүүр цэвэрлэх
              </button>
            </div>

            {/* Right Listings Grid */}
            <div>
              {/* Search Bar on Top of Listings */}
              <div style={{ marginBottom: 20, display: 'flex', gap: 12 }}>
                <div style={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'var(--surface)',
                  border: '1.5px solid var(--border)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '10px 18px',
                  boxShadow: 'var(--shadow-xs)'
                }}>
                  <Search size={18} color="var(--text-muted)" />
                  <input
                    type="text"
                    placeholder="Байрны нэр, дүүргээр хайх..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', fontSize: '0.95rem' }}
                  />
                </div>
              </div>

              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 16 }}>
                Нийт олдсон: <strong>{filteredDorms.length}</strong> дотуур байр
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 20 }}>
                {filteredDorms.map(dorm => (
                  <div
                    key={dorm.id}
                    style={{
                      background: 'var(--surface)',
                      border: '1.5px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 28,
                      boxShadow: 'var(--shadow-card)',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative'
                    }}
                  >
                    {dorm.badge && (
                      <span className="badge badge-yellow" style={{ position: 'absolute', top: 20, right: 20 }}>
                        {dorm.badge}
                      </span>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <MapPin size={14} color="var(--primary)" /> {dorm.city} &bull; {dorm.district}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>{dorm.name}</h3>

                    <div style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 6,
                      fontSize: '1.8rem',
                      fontWeight: 900,
                      color: 'var(--primary)',
                      marginBottom: 16
                    }}>
                      €{dorm.pricePerMonth}
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>/ сар</span>
                    </div>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)', marginBottom: 16 }}>
                      {dorm.recommendedFor}
                    </p>

                    <ul style={{ listStyle: 'none', marginBottom: 20, flexGrow: 1 }}>
                      {dorm.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 6, display: 'flex', gap: 6 }}>
                          <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span> {feat}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={dorm.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aiesec-btn-primary"
                      style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '10px 16px', fontSize: '0.86rem' }}
                    >
                      <span>Байр үзэх &amp; Захиалах</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .mobile-filter-bar {
          display: none;
        }
        @media (max-width: 992px) {
          .mobile-filter-bar {
            display: block;
          }
          .housing-filter-sidebar {
            display: none;
            position: static !important;
          }
          .housing-filter-sidebar.mobile-open {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};
