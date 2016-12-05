import React from 'react';
import options from './optionIndex';
// import ReactEcharts from 'echarts-for-react';
// import ReEcharts from 're-echarts';
import ChartComponent from '../../Widgets/ChartComponent';

const Widgets = {};

options.forEach((option, index) => {
  let id = 'echart_' + index;
  let Widget;

  // Widget = <ReactEcharts ref='echart' option={option} onChartReady={(chart) => setTimeout(onResize(chart), 200)}/>;
  Widget = <ChartComponent option={option} />;

  Widgets[id] = Widget;
});

export default Widgets;
