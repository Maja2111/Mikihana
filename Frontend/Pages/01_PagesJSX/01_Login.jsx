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

//Entwicklerimporte
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Componentsimporte
import { LoginButton, ToRegisterPage } from '@components/MainButtons.jsx';
import { Header } from '@components/Header.jsx';

//Styingimporte
import '@/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // TODO: Implementiere die tatsächliche Anmeldelogik
    navigate('/home');
  };

  const handleForgotPassword = () => {
    const userEmail = prompt('Please enter your e-mail address:');
    if (userEmail) {
      setEmail(userEmail);
      // Hier wird die E-Mail an das Backend gesendet
      console.log('E-mail for password recovery sent to:', userEmail);
      // TODO: Implementiere die Logik zum Senden der E-Mail an das Backend
      alert('An email has been sent to reset your password.');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <h1>Welcome to Mikihana, your App for Books and more!</h1>
        <img
          src="@assets/Äffchen.png"
          alt="profilpicture"
          className="profilPicture"
        />
        <h2>USER LOGIN</h2>
        <input type="text" placeholder="USERNAME" />
        <input type="password" placeholder="PASSWORD" />
        <LoginButton onClick={handleLogin} />
      </main>
      <footer>
        <p
          onClick={handleForgotPassword}
          style={{
            cursor: 'pointer',
            color: 'blue',
            textDecoration: 'underline',
            marginBottom: '1rem',
          }}
        >
          Forgot password? Click here!
        </p>
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
