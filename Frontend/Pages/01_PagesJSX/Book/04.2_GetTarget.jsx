// Subpage die die Ziele anzeigt

// Entwicklerimporte
import React from 'react';

//Componetsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { LoadingCircle } from '@components/LoadingCircle.jsx';
import { goals } from '@/mockData.js';
import { NavigateToHome } from '@components/NavigateTo.jsx';

//Stylingimporte
import '@/index.scss';
import '@pagestyle/getTarget.scss';

const GetTarget = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main className="main">
        <h1>Your reading goals</h1>
        {goals.map((goal) => (
          <section key={goal.id} className="goalItem section">
            <h3>Targettitle</h3>
            <div className="pelements">
              <p>
                <strong>Type:</strong> {goal.type}
              </p>
              <p>
                <strong>Target:</strong> {goal.target}
              </p>
              <p>
                <strong>Interval:</strong> {goal.interval}
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
