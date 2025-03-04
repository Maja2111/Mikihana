import React from 'react';
import { useLocation } from 'react-router-dom';
import '@/index.scss';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { Gallery } from '@components/Gallery.jsx';
import {
  libraryResults,
  videoLibraryResults,
  discothequeResults,
} from '@/mockData.js';

const Searchside = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q') || '';

  // TODO: Ersetzen Sie die Mock-Daten durch die tatsächlichen Daten vom Backend
  // Beispiel: API-Aufruf zum Abrufen der Suchergebnisse
  // const fetchSearchResults = async () => {
  //   const response = await fetch(`/api/search?q=${searchQuery}`);
  //   const data = await response.json();
  //   return data;
  // };

  return (
    <div className="container">
      <header>
        <Header />
        <h1>Suchergebnisse für: {searchQuery}</h1>
      </header>

      <main>
        <section className="library-results">
          <h2>Bibliothek</h2>
          <Gallery items={libraryResults} />
        </section>

        <section className="video-library-results">
          <h2>Videothek</h2>
          <Gallery items={videoLibraryResults} />
        </section>

        <section className="discotheque-results">
          <h2>Diskothek</h2>
          <Gallery items={discothequeResults} />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Searchside;
