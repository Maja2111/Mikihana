import React from 'react';
import '@/index.scss';
import { Header } from '@components/Header';
import Carousel from '@components/Carousel';
import { Footer } from '@components/Footer';

const MustRead = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Must Read Books</h1>
      </header>
      <main>
        <p>Here you will find our must-read recommendations.</p>
        <input type="search" name="mustRead" id="mustRead" />
        <Carousel />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MustRead;
