//subpage von der Homepage
//Bibilothek

import React from 'react';
import ''index.scss'' (see below for file content);
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { GalleryWithPlaceholder } from '@components/GalleryWithPlaceholder.jsx';
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const navigate = useNavigate();
  
  const handleAddBook = () => {
    // Hier kann die Logik für das Hinzufügen eines neuen Buches implementiert werden
    console.log('Neues Buch hinzufügen');
    // Zum Beispiel: navigate('/add-book');
  };

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
          <GalleryWithPlaceholder onAddBook={handleAddBook} />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleNavigateToWishList(navigate)}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <section className="favourites">
          <h1>Favourites</h1>
          <GalleryWithPlaceholder onAddBook={handleAddBook} />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleNavigateToFavourites(navigate)}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <section className="unreadBooks">
          <h1>Unread Books</h1>
          <GalleryWithPlaceholder onAddBook={handleAddBook} />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleNavigateToUnreadingBooks(navigate)}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <section className="userlist">
          <h1>Userlist</h1>
          <GalleryWithPlaceholder onAddBook={handleAddBook} />
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
