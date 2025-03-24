import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import der AllSearch-Seite und Subpages
import AllSearch from '@bookpages/03_AllSearch'; // Updated import path
import BrandNew from '@bookpages/03.2_BrandNew';
import MustRead from '@bookpages/03.3_MustRead';

import BrandNewMovie from '@moviepages/BrandNewMovie.jsx';
import MustWatch from '@moviepages/MustWatch.jsx';

import BrandNewMusic from '@musicpages/BrandNewMusic.jsx';
import MustListen from '@musicpages/MustListen.jsx';

const AllSearchRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AllSearch />} />

      <Route path="/brandnew" element={<BrandNew />} />
      <Route path="/brandnewmovie" element={<BrandNewMovie />} />
      <Route path="/brandnewmusic" element={<BrandNewMusic />} />

      <Route path="/mustread" element={<MustRead />} />
      <Route path="/mustwatch" element={<MustWatch />} />
      <Route path="/mustlisten" element={<MustListen />} />
    </Routes>
  );
};

export default AllSearchRouter;
