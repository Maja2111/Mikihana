import React from 'react';

import '@/index.scss';

import { useColor } from '@context/ColorContext';
import { Header } from '@components/Header';
import { Carousel } from '@components/Carousel';
import { Footer } from '@components/Footer';
import { SearchBar } from '@components/SearchBar';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';

const MustRead = () => {
  const { colorScheme } = useColor();
  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <section className="section">
          <h1>Here you will find our must-read recommendations.</h1>
          <SearchBar />
          <Carousel />
          <div className="description">
            <p>
              {/* Beschreibung der Bücher, die man gelesen haben sollte */}
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

export default MustRead;
