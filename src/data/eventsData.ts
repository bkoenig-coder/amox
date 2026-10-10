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
    id: 'ma35-deadline-winter-2026',
    title: '2026 оны өвлийн семестрийн MA35 виз сунгалт',
    category: 'academic',
    date: '2026 оны 9 - 10-р сар',
    location: 'MA35 (Wien / Graz / Linz)',
    status: 'urgent',
    statusLabel: 'Чухал Зөвлөмж',
    description: 'Визний хугацаа дуусахаас 3 сарын өмнө MA35-д цаг авч, герман өргөдлөө илгээгээрэй.',
    linkUrl: '/visa-insurance',
    linkText: 'И-мэйл бэлдэх →',
    badge: 'MA35 ХУГАЦАА'
  },
  {
    id: 'sun-festival-2027',
    title: 'Нарны Баяр 2027 — спортын их наадам',
    category: 'sports',
    date: '2027 оны 5-р сар (Тун удахгүй)',
    location: 'Вена Хот, Төв Спорт Цогцолбор',
    status: 'upcoming',
    statusLabel: 'Next Mega Event 2027',
    description: 'Европ дахь Монголчуудын спортын наадам 2027 оны 5-р сард Вена хотноо болно. Сагсан бөмбөг, волейбол, хөлбөмбөг, теннис, шатрын 6 төрөлт тэмцээнтэй.',
    linkUrl: '/sun-festival',
    linkText: 'Дэлгэрэнгүй →',
    badge: 'НАРНЫ БАЯР 2027'
  },
  {
    id: 'housing-early-booking-2026',
    title: '2026/2027 оны оюутны байрны бүртгэл',
    category: 'academic',
    date: '2026/2027 Хичээлийн Жил',
    location: 'Онлайн Бүртгэл',
    status: 'open',
    statusLabel: 'Нээлттэй',
    description: 'OeAD, STUWO, WIHAST, Base19 зэрэг байрны бүртгэл эрт эхэлдэг. Өөрт тохирохыг нь урьдчилан сонгоорой.',
    linkUrl: '/housing',
    linkText: 'Байр хайх →',
    badge: 'ДОТУУР БАЙР'
  }
];

export const TIMELINE_HISTORY = [
  {
    year: '2007',
    title: 'AMOX Холбоо Үүсгэн Байгуулагдав',
    description: 'Австри улсад суралцаж буй анхны Монгол оюутнууд нэгдэн Verein der mongolischen Studenten in Österreich - "AMOX" (ZVR-Zahl: 107178700) албан ёсны холбоог байгуулав.'
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
    title: 'AMOX 19 жилийн ойгоо тэмдэглэв',
    description: 'Шинэ вэб портал нээгдэж, 9-р сард Students Info Day болж, 2027 оны Нарны Баяр наадмын бэлтгэл эхэллээ.'
  }
];
