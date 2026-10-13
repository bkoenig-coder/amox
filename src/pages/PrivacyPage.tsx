import React from 'react';
import { Link } from 'react-router-dom';

const ROWS: { h: string; p: React.ReactNode }[] = [
  {
    h: '1. Хариуцагч',
    p: (
      <>
        Verein der mongolischen Studenten in Österreich – «AMOX» (Австри дахь Монгол Оюутны Холбоо), ZVR-Zahl 107178700, Вена, Австри.
        Холбоо барих: <a href="mailto:amox.org@gmail.com">amox.org@gmail.com</a>
      </>
    )
  },
  {
    h: '2. Ямар мэдээлэл цуглуулдаг вэ',
    p: 'Арга хэмжээнд бүртгүүлэх үед таны овог нэр, утасны дугаар, и-мэйл хаяг, бүртгүүлсэн огноо цагийг хадгална. Вэбсайт нь өөр хувийн мэдээлэл цуглуулдаггүй бөгөөд сурталчилгааны болон хяналтын (tracking) cookie ашигладаггүй.'
  },
  {
    h: '3. Ямар зорилгоор ашиглах вэ',
    p: 'Зөвхөн таны бүртгүүлсэн арга хэмжээг зохион байгуулах, бүртгэлийг баталгаажуулах, арга хэмжээтэй холбоотой мэдээ өгөх зорилгоор ашиглана. Худалдаалахгүй, сурталчилгааны зорилгоор гуравдагч этгээдэд өгөхгүй.'
  },
  {
    h: '4. Хууль зүйн үндэслэл',
    p: 'Таны зөвшөөрөл (GDPR 6-р зүйлийн 1(a)). Бүртгэлийн маягтын нууцлалын зөвшөөрлийн нүдийг тэмдэглэснээр зөвшөөрнө.'
  },
  {
    h: '5. Хэрхэн хадгалах, хэзээ устгах вэ',
    p: 'Мэдээллийг Vercel-ийн хадгалалтын үйлчилгээнд (Vercel Blob) хадгална. Зөвхөн арга хэмжээг зохион байгуулагч Холбооны гишүүд админ нууц үгээр хандана. Бүртгэлийг арга хэмжээ болсноос хойш 30 хоногийн дотор устгана.'
  },
  {
    h: '6. Таны эрх',
    p: (
      <>
        Та өөрийн мэдээллийг үзэх, засуулах, устгуулах, боловсруулалтыг хязгаарлуулах, өгсөн зөвшөөрлөө хүссэн үедээ цуцлах эрхтэй. Хүсэлтээ{' '}
        <a href="mailto:amox.org@gmail.com">amox.org@gmail.com</a> хаягаар илгээнэ үү. Гомдол гаргах бол Австрийн мэдээлэл хамгаалах байгууллага{' '}
        (Datenschutzbehörde, <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">www.dsb.gv.at</a>)-д хандана уу.
      </>
    )
  },
  {
    h: '7. Гадны холбоос',
    p: 'Вэбсайт дээр Facebook, Instagram, YouTube зэрэг гадаад сайтууд руу холбоос байна. Тэдгээр сайтад очсон үед тухайн сайтын нууцлалын бодлого хамаарна.'
  }
];

export const PrivacyPage: React.FC = () => (
  <div className="privacy-page">
    <section className="page-hero" style={{ padding: 'calc(var(--nav-h) + 40px) 0 40px' }}>
      <div className="container">
        <span className="section-subtitle">Нууцлал</span>
        <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', margin: '6px 0 12px' }}>Нууцлалын мэдэгдэл</h1>
        <p style={{ maxWidth: 620 }}>Арга хэмжээний бүртгэлээр цуглуулсан хувийн мэдээллийг хэрхэн ашиглаж, хадгалж, устгадаг талаар.</p>
      </div>
    </section>

    <section style={{ padding: '48px 0 100px' }}>
      <div className="container" style={{ maxWidth: 820 }}>
        {ROWS.map((r) => (
          <div key={r.h} style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: 8 }}>{r.h}</h2>
            <p style={{ color: 'var(--text-sub)', lineHeight: 1.7 }}>{r.p}</p>
          </div>
        ))}

        <div style={{ marginTop: 44, padding: '22px 24px', borderRadius: 20, background: 'var(--canvas-2)' }}>
          <h2 style={{ fontSize: '1.05rem', marginBottom: 8 }}>Kurzfassung auf Deutsch</h2>
          <p style={{ color: 'var(--text-sub)', lineHeight: 1.7, fontSize: '.95rem' }}>
            Bei der Anmeldung zu einer Veranstaltung speichern wir Name, Telefonnummer und E-Mail-Adresse ausschließlich zur Organisation
            dieser Veranstaltung (Rechtsgrundlage: Einwilligung, Art. 6 Abs. 1 lit. a DSGVO). Die Daten werden beim Hosting-Dienst
            Vercel (Vercel Blob) gespeichert, sind nur für die organisierenden Vereinsmitglieder zugänglich und werden spätestens 30 Tage
            nach der Veranstaltung gelöscht. Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerruf Ihrer
            Einwilligung: <a href="mailto:amox.org@gmail.com">amox.org@gmail.com</a>. Beschwerden richten Sie an die Datenschutzbehörde
            (<a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">www.dsb.gv.at</a>). Verantwortlich: Verein der
            mongolischen Studenten in Österreich – „AMOX“, ZVR 107178700, Wien. Die Website setzt keine Tracking- oder Werbe-Cookies ein.
          </p>
        </div>

        <p style={{ marginTop: 28, fontSize: '.95rem' }}>
          <Link to="/impressum" style={{ color: 'var(--accent)', fontWeight: 600 }}>Impressum</Link>
        </p>
      </div>
    </section>
  </div>
);
