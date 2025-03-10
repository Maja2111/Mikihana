import React from 'react';
import '@/index.scss';
import '@pagestyle/BrandNew.scss';
import { Header } from '@components/Header';
import Carousel from '@components/Carousel';
import { Footer } from '@components/Footer';
import { SeachBar } from '@components/SeachBar';

const BrandNew = () => {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <h1>Hello User, books new publications</h1>
        <section>
          <SeachBar />
          <Carousel />
          <div className="description">
            <p>
              {' '}
              {/*aus dem Backend die Beschreibung der Bücher, die gerade neu erschienen sind, holen*/}
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

export default BrandNew;
