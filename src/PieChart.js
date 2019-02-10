import React, { Component } from 'react';
import './App.css';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


class PieChart extends Component {
    render() {
        const PieChartData = {
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
            credits: false,
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                padding: 3,
                itemMarginTop: 10,
                itemMarginBottom: 10,
                itemStyle: {
                    lineHeight: '14px'
                }

            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                        distance: -50,
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 0
                        }
                    },
                    showInLegend: true,

                }
            },
           
            series: [{
                name: 'Issues',
                colorByPoint: true,
                data: [{
                    name: 'critical',
                    y: 50,
                    color: 'red',
                }, {
                    name: 'High',
                    y: 20,
                    color: 'yellow'
                }, {
                    name: 'medium',
                    y: 10,
                    color: 'black'
                }, {
                    name: 'low',
                    y: 10,
                    color: 'blue'
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
