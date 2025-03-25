import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@style/Carousel.scss';
import { carouselImages } from '@/mockData.js';
import { carouselImagesMovie } from '@/mockDataMovie.js';

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return carouselImages.length - 1;
      if (newIndex >= carouselImages.length) return 0;
      return newIndex;
    });
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button
          className="nav-button left"
          onClick={() => handleNavigation(-1)}
          aria-label="Previous image"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div className="carousel-center">
          <img
            src={carouselImages[currentIndex].url}
            alt={carouselImages[currentIndex].alt}
            className="carousel-item"
          />
        </div>

        <button
          className="nav-button right"
          onClick={() => handleNavigation(1)}
          aria-label="Next image"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <div className="indicators">
        {carouselImages.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function MovieCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return carouselImagesMovie.length - 1;
      if (newIndex >= carouselImagesMovie.length) return 0;
      return newIndex;
    });
  };
  return (
    <div className="carousel-container">
      <div className="carousel">
        <button
          className="nav-button left"
          onClick={() => handleNavigation(-1)}
          aria-label="Previous image"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div className="carousel-center">
          <img
            src={carouselImagesMovie[currentIndex].url}
            alt={carouselImagesMovie[currentIndex].alt}
            className="carousel-item"
          />
        </div>

        <button
          className="nav-button right"
          onClick={() => handleNavigation(1)}
          aria-label="Next image"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <div className="indicators">
        {carouselImagesMovie.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
