import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/index.scss';
import './02_PageStyling/Home.scss';
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

const Chart = ({ data, maxValue }) => {
  return (
    <div className="chart-container">
      <div className="chart-axis"></div>
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
  const handleNavigateToActiveBook = () => {
    navigate('/subpages/home/activeBook');
  };
  const handleNavigateToTarget = () => {
    navigate('/subpages/home/target');
  };
  const handleNavigateToGetTarget = () => {
    navigate('/subpages/home/getTarget');
  };

  return (
    <div className="container">
      <header className="header">
        <Header />
        <nav className="navbar">
          <ul>
            <li>
              <img
                src="/Upload/symbol-fuer-offenes-buch-buchmodell-mit-weissen-seiten_165079-2511.avif"
                alt="Bibilothek"
              />
            </li>
            <li>
              <img
                src="/Upload/83987435-filmstreifen-mit-der-filmrolle-und-popcorn-lokalisiert-auf-weißem-hintergrund.jpg"
                alt="Videothek"
              />
            </li>
            <li>
              <img
                src="/Upload/vinyl-schallplatte-square-nussbaum-schwarz_madeindesign_399685_original.webp"
                alt="Discothek"
              />
            </li>
          </ul>
        </nav>
        <h1>Your main area</h1>
      </header>

      <main>
        <section className="activeBook">
          <h2>Active Book</h2>
          <p>Title</p>
          <p>Author</p>
          <div className="progress">Progress</div>
          <button>Update</button>
          <button>
            <FontAwesomeIcon icon={faShareNodes} />
          </button>
          <img
            src="/Upload/iron-flame-taschenbuch-rebecca-yarros-englisch.jpeg"
            alt="cover"
          />
          <FontAwesomeIcon
            icon={faSquarePlus}
            onClick={handleNavigateToActiveBook}
            style={{ cursor: 'pointer' }}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={handleNavigateToActiveBook}
            style={{ cursor: 'pointer' }}
          />
        </section>

        <section className="target">
          <h2>Your Reading Goal</h2>
          <FontAwesomeIcon
            icon={faSquarePlus}
            onClick={() => handleNavigateToTarget()}
            style={{ cursor: 'pointer' }}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleNavigateToGetTarget(navigate)}
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
          <Chart data={pageStats} maxValue={1000} />
        </section>

        <section className="booksStatistic">
          <h2>Books Statistics</h2>
          <ChartSelector
            onViewChange={(selectedView) =>
              handleViewChange(setView, selectedView)
            }
          />
          <Chart data={bookStats} maxValue={2} />
        </section>

        <section className="series">
          <h2>Series</h2>
          <p>days in a row </p>
          <div>
            <p>20</p>
            <p>current series</p>
          </div>
          <div>
            <p>52</p>
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
