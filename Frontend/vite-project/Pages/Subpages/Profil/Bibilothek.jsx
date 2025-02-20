//subpage von der Homepage
//Bibilothek

import React from 'react';
import '../../../src/index.scss';
import { Header } from '../../../Components/Header.jsx';
import { Footer } from '../../../Components/Footer.jsx';
import { Gallery } from '../../../Components/Gallery.jsx';

const Library = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Library</h1>
      </header>
      <main>
        <section className="wishlist">
          <h1>Wishlist</h1>
          <Gallery />
        </section>
        <section className="favourites">
          <h1>Favourites</h1>
          <Gallery />
        </section>
        <section className="unreadBooks">
          <h1>Unread Books</h1>
          <Gallery />
        </section>
        <section className="userlist">
          <h1>Userlist</h1>
          <Gallery />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Library;
