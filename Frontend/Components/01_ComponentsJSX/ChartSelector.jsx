import React, { useState } from 'react';
import '@style/Chart.scss';

const ChartSelector = ({ onViewChange }) => {
  const [selectedView, setSelectedView] = useState('year');

  const handleViewChange = (view) => {
    setSelectedView(view);
    onViewChange(view);
  };

  return (
    <div className="chart-selector">
      <button
        className={selectedView === 'year' ? 'active' : ''}
        onClick={() => handleViewChange('year')}
      >
        Year
      </button>
      <button
        className={selectedView === 'month' ? 'active' : ''}
        onClick={() => handleViewChange('month')}
      >
        Month
      </button>
      <button
        className={selectedView === 'day' ? 'active' : ''}
        onClick={() => handleViewChange('day')}
      >
        Day
      </button>
    </div>
  );
};

export default ChartSelector;
