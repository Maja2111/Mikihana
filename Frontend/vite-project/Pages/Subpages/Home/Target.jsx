// Page die Ziele erstellt
import React, { useState } from 'react';
import '../../../src/index.scss';
import { Header } from '../../../Components/Header.jsx';
import { Footer } from '../../../Components/Footer.jsx';

const Target = () => {
  const [goalType, setGoalType] = useState('book');
  const [isRecurring, setIsRecurring] = useState(false);
  const [interval, setInterval] = useState('monthly');

  const handleGoalTypeChange = (event) => {
    setGoalType(event.target.value);
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
        <h1>target goal</h1>
        <p>Set yourself a goal that you want to complete by a certain date!</p>
      </header>
      <main>
        <section className="targetTitle">
          <input type="text" placeholder="Title angeben" />
        </section>
        <section className="sectionTwo">
          <label htmlFor="goalType">Wählen Sie Ihr Ziel:</label>
          <select
            id="goalType"
            value={goalType}
            onChange={handleGoalTypeChange}
          >
            <option value="book">Buch</option>
            <option value="page">Seite</option>
          </select>
          <input
            type="number"
            placeholder={`Anzahl der ${
              goalType === 'book' ? 'Bücher' : 'Seiten'
            }`}
          />
        </section>
        <section className="time period">
          <div>
            <label htmlFor="recurringGoal">Wiederkehrendes Ziel:</label>
            <input
              type="checkbox"
              id="recurringGoal"
              checked={isRecurring}
              onChange={handleRecurringToggle}
            />
          </div>
          {isRecurring && (
            <div>
              <label htmlFor="interval">Intervall:</label>
              <select
                id="interval"
                value={interval}
                onChange={handleIntervalChange}
              >
                <option value="monthly">Monatlich</option>
                <option value="yearly">Jährlich</option>
              </select>
            </div>
          )}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Target;
