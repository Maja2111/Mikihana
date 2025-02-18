/**
 * @description:
 * Page für die Registerierung
 *
 */

import React from 'react';
import '../src/index.css';
import { RegisterButton } from '../Components/Buttons/OnClickButtons';

const Registeration = () => {
  return (
    <div className="container">
      <header className="header">
        <img
          src="Frontend/vite-project/Upload/Logo Cayenne.png"
          alt="logo"
          className="logo"
        />
        <h1>
          Welcome to Mikihana, your App for Books,Audiobooks,Movies and more!
        </h1>
      </header>
      <main>
        <img
          src="Frontend/vite-project/Upload/Äffchen.png"
          alt="profilpicture"
          className="profilPicture"
        />
        <h2>REGISTATION</h2>
        <form>
          <input type="text" placeholder="FIRST NAME" />
          <input type="text" placeholder="LAST NAME" />
          <input type="text" placeholder="USERNAME" />
          <input type="email" placeholder="EMAILADRESS" />
          <input type="password" placeholder="PASSWORD" />
          <input type="password" placeholder="PASSWORD REPEAT" />
          <input type="date" placeholder="TT.MM.JJJJ" />
          <input
            type="checkbox"
            name="gender"
            id="gender"
            placeholder="GENDER"
          />
        </form>
        <RegisterButton />
      </main>
      <footer>
        <p>Copyright 2025 Mikihana</p>
      </footer>
    </div>
  );
};
export default Registeration;
