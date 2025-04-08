import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import { useColor } from '@context/ColorContext';

import '@/index.scss';

const AddedBook = () => {
  const { colorScheme } = useColor();
  const { t } = useTranslation();
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
    setSuccessMessage(t('addBooksToList.successMessage'));
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
            placeholder={t('addBooksToList.titlePlaceholder')}
            required
          />
          <input
            type="text"
            name="author"
            id="author"
            placeholder={t('addBooksToList.authorPlaceholder')}
            required
          />
          <input
            type="text"
            name="genre"
            id="genre"
            placeholder={t('addBooksToList.genrePlaceholder')}
            required
          />
          <input
            type="text"
            name="synopsis"
            id="synopsis"
            placeholder={t('addBooksToList.descriptionPlaceholder')}
          />
          <button type="submit" className="clickButton">
            {t('addBooksToList.saveButton')}
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
