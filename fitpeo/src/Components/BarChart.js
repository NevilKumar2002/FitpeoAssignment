import React from 'react';

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    // Define example data and month names
    this.state = {
      data: [12, 19, 3, 5, 2, 8, 15, 11, 7, 9, 13, 6],
      months: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
    };
  }

  // Determine the current month (0-based index)
  getCurrentMonth() {
    const currentDate = new Date();
    return currentDate.getMonth();
  }

  renderBars() {
    const currentMonth = this.getCurrentMonth();

    return this.state.data.map((value, index) => (
      <div
        key={index}
        className={`bar ${index === currentMonth ? 'highlight' : ''}`}
        style={{ height: value * 10 + 'px' }}
      >
       
      </div>
    ));
  }

  renderXAxisLabels() {
    return this.state.months.map((month, index) => (
      <div key={index} className="x-axis-label">
        {month}
      </div>
    ));
  }

  render() {
    return (
      <div className='barchar-div'>
        <div className='overview-second'>
        <div className='overview-first'>
        <h2>OverView</h2>
        <select name="select" className='select'>
            <option value="1">Quaterly</option>
            <option value="2">Monthly</option>
            <option value="3">Weekly</option>
            <option value="4">Yearly</option>
        </select>
        </div>
        <p>Monthly Earning</p>
        </div>
        <div className="bar-chart-container">{this.renderBars()}</div>
        <div className="x-axis">{this.renderXAxisLabels()}</div>
      </div>
    );
  }
}

export default BarChart;
