import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import '@/index.scss';

import { useColor } from '@context/ColorContext';
import { Header } from '@components/Header';
import { Carousel } from '@components/Carousel.jsx';
import { Footer } from '@components/Footer';
import { SearchBar } from '@components/SearchBar';
import Description from '@components/Description.jsx';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';

const BrandNew = () => {
  const { colorScheme } = useColor();
  const { t } = useTranslation();
  const [currentBookId, setCurrentBookId] = useState(null);

  const handleBookChange = (book) => {
    console.log('Brandnew received book:', book);
    setCurrentBookId(book?.id || book?._id || null);
  };

  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <h1>{t('brandNew.welcomeMessage')}</h1>
        <section className="section">
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

export default BrandNew;
