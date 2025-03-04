export const pageStats = {
  year: [
    { month: 'Jan', value: 200 },
    { month: 'Feb', value: 400 },
    { month: 'Mar', value: 540 },
    { month: 'Apr', value: 800 },
    { month: 'May', value: 980 },
    { month: 'Jun', value: 1200 },
    { month: 'Jul', value: 800 },
    { month: 'Aug', value: 600 },
    { month: 'Sep', value: 400 },
    { month: 'Oct', value: 300 },
    { month: 'Nov', value: 200 },
    { month: 'Dec', value: 100 },
  ],
  month: (() => {
    const days = [];
    const currentDate = new Date();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, value: Math.floor(Math.random() * 100) });
    }
    return days;
  })(),
};

export const bookStats = {
  year: [
    { month: 'Jan', value: 1 },
    { month: 'Feb', value: 2 },
    { month: 'Mar', value: 1 },
    { month: 'Apr', value: 3 },
    { month: 'May', value: 2 },
    { month: 'Jun', value: 4 },
    { month: 'Jul', value: 3 },
    { month: 'Aug', value: 2 },
    { month: 'Sep', value: 1 },
    { month: 'Oct', value: 2 },
    { month: 'Nov', value: 3 },
    { month: 'Dec', value: 4 },
  ],
  month: (() => {
    const days = [];
    const currentDate = new Date();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, value: Math.floor(Math.random() * 2) });
    }
    return days;
  })(),
};
export const libraryResults = [
  { id: 1, title: 'Buch 1', image: 'path/to/image1.jpg' },
  { id: 2, title: 'Buch 2', image: 'path/to/image2.jpg' },
];

export const videoLibraryResults = [
  { id: 1, title: 'Video 1', image: 'path/to/image3.jpg' },
  { id: 2, title: 'Video 2', image: 'path/to/image4.jpg' },
];

export const discothequeResults = [
  { id: 1, title: 'Musik 1', image: 'path/to/image5.jpg' },
  { id: 2, title: 'Musik 2', image: 'path/to/image6.jpg' },
];

export const mediaCards = [
  {
    id: 1,
    title: 'Buchcover',
    text: 'Das ist ein Buch.',
    imageUrl:
      '/Upload/symbol-fuer-offenes-buch-buchmodell-mit-weissen-seiten_165079-2511.avif',
  },
  {
    id: 2,
    title: 'Filmcover',
    text: 'Das ist ein Film.',
    imageUrl:
      '/Upload/83987435-filmstreifen-mit-der-filmrolle-und-popcorn-lokalisiert-auf-weißem-hintergrund.jpg',
  },
  {
    id: 3,
    title: 'Musik LP',
    text: 'Das ist eine Musik-LP.',
    imageUrl:
      '/Upload/vinyl-schallplatte-square-nussbaum-schwarz_madeindesign_399685_original.webp',
  },
];

export const carouselImages = [
  {
    url: '/Upload/symbol-fuer-offenes-buch-buchmodell-mit-weissen-seiten_165079-2511.avif',
    alt: 'Buchcover',
  },
  {
    url: '/Upload/83987435-filmstreifen-mit-der-filmrolle-und-popcorn-lokalisiert-auf-weißem-hintergrund.jpg',
    alt: 'Filmcover',
  },
  {
    url: '/Upload/vinyl-schallplatte-square-nussbaum-schwarz_madeindesign_399685_original.webp',
    alt: 'Musik LP',
  },
];

export const galleryImages = [
  'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
  'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp',
  'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp',
  'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp',
  'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp',
];

export const goals = [
  { id: 1, type: 'book', target: 5, interval: 'yearly' },
  { id: 2, type: 'pages', target: 100, interval: 'monthly' },
];

export const loadingData = {
  bar: {
    progress: 75,
  },
  circle: {
    progress: 45,
  },
};

export const readingBooks = [
  '/Upload/die-fluesse-von-london-graphic-novel-taschenbuch-ben-aaronovitch.jpeg',
  '/Upload/fourth-wing-taschenbuch-rebecca-yarros-englisch.jpeg',
  '/Upload/iron-flame-taschenbuch-rebecca-yarros-englisch.jpeg',
];
