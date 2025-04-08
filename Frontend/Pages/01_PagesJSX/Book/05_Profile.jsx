import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useColor } from '@context/ColorContext';
import { useTranslation } from 'react-i18next';

import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';

import '@/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const ProfilPage = () => {
  const navigate = useNavigate();
  const { colorScheme } = useColor();
  const { t } = useTranslation();

  const handleNavigateToLibrary = () => {
    navigate('/profile/library');
  };

  const handleNavigateToVideolibrary = () => {
    navigate('/profile/videolibrary');
  };
  const handleNavigateToMusiclibrary = () => {
    navigate('/profile/musiclibrary');
  };

  const handleNavigateToEditProfile = () => {
    navigate('/profile/edit-profile');
  };

  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <section className="library section" onClick={handleNavigateToLibrary}>
          <h2>{t('profile.library')}</h2>
          <img src="/Upload/Äffchen mit Buch.svg" alt="" />
        </section>

        <section
          className="videoLibrary section"
          onClick={handleNavigateToVideolibrary}
        >
          <h2>{t('profile.videoLibrary')}</h2>
          <img src="/Upload/Äffchen schaut film .svg" alt="" />
        </section>

        <section
          className="musicLibrary section"
          onClick={handleNavigateToMusiclibrary}
        >
          <h2>{t('profile.musicLibrary')}</h2>

          <img src="/Upload/Äffchen hört Musik.svg" alt="" />
        </section>

        <section
          className="editProfile section"
          onClick={handleNavigateToEditProfile}
        >
          <h2>{t('profile.editProfile')}</h2>
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
