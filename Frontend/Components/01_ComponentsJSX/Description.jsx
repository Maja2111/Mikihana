import React, { useEffect, useState, useMemo } from 'react';

const Description = ({ bookId }) => {
  const [description, setDescription] = useState('');
  const [showFullText, setShowFullText] = useState(false);

  // Verwendung von useMemo zur Vermeidung unnötiger Neuberechnungen
  const { truncatedText, isTruncated } = useMemo(() => {
    if (!description) return { truncatedText: '', isTruncated: false };

    const lines = description.split('\n').filter((line) => line.trim() !== '');
    const shouldTruncate = lines.length > 5;

    return {
      truncatedText: shouldTruncate
        ? lines.slice(0, 5).join('\n') + '\n...'
        : description,
      isTruncated: shouldTruncate,
    };
  }, [description]);

  useEffect(() => {
    const fetchDescription = async () => {
      if (!bookId) return;

      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );

        if (!response.ok) throw new Error('Google Books API request failed');

        const data = await response.json();
        setDescription(
          data.volumeInfo?.description || 'No description available'
        );
      } catch (error) {
        console.error('Error loading description:', error);
        setDescription('Description could not be loaded');
      }
    };

    fetchDescription();
  }, [bookId]);

  const displayText = showFullText ? description : truncatedText;

  return (
    <div className="description">
      <p style={{ whiteSpace: 'pre-line' }}>{displayText || 'Loading...'}</p>
      {isTruncated && (
        <button
          onClick={() => setShowFullText(!showFullText)}
          style={{
            color: '#3b82f6',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
            padding: 0,
            marginTop: '8px',
          }}
        >
          {showFullText ? 'Weniger anzeigen' : 'Mehr anzeigen'}
        </button>
      )}
    </div>
  );
};

export default Description;
