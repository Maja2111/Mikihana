import React from 'react';
import Chart from './Chart';
import ChartSelector from './ChartSelector';

const PageStatisticsChart = ({ view, onViewChange, data }) => {
  return (
    <div className="page-statistics-chart">
      <ChartSelector selectedView={view} onViewChange={onViewChange} />
      <Chart
        data={data}
        maxValue={
          view === 'year' ? 1000 : Math.max(...data.map((stat) => stat.value))
        }
        xAxisLabels={data.map((stat) => stat.week || stat.month)} // Adding X-axis labels
        yAxisLabel="Number of pages" // Set Y-axis label to "Anzahl der Seiten"
      />
    </div>
  );
};

export default PageStatisticsChart;
