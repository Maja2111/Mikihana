// Subpage die die Ziele anzeigt

// Entwicklerimporte
import React from 'react';
import { useTranslation } from 'react-i18next';

//Componetsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { LoadingCircle } from '@components/LoadingCircle.jsx';
import { goals } from '@/mockData.js';
import { NavigateToHome } from '@components/NavigateTo.jsx';
import { useColor } from '@context/ColorContext';

//Stylingimporte
import '@/index.scss';
import '@pagestyle/getTarget.scss';

const GetTarget = () => {
  const { colorScheme } = useColor();
  const { t } = useTranslation();
  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <h1>{t('getTarget.title')}</h1>
        {goals.map((goal) => (
          <section key={goal.id} className="goalItem section">
            <h3>{t('getTarget.targetTitle')}</h3>
            <div className="pelements">
              <p>
                <strong>{t('getTarget.type')}:</strong> {goal.type}
              </p>
              <p>
                <strong>{t('getTarget.target')}:</strong> {goal.target}
              </p>
              <p>
                <strong>{t('getTarget.interval')}:</strong> {goal.interval}
              </p>
            </div>
            <LoadingCircle />
          </section>
        ))}
        <NavigateToHome />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default GetTarget;
