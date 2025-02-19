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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const ProfilPage = () => {
  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <div className="container">
      <header className="header">
        <img src="/Upload/Logo Cayenne.png" alt="logo" className="logo" />
      </header>
      <main>
        <section className="library" onClick={handleClick}>
          <h2>Bibilothek</h2>
        </section>

        <section className="videoLibrary" onClick={handleClick}>
          <h2>Videothek</h2>
        </section>

        <section className="discotheque" onClick={handleClick}>
          <h2>Diskothek</h2>
        </section>

        <section className="editProfile" onClick={handleClick}>
          <h2>Edit Profile</h2>
          <img src="Frontend/vite-project/Upload/Äffchen.png" alt="Profile" />
        </section>
      </main>

      <footer>
        <nav className="Iconbar">
          <FontAwesomeIcon icon="fa-solid fa-house-chimney" />
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <img src="Frontend/vite-project/Upload/Äffchen.png" alt="Profile" />
        </nav>

        <p>
          <FontAwesomeIcon icon={faCopyright} />
          Copyright 2025 Mikihana
        </p>
      </footer>
    </div>
  );
};

export default ProfilPage;
