import React from 'react';
import '@style/LoadingBar.scss';
import { loadingData } from '../../src/mockData';

export const LoadingBar = () => {
  return (
    <div className="loading-bar">
      <div
        className="loading-bar__progress"
        style={{ width: `${loadingData.bar.progress}%` }}
      ></div>
    </div>
  );
};
