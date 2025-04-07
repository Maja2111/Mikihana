import React from 'react';

import '@/index.scss';
import { useColor } from '@context/ColorContext';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';

const BrandNewMusic = () => {
  const { colorScheme } = useColor();
  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <section className="brandNewMusic section">
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
