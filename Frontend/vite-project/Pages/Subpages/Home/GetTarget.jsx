// Subpage die die Ziele anzeigt
import React from 'react';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';

const GetTarget = () => {
  // Beispielziele (später dynamisch aus einem State oder Backend laden)
  const goals = [
    { id: 1, type: 'Buch', target: 5, interval: 'Monatlich' },
    { id: 2, type: 'Seite', target: 100, interval: 'Jährlich' },
  ];

  return (
    <div className="container">
      <header>
        <Header />
        <h1>your reading goals</h1>
      </header>
      <main>
        <section className="goals-list">
          {goals.map((goal) => (
            <div key={goal.id} className="goal-item">
              <p>
                <strong>Typ:</strong> {goal.type}
              </p>
              <p>
                <strong>Ziel:</strong> {goal.target}
              </p>
              <p>
                <strong>Intervall:</strong> {goal.interval}
              </p>
            </div>
          ))}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default GetTarget;
