import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '@style/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <div className="footer">
      <nav className="Iconbar">
        <li>
          <FontAwesomeIcon
            className={`home ${
              location.pathname.includes('home') ? 'active' : ''
            }`}
            icon={faHouse}
            onClick={() => {
              location.pathname.includes('home');
              navigate('/home');
            }}
          />
        </li>
        <li>
          <FontAwesomeIcon
            className={`allSearch ${
              location.pathname.includes('allSearch') ? 'active' : ''
            }`}
            icon={faMagnifyingGlass}
            onClick={() => {
              location.pathname.includes('allSearch');
              navigate('/allSearch');
            }}
          />
        </li>
        <li>
          <img
            className={`monkey ${
              location.pathname.includes('profile') ? 'active' : ''
            }`}
            src="/Upload/Äffchen.png"
            alt="Profile"
            onClick={() => {
              location.pathname.includes('profile');
              navigate('/profile');
            }}
          />
        </li>
      </nav>
    </div>
  );
};
