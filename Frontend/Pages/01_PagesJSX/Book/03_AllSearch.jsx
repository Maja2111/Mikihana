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
            <Cards
              key={mediaCards[0].id}
              onClickHandler={() => navigate('/allsearch/brandnew')}
              title={mediaCards[0].title}
              text={mediaCards[0].text}
              imageUrl={mediaCards[0].imageUrl}
            />
            <Cards
              key={mediaCards[1].id}
              onClickHandler={() => navigate('/allsearch/brandnewmovie')}
              title={mediaCards[1].title}
              text={mediaCards[1].text}
              imageUrl={mediaCards[1].imageUrl}
            />
            <Cards
              key={mediaCards[2].id}
              onClickHandler={() => navigate('/allsearch/brandnewmusic')}
              title={mediaCards[2].title}
              text={mediaCards[2].text}
              imageUrl={mediaCards[2].imageUrl}
            />
          </div>
        </section>
        <section>
          <h1>MUST HAVE</h1>
          <div className="cardcontainer">
            <Cards
              key={mediaCards[0].id}
              onClickHandler={() => navigate('/allsearch/mustread')}
              title={mediaCards[0].title}
              text={mediaCards[0].text}
              imageUrl={mediaCards[0].imageUrl}
            />
            <Cards
              key={mediaCards[1].id}
              onClickHandler={() => navigate('/allsearch/mustwatch')}
              title={mediaCards[1].title}
              text={mediaCards[1].text}
              imageUrl={mediaCards[1].imageUrl}
            />
            <Cards
              key={mediaCards[2].id}
              onClickHandler={() => navigate('/allsearch/mustlisten')}
              title={mediaCards[2].title}
              text={mediaCards[2].text}
              imageUrl={mediaCards[2].imageUrl}
            />
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
