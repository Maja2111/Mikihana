import React, { useState, createContext, useContext, useEffect } from 'react';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      console.log(`token:${token}`);
      verifyToken(token);
    } else {
      console.log(`token empty`);
    }
  }, []);
  const verifyToken = async (token) => {
    try {
      console.log(`verifyToken`);
      const response = await fetch('http://localhost:4001/api/users/login', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Token verification error:', error);
      localStorage.removeItem('authToken'); //error destroy token
    }
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userName: [userName, setUserName],
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
