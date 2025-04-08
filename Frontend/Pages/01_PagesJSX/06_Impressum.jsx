import React from 'react';
import { useTranslation } from 'react-i18next';
import { useColor } from '@context/ColorContext';
import { Header } from '@components/Header';
import { NavigateToLogin } from '@components/NavigateTo.jsx';

import '@/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Impressum = () => {
  const { color } = useColor();
  const { t } = useTranslation();
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main className="main">
        <section className="section">
          <h2>{t('impressum.title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('impressum.address') }} />
          <p dangerouslySetInnerHTML={{ __html: t('impressum.contact') }} />
          <p>
            <strong>{t('impressum.representedBy')}</strong>
            <br />
            Danny Wild
            <br />
            Jeerabut Yolchaisong,
            <br />
            Sabine Weber
          </p>
          <p dangerouslySetInnerHTML={{ __html: t('impressum.source') }} />
        </section>
        <NavigateToLogin />
      </main>
      <footer>
        <p>
          <FontAwesomeIcon icon={faCopyright} />
          {t('impressum.copyright')}
        </p>
      </footer>
    </div>
  );
};
export default Impressum;
