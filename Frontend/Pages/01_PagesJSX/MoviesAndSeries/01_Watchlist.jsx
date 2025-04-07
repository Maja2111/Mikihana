//Entwicklerimporte
import React from 'react';
import { Outlet } from 'react-router-dom';

//Componentsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { GalleryWithPlaceholderMovie } from '@components/Gallery.jsx';
import { NavigateToLibrary } from '@components/NavigateTo.jsx';

import { useColor } from '@context/ColorContext';

//Stylingimporte
import '@/index.scss';

const Watchlist = () => {
  const { colorScheme } = useColor();
  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
        <h1>Your watchlist</h1>
      </header>
      <main className="main">
        <GalleryWithPlaceholderMovie listType="watchlist" />
        <Outlet />
      </main>
      <NavigateToLibrary />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Watchlist;
