import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import der Profile-Seite und Subpages
import Profile from '@pages/Profile.jsx';
import Bibilothek from '@pages/Subpages/Profile/Bibilothek';
import EditProfile from '@pages/Subpages/Profile/EditProfile';
import Wishlist from '@pages/Subpages/Profile/01_SubpagesBibilothek/01_Wishlist';
import Favourites from '@pages/Subpages/Profile/01_SubpagesBibilothek/02_Favourites';
import UnreadingBooks from '@pages/Subpages/Profile/01_SubpagesBibilothek/03_UnreadingBooks';
import Userlist from '@pages/Subpages/Profile/01_SubpagesBibilothek/04_Userlist';

const ProfileRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/bibilothek" element={<Bibilothek />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/bibilothek/wishlist" element={<Wishlist />} />
      <Route path="/bibilothek/favourites" element={<Favourites />} />
      <Route path="/bibilothek/unreadingbooks" element={<UnreadingBooks />} />
      <Route path="/profile/bibilothek/userlist" element={<Userlist />} />
    </Routes>
  );
};

export default ProfileRouter;
