//Entwicklerimporte
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Componetensimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import Chart from '@components/Chart.jsx';
import { LoadingBar } from '@components/LoadingBar.jsx';
import { LoadingCircle } from '@components/LoadingCircle';
import { pageStats, bookStats } from '@/mockData';

//Stylingimporte
import '@/index.scss';
import '@pagestyle/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [view, setView] = useState('year');
  const navigate = useNavigate();
  const handleNavigateToActiveBook = () => {
    navigate('/home/activeBook');
  };
  const handleNavigateToTarget = () => {
    navigate('/home/target');
  };
  const handleNavigateToGetTarget = () => {
    navigate('/home/getTarget');
  };

  return (
    <div className="container">
      <header className="header">
        <Header />
        <nav className="navbar">
          <ul>
            <li>
              <img src="/Upload/Buch.avif" alt="Liberary" />
            </li>
            <li>
              <img src="/Upload/Movie.jpg" alt="VideoLiberary" />
            </li>
            <li>
              <img src="/Upload/Schallplatte.webp" alt="Discotheque" />
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Your main area</h1>
        <section className="activeBook">
          <div>
            <h2>Active Book</h2>
            <img src="/Upload/wtmh.jpeg" alt="cover" />
            <p>Title: When the moon hatched</p>
            <p>Author: Sarah A. Parker</p>
            <LoadingBar />
          </div>

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
          <img src="/Upload/Placeholder.webp" alt="placeholder" />
          <FontAwesomeIcon
            icon={faSquarePlus}
            onClick={handleNavigateToTarget}
            style={{ cursor: 'pointer' }}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleNavigateToGetTarget(navigate)}
            style={{ cursor: 'pointer' }}
          />
          <LoadingCircle />
        </section>

        <section className="pageStatistic">
          <h2>Page Statistics</h2>
          <Chart
            onViewChange={(selectedView) => {
              setView(selectedView);
              // TODO: Daten für die ausgewählte Ansicht laden
            }}
          />
          <Chart data={pageStats} maxValue={1000} />
        </section>

        <section className="booksStatistic">
          <h2>Books Statistics</h2>
          <Chart
            onViewChange={(selectedView) => {
              setView(selectedView);
              // TODO: Daten für die ausgewählte Ansicht laden
            }}
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
