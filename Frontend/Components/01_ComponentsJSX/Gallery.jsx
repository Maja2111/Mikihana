import React from 'react';
import '@style/Gallery.scss';
import { galleryImages } from '@/mockData.js';

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
