import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import { useColor } from '@context/ColorContext';

import '@/index.scss';

const AddedBook = () => {
  const { colorScheme } = useColor();
  const location = useLocation();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: event.target.title.value,
      author: event.target.author.value,
      genre: event.target.genre.value,
      synopsis: event.target.synopsis.value,
    };
    // Bei Erfolg:
    setSuccessMessage('Book successfully added!');
    const from = location.state?.from || '/default-path'; // Fallback-Pfad
    navigate(from);
  };

  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <section className="section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Author"
            required
          />
          <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Genre"
            required
          />
          <input
            type="text"
            name="synopsis"
            id="synopsis"
            placeholder="Description"
          />
          <button type="submit" className="clickButton">
            SAVE
          </button>
        </form>
      </section>

      {successMessage && <p className="success-message">{successMessage}</p>}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AddedBook;
