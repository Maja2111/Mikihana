/**
 * @description: Buttons mit onclick
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../Styling/OnClickButton.scss';

// Login Button auf der LandingPage
export const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="OnClickButton"
      onClick={() => {
        navigate('/login');
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
      className="OnClickButton"
      onClick={() => {
        navigate('/register');
      }}
    >
      Register
    </button>
  );
};

//Button der von der LandingPage zur Registerung führt

export function ToRegisterPage() {
  const navigate = useNavigate();
  return (
    <button className="OnClickButton" onClick={() => navigate('/register')}>
      Don't have an account? Register here!
    </button>
  );
}

//Aktualisieren Button auf der Subpage activeBook

export function UpdateButton() {
  const navigate = useNavigate();
  return (
    <button className="OnClickButton" onClick={() => navigate('/')}>
      Update
    </button>
  );
}

// SpeicherButton auf der Subpage Target

export function SaveButton() {
  const navigate = useNavigate();
  return (
    <button className="OnClickButton" onClick={() => navigate('/')}>
      Save
    </button>
  );
}

// Edit Button auf Subpage EditProfile

export function EditButton() {
  const navigate = useNavigate();
  return (
    <button className="OnClickButton" onClick={() => navigate('/')}>
      Save Change
    </button>
  );
}
