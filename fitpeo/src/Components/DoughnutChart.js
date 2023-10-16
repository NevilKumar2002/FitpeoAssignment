import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


const data = {
  labels: ['Component 1', 'Component 2', 'Component 3'],
  datasets: [
    {
      data: [30, 40, 30], // Adjust these values as needed
      backgroundColor: ['violet','blueviolet','whitesmoke'], // Define colors for each component
    },
  ],
};

const options = {
  // cutoutPercentage: 150,
  cutoutPercentage: 150, // Adjust the cutout percentage to control the inner radius
  rotation: 1 * Math.PI, // Rotate the chart so that it starts from the top
  // circumference: 2 * 360, 
  legend: {
    display: false,
    // borderRadius:"50px",
    
  },
};


const DoughnutChart = () => {
  return (
    <div className="doughnut-chart-container">
      <div className="doughnut-chart-heading">
      <h3>Customers</h3>
      <p>Customers Buy Products</p>
      </div>
     
      <div className="doughnut-chart">
        <Doughnut data={data} options={options} />
        <div className="chart-center-text"><strong>65%</strong><br></br> Total New Customers</div>
      </div>
    </div>
  );
};

export default DoughnutChart;
