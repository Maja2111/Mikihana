import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pageimporte
import Login from '@pages/Login';
import Registeration from '@pages/Registration';
import Home from '@pages/Home';
import Profil from '@pages/Profil';
import AllSearch from '@pages/AllSearch';

// Subpagesimporte
import Target from '@pages/Subpages/Home/Target';
import GetTarget from '@pages/Subpages/Home/GetTarget';
import Bibilothek from '@pages/Subpages/Profil/Bibilothek';
import EditProfile from '@pages/Subpages/Profil/EditProfile';
import BrandNew from '@pages/Subpages/AllSearch/BrandNew';
import MustRead from '@pages/Subpages/AllSearch/MustRead';
import Wishlist from '@pages/Subpages/Profil/01_SubpagesBibilothek/01_Wishlist';
import Favourites from '@pages/Subpages/Profil/01_SubpagesBibilothek/02_Favourites';
import UnreadingBooks from '@pages/Subpages/Profil/01_SubpagesBibilothek/03_UnreadingBooks';
import Userlist from '@pages/Subpages/Profil/01_SubpagesBibilothek/04_Userlist';
import ActiveBooks from '@pages/Subpages/Home/01_ActiveBook';

// Stylingimporte
import './index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Hauptseiten */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/allsearch" element={<AllSearch />} />

        {/* Subpages für Home */}
        <Route path="/home/activeBook" element={<ActiveBooks />} />
        <Route path="/home/target" element={<Target />} />
        <Route path="/home/getTarget" element={<GetTarget />} />

        {/* Subpages für Profil */}
        <Route path="/profil/bibilothek" element={<Bibilothek />} />
        <Route path="/profil/bibilothek/wishlist" element={<Wishlist />} />
        <Route path="/profil/bibilothek/favourites" element={<Favourites />} />
        <Route
          path="/profil/bibilothek/unreadingbooks"
          element={<UnreadingBooks />}
        />
        <Route path="/profil/bibilothek/userlist" element={<Userlist />} />
        <Route path="/profil/edit-profile" element={<EditProfile />} />

        {/* Subpages für AllSearch */}
        <Route path="/allsearch/brandnew" element={<BrandNew />} />
        <Route path="/mustread" element={<MustRead />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
