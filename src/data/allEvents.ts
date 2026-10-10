export interface AmoxEvent {
  id: string;
  title: string;
  /** ISO date used for sorting */
  iso: string;
  /** shown as written, e.g. 2026.09.20 */
  date: string;
  place?: string;
  kind: 'sun' | 'student-day' | 'community';
  cover?: string;
}

const c = (name: string) => `/assets/events/covers/${name}.webp`;

// Source: the AMOX Facebook events page (event titles, dates, venues and cover posters).
export const ALL_EVENTS: AmoxEvent[] = [
  { id: 'student-day-2026', title: 'Австри дахь Оюутан Залуусын Өдөрлөг 2026', iso: '2026-09-20', date: '2026.09.20', place: 'Ruby Marie Hotel & Bar, Mariahilfer Straße 120, Wien', kind: 'student-day', cover: c('student-day-2026') },
  { id: 'sun-2026', title: 'Нарны Баяр 2026 — 19-дахь спорт наадам', iso: '2026-05-23', date: '2026.05.23–24', place: 'HAKOAH Sportzentrum, Wehlistraße 326, Wien', kind: 'sun', cover: c('sun-2026') },
  { id: 'student-day-2024', title: 'Австри дахь Оюутан Залуусын Өдөрлөг 2024', iso: '2024-09-22', date: '2024.09.22', kind: 'student-day', cover: c('student-day-2024') },
  { id: 'sun-2024', title: 'Нарны Баяр 2024 — XVII спорт наадам', iso: '2024-06-01', date: '2024.06.01', place: 'HAKOAH, Wien', kind: 'sun', cover: c('sun-2024') },
  { id: 'new-year-2023', title: 'Австри дахь Монголчуудын Нэгдсэн Шинэ Жилийн Цэнгүүн 2023', iso: '2023-12-22', date: '2023.12.22', place: 'Casablanca Veranstaltungssaal, Wien', kind: 'community', cover: c('new-year-2023') },
  { id: 'student-day-2023', title: 'Австри дахь Оюутан Залуусын Өдөрлөг 2023', iso: '2023-10-13', date: '2023.10.13', place: 'Hietzinger Kai 1, 1130 Wien', kind: 'student-day', cover: c('student-day-2023') },
  { id: 'sun-2023', title: 'Нарны Баяр 2023', iso: '2023-05-20', date: '2023.05.20', place: 'Donauinselplatz, 1210 Wien', kind: 'sun', cover: c('sun-2023') },
  { id: 'student-day-2022', title: 'Австри дахь Оюутан Залуусын Өдөрлөг 2022', iso: '2022-10-07', date: '2022.10.07', place: 'Oskar Morgenstern Center, Universität Wien', kind: 'student-day', cover: c('student-day-2022') },
  { id: 'sun-2022', title: 'Нарны Баяр 2022', iso: '2022-05-21', date: '2022.05.21', place: 'Donauinsel (Floridsdorfer Brücke), 1210 Wien', kind: 'sun', cover: c('sun-2022') },
  { id: 'info-day-2021', title: 'Informationstag für Studierende', iso: '2021-10-22', date: '2021.10.22', place: 'Hietzinger Kai 1, 1130 Wien', kind: 'student-day', cover: c('info-day-2021') },
  { id: 'sun-2021', title: 'Нарны Баяр 2021 — We Are Back', iso: '2021-09-25', date: '2021.09.25', place: 'Donauinselplatz, 1210 Wien', kind: 'sun', cover: c('sun-2021') },
  { id: 'student-day-2020', title: 'Австри дахь Оюутан Залуусын Цахим Өдөрлөг 2020', iso: '2020-10-19', date: '2020.10.19', place: 'Онлайн', kind: 'student-day', cover: c('student-day-2020') },
  { id: 'new-year-2020', title: 'AMOX New Year Party 2020', iso: '2019-12-29', date: '2019.12.29', place: 'Bird Yard, Langegasse 74, 1080 Wien', kind: 'community', cover: c('new-year-2020') },
  { id: 'student-day-2019', title: 'Австри дахь Оюутан Залуусын Анхдугаар Өдөрлөг', iso: '2019-10-11', date: '2019.10.11', place: 'Hietzinger Kai 1–3, 1130 Wien', kind: 'student-day', cover: c('student-day-2019') },
  { id: 'sun-2019', title: 'Нарны Баяр 2019', iso: '2019-05-26', date: '2019.05.26', place: 'Bertha-von-Suttner-Gymnasium, Wien', kind: 'sun', cover: c('sun-2019') },
  { id: 'new-year-2019', title: 'Мөнгөн Үдэш 2019 — шинэ жилийн цэнгүүн', iso: '2018-12-28', date: '2018.12.28', place: 'Perfektastraße 81, 1230 Wien', kind: 'community', cover: c('new-year-2019') },
  { id: 'sun-2018', title: 'Нарны Баяр 2018', iso: '2018-05-19', date: '2018.05.19', place: 'Donauinselplatz, 1210 Wien', kind: 'sun', cover: c('sun-2018') },
  { id: 'meetup-2015', title: 'Танилцах үдэшлэг 2015', iso: '2015-10-18', date: '2015.10.18', place: 'NOX Bar, Wien', kind: 'community', cover: c('meetup-2015') },
];
