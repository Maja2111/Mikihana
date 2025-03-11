import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import der Home-Seite und Subpages
import Home from '@bookpages/04_Home';
import ActiveBooks from '@bookpages/04.1_ActiveBook';
import Target from '@bookpages/04.3_Target';
import GetTarget from '@bookpages/04.2_GetTarget';
import AddActiveBook from '@bookpages/04.4_addActiveBook';

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activeBook" element={<ActiveBooks />} />
      <Route path="/target" element={<Target />} />
      <Route path="/getTarget" element={<GetTarget />} />
      <Route path="/addActiveBook" element={<AddActiveBook />} />{' '}
      {/* Neue Route für das Hinzufügen eines Buches */}
    </Routes>
  );
};

export default HomeRouter;
