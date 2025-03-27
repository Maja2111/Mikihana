import React from 'react';
import '@style/LoadingCircle.scss';

export const LoadingCircle = () => {
  const [loadingData, setLoadingData] = useState('');
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch('/api/progress');
        const data = await response.json();
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
