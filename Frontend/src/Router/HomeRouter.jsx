import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavState from '@components/navState.jsx';

// Import der Home-Seite und Subpages
import Home from '@bookpages/04_Home';
import ActiveBooks from '@bookpages/04.1_ActiveBook';
import Target from '@bookpages/04.3_Target';
import GetTarget from '@bookpages/04.2_GetTarget';
import AddActiveBook from '@bookpages/04.4_addActiveBook';

import AddActiveSeries from '@moviepages/addActiveSeries.jsx';

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {NavState === 'book' && (
        <Route path="/addactivebook" element={<AddActiveBook />} />
      )}
      {NavState === 'movie' && (
        <Route path="/addactiveseries" element={<AddActiveSeries />} />
      )}
      <Route path="/activeBook" element={<ActiveBooks />} />
      <Route path="/target" element={<Target />} />
      <Route path="/getTarget" element={<GetTarget />} />
    </Routes>
  );
};

export default HomeRouter;
