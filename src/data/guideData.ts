export interface GuideChapter {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  icon: string;
  category: 'admission' | 'visa' | 'housing' | 'finance' | 'insurance' | 'work' | 'living' | 'transport' | 'emergency';
  summary: string;
  contentMarkdown: string;
  keyTakeaways: string[];
  officialLinks: { label: string; url: string }[];
}

export const GUIDE_CHAPTERS: GuideChapter[] = [
  {
    id: 'chapter-1-admission',
    chapterNumber: 1,
    title: 'Их Дээд Сургуулийн Элсэлт & Баримт Бичиг',
    subtitle: 'Австрийн ТОП сургуулиудад элсэх албан ёсны дараалал',
    icon: 'GraduationCap',
    category: 'admission',
    summary: 'Uni Wien, TU Wien, WU Wien, MedUni-д элсэх шаардлага, дипломын апостиль, орчуулга, элсэлтийн цонх үе.',
    keyTakeaways: [
      'Өвлийн семестрийн өргөдөл: 7-р сарын 5 хүртэл',
      'Хаврын семестрийн өргөдөл: 1-р сарын 5 хүртэл',
      'Бүх бичиг баримтыг Гадаад Харилцааны Яамны Апостиль (Apostille) даруулах шаардлагатай',
      'Герман хэлний C1 түвшин хүрээгүй бол VWU бэлтгэл курст суралцах боломжтой'
    ],
    contentMarkdown: `### 1.1 Австрийн Их Сургуулиудын Систем
Австри улс нь дэлхийд тэргүүлэх түвшний үнэ төлбөргүй шахуу (Семестрт €726.72 + €24.70 ÖH хураамж) боловсролын системтэй. 
Монгол улсын ерөнхий боловсролын 12 жилийн гэрчилгээ эсвэл их сургуулийн дипломоор Австрийн их сургуулиудад шууд эсвэл бэлтгэл курстэйгээр өргөдөл гаргах боломжтой.

### 1.2 Шаардагдах Үндсэн Баримт Бичиг
1. **Гэрчилгээ / Диплом**: Нотариатаар баталгаажсан герман/англи орчуулга + Апостиль
2. **Монголд их сургуульд элссэн баталгаа (Besondere Universitätsreife)**: Та Монголын аль нэг их сургуульд тухайн мэргэжлээрээ суралцах эрхтэйг нотлох тодорхойлолт
3. **Хэлний мэдлэгийн гэрчилгээ**: Goethe-Zertifikat, ÖSD эсвэл IELTS/TOEFL (Англи хэл дээрх хөтөлбөрүүдэд)
4. **Гадаад паспорт**: Хүчинтэй хугацаа нь 2-оос дээш жил байх`,
    officialLinks: [
      { label: 'Universität Wien Элсэлтийн Портал', url: 'https://studieren.univie.ac.at/' },
      { label: 'TU Wien Элсэлтийн Хөтөч', url: 'https://www.tuwien.at/studium/zulassung' },
      { label: 'VWU Герман Хэлний Бэлтгэл Курс', url: 'https://vwu.at/' }
    ]
  },
  {
    id: 'chapter-2-ma35-visa',
    chapterNumber: 2,
    title: 'MA35 Оюутны Виз (Aufenthaltsbewilligung Student)',
    subtitle: 'Австрийн оршин суух зөвшөөрлийн анхны мэдүүлэг ба сунгалт',
    icon: 'FileCheck',
    category: 'visa',
    summary: 'MA35 визний өргөдөл гаргах, банкны санхүүгийн баталгаа, гэр бүлийн дэмжлэгийн гэрээ, эрүүгийн лавлагаа.',
    keyTakeaways: [
      '24 хүртэлх насны оюутнууд: Жилд ~€7,500 санхүүгийн баталгаа',
      '24-өөс дээш насныхан: Жилд ~€13,500 санхүүгийн баталгаа',
      'Визний хугацаа дуусахаас 3 сарын өмнө сунгах өргөдлөө MA35-д илгээх',
      'Жилд хамгийн багадаа 16 ECTS кредит цуглуулсан байх хуулийн шаардлагатай'
    ],
    contentMarkdown: `### 2.1 MA35 Визний Ангилал
Оюутнуудад олгогддог **Aufenthaltsbewilligung - Student** нь 1 жилийн хугацаатай гардаг бөгөөд жил бүр цуглуулсан кредит (16 ECTS) болон санхүүгийн баталгаагаа үзүүлж сунгадаг.

### 2.2 Шаардагдах Бичиг Баримтын Чеклист
- Сургуулийн бүртгэлийн хуудас (Studienbestätigung & Studienblatt)
- Австрийн банкны тодорхойлолт (Kontoauszug сүүлийн 3-6 сарын хуулга)
- Дотуур байрны гэрээ (Wohnrechtsvereinbarung / Mietvertrag)
- Өөрөө төлөх оюутны эрүүл мэндийн даатгал (ÖGK Selbstversicherung)
- Паспорт хэмжээтэй зураг (EU стандарт 3.5x4.5 см)`,
    officialLinks: [
      { label: 'Вена хотын захиргаа (MA35 Албан Ёсны Хуудас)', url: 'https://www.wien.gv.at/verwaltung/einwanderung/' },
      { label: 'Австрийн Засгийн Газрын Цахим Портал', url: 'https://www.oesterreich.gv.at/' }
    ]
  },
  {
    id: 'chapter-3-housing',
    chapterNumber: 3,
    title: 'Дотуур Байр & Орон Сууцны Гэрээ',
    subtitle: 'Австри дахь дотуур байрнуудын үнэ, Meldezettel хаягийн бүртгэл',
    icon: 'Home',
    category: 'housing',
    summary: 'OeAD, STUWO, WIHAST байрны ялгаа, Meldezettel бүртгүүлэх хугацаа, барьцаа мөнгө (Kaution) буцаан авах дүрэм.',
    keyTakeaways: [
      'Вена хотод ирснээс хойш 3 хоногийн дотор харьяа дүүргийн Meldeamt-д бүртгүүлэх үүрэгтэй',
      'Дотуур байрны өрөөний дундаж үнэ €380 - €550 / сар',
      'Гэрээ цуцлах мэдэгдлийг 1-3 сарын өмнө бичгээр өгөх шаардлагатай'
    ],
    contentMarkdown: `### 3.1 Оюутны Дотуур Байр Захиалах нь
Австрийн их сургуулиуд өөрсдөө дотуур байргүй бөгөөд оюутны бие даасан байгууллагууд (OeAD, STUWO, Base19, WIHAST) байраар хангадаг.

### 3.2 Meldezettel буюу Хаягийн Бүртгэл
Байранд ормогц байрны менежерээр гарын үсэг зуруулсан Meldezettel маягтыг авч хамгийн ойр орших Magistratische Bezirksamt (MBA)-д очин 10 минутын дотор үнэ төлбөргүй бүртгүүлнэ.`,
    officialLinks: [
      { label: 'Вена хотын хаягийн бүртгэлийн захиалга', url: 'https://www.wien.gv.at/verwaltung/meldeservice/' }
    ]
  },
  {
    id: 'chapter-4-insurance',
    chapterNumber: 4,
    title: 'ÖGK Даатгал & E-Card Авах Заавар',
    subtitle: 'Оюутны эрүүл мэндийн хөнгөлөлттэй даатгал',
    icon: 'ShieldPlus',
    category: 'insurance',
    summary: 'ÖGK Selbstversicherung сард ~€69 төлбөртэй даатгал, эмчийн үзлэг, эмийн сангийн хөнгөлөлт, E-Card зураг бүртгүүлэх.',
    keyTakeaways: [
      'ÖGK Оюутны даатгал нь сард ердөө ~€69.13 (Энгийн даатгал €480 байдаг)',
      'E-Card дээрх зургийг цагдаагийн газар эсвэл харьяа төвд очиж бүртгүүлнэ',
      'Австрийн бүх эмнэлэг, гэрээт эмч нар дээр үнэ төлбөргүй үйлчилнэ'
    ],
    contentMarkdown: `### 4.1 ÖGK Оюутны Даатгалд Бүртгүүлэх
Австри улсад суралцаж буй гадаад оюутан бүр эрүүл мэндийн албан ёсны даатгалтай байх ёстой.
ÖGK (Österreichische Gesundheitskasse) салбарт очиж эсвэл онлайнаар "Selbstversicherung für Studierende" өргөдлийг илгээнэ.`,
    officialLinks: [
      { label: 'ÖGK Оюутны Даатгалын Портал', url: 'https://www.gesundheitskasse.at/' }
    ]
  },
  {
    id: 'chapter-5-work',
    chapterNumber: 5,
    title: 'AMS 20 Цагийн Ажиллах Зөвшөөрөл & Цалин',
    subtitle: 'Австрийн оюутны хөдөлмөр эрхлэлтийн хууль дүрэм',
    icon: 'Briefcase',
    category: 'work',
    summary: 'Долоо хоногт 20 цаг хүртэл ажиллах AMS зөвшөөрөл (Beschäftigungsbewilligung), Geringfügig, Teilzeit, цагийн хөлс, татварын буцаан олголт.',
    keyTakeaways: [
      'Бакалавр болон Магистрын оюутнууд долоо хоногт 20 цаг хүртэл ажиллах хуулийн эрхтэй',
      'Ажил олгогч тань AMS-д өргөдөл гаргаж 2-4 долоо хоногийн дотор зөвшөөрөл олгогдоно',
      'Geringfügig ажил (сард €518 хүртэл) нь татваргүй байдаг',
      'Werkstudent / Практик ажил нь карьерын асар том давуу тал болно'
    ],
    contentMarkdown: `### 5.1 Ажиллах Зөвшөөрөл Авах Дараалал
1. Ажлын байраа олох (Karriere.at, LinkedIn, Uniport)
2. Ажил олгогч тань AMS-д "Antrag auf Ausstellung einer Beschäftigungsbewilligung" илгээнэ
3. AMS зөвшөөрөл гарсны дараа албан ёсоор ажиллаж эхэлнэ.`,
    officialLinks: [
      { label: 'AMS Хөдөлмөрийн Алба', url: 'https://www.ams.at/' },
      { label: 'Karriere.at Ажлын Портал', url: 'https://www.karriere.at/' }
    ]
  },
  {
    id: 'chapter-6-budget',
    chapterNumber: 6,
    title: 'Амьжиргааны Зардал & Банкны Данс',
    subtitle: 'Оюутны сарын төсвийн тооцоолуур ба хөнгөлөлтүүд',
    icon: 'CreditCard',
    category: 'finance',
    summary: 'Банкны үнэгүй оюутны данс (Erste Bank, Raiffeisen, Bank Austria), сарын дундаж зардал, хямд дэлгүүрүүд (Hofer, Lidl).',
    keyTakeaways: [
      'Оюутны сарын нийт дундаж зардал: €850 - €1,100',
      'Erste Bank Sparkasse болон Bank Austria нь 27 нас хүртэлх оюутнуудад 100% үнэгүй данс нээдэг',
      'Тээврийн 6 сарын оюутны семестрийн билет: €75 (Wiener Linien)'
    ],
    contentMarkdown: `### 6.1 Оюутны Сарын Зардлын Бүтэц
- Дотуур байр: €390 - €520
- Хоол хүнс & Ахуйн хэрэглээ: €220 - €300
- Даатгал (ÖGK): €69.13
- Утас, интернет: €15 - €25
- Бусад & Чөлөөт цаг: €100 - €150`,
    officialLinks: [
      { label: 'Erste Bank Оюутны Данс', url: 'https://www.sparkasse.at/' },
      { label: 'Wiener Linien Тээврийн Карт', url: 'https://www.wienerlinien.at/' }
    ]
  },
  {
    id: 'chapter-7-transport',
    chapterNumber: 7,
    title: 'Нийтийн Тээвэр & Оюутны Семестрийн Тасалбар',
    subtitle: 'Wiener Linien, ÖBB галт тэрэг, Klimaticket',
    icon: 'Train',
    category: 'transport',
    summary: 'Вена хотын метро, трамвай, автобусны семестрийн хөнгөлөлт, ÖBB Vorteilscard, Австри даяар зорчих Klimaticket.',
    keyTakeaways: [
      'Вена хотод 26 нас хүртэлх оюутнуудад семестрийн тасалбар ердөө €75',
      'ÖBB Vorteilscard Jugend (<26 нас) нь галт тэрэгний билетийг 50% хөнгөлдөг (€19 / жил)',
      'WienMobil апп-аар дижитал билетээ хадгалж болно'
    ],
    contentMarkdown: `### 7.1 Тээврийн Картын Сонголтууд
Вена хот нь дэлхийн хамгийн шилдэг нийтийн тээврийн дэд бүтэцтэй. Оюутны семестрийн картын хүчинтэй хугацаа нь 9-р сарын 1-ээс 1-р сарын 31, эсвэл 2-р сарын 1-ээс 6-р сарын 30 хүртэл байна.`,
    officialLinks: [
      { label: 'Wiener Linien Онлайн Дэлгүүр', url: 'https://shop.wienerlinien.at/' },
      { label: 'ÖBB Галт Тэрэг', url: 'https://www.oebb.at/' }
    ]
  },
  {
    id: 'chapter-8-living',
    chapterNumber: 8,
    title: 'Өдөр Тутмын Амьдрал & Соёлын Зөвлөмж',
    subtitle: 'Австри дахь амьдралын хэв маяг, хууль дүрмийн онцлог',
    icon: 'Compass',
    category: 'living',
    summary: 'Ням гарагт бүх дэлгүүр амардаг дүрэм, хог хаягдлын ангилан ялгалт, тайван цагийн хууль (Ruhezeit), соёлын ялгаа.',
    keyTakeaways: [
      'Австрийн бүх супермаркет ням гараг бүр хаалттай байдаг',
      '22:00 цагаас хойш орон сууц, дотуур байранд чанга дуу чимээ гаргахыг хуулиар хориглодог (Ruhezeit)',
      'Цоргоны ус 100% уулын цэнгэг байгалийн ундарга бөгөөд шууд уухад зориулагдсан'
    ],
    contentMarkdown: `### 8.1 Соёлын Чухал Дүрэмүүд
Австрид амьдрах үед цаг баримтлах, чимээгүй цагийн дүрэм (Ruhezeit), хог ангилах (Цаас, хуванцар, шил, био хог) зэрэг өдөр тутмын соёлыг баримтлах нь маш чухал байдаг.`,
    officialLinks: [
      { label: 'Вена хотын амьдралын дүрэм (Wien.gv.at)', url: 'https://www.wien.gv.at/' }
    ]
  },
  {
    id: 'chapter-9-emergency',
    chapterNumber: 9,
    title: 'Яаралтай Тусламж & Монгол Улсын ЭСЯ',
    subtitle: 'Ослын дугаарууд, Элчин сайдын яамны консулын үйлчилгээ',
    icon: 'PhoneCall',
    category: 'emergency',
    summary: 'Цагдаа (133), Түргэн тусламж (144), Онцгой байдал (112), Монгол Улсаас Австри улсад суугаа ЭСЯ-ны хаяг, утас.',
    keyTakeaways: [
      'Европын нэгдсэн онцгой байдлын дугаар: 112',
      'Түргэн тусламж: 144 | Цагдаа: 133 | Гал түймэр: 122',
      'Монгол Улсын Элчин Сайдын Яам: Fasangasse 45, 1030 Wien (+43 1 535 28 07)'
    ],
    contentMarkdown: `### 9.1 Элчин Сайдын Яамны Консулын Үйлчилгээ
Паспорт сунгах, шинээр авах, итгэмжлэл баталгаажуулах, төрсний гэрчилгээ авах зэрэг бүх төрлийн консулын үйлчилгээг Вена хот дахь Монгол Улсын ЭСЯ-аар дамжуулан авна.`,
    officialLinks: [
      { label: 'Монгол Улсын Элчин Сайдын Яам (Вена)', url: 'https://vienna.embassy.mn/' }
    ]
  }
];
