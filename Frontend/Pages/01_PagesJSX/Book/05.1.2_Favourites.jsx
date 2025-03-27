import React from 'react';
import '@/index.scss';
import { Outlet } from 'react-router-dom';

import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';

import { GalleryWithPlaceholder } from '@components/Gallery.jsx';
import { NavigateToLibrary } from '@components/NavigateTo.jsx';

const Favourites = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Your Favourites</h1>
      </header>
      <main className="main">
        <GalleryWithPlaceholder listType="favourites" />
        <Outlet />
      </main>
      <NavigateToLibrary />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Favourites;
