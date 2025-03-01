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
    confirmPassword: '',
    dob: '',
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
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Here you would typically make an API call to register the user
      // For now, we'll simulate a successful registration

      // Show success alert
      alert(
        'Registration successful! You will be redirected to the login page.'
      );

      // Wait 2 seconds before redirecting
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      alert('Registration failed. Please try again.');
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
              name="confirmPassword"
              placeholder="REPEAT PASSWORD"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="dob"
              placeholder="TT.MM.JJJJ"
              value={formData.dob}
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
