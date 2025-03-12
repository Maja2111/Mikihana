import React from 'react';
import Chart from './Chart';
import ChartSelector from './ChartSelector';

const SeriesStatisticsChart = ({ view, onViewChange, data }) => {
  return (
    <div className="series-statistics-chart">
      <ChartSelector selectedView={view} onViewChange={onViewChange} />
      <Chart
        data={data}
        maxValue={
          view === 'year' ? 80 : Math.max(...data.map((stat) => stat.value))
        }
        xAxisLabels={data.map((stat) => stat.week || stat.month)} // Adding X-axis labels
        yAxisLabel="Number of episodes"
      />
    </div>
  );
};

export default SeriesStatisticsChart;
