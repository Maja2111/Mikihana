import React from 'react';
import '@/index.scss';
import { Header } from '@/Components/Header';
import { Footer } from '@/Components/Footer';
import { Gallery } from '@/Components/Gallery';

const Favourites = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Your Favourites</h1>
      </header>
      <main>
        <Gallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Favourites;
