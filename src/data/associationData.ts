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
        color: '#037EF3',
        bg: '#EFF6FF',
        description: 'Австри улсын боловсрол, их сургуулийн элсэлт, тэтгэлэг, амьдрах орчны үнэн бодит мэдлэг, туршлага, боломжуудыг нээлттэй хуваалцана.'
      },
      {
        id: 'supporting',
        title: 'Дэмжье',
        titleEn: 'Supporting',
        icon: 'HeartHandshake',
        color: '#F85A40',
        bg: '#FFF7ED',
        description: 'Оюутан залуусын виз, даатгал, дотуур байр, 20 цагийн ажил эрхлэлт болон хууль эрх зүйн баталгааг бүх шатанд зөвлөн дэмжинэ.'
      },
      {
        id: 'growing',
        title: 'Хамтдаа хөгжье',
        titleEn: 'Growing Together',
        icon: 'Sparkles',
        color: '#00C16E',
        bg: '#F0FDF4',
        description: 'Бие биенээсээ суралцан нэгдэж, олон улсын түвшний мэргэжилтэн, манлайлагч болон Австри дахь Монголчуудын нийгэмлэгээрээ хамтдаа өсөн дэвжинэ.'
      }
    ]
  },
  vision: {
    title: 'Алсын Хараа (Vision)',
    text: 'Бид эв нэгдлийг эрхэмлэн, мэдлэгийг түгээж, оюутан залуусаа дэмжин, шинэлэг бүхний түүчээ болж хамтдаа хөгжинө.'
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
    title: 'Австри дахь Монгол Оюутны Холбоо фэйсбүүк групп',
    handle: 'AmoxAustriaGroup',
    url: 'https://www.facebook.com/groups/AmoxAustriaGroup',
    category: 'community',
    badge: 'Албан ёсны групп',
    description: 'Австри дахь оюутнуудын хамгийн том нэгдсэн коммюнити: байр, ажил, сургуулийн зөвлөгөө, зар мэдээлэл.',
    actionText: 'Группт нэгдэх'
  },
  {
    id: 'instagram',
    title: 'AMOX Instagram хаяг',
    handle: '@amox_at',
    url: 'https://www.instagram.com/amox_at/',
    category: 'social',
    badge: 'Instagram',
    description: 'Оюутны амьдралын өдөр тутмын мэдээлэл, шинэ арга хэмжээний зураг, видео болон зарлалууд.',
    actionText: 'Дагах (@amox_at)'
  },
  {
    id: 'youtube',
    title: 'AMOX YouTube суваг',
    handle: 'AMOX Austria',
    url: 'https://www.youtube.com/channel/UCx2WabubQ10shpkeOeLUpbQ/videos',
    category: 'video',
    badge: 'YouTube',
    description: 'Их сургуулиудын танилцуулга, оюутны подкаст бичлэгүүд болон Австри дахь амьдралын контентууд.',
    actionText: 'Сувагт бүртгүүлэх'
  },
  {
    id: 'podcast',
    title: 'Хөтлөн явуулдаг подкаст хаяг',
    handle: 'AMOX Podcast',
    url: 'https://soundcloud.com/amox-podcast',
    category: 'podcast',
    badge: 'SoundCloud Podcast',
    description: 'Австрийн шилдэг оюутан, төгсөгчдийн бодит туршлага, суралцах арга барил, карьерын ярилцлагууд.',
    actionText: 'Подкаст сонсох'
  },
  {
    id: 'study-video',
    title: 'Австри улсад суралцах видео мэдээлэл',
    handle: 'YouTube Video',
    url: 'https://youtu.be/j_DwiLspu08',
    category: 'video',
    badge: 'Видео Хөтөч',
    description: 'Австри улсад суралцахаар бэлтгэж буй залууст зориулсан албан ёсны видео гарын авлага, зөвлөмж.',
    actionText: 'Видеог үзэх'
  },
  {
    id: 'study-article',
    title: 'Австри улсад суралцах нийтлэл',
    handle: 'Google Docs Guide',
    url: 'https://docs.google.com/document/d/18X8c1iTN8rQPaVyUCq34wE5ApBgyHJvyvdSv4IGEWbY/edit?usp=sharing',
    category: 'guide',
    badge: 'Цогц Нийтлэл',
    description: 'Австрийн их сургуульд элсэхээс эхлээд виз, байр авах хүртэлх алхамчилсан цогц нийтлэл, гарын авлага.',
    actionText: 'Нийтлэлийг унших'
  }
];
