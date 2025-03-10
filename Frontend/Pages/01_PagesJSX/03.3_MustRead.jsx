import React, { useState } from 'react';

import '@/index.scss';

import { Header } from '@components/Header';
import Carousel from '@components/Carousel';
import { Footer } from '@components/Footer';
import { SearchBar } from '@components/SearchBar';
import { NavigateToAllSerach } from '@components/NavigateTo.jsx';

const MustRead = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <section>
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
        <NavigateToAllSerach />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MustRead;
