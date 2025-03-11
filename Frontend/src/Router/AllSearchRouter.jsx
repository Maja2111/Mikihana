import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import der AllSearch-Seite und Subpages
import AllSearch from '@bookpages/03_AllSearch'; // Updated import path
import BrandNew from '@bookpages/03.2_BrandNew';
import MustRead from '@bookpages/03.3_MustRead';

const AllSearchRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AllSearch />} />
      <Route path="/brandnew" element={<BrandNew />} />
      <Route path="/mustread" element={<MustRead />} />
    </Routes>
  );
};

export default AllSearchRouter;
