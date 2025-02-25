/**
 * @description:
 * Profil Page
 * Logo Header
 * h2 und section klickbar
 * 3 Cards je sections - 3 sections -> Cards als Components
 * Edit Profile
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@/index.scss';
import { Gallery } from '@components/Gallery.jsx';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { handleClick } from '@components/Function.jsx';

const ProfilPage = () => {
  const navigate = useNavigate();
  const handleNavigateToLibrary = (navigate) => {
    navigate('/profil/bibilothek');
  };
  const handleNavigateToEditProfile = (navigate) => {
    navigate('/profil/edit-profile');
  };

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <section
          className="library"
          onClick={() => handleNavigateToLibrary(navigate)}
        >
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

        <section
          className="editProfile"
          onClick={() => handleNavigateToEditProfile(navigate)}
        >
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
