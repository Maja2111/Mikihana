//Entwicklerimporte
import React from 'react';

//Componentsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { GalleryWithPlaceholder } from '@components/GalleryWithPlaceholder.jsx';

//Stylingimporte
import '@/index.scss';

const Wishlist = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Your Wishlist</h1>
      </header>
      <main>
        <GalleryWithPlaceholder />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Wishlist;
