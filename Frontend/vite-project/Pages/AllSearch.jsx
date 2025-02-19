/**
 * @description:
 * search page
 * header: Logo und suchleiste
 * main: 2 sections
 * footer: Iconbar, copyright
 */

import React from 'react';
import Cards from './Cards.jsx';
import { Header } from '../Components/Header.jsx';
import { Footer } from './Footer.jsx';

const SearchPage = () => {
  return (
    <div className="container">
      <header className="header">
        <Header />
        <input type="search" placeholder="search" className="search" />
      </header>
      <main>
        <section>
          <h1>Brandnew</h1>
          <Cards />
          <Cards />
          <Cards />
        </section>
        <section>
          <h1>Must Have</h1>
          <Cards />
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
