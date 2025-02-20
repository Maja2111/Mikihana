import React from 'react';
import '../../../src/index.scss';
import { Header } from '../../../Components/Header.jsx';
import { Footer } from '../../../Components/Footer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRectangleXmark,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import ActiveBook from '../../../Components/ActiveBook.jsx';
import { UpdateButton } from '../../../Components/OnClickButtons.jsx';

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
