import React from 'react';
import ChartComponent from './ChartComponent';
import Warpper from './Warpper';

export default class Bar_chart extends ChartComponent {
  componentDidMount() {
    this.chart = this.getChart('bar_chart');

    // this.chart.title = '堆叠条形图';

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      grid: {
        // left: '3%',
        // right: '4%',
        // bottom: '3%',
        containLabel: true
      },
      yAxis: {
        type: 'value'
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      series: [
        {
          name: '直接访问',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: '邮件营销',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: '搜索引擎',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    this.chart.setOption(option);
  }

  componentWillReciveProps(nextProps, nextState) {
    this._onResize(document.getElementById('bar_chart'), document.getElementById('bar_chart'), nextProps.width, nextProps.height);
  }

  render() {
    const { height, width } = this.state;

    return (
      <Warpper name='Bar Chart' status='success'>
        <div id='bar_chart' style={{ width, height }} />
      </Warpper>
    );
  }
}
