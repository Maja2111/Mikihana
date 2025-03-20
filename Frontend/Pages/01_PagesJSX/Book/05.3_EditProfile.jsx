// subpage von der Homepage aus

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/index.scss';
import '@pagestyle/EditProfile.scss';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';

const EditProfile = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Bei Erfolg:
    setSuccessMessage('update successfully!');

    // Nach 2 Sekunden zurück navigieren
    setTimeout(() => {
      navigate(-1); // Navigiert zurück zur vorherigen Seite
    }, 2000);
  };
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <section className="editProfile">
          <h1>Edit Profil </h1>
          {/*verbindung zum Backend um das Profilbild zu ändern */}
          <img src="/Upload/Äffchen.png" alt="Äffchen" />
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="USERNAME " />
            <input type="email" placeholder="EMAIL-ADDRESS" />
            <input type="password" placeholder="PASSWORD" />
            <input type="password" placeholder="REPEAT PASSWORD" />
            <input type="number" placeholder="PHONENUMBER" />
          </form>
          <select name="language" id="language">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>
          <button type="submit" className="clickButton">
            SAVE CHANGE
          </button>
        </section>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default EditProfile;
