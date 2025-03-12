import React from 'react';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { GalleryWithPlaceholder } from '@components/Gallery.jsx';
import { NavigateToLibrary } from '@components/NavigateTo.jsx';
import { readingBooks } from '@/mockData.js'; // Assuming readingBooks is defined in mockData.js

const UnreadBooks = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Your unread books</h1>
      </header>
      <main>
        <GalleryWithPlaceholder images={readingBooks} />
      </main>
      <NavigateToLibrary />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default UnreadBooks;
