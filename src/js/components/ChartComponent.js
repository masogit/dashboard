import echarts from 'echarts';
import { Component } from 'react';

export default class ChartComponent extends Component {
  componentWillMount() {
    this.state = {
      width: this.props.width || 800,
      height: this.props.height || 300
    };
  }

  componentWillReciveProps(nextProps, nextState) {

  }

  _onResize(container, div, width, height) {
    // const parentRect = container.parentElement.getBoundingClientRect();
    const parentCss = document.defaultView.getComputedStyle(container.parentElement);
    const p_width = parseInt(parentCss.width.slice(0, -2));
    const p_margin_h = parseInt(parentCss.marginLeft.slice(0, -2)) + parseInt(parentCss.marginRight.slice(0, -2));
    const p_border_h = parseInt(parentCss.borderLeftWidth.slice(0, -2)) + parseInt(parentCss.borderRightWidth.slice(0, -2));
    if (p_width > 100) {
      width = p_width - p_margin_h + p_border_h;
    }

    const p_height = parseInt(parentCss.height.slice(0, -2));
    const p_margin_v = parseInt(parentCss.marginTop.slice(0, -2)) + parseInt(parentCss.marginBottom.slice(0, -2));
    const p_border_v = parseInt(parentCss.borderBottomWidth.slice(0, -2)) + parseInt(parentCss.borderTopWidth.slice(0, -2));
    if (p_height > 100) {
      height = p_height - p_margin_v + p_border_v;
    } else {
      height = height;
    }

    div.style.width = width + 'px';
    div.style.height = height + 'px';
  }

  getChart(id, name = id + 'child') {
    const div = document.createElement('div');
    let {width, height} = this.state;
    div.id = name;
    const container = document.getElementById(id);
    container.appendChild(div);

    this._onResize(container, div, width, height);
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

    window.addEventListener('resize', this._onResize.bind(this, container, div, width, height));
    return echarts.init(div);
  }

  render() {
    return null;
  }
}
