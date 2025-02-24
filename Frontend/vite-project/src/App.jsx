import './index.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login.jsx';
import Registeration from '../Pages/Registration.jsx';
import Home from '../Pages/Home.jsx';
import Profil from '../Pages/Profil.jsx';
import AllSearch from '../Pages/AllSearch.jsx';
import Target from '../Pages/Subpages/Home/Target.jsx';
import Bibilothek from '../Pages/Subpages/Profil/Bibilothek.jsx';
import EditProfile from '../Pages/Subpages/Profil/EditProfile.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/allsearch" element={<AllSearch />} />
        <Route path="/home/target" element={<Target />} />
        <Route path="/profil/bibliothek" element={<Bibilothek />} />
        <Route path="/profil/edit-profile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
