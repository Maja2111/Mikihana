import React from 'react';

import '@/index.scss';
import '@pagestyle/BrandNew.scss';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { SearchBar } from '@components/SearchBar';
import { MovieCarousel } from '@components/Carousel.jsx';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';

const BrandNewMovie = () => {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <h1>Hello user, welcome to our brand new movies and series</h1>
        <section>
          <SearchBar />
          <MovieCarousel />
          <div className="description">
            <p>
              {' '}
              {/*aus dem Backend die Beschreibung der Filme und Serien, die gerade neu erschienen sind, holen*/}
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
export default BrandNewMovie;
