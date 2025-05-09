//Entwicklerimporte
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//Compontensimporte
import { Header } from '@components/Header';
import { Cards } from '@components/Cards';
import { Footer } from '@components/Footer';
import { useColor } from '@context/ColorContext';
import { mediaCardsNew, mediaCardsMust } from '@/mockData';

//Stylingimporte
import '@pagestyle/AllSearch.scss';
import '@/index.scss';

const SearchPage = () => {
  const navigate = useNavigate();
  const { colorScheme } = useColor();

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

  const { t } = useTranslation();

  return (
    <div className={`container ${colorScheme}-theme`}>
      <header>
        <Header />
      </header>
      <main className="main">
        <section className="section">
          <h1>{t('AllSearch.brandNew')}</h1>
          <div className="cardcontainer">
            <Cards
              key={mediaCardsNew[0].id}
              onClickHandler={() => navigate('/allsearch/brandnew')}
              title={mediaCardsNew[0].title}
              text={mediaCardsNew[0].text}
              imageUrl={mediaCardsNew[0].imageUrl}
            />
            <Cards
              key={mediaCardsNew[1].id}
              onClickHandler={() => navigate('/allsearch/brandnewmovie')}
              title={mediaCardsNew[1].title}
              text={mediaCardsNew[1].text}
              imageUrl={mediaCardsNew[1].imageUrl}
            />
            <Cards
              key={mediaCardsNew[2].id}
              onClickHandler={() => navigate('/allsearch/brandnewmusic')}
              title={mediaCardsNew[2].title}
              text={mediaCardsNew[2].text}
              imageUrl={mediaCardsNew[2].imageUrl}
            />
          </div>
        </section>
        <section className="section">
          <h1>{t('AllSearch.mustHave')}</h1>
          <div className="cardcontainer">
            <Cards
              key={mediaCardsMust[0].id}
              onClickHandler={() => navigate('/allsearch/mustread')}
              title={mediaCardsMust[0].title}
              text={mediaCardsMust[0].text}
              imageUrl={mediaCardsMust[0].imageUrl}
            />
            <Cards
              key={mediaCardsMust[1].id}
              onClickHandler={() => navigate('/allsearch/mustwatch')}
              title={mediaCardsMust[1].title}
              text={mediaCardsMust[1].text}
              imageUrl={mediaCardsMust[1].imageUrl}
            />
            <Cards
              key={mediaCardsMust[2].id}
              onClickHandler={() => navigate('/allsearch/mustlisten')}
              title={mediaCardsMust[2].title}
              text={mediaCardsMust[2].text}
              imageUrl={mediaCardsMust[2].imageUrl}
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
