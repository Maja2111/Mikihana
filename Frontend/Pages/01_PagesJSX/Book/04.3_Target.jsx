// Page die Ziele erstellt
import React, { useState } from 'react';

import '@/index.scss';
import '@pagestyle/Target.scss';

import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { NavigateToHome } from '@components/NavigateTo.jsx';
import { useColor } from '@context/ColorContext';

const Target = () => {
  const { color } = useColor();
  const { t } = useTranslation();
  const [targetType, settargetType] = useState('book');
  const [isRecurring, setIsRecurring] = useState(false);
  const [interval, setInterval] = useState('monthly');

  const handletargetTypeChange = (event) => {
    settargetType(event.target.value);
  };

  const handleRecurringToggle = () => {
    setIsRecurring(!isRecurring);
  };

  const handleIntervalChange = (event) => {
    setInterval(event.target.value);
  };

  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <h1>{t('target.title')}</h1>
        <p>{t('target.description')}</p>
        <section className="targetTitle section">
          <input type="text" placeholder={t('target.titlePlaceholder')} />
        </section>
        <section className="sectionTwo section">
          <label htmlFor="targetType">{t('target.selectTarget')}</label>
          <select
            id="targetType"
            value={targetType}
            onChange={handletargetTypeChange}
          >
            <option value="book">{t('target.book')}</option>
            <option value="page">{t('target.pages')}</option>
          </select>
          <input
            type="number"
            placeholder={t(
              targetType === 'book'
                ? 'target.quantityBooks'
                : 'target.quantityPages'
            )}
          />
        </section>
        <section className="timePeriod section">
          <div>
            <label htmlFor="recurringtarget">
              {t('target.recurringTarget')}
            </label>
            <input
              type="checkbox"
              id="recurringtarget"
              checked={isRecurring}
              onChange={handleRecurringToggle}
            />
          </div>
          {isRecurring && (
            <div>
              <label htmlFor="interval">{t('target.interval')}</label>
              <select
                id="interval"
                value={interval}
                onChange={handleIntervalChange}
              >
                <option value="monthly">{t('target.monthly')}</option>
                <option value="yearly">{t('target.yearly')}</option>
              </select>
            </div>
          )}
          <button className="clickButton">{t('target.addGoal')}</button>
        </section>
        <NavigateToHome />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Target;
