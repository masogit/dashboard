import React from 'react';
import ChartComponent from '../../Widgets/ChartComponent';
import Warpper from '../../Widgets/Warpper';
import options from './optionIndex';

class ChartTemplate extends ChartComponent {
  componentDidMount() {
    const {id, option} = this.props;

    this.chart = this.getChart(id);

    if (!option.preAction) {
      option.preAction = () => {
        return {
          then: func => func()
        };
      };
    }

    option.preAction().then(() => {
      this.chart.setOption(option);
      if (option.addEvents) {
        option.addEvents(this.chart);
      }
      super.componentDidMount();
    });
  }


  render() {
    const { height = 600, width = 800, id, label = id} = this.props;

    return (
      <Warpper name={label} status='success'>
        <div id={id} style={{ width, height }} />
      </Warpper>
    );
  }
}


const Demo = () => {
  return (
    <div>{options.map((option, index) => {
      return (
        <ChartTemplate key={index} id={'map' + index} option={option} />
      );
    })}</div>
  );
};

const Widgets = {};
options.forEach((option, index) => {
  let id = 'echart_' + index;
  let Widget = <ChartTemplate key={index} id={id} option={option} />;
  Widgets[id] = Widget;
});

export default Widgets;
