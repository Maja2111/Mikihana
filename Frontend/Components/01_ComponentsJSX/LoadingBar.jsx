import React, { useEffect, useState } from 'react';
import '@style/LoadingBar.scss';

export const LoadingBar = () => {
  const [loadingData, setLoadingData] = useState({ bar: { progress: 0 } }); // Initialize with a default structure

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch('/api/progress');
        const data = await response.json();
        setLoadingData(data); // Set the loadingData with the fetched data
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };
    fetchProgress();
  }, []);

  return (
    <div className="loading-bar">
      <div
        className="loading-bar__progress"
        style={{ width: `${loadingData.bar.progress}%` }}
      ></div>
    </div>
  );
};
