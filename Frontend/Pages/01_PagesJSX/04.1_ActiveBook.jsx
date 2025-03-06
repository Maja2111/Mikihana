//Entwickerimporte
import React from 'react';
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

  const handleCancelUpdate = () => {
    navigate('/home');
  };

  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <h1>Your Active Book</h1>
        <section className="activeBook">
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

        <section className="progressUpdate">
          <h2>Update Progress</h2>
          <FontAwesomeIcon
            icon={faRectangleXmark}
            onClick={handleCancelUpdate}
          />
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
          <button className="clickButton">UPDATE</button>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ActiveBookPage;
