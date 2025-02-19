import React from 'react';
import '../ComponentsStyling/Carousel.scss';

export function Carousels3d() {
  const items = document.querySelectorAll('.carousel-center .carousel-item');
  const rightItems = document.querySelectorAll(
    '.carousel-right .carousel-item'
  );
  const leftItems = document.querySelectorAll('.carousel-left .carousel-item');
  const indicators = document.querySelectorAll('#indicators span');

  const right = document.querySelector('.right');
  const left = document.querySelector('.left');

  right.addEventListener('click', () => changeItem(1));
  left.addEventListener('click', () => changeItem(-1));

  function changeItem(step) {
    const currentIdx = Array.from(items).findIndex(
      (item) => !item.classList.contains('hidden')
    );

    console.log('enter', currentIdx, Array.from(items));
    indicators[currentIdx].classList.toggle('active');
    items[currentIdx].classList.toggle('hidden');
    rightItems[(currentIdx + 1) % items.length].classList.toggle('hidden');
    leftItems[(currentIdx + items.length - 1) % items.length].classList.toggle(
      'hidden'
    );

    const newIdx = (currentIdx + step) % items.length;
    if (newIdx < 0) newIdx = items.length - 1;

    indicators[newIdx].classList.toggle('active');
    items[newIdx].classList.toggle('hidden');
    rightItems[(newIdx + 1) % items.length].classList.toggle('hidden');
    leftItems[(newIdx + items.length - 1) % items.length].classList.toggle(
      'hidden'
    );
  }

  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel-left">
            <img
              className="carousel-item hidden"
              src="https://www.designagogo.co.uk/wp-content/uploads/2022/08/blog-tailwind-1920x1920.jpg"
              alt=""
            />
            <img
              className="carousel-item hidden"
              src="https://absarcs.info/how-to/install-tailwind-css//c1090e2c651cce9c7b348fd3d5155914.png"
              alt=""
            />
            <img
              className="carousel-item hidden"
              src="https://stackdiary.com/wp-content/uploads/2022/10/Tailwind-CSS-15-Component-Libraries-UI-Kits.png"
              alt=""
            />
            <img
              className="carousel-item hidden"
              src="https://s3-alpha.figma.com/hub/file/2603959525/8e909c88-4e83-4af4-b5b2-4a50a9b571f7-cover.png"
              alt=""
            />
          </div>
          <div className="carousel-center">
            <img
              className="carousel-item hidden"
              src="https://www.designagogo.co.uk/wp-content/uploads/2022/08/blog-tailwind-1920x1920.jpg"
              alt=""
            />
            <img
              className="carousel-item"
              src="https://absarcs.info/how-to/install-tailwind-css//c1090e2c651cce9c7b348fd3d5155914.png"
              alt=""
            />
            <img
              className="carousel-item hidden"
              src="https://stackdiary.com/wp-content/uploads/2022/10/Tailwind-CSS-15-Component-Libraries-UI-Kits.png"
              alt=""
            />
            <img
              className="carousel-item hidden"
              src="https://s3-alpha.figma.com/hub/file/2603959525/8e909c88-4e83-4af4-b5b2-4a50a9b571f7-cover.png"
              alt=""
            />
          </div>
          <div className="carousel-right">
            <img
              className="carousel-item hidden"
              src="https://www.designagogo.co.uk/wp-content/uploads/2022/08/blog-tailwind-1920x1920.jpg"
              alt=""
            />
            <img
              className="carousel-item hidden"
              src="https://absarcs.info/how-to/install-tailwind-css//c1090e2c651cce9c7b348fd3d5155914.png"
              alt=""
            />
            <img
              className="carousel-item"
              src="https://stackdiary.com/wp-content/uploads/2022/10/Tailwind-CSS-15-Component-Libraries-UI-Kits.png"
              alt=""
            />
            <img
              className="carousel-item hidden"
              src="https://s3-alpha.figma.com/hub/file/2603959525/8e909c88-4e83-4af4-b5b2-4a50a9b571f7-cover.png"
              alt=""
            />
          </div>
          <span className="left">
            <i className="fa-solid fa-arrow-left"></i>
          </span>
          <span className="right">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
        <div id="indicators">
          <span></span>
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}
