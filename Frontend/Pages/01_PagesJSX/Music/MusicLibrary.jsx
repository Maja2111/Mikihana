import React from 'react';
import { useTranslation } from 'react-i18next';

import '@/index.scss';
import { useColor } from '@context/ColorContext';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { NavigateToProfile } from '@components/NavigateTo.jsx';

const MusicLibrary = () => {
  const { colorScheme } = useColor();
  const { t } = useTranslation();
  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <h2>{t('musicLibrary.title')}</h2>
        <section className="section">
          <img
            id="coming-soon"
            src="/Upload/coming soon.png"
            alt="coming soon"
          />
        </section>
        <NavigateToProfile />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default MusicLibrary;
