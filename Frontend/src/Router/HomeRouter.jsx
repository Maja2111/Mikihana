import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import der Home-Seite und Subpages
import Home from '@pages/04_Home';
import ActiveBooks from '@pages/04.1_ActiveBook';
import Target from '@pages/04.3_Target';
import GetTarget from '@pages/04.2_GetTarget';

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
