import React from 'react';
import Chart from './Chart';
import ChartSelector from './ChartSelector';

const BookStatisticsChart = ({ view, onViewChange, data }) => {
  return (
    <div className="book-statistics-chart">
      <ChartSelector selectedView={view} onViewChange={onViewChange} />
      <Chart data={data} maxValue={view === 'year' ? 4 : 2} />
    </div>
  );
};

export default BookStatisticsChart;
