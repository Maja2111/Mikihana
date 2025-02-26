import React from 'react';
import '@/index.scss';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { handleAddBook } from '@components/Function.jsx';
import { GalleryWithPlaceholder } from '@components/GalleryWithPlaceholder.jsx';

const Wishlist = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Your Wishlist</h1>
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
export default Wishlist;
