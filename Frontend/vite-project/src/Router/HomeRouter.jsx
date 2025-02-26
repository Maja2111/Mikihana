import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import der Home-Seite und Subpages
import Home from '@pages/Home';
import ActiveBooks from '@pages/Subpages/Home/01_ActiveBook';
import Target from '@pages/Subpages/Home/Target';
import GetTarget from '@pages/Subpages/Home/GetTarget';

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activeBook" element={<ActiveBooks />} />
      <Route path="/target" element={<Target />} />
      <Route path="/getTarget" element={<GetTarget />} />
    </Routes>
  );
};

export default HomeRouter;
