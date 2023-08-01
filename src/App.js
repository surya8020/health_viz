import MyResponsiveBar from './components/BarChart.js'
import { aggregateData } from './data/workoutData.js'
import React, { useState } from 'react';



function App() {
  console.log(aggregateData())

  const metricOptions = [
    "Total Energy (kcal)",
    "Active Energy (kcal)",
    "Max Heart Rate (bpm)",
    "Avg Heart Rate (bpm)",
    "Distance (mi)",
    "Speed",
    "Step Count (count)",
    "Step Cadence (spm)",
  ];

  const aggregationOptions = ["Total", "Average"]

  const [metric, setMetric] = useState('Distance (mi)'); // 'distance' is the default data type
  const [aggregation, setAggregation] = useState('Total'); // 'distance' is the default data type

  const handleMetricChange = (event) => {
    setMetric(event.target.value);
    console.log()
  };

  const handleAggregationChange = (event) => {
    setAggregation(event.target.value);
  };

  return (
    <div style={{ height: '100%', padding: '5px', paddingLeft: '10px', paddingRight: '10px', alignItems: 'center', overflow: 'hidden', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '15px', color: 'black', textAlign: 'center' }}>{aggregation} {metric} per run</h1>
      {/* <button style={{ marginBottom: '10px' }} onClick={handleToggle}>Analyze {metric === 'TotalDistance' ? 'Calories' : 'Distance'}</button> */}
      <select value={aggregation} onChange={handleAggregationChange} style={{ marginBottom: '10px' }}>
        {aggregationOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select value={metric} onChange={handleMetricChange} style={{ marginBottom: '10px' }}>
        {metricOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div style={{ height: '780px', borderRadius: '20px', overflow: 'hidden' }}>
        <div style={{ height: '100%' }}>
          <MyResponsiveBar data={aggregateData(aggregation)} metric={metric} />
        </div>
      </div>

    </div >

  );
}

export default App;
