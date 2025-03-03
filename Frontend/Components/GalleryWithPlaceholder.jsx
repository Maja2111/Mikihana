import React from 'react';
import './01_ComponentsStyling/Gallery.scss';

export function GalleryWithPlaceholder({ onAddBook }) {
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
        {/* Platzhalter für neues Buch */}
        <div className="gallery-item placeholder-item" onClick={onAddBook}>
          <div className="placeholder-content">
            <span>+</span>
            <p>Neues Buch hinzufügen</p>
          </div>
        </div>
      </div>
    </div>
  );
}
