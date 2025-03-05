import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@style/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate('/'); // Navigate to the login page
  };

  return (
    <div className="Header">
      <button className="icon-button" onClick={handleIconClick}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
      <img src="/Upload/Logo Cayenne.png" alt="logo" className="logo" />
    </div>
  );
};
