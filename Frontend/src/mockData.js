export const pageStatsYear = [
  { month: 'Jan', value: 200 },
  { month: 'Feb', value: 400 },
  { month: 'Mar', value: 540 },
  { month: 'Apr', value: 800 },
  { month: 'May', value: 980 },
  { month: 'Jun', value: 879 },
  { month: 'Jul', value: 800 },
  { month: 'Aug', value: 600 },
  { month: 'Sep', value: 400 },
  { month: 'Oct', value: 300 },
  { month: 'Nov', value: 200 },
  { month: 'Dec', value: 100 },
];

export const pageStatsMonth = [
  { week: 'week 1', value: 200 },
  { week: 'week 2', value: 400 },
  { week: 'week 3', value: 540 },
  { week: 'week 4', value: 800 },

  // { day: 1, value: 100 },
  // { day: 2, value: 200 },
  // { day: 3, value: 300 },
  // { day: 4, value: 50 },
  // { day: 5, value: 100 },
  // { day: 6, value: 150 },
  // { day: 7, value: 200 },
  // { day: 8, value: 250 },
  // { day: 9, value: 124 },
  // { day: 10, value: 150 },
  // { day: 11, value: 200 },
  // { day: 12, value: 230 },
  // { day: 13, value: 250 },
  // { day: 14, value: 85 },
  // { day: 15, value: 95 },
  // { day: 16, value: 100 },
  // { day: 17, value: 150 },
  // { day: 18, value: 0 },
  // { day: 19, value: 65 },
  // { day: 20, value: 75 },
  // { day: 21, value: 97 },
  // { day: 22, value: 125 },
  // { day: 23, value: 150 },
  // { day: 24, value: 175 },
  // { day: 25, value: 200 },
  // { day: 26, value: 225 },
  // { day: 27, value: 195 },
  // { day: 28, value: 200 },
  // { day: 29, value: 220 },
  // { day: 30, value: 135 },
];

// export const pageStatsMonth = [
//   (() => {
//     const days = [];
//     const currentDate = new Date();
//     const daysInMonth = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth() + 1,
//       0
//     ).getDate();

//     for (let i = 1; i <= daysInMonth; i++) {
//       days.push({ day: i, value: Math.floor(Math.random() * 100) });
//     }
//     return days;
//   })(),
// ];

export const bookStatsYear = [
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
];

export const bookStatsMonth = [
  { week: 'week 1', value: 1 },
  { week: 'week 2', value: 2 },
  { week: 'week 3', value: 1 },
  { week: 'week 4', value: 3 },
  // { day: 1, value: 0.3 },
  // { day: 2, value: 0.5 },
  // { day: 3, value: 0.2 },
  // { day: 4, value: 0.6 },
  // { day: 5, value: 0.4 },
  // { day: 6, value: 0.7 },
  // { day: 7, value: 0.8 },
  // { day: 8, value: 0.9 },
  // { day: 9, value: 0.1 },
  // { day: 10, value: 0.2 },
  // { day: 11, value: 0.3 },
  // { day: 12, value: 0.4 },
  // { day: 13, value: 0.5 },
  // { day: 14, value: 0.6 },
  // { day: 15, value: 0.7 },
  // { day: 16, value: 0.8 },
  // { day: 17, value: 0.9 },
  // { day: 18, value: 0.1 },
  // { day: 19, value: 0.2 },
  // { day: 20, value: 0.3 },
  // { day: 21, value: 0.4 },
  // { day: 22, value: 0.5 },
  // { day: 23, value: 0.6 },
  // { day: 24, value: 0.7 },
  // { day: 25, value: 0.8 },
  // { day: 26, value: 0.9 },
  // { day: 27, value: 0.1 },
  // { day: 28, value: 0.2 },
  // { day: 29, value: 0.3 },
  // { day: 30, value: 0.4 },
];

// export const bookStatsMonth = [
//   (() => {
//     const days = [];
//     const currentDate = new Date();
//     const daysInMonth = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth() + 1,
//       0
//     ).getDate();

//     for (let i = 1; i <= daysInMonth; i++) {
//       days.push({ day: i, value: Math.floor(Math.random() * 2) });
//     }
//     return days;
//   })(),
// ];

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

export const mediaCardsNew = [
  {
    id: 1,
    title: 'New Books',
    text: 'discover new books',
    imageUrl: '/Upload/ÄffchenBook.jpg',
  },
  {
    id: 2,
    title: 'New Movies',
    text: 'discover new movies',
    imageUrl: '/Upload/ÄffchenMovie.jpg',
  },
  {
    id: 3,
    title: 'New Music',
    text: 'discover new music',
    imageUrl: '/Upload/ÄffchenMusic.jpg',
  },
];

export const mediaCardsMust = [
  {
    id: 1,
    title: 'Must Reads',
    text: 'discover the must reads',
    imageUrl: '/Upload/ÄffchenBook.jpg',
  },
  {
    id: 2,
    title: 'Must Watch',
    text: 'discover the must watch',
    imageUrl: '/Upload/ÄffchenMovie.jpg',
  },
  {
    id: 3,
    title: 'Must Listen',
    text: 'discover the must listen',
    imageUrl: '/Upload/ÄffchenMusic.jpg',
  },
];

export const carouselImages = [
  {
    url: '/Upload/Elitäre.jpg',
    alt: 'bookcover',
  },
  {
    url: '/Upload/Problemkind.jpg',
    alt: 'bookcover',
  },
  {
    url: '/Upload/gefallenerEngel.jpg',
    alt: 'bookcover',
  },
  {
    url: '/Upload/Winterliebe.jpg',
    alt: 'bookcover',
  },
  {
    url: '/Upload/Hearts.jpg',
    alt: 'bookcover',
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

const books = [
  { title: 'Book One', author: 'Author One' },
  { title: 'Book Two', author: 'Author Two' },
  { title: 'Book Three', author: 'Author Three' },
  { title: 'Book Four', author: 'Author Four' },
  { title: 'Book Five', author: 'Author Five' },
];

export default books;
