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
import { Header } from '@components/Header.jsx';

//Styingimporte
import '@/index.scss';
import '@pagestyle/Login.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    const username = document.querySelector(
      'input[placeholder="USERNAME"]'
    ).value;
    const password = document.querySelector(
      'input[placeholder="PASSWORD"]'
    ).value;

    try {
      const response = await fetch('http://localhost:4001/api/users/login', {
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

      alert('Login successful! Redirecting to home page.');
      navigate('/home');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

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
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <h1>Welcome to Mikihana, your App for Books and more!</h1>
        <section>
          <h2>USER LOGIN</h2>
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
            <input type="text" placeholder="USERNAME" />
            <input type="password" placeholder="PASSWORD" />
          </form>
          <button className="clickButton" onClick={handleLogin}>
            LOGIN
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
          Forgot password? Click here!
        </p>
        <button className="clickButton" onClick={handleToRegisterPage}>
          Don't have an account? Register here!
        </button>
      </main>

      <footer>
        <div>
          <div className="impressum" onClick={handleNavigateToImpressum}>
            Impressum
          </div>
          <p>
            <FontAwesomeIcon icon={faCopyright} />
            Copyright 2025 Mikihana
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Login;
