import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '@style/Gallery.scss';
import { readingBooks } from '@/mockData.js';
import {
  galleryImagesMovie,
  galleryWithPlaceholderMovie,
  galleryImagesMovieFavorites,
  galleryImagesMovieUnwatch,
  galleryImagesMovieUserlist,
} from '@/mockDataMovie.js';

//allgemeine Gallery -> 05_Profile, 05.1_Library,
export function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const searchTerms = [
        'fiction',
        'science',
        'history',
        'art',
        'technology',
      ]; // Stabile Suchbegriffe
      const randomTerm =
        searchTerms[Math.floor(Math.random() * searchTerms.length)];
      const randomStartIndex = Math.floor(Math.random() * 10); // Kleinere Range (0-9)

      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BASE_URL
          }/api/profile/searchBooks/${randomTerm}/${randomStartIndex}`
        );

        if (!response.ok) throw new Error('API request failed');

        const data = await response.json();

        if (data.error) {
          console.error('API error:', data.error);
          // Fallback zu Mock-Daten
          setGalleryImages([
            { imageUrl: '/Upload/coming soon.png' },
            { imageUrl: '/Upload/coming soon.png' },
            { imageUrl: '/Upload/coming soon.png' },
            { imageUrl: '/Upload/coming soon.png' },
            { imageUrl: '/Upload/coming soon.png' },
          ]);
          return;
        }

        // Sicherstellen dass wir ein Array mit gültigen imageUrl haben
        const validBooks = data.filter((book) => book?.imageUrl);
        if (validBooks.length === 0) throw new Error('No valid books found');

        // Zufällige Auswahl
        const shuffled = [...validBooks].sort(() => 0.5 - Math.random());
        setGalleryImages(shuffled.slice(0, 5));
      } catch (error) {
        console.error('Error fetching books:', error);
        // Fallback zu Mock-Daten
        setGalleryImages([
          { imageUrl: '/Upload/coming soon.png' },
          { imageUrl: '/Upload/coming soon.png' },
          { imageUrl: '/Upload/coming soon.png' },
          { imageUrl: '/Upload/coming soon.png' },
          { imageUrl: '/Upload/coming soon.png' },
        ]);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              alt={`gallery-${index}`}
              src={image?.imageUrl || '/Upload/coming soon.png'}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/Upload/coming soon.png';
              }}
            />
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
  const [galleryImages, setGalleryImages] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BASE_URL
          }/api/profile/searchBooks/example-query/1`
        ); // Using 'example-query' as a placeholder
        const data = await response.json();
        console.log('Fetched data:', data);
        setGalleryImages(data.slice(0, 5));
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
            <img
              alt={`gallery-${index}`}
              src={image?.imageUrl || '/Upload/coming soon.png'}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/Upload/coming soon.png';
              }}
            />
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

  const handleNavigateToAddMoviesToList = () => {
    const currentPath = window.location.pathname;
    const targetPath = `/profile/videolibrary/${listType}/add-movie-to-list`;
    navigate(targetPath, { state: { from: currentPath } });
  };
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
          onClick={handleNavigateToAddMoviesToList}
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

export function GalleryForMovieFavorites() {
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryImagesMovieFavorites.map((image, index) => (
          <div key={index} className="gallery-item">
            <img alt={`gallery-${index}`} src={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function GalleryForMovieUnwatch() {
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryImagesMovieUnwatch.map((image, index) => (
          <div key={index} className="gallery-item">
            <img alt={`gallery-${index}`} src={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
export function GalleryForMovieUserlist() {
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryImagesMovieUserlist.map((image, index) => (
          <div key={index} className="gallery-item">
            <img alt={`gallery-${index}`} src={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
