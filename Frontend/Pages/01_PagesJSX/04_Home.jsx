import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Komponentenimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import PageStatisticsChart from '@components/PageStatisticsChart'; // Import PageStatisticsChart
import BookStatisticsChart from '@components/BookStatisticsChart'; // Import BookStatisticsChart
import { LoadingBar } from '@components/LoadingBar.jsx';
import { LoadingCircle } from '@components/LoadingCircle';
import { GalleryForReadingBooks } from '@components/GalleryForReadingBooks';
import { pageStatsYear, pageStatsMonth } from '@/mockData'; // Updated import
import { bookStatsYear, bookStatsMonth } from '@/mockData'; // Updated import

// Stylingimporte
import '@/index.scss'; // Korrigierter Import
import '@pagestyle/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [view, setView] = useState('year');
  const [bookView, setBookView] = useState('year'); // Added state for book stats view
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
      <header className="header">
        <Header />
        <nav className="nav">
          <ul className="nav__links">
            <li className="nav__link active">
              <a href="#">
                <i className="bx bx-book"></i> {/* Buch-Icon */}
              </a>
            </li>
            <li className="nav__link">
              <a href="#">
                <i className="bx bx-film"></i> {/* Filmplakat-Icon */}
              </a>
            </li>
            <li className="nav__link">
              <a href="#">
                <i className="bx bx-disc"></i> {/* CD/Schallplatte-Icon */}
              </a>
            </li>
            <div className="nav__light"></div>
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
            onClick={handleNavigateToGetTarget}
            style={{ cursor: 'pointer' }}
          />
          <LoadingCircle />
        </section>

        <section className="pageStatistic">
          <h2>Page Statistics</h2>
          <PageStatisticsChart
            view={view}
            onViewChange={setView}
            data={view === 'year' ? pageStatsYear : pageStatsMonth}
          />
        </section>

        <section className="booksStatistic">
          <h2>Books Statistics</h2>
          <BookStatisticsChart
            view={bookView}
            onViewChange={setBookView}
            data={bookView === 'year' ? bookStatsYear : bookStatsMonth}
          />
        </section>

        <section className="gallery">
          <GalleryForReadingBooks />
        </section>

        <section className="series">
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
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
