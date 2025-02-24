//subpage von der Homepage
//Bibilothek

import React from 'react';
import '@/index.scss';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { Gallery } from '@components/Gallery.jsx';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Library = () => {
  const navigate = useNavigate();

  const handleNavigateToWishList = (navigate) => {
    navigate('/wishlist');
  };
  const handleNavigateToFavourites = (navigate) => {
    navigate('/favourites');
  };
  const handleNavigateToUnreadingBooks = (navigate) => {
    navigate('/unreadingbooks');
  };
  const handleNavigateToUserList = (navigate) => {
    navigate('/userlist');
  };
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
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleNavigateToWishList(navigate)}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <section className="favourites">
          <h1>Favourites</h1>
          <Gallery />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleNavigateToFavourites(navigate)}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <section className="unreadBooks">
          <h1>Unread Books</h1>
          <Gallery />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleNavigateToUnreadingBooks(navigate)}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <section className="userlist">
          <h1>Userlist</h1>
          <Gallery />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleNavigateToUserList(navigate)}
            style={{ cursor: 'pointer' }}
          />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Library;
