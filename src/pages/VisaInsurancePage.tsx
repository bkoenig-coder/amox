import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, FileText, Send, Calendar, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const VisaInsurancePage: React.FC = () => {
  const [copied, setCopied] = useState(false);

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

  return (
    <div className="visa-insurance-page">
      {/* Header */}
      <section style={{
        padding: '60px 0 40px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, var(--bg-subtle) 100%)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container text-center">
          <span className="section-subtitle">ХУУЛЬ &bull; ВИЗ &bull; ДААТГАЛ</span>
          <h1 style={{ fontSize: '2.8rem', marginBottom: 14 }}>
            MA35 Виз &amp; <span className="gradient-text">Даатгалын Төв</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 660, margin: '0 auto' }}>
            Австрийн оршин суух зөвшөөрөл (Aufenthaltsbewilligung Student) сунгах заавар болон MA35 герман и-мэйл генератор.
          </p>
        </div>
      </section>

      {/* MA35 German Email Generator */}
      <section style={{ padding: '50px 0 80px' }} id="email-generator">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{
            background: 'var(--surface)',
            border: '1.5px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(22px, 5vw, 40px)',
            boxShadow: 'var(--shadow-modal)'
          }}>
            <div className="text-center" style={{ marginBottom: 28 }}>
              <span className="section-subtitle">ИНТЕРАКТИВ ХЭРЭГСЭЛ &bull; 1-CLICK EMAIL</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)' }}>MA35 Герман И-мэйл Бэлтгэгч</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Та өөрийн мэдээллээ оруулснаар албан ёсны герман хэл дээрх өргөдөл шууд бэлэн болно.</p>
            </div>

            <div
              className="visa-gen-grid"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'flex-start' }}
            >
              {/* Input Controls */}
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: 18, color: 'var(--aiesec-blue)' }}>1. Өөрийн Мэдээллээ Оруулах</h4>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Овог Нэр (Латинаар)</label>
                  <input
                    type="text"
                    className="form-input"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </div>

                <div className="form-2col-grid">
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Төрсөн Огноо</label>
                    <input
                      type="date"
                      className="form-input"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Виз Дуусах Огноо</label>
                    <input
                      type="date"
                      className="form-input"
                      value={visaExpiryDate}
                      onChange={(e) => setVisaExpiryDate(e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>Их Сургууль</label>
                  <select
                    className="form-select"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                  >
                    <option value="Universität Wien">Universität Wien (Uni Wien)</option>
                    <option value="Technische Universität Wien">TU Wien</option>
                    <option value="Wirtschaftsuniversität Wien">WU Wien</option>
                    <option value="Medizinische Universität Wien">MedUni Wien</option>
                    <option value="Johannes Kepler Universität Linz">JKU Linz</option>
                    <option value="Universität Graz">Uni Graz</option>
                  </select>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: 6 }}>MA35 Картын Дугаар (GZ / Referenz)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Жишээ: MA35-98765432"
                    value={referenceNumber}
                    onChange={(e) => setReferenceNumber(e.target.value)}
                  />
                </div>
              </div>

              {/* Live Preview Box */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--aiesec-blue)' }}>2. Бэлэн Герман И-мэйл</h4>
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
                  fontSize: '0.88rem',
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
      </section>
    </div>
  );
};
