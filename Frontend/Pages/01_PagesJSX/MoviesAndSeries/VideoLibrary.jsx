import React from 'react';
import { useNavigate } from 'react-router-dom';

import '@/index.scss';
import '@pagestyle/Library.scss';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import {
  GalleryForwatchMovie,
  GalleryForMovieFavorites,
  GalleryForMovieUnwatch,
  GalleryForMovieUserlist,
} from '@components/Gallery.jsx';
import { NavigateToProfile } from '@components/NavigateTo.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const VideoLibrary = () => {
  const navigate = useNavigate();

  const handleNavigateToWatchlist = () => {
    navigate('/profile/videolibrary/watchlist');
  };
  const handleNavigateToWatchFavorites = () => {
    navigate('/profile/videolibrary/watchfavorites');
  };
  const handleNavigateToUnwatchList = () => {
    navigate('/profile/videolibrary/unwatchlist');
  };
  const handleNavigateToMovieUserList = () => {
    navigate('/profile/videolibrary/movieuserlist');
  };
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Video library</h1>
      </header>
      <main className="main">
        <section className="watchlist section">
          <h2>watchlist</h2>
          <GalleryForwatchMovie />
          <FontAwesomeIcon
            id="watchlist"
            icon={faChevronRight}
            onClick={handleNavigateToWatchlist}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <section className="videoFavourites section">
          <h2>favourites</h2>
          <GalleryForMovieFavorites />
          <FontAwesomeIcon
            id="video-favourites"
            icon={faChevronRight}
            onClick={handleNavigateToWatchFavorites}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <section className="unwatch section">
          <h2>unwatch list</h2>
          <GalleryForMovieUnwatch />
          <FontAwesomeIcon
            id="unwatch"
            icon={faChevronRight}
            onClick={handleNavigateToUnwatchList}
            style={{ cursor: 'pointer' }}
          />
        </section>
        <section className="video-userlist section">
          <h2>userlist</h2>
          <GalleryForMovieUserlist />
          <FontAwesomeIcon
            id="video-userlist"
            icon={faChevronRight}
            onClick={handleNavigateToMovieUserList}
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

export default VideoLibrary;
