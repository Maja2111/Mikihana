import React, { createContext, useState, useContext } from 'react';

// Erstellen des ColorContext
const ColorContext = createContext();

// Provider-Komponente für den ColorContext
export const ColorProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState('light'); // Standardfarbschema

  const toggleColorScheme = (scheme) => {
    setColorScheme(scheme);
  };

  return (
    <ColorContext.Provider value={{ colorScheme, toggleColorScheme }}>
      {children}
    </ColorContext.Provider>
  );
};

// Hook zum Verwenden des ColorContext
export const useColor = () => {
  return useContext(ColorContext);
};
