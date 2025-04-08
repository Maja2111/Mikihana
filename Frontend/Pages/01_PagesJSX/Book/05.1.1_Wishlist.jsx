//Entwicklerimporte
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//Componentsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { GalleryWithPlaceholder } from '@components/Gallery.jsx';
import { NavigateToLibrary } from '@components/NavigateTo.jsx';

import { useColor } from '@context/ColorContext';

//Stylingimporte
import '@/index.scss';

const Wishlist = () => {
  const { colorScheme } = useColor();
  const { t } = useTranslation();
  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
        <h1>{t('wishlist.title')}</h1>
      </header>
      <main className="main">
        <GalleryWithPlaceholder listType="wishlist" />
        <Outlet />
      </main>
      <NavigateToLibrary />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Wishlist;
