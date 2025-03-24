import React from 'react';
import { useNavigate } from 'react-router-dom';

import '@/index.scss';
import '@pagestyle/BrandNew.scss';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';

const BrandNewMusic = () => {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <section>
          <h1>Hello user, welcome to brand new music</h1>
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

export default BrandNewMusic;
