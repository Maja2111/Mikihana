import React from 'react';
import './01_ComponentsStyling/Gallery.scss';

export function Gallery() {
  // TODO: Replace static image URLs with data fetched from the backend API
  const images = [
    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp',
    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp',
    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp',
    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp',
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img alt={`gallery-${index}`} src={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
