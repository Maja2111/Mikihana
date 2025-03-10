// Subpage die die Ziele anzeigt

// Entwicklerimporte
import React from 'react';

//Componetsimporte
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { LoadingCircle } from '@components/LoadingCircle.jsx';
import { goals } from '@/mockData.js';

//Stylingimporte
import '@/index.scss';
import '@pagestyle/GetTarget.scss';

const GetTarget = () => {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <h1>Your reading target</h1>
        <section className="goalsList">
          {goals.map((goal) => (
            <div key={goal.id} className="goalItem">
              <h3>Targettitle</h3>
              <p>
                <strong>type:</strong> {goal.type}
              </p>
              <p>
                <strong>target:</strong> {goal.target}
              </p>
              <p>
                <strong>interval:</strong> {goal.interval}
              </p>
              <LoadingCircle />
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
