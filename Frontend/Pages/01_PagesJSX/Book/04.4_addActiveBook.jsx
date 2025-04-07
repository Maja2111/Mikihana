import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '@/index.scss';
import '@pagestyle/addActiveBook.scss';

import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';

import { useColor } from '@context/ColorContext';

const AddActiveBook = () => {
  const { colorScheme } = useColor();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hier können Sie die Logik zum Hinzufügen des Buches implementieren
    // Zum Beispiel: ein API-Call, um das Buch zu speichern

    // Nach dem Hinzufügen des Buches zurück zur Hauptseite navigieren
    navigate('/home');
  };

  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <div className="add-active-book">
        <section className="section">
          <h2>add new active book</h2>
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
                type="text"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                required
                placeholder="author"
              />
            </div>
            <button type="submit" className="clickButton">
              ADD NEW ACTIVE BOOK
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

export default AddActiveBook;
