import React from 'react';
import { useColor } from '@context/ColorContext';

import '@/index.scss';

import { Header } from '@components/Header';
import { Carousel } from '@components/Carousel';
import { Footer } from '@components/Footer';
import { SearchBar } from '@components/SearchBar';
import Description from '@components/Description.jsx';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';

const MustWatch = () => {
  const { colorScheme } = useColor();
  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <section className="section">
          <h1>Here you will find the most popular movies and series</h1>
          <SearchBar />
          <Carousel />
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
export default MustWatch;
