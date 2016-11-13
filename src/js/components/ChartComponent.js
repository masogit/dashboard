import React, { Component } from 'react';
import echarts from 'echarts';

export default class ChartComponent extends Component {
  componentWillMount() {
    this.state = {
      width: this.props.width || 800,
      height: this.props.height || 300
    }
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log(nextProps)
  }

  getChart(id, name = id + 'child') {
    const div = document.createElement('div');
    let {width, height} = this.state;
    div.id = name;

    const container = document.getElementById(id);
    // const parentRect = container.parentElement.getBoundingClientRect();
    const parentCss = document.defaultView.getComputedStyle(container.parentElement);

    if (width < parseInt(parentCss.width.slice(0, -2))) {
      width = parentCss.width;
    } else {
      width = width + 'px';
    }

    if (height < parseInt(parentCss.height.slice(0, -2))) {
      height = parentCss.height;
    } else {
      height =  height + 'px';    
    }

    div.style.width = width;
    div.style.height = height;    
    container.appendChild(div);

    return echarts.init(div);
  }

  render() {
    return null;
  } 
} 
