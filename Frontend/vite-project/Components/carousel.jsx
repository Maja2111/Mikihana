import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './carousel.scss';

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
    url: 'https://www.designagogo.co.uk/wp-content/uploads/2022/08/blog-tailwind-1920x1920.jpg',
    alt: 'Tailwind CSS Design Example',
  },
  {
    url: 'https://absarcs.info/how-to/install-tailwind-css//c1090e2c651cce9c7b348fd3d5155914.png',
    alt: 'Tailwind CSS Installation Guide',
  },
  {
    url: 'https://stackdiary.com/wp-content/uploads/2022/10/Tailwind-CSS-15-Component-Libraries-UI-Kits.png',
    alt: 'Tailwind CSS Component Libraries',
  },
  {
    url: 'https://s3-alpha.figma.com/hub/file/2603959525/8e909c88-4e83-4af4-b5b2-4a50a9b571f7-cover.png',
    alt: 'Tailwind CSS Figma Integration',
  },
];

export default function Carousel() {
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
}
