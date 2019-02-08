import React, { Component } from 'react';
import './App.css';
import ReactHighcharts from 'react-highcharts';

import HighchartsMore from 'highcharts-more';
HighchartsMore(ReactHighcharts.Highcharts);

const configPie = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
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
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            color:'red',
            selected:true,
            sliced:true
        }, {
            name: 'Internet Explorer',
            y: 11.84,
            color:'yellow'
        }, {
            name: 'Firefox',
            y: 10.85,
            color:'black'
        }, {
            name: 'Edge',
            y: 4.67,
            color:'blue'
        }, {
            name: 'Safari',
            y: 4.18,
            color:'green'
        }]
    }]
}
class PieChart extends Component {
    render() {
        const PieChartData=configPie;
        return (
            <div className="App">
                <ReactHighcharts config={PieChartData} />
            </div>
        );
    }
}

export default PieChart;
