import React from 'react';

import '@/index.scss';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';

const MustListen = () => {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <section className="mustListen">
          <h1>
            Here you will find our recommendations for music you should have
            heard.{' '}
          </h1>
          <img src="/Upload/coming soon.png" alt="coming soon" />
        </section>
        <NavigateToAllSearch />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MustListen;
