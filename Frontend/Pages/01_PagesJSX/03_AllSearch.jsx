/**
 * @description:
 * search page
 * header: Logo und suchleiste
 * main: 2 sections
 */
//Entwicklerimporte
import React from 'react';
import { useNavigate } from 'react-router-dom';

//Compontensimporte
import { Header } from '@components/Header';
import { Cards } from '@components/Cards';
import { Footer } from '@components/Footer';
import { mediaCards } from '@/mockData';

//Stylingimporte
import '@pagestyle/AllSearch.scss';
import '@/index.scss';

const SearchPage = () => {
  const navigate = useNavigate();

  const handleNavigateToBrandNew = () => {
    if (window.location.pathname !== '/brandnew') {
      navigate('/allsearch/brandnew');
    }
  };

  const handleNavigateToMustRead = () => {
    if (window.location.pathname !== '/mustread') {
      navigate('/allsearch/mustread');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <section>
          <h1>BRANDNEW</h1>
          <div className="cardcontainer">
            {mediaCards.map((card) => (
              <Cards
                key={card.id}
                onClickHandler={handleNavigateToBrandNew}
                title={card.title}
                text={card.text}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </section>
        <section>
          <h1>MUST HAVE</h1>
          <div className="cardcontainer">
            {mediaCards.map((card) => (
              <Cards
                key={card.id}
                onClickHandler={handleNavigateToMustRead}
                title={card.title}
                text={card.text}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SearchPage;
