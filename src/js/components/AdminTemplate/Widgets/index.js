import React from 'react';
import ChartComponent from '../../Widgets/ChartComponent';
import Warpper from '../../Widgets/Warpper';
import options from './optionIndex';

class ChartTemplate extends ChartComponent {
  componentDidMount() {
    this.chart = this.getChart(this.props.id);


    this.chart.setOption(this.props.option);
  }


  render() {
    const { height = 800, width = 600, id, label = id} = this.props;

    return (
      <Warpper name={label} status='success'>
        <div id={id} style={{ width, height }} />
      </Warpper>
    );
  }
}


const Demo = () => {
  options.map((option, index) => {
    return (
      <ChartTemplate id={'map' + index} option={option} />
    );
  });
};

export default Demo;
