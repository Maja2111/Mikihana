import React from 'react';
import '@/index.scss';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { GalleryWithPlaceholder } from '@components/GalleryWithPlaceholder.jsx';

const Userlist = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Your §{Userlist}</h1>
      </header>
      <main>
        <GalleryWithPlaceholder />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Userlist;
