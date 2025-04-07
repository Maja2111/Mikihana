import React from 'react';

import { useColor } from '@context/ColorContext';
import { Header } from '@components/Header';
import { NavigateToLogin } from '@components/NavigateTo.jsx';

import '@/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Impressum = () => {
  const { color } = useColor();
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main className="main">
        <section className="section">
          <h2>Impressum</h2>
          <p>
            Mikihana <br />
            Vulkanstraße 1 <br />
            10367 Berlin
          </p>
          <p>
            Telefon: 01731658347
            <br />
            E-Mail:{' '}
            <a href="mailto:sabine.weber@dci-student.org.">
              sabine.weber@dci-student.org.
            </a>
            <br />
          </p>
          <p>
            <strong>Vertreten durch:</strong>
            <br />
            Danny Wild
            <br />
            Jeerabut Yolchaisong,
            <br />
            Sabine Weber
          </p>
          <p>
            Quelle: <a href="https://www.juraforum.de">click me</a>
          </p>
        </section>
        <NavigateToLogin />
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
export default Impressum;
