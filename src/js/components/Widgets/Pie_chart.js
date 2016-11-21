/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import { Header, Heading } from 'grommet';
import { PieChart } from 'react-d3';
import Warpper from './Warpper';
const pieData = [
  {label: 'Model A', value: 20.0},
  {label: 'Model B', value: 55.0},
  {label: 'Model C', value: 25.0 }
];

export default class Pie_chart extends Component {
  render() {
    return (
      <Warpper name='Pie Chart'>
        <Header>
          <Heading tag='h3' strong={true}>DEVICE MODEL</Heading>
        </Header>
        <PieChart
          data={pieData}
          width={300}
          height={250}
          radius={80}
          innerRadius={20}
          sectorBorderColor="white"
        />
      </Warpper>
    );
  }
}
