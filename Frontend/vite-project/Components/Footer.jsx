import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <div className="footer">
      <nav className="Iconbar">
        <FontAwesomeIcon icon={faHouse} />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <img src="Frontend/vite-project/Upload/Äffchen.png" alt="Profile" />
      </nav>

      <p>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        Copyright 2025 Mikihana
      </p>
    </div>
  );
};
