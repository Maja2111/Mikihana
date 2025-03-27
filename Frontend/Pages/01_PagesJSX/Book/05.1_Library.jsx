import React from 'react';
import { useNavigate } from 'react-router-dom';

import '@/index.scss';
import '@pagestyle/Library.scss';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Gallery } from '@components/Gallery';
import { NavigateToProfile } from '@components/NavigateTo.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Library = () => {
  const navigate = useNavigate();

  const handleNavigateToWishList = () => {
    navigate('/profile/library/wishlist');
  };
  const handleNavigateToFavourites = () => {
    navigate('/profile/library/favourites');
  };
  const handleNavigateToUnreadBooks = () => {
    navigate('/profile/library/unreadbooks');
  };
  const handleNavigateToUserList = () => {
    navigate('/profile/library/userlist');
  };

  return (
    <div className="container">
      <header>
        <Header />
        <h1>Library</h1>
      </header>
      <main className="main">
        <section className="wishlist section">
          <h2>wishlist</h2>
          <Gallery />
          <FontAwesomeIcon
            id="wishlist"
            icon={faChevronRight}
            onClick={handleNavigateToWishList}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <section className="favourites section">
          <h2>favourites</h2>
          <Gallery />
          <FontAwesomeIcon
            id="favourites"
            icon={faChevronRight}
            onClick={handleNavigateToFavourites}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <section className="unreadBooks section">
          <h2>unread books</h2>
          <Gallery />
          <FontAwesomeIcon
            id="unreadbooks"
            icon={faChevronRight}
            onClick={handleNavigateToUnreadBooks}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <section className="userlist section">
          <h2>userlist</h2>
          <Gallery />
          <FontAwesomeIcon
            id="userlist"
            icon={faChevronRight}
            onClick={handleNavigateToUserList}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <NavigateToProfile />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Library;
