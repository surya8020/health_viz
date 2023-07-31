import MyResponsiveBar from './components/BarChart.js'
import { myData, aggregateData } from './data/workoutData.js'
import React, { useState } from 'react';



function App() {
  const [metric, setMetric] = useState('TotalDistance'); // 'distance' is the default data type
  const handleToggle = () => {
    setMetric((prevType) => (prevType === 'TotalDistance' ? 'TotalCalories' : 'TotalDistance'));
  };

  console.log(aggregateData())
  return (
    <div style={{ backgroundColor: 'black', height: '100%', padding: '8px', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ marginBottom: '17px', color: 'white' }}>{metric === 'TotalCalories' ? 'Daily Active Calories' : 'Daily Miles Run'}</h1>
      <button style={{ marginBottom: '10px' }} onClick={handleToggle}>Analyze {metric === 'TotalDistance' ? 'Calories' : 'Distance'}</button>
      <div style={{ height: '660px', display: 'flex' }}>
        <MyResponsiveBar data={aggregateData()} metric={metric} />
      </div>

    </div>

  );
}

export default App;
