import React from 'react';
import '@/index.scss';
import { Header } from '@components/Header';
import Carousel from '@components/Carousel';
import { Footer } from '@components/Footer';

const BrandNew = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Hello User, books new publications</h1>
      </header>
      <main>
        <h1>Brandnew</h1>
        <input type="search" name="brandNewRead" id="randNewRead" />
        <Carousel />
        <img
          src="/Upload/symbol-fuer-offenes-buch-buchmodell-mit-weissen-seiten_165079-2511.avif"
          alt="openBook"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BrandNew;
