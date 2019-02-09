import React, { Component } from 'react';
import './App.css';
import HighchartsReact  from 'highcharts-react-official';
import Highcharts from 'highcharts';


class PieChart extends Component {
    render() {
        const PieChartData= {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Issues by severity'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            label:{
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Issues',
                colorByPoint: true,
                data: [{
                    name: 'critical',
                    y: 50,
                    color:'red',
                    selected:true,
                    sliced:true
                }, {
                    name: 'High',
                    y: 20,
                    color:'yellow'
                }, {
                    name: 'medium',
                    y: 10,
                    color:'black'
                }, {
                    name: 'low',
                    y: 10,
                    color:'blue'
                }]
            }]
        }
              return (
            <div className="App">
                <HighchartsReact highcharts={Highcharts} options={PieChartData} />
            </div>
        );
    }
}

export default PieChart;
