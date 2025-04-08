import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import { useColor } from '@context/ColorContext';

import '@/index.scss';

const AddedMovie = () => {
  const { colorScheme } = useColor();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      title: event.target.title.value,
      genre: event.target.genre.value,
      synopsis: event.target.synopsis.value,
    };
    // Bei Erfolg:
    setSuccessMessage(t('addMovie.successMessage'));
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
            placeholder={t('addMovie.titlePlaceholder')}
            required
          />
          <input
            type="text"
            name="genre"
            placeholder={t('addMovie.genrePlaceholder')}
            required
          />
          <textarea
            type="text"
            name="synopsis"
            placeholder={t('addMovie.descriptionPlaceholder')}
          />
          <button type="submit">{t('addMovie.saveButton')}</button>
        </form>
      </section>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default AddedMovie;
