import React, { useState, useEffect, createContext } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [navState, setNavState] = useState('book'); // Added state for nav state
  return (
    <NavContext.Provider value={{ navState, setNavState }}>
      {children}
    </NavContext.Provider>
  );
};
