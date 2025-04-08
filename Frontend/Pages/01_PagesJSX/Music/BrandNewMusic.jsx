import React from 'react';
import { useTranslation } from 'react-i18next';

import '@/index.scss';
import { useColor } from '@context/ColorContext';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { NavigateToAllSearch } from '@components/NavigateTo.jsx';

const BrandNewMusic = () => {
  const { colorScheme } = useColor();
  const { t } = useTranslation();
  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <section className="brandNewMusic section">
          <h1>{t('brandNewMusic.welcomeMessage')}</h1>
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
