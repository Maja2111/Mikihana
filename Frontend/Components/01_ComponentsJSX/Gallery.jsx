import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@style/Gallery.scss';
import { galleryImages, readingBooks } from '@/mockData.js';
import { galleryImagesMovie } from '@/mockDataMovie.js';

export function Gallery() {
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

export function GalleryWithPlaceholder() {
  const navigate = useNavigate();

  const handleNavigateToAddBooksToList = () => {
    navigate('/profile/library/wishlist/add-books-to-list');
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
