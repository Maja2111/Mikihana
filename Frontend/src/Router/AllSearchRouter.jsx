import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import der AllSearch-Seite und Subpages
import AllSearch from '@pages/03_AllSearch';
import BrandNew from '@pages/03.2_BrandNew';
import MustRead from '@pages/03.3_MustRead';

const AllSearchRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AllSearch />} />
      <Route path="/allsearch/brandnew" element={<BrandNew />} />
      <Route path="/mustread" element={<MustRead />} />
    </Routes>
  );
};

export default AllSearchRouter;
