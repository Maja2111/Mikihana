import React, { useState } from 'react';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term) {
      try {
        const response = await fetch(`/searchBooks/:query/:startIndex`);
        const data = await response.json();
        setSearchResults(data || []); // Sicherstellen, dass es ein Array gibt
      } catch (error) {
        console.error('API fetch failed', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <input
        className="search"
        type="search"
        name="search"
        id="search"
        placeholder="search"
        aria-label="search"
        onChange={handleSearch}
      />
      <div className="results">
        {searchResults.map((book, index) => (
          <div key={index}>{book.title}</div>
        ))}
      </div>
    </>
  );
}
