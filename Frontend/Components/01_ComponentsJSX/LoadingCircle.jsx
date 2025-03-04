import React from 'react';
import '@style/LoadingCircle.scss';
import { loadingData } from '../../src/mockData';

export const LoadingCircle = () => {
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
