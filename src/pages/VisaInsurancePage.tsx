import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Copy, 
  Check, 
  FileText, 
  Send, 
  Calendar, 
  AlertCircle, 
  Building2, 
  Phone, 
  Mail, 
  ExternalLink, 
  CheckSquare, 
  Square, 
  Coins, 
  GraduationCap, 
  MapPin,
  Clock,
  HeartPulse
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const VisaInsurancePage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'requirements' | 'checklist' | 'email' | 'insurance'>('requirements');

  // Checklist state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    passport: true,
    photo: true,
    meldezettel: true,
    housing: false,
    insurance: false,
    enrollment: false,
    ects: false,
    bankStatement: false
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Email generator state
  const [studentName, setStudentName] = useState('Bat-Erdene T.');
  const [dob, setDob] = useState('2003-05-14');
  const [visaExpiryDate, setVisaExpiryDate] = useState('2026-10-31');
  const [university, setUniversity] = useState('Universität Wien');
  const [referenceNumber, setReferenceNumber] = useState('MA35-1234567');

  const germanEmailText = `Sehr geehrte Damen und Herren,

mein Name ist ${studentName || '[Таны Нэр]'}, geboren am ${dob || '[Төрсөн огноо]'}. 
Ich studiere derzeit an der ${university} und besitze eine Aufenthaltsbewilligung "Student" (GZ / Referenznummer: ${referenceNumber || 'MA35-XXXXXXX'}).

Mein aktueller Aufenthaltstitel ist gültig bis zum ${visaExpiryDate || '[Визний хугацаа]'}.
Hiermit möchte ich höflich um einen Termin zur Verlängerung meiner Aufenthaltsbewilligung bzw. zur Abgabe meiner vollständigen Unterlagen ersuchen.

Alle erforderlichen Unterlagen (Studienbestätigung, Studienerfolgsnachweis von 16 ECTS, Meldezettel, Mietvertrag und Kontoauszug) liegen vollständig vor.

Ich bedanke mich im Voraus für Ihre Unterstützung und freue mich auf Ihre Rückmeldung.

Mit freundlichen Grüßen,
${studentName || '[Таны Нэр]'}
E-Mail: [Таны И-мэйл]
Telefon: [Таны Утасны дугаар]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(germanEmailText);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const checklistItems = [
    { id: 'passport', title: 'Хүчинтэй гадаад паспорт (Reisepass)', desc: 'Хүчинтэй хугацаа нь хамгийн багадаа 1-2 жил байх ёстой.' },
    { id: 'photo', title: 'EU стандартын цээж зураг (Passfoto)', desc: '3.5 x 4.5 см хэмжээтэй, цайвар дэвсгэртэй, сүүлийн 6 сард авхуулсан зураг.' },
    { id: 'meldezettel', title: 'Хаягийн бүртгэлийн хуудас (Meldezettel)', desc: 'Одоогийн оршин суугаа хаягийн албан ёсны баталгаа.' },
    { id: 'housing', title: 'Байрны гэрээ (Mietvertrag / Wohnrechtsvereinbarung)', desc: 'Оюутны дотуур байр эсвэл түрээсийн гэрээ.' },
    { id: 'insurance', title: 'ÖGK Эрүүл мэндийн даатгал (Versicherungsbestätigung)', desc: 'Оюутны Selbstversicherung (€78.84/сар, 2026 оны албан ёсны тариф).' },
    { id: 'enrollment', title: 'Сургуулийн бүртгэлийн хуудас (Studienblatt & Studienbestätigung)', desc: 'Тухайн семестрт идэвхтэй бүртгэлтэйг батлах баримт.' },
    { id: 'ects', title: 'Сургалтын амжилтын тодорхойлолт (Studienerfolgsnachweis)', desc: 'Жилд хамгийн багадаа 16 ECTS кредит эсвэл 8 SWS цуглуулсан тодорхойлолт.' },
    { id: 'bankStatement', title: 'Банкны тодорхойлолт & Хуулга (Kontoauszug)', desc: 'Австрийн банкны сүүлийн 3 сарын хуулга + орлогын хууль ёсны эх үүсвэр.' }
  ];

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / checklistItems.length) * 100);

  return (
    <div className="visa-insurance-page" style={{ paddingTop: 80, minHeight: '100vh', background: '#F8FAFC' }}>
      {/* Header */}
      <section style={{
        padding: '50px 0 35px',
        background: 'linear-gradient(135deg, #0A192F 0%, #003E9E 60%, #037EF3 100%)',
        color: '#FFFFFF'
      }}>
        <div className="container text-center">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.25)',
            padding: '4px 14px',
            borderRadius: 20,
            fontSize: '0.78rem',
            fontWeight: 800,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: 14
          }}>
            <ShieldCheck size={14} />
            <span>2026 Хууль Дүрэм &bull; Aufenthaltsbewilligung Student &bull; § 64 NAG</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 2.9rem)',
            fontWeight: 900,
            marginBottom: 12,
            color: '#FFFFFF'
          }}>
            MA35 Оюутны Виз &amp; Даатгалын Төв
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 720,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Австрийн оршин суух зөвшөөрөл (Aufenthaltsbewilligung - Student) сунгах албан ёсны санхүүгийн шаардлага (2026 Richtsatz), бичиг баримтын чеклист, ÖGK даатгал ба MA35 өргөдөл үүсгэгч.
          </p>

          {/* Navigation Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('requirements')}
              style={{
                padding: '8px 18px',
                borderRadius: 24,
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: activeTab === 'requirements' ? '1.5px solid #FFFFFF' : '1px solid rgba(255,255,255,0.2)',
                background: activeTab === 'requirements' ? '#FFFFFF' : 'rgba(255,255,255,0.1)',
                color: activeTab === 'requirements' ? 'var(--aiesec-blue)' : '#FFFFFF',
                transition: 'var(--transition)'
              }}
            >
              💶 Санхүүгийн Шаардлага (2026)
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              style={{
                padding: '8px 18px',
                borderRadius: 24,
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: activeTab === 'checklist' ? '1.5px solid #FFFFFF' : '1px solid rgba(255,255,255,0.2)',
                background: activeTab === 'checklist' ? '#FFFFFF' : 'rgba(255,255,255,0.1)',
                color: activeTab === 'checklist' ? 'var(--aiesec-blue)' : '#FFFFFF',
                transition: 'var(--transition)'
              }}
            >
              📋 Бичиг Баримтын Чеклист ({completedCount}/8)
            </button>
            <button
              onClick={() => setActiveTab('email')}
              style={{
                padding: '8px 18px',
                borderRadius: 24,
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: activeTab === 'email' ? '1.5px solid #FFFFFF' : '1px solid rgba(255,255,255,0.2)',
                background: activeTab === 'email' ? '#FFFFFF' : 'rgba(255,255,255,0.1)',
                color: activeTab === 'email' ? 'var(--aiesec-blue)' : '#FFFFFF',
                transition: 'var(--transition)'
              }}
            >
              ✉️ MA35 И-мэйл Бэлтгэгч
            </button>
            <button
              onClick={() => setActiveTab('insurance')}
              style={{
                padding: '8px 18px',
                borderRadius: 24,
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: activeTab === 'insurance' ? '1.5px solid #FFFFFF' : '1px solid rgba(255,255,255,0.2)',
                background: activeTab === 'insurance' ? '#FFFFFF' : 'rgba(255,255,255,0.1)',
                color: activeTab === 'insurance' ? 'var(--aiesec-blue)' : '#FFFFFF',
                transition: 'var(--transition)'
              }}
            >
              🩺 ÖGK Даатгал &amp; E-Card
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ padding: '40px 16px 80px', maxWidth: 1040 }}>

        {/* TAB 1: FINANCIAL & ACADEMIC REQUIREMENTS */}
        {activeTab === 'requirements' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span className="section-subtitle">AUSTRIA LEGAL NORMS &bull; § 293 ASVG &bull; § 64 NAG</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text-main)' }}>
                2026 Оны Санхүүгийн &amp; Кредитийн Албан Ёсны Шаардлага
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: 640, margin: '0 auto' }}>
                Австри улсын хууль тогтоомжийн дагуу гадаад оюутан оршин суух зөвшөөрөл авах, сунгахад дараах доод хэмжээний санхүүг банкны дансандаа нотлох үүрэгтэй.
              </p>
            </div>

            {/* 3 Metric Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 20,
              marginBottom: 32
            }}>
              {/* Card 1: Under 24 */}
              <div style={{
                background: '#FFFFFF',
                border: '1.5px solid #BFDBFE',
                borderRadius: 16,
                padding: '24px 22px',
                boxShadow: '0 4px 16px rgba(3, 126, 243, 0.06)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{
                    background: '#EFF6FF',
                    color: 'var(--aiesec-blue)',
                    padding: '3px 10px',
                    borderRadius: 20,
                    fontSize: '0.74rem',
                    fontWeight: 800
                  }}>
                    24 ХҮРТЭЛХ НАС (BIS 24 JAHRE)
                  </span>
                  <Coins size={18} color="var(--aiesec-blue)" />
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--aiesec-blue)', marginBottom: 4 }}>
                  €722.58 <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>/ сар</span>
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 8 }}>
                  Жилд: ~€8,670.96 (12 сар)
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  2026 оны хууль ёсны амьжиргааны доод баталгаа (Richtsatz). Хэрэв сарын түрээс тань €386.43-аас (freie Station) дээш бол зөрүү дүнг нэмж тооцно.
                </p>
              </div>

              {/* Card 2: 24 and older */}
              <div style={{
                background: '#FFFFFF',
                border: '1.5px solid #DDD6FE',
                borderRadius: 16,
                padding: '24px 22px',
                boxShadow: '0 4px 16px rgba(124, 58, 237, 0.06)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{
                    background: '#F5F3FF',
                    color: '#7C3AED',
                    padding: '3px 10px',
                    borderRadius: 20,
                    fontSize: '0.74rem',
                    fontWeight: 800
                  }}>
                    24 БА ТҮҮНЭЭС ДЭЭШ НАС (AB 24 JAHRE)
                  </span>
                  <Coins size={18} color="#7C3AED" />
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#7C3AED', marginBottom: 4 }}>
                  €1,308.39 <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>/ сар</span>
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 8 }}>
                  Жилд: ~€15,700.68 (12 сар)
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  24 нас хүрсэн эсвэл даваад суралцаж буй оюутнуудад хамаарах хууль ёсны доод дүн. Мөн түрээсийн €386.43-аас дээших зөрүү нэмэгдэнэ.
                </p>
              </div>

              {/* Card 3: Academic Credits */}
              <div style={{
                background: '#FFFFFF',
                border: '1.5px solid #A7F3D0',
                borderRadius: 16,
                padding: '24px 22px',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.06)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{
                    background: '#ECFDF5',
                    color: '#059669',
                    padding: '3px 10px',
                    borderRadius: 20,
                    fontSize: '0.74rem',
                    fontWeight: 800
                  }}>
                    ХИЧЭЭЛИЙН КРЕДИТ (STUDIENERFOLG)
                  </span>
                  <GraduationCap size={18} color="#059669" />
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#059669', marginBottom: 4 }}>
                  16 ECTS <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>/ хичээлийн жил</span>
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 8 }}>
                  эсвэл 8 Semesterwochenstunden (SWS)
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  Визээ сунгахын тулд өмнөх 2 семестрийн (өвөл + хавар) нийлбэр дүнгээр хамгийн багадаа 16 ECTS кредит цуглуулсан тодорхойлолтоо өгөх ёстой.
                </p>
              </div>
            </div>

            {/* Crucial Info Callouts */}
            <div style={{
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: 14,
              padding: '20px 24px',
              marginBottom: 28,
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start'
            }}>
              <AlertCircle size={22} color="var(--aiesec-blue)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#1E3A8A' }}>
                <strong>Байрны түрээсийн зөрүүг тооцох дүрэм (Freie Station €386.43):</strong><br />
                Хуулийн дагуу сарын суурь зардалд €386.43 хүртэлх байрны зардал шингэсэн гэж үздэг. Хэрэв таны дотуур байрны сарын түрээс €480 байвал сарын зөрүү €93.57-г 12 сараар үржүүлж (€1,122.84), суурь санхүүгийн баталгаан дээрээ нэмж банкны дансандаа байршуулах шаардлагатай.
              </div>
            </div>

            {/* Vienna MA35 Branch Locations */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: '26px 28px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Building2 size={18} color="var(--aiesec-blue)" />
                <span>Вена хотын MA35 Оюутны Салбар (Referat 1.2)</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, fontSize: '0.88rem', color: 'var(--text-sub)' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <MapPin size={16} color="var(--aiesec-orange)" />
                    <strong>Хаяг:</strong> Arndtstraße 65-67, 1120 Wien (12. Bezirk)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <Clock size={16} color="var(--aiesec-teal)" />
                    <strong>Нийтийн тээвэр:</strong> U4 Meidling Hauptstraße станцаас 3 минут
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Phone size={16} color="var(--aiesec-blue)" />
                    <strong>Лавлах утас:</strong> +43 1 4000 3535
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <Mail size={16} color="#059669" />
                    <strong>И-мэйл:</strong> referat-1.2@ma35.wien.gv.at
                  </div>
                  <p style={{ margin: '8px 0 0', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    💡 <em>Зөвлөмж:</em> Визний хугацаа дуусахаас хамгийн багадаа <strong>3 сарын өмнө</strong> цаг авах герман өргөдлөө илгээж баталгаажуулна уу. Хугацаа дууссаны дараа илгээвэл хууль бус оршин суугч болох эрсдэлтэй.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE CHECKLIST */}
        {activeTab === 'checklist' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <span className="section-subtitle">ИНТЕРАКТИВ ЧЕКЛИСТ &bull; VERLÄNGERUNG &amp; ERSTANTRAG</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text-main)' }}>
                MA35-д Өгөх Бичиг Баримтын Бүрэн Чеклист
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Өөрт байгаа болон бэлдсэн бичиг баримтуудаа тэмдэглэж бэлтгэлээ шалгаарай.
              </p>
            </div>

            {/* Progress Bar */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '16px 20px',
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
              flexWrap: 'wrap'
            }}>
              <div>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
                  Бэлтгэлийн явц: {completedCount} / {checklistItems.length} баримт бэлэн
                </strong>
                <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {progressPercent === 100 ? '🎉 Бүх баримт бүрэн бэлэн боллоо!' : 'Дутуу байгаа баримтуудаа эртнээс бүрдүүлээрэй.'}
                </span>
              </div>
              <div style={{ minWidth: 160, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ flex: 1, height: 10, background: '#E2E8F0', borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{
                    width: `${progressPercent}%`,
                    height: '100%',
                    background: progressPercent === 100 ? '#10B981' : 'var(--aiesec-blue)',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-main)' }}>{progressPercent}%</span>
              </div>
            </div>

            {/* Checklist items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {checklistItems.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    style={{
                      background: '#FFFFFF',
                      border: `1.5px solid ${isChecked ? 'var(--aiesec-blue)' : 'var(--border)'}`,
                      borderRadius: 12,
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 14,
                      cursor: 'pointer',
                      transition: 'var(--transition)',
                      boxShadow: isChecked ? '0 2px 8px rgba(3, 126, 243, 0.08)' : 'none'
                    }}
                  >
                    <div style={{ marginTop: 2 }}>
                      {isChecked ? (
                        <CheckSquare size={20} color="var(--aiesec-blue)" />
                      ) : (
                        <Square size={20} color="#94A3B8" />
                      )}
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: isChecked ? 'var(--text-main)' : 'var(--text-sub)',
                        textDecoration: isChecked ? 'none' : 'none',
                        marginBottom: 4
                      }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download and Links */}
            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <a
                href="https://www.wien.gv.at/verwaltung/einwanderung/aufenthalt/student.html"
                target="_blank"
                rel="noopener noreferrer"
                className="aiesec-btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 22px', fontSize: '0.88rem' }}
              >
                <span>Вена хотын албан ёсны MA35 өргөдлийн маягт татах</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}

        {/* TAB 3: GERMAN EMAIL GENERATOR */}
        {activeTab === 'email' && (
          <div>
            <div style={{
              background: '#FFFFFF',
              border: '1.5px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(22px, 5vw, 40px)',
              boxShadow: 'var(--shadow-modal)'
            }}>
              <div className="text-center" style={{ marginBottom: 28 }}>
                <span className="section-subtitle">ИНТЕРАКТИВ ХЭРЭГСЭЛ &bull; 1-CLICK EMAIL</span>
                <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800 }}>MA35 Герман И-мэйл Бэлтгэгч</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  Та өөрийн мэдээллээ оруулснаар албан ёсны герман хэл дээрх өргөдөл шууд бэлэн болж хуулагдана.
                </p>
              </div>

              <div
                className="visa-gen-grid"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, alignItems: 'flex-start' }}
              >
                {/* Input Controls */}
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: 16, color: 'var(--aiesec-blue)', fontWeight: 800 }}>1. Өөрийн Мэдээллээ Оруулах</h4>

                  <div style={{ marginBottom: 14 }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Овог Нэр (Паспорт дээрх латинаар)</label>
                    <input
                      type="text"
                      className="form-input"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Төрсөн Огноо</label>
                      <input
                        type="date"
                        className="form-input"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Виз Дуусах Огноо</label>
                      <input
                        type="date"
                        className="form-input"
                        value={visaExpiryDate}
                        onChange={(e) => setVisaExpiryDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: 14 }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Их Сургууль</label>
                    <select
                      className="form-select"
                      value={university}
                      onChange={(e) => setUniversity(e.target.value)}
                    >
                      <option value="Universität Wien">Universität Wien (Uni Wien)</option>
                      <option value="Technische Universität Wien">TU Wien</option>
                      <option value="Wirtschaftsuniversität Wien">WU Wien</option>
                      <option value="Medizinische Universität Wien">MedUni Wien</option>
                      <option value="Universität für Bodenkultur Wien">BOKU Wien</option>
                      <option value="Johannes Kepler Universität Linz">JKU Linz</option>
                      <option value="Universität Graz">Uni Graz</option>
                      <option value="TU Graz">TU Graz</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: 18 }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>MA35 Картын Дугаар (GZ / Referenznummer)</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Жишээ: MA35-1234567"
                      value={referenceNumber}
                      onChange={(e) => setReferenceNumber(e.target.value)}
                    />
                  </div>
                </div>

                {/* Live Preview Box */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--aiesec-blue)', fontWeight: 800 }}>2. Бэлэн Герман И-мэйл Текст</h4>
                    <button
                      onClick={handleCopy}
                      className="aiesec-btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', fontSize: '0.85rem' }}
                    >
                      {copied ? <Check size={15} /> : <Copy size={15} />}
                      <span>{copied ? 'Хуулагдлаа!' : 'И-мэйл хуулах'}</span>
                    </button>
                  </div>

                  <div style={{
                    background: '#0F172A',
                    color: '#F8FAFC',
                    borderRadius: 'var(--radius-md)',
                    padding: 20,
                    fontSize: '0.86rem',
                    lineHeight: 1.6,
                    fontFamily: 'monospace',
                    whiteSpace: 'pre-wrap',
                    maxHeight: 380,
                    overflowY: 'auto',
                    border: '1px solid var(--border)'
                  }}>
                    {germanEmailText}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ÖGK INSURANCE & E-CARD */}
        {activeTab === 'insurance' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span className="section-subtitle">ÖSTERREICHISCHE GESUNDHEITSKASSE &bull; 2026</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text-main)' }}>
                ÖGK Оюутны Эрүүл Мэндийн Хөнгөлөлттэй Даатгал
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: 660, margin: '0 auto' }}>
                Австрийн бүх гадаад оюутнуудад зориулсан хөнгөлөлттэй даатгал (Selbstversicherung für Studierende) ба E-Card авах заавар.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 24,
              marginBottom: 32
            }}>
              {/* Box 1: Tariffs & Coverage */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: '26px 24px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <HeartPulse size={22} color="var(--aiesec-teal)" />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>2026 Оны Сарын Тариф</h3>
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--aiesec-teal)', marginBottom: 6 }}>
                  €78.84 <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>/ сар</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 14 }}>
                  (Энгийн насанд хүрэгчдийн даатгал сард ~€490 байдаг бол оюутнуудад төрөөс татаас олгож ердөө €78.84 болгодог; 2025 онд €73.48 байсан).
                </p>
                <ul style={{ paddingLeft: 18, fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.8 }}>
                  <li>Бүх улсын болон гэрээт эмч нар дээр үнэгүй үзлэг</li>
                  <li>Эмнэлэгт хэвтэх, мэс засал, яаралтай тусламж 100% даатгагдана</li>
                  <li>Эмийн жор (Rezeptgebühr: €7.10 хураамжтай)</li>
                </ul>
              </div>

              {/* Box 2: E-Card Photo Registration */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: '26px 24px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <FileText size={22} color="var(--aiesec-blue)" />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>E-Card Цээж Зураг Бүртгүүлэх</h3>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', lineHeight: 1.6, marginBottom: 14 }}>
                  Австрийн хуулиар 14-өөс дээш насны бүх даатгуулагчийн E-Card дээр зураг суусан байх шаардлагатай. Австрийн паспортгүй гадаад оюутнууд:
                </p>
                <ol style={{ paddingLeft: 18, fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.8 }}>
                  <li>Цагдаагийн газрын E-Card бүртгэлийн цэгт (LPD Registrierungsstelle) цаг авна</li>
                  <li>Гадаад паспорт, одоогийн цээж зураг, Meldezettel-тэйгээ биечлэн очно</li>
                  <li>Бүртгүүлсний дараа шинэ E-Card шуудангаар гэрийн хаягаар хүргэгдэнэ</li>
                </ol>
              </div>
            </div>

            {/* Useful Links */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a
                href="https://www.gesundheitskasse.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="aiesec-btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 22px', fontSize: '0.88rem' }}
              >
                <span>ÖGK Албан Ёсны Цахим Хуудас</span>
                <ExternalLink size={14} />
              </a>
              <a
                href="https://www.chipkarte.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="aiesec-btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 22px', fontSize: '0.88rem' }}
              >
                <span>E-Card Зураг Бүртгэлийн Цаг Захиалах</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
