/**
 * @description:
 * Page die Homepage "Hauptbereich"
 */

import React from 'react';
import '../src/index.css';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <img
          src="Frontend/vite-project/Upload/Logo Cayenne.png"
          alt="logo"
          className="logo"
        />
        <h1>Your main area</h1>
      </header>
      <main>
        <section className="activeBook">
          <h2>Active Book</h2>
          <p>{title}</p>
          <p>{author}</p>
          <div className="progress">Progress</div>
          <button>Update</button>
          <button>sharing</button>
          <img src="" alt="cover" />
          <FontAwesomeIcon icon="fa-regular fa-square-plus" />
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </section>
        <section className="target"></section>
        <section className="pageStatistic"></section>
        <section className="booksStatistic"></section>
        <section className="series"></section>
      </main>
      <footer>
        <FontAwesomeIcon icon="fa-solid fa-house-chimney" />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <img src="Frontend/vite-project/Upload/Äffchen.png" alt="Profile" />

        <p>
          <FontAwesomeIcon icon="fa-regular fa-copyright" />
          Copyright 2025 Mikihana
        </p>
      </footer>
    </div>
  );
};
export default Home; // Export the component as the default export
