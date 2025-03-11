import React from 'react';
import { useNavigate } from 'react-router-dom';

// Komponentenimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { LoadingBar } from '@components/LoadingBar.jsx';
import { LoadingCircle } from '@components/LoadingCircle';
//import { GalleryForMovies } from '@components/GalleryForMovies'; // Placeholder for movie gallery component

const MoviesAndSeries = () => {
  const navigate = useNavigate();

  const handleNavigateToMovieDetails = () => {
    navigate('/movies/details');
  };

  return (
    <div className="container">
      <header>
        <Header />
      </header>

      <main>
        <h1>Your Movies and Series</h1>
        <section className="moviesGallery">
          <h2>Movies</h2>
          {/* <GalleryForMovies />*/}
          <LoadingBar />
          <LoadingCircle />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MoviesAndSeries;
