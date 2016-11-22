import echarts from 'echarts';
import { Component } from 'react';

export default class ChartComponent extends Component {
  componentWillMount() {
    this.state = {
      width: this.props.width || 800,
      height: this.props.height || 300
    };
    this._onResize = this._onResize.bind(this);
  }

  componentDidMount() {
    setTimeout(this._onResize, 1000);
  }

  componentDidUpdate() {
    setTimeout(this._onResize, 1000);
  }

  componentWillReciveProps(nextProps, nextState) {

  }

  _onResize() {
    const container = this.chart._dom.parentElement.parentElement;
    const width = container.getBoundingClientRect().width;
    const height = container.getBoundingClientRect().height;
    this.chart._dom.style.width = width + 'px';
    this.chart._dom.style.height = height + 'px';
    this.chart.resize({ width, height });
  }

  getChart(id, name = id + 'child') {
    const div = document.createElement('div');
    let {width, height} = this.state;
    div.id = name;
    const container = document.getElementById(id);
    container.appendChild(div);

    //this._onResize(container, div, width, height);
    // // const parentRect = container.parentElement.getBoundingClientRect();
    // const parentCss = document.defaultView.getComputedStyle(container.parentElement);

    // if (width < parseInt(parentCss.width.slice(0, -2))) {
    //   width = parentCss.width;
    // } else {
    //   width = width + 'px';
    // }

    // if (height < parseInt(parentCss.height.slice(0, -2))) {
    //   height = parentCss.height;
    // } else {
    //   height =  height + 'px';
    // }

    // div.style.width = width;
    // div.style.height = height;

    //window.addEventListener('resize', this._onResize.bind(this, container, div, width, height));


    return echarts.init(div);
  }

  render() {
    return null;
  }
}
