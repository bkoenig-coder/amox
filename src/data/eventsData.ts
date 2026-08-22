export interface AMOXEvent {
  id: string;
  title: string;
  category: 'sports' | 'academic' | 'community' | 'career';
  date: string;
  location: string;
  status: 'open' | 'upcoming' | 'urgent' | 'completed';
  statusLabel: string;
  description: string;
  linkUrl: string;
  linkText: string;
  badge: string;
}

export const EVENTS_DATA: AMOXEvent[] = [
  {
    id: 'students-info-day-2026',
    title: 'AMOX Students Info Day & Orientation 2026',
    category: 'community',
    date: '2026.09.19 (9-р сарын дундуур)',
    location: 'Вена Их Сургуулийн Төв Кампус (Uni Wien)',
    status: 'urgent',
    statusLabel: 'Нээлттэй • 9-р сард',
    description: 'Австри улсын их дээд сургуулиудад шинээр ирж буй болон бэлтгэл курсийн оюутан залууст зориулсан мэдээллийн нэгдсэн өдөрлөг, 1-on-1 ментор зөвлөгөө.',
    linkUrl: '/about#mentor',
    linkText: 'Өдөрлөгт бүртгүүлэх →',
    badge: '🎓 ОЮУТНЫ ӨДӨРЛӨГ 2026'
  },
  {
    id: 'ma35-deadline-winter-2026',
    title: '2026 Өвлийн Семестрийн MA35 Виз Сунгалт',
    category: 'academic',
    date: '2026 оны 9 - 10-р сар',
    location: 'MA35 (Wien / Graz / Linz)',
    status: 'urgent',
    statusLabel: 'Чухал Зөвлөмж',
    description: 'Визний хугацаа дуусахаас 3 сарын өмнө MA35-д цаг авах герман өргөдлөө цаг тухайд нь илгээж хугацаагаа баталгаажуулна уу.',
    linkUrl: '/visa-insurance',
    linkText: 'И-мэйл үүсгэх →',
    badge: '🛂 MA35 ХУГАЦАА'
  },
  {
    id: 'sun-festival-2027',
    title: 'AMOX Sun Festival 2027 Спортын Их Наадам',
    category: 'sports',
    date: '2027.07.10 - 07.11 (Тун удахгүй)',
    location: 'Вена Хот, Төв Спорт Цогцолбор',
    status: 'upcoming',
    statusLabel: 'Next Mega Event 2027',
    description: 'Европ дахь Монголчуудын спортын нэгдсэн наадам 2027 онд. Сагсан бөмбөг, волейбол, хөлбөмбөг, теннис, шатрын 6 төрлийн нээлттэй тэмцээн.',
    linkUrl: '/sun-festival',
    linkText: 'Наадмын дэлгэрэнгүй →',
    badge: '🏆 SUN FESTIVAL 2027'
  },
  {
    id: 'housing-early-booking-2026',
    title: '2026/2027 Оны Дотуур Байрны Захиалга',
    category: 'academic',
    date: '2026/2027 Хичээлийн Жил',
    location: 'Онлайн Бүртгэл',
    status: 'open',
    statusLabel: 'Нээлттэй',
    description: 'OeAD, STUWO, WIHAST, Base19 дотуур байрны өрөөний бүртгэл эрт эхэлдэг тул боломжийн үнэтэй байраа урьдчилан сонгоорой.',
    linkUrl: '/housing',
    linkText: 'Байр хайх →',
    badge: '🏠 ДОТУУР БАЙР'
  }
];

export const TIMELINE_HISTORY = [
  {
    year: '2007',
    title: 'AMOX Холбоо Үүсгэн Байгуулагдав',
    description: 'Австри улсад суралцаж буй анхны Монгол оюутнууд нэгдэн Verein der Mongolischen Studenten in Österreich албан ёсны холбоог байгуулав.'
  },
  {
    year: '2012',
    title: 'Анхны AMOX Sun Festival Спортын Их Наадам',
    description: 'Вена хотноо Европын Монгол оюутнуудын дунд анхны спортын их наадмыг уламжлал болгон зохион байгуулж эхлэв.'
  },
  {
    year: '2018',
    title: '9 Бүлэг Оюутны Гарын Авлага Цахимжив',
    description: 'MA35 виз, их сургуулийн элсэлт, ÖGK даатгалын нэгдсэн гарын авлага бүтээгдэж олон зуун оюутанд хүрч эхлэв.'
  },
  {
    year: '2024',
    title: 'Sun Festival Наадам & Бүсийн Лиг',
    description: 'Европ даяарх 16 шилдэг баг тамирчид Вена хотноо цуглаж, шинэ дээд амжилтууд тогтоов.'
  },
  {
    year: '2026',
    title: 'AMOX 2026 • 19 Жилийн Ой & Students Info Day',
    description: 'AIESEC стандартад суурилсан дижитал портал, 9-р сарын дундын Students Info Day болон дараагийн Sun Festival 2027 наадмын бэлтгэл ажил эхлэв.'
  }
];
