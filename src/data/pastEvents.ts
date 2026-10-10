export interface PastEvent {
  id: string;
  title: string;
  /** shown as-is, e.g. "2024" or "2019.10.11" */
  date: string;
  kind: 'sun' | 'community';
  /** optional venue line */
  place?: string;
  /** true when the images are posters/graphics (shown uncropped) */
  poster?: boolean;
  photos: { src: string; alt: string }[];
}

const p = (id: string, n: number, alt: string) => ({ src: `/assets/events/${id}-${n}.webp`, alt });

// Photos come from the AMOX Facebook page albums.
export const PAST_EVENTS: PastEvent[] = [
  {
    id: 'info-day-2026',
    title: 'Австри дахь Оюутан Залуусын Өдөрлөг 2026',
    date: '2026.09.20',
    place: 'Ruby Marie Hotel & Bar, Mariahilfer Straße 120, Wien',
    kind: 'community',
    photos: [
      p('info-day-2026', 1, 'Оюутан залуусын өдөрлөг 2026 — танилцах уулзалт'),
      p('info-day-2026', 2, 'Оюутан залуусын өдөрлөг 2026 — Австрийн тухай викторина'),
      p('info-day-2026', 3, 'Оюутан залуусын өдөрлөг 2026 — визний төрлүүдийн танилцуулга'),
      p('info-day-2026', 4, 'Оюутан залуусын өдөрлөг 2026 — Вена хотоор алхсан нь')
    ]
  },
  {
    id: 'sun-2026',
    title: 'Нарны Баяр 2026 — 19-дахь спорт наадам',
    date: '2026.05.23–24',
    place: 'HAKOAH Sportzentrum, Wehlistraße 326, Wien',
    kind: 'sun',
    poster: true,
    photos: [
      { src: '/assets/events/sun-2026-1.webp', alt: 'Нарны Баяр 2026 — 19 жилийн ой, 5-р сарын 23–24' },
      { src: '/assets/events/sun-2026-2.webp', alt: 'Нарны Баяр 2026 — HAKOAH Sportzentrum, Wien' }
    ]
  },
  {
    id: 'sun-2025',
    title: 'Нарны Баяр 2025',
    date: '2025',
    kind: 'sun',
    photos: [p('sun-2025', 1, 'Нарны Баяр 2025 — сагсан бөмбөг'), p('sun-2025', 2, 'Нарны Баяр 2025 — волейболын баг'), p('sun-2025', 3, 'Нарны Баяр 2025 — гадаа худалдаа, хоол')]
  },
  {
    id: 'sun-2024',
    title: 'Нарны Баяр 2024',
    date: '2024',
    kind: 'sun',
    photos: [p('sun-2024', 1, 'Нарны Баяр 2024 — багууд'), p('sun-2024', 2, 'Нарны Баяр 2024 — тэмцээний заал'), p('sun-2024', 3, 'Нарны Баяр 2024 — шагнал')]
  },
  {
    id: 'new-year-2023',
    title: 'Нэгдсэн Шинэ Жил 2023',
    date: '2023',
    kind: 'community',
    photos: [p('new-year-2023', 1, 'Нэгдсэн Шинэ Жил — зочид'), p('new-year-2023', 2, 'Нэгдсэн Шинэ Жил — ширээний хамт олон'), p('new-year-2023', 3, 'Нэгдсэн Шинэ Жил — оролцогчид')]
  },
  {
    id: 'sun-2023',
    title: 'Нарны Баяр 2023',
    date: '2023',
    kind: 'sun',
    photos: [p('sun-2023', 1, 'Нарны Баяр 2023 — волейбол'), p('sun-2023', 2, 'Нарны Баяр 2023 — хөлбөмбөг'), p('sun-2023', 3, 'Нарны Баяр 2023 — волейболын тоглолт')]
  },
  {
    id: 'sun-2022',
    title: 'Нарны Баяр 2022',
    date: '2022',
    kind: 'sun',
    photos: [p('sun-2022', 1, 'Нарны Баяр 2022 — сагсан бөмбөг'), p('sun-2022', 2, 'Нарны Баяр 2022 — волейбол'), p('sun-2022', 3, 'Нарны Баяр 2022 — хөтлөгч')]
  },
  {
    id: 'sun-2021',
    title: 'Нарны Баяр 2021',
    date: '2021',
    kind: 'sun',
    photos: [p('sun-2021', 1, 'Нарны Баяр 2021 — баг'), p('sun-2021', 2, 'Нарны Баяр 2021 — баг'), p('sun-2021', 3, 'Нарны Баяр 2021 — хөлбөмбөг')]
  },
  {
    id: 'info-day-2019',
    title: 'Австри дахь Оюутан Залуусын өдөрлөг',
    date: '2019.10.11',
    kind: 'community',
    photos: [p('info-day-2019', 1, 'Оюутан залуусын өдөрлөг 2019 — зохион байгуулагчид'), p('info-day-2019', 2, 'Оюутан залуусын өдөрлөг 2019 — танхим')]
  },
  {
    id: 'sun-2019',
    title: 'Нарны Баяр 2019',
    date: '2019',
    kind: 'sun',
    photos: [p('sun-2019', 1, 'Нарны Баяр 2019 — нээлт'), p('sun-2019', 2, 'Нарны Баяр 2019 — заал'), p('sun-2019', 3, 'Нарны Баяр 2019 — оролцогчид')]
  }
];
