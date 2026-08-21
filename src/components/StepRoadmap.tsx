import React from 'react';
import { motion } from 'framer-motion';

export const StepRoadmap: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Дотуур Байраа Сонгох',
      desc: 'OeAD, STUWO, Base19 зэрэг баталгаатай байруудын үнэ, гэрээний нөхцөлийг шалгаж өрөөгөө урьдчилан баталгаажуулна.'
    },
    {
      num: '02',
      title: 'MA35 Виз & E-Card',
      desc: 'Герман хэл дээр өргөдөл үүсгэгчийг ашиглан MA35-д цаг авч, ÖGK оюутны хөнгөлөлттэй даатгалаа бүртгүүлнэ.'
    },
    {
      num: '03',
      title: 'Их Сургуульд Элсэх',
      desc: 'VWU герман хэлний бэлтгэл курс болон үндсэн мэргэжлийн хичээлүүдийн бүртгэл, шалгалтад бэлтгэх зөвлөмж авна.'
    },
    {
      num: '04',
      title: 'AMOX-той Хамт Хөгжих',
      desc: 'AMOX Sun Festival наадам, менторшил хөтөлбөр болон зохион байгуулах багт орж өөрийн манлайллаа нээнэ.'
    }
  ];

  return (
    <section className="roadmap-section" style={{ padding: '80px 0', background: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-title-wrap text-center">
          <span className="section-subtitle">АВСТРИД ХӨГЖИХ АЛХМУУД &bull; HOW IT WORKS</span>
          <h2>Австрид Ирээд Амжилттай Суралцах Төлөвлөгөө</h2>
          <p>Шинээр ирсэн оюутан бүрт туслах 4 үе шаттай баталгаат замын зураг</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 22,
          marginTop: 40
        }}>
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="roadmap-step-card"
            >
              <div className="step-num-pill">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
