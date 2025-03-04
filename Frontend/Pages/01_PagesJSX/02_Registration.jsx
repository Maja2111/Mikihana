/**
 * @description:
 * Page für die Registerierung
 *
 */

//Entwicklerimporte
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Componentsimporte
import { Header } from '@components/Header.jsx';

//Stylingimporte
import '@/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Registeration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    passwordRepeat: '',
    birthday: '',
    gender: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = async (event) => {
    event.preventDefault();

    // Basic validation
    if (formData.password !== formData.passwordRepeat) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:4001/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          passwordRepeat: formData.passwordRepeat,
          birthday: new Date(formData.birthday).getTime(),
          gender: formData.gender,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      alert(
        'Registration successful! You will be redirected to the login page.'
      );
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      const errorMessage = error.message || 'Please try again.';
      alert(`Registration failed: ${errorMessage}`);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <h1>Welcome to Mikihana, your App for Books and more!</h1>
        <section>
          <h2>REGISTRATION</h2>
          <p>
            <img
              src="/Upload/Äffchen.png"
              alt="profilepicture"
              className="profilePicture"
            />
          </p>
          <form onSubmit={handleRegistration}>
            <input
              type="text"
              name="firstName"
              placeholder="FIRST NAME"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="LAST NAME"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="USERNAME"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="passwordRepeat"
              placeholder="REPEAT PASSWORD"
              value={formData.passwordRepeat}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="birthday"
              placeholder="TT.MM.JJJJ"
              value={formData.birthday}
              onChange={handleInputChange}
              required
            />
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">GENDER</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Diverse</option>
            </select>
            <button type="submit" className="clickButton">
              REGISTER
            </button>
          </form>
        </section>
      </main>
      <footer>
        <p>
          <FontAwesomeIcon icon={faCopyright} />
          Copyright 2025 Mikihana
        </p>
      </footer>
    </div>
  );
};

export default Registeration;
