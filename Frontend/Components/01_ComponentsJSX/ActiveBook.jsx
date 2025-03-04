import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquarePlus,
  faChevronRight,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';

const ActiveBook = () => {
  return (
    <section className="activeBook">
      <h2>Active Book</h2>
      <p>{/* TODO: Buchtitel vom Backend einfügen */}Title</p>
      <p>{/* TODO: Autor vom Backend einfügen */}Author</p>
      <div className="progress">Progress</div>
      <button>Update</button>
      <button>
        <FontAwesomeIcon icon={faShareNodes} />
      </button>
      <img
        src="/Upload/when-the-moon-hatched-taschenbuch-sarah-a-parker-englisch.jpeg"
        alt="cover"
      />
      <FontAwesomeIcon icon={faSquarePlus} />
      <FontAwesomeIcon icon={faChevronRight} />
    </section>
  );
};

export default ActiveBook;
