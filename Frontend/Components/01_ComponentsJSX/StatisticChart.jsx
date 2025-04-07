import React from 'react';
import '@style/_chartStyles.scss';

export function ChartSelector({ onViewChange, selectedView, setSelectedView }) {
  const handleChange = (event) => {
    const view = event.target.value;
    onViewChange(view);
  };

  return (
    <div className="chart-selector">
      <div className="chart-selector__item">
        <select
          name="changeView"
          id="changeView"
          value={selectedView || 'year'}
          onChange={handleChange}
        >
          <option value="year">Year</option>
          <option value="month">Month</option>
        </select>
      </div>
    </div>
  );
}

//allgemeine Chart Function
export function Chart({ onViewChange, data, maxValue }) {
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
}

//wird in Home.jsx verwendet und ist unter der section "booksStatistic" zu finden
export function BookStatisticsChart({ view, onViewChange, data }) {
  return (
    <div className="book-statistics-chart">
      <ChartSelector selectedView={view} onViewChange={onViewChange} />
      <Chart data={data} maxValue={view === 'year' ? 4 : 2} />
    </div>
  );
}

//wird in der Home.jsx verwendet und ist unter der section "pageStatistic" zu finden
export function PageStatisticsChart({ view, onViewChange, data }) {
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
}

//wird in der Home.jsx verwendet und ist unter der section "seriesStatistic" zu finden
export function SeriesStatisticsChart({ view, onViewChange, data }) {
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
}
