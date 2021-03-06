import React, { Component } from 'react';
import './App.css';
import HighchartsReact  from 'highcharts-react-official';
import Highcharts from 'highcharts';

const configBar =  {

    chart: {
        type: 'bar'
    },

    title: {
        text: 'Issues By Location'
    },

    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of fruits'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        bar: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2],
        stack: 'male'
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5],
        stack: 'male'
    }, {
        name: 'Jane',
        data: [2, 5, 6, 2, 1],
        stack: 'male'
    }, {
        name: 'Janet',
        data: [3, 0, 4, 4, 3],
        stack: 'male'
    }]
};
class StackingBar extends Component {
    render() {
        const StackBarChartData=configBar;
        return (
            <div className="App">
                <HighchartsReact highcharts={Highcharts} options={StackBarChartData} />
            </div>
        );
    }
}

export default StackingBar;
