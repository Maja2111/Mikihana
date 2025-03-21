import React from 'react';
import { useNavigate } from 'react-router-dom';

import '@/index.scss';
import '@pagestyle/BrandNew.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { SearchBar } from '@components/SearchBar';
import { Carousel } from '@components/Carousel';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';

const BrandNewMovie = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <h1>Hello user, welcome to our brand new movies and series</h1>
        <section>
          <SearchBar />
          <Carousel />
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
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={<NavigateToAllSearch />}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default BrandNewMovie;
