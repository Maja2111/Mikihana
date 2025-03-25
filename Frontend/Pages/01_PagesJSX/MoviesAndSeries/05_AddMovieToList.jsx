import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import '@/index.scss';

const AddedMovie = () => {
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
    setSuccessMessage('Movie successfully added!');
    const from = location.state?.from || '/default-path'; // Fallback-Pfad
    navigate(from);
  };
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="genre" placeholder="Genre" required />
          <textarea type="text" name="synopsis" placeholder="Description" />
          <button type="submit">SAVE</button>
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
