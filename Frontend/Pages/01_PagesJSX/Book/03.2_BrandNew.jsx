import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/index.scss';
import '@pagestyle/BrandNew.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Header } from '@components/Header';
import Carousel from '@components/Carousel';
import { Footer } from '@components/Footer';
import { SearchBar } from '@components/SearchBar';

const BrandNew = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleNavigateToAllSearch = () => {
    navigate('/allsearch');
  };
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <h1>Hello User, books new publications</h1>
        <section>
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
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={handleNavigateToAllSearch}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BrandNew;
