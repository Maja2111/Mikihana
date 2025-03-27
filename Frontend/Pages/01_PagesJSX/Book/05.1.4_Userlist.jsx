//Entwicklerimporte
import React from 'react';
import { Outlet } from 'react-router-dom';
//Componentsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { GalleryWithPlaceholder } from '@components/Gallery.jsx';
import { NavigateToLibrary } from '@components/NavigateTo.jsx';
//Stylingimporte
import '@/index.scss';

const Userlist = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>your list</h1>
      </header>
      <main className="main">
        <GalleryWithPlaceholder listType="userlist" />
        <Outlet />
      </main>
      <NavigateToLibrary />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Userlist;
