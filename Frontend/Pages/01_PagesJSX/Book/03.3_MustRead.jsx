import React, { useState } from 'react';

import '@/index.scss';

import { useColor } from '@context/ColorContext';
import { Header } from '@components/Header';
import { Carousel } from '@components/Carousel';
import { Footer } from '@components/Footer';
import { SearchBar } from '@components/SearchBar';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';
import Description from '@components/Description.jsx';

const MustRead = () => {
  const { colorScheme } = useColor();
  const [currentBookId, setCurrentBookId] = useState(null);

  const handleBookChange = (book) => {
    console.log('MustRead received book:', book);
    setCurrentBookId(book?.id || book?._id || null);
  };

  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <section className="section">
          <h1>Here you will find our must-read recommendations.</h1>
          <SearchBar />
          <Carousel onBookChange={handleBookChange} />
          <Description bookId={currentBookId} />
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
