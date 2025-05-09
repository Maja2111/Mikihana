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

import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//Componentsimporte
import { Header } from '@components/Header.jsx';
import { LoginContext } from '@context/isLoggedIn.jsx';
import { useColor } from '@context/ColorContext';

//Styingimporte
import '@/index.scss';
import '@pagestyle/Login.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Login = () => {
  const { colorScheme } = useColor();
  const navigate = useNavigate();
  const loginData = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleLogin = async () => {
    const username = document.querySelector(
      'input[placeholder="USERNAME"]'
    ).value; // Abfrage des Benutzernamens
    const password = document.querySelector(
      'input[placeholder="PASSWORD"]'
    ).value;

    try {
      const response = await fetch('http://localhost:4001/api/users/login', {
        // Sende die Login-Anfrage
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      localStorage.setItem('authToken', data.token);
      loginData.setIsLoggedIn(true); // Setze den Login-Status auf true

      alert('Login successful! Redirecting to home page.'); // Erfolgreiche Anmeldung
      navigate('/home'); // Navigation zur Home-Seite
    } catch (error) {
      alert(`Error: ${error.message}`); // Zeige Fehlermeldung an
    }
  };

  useEffect(() => {
    if (loginData.isLoggedIn) {
      navigate('/home'); // Umleitung zur Anmeldeseite, wenn der Benutzer nicht eingeloggt ist
    }
  }, [loginData, navigate]);

  const handleToRegisterPage = () => {
    navigate('/register');
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

  const handleNavigateToImpressum = () => {
    navigate('/impressum');
  };

  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <h1>{t('login.welcome')}</h1>
        <section className="section">
          <h2>{t('login.title')}</h2>
          <p>
            <img
              src="/Upload/Äffchen.png"
              alt="profilepicture"
              className="profilePicture"
            />
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleLogin();
            }}
          >
            <input type="text" placeholder={t('login.username')} />
            <input type="password" placeholder={t('login.password')} />
          </form>
          <button className="clickButton" onClick={handleLogin}>
            {t('login.button')}
          </button>
        </section>
        <p
          onClick={handleForgotPassword}
          style={{
            cursor: 'pointer',
            color: 'blue',
            textDecoration: 'underline',
            marginBottom: '1rem',
          }}
        >
          {t('login.forgotPassword')}
        </p>
        <button className="clickButton" onClick={handleToRegisterPage}>
          {t('login.registerPrompt')}
        </button>
      </main>

      <footer id="loginFooter">
        <div className="impressum" onClick={handleNavigateToImpressum}>
          {t('footer.impressum')}
        </div>
        <div>
          <FontAwesomeIcon icon={faCopyright} />
          {t('footer.copyright')}
        </div>
      </footer>
    </div>
  );
};

export default Login;
