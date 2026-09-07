import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Building2, 
  Mail, 
  Globe, 
  FileText, 
  Scale, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  ArrowLeft,
  Info
} from 'lucide-react';

export const ImpressumPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'de' | 'mn'>('de');

  const copyZvr = () => {
    navigator.clipboard.writeText('107178700');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="impressum-page" style={{ paddingTop: 90, minHeight: '100vh', background: '#F8FAFC' }}>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0A192F 0%, #003E9E 60%, #037EF3 100%)',
        color: '#FFFFFF',
        padding: '50px 0 45px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle geometric background decoration */}
        <div style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: 16,
              transition: 'var(--transition)'
            }}
          >
            <ArrowLeft size={16} />
            <span>Нүүр хуудас руу буцах</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#FFFFFF',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: 20,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6
            }}>
              <Scale size={13} />
              Rechtliche Hinweise & Impressum
            </span>
            <span style={{
              background: 'rgba(0, 193, 178, 0.25)',
              color: '#7ef0e8',
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: 20
            }}>
              Österreichisches Vereinsgesetz
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: 10,
            color: '#FFFFFF'
          }}>
            Impressum &amp; Offenlegung
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 720,
            lineHeight: 1.5
          }}>
            Informationspflicht laut § 5 E-Commerce-Gesetz (ECG), § 14 Unternehmensgesetzbuch (UGB),
            § 25 Mediengesetz und Offenlegungspflicht gemäß § 24 Vereinsgesetz (VerG).
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ padding: '36px 16px 60px' }}>
        
        {/* Quick Highlight Card with ZVR */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: 16,
          border: '1px solid var(--border)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
          padding: '24px 28px',
          marginBottom: 32,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.5px', marginBottom: 4 }}>
              Offizieller Vereinsname
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: 6 }}>
              Verein der mongolischen Studenten in Österreich - &quot;AMOX&quot;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(3, 126, 243, 0.08)',
                color: 'var(--aiesec-blue)',
                padding: '6px 14px',
                borderRadius: 8,
                fontSize: '0.95rem',
                fontWeight: 800
              }}>
                <ShieldCheck size={16} />
                <span>ZVR-Zahl: 107178700</span>
              </div>

              <button
                onClick={copyZvr}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: copied ? '#ECFDF5' : 'var(--bg-subtle)',
                  color: copied ? '#059669' : 'var(--text-main)',
                  border: '1px solid var(--border)',
                  padding: '6px 12px',
                  borderRadius: 8,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
                title="ZVR хуулах"
              >
                {copied ? <CheckCircle2 size={14} color="#059669" /> : <Copy size={14} />}
                <span>{copied ? 'Хуулагдлаа!' : 'ZVR хуулах'}</span>
              </button>

              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                • Eingetragener Verein (Seit 2007)
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => setActiveTab('de')}
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                border: activeTab === 'de' ? '1.5px solid var(--aiesec-blue)' : '1px solid var(--border)',
                background: activeTab === 'de' ? 'var(--aiesec-blue)' : '#FFFFFF',
                color: activeTab === 'de' ? '#FFFFFF' : 'var(--text-main)',
                transition: 'var(--transition)'
              }}
            >
              🇩🇪 Deutsch (Rechtlich verbindlich)
            </button>
            <button
              onClick={() => setActiveTab('mn')}
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                border: activeTab === 'mn' ? '1.5px solid var(--aiesec-blue)' : '1px solid var(--border)',
                background: activeTab === 'mn' ? 'var(--aiesec-blue)' : '#FFFFFF',
                color: activeTab === 'mn' ? '#FFFFFF' : 'var(--text-main)',
                transition: 'var(--transition)'
              }}
            >
              🇲🇳 Монгол тайлбар
            </button>
          </div>
        </div>

        {/* Tab 1: German Legal (ECG / VerG / MedienG) */}
        {activeTab === 'de' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            
            {/* Card 1: Vereinsdaten & Registrierung */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: 14,
              border: '1px solid var(--border)',
              padding: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'rgba(3, 126, 243, 0.1)',
                  color: 'var(--aiesec-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Building2 size={20} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                  Angaben nach dem Vereinsgesetz
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.9rem' }}>
                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>VOLLSTÄNDIGER NAME DES VEREINS:</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>
                    Verein der mongolischen Studenten in Österreich - &quot;AMOX&quot;
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>ZVR-ZAHL (ZENTRALES VEREINSREGISTER):</div>
                  <div style={{ fontWeight: 800, color: 'var(--aiesec-blue)', fontSize: '1rem' }}>
                    107178700
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>VEREINSSITZ:</div>
                  <div style={{ color: 'var(--text-main)' }}>Wien, Österreich</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>ZUSTÄNDIGE VEREINSBEHÖRDE:</div>
                  <div style={{ color: 'var(--text-main)' }}>
                    Landespolizeidirektion Wien<br />
                    Referat für Vereins-, Versammlungs- und Medienrechtsangelegenheiten
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>LAND:</div>
                  <div style={{ color: 'var(--text-main)' }}>Österreich (Austria)</div>
                </div>
              </div>
            </div>

            {/* Card 2: Kontakt & Vertretung */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: 14,
              border: '1px solid var(--border)',
              padding: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'rgba(248, 90, 64, 0.1)',
                  color: 'var(--aiesec-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={20} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                  Kontakt &amp; Vertretung
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.9rem' }}>
                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>E-MAIL:</div>
                  <a href="mailto:amox.org@gmail.com" style={{ color: 'var(--aiesec-blue)', fontWeight: 600, textDecoration: 'none' }}>
                    amox.org@gmail.com
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>WEBSITE:</div>
                  <a href="https://www.amox.site" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--aiesec-blue)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    www.amox.site <ExternalLink size={12} />
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>VERTRETUNGSBEFUGTE ORGANE:</div>
                  <div style={{ color: 'var(--text-main)' }}>
                    Der Vorstand von AMOX gemäß den behördlich genehmigten Vereinsstatuten.
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>ANWENDBARE RECHTSVORSCHRIFTEN:</div>
                  <div style={{ color: 'var(--text-main)' }}>
                    Vereinsgesetz 2002 (VerG), Mediengesetz (MedienG), E-Commerce-Gesetz (ECG) – abrufbar unter{' '}
                    <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--aiesec-blue)', textDecoration: 'none' }}>
                      www.ris.bka.gv.at
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Vereinszweck & Blattlinie */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: 14,
              border: '1px solid var(--border)',
              padding: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
              gridColumn: '1 / -1'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'rgba(0, 193, 178, 0.1)',
                  color: 'var(--aiesec-teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FileText size={20} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                  Vereinszweck &amp; Grundlegende Richtung (Blattlinie)
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, fontSize: '0.9rem', lineHeight: 1.65 }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: 8, color: 'var(--text-main)' }}>
                    🎯 Offizielle Vereinsbeschreibung &amp; Vereinszweck
                  </h4>
                  <p style={{ color: 'var(--text-sub)', marginBottom: 10 }}>
                    Wir sind der offizielle Studentenverein der mongolischen StudentInnen in Österreich und versuchen in unserer Rolle als gemeinnützige Organisation die Interessen der mongolischen Studenten in Österreich im Rahmen unserer Möglichkeiten zu unterstützen und zu repräsentieren.
                  </p>
                  <p style={{ color: 'var(--text-sub)', marginBottom: 10 }}>
                    Die AMOX (Австри дахь Монголын Оюутны Холбоо) hat sich zum Ziel gesetzt, studentische Veranstaltungen zu vernetzen, gegenseitigen Austausch von Informationen und Erfahrungen zu fördern und in Österreich lebende Mongolen - auch Nichtstudenten - nach unseren Möglichkeiten zu unterstützen.
                  </p>
                  <p style={{ color: 'var(--text-sub)', marginBottom: 10 }}>
                    In der Vergangenheit haben wir zahlreichen StudentInnen geholfen in Österreich Fuß zu fassen, ebenso haben wir viele Veranstaltungen sportlicher wie kultureller Herkunft für uns und Gleichgesinnte organisiert.
                  </p>
                  <p style={{ color: 'var(--text-sub)', fontWeight: 600, margin: 0 }}>
                    Wir heißen jede/n willkommen, der/die uns unterstützen will bzw. mit uns zusammenarbeiten möchte.
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: 8, color: 'var(--text-main)' }}>
                    📰 Grundlegende Richtung (Blattlinie nach § 25 Abs 4 MedienG)
                  </h4>
                  <p style={{ color: 'var(--text-muted)', marginBottom: 12 }}>
                    Die Website <strong>www.amox.site</strong> dient der Information und Orientierung von mongolischen Studierenden,
                    Studieninteressierten und Jugendlichen in Österreich. Sie bietet Hilfestellungen zu Hochschulzulassung,
                    Wohnheimen, Aufenthaltsrecht, Mentoring-Programmen sowie Berichterstattung über kulturelle und sportliche
                    Vereinsveranstaltungen (wie z.B. das Sun Festival).
                  </p>
                  <div style={{ background: 'var(--bg-subtle)', padding: '12px 14px', borderRadius: 10, border: '1px solid var(--border)', fontSize: '0.85rem' }}>
                    <strong style={{ color: 'var(--aiesec-blue)' }}>Leitbild &amp; Mission:</strong><br />
                    „Хуваалцъя, Дэмжье, Хамтдаа хөгжье“ &bull; Sharing, Supporting, Growing together (SSG).
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Haftung & Urheberrecht */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: 14,
              border: '1px solid var(--border)',
              padding: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
              gridColumn: '1 / -1'
            }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: 14 }}>
                Haftungsausschluss &amp; Datenschutzhinweise
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: 4 }}>
                    Haftung für Inhalte
                  </strong>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                  und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Alle auf dieser Website
                  angebotenen Leitfäden (z.B. zu MA35, Visa, ÖGK) dienen ausschließlich Informationszwecken und
                  stellen keine Rechtsberatung dar.
                </div>

                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: 4 }}>
                    Haftung für Links
                  </strong>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </div>

                <div>
                  <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: 4 }}>
                    Urheberrecht &amp; Datenschutz
                  </strong>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                  der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung. Personenbezogene Daten werden
                  gemäß DSGVO streng vertraulich behandelt.
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* Tab 2: Mongolian Explanation */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            
            {/* Card 1: Байгууллагын Албан Ёсны Бүртгэл */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: 14,
              border: '1px solid var(--border)',
              padding: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'rgba(3, 126, 243, 0.1)',
                  color: 'var(--aiesec-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Building2 size={20} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                  Байгууллагын Албан Ёсны Бүртгэл
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.9rem' }}>
                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>АЛБАН ЁСНЫ НЭР (ГЕРМАН ХЭЛЭЭР):</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>
                    Verein der mongolischen Studenten in Österreich - &quot;AMOX&quot;
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>ZVR-ZAHL (УЛСЫН БҮРТГЭЛИЙН ДУГААР):</div>
                  <div style={{ fontWeight: 800, color: 'var(--aiesec-blue)', fontSize: '1.1rem' }}>
                    107178700
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>БАЙРШИЛ &amp; ТӨВ БАЙР:</div>
                  <div style={{ color: 'var(--text-main)' }}>Вена хот, Бүгд Найрамдах Австри Улс</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>ХАРЬЯАЛАГДАХ ТӨРИЙН БАЙГУУЛЛАГА:</div>
                  <div style={{ color: 'var(--text-main)' }}>
                    Landespolizeidirektion Wien (Вена хотын цагдаагийн газар, Төрийн бус байгууллага, хэвлэл мэдээллийн хэрэг эрхлэх газар)
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>ҮҮСГЭН БАЙГУУЛАГДСАН ОН:</div>
                  <div style={{ color: 'var(--text-main)' }}>2007 он (19 дэх жилдээ тасралтгүй үйл ажиллагаа)</div>
                </div>
              </div>
            </div>

            {/* Card 2: Холбоо барих & Удирдлага */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: 14,
              border: '1px solid var(--border)',
              padding: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'rgba(248, 90, 64, 0.1)',
                  color: 'var(--aiesec-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={20} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                  Холбоо Барих &amp; Төлөөлөл
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.9rem' }}>
                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>И-МЭЙЛ ХАЯГ:</div>
                  <a href="mailto:amox.org@gmail.com" style={{ color: 'var(--aiesec-blue)', fontWeight: 600, textDecoration: 'none' }}>
                    amox.org@gmail.com
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>АЛБАН ЁСНЫ ВЭБСАЙТ:</div>
                  <a href="https://www.amox.site" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--aiesec-blue)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    www.amox.site <ExternalLink size={12} />
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>АЛБАН ЁСНЫ ХАЯГУУД &amp; СУВГУУД:</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
                    <a href="https://www.facebook.com/groups/AmoxAustriaGroup" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2', textDecoration: 'none', fontWeight: 600, fontSize: '0.86rem' }}>
                      👥 Facebook Групп: AmoxAustriaGroup
                    </a>
                    <a href="https://www.instagram.com/amox_at/" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', textDecoration: 'none', fontWeight: 600, fontSize: '0.86rem' }}>
                      📸 Instagram: @amox_at
                    </a>
                    <a href="https://www.youtube.com/channel/UCx2WabubQ10shpkeOeLUpbQ/videos" target="_blank" rel="noopener noreferrer" style={{ color: '#FF0000', textDecoration: 'none', fontWeight: 600, fontSize: '0.86rem' }}>
                      ▶️ YouTube: AMOX Austria Channel
                    </a>
                    <a href="https://soundcloud.com/amox-podcast" target="_blank" rel="noopener noreferrer" style={{ color: '#FF5500', textDecoration: 'none', fontWeight: 600, fontSize: '0.86rem' }}>
                      🎙️ SoundCloud: AMOX Podcast
                    </a>
                    <a href="https://youtu.be/j_DwiLspu08" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--aiesec-blue)', textDecoration: 'none', fontWeight: 600, fontSize: '0.86rem' }}>
                      🎥 Австрид суралцах видео мэдээлэл
                    </a>
                    <a href="https://docs.google.com/document/d/18X8c1iTN8rQPaVyUCq34wE5ApBgyHJvyvdSv4IGEWbY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--aiesec-teal)', textDecoration: 'none', fontWeight: 600, fontSize: '0.86rem' }}>
                      📄 Австрид суралцах албан ёсны нийтлэл (Doc)
                    </a>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700 }}>ТӨЛӨӨЛӨХ ЭРХ БҮХИЙ ЭТГЭЭД:</div>
                  <div style={{ color: 'var(--text-main)' }}>
                    AMOX Холбооны Удирдах Зөвлөл (Vorstand)
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Зорилго & Үйл ажиллагааны чиглэл */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: 14,
              border: '1px solid var(--border)',
              padding: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
              gridColumn: '1 / -1'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'rgba(0, 193, 178, 0.1)',
                  color: 'var(--aiesec-teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Info size={20} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                  Холбооны Эрхэм Зорилго, Алсын Хараа &amp; Хууль Эрх Зүй
                </h3>
              </div>

              <div style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.7 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 16 }}>
                  <div style={{ background: '#EFF6FF', padding: '16px 18px', borderRadius: 12, border: '1px solid rgba(3,126,243,0.2)' }}>
                    <h5 style={{ fontWeight: 800, color: 'var(--aiesec-blue)', marginBottom: 6, fontSize: '0.95rem' }}>
                      🌟 Алсын Хараа (Vision)
                    </h5>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                      Бид эв нэгдлийг эрхэмлэн, мэдлэгийг түгээж, оюутан залуусаа дэмжин, шинэлэг бүхний түүчээ болж хамтдаа хөгжинө.
                    </p>
                  </div>

                  <div style={{ background: '#FFF7ED', padding: '16px 18px', borderRadius: 12, border: '1px solid rgba(248,90,64,0.2)' }}>
                    <h5 style={{ fontWeight: 800, color: 'var(--aiesec-orange)', marginBottom: 6, fontSize: '0.95rem' }}>
                      🎯 Эрхэм Зорилго (Mission)
                    </h5>
                    <p style={{ margin: '0 0 4px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      Хуваалцъя, Дэмжье, Хамтдаа хөгжье
                    </p>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      Sharing, Supporting, Growing together (SSG)
                    </p>
                  </div>
                </div>

                <p style={{ marginBottom: 12 }}>
                  <strong>Verein der mongolischen Studenten in Österreich - &quot;AMOX&quot;</strong> нь Австри улсад суралцаж буй болон
                  суралцахаар бэлтгэж буй Монгол оюутан залуусыг нэгтгэн дэмжих, эрх ашгийг хамгаалах, суралцах таатай орчин бүрдүүлэхэд чиглэсэн
                  <strong> ашгийн бус, улс төрийн бус төрийн бус байгууллага (Verein)</strong> юм.
                </p>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                  Тус сайт дээрх 9 бүлэг оюутны гарын авлага, MA35 визний зөвлөгөө, дотуур байрны жагсаалт зэрэг нь оюутнуудад зориулсан
                  чиглүүлэг мэдээлэл бөгөөд Австрийн холбогдох хууль, эрх зүйн актын дагуу нийтлэгдсэн болно.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
