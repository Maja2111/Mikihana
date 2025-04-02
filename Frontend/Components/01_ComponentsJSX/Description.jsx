import React, { useEffect, useState } from 'react';

const Description = () => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/profile/getBookDetails/:id`
        ); // Adjust the endpoint as needed
        const data = await response.json();
        setDescription(data.description); // Assuming the response has a 'description' field
      } catch (error) {
        console.error('Error fetching description:', error);
      }
    };

    fetchDescription();
  }, []);

  return (
    <div className="description">
      <p>{description || 'Loading...'}</p>
    </div>
  );
};

export default Description;
