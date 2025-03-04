import React, { useState } from 'react';
import '@style/Chart.scss';

const ChartSelector = ({ onViewChange }) => {
  const [selectedView, setSelectedView] = useState('year');

  const handleChange = (event) => {
    const view = event.target.value;
    setSelectedView(view);
    onViewChange(view);
  };

  return (
    <div className="chart-selector">
      <div className="chart-selector__item">
        <select
          name="changeView"
          id="changeView"
          value={selectedView}
          onChange={handleChange}
        >
          <option value="year">Year</option>
          <option value="month">Month</option>
        </select>
      </div>
    </div>
  );
};

export default ChartSelector;
