import React from 'react';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { SearchBar } from '@components/SearchBar';
import Description from '@components/Description.jsx';
import { MovieCarousel } from '@components/Carousel.jsx';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';

import { useColor } from '@context/ColorContext';

import '@/index.scss';

const BrandNewMovie = () => {
  const { colorScheme } = useColor();
  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <h1>Hello user, welcome to our brand new movies and series</h1>
        <section className="section">
          <SearchBar />
          <MovieCarousel />
          <Description />
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
