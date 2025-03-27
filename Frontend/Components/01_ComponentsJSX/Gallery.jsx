import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '@style/Gallery.scss';
import {
  galleryImagesMovie,
  galleryWithPlaceholderMovie,
} from '@/mockDataMovie.js';

let [galleryImages, setGalleryImages] = useState([]);
//allgemeine Gallery -> 05_Profile, 05.1_Library,
export function Gallery() {
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/searchBooks/example-query/0'); // Using 'example-query' as a placeholder
        const data = await response.json();
        setGalleryImages(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img alt={`gallery-${index}`} src={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

//Wishlist, Favourites, UnreadBook, Userlist,
export function GalleryWithPlaceholder({ listType }) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/searchBooks/example-query/0'); // Using 'example-query' as a placeholder
        const data = await response.json();
        setGalleryImages(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleNavigateToAddBooksToList = () => {
    const currentPath = window.location.pathname;
    const targetPath = `/profile/library/${listType}/add-books-to-list`;
    navigate(targetPath, {
      state: { from: currentPath },
    });
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img alt={`gallery-${index}`} src={image} />
          </div>
        ))}
        {/* Platzhalter für neues Buch */}
        <div
          className="gallery-item placeholder-item"
          onClick={handleNavigateToAddBooksToList}
        >
          <div className="placeholder-content">
            <span>+</span>
            <p>add new book</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//Home - section readingHistory
export function GalleryForReadingBooks() {
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/searchBooks/example-query/0'); // Using 'example-query' as a placeholder
        const data = await response.json();
        setGalleryImages(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {readingBooks.map((image, index) => (
          <div key={index} className="gallery-item">
            <img alt={`gallery-${index}`} src={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

//Watchlist, WatchFavorites, UnwatchList, MovieUserlist
export function GalleryWithPlaceholderMovie({ listType }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryWithPlaceholderMovie.map((image, index) => (
          <div key={index} className="gallery-item">
            <img alt={`gallery-${index}`} src={image} />
          </div>
        ))}
        {/* Platzhalter für neues Buch */}
        <div
          className="gallery-item placeholder-item"
          onClick={handleNavigateToAddMovieToList}
        >
          <div className="placeholder-content">
            <span>+</span>
            <p>add new movie</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Home - section watchHistory
export function GalleryForwatchMovie() {
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryImagesMovie.map((image, index) => (
          <div key={index} className="gallery-item">
            <img alt={`gallery-${index}`} src={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
