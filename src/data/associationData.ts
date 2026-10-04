export interface ChannelItem {
  id: string;
  title: string;
  handle?: string;
  url: string;
  category: 'social' | 'community' | 'video' | 'podcast' | 'guide';
  badge: string;
  description: string;
  actionText: string;
}

export const AMOX_MISSION_VISION = {
  mission: {
    title: 'Эрхэм Зорилго (Mission)',
    motto: 'Хуваалцъя, Дэмжье, Хамтдаа хөгжье',
    mottoEn: 'Sharing, Supporting, Growing together (SSG)',
    short: 'SSG',
    pillars: [
      {
        id: 'sharing',
        title: 'Хуваалцъя',
        titleEn: 'Sharing',
        icon: 'Share2',
        color: '#3347FF',
        bg: '#EEF0FF',
        description: 'Австрийн боловсрол, элсэлт, тэтгэлэг, амьдралын талаар өөрсдийн туршлагаас олсон бодит мэдээллийг нээлттэй хуваалцана.'
      },
      {
        id: 'supporting',
        title: 'Дэмжье',
        titleEn: 'Supporting',
        icon: 'HeartHandshake',
        color: '#F0643A',
        bg: '#FFE9E5',
        description: 'Виз, даатгал, байр, цагийн ажил зэрэг хүндрэлтэй үед ахмад оюутнууд зөвлөгөө өгч, хажууд нь байна.'
      },
      {
        id: 'growing',
        title: 'Хамтдаа хөгжье',
        titleEn: 'Growing Together',
        icon: 'Sparkles',
        color: '#12926B',
        bg: '#DDF6EE',
        description: 'Бие биенээсээ суралцаж, мэргэжлийн болон хувийн хөгжлөө хамт дэмжиж, Австри дахь Монгол хамт олноо хүчирхэгжүүлнэ.'
      }
    ]
  },
  vision: {
    title: 'Алсын Хараа (Vision)',
    text: 'Нэгдэж, мэдлэгээ хуваалцаж, бие биенээ дэмжин хамтдаа өсөх нь манай зорилго.'
  },
  germanStatement: {
    badge: 'Offizielle Vereinsbeschreibung & Leitbild',
    paragraphs: [
      'Wir sind der offizielle Studentenverein der mongolischen StudentInnen in Österreich und versuchen in unserer Rolle als gemeinnützige Organisation die Interessen der mongolischen Studenten in Österreich im Rahmen unserer Möglichkeiten zu unterstützen und zu repräsentieren.',
      'Die AMOX (Австри дахь Монголын Оюутны Холбоо) hat sich zum Ziel gesetzt, studentische Veranstaltungen zu vernetzen, gegenseitigen Austausch von Informationen und Erfahrungen zu fördern und in Österreich lebende Mongolen - auch Nichtstudenten - nach unseren Möglichkeiten zu unterstützen.',
      'In der Vergangenheit haben wir zahlreichen StudentInnen geholfen in Österreich Fuß zu fassen, ebenso haben wir viele Veranstaltungen sportlicher wie kultureller Herkunft für uns und Gleichgesinnte organisiert.',
      'Wir heißen jede/n willkommen, der/die uns unterstützen will bzw. mit uns zusammenarbeiten möchte.'
    ]
  }
};

export const OFFICIAL_CHANNELS: ChannelItem[] = [
  {
    id: 'facebook-group',
    title: 'AMOX Facebook групп',
    handle: 'AmoxAustriaGroup',
    url: 'https://www.facebook.com/groups/AmoxAustriaGroup',
    category: 'community',
    badge: 'Албан ёсны групп',
    description: 'Австри дахь Монгол оюутнуудын хамгийн том групп. Байр, ажил, сургуулийн талаар асууж, зар мэдээлэл авах газар.',
    actionText: 'Группт нэгдэх'
  },
  {
    id: 'instagram',
    title: 'AMOX Instagram хаяг',
    handle: '@amox_at',
    url: 'https://www.instagram.com/amox_at/',
    category: 'social',
    badge: 'Instagram',
    description: 'Арга хэмжээний зураг, видео болон шинэ мэдээ.',
    actionText: 'Дагах'
  },
  {
    id: 'youtube',
    title: 'AMOX YouTube суваг',
    handle: 'AMOX Austria',
    url: 'https://www.youtube.com/channel/UCx2WabubQ10shpkeOeLUpbQ/videos',
    category: 'video',
    badge: 'YouTube',
    description: 'Их сургуулиудын танилцуулга, оюутнуудын ярилцлага, Австри дахь амьдралын бичлэгүүд.',
    actionText: 'Суваг үзэх'
  },
  {
    id: 'podcast',
    title: 'AMOX подкаст',
    handle: 'AMOX Podcast',
    url: 'https://soundcloud.com/amox-podcast',
    category: 'podcast',
    badge: 'SoundCloud Podcast',
    description: 'Австрид суралцсан оюутан, төгсөгчдийн туршлага, карьерын түүх.',
    actionText: 'Сонсох'
  },
  {
    id: 'study-video',
    title: 'Австрид суралцах нь — видео танилцуулга',
    handle: 'YouTube Video',
    url: 'https://youtu.be/j_DwiLspu08',
    category: 'video',
    badge: 'Видео Хөтөч',
    description: 'Австрид суралцахаар бэлдэж буй хүмүүст зориулсан товч видео гарын авлага.',
    actionText: 'Үзэх'
  },
  {
    id: 'study-article',
    title: 'Австрид суралцах нийтлэл',
    handle: 'Google Docs Guide',
    url: 'https://docs.google.com/document/d/18X8c1iTN8rQPaVyUCq34wE5ApBgyHJvyvdSv4IGEWbY/edit?usp=sharing',
    category: 'guide',
    badge: 'Цогц Нийтлэл',
    description: 'Элсэлтээс эхлээд виз, байр хүртэл алхам алхмаар тайлбарласан гарын авлага.',
    actionText: 'Унших'
  }
];
