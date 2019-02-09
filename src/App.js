import React, { Component } from 'react';
import './App.css';
import StackingBar from './stackingBar';
import PieChart from './PieChart';
import HighchartsReact  from 'highcharts-react-official';
import Highcharts from 'highcharts';
import IssuesDisplay from './components/IssuesDisplay';
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
   let displayOb={
      total:100,
      critical:50,
      high:20,
      medium:10,
      low:10,
      info:10
    }
    const BarChartData=configBar;
    return (
        <div className="App">
        <IssuesDisplay display={displayOb}/>
          <HighchartsReact  highcharts={Highcharts} options={BarChartData} />
          <PieChart/>
          <StackingBar/>
        </div>
    );
  }
}

export default App;
