import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//Componentsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { LoadingBar } from '@components/LoadingBar.jsx';

import { useColor } from '@context/ColorContext';

//Stylingimpore
import '@pagestyle/ActiveBook.scss';
import '@pagestyle/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

const ActiveSeriesPage = () => {
  const { colorScheme } = useColor();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [successMessage, setSuccessMessage] = useState('');

  const handleCancelUpdate = () => {
    navigate('/home');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Hier würde die Logik zum Hinzufügen einer Serie stehen
    // Zum Beispiel ein API-Aufruf

    // Bei Erfolg:
    setSuccessMessage(t('updateActiveSeries.successMessage'));

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
        <h1>{t('updateActiveSeries.pageTitle')}</h1>
        <section className="activeBook section">
          <div>
            <h2>{t('updateActiveSeries.sectionTitle')}</h2>
            <i>
              <img src="/Upload/theRookie.jpg" alt="cover" />
            </i>
            <p>Title: The Rookie</p>
            <p>Season: 3</p>
            <p>Episode: 1</p>
            <LoadingBar />
          </div>
        </section>

        <section className="progressUpdate section">
          <h2>{t('updateActiveSeries.updateTitle')}</h2>
          <FontAwesomeIcon
            icon={faRectangleXmark}
            onClick={handleCancelUpdate}
          />
          <form onSubmit={handleSubmit}>
            <label htmlFor="dayofupdate">
              {t('updateActiveSeries.updateDate')}
            </label>
            <input type="date" name="dayofupdate" id="dayofupdate" />
            <label htmlFor="progress">{t('updateActiveSeries.progress')}</label>
            <input type="number" name="pages" id="pages" placeholder="0" />
            <p>pages out of API</p>
            <label htmlFor="privatenote">
              {t('updateActiveSeries.privateNote')}
            </label>
            <textarea
              name="note"
              id="note"
              placeholder={t('updateActiveSeries.notePlaceholder')}
            ></textarea>
            <button type="submit" className="clickButton">
              {t('updateActiveSeries.updateButton')}
            </button>
          </form>
        </section>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ActiveSeriesPage;
