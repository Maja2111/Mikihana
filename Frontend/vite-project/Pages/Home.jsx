import React, { useState } from 'react';
import '../src/index.scss';
import '../../Styling/Chart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// TODO: API-Endpunkte definieren
// const API_URL = process.env.REACT_APP_API_URL;
// const PAGE_STATS_ENDPOINT = '/statistics/pages';
// const BOOK_STATS_ENDPOINT = '/statistics/books';

// TODO: Datenvalidierung hinzufügen
// if (!data || data.length === 0) return <div>Keine Daten verfügbar</div>;
const Chart = ({ data, maxValue }) => {
  return (
    <div className="chart-container">
      <div className="chart-axis">
        <div className="x-axis"></div>
        <div className="y-axis"></div>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="chart-bar"
          style={{ height: `${(item.value / maxValue) * 100}%` }}
        >
          <div className="chart-label">{item.month}</div>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  // TODO: Ersetzen durch API-Aufruf für Seitenstatistiken
  const [pageStats, setPageStats] = useState([
    { month: 'Jan', value: 200 },
    { month: 'Feb', value: 400 },
    { month: 'März', value: 540 },
    { month: 'April', value: 800 },
    { month: 'Mai', value: 980 },
    { month: 'Juni', value: 745 },
    { month: 'Juli', value: 0 },
    { month: 'Aug', value: 0 },
    { month: 'Sept', value: 0 },
    { month: 'Okt', value: 0 },
    { month: 'Nov', value: 0 },
    { month: 'Dez', value: 0 },
  ]);

  // TODO: Ersetzen durch API-Aufruf für Buchstatistiken
  const [bookStats, setBooksStats] = useState([
    { month: 'Jan', value: 0.5 },
    { month: 'Feb', value: 0.5 },
    { month: 'März', value: 1 },
    { month: 'April', value: 1.5 },
    { month: 'Mai', value: 2 },
    { month: 'Juni', value: 0.2 },
    { month: 'Juli', value: 0 },
    { month: 'Aug', value: 0 },
    { month: 'Sept', value: 0 },
    { month: 'Okt', value: 0 },
    { month: 'Nov', value: 0 },
    { month: 'Dez', value: 0 },
  ]);

  return (
    <div className="container">
      <header className="header">
        <img src="/Upload/Logo Cayenne.png" alt="logo" className="logo" />
        <nav>
          <ul>Bibilothek</ul>
          <ul>Videothek</ul>
          <ul>Discothek</ul>
        </nav>
        <h1>Your main area</h1>
      </header>

      <main>
        <section className="activeBook">
          <h2>Active Book</h2>
          <p>{/* TODO: Buchtitel vom Backend einfügen */}Title</p>
          <p>{/* TODO: Autor vom Backend einfügen */}Author</p>
          <div className="progress">Progress</div>
          <button>Update</button>
          <button>
            <FontAwesomeIcon icon={faShareNodes} />
          </button>
          <img src="" alt="cover" />
          <FontAwesomeIcon icon={faSquarePlus} />
          <FontAwesomeIcon icon={faChevronRight} />
        </section>

        <section className="target">
          <h2>Your Readtarget</h2>
          <FontAwesomeIcon icon={faSquarePlus} />
          <FontAwesomeIcon icon={faChevronRight} />
        </section>

        <section className="pageStatistic">
          <h2>Page Statistics</h2>
          {/* TODO: Loading State hinzufügen während Daten geladen werden */}
          {/* TODO: Pagination für große Datensätze implementieren */}
          {/* TODO: Filteroptionen für Zeiträume hinzufügen */}
          <Chart data={pageStats} maxValue={1000} />
        </section>

        <section className="booksStatistic">
          <h2>Books Statistics</h2>
          {/* TODO: Loading State hinzufügen während Daten geladen werden */}
          {/* TODO: Tooltips für detaillierte Informationen hinzufügen */}
          {/* TODO: Export-Funktion für Statistiken implementieren */}
          <Chart data={bookStats} maxValue={2} />
        </section>

        <section className="series">
          <h2>Series</h2>
          <p>days in a row </p>
          <div>
            {' '}
            {/*Daten kommen aus dem Backend, hier wird nur ein Platzhalter verwendet */}
            <p>{/* TODO: Serieninformationen vom Backend einfügen */}20</p>
            <p>current series</p>
          </div>
          <div>
            <p>{/* TODO: Serieninformationen vom Backend einfügen */}52</p>
            <p>longest series</p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </section>
      </main>

      <footer>
        <nav className="Iconbar">
          <FontAwesomeIcon icon="fa-solid fa-house-chimney" />
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <img src="Frontend/vite-project/Upload/Äffchen.png" alt="Profile" />
        </nav>

        <p>
          <FontAwesomeIcon icon={faCopyright} />
          Copyright 2025 Mikihana
        </p>
      </footer>
    </div>
  );
};

export default Home;
