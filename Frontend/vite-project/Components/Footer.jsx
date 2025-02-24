import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faMagnifyingGlass,
  faCopyright,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <nav className="Iconbar">
        <FontAwesomeIcon
          icon={faHouse}
          onClick={() => navigate('/Home')}
          style={{ cursor: 'pointer' }}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={() => navigate('/AllSearch')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src="/Upload/Äffchen.png"
          alt="Profile"
          onClick={() => navigate('/Profil')}
          style={{ cursor: 'pointer' }}
        />
      </nav>
      <FontAwesomeIcon icon={faCopyright} />
      <p>Copyright 2025 Mikihana</p>
    </div>
  );
};
