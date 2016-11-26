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
    // window.addEventListener('resize', this._onResize);
  }

  componentDidUpdate() {
    setTimeout(this._onResize, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onResize);
  }

  _onResize(container = this.chart._dom.parentElement.parentElement) {
    const width = container.getBoundingClientRect().width || 800;
    const height = container.getBoundingClientRect().height || 300;

    this.chart._dom.style.width = width + 'px';
    this.chart._dom.style.height = height + 'px';
    console.log('resize: width: ' +width + ' height ' + height);
    this.chart.resize({ width, height });
  }

  getChart(id, name = id + 'child') {
    const div = document.createElement('div');
    div.id = name;
    const container = document.getElementById(id);
    container.appendChild(div);

    return echarts.init(div);
  }

  render() {
    return null;
  }
}
