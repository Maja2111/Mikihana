import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { GalleryWithPlaceholder } from '@components/Gallery.jsx';
import { NavigateToLibrary } from '@components/NavigateTo.jsx';

const UnreadBooks = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Your unread books</h1>
      </header>
      <main>
        <GalleryWithPlaceholder listType="unreadbooks" />
        <Outlet />
      </main>
      <NavigateToLibrary />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default UnreadBooks;
