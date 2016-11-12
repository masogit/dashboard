import React, { Component } from 'react';
import echarts from 'echarts';

export default class ChartComponent extends Component {
  componentWillMount() {
    this.state = {
      width: this.props.width || 800,
      height: this.props.height || 600
    }
  }
  
  getChart(id, name = id + 'child') {
    const div = document.createElement('div');
    div.id = name;
    div.style.width = this.state.width + 'px';
    div.style.height = this.state.height + 'px';
    document.getElementById(id).appendChild(div);

    return echarts.init(div);
  }

  render() {
    return null;
  } 
} 
