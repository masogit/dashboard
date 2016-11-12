import echarts from 'echarts';
import React, { Component } from 'react';
import { getMapJson, getBusinessJson } from '../actions/map.js';
      
export default class Map extends Component {
  componentWillMount() {
    this.state = {
      isMapDataReady: false,
      geoCoordMap: [],
      data: [],
      map: 'china',
      business: 'item'
    };
    const promises = [
      getMapJson(this.state.map).then((china) => {
        echarts.registerMap(this.state.map, china);
        const geoCoordMap = {};
        china.features.map(f => geoCoordMap[f.properties.name] = f.properties.cp);
        return geoCoordMap;
      }),
      getBusinessJson(this.state.business).then(data => {
        return data;
      })];
    
    Promise.all(promises).then(([geoCoordMap,data]) => {
      this.chart.hideLoading();
      this.setState({ geoCoordMap, data, isMapDataReady: true });
    });
  }

  componentDidMount() {
    this.chart = echarts.init(document.getElementById('chart'));
    this.chart.showLoading();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ map: nextProps.map, business: nextProps.business });
  } 
  
  componentDidUpdate() {
    this.renderMap();
  }

  getData(data = this.state.data, geoCoordMap = this.state.geoCoordMap) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
    return res;
  };
  
  renderMap() {
    if (this.state.isMapDataReady == false) {
      return;
    }
    const data = this.getData();   
    const top5 = this.getData(this.state.data.sort(function (a, b) {
      return b.value - a.value;
    }).slice(0, 2));
    this.chart.setOption({
      backgroundColor: '#404a59',
      title: {
        text: '全国主要城市空气质量',
        subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        y: 'bottom',
        x: 'right',
        data: ['machine'],
        textStyle: {
          color: '#fff'
        }
      },
      geo: {
        map: this.state.map,
        label: {
          emphasis: {
            show: false
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: 'rgb(82,89,101)',
            borderColor: '#80744E'
          },
          emphasis: {
            areaColor: 'rgba(82,89,101,.8)'
          }
        }
      },
      series: [
        {
          name: 'machine',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: this.getData(),
          symbolSize: function (val) {
            return val[2] / 2;
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#ddb926'
            }
          }
        },
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: top5,
          symbolSize: function (val) {
            return val[2];
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#f4e925',
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          zlevel: 1
        }]
    });
  }
  render() {
    const {width = 800, height = 600} = this.props;
    
    return <div id='chart' style={{ width, height}}/>;
  }
}

