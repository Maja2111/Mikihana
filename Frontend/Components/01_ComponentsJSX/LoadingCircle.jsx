import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import '@style/LoadingCircle.scss';

export const LoadingCircle = () => {
  const [loadingData, setLoadingData] = useState({ circle: { progress: 40 } }); // Initialize with a default structure
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/profile/progress`
        );
        const data = await response.json();
        setLoadingData(data); // Set the loadingData with the fetched data
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };
    fetchProgress();
  }, []);
  return (
    <div className="loading-circle">
      <div
        className="loading-circle__progress"
        style={{ '--progress': `${loadingData.circle.progress}` }}
      >
        <span className="loading-circle__percentage">
          {loadingData.circle.progress}%
        </span>
      </div>
    </div>
  );
};
