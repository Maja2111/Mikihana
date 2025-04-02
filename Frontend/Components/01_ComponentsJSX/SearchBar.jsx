import React, { useState } from 'react';
import { ResultsModal } from '@components/ResultsModal';
import { libraryResults } from '@/mockData'; // Import der Mock-Daten

import '@style/SearchBar.scss';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Zustand für das Modal

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term) {
      // Filtere die Mock-Daten basierend auf dem Suchbegriff
      const filteredResults = libraryResults.filter((book) =>
        book.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredResults); // Setze die gefilterten Ergebnisse
      setIsModalOpen(true); // Modal öffnen, wenn Ergebnisse vorhanden sind
    } else {
      setSearchResults([]);
      setIsModalOpen(false); // Modal schließen, wenn kein Suchbegriff vorhanden ist
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Funktion zum Schließen des Modals
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
      {isModalOpen && (
        <ResultsModal results={searchResults} onClose={closeModal} />
      )}
    </>
  );
}
