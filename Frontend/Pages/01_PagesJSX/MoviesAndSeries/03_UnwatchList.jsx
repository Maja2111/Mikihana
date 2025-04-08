//Entwicklerimporte
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
//Componentsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { GalleryWithPlaceholderMovie } from '@components/Gallery.jsx';
import { NavigateToLibrary } from '@components/NavigateTo.jsx';

import { useColor } from '@context/ColorContext';
//Stylingimporte
import '@/index.scss';

const UnwatchList = () => {
  const { color } = useColor();
  const { t } = useTranslation();
  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
        <h1>{t('unwatchList.title')}</h1>
      </header>
      <main className="main">
        <GalleryWithPlaceholderMovie listType="unwatchlist" />
        <Outlet />
      </main>
      <NavigateToLibrary />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default UnwatchList;
