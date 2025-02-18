/**
 * @description für Loginformular
 * Sprachübersetzer auf deutsch, default Sprache Englisch
 * Logo rechts in der Ecke
 * h1
 * h2
 * Profilfoto
 * container bis zum Ende der Seite
 * zwei Inputfelder
 * Login Button
 * p Passwort vergessen? Call to action zum clicken
 * weiterführung zur Registrierung
 */

import React from 'react';
import {
  LoginButton,
  ToRegisterPage,
} from '../Components/Buttons/OnClickButtons.jsx';

import '../src/index.css';

const Login = () => {
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
        <h2>USER LOGIN</h2>
        <input type="text" placeholder="USERNAME" />
        <input type="password" placeholder="PASSWORD" />
        <LoginButton />
      </main>
      <footer>
        <p>Forgot password? Click here!</p>
        <ToRegisterPage />
        <p>
          <FontAwesomeIcon icon="fa-regular fa-copyright" />
          Copyright 2025 Mikihana
        </p>
      </footer>
    </div>
  );
};
export default Login; //exportiere Login als default
