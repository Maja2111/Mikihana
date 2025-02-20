import './index.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login.jsx';
import Registeration from '../Pages/Registration.jsx';
import Home from '../Pages/Home.jsx';
import Profil from '../Pages/Profil.jsx';
import AllSearch from '../Pages/AllSearch.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registeration />} />

        <Route path="/home" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/allsearch" element={<AllSearch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
