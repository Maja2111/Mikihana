import React from 'react';
import '@style/Gallery.scss';
import { galleryImagesMovie } from '@/mockDataMovie.js';

//ToDo BE Verbindung herstellen aus den Statistisken der pageStatistik
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
