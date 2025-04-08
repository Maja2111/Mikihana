/**
 * @description:
 * Page für die Registerierung
 *
 */

//Entwicklerimporte
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//Componentsimporte
import { Header } from '@components/Header.jsx';
import { useColor } from '@context/ColorContext';

//Stylingimporte
import '@/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Registeration = () => {
  const { colorScheme } = useColor();
  const navigate = useNavigate();
  const { t } = useTranslation();
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
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <h1>{t('registration.welcome')}</h1>
        <section className="section">
          <h2>{t('registration.title')}</h2>
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
              placeholder={t('registration.firstName')}
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder={t('registration.lastName')}
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder={t('registration.username')}
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t('registration.email')}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder={t('registration.password')}
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="passwordRepeat"
              placeholder={t('registration.repeatPassword')}
              value={formData.passwordRepeat}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="birthday"
              placeholder={t('registration.birthday')}
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
              <option value="">{t('registration.gender')}</option>
              <option value="male">{t('registration.genderMale')}</option>
              <option value="female">{t('registration.genderFemale')}</option>
              <option value="other">{t('registration.genderOther')}</option>
            </select>
            <button type="submit" className="clickButton">
              {t('registration.button')}
            </button>
          </form>
        </section>
      </main>
      <footer>
        <p>
          <FontAwesomeIcon icon={faCopyright} />
          {t('footer.copyright')}
        </p>
      </footer>
    </div>
  );
};

export default Registeration;
