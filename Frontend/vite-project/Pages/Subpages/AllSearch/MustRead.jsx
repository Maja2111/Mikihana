import React from 'react';
import '../../../src/index.scss';
import { Header } from '../../../Components/Header.jsx';
import { Carousel } from '../../../Components/carousel.jsx';
import { Footer } from '../../../Components/Footer.jsx';

const MustRead = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Hello ${User}, Welcome to Must Reads</h1>
      </header>
      <main>
        <h1>Must Reads</h1>
        <input type="search" name="mustReadSearch" id="mustReadSearch" />
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
export default MustRead;
