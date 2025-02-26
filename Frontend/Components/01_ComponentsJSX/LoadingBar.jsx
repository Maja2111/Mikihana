import React from 'react';
import '@style/LoadingBar.scss';

export const LoadingBar = () => {
  return (
    <div className="loading-bar">
      <div className="loading-bar__progress"></div>
    </div>
  );
};
