import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/index.scss';

const AddedBook = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Hier würde die Logik zum Hinzufügen des Buches stehen
    // Zum Beispiel ein API-Aufruf

    // Bei Erfolg:
    setSuccessMessage('Book successfully added!');

    // Nach 2 Sekunden zurück navigieren
    setTimeout(() => {
      navigate(-1); // Navigiert zurück zur vorherigen Seite
    }, 2000);
  };

  return (
    <div className="container">
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
          required
        />
        <button type="submit">SAVE</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default AddedBook;
