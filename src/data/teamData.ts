export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  /** CSS object-position, to keep the face in frame on full-body shots */
  focus?: string;
}

export interface TeamGroup {
  id: string;
  title: string;
  members: TeamMember[];
}

const photo = (n: number) => `/assets/team/member-${String(n).padStart(2, '0')}.webp`;

export const TEAM_GROUPS: TeamGroup[] = [
  {
    id: 'leaders',
    title: 'Тэргүүлэгчид',
    members: [
      { id: 'margad-erdene', name: 'Г. Маргад-Эрдэнэ', role: 'Тэргүүн', photo: photo(1), focus: 'center 30%' },
      { id: 'tegsjargal', name: 'Д. Төгсжаргал', role: 'Дэд тэргүүн', photo: photo(2), focus: 'center 30%' }
    ]
  },
  {
    id: 'council',
    title: 'Удирдах зөвлөл',
    members: [
      { id: 'mishel', name: 'Б. Мишээл', role: 'Удирдах зөвлөл', photo: photo(3), focus: 'center 25%' },
      { id: 'anu', name: 'Э. Ану', role: 'Удирдах зөвлөл', photo: photo(4), focus: 'center 25%' },
      { id: 'otgonbulgan', name: 'Т. Отгонбулган', role: 'Удирдах зөвлөл', photo: photo(5), focus: 'center 14%' },
      { id: 'erkhembayar', name: 'Ш. Эрхэмбаяр', role: 'Удирдах зөвлөл', photo: photo(6), focus: 'center 28%' }
    ]
  },
  {
    id: 'new',
    title: 'Гишүүд',
    members: [
      { id: 'mungontuya', name: 'З. Мөнгөнтуяа', role: 'Гишүүн', photo: photo(7), focus: 'center 25%' },
      { id: 'temuulen', name: 'Н. Тэмүүлэн', role: 'Гишүүн', photo: photo(8), focus: 'center 35%' },
      { id: 'anudari', name: 'Н. Анударь', role: 'Гишүүн', photo: photo(9), focus: 'center 25%' },
      { id: 'munkh-aldar', name: 'И. Мөнх-алдар', role: 'Гишүүн', photo: photo(10), focus: 'center 30%' },
      { id: 'ganbolor', name: 'Б. Ганболор', role: 'Гишүүн', photo: photo(11), focus: 'center 25%' },
      { id: 'tuvshinbaatar', name: 'Б. Түвшинбаатар', role: 'Гишүүн', photo: photo(12), focus: 'center 25%' },
      { id: 'nyamdavaa', name: 'Д. Нямдаваа', role: 'Гишүүн', photo: photo(13), focus: 'center 25%' },
      { id: 'bilguun', name: 'Б. Билгүүн', role: 'Гишүүн', photo: photo(14), focus: 'center 25%' },
      { id: 'amina', name: 'Т. Амина', role: 'Гишүүн', photo: photo(15), focus: 'center 18%' }
    ]
  }
];
