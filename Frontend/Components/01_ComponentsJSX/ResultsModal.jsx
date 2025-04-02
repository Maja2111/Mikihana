import React from 'react';

import '@style/SearchBar.scss';

export function ResultsModal({ results, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Results</h3>
        {results.length > 0 ? (
          results.map((book, index) => <div key={index}>{book.title}</div>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
