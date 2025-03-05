import React from 'react';
import '@/index.scss';
import { Header } from '@components/Header';
import Carousel from '@components/Carousel';
import { Footer } from '@components/Footer';

const MustRead = () => {
  const handleSearch = (event) => {
    // Implement search functionality here
    console.log(event.target.value);
  };
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <section>
          <h1>Here you will find our must-read recommendations.</h1>
          <input
            type="search"
            name="brandNewRead"
            id="brandNewRead"
            placeholder="Search"
            aria-label="Search for must reads"
            onChange={handleSearch}
          />
          <Carousel />
          <div className="description">
            <p>
              {' '}
              {/*aus dem Backend die Beschreibung der Bücher, die man gelesen haben sollte, holen*/}
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
