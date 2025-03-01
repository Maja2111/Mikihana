import React from 'react';
import '@style/Chart.scss';
import { pageStats } from '../../src/mockData';
import ChartSelector from './ChartSelector';

const Chart = () => {
  return (
    <div className="chart-wrapper">
      <ChartSelector onViewChange={(view) => console.log(view)} />
      <div className="chart-container">
        <div className="y-axis-labels">
          {[0, 25, 50, 75, 100].map((value) => (
            <span key={value}>{value}%</span>
          ))}
        </div>
        {pageStats.map((stat, index) => (
          <div
            key={index}
            className="chart-bar"
            style={{ height: `${stat.value / 10}%` }}
          >
            <div className="chart-label">{stat.month}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
