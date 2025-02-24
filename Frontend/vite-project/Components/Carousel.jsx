import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './01_ComponentsStyling/Carousel.scss';

// TODO: Replace hardcoded images with data from backend API
// Expected API response structure:
// [
//   {
//     url: "image_url",
//     alt: "image_description"
//   }
// ]
const images = [
  {
    url: '/Upload/die-fluesse-von-london-graphic-novel-taschenbuch-ben-aaronovitch.jpeg',
    alt: 'Tailwind CSS Design Example',
  },
  {
    url: '/Upload/onyx-storm-gebundene-ausgabe-rebecca-yarros-englisch.jpeg',
    alt: 'Tailwind CSS Installation Guide',
  },
  {
    url: '/Upload/iron-flame-taschenbuch-rebecca-yarros-englisch.jpeg',
    alt: 'Tailwind CSS Component Libraries',
  },
  {
    url: '/Upload/fourth-wing-taschenbuch-rebecca-yarros-englisch.jpeg',
    alt: 'Tailwind CSS Figma Integration',
  },
  {
    url: '/Upload/when-the-moon-hatched-taschenbuch-sarah-a-parker-englisch.jpeg',
    alt: 'Tailwind CSS Figma Integration',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

  useEffect(() => {
    // TODO: Fetch images from backend API
    // Example:
    // const fetchImages = async () => {
    //   const response = await fetch('/api/images');
    //   const data = await response.json();
    //   setImages(data);
    // };
    // fetchImages();
  }, []);

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
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
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
        {images.map((_, index) => (
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
};
export default Carousel;
