import React, { useState, createContext, useContext, useEffect } from 'react';
//import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // useEffect(() => {
  //   const token = localStorage.getItem('authToken');
  //   if (token) {
  //     console.log(`token:${token}`);
  //     verifyToken(token);
  //   } else {
  //     console.log(`token empty`);
  //   }
  // }, []);

  // const verifyToken = async (token) => {
  //   try {
  //     const response = await fetch('http://localhost:4001/api/users/login', {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (response.ok) {
  //       navigate('/home'); //verify token - pass
  //     } else {
  //       localStorage.removeItem('authToken'); //error destroy token
  //     }
  //   } catch (error) {
  //     console.error('Token verification error:', error);
  //     localStorage.removeItem('authToken'); //error destroy token
  //   }
  // };
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
