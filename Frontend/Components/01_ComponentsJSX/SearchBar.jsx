import React from 'react';
import { useState } from 'react';
import books from '@/mockData';

export function SearchBar({}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <input
        type="search"
        name="brandNewRead"
        id="brandNewRead"
        placeholder="search"
        aria-label="search to Must-Reads"
        onChange={handleSearch}
      />
      <div className="results">
        {' '}
        {/* Hier werden die Suchergebnisse angezeigt */}
        {searchTerm &&
          filteredBooks.map(
            (
              book,
              index // Ergebnisse nur anzeigen, wenn eine Suchanfrage gestellt wurde
            ) => (
              <div key={index}>{book.title}</div> // Rendern der gefilterten Bücher
            )
          )}
      </div>
    </>
  );
}
