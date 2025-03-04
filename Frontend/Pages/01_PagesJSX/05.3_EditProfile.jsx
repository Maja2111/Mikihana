// subpage von der Homepage aus

import React from 'react';
import '@/index.scss';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { EditButton } from '@components/MainButtons.jsx';

const EditProfile = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <img src="/Upload/Äffchen.png" alt="Äffchen" />
        <h1>Edit Profil </h1> <FontAwesomeIcon icon={faPen} />
        <form className="editProfil">
          <input type="text" placeholder="USERNAME " />
          <FontAwesomeIcon icon={faPen} />
          <input type="email" placeholder="EMAIL-ADDRESS" />
          <FontAwesomeIcon icon={faPen} />
          <input type="password" placeholder="PASSWORD" />
          <FontAwesomeIcon icon={faPen} />
          <input type="password" placeholder="PASSWORD REPEAT" />
          <FontAwesomeIcon icon={faPen} />
          <input type="number" placeholder="PHONENUMBER" />
          <FontAwesomeIcon icon={faPen} />
          <input
            type="radio"
            name="language"
            id="language"
            placeholder="LANGUAGE"
          />
          <FontAwesomeIcon icon={faPen} />
        </form>
        <EditButton />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default EditProfile;
