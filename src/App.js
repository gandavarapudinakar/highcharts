import React, { Component } from 'react';
import './App.css';
import StackingBar from './stackingBar';
import PieChart from './PieChart';
import ReactHighcharts from 'react-highcharts';

import HighchartsMore from 'highcharts-more';
HighchartsMore(ReactHighcharts.Highcharts);

const configBar = {
  title: {
    text: 'Temperature vs Rainfall'
  },
  xAxis: [{
    categories: ['Jan', 'Feb', 'Mar']
  }],
  yAxis: {
    min: 0,
    tickInterval: 10,
  },
  series: [{
    name: 'Rainfall',
    type: 'bar',
    data: [49.9, 71.5, 106.4]
  }]
};
class App extends Component {
  render() {
    const BarChartData=configBar;
    return (
        <div className="App">
          <ReactHighcharts config={BarChartData} />
          <PieChart/>
          <StackingBar/>
        </div>
    );
  }
}

export default App;
