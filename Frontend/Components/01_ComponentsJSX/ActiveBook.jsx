import React from 'react';
import '@style/ActiveBookCom.scss';
import { LoadingBar } from '@components/LoadingBar.jsx';

const ActiveBook = () => {
  return (
    <section className="activeBook">
      <h2>Active Book</h2>
      <div>
        <LoadingBar />
        <p>
          {/* TODO: Buchtitel vom Backend einfügen */}
          Title: When the moon hatched
        </p>
        <p>{/* TODO: Author vom Backend einfügen */}Author: Sarah A. Parker</p>
        <img src="/Upload/wtmh.jpeg" alt="cover" />
      </div>
    </section>
  );
};

export default ActiveBook;
