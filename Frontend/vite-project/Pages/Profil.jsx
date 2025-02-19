/**
 * @description:
 * Profil Page
 * Logo Header
 * h2 und section klickbar
 * 3 Cards je sections - 3 sections -> Cards als Components
 * Edit Profile
 */

import React from 'react';
import '../src/index.scss';
import { Gallery } from '../Components/Gallery.jsx';
import { Header } from '../Components/Header.jsx';
import { Footer } from '../Components/Footer.jsx';

const ProfilPage = () => {
  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <section className="library" onClick={handleClick}>
          <h2>Bibilothek</h2>
          <Gallery />
        </section>

        <section className="videoLibrary" onClick={handleClick}>
          <h2>Videothek</h2>
          <Gallery />
        </section>

        <section className="discotheque" onClick={handleClick}>
          <h2>Diskothek</h2>
          <Gallery />
        </section>

        <section className="editProfile" onClick={handleClick}>
          <h2>Edit Profile</h2>
          <img src="Frontend/vite-project/Upload/Äffchen.png" alt="Profile" />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProfilPage;
