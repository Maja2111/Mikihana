import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/index.scss';
import '@components/01_ComponentsStyling/Chart.scss';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronRight,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import ChartSelector from '@components/ChartSelector';
import { pageStats, bookStats } from '@/mockData';
import { handleViewChange } from '@components/Function.jsx';

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
  const [view, setView] = useState('year');
  const navigate = useNavigate();
  const handleNavigateToGetTarget = (navigate) => {
    navigate('/get-target');
  };
  const handleNavigateToTarget = (navigate) => {
    navigate('/target');
  };
  return (
    <div className="container">
      <header className="header">
        <Header />
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
          <FontAwesomeIcon icon={faSquarePlus} /> {/*führt zur Subpage Target*/}
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleNavigateToGetTarget(navigate)}
            style={{ cursor: 'pointer' }}
          />{' '}
          {/*führt zur Subpage GetTarget*/}
        </section>

        <section className="target">
          <h2>Your Reading Goal</h2>
          <FontAwesomeIcon icon={faSquarePlus} />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleNavigateToTarget(navigate)}
            style={{ cursor: 'pointer' }}
          />
        </section>

        <section className="pageStatistic">
          <h2>Page Statistics</h2>
          <ChartSelector
            onViewChange={(selectedView) =>
              handleViewChange(setView, selectedView)
            }
          />
          {/* TODO: Loading State hinzufügen während Daten geladen werden */}
          {/* TODO: Pagination für große Datensätze implementieren */}
          {/* TODO: Filteroptionen für Zeiträume hinzufügen */}
          <Chart data={pageStats} maxValue={1000} />
        </section>

        <section className="booksStatistic">
          <h2>Books Statistics</h2>
          <ChartSelector
            onViewChange={(selectedView) =>
              handleViewChange(setView, selectedView)
            }
          />
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
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
