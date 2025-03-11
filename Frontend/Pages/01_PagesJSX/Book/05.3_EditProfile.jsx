// subpage von der Homepage aus

import React from 'react';
import '@/index.scss';
import '@pagestyle/EditProfile.scss';
import { Header } from '@components/Header.jsx';
import { Footer } from '@components/Footer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const EditProfile = () => {
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
          <FontAwesomeIcon icon={faPen} id="pen" />
          <form>
            <input type="text" placeholder="USERNAME " />
            <input type="email" placeholder="EMAIL-ADDRESS" />
            <input type="password" placeholder="PASSWORD" />
            <input type="password" placeholder="PASSWORD REPEAT" />
            <input type="number" placeholder="PHONENUMBER" />
            <select name="language" id="language">
              <option value="en">English</option>
              <option value="de">Deutsch</option>
            </select>
          </form>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default EditProfile;
