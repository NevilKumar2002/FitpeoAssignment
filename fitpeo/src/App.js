import React from 'react';
// import './App.css';
import LeftContainer from './Components/LeftContainer.js';
import RightContainer from "./Components/RightContainer.js"

// import BarChart from "./Components/BarChart.js"
// import PieChart from './Components/PieChart.js';

function App() {
  return (
    <div className='App-div'>
      <LeftContainer/>
      <RightContainer />
      {/* <PieChart /> */}
    </div>
  );
}

export default App;
