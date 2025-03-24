import React, { useState } from 'react';
import '@style/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('/Home'); // Track the active item

  return (
    <div className="footer">
      <nav className="Iconbar">
        <li>
          <FontAwesomeIcon
            className={`home ${activeItem === '/Home' ? 'active' : ''}`}
            icon={faHouse}
            onClick={() => {
              setActiveItem('/Home'); // Set active item
              navigate('/Home');
            }}
          />
        </li>
        <li>
          <FontAwesomeIcon
            className={`allSearch ${
              activeItem === '/AllSearch' ? 'active' : ''
            }`}
            icon={faMagnifyingGlass}
            onClick={() => {
              setActiveItem('/AllSearch'); // Set active item
              navigate('/AllSearch');
            }}
          />
        </li>
        <li>
          <img
            className={`monkey ${activeItem === '/Profile' ? 'active' : ''}`}
            src="/Upload/Äffchen.png"
            alt="Profile"
            onClick={() => {
              setActiveItem('/Profile'); // Set active item
              navigate('/Profile');
            }}
          />
        </li>
      </nav>
    </div>
  );
};
