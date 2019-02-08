import React, { Component } from 'react';
import './App.css';
import StackingBar from './stackingBar';
import PieChart from './PieChart';
import HighchartsReact  from 'highcharts-react-official';
import Highcharts from 'highcharts';

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
          <HighchartsReact  highcharts={Highcharts} options={BarChartData} />
          <PieChart/>
          <StackingBar/>
        </div>
    );
  }
}

export default App;
