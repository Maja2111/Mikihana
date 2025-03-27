// Page die Ziele erstellt
import React, { useState } from 'react';

import '@/index.scss';
import '@pagestyle/Target.scss';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { NavigateToHome } from '@components/NavigateTo.jsx';

const Target = () => {
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
    <div className="container">
      <header>
        <Header />
      </header>
      <main className="main">
        <h1>Your new goal</h1>
        <p>Set yourself a goal that you want to complete by a certain date!</p>
        <section className="targetTitle section">
          <input type="text" placeholder="enter title" />
        </section>
        <section className="sectionTwo section">
          <label htmlFor="targetType">Select your target:</label>
          <select
            id="targetType"
            value={targetType}
            onChange={handletargetTypeChange}
          >
            <option value="book">book</option>
            <option value="page">pages</option>
          </select>
          <input
            type="number"
            placeholder={`Quantity of ${
              targetType === 'book' ? 'books' : 'pages'
            }`}
          />
        </section>
        <section className="timePeriod section">
          <div>
            <label htmlFor="recurringtarget">Recurring target:</label>
            <input
              type="checkbox"
              id="recurringtarget"
              checked={isRecurring}
              onChange={handleRecurringToggle}
            />
          </div>
          {isRecurring && (
            <div>
              <label htmlFor="interval">interval:</label>
              <select
                id="interval"
                value={interval}
                onChange={handleIntervalChange}
              >
                <option value="monthly">monthly</option>
                <option value="yearly">yearly</option>
              </select>
            </div>
          )}
          <button className="clickButton">add new goal</button>
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
