import React from 'react';
import { useColor } from '@context/ColorContext';

const ColorSwitch = () => {
  const { colorScheme, toggleColorScheme } = useColor(); // colorScheme hinzufügen

  const handleColorChange = (event) => {
    toggleColorScheme(event.target.value);
  };

  return (
    <div>
      <label htmlFor="color-scheme">Choose your style:</label>
      <select
        id="color-scheme"
        onChange={handleColorChange}
        value={colorScheme}
      >
        {' '}
        {/* Standardwert setzen */}
        <option value="light">Light</option> {/* Standardoption hinzufügen */}
        <option value="green">Green</option>
        <option value="rose">Rose</option>
        <option value="blue">Blue</option>
        <option value="grey">Grey</option>
      </select>
    </div>
  );
};

export default ColorSwitch;
