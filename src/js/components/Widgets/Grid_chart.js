import React from 'react';
import ChartComponent from './ChartComponent';
import Warpper from './Warpper';

export default class Grid_chart extends ChartComponent {
  componentDidMount() {
    this.chart = this.getChart('grid_chart');

    this.chart.setOption({
      color: ['#ebd282', '#70d2e2', '#e97993'], //设置颜色调色盘
      backgroundColor: '#eee',
      //				calculable : true,
      tooltip: {
        trigger: 'axris',
        position: ['85%', '0'],
        triggerOn: 'click',
        alwaysShowContent: true,
        backgroundColor: 'rgba(0,0,0,0)',
        textStyle: {
          color: 'rgba(44,44,44,0.7)',
          fontWeight: 400,
          fontSize: 16
        }
      },
      legend: {
        data: ['机器一', '机器二', '机器三']
      },
      grid: {
        show: false,
        containLabel: true,
        left: '10',
        right: '30',
        top: '50',
        bottom: '10'
      },
      xAxis: [{
        boundaryGap:false,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }],
      yAxis: [{
        type: 'value',
        position: 'left',
        boundaryGap: false,
        splitLine: { //横向分割线不显示
          show: true
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        }
      }],
      series: [{
        name: '机器一',
        type: 'line',
        //          stack: '总量',

        areaStyle: {
          normal: {
            opacity: 0.9
          }
        },
        data: [150, 232, 201, 350, 190, 410, 330],
        smooth: true
      }, {
        name: '机器二',
        type: 'line',
        //          stack: '总量',
        areaStyle: {
          normal: {
            opacity: 0.9
          }
        },
        data: [220, 182, 191, 234, 290, 330, 80],
        smooth: true //数列的线平滑
      }, {
        name: '机器三',
        type: 'line',
        //          stack: '总量',
        areaStyle: {
          normal: {
            opacity: 0.9
          }
        },
        data: [120, 90, 101, 12, 90, 80, 210],
        smooth: true
      }]
    });
  }

  render() {
    const { height, width } = this.state;

    return (
      <Warpper name='Grid Chart'>
        <div id='grid_chart' style={{ width, height }} />
      </Warpper>
    );
  }
}
