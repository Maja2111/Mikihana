import React from 'react';
import '@style/Chart.scss';
import ChartSelector from '@components/ChartSelector';

const Chart = ({ onViewChange, data, maxValue }) => {
  const isMonthlyView = Array.isArray(data) && data[0]?.week !== undefined;

  return (
    <div className="chart-wrapper">
      {onViewChange && <ChartSelector onViewChange={onViewChange} />}
      <div className="chart-container">
        <div className="y-axis-labels">
          {Array.from({ length: maxValue / 100 + 1 }, (_, i) => (
            <span key={i}>{maxValue - i * 100}</span>
          ))}
        </div>
        {data.map((stat, index) => {
          const label = isMonthlyView ? stat.week : stat.month;
          return (
            <div
              key={index}
              className="chart-bar"
              style={{ height: `${(stat.value / maxValue) * 100}%` }}
            >
              <div className="chart-label">{label}</div>
            </div>
          );
        })}
      </div>
      <div className="x-axis-label"></div>
    </div>
  );
};

export default Chart;
