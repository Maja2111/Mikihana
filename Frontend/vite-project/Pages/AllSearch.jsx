/**
 * @description:
 * search page
 * header: Logo und suchleiste
 * main: 2 sections
 * footer: Iconbar, copyright
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Components/Header.jsx';
import { Cards } from '../Components/Cards.jsx';
import { Footer } from '../Components/Footer.jsx';

const SearchPage = () => {
  const navigate = useNavigate();

  const handleNavigateToBrandNew = () => {
    navigate('/brandnew');
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
          <h1>Brandnew</h1>
          <Cards
            onClickHandler={handleNavigateToBrandNew}
            title="Brandnew"
            text="Discover our newest books"
          />
          <Cards />
          <Cards />
        </section>
        <section>
          <h1>Must Have</h1>
          <Cards
            onClickHandler={handleNavigateToMustRead}
            title="Must Reads"
            text="Our recommendations for you"
          />
          <Cards />
          <Cards />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SearchPage;
