/**
 * @description: MainButtons mit onclick
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

// Login Button auf der LandingPage
export const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="MainButtons"
      onClick={() => {
        navigate('/home');
      }}
    >
      Login
    </button>
  );
};

// Register Button auf der LandingPage
export const RegisterButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="MainButtons"
      onClick={() => {
        navigate('/home');
      }}
    >
      Register
    </button>
  );
};

// SpeicherButton auf der Subpage Target

export function SaveButton() {
  const navigate = useNavigate();
  return (
    <button className="MainButtons" onClick={() => navigate('/')}>
      Save
    </button>
  );
}

// Edit Button auf Subpage EditProfile

export function EditButton() {
  const navigate = useNavigate();
  return (
    <button className="MainButtons" onClick={() => navigate('/')}>
      Save Change
    </button>
  );
}
