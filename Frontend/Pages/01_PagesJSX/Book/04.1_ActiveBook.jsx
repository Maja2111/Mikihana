//Entwickerimporte
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Componentsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { LoadingBar } from '@components/LoadingBar.jsx';

//Stylingimpore
import '@pagestyle/ActiveBook.scss';
import '@pagestyle/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

const ActiveBookPage = () => {
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
    <div className="container">
      <header>
        <Header />
      </header>
      <main className="main">
        <h1>Your Active Book</h1>
        <section className="activeBook section">
          <div>
            <h2>Active Book</h2>
            <i>
              <img src="/Upload/wtmh.jpeg" alt="cover" />
            </i>
            <p>Title: When the moon hatched</p>
            <p>Author: Sarah A. Parker</p>
            <LoadingBar />
          </div>
        </section>

        <section className="progressUpdate section">
          <h2>Update Progress</h2>
          <FontAwesomeIcon
            icon={faRectangleXmark}
            onClick={handleCancelUpdate}
          />
          <form onSubmit={handleSubmit}>
            <label htmlFor="dayofupdate">day of update</label>
            <input type="date" name="dayofupdate" id="dayofupdate" />
            <label htmlFor="progress">progress</label>
            <input type="number" name="pages" id="pages" placeholder="0" />
            <p>pages out of API</p>
            <label htmlFor="privatenote">private note</label>
            <textarea
              name="note"
              id="note"
              placeholder="your thoughts"
            ></textarea>
            <button type="submit" className="clickButton">
              UPDATE
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

export default ActiveBookPage;
