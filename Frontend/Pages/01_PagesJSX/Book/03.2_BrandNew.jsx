import React from 'react';

import '@/index.scss';

import { Header } from '@components/Header';
import { Carousel } from '@components/Carousel.jsx';
import { Footer } from '@components/Footer';
import { SearchBar } from '@components/SearchBar';
import Description from '@components/Description.jsx';
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

export default BrandNew;
