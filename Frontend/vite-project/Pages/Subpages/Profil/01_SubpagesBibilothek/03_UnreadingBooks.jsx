import React from 'react';
import '@/index.scss';
import { Header } from '@/Components/Header';
import { Footer } from '@/Components/Footer';
import { handleAddBook } from '@/Components/Function';
import { GalleryWithPlaceholder } from '@/Components/GalleryWithPlaceholder';

const UnreadingBooks = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Your UnreadingBooks</h1>
      </header>
      <main>
        <GalleryWithPlaceholder onAddBook={handleAddBook} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default UnreadingBooks;
