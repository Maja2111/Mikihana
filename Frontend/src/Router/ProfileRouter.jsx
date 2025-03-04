import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import der Profile-Seite und Subpages
import Profile from '@pages/05_Profile.jsx';
import Library from '@pages/05.1_Library.jsx';
import Wishlist from '@pages/05.1.1_Wishlist.jsx';
import Favourites from '@pages/05.1.2_Favourites.jsx';
import UnreadingBooks from '@pages/05.1.3_UnreadingBooks.jsx';
import Userlist from '@pages/05.1.4_Userlist.jsx';
import EditProfile from '@pages/05.3_EditProfile.jsx';
import AddedBook from '@pages/05.1.5_AddBooksToList.jsx';

const ProfileRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/library" element={<Library />} />
      <Route path="/library/wishlist/" element={<Wishlist />}>
        <Route path="add-books-to-list" element={<AddedBook />} />
      </Route>
      <Route path="/library/favourites" element={<Favourites />} />
      <Route path="/library/unreadingbooks" element={<UnreadingBooks />} />
      <Route path="/library/userlist" element={<Userlist />} />
      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  );
};

export default ProfileRouter;
