import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pageimporte
import Login from '@pages/01_Login';
import Registration from '@pages/02_Registration';

// Routerimporte
import HomeRouter from './Router/HomeRouter';
import ProfileRouter from './Router/ProfileRouter';
import AllSearchRouter from './Router/AllSearchRouter';

// Stylingimporte
import './index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Hauptseiten */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home/*" element={<HomeRouter />} />
        <Route path="/profile/*" element={<ProfileRouter />} />
        <Route path="/allsearch/*" element={<AllSearchRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
