import React from 'react';

const NavState = ({ currentState, setCurrentState }) => {
  return (
    <nav>
      <button onClick={() => setCurrentState('book')}>Books</button>
      <button onClick={() => setCurrentState('movie')}>Movies</button>
      <button onClick={() => setCurrentState('music')}>Music</button>
    </nav>
  );
};

export default NavState;
