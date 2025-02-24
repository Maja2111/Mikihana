import './index.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '@pages/Login';
import Registeration from '@pages/Registration';
import Home from '@pages/Home';
import Profil from '@pages/Profil';
import AllSearch from '@pages/AllSearch';
import Target from '@pages/Subpages/Home/Target';
import Bibilothek from '@pages/Subpages/Profil/Bibilothek';
import EditProfile from '@pages/Subpages/Profil/EditProfile';
import BrandNew from '@pages/Subpages/AllSearch/BrandNew';
import MustRead from '@pages/Subpages/AllSearch/MustRead';
import Wishlist from '@pages/Subpages/Profil/01_SubpagesBibilothek/01_Wishlist';
import Favourites from '@pages/Subpages/Profil/01_SubpagesBibilothek/02_Favourites';
import UnreadingBooks from '@pages/Subpages/Profil/01_SubpagesBibilothek/03_UnreadingBooks';
import Userlist from '@pages/Subpages/Profil/01_SubpagesBibilothek/04_Userlist';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/target" element={<Target />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil/bibilothek" element={<Bibilothek />} />
        <Route path="/profil/bibilothek/wishlist" element={<Wishlist />} />
        <Route path="/profil/bibilothek/favourites" element={<Favourites />} />
        <Route
          path="/profil/bibilothek/unreadingbooks"
          element={<UnreadingBooks />}
        />
        <Route path="/profil/bibilothek/userlist" element={<Userlist />} />
        <Route path="/profil/edit-profile" element={<EditProfile />} />
        <Route path="/allsearch" element={<AllSearch />} />
        <Route path="/allsearch/brandnew" element={<BrandNew />} />
        <Route path="/mustread" element={<MustRead />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
