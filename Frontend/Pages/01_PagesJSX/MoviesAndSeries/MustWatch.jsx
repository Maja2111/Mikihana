import React, { useState } from 'react';

import '@/index.scss';

import { Header } from '@components/Header';
import { Carousel } from '@components/Carousel';
import { Footer } from '@components/Footer';
import { SearchBar } from '@components/SearchBar';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';

const MustWatch = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main className="main">
        <section className="section">
          <h1>Here you will find the most popular movies and series</h1>
          <SearchBar />
          <Carousel />
          <div className="description">
            <p>
              {/* Beschreibung der Filme und Serien, die man gesehen haben sollte */}
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
export default MustWatch;
