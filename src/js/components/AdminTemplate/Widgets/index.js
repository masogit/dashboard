import React from 'react';
import options from './optionIndex';
import ReactEcharts from 'echarts-for-react';
// import ReEcharts from 're-echarts';


//     if (!option.preAction) {
//       option.preAction = () => {
//         return {
//           then: func => func()
//         };
//       };
//     }

//     option.preAction().then(() => {
//       this.chart.setOption(option);
//       if (option.addEvents) {
//         option.addEvents(this.chart);
//       }
//       super.componentDidMount();
//     });
//   }


const onResize = (chart) => {
  const container = chart._dom.parentElement;
  const height = container.getBoundingClientRect().height || 300;

  chart.resize({ height });
};
  
const Widgets = {};

options.forEach((option, index) => {
  let id = 'echart_' + index;
  let Widget;
  
  Widget = <ReactEcharts option={option} onChartReady={(chart) => setTimeout(onResize(chart), 200)}/>;
  
  Widgets[id] = Widget;
});

export default Widgets;
