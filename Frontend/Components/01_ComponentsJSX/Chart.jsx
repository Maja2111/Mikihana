import React from 'react';
import '@style/Chart.scss';
import ChartSelector from '@components/ChartSelector';

const Chart = ({ onViewChange, data, maxValue }) => {
  const isMonthlyView = Array.isArray(data) && data[0]?.day !== undefined;
  const xAxisLabels = isMonthlyView ? 'Day' : 'Month';

  return (
    <div className="chart-wrapper">
      {onViewChange && <ChartSelector onViewChange={onViewChange} />}
      <div className="chart-container">
        <div className="y-axis-labels">
          {[0, 25, 50, 75, 100].map((value) => (
            <span key={value}>{value}%</span>
          ))}
        </div>
        {data.map((stat, index) => (
          <div
            key={index}
            className="chart-bar"
            style={{ height: `${(stat.value / maxValue) * 100}%` }}
          >
            <div className="chart-label">
              {isMonthlyView ? stat.day : stat.month}
            </div>
          </div>
        ))}
      </div>
      <div className="x-axis-label"></div>
    </div>
  );
};

export default Chart;
