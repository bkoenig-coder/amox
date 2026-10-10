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
    id: 'halloween-2026',
    title: 'AMOX Halloween',
    category: 'community',
    date: '2026.10.25',
    location: 'Байршлыг удахгүй зарлана',
    status: 'upcoming',
    statusLabel: 'Удахгүй',
    description: 'AMOX-ийн Halloween арга хэмжээ 10-р сарын 25-нд болно. Цаг, байршил болон бүртгэлийн мэдээллийг удахгүй зарлана.',
    linkUrl: '/events',
    linkText: 'Дэлгэрэнгүй →',
    badge: 'HALLOWEEN'
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
    description: 'Австри улсад суралцаж буй Монгол оюутнууд нэгдэн Verein der mongolischen Studenten in Österreich - "AMOX" (ZVR-Zahl: 107178700) албан ёсны холбоог байгуулав.'
  },
  {
    year: '2012',
    title: 'Sport und fun — Эрүүл биед саруул ухаан',
    description: 'AMOX 2012 оны 10-р сарын 7-нд спорт, нөхөрлөлийн арга хэмжээ зохион байгуулав.'
  },
  {
    year: '2018',
    title: 'Нарны Баяр 2018',
    description: 'Нарны Баяр спортын наадам 5-р сарын 19-нд Donauinselplatz дээр болов.'
  },
  {
    year: '2019',
    title: 'Оюутан Залуусын Анхдугаар Өдөрлөг',
    description: 'Австри дахь Оюутан Залуусын Анхдугаар Өдөрлөг 2019 оны 10-р сарын 11-нд Hietzinger Kai 1–3 хаяг дээр болов.'
  },
  {
    year: '2024',
    title: 'Нарны Баяр 2024 — XVII спорт наадам',
    description: 'XVII Нарны Баяр спорт наадам 2024 оны 6-р сарын 1-нд HAKOAH дээр болов.'
  },
  {
    year: '2026',
    title: 'Нарны Баяр 2026 — 19-дахь спорт наадам',
    description: '19-дэх Нарны Баяр 2026 оны 5-р сарын 23–24-нд HAKOAH Sportzentrum дээр болж, 9-р сарын 20-нд Оюутан Залуусын Өдөрлөг зохион байгуулагдлаа.'
  }
];
