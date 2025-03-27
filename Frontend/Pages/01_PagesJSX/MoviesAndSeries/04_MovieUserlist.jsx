//Entwicklerimporte
import React from 'react';
import { Outlet } from 'react-router-dom';
//Componentsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { GalleryWithPlaceholderMovie } from '@components/Gallery.jsx';
import { NavigateToLibrary } from '@components/NavigateTo.jsx';
//Stylingimporte
import '@/index.scss';

const MovieUserlist = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>your list</h1>
      </header>
      <main className="main">
        <GalleryWithPlaceholderMovie listType="movieuserlist" />
        <Outlet />
      </main>
      <NavigateToLibrary />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default MovieUserlist;
