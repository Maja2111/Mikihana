import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { useColor } from '@context/ColorContext';
import ColorSwitch from '@components/ColorSwitch.jsx';
import LanguageSwitch from '@components/LanguageSwitch.jsx';

import '@/index.scss';
import '@pagestyle/EditProfile.scss';

const EditProfile = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const { colorScheme } = useColor();
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Bei Erfolg:
    setSuccessMessage('update successfully!');

    // Nach 2 Sekunden zurück navigieren
    setTimeout(() => {
      navigate(-1); // Navigiert zurück zur vorherigen Seite
    }, 2000);
  };

  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main>
        <section className="editProfile section">
          <h1>{t('editProfile.title')}</h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <ColorSwitch />
            <LanguageSwitch />
          </div>
          <img src="/Upload/Äffchen.png" alt="Äffchen" />
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder={t('editProfile.username')} />
            <input type="email" placeholder={t('editProfile.email')} />
            <input type="password" placeholder={t('editProfile.password')} />
            <input
              type="password"
              placeholder={t('editProfile.repeatPassword')}
            />
            <input type="number" placeholder={t('editProfile.phoneNumber')} />
            <button type="submit" className="clickButton">
              {t('editProfile.saveButton')}
            </button>
          </form>
        </section>
        {successMessage && (
          <p className="success-message">{t('editProfile.successMessage')}</p>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default EditProfile;
