/**
 * @description:
 * search page
 * header: Logo und suchleiste
 * main: 2 sections
 */

import React from 'react';
import '@/index.scss';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/Header';
import { Cards } from '@components/Cards';
import { Footer } from '@components/Footer';
import { mediaCards } from '@/mockData';

const SearchPage = () => {
  const navigate = useNavigate();

  const handleNavigateToBrandNew = () => {
    navigate('/allsearch/brandnew');
  };

  const handleNavigateToMustRead = () => {
    navigate('/mustread');
  };

  return (
    <div className="container">
      <header className="header">
        <Header />
        <input type="search" placeholder="search" className="search" />
      </header>
      <main>
        <section>
          <h1>BRANDNEW</h1>
          {mediaCards.map((card) => (
            <Cards
              key={card.id}
              onClickHandler={handleNavigateToBrandNew}
              title={card.title}
              text={card.text}
              imageUrl={card.imageUrl}
            />
          ))}
        </section>
        <section>
          <h1>MUST HAVE</h1>
          {mediaCards.map((card) => (
            <Cards
              key={card.id}
              onClickHandler={handleNavigateToMustRead}
              title={card.title}
              text={card.text}
              imageUrl={card.imageUrl}
            />
          ))}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SearchPage;
