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
import { useNavigate } from 'react-router-dom';
import { LoginButton, ToRegisterPage } from '../Components/MainButtons.jsx';
import '../src/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: Implementiere die tatsächliche Anmeldelogik
    navigate('/home');
  };

  return (
    <div className="container">
      <header className="header">
        <img src="/Upload/Logo Cayenne.png" alt="logo" className="logo" />
        <h1>Welcome to Mikihana, your App for Books and more!</h1>
      </header>
      <main>
        <img
          src="/Upload/Äffchen.png"
          alt="profilpicture"
          className="profilPicture"
        />
        <h2>USER LOGIN</h2>
        <input type="text" placeholder="USERNAME" />
        <input type="password" placeholder="PASSWORD" />
        <LoginButton onClick={handleLogin} />
      </main>
      <footer>
        <p>Forgot password? Click here!</p>{' '}
        {'Clickbar machen Alert Fenster, email'}
        <ToRegisterPage />
        <p>
          <FontAwesomeIcon icon={faCopyright} />
          Copyright 2025 Mikihana
        </p>
      </footer>
    </div>
  );
};
export default Login;
