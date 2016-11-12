import echarts from 'echarts';
import React, { Component } from 'react';
import { getMapJson, getBusinessJson } from '../actions/map.js';
import ChartComponent from './ChartComponent';

export default class Map extends ChartComponent {
  componentWillMount() {
    this.state = {
      geoCoordMap: [],
      data: [],
      map: '中国',
      business: '中国',
      parent: {}
    };
    this.initState();
    this.loadMap = this.loadMap.bind(this);
    this.loadMap();
    this.charts = {};
  }

  componentDidMount() {
    this.initChart();
  }

  componentDidUpdate() {
    this.renderMap();
  }

  componentWillUnmont() {
    this.charts = {};
  }

  initState(props = {}) {
    const {height = 600, width = 800} = props;
    Object.assign(this.state, {
      isMapDataReady: false,
      height,
      width
    });
  }

  initChart(name = this.state.map) {
    if (this.charts[name]) {
      const {chart, geoCoordMap, data} = this.charts[name];
      this.chart = chart;
      this.setState({ geoCoordMap, data });
    } else {
      const chart = this.getChart('map_chart', name);
      this.chart = chart;
      this.chart.showLoading();
      this.chart.on('click', params => {
        this.setState({
          map: params.name,
          business: params.name,
          parent: {
            map: this.state.map,
            business: this.state.business,
            parent: this.state.parent
          },
          isMapDataReady: false
        }, this.loadMap);
      });
      // this.addFunction();
      this.charts[name] = { chart };
    }

    Object.keys(this.charts).map(id => {
      const chart = document.getElementById(id);
      if (chart) {
        if (id != name) {
         chart.style.display = 'none';
        } else {
          chart.style.display = 'block';
        }
      }
    });
  }

  addFunction() {
    // const {onBrushSelected} = this.props;
    // if (onBrushSelected) {
    //   this.chart.on('brushselected', onBrushSelected);

    //   this.chart.setOption({
    //     toolbox: {
    //       iconStyle: {
    //         normal: {
    //           borderColor: '#fff'
    //         },
    //         emphasis: {
    //           borderColor: '#b1e4ff'
    //         },
    //         brush: brush
    //       }
    //     }
    //   })
    // }
  }

  loadMap(map = this.state.map, business = this.state.business) {
    const promises = [
      getMapJson(map).then((china) => {
        if (china) {
          this.initChart(map);
          echarts.registerMap(map, china);
          const geoCoordMap = {};
          china.features.map(f => geoCoordMap[f.properties.name] = f.properties.cp);
          return geoCoordMap;
        }
      }),
      getBusinessJson(business).then(data => {
        return data || [];
      })];

    Promise.all(promises).then(([geoCoordMap, data]) => {
      this.chart.hideLoading();
      if (geoCoordMap) {
        this.setState({ geoCoordMap, data, map, business, isMapDataReady: true });

        this.charts[map].geoCoordMap = geoCoordMap;
        this.charts[map].data = data;
      } else {
        const {map, business, parent} = this.state.parent;
        this.setState({ map, business, parent, isMapDataReady: true });
      }
    });
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
    const moveLines = [{
        "fromName": "辽宁",
        "toName": "江苏",
        "coords": [
            [123.42944, 41.835441],
            [118.763232, 32.061707]
        ]
    }, {
        "fromName": "广州",
        "toName": "湖北",
        "coords": [
            [113.264435, 23.129163],
            [114.341862, 30.546498]
        ]
    }];
    this.chart.setOption({
      backgroundColor: '#404a59',
      title: {
        text: `${this.state.map}燃烧器分布图`,
        subtext: 'Equipment Operation System',
        sublink: 'http://www.echarts.baidu.com',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      //brush: brush,
      toolbox: {
        show: true,
        feature: {
          restore: {},
          myBack: {
            show: !!this.state.parent.map,
            title: 'Back',
            icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
            onclick: () => {
              const {map, business, parent} = this.state.parent;
              const {chart, geoCoordMap, data} = this.charts[map];
              // this.chart = chart;
              this.setState({ geoCoordMap, data, map, business, parent });
            }
          },
        }
        //,
        // iconStyle: {
        //   normal: {
        //     borderColor: '#fff'
        //   },
        //   emphasis: {
        //     borderColor: '#b1e4ff'
        //   }
        // }
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
        roam: 'scale',
        itemStyle: {
          normal: {
            areaColor: 'rgb(82,89,101)',
            borderColor: '#80744E'
          },
          emphasis: {
            areaColor: 'rgba(82,89,101,.8)'
          }
        },
        scaleLimit: {
          min: 0.5,
          max: 2
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
        }, {
          name: '线路',
          type: 'lines',
          coordinateSystem: 'geo',
          zlevel: 2,
          large: true,
          effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'pin',
            symbolSize: 3,
            trailLength: 0,
          },
          lineStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#58B3CC'
              }, {
                offset: 1,
                color: '#F58158'
              }], false),
              width: 1,
              opacity: 0.2,
              curveness: 0.1
            }
          },
          data: moveLines
         }
      ]
    });
  }

  render() {
    const {width,height} = this.state;

    return <div id='map_chart' style={{ width, height}}/>;
  }
}

