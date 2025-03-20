import React from 'react';
import { Outlet } from 'react-router-dom';

import '@/index.scss';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { GalleryWithPlaceholder } from '@components/Gallery.jsx';
import { NavigateToLibrary } from '@components/NavigateTo.jsx';

const Userlist = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>your list</h1>
      </header>
      <main>
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
