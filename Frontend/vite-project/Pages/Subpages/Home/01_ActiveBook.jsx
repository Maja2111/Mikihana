//Entwicklerimporte
import React from 'react';

//Componentsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import ActiveBook from '@components/ActiveBook.jsx';
import { UpdateButton } from '@components/MainButtons.jsx';

//Stylingimpore
import '@/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRectangleXmark,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';

const ActiveBookPage = () => {
  return (
    <div className="container">
      <header>
        <Header />
        <h1>Your Active Book</h1>
      </header>
      <main>
        <ActiveBook />

        <section className="progressUpdate">
          <h2>Update Progress</h2>
          <FontAwesomeIcon icon={faRectangleXmark} />{' '}
          {/**click bricht den prozess ab */}
          <label htmlFor="dayofupdate">day of update</label>
          <button>today</button> <FontAwesomeIcon icon={faCalendarDays} />{' '}
          {/*clickbar machen, wählt das aktuelle Datum aus, unterbutton styling */}
          <label htmlFor="progress">progress</label>
          <input type="number" name="pages" id="pages" placeholder="0" />
          <p>
            pages out of ${API} <FontAwesomeIcon icon={faPen} />
          </p>
          <label htmlFor="privatenote">private note</label>
          <textarea
            name="note"
            id="note"
            placeholder="your thoughts"
          ></textarea>
        </section>
        <UpdateButton />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default ActiveBookPage;
