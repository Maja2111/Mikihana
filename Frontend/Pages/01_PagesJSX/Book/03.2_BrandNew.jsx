import React from 'react';

import '@/index.scss';
import '@pagestyle/BrandNew.scss';

import { Header } from '@components/Header';
import { Carousel } from '@components/Carousel';
import { Footer } from '@components/Footer';
import { SearchBar } from '@components/SearchBar';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';

const BrandNew = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main className="main">
        <h1>Hello user, books new publications</h1>
        <section className="section">
          <SearchBar />
          <Carousel />
          <div className="description">
            <p>
              {' '}
              {/*aus dem Backend die Beschreibung der Bücher, die gerade neu erschienen sind, holen*/}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              nesciunt itaque enim corrupti culpa? Porro maiores, fuga
              veritatis, dolores cumque possimus laborum error dignissimos ex,
              iste quidem dolore? Ex, similique?
            </p>
          </div>
        </section>
        <NavigateToAllSearch />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BrandNew;
