import './index.css';
import React from 'react';
import Login from '../Pages/Login';
import Registeration from '../Pages/Registration';

function App() {
  return (
    <div className="app">
      <nav>
        <Login />
        <Registeration />
      </nav>
    </div>
  );
}

export default App;
