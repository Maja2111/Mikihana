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
import '@pagestyle/EditProfile.scss';
import { Gallery } from '@components/Gallery.jsx';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { handleClick } from '@components/Function.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const ProfilPage = () => {
  const navigate = useNavigate();
  const handleNavigateToLibrary = (navigate) => {
    navigate('/profile/library');
  };
  const handleNavigateToEditProfile = (navigate) => {
    navigate('/profile/edit-profile');
  };

  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <section
          className="library"
          onClick={() => handleNavigateToLibrary(navigate)}
        >
          <h2>Library</h2>
          <Gallery />
        </section>

        <section className="videoLibrary" onClick={handleClick}>
          <h2>Video library</h2>
          <Gallery />
        </section>

        <section className="musicLibrary" onClick={handleClick}>
          <h2>Music library</h2>
          <Gallery />
        </section>

        <section
          className="editProfile"
          onClick={() => handleNavigateToEditProfile(navigate)}
        >
          <h2>Edit Profile</h2>
          <img
            src="/Upload/Äffchen.png"
            alt="Profile"
            className="profile-image"
          />
          <FontAwesomeIcon icon={faPen} className="profile-icon" />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProfilPage;
