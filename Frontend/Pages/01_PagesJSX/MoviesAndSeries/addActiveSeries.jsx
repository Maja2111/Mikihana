import React, { useState, useContext } from 'react';
import { NavStateContext } from '@components/NavStateContext'; // Importing context for navState
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import '@/index.scss';
import '@pagestyle/addActiveBook.scss';

const AddActiveSeries = () => {
  const [title, setTitle] = useState('');
  const [season, setSeason] = useState('');
  const [episode, setEpisode] = useState('');
  const { navState } = useContext(NavStateContext); // Accessing navState from context
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hier können Sie die Logik zum Hinzufügen des Buches implementieren
    // Zum Beispiel: ein API-Call, um das Buch zu speichern

    // Nach dem Hinzufügen des Buches zur aktiven Home-Seite navigieren, wenn navState movie ist
    if (navState === 'movie') {
      navigate('/activeSeries'); // Navigating to active series if navState is movie
    } else {
      navigate('/home'); // Default navigation to home
    }
  };

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <div className="add-active-book">
        <section>
          <h2>add new active series</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
                placeholder="title"
              />
            </div>
            <div>
              <input
                type="number"
                value={season}
                onChange={(event) => setSeason(event.target.value)}
                required
                placeholder="season"
              />
            </div>
            <div>
              <input
                type="number"
                value={episode}
                onChange={(event) => setEpisode(event.target.value)}
                required
                placeholder="episode"
              />
            </div>

            <button type="submit" className="clickButton">
              ADD NEW ACTIVE series
            </button>
          </form>
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AddActiveSeries;
