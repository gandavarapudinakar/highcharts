import React, { Component } from 'react';
import './App.css';
import StackingBar from './stackingBar';
import PieChart from './PieChart';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import IssuesDisplay from './components/IssuesDisplay';
class App extends Component {

  render() {
    let displayOb = {
      total: 100,
      critical: 50,
      high: 20,
      medium: 10,
      low: 10,
      info: 10
    }
    const BarChartData = {
      title: {
        text: 'Issues by Types'
      },
      xAxis: [{
        
        categories: Object.keys(displayOb)
      }],
      yAxis: {
        title:{
          text:null
        },
        text:null,
        min: 0,
        tickInterval: 10,
      },
      series: [{
        showInLegend: false,
        type: 'bar',
        data: Object.keys(displayOb).map((key)=>displayOb[key])
      }]
    };
    return (
      <div className="App">
        <IssuesDisplay display={displayOb} />
        <div className={'Flex'}>
          <PieChart className={'Box'} />
          <HighchartsReact className={'Box'} highcharts={Highcharts} options={BarChartData} />
          <StackingBar className={'Box'} />
        </div>
      </div>
    );
  }
}

export default App;
