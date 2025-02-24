import React from 'react';
import '../../../src/index.scss';
import { Header } from '../../../Components/Header';
import { Carousel } from '../../../Components/carousel';
import { Footer } from '../../../Components/Footer';

const BrandNew = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Hello ${User}, books new publications</h1>
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
