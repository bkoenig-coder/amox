import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Calculator, CheckSquare, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { GUIDE_CHAPTERS, GuideChapter } from '../data/guideData';

export const GuidePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openChapterId, setOpenChapterId] = useState<string>('chapter-1-admission');

  // Budget Calculator state
  const [dormPrice, setDormPrice] = useState(450);
  const [foodPrice, setFoodPrice] = useState(250);
  const [insurancePrice, setInsurancePrice] = useState(69);
  const [otherPrice, setOtherPrice] = useState(130);
  const [workIncome, setWorkIncome] = useState(650);

  const totalExpense = dormPrice + foodPrice + insurancePrice + otherPrice;
  const netBalance = workIncome - totalExpense;

  const categories = [
    { id: 'all', label: 'Бүх Бүлэг' },
    { id: 'admission', label: '🎓 Элсэлт' },
    { id: 'visa', label: '🛂 MA35 Виз' },
    { id: 'housing', label: '🏠 Дотуур Байр' },
    { id: 'insurance', label: '🩺 Даатгал (ÖGK)' },
    { id: 'work', label: '💼 20h Ажил' },
    { id: 'finance', label: '💶 Санхүү' }
  ];

  const filteredChapters = GUIDE_CHAPTERS.filter(chapter => {
    const matchesCategory = selectedCategory === 'all' || chapter.category === selectedCategory;
    const matchesQuery = !searchQuery.trim() || 
      chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.contentMarkdown.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="guide-page">
      {/* Header */}
      <section style={{
        padding: '60px 0 40px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, var(--bg-subtle) 100%)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container text-center">
          <span className="section-subtitle">2026/2027 АЛБАН ЁСНЫ ЭХ СУРВАЛЖ</span>
          <h1 style={{ fontSize: '2.8rem', marginBottom: 14 }}>
            Австрийн Оюутны <span className="gradient-text">Цогц Гарын Авлага</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 660, margin: '0 auto 28px' }}>
            Их сургуулийн элсэлт, MA35 виз, E-Card даатгал, 20 цагийн ажил, дотуур байрны 9 бүлэг бүрэн зааварчилгаа.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'var(--surface)',
              border: '2px solid var(--border)',
              borderRadius: 'var(--radius-pill)',
              padding: '8px 20px',
              boxShadow: 'var(--shadow-card)'
            }}>
              <Search size={20} color="var(--primary)" />
              <input
                type="text"
                placeholder="Хайх: MA35, кредит, e-card, даатгал, данс..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-main)',
                  background: 'transparent'
                }}
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="scroll-x-touch" style={{ justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginTop: 24, padding: '4px 0' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  border: '1.5px solid transparent',
                  background: selectedCategory === cat.id ? 'var(--aiesec-blue)' : 'var(--bg-subtle)',
                  color: selectedCategory === cat.id ? '#FFFFFF' : 'var(--text-sub)',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Accordion List */}
      <section style={{ padding: '50px 0' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {filteredChapters.map(chapter => {
              const isOpen = openChapterId === chapter.id;
              return (
                <div
                  key={chapter.id}
                  id={chapter.id}
                  style={{
                    background: 'var(--surface)',
                    border: `1.5px solid ${isOpen ? 'var(--aiesec-blue)' : 'var(--border)'}`,
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                    transition: 'var(--transition)'
                  }}
                >
                  <div
                    onClick={() => setOpenChapterId(isOpen ? '' : chapter.id)}
                    style={{
                      padding: '20px clamp(16px, 4vw, 28px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      background: isOpen ? '#EFF6FF' : 'transparent'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: isOpen ? 'var(--aiesec-blue)' : 'var(--bg-subtle)',
                        color: isOpen ? '#FFFFFF' : 'var(--aiesec-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '1.05rem',
                        flexShrink: 0
                      }}>
                        {chapter.chapterNumber}
                      </div>
                      <div>
                        <h3 style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)', marginBottom: 4 }}>{chapter.title}</h3>
                        <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>{chapter.subtitle}</p>
                      </div>
                    </div>

                    {isOpen ? <ChevronUp size={22} color="var(--aiesec-blue)" /> : <ChevronDown size={22} color="var(--text-muted)" />}
                  </div>

                  {isOpen && (
                    <div style={{ padding: '20px clamp(16px, 4vw, 28px)', borderTop: '1px solid var(--border)' }}>
                      {/* Summary callout */}
                      <div style={{
                        background: 'var(--bg-subtle)',
                        borderLeft: '4px solid var(--aiesec-blue)',
                        padding: '14px 18px',
                        borderRadius: 8,
                        marginBottom: 20,
                        fontSize: '0.92rem',
                        lineHeight: 1.6
                      }}>
                        {chapter.summary}
                      </div>

                      {/* Key Takeaways */}
                      <div style={{ marginBottom: 20 }}>
                        <h5 style={{ fontSize: '0.95rem', marginBottom: 10, color: 'var(--aiesec-blue)' }}>⚡ Гол Анхаарах Зүйлс:</h5>
                        <ul style={{ listStyle: 'none' }}>
                          {chapter.keyTakeaways.map((point, pIdx) => (
                            <li key={pIdx} style={{ fontSize: '0.88rem', color: 'var(--text-sub)', marginBottom: 8, display: 'flex', gap: 8 }}>
                              <span style={{ color: 'var(--aiesec-blue)', fontWeight: 900 }}>•</span> {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Official Links */}
                      {chapter.officialLinks.length > 0 && (
                        <div style={{ paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                          {chapter.officialLinks.map((link, lIdx) => (
                            <a
                              key={lIdx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="aiesec-btn-outline"
                              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 16px', fontSize: '0.82rem', color: 'var(--text-main) !important', borderColor: 'var(--border-strong)' }}
                            >
                              <span>{link.label}</span>
                              <ExternalLink size={13} />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Student Budget Calculator */}
      <section style={{ padding: '70px 0', background: 'var(--bg-subtle)' }} id="calculator">
        <div className="container" style={{ maxWidth: 880 }}>
          <div style={{
            background: 'var(--surface)',
            border: '1.5px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(22px, 5vw, 40px)',
            boxShadow: 'var(--shadow-modal)'
          }}>
            <div className="text-center" style={{ marginBottom: 28 }}>
              <span className="section-subtitle">ИНТЕРАКТИВ ТООЦООЛУУР &bull; LIVE BUDGET</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)' }}>Оюутны Сарын Төсвийн Тооцоолуур</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Та өөрийн сарын зардал болон орлогыг оруулж санхүүгийн тэнцлээ тооцоолоорой.</p>
            </div>

            <div
              className="budget-calc-grid"
              style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 32, alignItems: 'center' }}
            >
              <div>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>🏠 Дотуур Байр:</span>
                    <span>€{dormPrice} / сар</span>
                  </div>
                  <input
                    type="range"
                    min={300}
                    max={800}
                    step={10}
                    value={dormPrice}
                    onChange={(e) => setDormPrice(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--primary)' }}
                  />
                </div>

                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>🍲 Хоол, Хүнс:</span>
                    <span>€{foodPrice} / сар</span>
                  </div>
                  <input
                    type="range"
                    min={150}
                    max={500}
                    step={10}
                    value={foodPrice}
                    onChange={(e) => setFoodPrice(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--primary)' }}
                  />
                </div>

                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>🩺 Эрүүл Мэндийн Даатгал (ÖGK):</span>
                    <span>€{insurancePrice} / сар</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={120}
                    step={1}
                    value={insurancePrice}
                    onChange={(e) => setInsurancePrice(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--primary)' }}
                  />
                </div>

                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>💼 20 Цагийн Ажлын Орлого:</span>
                    <span style={{ color: 'var(--accent-green)' }}>€{workIncome} / сар</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1500}
                    step={25}
                    value={workIncome}
                    onChange={(e) => setWorkIncome(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-green)' }}
                  />
                </div>
              </div>

              {/* Result Summary Box */}
              <div style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: 30,
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', marginBottom: 6 }}>
                  САРЫН НИЙТ ЗАРДАЛ
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: 16 }}>
                  €{totalExpense}
                </div>

                <div style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', marginBottom: 6 }}>
                  ЦЭВЭР ТЭНЦЭЛ (Орлого - Зардал)
                </div>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  color: netBalance >= 0 ? 'var(--accent-green)' : '#EF4444'
                }}>
                  {netBalance >= 0 ? `+€${netBalance}` : `-€${Math.abs(netBalance)}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
