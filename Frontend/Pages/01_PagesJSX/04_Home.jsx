//Entwicklerimporte
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Componetensimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import ChartSelector from '@components/ChartSelector';
import { handleViewChange } from '@components/Function.jsx';
import { LoadingBar } from '@components/LoadingBar.jsx';
import { LoadingCircle } from '@components/LoadingCircle';
import { pageStats, bookStats } from '@/mockData';

//Stylingimporte
import '@/index.scss';
import '@pagestyle/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
              <img
                src="./Upload/symbol-fuer-offenes-buch-buchmodell-mit-weissen-seiten_165079-2511.avif"
                alt="Bibilothek"
              />
            </li>
            <li>
              <img
                src="./Upload/83987435-filmstreifen-mit-der-filmrolle-und-popcorn-lokalisiert-auf-weißem-hintergrund.jpg"
                alt="Videothek"
              />
            </li>
            <li>
              <img
                src="./Upload/vinyl-schallplatte-square-nussbaum-schwarz_madeindesign_399685_original.webp"
                alt="Discothek"
              />
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Your main area</h1>
        <section className="activeBook">
          <div>
            <h2>Active Book</h2>
            <img
              src="/Upload/when-the-moon-hatched-taschenbuch-sarah-a-parker-englisch.jpeg"
              alt="cover"
            />
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
          <LoadingCircle />
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
