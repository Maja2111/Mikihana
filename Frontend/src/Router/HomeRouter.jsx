import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { NavContext } from '@context/navContext.jsx';

// Import der Home-Seite und Subpages
import Home from '@bookpages/04_Home';
import ActiveBooks from '@bookpages/04.1_ActiveBook';
import Target from '@bookpages/04.3_Target';
import GetTarget from '@bookpages/04.2_GetTarget';
import AddActiveBook from '@bookpages/04.4_addActiveBook';

import AddActiveSeries from '@moviepages/addActiveSeries.jsx';
import UpdateActiveSeries from '@moviepages/UpdateActiveSeries.jsx';

const HomeRouter = () => {
  const { navState } = useContext(NavContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {navState === 'book' && (
        <>
          <Route path="addActiveBook" element={<AddActiveBook />} />
          <Route path="activeBook" element={<ActiveBooks />} />
          <Route path="target" element={<Target />} />
          <Route path="getTarget" element={<GetTarget />} />
        </>
      )}
      {navState === 'movie' && (
        <>
          <Route path="/addActiveSeries" element={<AddActiveSeries />} />
          <Route path="/updateActiveSeries" element={<UpdateActiveSeries />} />
        </>
      )}
    </Routes>
  );
};

export default HomeRouter;
