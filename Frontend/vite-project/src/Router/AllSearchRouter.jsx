import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import der AllSearch-Seite und Subpages
import AllSearch from '@pages/AllSearch';
import BrandNew from '@pages/Subpages/AllSearch/BrandNew';
import MustRead from '@pages/Subpages/AllSearch/MustRead';

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
