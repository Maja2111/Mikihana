import React from 'react';
import '@style/Gallery.scss';
import { readingBooks } from '@/mockData.js';

//ToDo BE Verbindung herstellen aus den Statistisken der pageStatistik
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
