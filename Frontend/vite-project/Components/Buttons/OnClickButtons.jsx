/**
 * @description: Buttons mit onclick
 */

import React from 'react';
import { useNavigate } from 'react';
import '../../../Styling/OnClickButton.css';

// Login Button auf der LandingPage
export function LoginButton() {
  const navigate = useNavigate();
  return (
    <button className="OnClickButton" onClick={() => navigate('/')}>
      LOGIN
    </button>
  );
}

//Button der von der LandingPage zur Registerung führt

export function ToRegisterPage() {
  const navigate = useNavigate();
  return (
    <button className="OnClickButton" onClick={() => navigate('/')}>
      Don't have an account? Register here!
    </button>
  );
}

//RegisterButton auf der Registerungspage

export function RegisterButton() {
  const navigate = useNavigate();
  return (
    <button className="OnClickButton" onClick={() => navigate('/')}>
      Register now!
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
