import React from 'react';
import './01_ComponentsStyling/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
          className="monkey"
          src="/Upload/Äffchen.png"
          alt="Profile"
          onClick={() => navigate('/Profile')}
          style={{ cursor: 'pointer' }}
        />
      </nav>
    </div>
  );
};
