import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('authToken'))
  );
  const [userName, setUserName] = useState('');

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userName,
        setUserName,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
