import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Komponentenimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { PageStatisticsChart } from '@components/StatisticChart.jsx'; // Import PageStatisticsChart
import { BookStatisticsChart } from '@components/StatisticChart.jsx'; // Import BookStatisticsChart
import { SeriesStatisticsChart } from '@components/StatisticChart.jsx';
import { LoadingBar } from '@components/LoadingBar.jsx';
import { LoadingCircle } from '@components/LoadingCircle.jsx';
import {
  GalleryForReadingBooks,
  GalleryForwatchMovie,
} from '@components/Gallery.jsx';
import { Carousel } from '@components/Carousel.jsx';
import { pageStatsYear, pageStatsMonth } from '@/mockData.js';
import { bookStatsYear, bookStatsMonth } from '@/mockData.js';
import { seriesStatsYear, seriesStatsMonth } from '@/mockDataMovie.js';
import { NavContext } from '@context/navContext.jsx';

// Stylingimporte
import '@/index.scss';
import '@pagestyle/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [view, setView] = useState('year');
  const [bookView, setBookView] = useState('year'); // Added state for book stats view
  const { navState, setNavState } = useContext(NavContext);

  const navigate = useNavigate();
  //Bookhome
  const handleNavigateToUpdateActiveBook = () => {
    navigate('/home/activeBook');
  };

  const handleNavigateToAddActiveBook = () => {
    navigate('/home/addActiveBook');
  };

  const handleNavigateToTarget = () => {
    navigate('/home/target');
  };

  const handleNavigateToGetTarget = () => {
    navigate('/home/getTarget');
  };

  //Moviehome
  const handleNavigateToUpdateActiveSeries = () => {
    navigate('/home/updateActiveSeries');
  };

  const handleNavigateToAddActiveSeries = () => {
    navigate('/home/addActiveSeries');
  };

  useEffect(() => {
    const links = document.querySelectorAll('.nav__link');
    const light = document.querySelector('.nav__light');

    function moveLight({ offsetLeft, offsetWidth }) {
      light.style.left = `${offsetLeft - offsetWidth / 4}px`;
    }

    function activeLink(linkActive) {
      links.forEach((link) => {
        link.classList.remove('active');
        linkActive.classList.add('active');
      });
    }

    links.forEach((link) => {
      link.addEventListener('mouseenter', () => moveLight(link));
      link.addEventListener('click', () => activeLink(link));
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', () => moveLight(link));
        link.removeEventListener('click', () => activeLink(link));
      });
    };
  }, []);

  return (
    <div className="container">
      <header>
        <Header>
          <nav className="nav">
            <ul className="nav__links">
              <li className="nav__link active">
                <button onClick={() => setNavState('book')}>
                  <i className="bx bx-book"></i>
                </button>
              </li>
              <li className="nav__link">
                <button onClick={() => setNavState('movie')}>
                  <i className="bx bx-film"></i>
                </button>
              </li>
              <li className="nav__link">
                <button onClick={() => setNavState('music')}>
                  <i className="bx bx-disc"></i>
                </button>
              </li>
              <div className="nav__light"></div>
            </ul>
          </nav>
        </Header>
      </header>

      <main className="main">
        <h1>Your main area</h1>
        {navState === 'book' && (
          <>
            <section className="activeBook section">
              <div>
                <h2>Active Book</h2>
                <Carousel />
                <LoadingBar />
              </div>

              <FontAwesomeIcon
                className="addIcon"
                icon={faSquarePlus}
                onClick={handleNavigateToAddActiveBook}
                style={{ cursor: 'pointer' }}
              />

              <FontAwesomeIcon
                className="navigateIcon"
                icon={faChevronRight}
                onClick={handleNavigateToUpdateActiveBook}
                style={{ cursor: 'pointer' }}
              />
            </section>

            <section className="target section">
              <h2>Your reading target</h2>
              <img src="/Upload/Bücherstapel.jpg" alt="placeholder" />
              <LoadingCircle />
              <FontAwesomeIcon
                className="addIcon"
                icon={faSquarePlus}
                onClick={handleNavigateToTarget}
                style={{ cursor: 'pointer' }}
              />
              <FontAwesomeIcon
                className="navigateIcon"
                icon={faChevronRight}
                onClick={handleNavigateToGetTarget}
                style={{ cursor: 'pointer' }}
              />
            </section>

            <section className="pageStatistic section">
              <h2>Page Statistics</h2>
              <PageStatisticsChart
                view={view}
                onViewChange={setView}
                data={view === 'year' ? pageStatsYear : pageStatsMonth}
              />
            </section>

            <section className="booksStatistic section">
              <h2>Books Statistics</h2>
              <BookStatisticsChart
                view={bookView}
                onViewChange={setBookView}
                data={bookView === 'year' ? bookStatsYear : bookStatsMonth}
              />
            </section>

            <section className="section">
              <h3>Your reading history</h3>
              <div className="gallery">
                <GalleryForReadingBooks />
              </div>
            </section>

            <section className="series section">
              <h2>Series</h2>
              <h3>days in a row </h3>
              <div>
                <p className="number">20</p>
                <p>current series</p>
              </div>
              <div>
                <p className="number">52</p>
                <p>longest series</p>
              </div>
            </section>
          </>
        )}

        {navState === 'movie' && (
          <div className="movieSection">
            <section className="activeSeries section">
              <div>
                <h2>Active series</h2>
                <i>
                  <img
                    src="/Upload/theRookie.jpg"
                    alt="The Rookie Season three"
                  />
                </i>
                <p>Title: The Rookie</p>
                <p>Season: 3</p>
                <p>Episode: 1</p>

                <LoadingBar />
                <FontAwesomeIcon
                  className="addIcon"
                  icon={faSquarePlus}
                  onClick={handleNavigateToAddActiveSeries}
                  style={{ cursor: 'pointer' }}
                />
                <FontAwesomeIcon
                  className="navigateIcon"
                  icon={faChevronRight}
                  onClick={handleNavigateToUpdateActiveSeries}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </section>

            <section className="seriesStatistic section">
              <h2>Series Statistics</h2>
              <SeriesStatisticsChart
                view={view}
                onViewChange={setView}
                data={view === 'year' ? seriesStatsYear : seriesStatsMonth}
              />
            </section>

            <section className="watchHistory section">
              <h3>Your watch history</h3>
              <div className="gallery">
                <GalleryForwatchMovie />
              </div>
            </section>
          </div>
        )}

        {navState === 'music' && (
          <section className="musicSection section">
            <h2>Your music section</h2>
            <img src="/Upload/coming soon.png" alt="coming soon" />
          </section>
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
