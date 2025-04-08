//Entwickerimporte
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//Componentsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { Carousel } from '@components/Carousel.jsx';
import { LoadingBar } from '@components/LoadingBar.jsx';

import { useColor } from '@context/ColorContext';

//Stylingimpore
import '@pagestyle/ActiveBook.scss';
import '@pagestyle/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

const ActiveBookPage = () => {
  const { colorScheme } = useColor();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const handleCancelUpdate = () => {
    navigate('/home');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Hier würde die Logik zum Hinzufügen des Buches stehen
    // Zum Beispiel ein API-Aufruf

    // Bei Erfolg:
    setSuccessMessage('Book successfully updated!');

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
      <main className="main">
        <h1>{t('activeBook.title')}</h1>
        <section className="activeBook section">
          <div>
            <h2>{t('activeBook.activeBook')}</h2>
            <Carousel />
            <LoadingBar />
          </div>
        </section>

        <section className="progressUpdate section">
          <h2>{t('activeBook.updateProgress')}</h2>
          <FontAwesomeIcon
            className="exitIcon"
            icon={faRectangleXmark}
            onClick={handleCancelUpdate}
          />
          <form onSubmit={handleSubmit}>
            <label htmlFor="dayofupdate">{t('activeBook.dayOfUpdate')}</label>
            <input type="date" name="dayofupdate" id="dayofupdate" />
            <label htmlFor="progress">{t('activeBook.progress')}</label>
            <input type="number" name="pages" id="pages" placeholder="0" />
            <p>{t('activeBook.pagesOutOf')}</p>
            <label htmlFor="privatenote">{t('activeBook.privateNote')}</label>
            <textarea
              name="note"
              id="note"
              placeholder={t('activeBook.thoughtsPlaceholder')}
            ></textarea>
            <button type="submit" className="clickButton">
              {t('activeBook.updateButton')}
            </button>
          </form>
        </section>
        {successMessage && (
          <p className="success-message">{t('activeBook.successMessage')}</p>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ActiveBookPage;
