import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import der Profile-Seite und Subpages
import Profile from '@bookpages/05_Profile.jsx';
import Library from '@bookpages/05.1_Library.jsx';
import Wishlist from '@bookpages/05.1.1_Wishlist.jsx';
import Favourites from '@bookpages/05.1.2_Favourites.jsx';
import UnreadBooks from '@bookpages/05.1.3_UnreadBooks.jsx';
import Userlist from '@bookpages/05.1.4_Userlist.jsx';
import EditProfile from '@bookpages/05.3_EditProfile.jsx';
import AddedBook from '@bookpages/05.1.5_AddBooksToList.jsx';

import VideoLibrary from '@moviepages/VideoLibrary.jsx';
import MusicLibrary from '@musicpages/MusicLibrary.jsx';

const ProfileRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/library" element={<Library />} />
      <Route path="/library/wishlist/" element={<Wishlist />}>
        <Route path="add-books-to-list" element={<AddedBook />} />
      </Route>
      <Route path="/library/favourites" element={<Favourites />}>
        <Route path="add-books-to-list" element={<AddedBook />} />
      </Route>
      <Route path="/library/unreadbooks" element={<UnreadBooks />}>
        <Route path="add-books-to-list" element={<AddedBook />} />
      </Route>
      <Route path="/library/userlist" element={<Userlist />}>
        <Route path="add-books-to-list" element={<AddedBook />} />
      </Route>
      <Route path="/videolibrary" element={<VideoLibrary />} />
      <Route path="/musiclibrary" element={<MusicLibrary />} />
      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  );
};

export default ProfileRouter;
