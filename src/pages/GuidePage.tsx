import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Calculator, 
  CheckSquare, 
  Square, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  GraduationCap, 
  FileCheck, 
  Home, 
  ShieldPlus, 
  Briefcase, 
  CreditCard, 
  Train, 
  Compass, 
  PhoneCall, 
  Layers, 
  ListChecks, 
  HelpCircle, 
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';
import { GUIDE_CHAPTERS, GuideChapter } from '../data/guideData';

export const GuidePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openChapterId, setOpenChapterId] = useState<string>('chapter-1-admission');
  const [chapterActiveTab, setChapterActiveTab] = useState<Record<string, 'details' | 'misconceptions' | 'steps' | 'checklist'>>({
    'chapter-1-admission': 'details',
    'chapter-2-ma35-visa': 'details',
    'chapter-3-housing': 'details',
    'chapter-4-insurance': 'details',
    'chapter-5-work': 'details',
    'chapter-6-budget': 'details',
    'chapter-7-transport': 'details',
    'chapter-8-living': 'details',
    'chapter-9-emergency': 'details'
  });

  // Interactive Checklist State per chapter item
  const [checkedChecklist, setCheckedChecklist] = useState<Record<string, boolean>>({});

  const toggleChecklistItem = (itemKey: string) => {
    setCheckedChecklist(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  const handleTabChange = (chapterId: string, tab: 'details' | 'misconceptions' | 'steps' | 'checklist') => {
    setChapterActiveTab(prev => ({
      ...prev,
      [chapterId]: tab
    }));
  };

  // Budget Calculator state
  const [dormPrice, setDormPrice] = useState(450);
  const [foodPrice, setFoodPrice] = useState(260);
  const [insurancePrice, setInsurancePrice] = useState(79);
  const [otherPrice, setOtherPrice] = useState(130);
  const [workIncome, setWorkIncome] = useState(750);

  const totalExpense = dormPrice + foodPrice + insurancePrice + otherPrice;
  const netBalance = workIncome - totalExpense;

  const categories = [
    { id: 'all', label: 'Бүх Бүлэг (9)' },
    { id: 'admission', label: '🎓 Их Сургуулийн Элсэлт' },
    { id: 'visa', label: '🛂 MA35 Оюутны Виз' },
    { id: 'housing', label: '🏠 Дотуур Байр & Хаяг' },
    { id: 'insurance', label: '🩺 ÖGK Даатгал & E-Card' },
    { id: 'work', label: '💼 AMS 20h Ажил & Цалин' },
    { id: 'finance', label: '💶 Санхүү, Данс & Татвар' },
    { id: 'transport', label: '🚆 Нийтийн Тээвэр' },
    { id: 'living', label: '🧭 Өдөр Тутмын Амьдрал' },
    { id: 'emergency', label: '🚨 Яаралтай & ЭСЯ' }
  ];

  const filteredChapters = GUIDE_CHAPTERS.filter(chapter => {
    const matchesCategory = selectedCategory === 'all' || chapter.category === selectedCategory;
    if (!searchQuery.trim()) return matchesCategory;

    const q = searchQuery.toLowerCase();
    const matchesBasic = 
      chapter.title.toLowerCase().includes(q) ||
      chapter.subtitle.toLowerCase().includes(q) ||
      chapter.summary.toLowerCase().includes(q) ||
      chapter.alumniNote.toLowerCase().includes(q);

    const matchesMisinfo = chapter.misconceptions.some(m => 
      m.myth.toLowerCase().includes(q) || 
      m.reality.toLowerCase().includes(q) ||
      m.advice.toLowerCase().includes(q)
    );

    const matchesSteps = chapter.stepByStep.some(s => 
      s.title.toLowerCase().includes(q) || 
      s.description.toLowerCase().includes(q)
    );

    const matchesSections = chapter.detailedSections.some(d => 
      d.title.toLowerCase().includes(q) || 
      d.paragraphs.some(p => p.toLowerCase().includes(q))
    );

    return matchesCategory && (matchesBasic || matchesMisinfo || matchesSteps || matchesSections);
  });

  const renderChapterIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={20} />;
      case 'FileCheck': return <FileCheck size={20} />;
      case 'Home': return <Home size={20} />;
      case 'ShieldPlus': return <ShieldPlus size={20} />;
      case 'Briefcase': return <Briefcase size={20} />;
      case 'CreditCard': return <CreditCard size={20} />;
      case 'Train': return <Train size={20} />;
      case 'Compass': return <Compass size={20} />;
      case 'PhoneCall': return <PhoneCall size={20} />;
      default: return <BookOpen size={20} />;
    }
  };

  return (
    <div className="guide-page" style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      {/* Hero Header */}
      <section style={{
        padding: '70px 0 45px',
        background: 'linear-gradient(135deg, #0A192F 0%, #002D62 55%, #037EF3 100%)',
        color: '#FFFFFF',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container text-center">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '6px 16px',
            borderRadius: 30,
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: 16,
            color: '#E0F2FE'
          }}>
            <Award size={15} color="#FBBF24" />
            <span>Австрийн Төгсөгчдийн (Alumni) Бодит Туршлагаар Бэлтгэв &bull; 2026/2027</span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)', 
            fontWeight: 900,
            marginBottom: 16,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            lineHeight: 1.2
          }}>
            Австрийн Оюутны <span style={{ color: '#60A5FA' }}>Цогц Гарын Авлага</span>
          </h1>

          <p style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', 
            maxWidth: 780, 
            margin: '0 auto 32px',
            lineHeight: 1.6
          }}>
            Монголоос эхлээд их сургуулиа амжилттай төгсөх хүртэлх бүх давааг өөрийн биеэр туулсан монгол оюутан төгсөгчдийн алтан зөвлөгөө, хууль эрх зүйн бодит үнэн ба түгээмэл ташаа ойлголтуудын бүрэн залруулга.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: '#FFFFFF',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: 30,
              padding: '10px 22px',
              boxShadow: '0 10px 25px rgba(0, 20, 50, 0.2)'
            }}>
              <Search size={20} color="var(--primary)" />
              <input
                type="text"
                placeholder="Хайх: MA35, кредит, 16 ECTS, даатгал, түрээс, данс, Апостиль, VWU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-body)',
                  color: '#1E293B',
                  background: 'transparent'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    background: '#E2E8F0',
                    border: 'none',
                    borderRadius: '50%',
                    width: 24,
                    height: 24,
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    color: '#64748B'
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Fast Official Links Bar */}
          <div style={{
            marginTop: 28,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '10px 18px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: 20,
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.8)' }}>
              Шуурхай холбоосууд:
            </span>
            <a
              href="https://docs.google.com/document/d/18X8c1iTN8rQPaVyUCq34wE5ApBgyHJvyvdSv4IGEWbY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#93C5FD',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4
              }}
            >
              <span>📄 Албан баримт (Doc)</span>
              <ExternalLink size={12} />
            </a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <a
              href="https://youtu.be/j_DwiLspu08"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FCA5A5',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4
              }}
            >
              <span>🎥 Видео гарын авлага</span>
              <ExternalLink size={12} />
            </a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <a
              href="https://www.facebook.com/groups/AmoxAustriaGroup"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#86EFAC',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4
              }}
            >
              <span>👥 AMOX Фэйсбүүк групп</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Category Pills Navigation */}
      <section style={{ 
        position: 'sticky', 
        top: 60, 
        zIndex: 20, 
        background: '#FFFFFF', 
        borderBottom: '1px solid var(--border)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
      }}>
        <div className="container" style={{ padding: '12px 16px' }}>
          <div className="scroll-x-touch" style={{ display: 'flex', gap: 8, padding: '2px 0' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 20,
                  fontSize: '0.84rem',
                  fontWeight: selectedCategory === cat.id ? 800 : 600,
                  border: selectedCategory === cat.id ? '1.5px solid var(--aiesec-blue)' : '1px solid var(--border)',
                  background: selectedCategory === cat.id ? '#EFF6FF' : '#FFFFFF',
                  color: selectedCategory === cat.id ? 'var(--aiesec-blue)' : 'var(--text-sub)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Chapters Area */}
      <section style={{ padding: '40px 0 70px' }}>
        <div className="container" style={{ maxWidth: 960 }}>
          
          {/* Status and Expand Helpers */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            flexWrap: 'wrap',
            gap: 12
          }}>
            <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              Нийт <strong style={{ color: 'var(--text-main)' }}>{filteredChapters.length}</strong> бүлэг олдлоо
              {searchQuery && <span> ("<span style={{ color: 'var(--aiesec-blue)' }}>{searchQuery}</span>" хайлтаар)</span>}
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button
                onClick={() => setOpenChapterId(openChapterId ? '' : filteredChapters[0]?.id || '')}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  padding: '6px 12px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  color: 'var(--text-sub)'
                }}
              >
                {openChapterId ? 'Бүгдийг хураах' : 'Эхний бүлгийг дэлгэх'}
              </button>
              <a
                href="#calculator"
                style={{
                  background: '#EFF6FF',
                  border: '1px solid rgba(3, 126, 243, 0.3)',
                  borderRadius: 8,
                  padding: '6px 12px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--aiesec-blue)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4
                }}
              >
                <Calculator size={13} />
                <span>Төсвийн тооцоолуур руу</span>
              </a>
            </div>
          </div>

          {/* Chapters Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {filteredChapters.map(chapter => {
              const isOpen = openChapterId === chapter.id;
              const activeTab = chapterActiveTab[chapter.id] || 'details';

              return (
                <div
                  key={chapter.id}
                  id={chapter.id}
                  style={{
                    background: '#FFFFFF',
                    border: isOpen ? '2px solid var(--aiesec-blue)' : '1px solid var(--border)',
                    borderRadius: 16,
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 10px 30px rgba(3, 126, 243, 0.08)' : '0 2px 10px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {/* Chapter Accordion Bar */}
                  <div
                    onClick={() => setOpenChapterId(isOpen ? '' : chapter.id)}
                    style={{
                      padding: '22px clamp(16px, 4vw, 26px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      background: isOpen ? 'linear-gradient(90deg, #EFF6FF 0%, #FFFFFF 100%)' : '#FFFFFF'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <div style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        background: isOpen ? 'var(--aiesec-blue)' : '#F1F5F9',
                        color: isOpen ? '#FFFFFF' : 'var(--aiesec-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '1.1rem',
                        flexShrink: 0
                      }}>
                        {renderChapterIcon(chapter.icon)}
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                          <span style={{
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            padding: '2px 8px',
                            borderRadius: 12,
                            background: isOpen ? '#DBEAFE' : '#F1F5F9',
                            color: isOpen ? 'var(--aiesec-blue)' : '#64748B'
                          }}>
                            БҮЛЭГ {chapter.chapterNumber}
                          </span>
                          <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>&bull;</span>
                          <span style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600 }}>
                            {chapter.misconceptions.length} Залруулга &bull; {chapter.stepByStep.length} Алхам
                          </span>
                        </div>
                        <h3 style={{ 
                          fontSize: 'clamp(1.1rem, 2.3vw, 1.3rem)', 
                          fontWeight: 800,
                          color: isOpen ? 'var(--aiesec-blue)' : '#0F172A',
                          margin: 0
                        }}>
                          {chapter.title}
                        </h3>
                        <p style={{ 
                          fontSize: '0.88rem', 
                          color: 'var(--text-muted)', 
                          marginTop: 4, 
                          marginBottom: 0,
                          lineHeight: 1.4
                        }}>
                          {chapter.subtitle}
                        </p>
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: isOpen ? '#DBEAFE' : '#F8FAFC',
                      flexShrink: 0,
                      marginLeft: 12
                    }}>
                      {isOpen ? <ChevronUp size={20} color="var(--aiesec-blue)" /> : <ChevronDown size={20} color="#64748B Gamboge" />}
                    </div>
                  </div>

                  {/* Chapter Expanded Body */}
                  {isOpen && (
                    <div style={{ borderTop: '1px solid var(--border)' }}>
                      
                      {/* Summary callout */}
                      <div style={{
                        padding: '16px 24px',
                        background: '#F8FAFC',
                        borderBottom: '1px solid var(--border)',
                        fontSize: '0.94rem',
                        lineHeight: 1.65,
                        color: '#334155'
                      }}>
                        {chapter.summary}
                      </div>

                      {/* Alumni Personal Note / Pro-Tip Callout */}
                      {chapter.alumniNote && (
                        <div style={{
                          margin: '20px 24px 16px',
                          padding: '16px 20px',
                          background: 'linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%)',
                          border: '1.5px solid #FCD34D',
                          borderRadius: 12,
                          display: 'flex',
                          gap: 14,
                          alignItems: 'flex-start'
                        }}>
                          <div style={{
                            background: '#F59E0B',
                            color: '#FFFFFF',
                            width: 34,
                            height: 34,
                            borderRadius: 8,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: 2
                          }}>
                            <Sparkles size={18} />
                          </div>
                          <div>
                            <div style={{
                              fontSize: '0.82rem',
                              fontWeight: 800,
                              color: '#92400E',
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                              marginBottom: 4
                            }}>
                              Төгсөгчийн Бодит Зөвлөгөө &bull; Alumni Insider Hack
                            </div>
                            <p style={{
                              fontSize: '0.92rem',
                              color: '#78350F',
                              lineHeight: 1.6,
                              margin: 0,
                              fontStyle: 'italic'
                            }}>
                              "{chapter.alumniNote}"
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Chapter Quick Takeaways */}
                      <div style={{ padding: '0 24px 16px' }}>
                        <div style={{
                          background: '#EFF6FF',
                          borderRadius: 12,
                          padding: '14px 18px',
                          border: '1px solid #BFDBFE'
                        }}>
                          <div style={{
                            fontSize: '0.84rem',
                            fontWeight: 800,
                            color: 'var(--aiesec-blue)',
                            marginBottom: 8,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                          }}>
                            <CheckCircle2 size={16} />
                            <span>ГОЛ БОДИТ ҮНЭН &amp; ХУУЛИЙН ШААРДЛАГА:</span>
                          </div>
                          <ul style={{ margin: 0, paddingLeft: 18, color: '#1E3A8A' }}>
                            {chapter.keyTakeaways.map((point, pIdx) => (
                              <li key={pIdx} style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: 4 }}>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Sub-Navigation Tabs inside Chapter */}
                      <div style={{
                        display: 'flex',
                        gap: 8,
                        padding: '0 24px 16px',
                        borderBottom: '1px solid var(--border)',
                        overflowX: 'auto'
                      }}>
                        <button
                          onClick={() => handleTabChange(chapter.id, 'details')}
                          style={{
                            padding: '8px 16px',
                            borderRadius: 10,
                            fontSize: '0.84rem',
                            fontWeight: 700,
                            border: activeTab === 'details' ? '1.5px solid var(--aiesec-blue)' : '1px solid var(--border)',
                            background: activeTab === 'details' ? 'var(--aiesec-blue)' : '#FFFFFF',
                            color: activeTab === 'details' ? '#FFFFFF' : 'var(--text-sub)',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <BookOpen size={14} />
                          <span>Дэлгэрэнгүй Заавар ({chapter.detailedSections.length})</span>
                        </button>

                        <button
                          onClick={() => handleTabChange(chapter.id, 'misconceptions')}
                          style={{
                            padding: '8px 16px',
                            borderRadius: 10,
                            fontSize: '0.84rem',
                            fontWeight: 700,
                            border: activeTab === 'misconceptions' ? '1.5px solid #EF4444' : '1px solid var(--border)',
                            background: activeTab === 'misconceptions' ? '#EF4444' : '#FFFFFF',
                            color: activeTab === 'misconceptions' ? '#FFFFFF' : 'var(--text-sub)',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <HelpCircle size={14} />
                          <span>Ташаа Ойлголт vs Үнэн ({chapter.misconceptions.length})</span>
                        </button>

                        <button
                          onClick={() => handleTabChange(chapter.id, 'steps')}
                          style={{
                            padding: '8px 16px',
                            borderRadius: 10,
                            fontSize: '0.84rem',
                            fontWeight: 700,
                            border: activeTab === 'steps' ? '1.5px solid #10B981' : '1px solid var(--border)',
                            background: activeTab === 'steps' ? '#10B981' : '#FFFFFF',
                            color: activeTab === 'steps' ? '#FFFFFF' : 'var(--text-sub)',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <Clock size={14} />
                          <span>Алхам Дараалал ({chapter.stepByStep.length})</span>
                        </button>

                        <button
                          onClick={() => handleTabChange(chapter.id, 'checklist')}
                          style={{
                            padding: '8px 16px',
                            borderRadius: 10,
                            fontSize: '0.84rem',
                            fontWeight: 700,
                            border: activeTab === 'checklist' ? '1.5px solid #8B5CF6' : '1px solid var(--border)',
                            background: activeTab === 'checklist' ? '#8B5CF6' : '#FFFFFF',
                            color: activeTab === 'checklist' ? '#FFFFFF' : 'var(--text-sub)',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <ListChecks size={14} />
                          <span>Чеклист ({chapter.checklists.length})</span>
                        </button>
                      </div>

                      {/* TAB 1: DETAILED SECTIONS */}
                      {activeTab === 'details' && (
                        <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                          {chapter.detailedSections.map((sec, sIdx) => (
                            <div
                              key={sIdx}
                              style={{
                                background: '#F8FAFC',
                                border: '1px solid var(--border)',
                                borderRadius: 12,
                                padding: '20px 22px'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
                                {sec.badge && (
                                  <span style={{
                                    fontSize: '0.72rem',
                                    fontWeight: 800,
                                    padding: '2px 8px',
                                    borderRadius: 6,
                                    background: '#0F172A',
                                    color: '#FFFFFF',
                                    letterSpacing: '0.04em'
                                  }}>
                                    {sec.badge}
                                  </span>
                                )}
                                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                                  {sec.title}
                                </h4>
                              </div>

                              {sec.paragraphs.map((p, pIdx) => (
                                <p key={pIdx} style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#334155', marginBottom: 10 }}>
                                  {p}
                                </p>
                              ))}

                              {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                                <ul style={{ paddingLeft: 20, color: '#475569', marginBottom: 12 }}>
                                  {sec.bulletPoints.map((bp, bpIdx) => (
                                    <li key={bpIdx} style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 6 }}>
                                      {bp}
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {sec.alertBox && (
                                <div style={{
                                  marginTop: 14,
                                  padding: '12px 16px',
                                  borderRadius: 8,
                                  background: sec.alertBox.type === 'warning' ? '#FEF2F2' : sec.alertBox.type === 'success' ? '#ECFDF5' : '#EFF6FF',
                                  border: `1px solid ${sec.alertBox.type === 'warning' ? '#F87171' : sec.alertBox.type === 'success' ? '#34D399' : '#60A5FA'}`,
                                  display: 'flex',
                                  gap: 10,
                                  alignItems: 'flex-start'
                                }}>
                                  {sec.alertBox.type === 'warning' ? (
                                    <AlertTriangle size={18} color="#DC2626" style={{ flexShrink: 0, marginTop: 2 }} />
                                  ) : (
                                    <Info size={18} color="#2563EB" style={{ flexShrink: 0, marginTop: 2 }} />
                                  )}
                                  <div>
                                    <div style={{
                                      fontSize: '0.84rem',
                                      fontWeight: 800,
                                      color: sec.alertBox.type === 'warning' ? '#991B1B' : '#1E40AF',
                                      marginBottom: 2
                                    }}>
                                      {sec.alertBox.title}
                                    </div>
                                    <div style={{
                                      fontSize: '0.86rem',
                                      color: sec.alertBox.type === 'warning' ? '#7F1D1D' : '#1E3A8A',
                                      lineHeight: 1.5
                                    }}>
                                      {sec.alertBox.text}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* TAB 2: MISCONCEPTIONS DEBUNKED */}
                      {activeTab === 'misconceptions' && (
                        <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                          <div style={{
                            padding: '12px 16px',
                            background: '#FEF2F2',
                            borderRadius: 8,
                            border: '1px solid #FECACA',
                            fontSize: '0.88rem',
                            color: '#991B1B',
                            fontWeight: 600
                          }}>
                            💡 Оюутнуудын дунд амнаас ам дамжин тардаг ташаа ойлголтууд болон түүний хууль зүйн бодит үнэн:
                          </div>

                          {chapter.misconceptions.map((item, mIdx) => (
                            <div
                              key={mIdx}
                              style={{
                                background: '#FFFFFF',
                                border: '1.5px solid #F1F5F9',
                                borderRadius: 12,
                                padding: 18,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                              }}
                            >
                              {/* The Myth */}
                              <div style={{
                                display: 'flex',
                                gap: 10,
                                alignItems: 'flex-start',
                                marginBottom: 12,
                                padding: '10px 14px',
                                background: '#FEF2F2',
                                borderRadius: 8,
                                borderLeft: '4px solid #EF4444'
                              }}>
                                <div style={{ color: '#DC2626', fontWeight: 900, fontSize: '0.84rem', flexShrink: 0 }}>
                                  ❌ ТАШАА ОЙЛГОЛТ:
                                </div>
                                <div style={{ fontSize: '0.9rem', color: '#991B1B', fontWeight: 600, lineHeight: 1.5 }}>
                                  "{item.myth}"
                                </div>
                              </div>

                              {/* The Reality */}
                              <div style={{
                                display: 'flex',
                                gap: 10,
                                alignItems: 'flex-start',
                                marginBottom: 12,
                                padding: '10px 14px',
                                background: '#F0FDF4',
                                borderRadius: 8,
                                borderLeft: '4px solid #10B981'
                              }}>
                                <div style={{ color: '#059669', fontWeight: 900, fontSize: '0.84rem', flexShrink: 0 }}>
                                  ✅ БОДИТ ҮНЭН:
                                </div>
                                <div style={{ fontSize: '0.9rem', color: '#065F46', lineHeight: 1.6 }}>
                                  {item.reality}
                                </div>
                              </div>

                              {/* Alumni Advice */}
                              <div style={{
                                padding: '10px 14px',
                                background: '#F8FAFC',
                                borderRadius: 8,
                                border: '1px solid #E2E8F0',
                                fontSize: '0.88rem',
                                color: '#334155',
                                lineHeight: 1.6
                              }}>
                                <strong style={{ color: 'var(--aiesec-blue)' }}>Төгсөгчийн зөвлөгөө: </strong>
                                {item.advice}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* TAB 3: STEP BY STEP */}
                      {activeTab === 'steps' && (
                        <div style={{ padding: '20px 24px' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {chapter.stepByStep.map((st, sIdx) => (
                              <div
                                key={sIdx}
                                style={{
                                  display: 'flex',
                                  gap: 16,
                                  background: '#FFFFFF',
                                  border: '1px solid #E2E8F0',
                                  borderRadius: 12,
                                  padding: 16,
                                  position: 'relative'
                                }}
                              >
                                <div style={{
                                  width: 36,
                                  height: 36,
                                  borderRadius: '50%',
                                  background: '#10B981',
                                  color: '#FFFFFF',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontWeight: 900,
                                  fontSize: '0.95rem',
                                  flexShrink: 0
                                }}>
                                  {st.stepNumber}
                                </div>

                                <div style={{ flex: 1 }}>
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6, marginBottom: 6 }}>
                                    <h5 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                                      {st.title}
                                    </h5>
                                    {st.timing && (
                                      <span style={{
                                        fontSize: '0.74rem',
                                        fontWeight: 700,
                                        padding: '2px 8px',
                                        borderRadius: 12,
                                        background: '#F1F5F9',
                                        color: '#475569'
                                      }}>
                                        ⏱️ {st.timing}
                                      </span>
                                    )}
                                  </div>

                                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                                    {st.description}
                                  </p>

                                  {st.importantNote && (
                                    <div style={{
                                      marginTop: 8,
                                      padding: '6px 12px',
                                      background: '#FFFBEB',
                                      borderLeft: '3px solid #F59E0B',
                                      borderRadius: 4,
                                      fontSize: '0.84rem',
                                      color: '#92400E'
                                    }}>
                                      <strong>Санамж:</strong> {st.importantNote}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* TAB 4: CHECKLIST */}
                      {activeTab === 'checklist' && (
                        <div style={{ padding: '20px 24px' }}>
                          <div style={{
                            padding: '12px 16px',
                            background: '#F5F3FF',
                            borderRadius: 8,
                            border: '1px solid #DDD6FE',
                            marginBottom: 16,
                            fontSize: '0.86rem',
                            color: '#5B21B6',
                            fontWeight: 600
                          }}>
                            Та бэлтгэсэн баримтуудаа доорх чеклист дээр дарж тэмдэглээд өөрийн бэлтгэлээ хянаарай:
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {chapter.checklists.map((chk, cIdx) => {
                              const checkKey = `${chapter.id}-chk-${cIdx}`;
                              const isChecked = !!checkedChecklist[checkKey];

                              return (
                                <div
                                  key={cIdx}
                                  onClick={() => toggleChecklistItem(checkKey)}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 12,
                                    padding: '12px 16px',
                                    borderRadius: 10,
                                    border: `1.5px solid ${isChecked ? '#8B5CF6' : '#E2E8F0'}`,
                                    background: isChecked ? '#FAF5FF' : '#FFFFFF',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s ease'
                                  }}
                                >
                                  <div style={{ marginTop: 2, color: isChecked ? '#8B5CF6' : '#94A3B8' }}>
                                    {isChecked ? <CheckSquare size={18} /> : <Square size={18} />}
                                  </div>

                                  <div style={{ flex: 1 }}>
                                    <div style={{
                                      fontSize: '0.92rem',
                                      fontWeight: 700,
                                      color: isChecked ? '#5B21B6' : '#1E293B',
                                      textDecoration: isChecked ? 'line-through' : 'none'
                                    }}>
                                      {chk.label}
                                      {chk.required && (
                                        <span style={{ color: '#EF4444', marginLeft: 6, fontSize: '0.75rem', fontWeight: 800 }}>
                                          (Заавал)
                                        </span>
                                      )}
                                    </div>
                                    <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: 2 }}>
                                      {chk.details}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Official Links Footer */}
                      {chapter.officialLinks.length > 0 && (
                        <div style={{
                          padding: '16px 24px',
                          background: '#F8FAFC',
                          borderTop: '1px solid var(--border)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          flexWrap: 'wrap'
                        }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748B' }}>
                            Албан ёсны эх сурвалж:
                          </span>
                          {chapter.officialLinks.map((link, lIdx) => (
                            <a
                              key={lIdx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                padding: '6px 14px',
                                borderRadius: 20,
                                background: '#FFFFFF',
                                border: '1px solid #CBD5E1',
                                fontSize: '0.82rem',
                                fontWeight: 600,
                                color: 'var(--aiesec-blue)',
                                textDecoration: 'none'
                              }}
                            >
                              <span>{link.label}</span>
                              <ExternalLink size={12} />
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
      <section style={{ padding: '70px 0', background: '#FFFFFF', borderTop: '1px solid var(--border)' }} id="calculator">
        <div className="container" style={{ maxWidth: 880 }}>
          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid var(--border)',
            borderRadius: 24,
            padding: 'clamp(22px, 5vw, 40px)',
            boxShadow: '0 12px 40px rgba(0, 45, 98, 0.06)'
          }}>
            <div className="text-center" style={{ marginBottom: 32 }}>
              <span className="section-subtitle">2026 АМЬЖИРГААНЫ ТООЦООЛУУР &bull; LIVE BUDGET</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', fontWeight: 800 }}>Оюутны Сарын Төсвийн Тооцоолуур</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: 620, margin: '0 auto' }}>
                Та дотуур байрны үнэ, хоол, даатгал болон 20 цагийн ажлын орлогоо тохируулан сар бүрийн санхүүгийн тэнцлээ тооцоолоорой.
              </p>
            </div>

            <div
              className="budget-calc-grid"
              style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 32, alignItems: 'center' }}
            >
              <div>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>🏠 Дотуур Байр / Түрээс:</span>
                    <span style={{ color: 'var(--aiesec-blue)' }}>€{dormPrice} / сар</span>
                  </div>
                  <input
                    type="range"
                    min={300}
                    max={800}
                    step={10}
                    value={dormPrice}
                    onChange={(e) => setDormPrice(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--aiesec-blue)' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#94A3B8' }}>
                    <span>€300 (WIHAST)</span>
                    <span>€550 (STUWO/Base19)</span>
                    <span>€800 (Хувийн)</span>
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>🍲 Хоол &amp; Хүнс (Hofer/Lidl):</span>
                    <span style={{ color: 'var(--aiesec-blue)' }}>€{foodPrice} / сар</span>
                  </div>
                  <input
                    type="range"
                    min={150}
                    max={500}
                    step={10}
                    value={foodPrice}
                    onChange={(e) => setFoodPrice(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--aiesec-blue)' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#94A3B8' }}>
                    <span>€150 (Хэмнэлттэй)</span>
                    <span>€260 (Дундаж)</span>
                    <span>€500 (Ресторан)</span>
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>🩺 Эрүүл Мэндийн Даатгал (ÖGK):</span>
                    <span style={{ color: 'var(--aiesec-blue)' }}>€{insurancePrice} / сар</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={120}
                    step={1}
                    value={insurancePrice}
                    onChange={(e) => setInsurancePrice(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--aiesec-blue)' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#94A3B8' }}>
                    <span>€0 (Ажил олгогч төлбөл)</span>
                    <span>€78.84 (Оюутны албан тариф)</span>
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.9rem', fontWeight: 700 }}>
                    <span>📱 Утас, Тээвэр &amp; Бусад:</span>
                    <span style={{ color: 'var(--aiesec-blue)' }}>€{otherPrice} / сар</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={300}
                    step={10}
                    value={otherPrice}
                    onChange={(e) => setOtherPrice(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--aiesec-blue)' }}
                  />
                </div>

                <div style={{ marginBottom: 8, paddingTop: 8, borderTop: '1px dashed var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.92rem', fontWeight: 800 }}>
                    <span>💼 20 Цагийн Ажлын Сар бүрийн Орлого:</span>
                    <span style={{ color: '#059669' }}>+€{workIncome} / сар</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1600}
                    step={25}
                    value={workIncome}
                    onChange={(e) => setWorkIncome(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#059669' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#94A3B8' }}>
                    <span>€0 (Зөвхөн сурах)</span>
                    <span>€551.10 (Geringfügig)</span>
                    <span>€1,100 (Teilzeit 20h)</span>
                  </div>
                </div>
              </div>

              {/* Result Summary Box */}
              <div style={{
                background: 'linear-gradient(135deg, #0A192F 0%, #002D62 100%)',
                color: '#FFFFFF',
                borderRadius: 20,
                padding: '30px 24px',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(0, 45, 98, 0.2)'
              }}>
                <div style={{ fontSize: '0.8rem', color: '#93C5FD', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                  САРЫН БОДИТ ЗАРДАЛ
                </div>
                <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#FFFFFF', marginBottom: 18 }}>
                  €{totalExpense}
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 16 }}>
                  <div style={{ fontSize: '0.8rem', color: '#93C5FD', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                    ЦЭВЭР ТЭНЦЭЛ (Орлого - Зардал)
                  </div>
                  <div style={{
                    fontSize: '1.9rem',
                    fontWeight: 900,
                    color: netBalance >= 0 ? '#34D399' : '#F87171'
                  }}>
                    {netBalance >= 0 ? `+€${netBalance}` : `-€${Math.abs(netBalance)}`}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginTop: 8, marginBottom: 0 }}>
                    {netBalance >= 0 
                      ? '🎉 Та 20 цаг ажилласнаар амьжиргааны зардлаа бүрэн нөхөж, сар бүр хуримтлуулах боломжтой!' 
                      : '⚠️ Сар бүрийн зөрүүг нөхөхийн тулд хадгаламж эсвэл гэр бүлийн санхүүгийн дэмжлэг хэрэгтэй.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Call to Action */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)' }}>
        <div className="container text-center" style={{ maxWidth: 700 }}>
          <div style={{
            width: 54,
            height: 54,
            borderRadius: '50%',
            background: 'var(--aiesec-blue)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <Users size={26} />
          </div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 12 }}>
            Австри дахь Монгол Оюутнуудын Том Гэр Бүл
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 24 }}>
            Австрид ирэхэд эсвэл суралцах явцад ойлгомжгүй зүйл гарвал ганцаараа бүү түгшээрэй. 
            AMOX-ийн үе үеийн төгсөгчид болон оюутнууд фэйсбүүк групп болон цахим сувгуудаар өдөр бүр харилцан бие биедээ тусалдаг.
          </p>
          <a
            href="https://www.facebook.com/groups/AmoxAustriaGroup"
            target="_blank"
            rel="noopener noreferrer"
            className="aiesec-btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 28px',
              borderRadius: 30,
              fontWeight: 800,
              fontSize: '0.95rem',
              textDecoration: 'none'
            }}
          >
            <span>AMOX Оюутны Бүлгэмд Нэгдэх</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};
