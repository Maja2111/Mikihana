import React, { useState } from 'react';
import '@/index.scss';
import { Header } from '@components/Header';
import Carousel from '@components/Carousel';
import { Footer } from '@components/Footer';
import { SeachBar } from '@components/SeachBar';

const MustRead = () => {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <section>
          <h1>Here you will find our must-read recommendations.</h1>
          <SeachBar />
          <Carousel />
          <div className="description">
            <p>
              {/* Beschreibung der Bücher, die man gelesen haben sollte */}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              nesciunt itaque enim corrupti culpa? Porro maiores, fuga
              veritatis, dolores cumque possimus laborum error dignissimos ex,
              iste quidem dolore? Ex, similique?
            </p>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MustRead;
