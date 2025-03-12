import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

//navigation zurück zum Login -> Impressum
export function NavigateToLogin() {
  const navigate = useNavigate();
  const handleNavigateToLogin = () => {
    navigate('/');
  };
  return (
    <FontAwesomeIcon icon={faChevronLeft} onClick={handleNavigateToLogin} />
  );
}

//navigation zurück zur Home Seite -> activeBooks, getTarget, target
export function NavigateToHome() {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/home');
  };

  return (
    <FontAwesomeIcon icon={faChevronLeft} onClick={handleNavigateToHome} />
  );
}

//navigation zurück zur AllSearch Seite -> Brandnew, mustread
export function NavigateToAllSerach() {
  const navigate = useNavigate();
  const handleNavigateToAllSearch = () => {
    navigate('/allsearch');
  };
  return (
    <FontAwesomeIcon icon={faChevronLeft} onClick={handleNavigateToAllSearch} />
  );
}

//navigation zurück zur library Seite -> Wishlist, Favorites, UnreadingBooks, Userlist, AddBooksToList
export function NavigateToLibrary() {
  const navigate = useNavigate();
  const handleNavigateToLibrary = () => {
    navigate('/profile/library');
  };

  return (
    <FontAwesomeIcon icon={faChevronLeft} onClick={handleNavigateToLibrary} />
  );
}
