export interface Dormitory {
  id: string;
  name: string;
  provider: 'OeAD' | 'STUWO' | 'WIHAST' | 'Base19' | 'Home4Students' | 'The Student Hotel' | 'Milestone';
  city: 'Wien' | 'Graz' | 'Linz' | 'Salzburg' | 'Innsbruck';
  district: string;
  address: string;
  pricePerMonth: number;
  deposit: number;
  roomTypes: string[];
  features: string[];
  rating: number;
  reviewsCount: number;
  websiteUrl: string;
  recommendedFor: string;
  badge?: string;
}

export const DORMS_DATA: Dormitory[] = [
  {
    id: 'oead-guest-house',
    name: 'OeAD-Gästehaus Molkereistraße',
    provider: 'OeAD',
    city: 'Wien',
    district: '2. Bezirk (Leopoldstadt)',
    address: 'Molkereistraße 1, 1020 Wien',
    pricePerMonth: 480,
    deposit: 600,
    roomTypes: ['Нэг хүний өрөө', 'Хоёр хүний өрөө', 'Студи'],
    features: ['WU Wien-тэй маш ойр (5 мин)', 'U2 Praterstern метрогоор 2 зогсоол', 'Бүх зардал орсон (Ус, халаалт, интернэт)', 'Фитнесс, угаалгын өрөө'],
    rating: 4.8,
    reviewsCount: 64,
    websiteUrl: 'https://oeadstudenthousing.at/',
    recommendedFor: 'WU Wien болон шинээр ирж буй оюутнуудад хамгийн тохиромжтой',
    badge: 'TOP CHOICE'
  },
  {
    id: 'stuwo-donaustadt',
    name: 'STUWO Student Housing Vorgartenstraße',
    provider: 'STUWO',
    city: 'Wien',
    district: '2. Bezirk (Leopoldstadt)',
    address: 'Vorgartenstraße 110, 1020 Wien',
    pricePerMonth: 465,
    deposit: 550,
    roomTypes: ['Нэг хүний өрөө', 'Хоёр хүний апартмент'],
    features: ['U1 Vorgartenstraße метроноос 200м', 'Саун, фитнесс төвтэй', 'Бүх өрөөндөө тусдаа ариун цэврийн өрөөтэй', 'Цэвэрлэгээний үйлчилгээ багтсан'],
    rating: 4.7,
    reviewsCount: 52,
    websiteUrl: 'https://www.stuwo.at/',
    recommendedFor: 'Uni Wien, TU Wien, WU сургуулийн аль алинд тохиромжтой'
  },
  {
    id: 'base19-wien',
    name: 'Base19 Student Residence Döbling',
    provider: 'Base19',
    city: 'Wien',
    district: '19. Bezirk (Döbling)',
    address: 'Gymnasiumstraße 85, 1190 Wien',
    pricePerMonth: 395,
    deposit: 500,
    roomTypes: ['Нэг хүний өрөө', 'Хоёр хүний өрөө'],
    features: ['BOKU их сургуультай ойр', 'Хамгийн хямд, боломжийн үнэтэй', 'Чимээгүй ногоон бүс', 'Спортын талбай, номын сан'],
    rating: 4.5,
    reviewsCount: 78,
    websiteUrl: 'https://www.base19.at/',
    recommendedFor: 'Төсөвтөө хэмнэлттэй оюутнууд болон BOKU их сургуулийнханд',
    badge: 'BEST BUDGET'
  },
  {
    id: 'wihast-haus-panorama',
    name: 'WIHAST Haus Panorama',
    provider: 'WIHAST',
    city: 'Wien',
    district: '20. Bezirk (Brigittenau)',
    address: 'Brigittenauer Lände 224, 1200 Wien',
    pricePerMonth: 385,
    deposit: 450,
    roomTypes: ['Нэг хүний өрөө', 'Хоёр хүний өрөө'],
    features: ['U4 Friedensbrücke / U6 Spittelau метротой', 'Дундын гал тогоо, нийтийн заал', 'Хямд үнэ, өндөр хурдны интернэт', 'Унадаг дугуйн зогсоол'],
    rating: 4.3,
    reviewsCount: 91,
    websiteUrl: 'https://www.wihast.at/',
    recommendedFor: 'Бүх их дээд сургуулийн оюутнуудад хүртээмжтэй'
  },
  {
    id: 'milestone-vienna-prater',
    name: 'Milestone Vienna Prater Premium',
    provider: 'Milestone',
    city: 'Wien',
    district: '2. Bezirk (Leopoldstadt)',
    address: 'Messeplatz 1, 1020 Wien',
    pricePerMonth: 690,
    deposit: 800,
    roomTypes: ['Single Studio Deluxe', 'Corner Studio'],
    features: ['WU Wien кампусын яг хажууд', 'Дээврийн терасс, кино үзэх өрөө', 'Загварлаг тавилга, хувийн гал тогоо', '24/7 консьерж хамгаалалт'],
    rating: 4.9,
    reviewsCount: 43,
    websiteUrl: 'https://www.milestone.net/',
    recommendedFor: 'Дээд зэрэглэлийн тав тух, хувийн орон зай хүсэгчдэд',
    badge: 'LUXURY'
  },
  {
    id: 'stuwo-graz',
    name: 'STUWO Graz Eggenberg',
    provider: 'STUWO',
    city: 'Graz',
    district: 'Eggenberg',
    address: 'Köflachergasse 9, 8020 Graz',
    pricePerMonth: 420,
    deposit: 500,
    roomTypes: ['Нэг хүний өрөө', 'Студи өрөө'],
    features: ['Uni Graz & FH Joanneum-тай ойр', 'Фитнесс, саун, дугуйн өрөө', 'Бүх зардал орсон', 'Цэвэрхэн, шинэ тохижилт'],
    rating: 4.7,
    reviewsCount: 36,
    websiteUrl: 'https://www.stuwo.at/en/dormitories/graz/',
    recommendedFor: 'Грац хотод суралцах оюутнуудад'
  },
  {
    id: 'oead-linz-jku',
    name: 'OeAD Green House Linz',
    provider: 'OeAD',
    city: 'Linz',
    district: 'Urfahr',
    address: 'Altenbergerstraße 69, 4040 Linz',
    pricePerMonth: 410,
    deposit: 500,
    roomTypes: ['Нэг хүний өрөө', 'Хос өрөө'],
    features: ['JKU (Johannes Kepler Universität) яг хажууд', 'Пассив ногоон байшин', 'Шууд трамвайн буудал', 'Тайван байгалийн орчин'],
    rating: 4.8,
    reviewsCount: 29,
    websiteUrl: 'https://oeadstudenthousing.at/en/linz/',
    recommendedFor: 'JKU Linz сургуулийн оюутнуудад'
  }
];
