/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import { Box, Header, Heading } from 'grommet';
import { BarChart } from 'react-d3';

const barData = [
  {
    "name": "Series A",
    "values": [
      { "x": 1, "y":  91}
    ]
  },
  {
    "name": "Series B",
    "values": [
       { "x": 1, "y":  91}
    ]
  }
];

export default class MiddleLeft extends Component {
  render() {
    return (
      <Box pad="small">
        <Header>
          <Heading tag='h3' strong={true}>OVERTIME</Heading>
        </Header>
        <BarChart
          data={barData}
          width={500}
          height={200}
          fill={'#3182bd'}
          yAxisLabel='Label'
          xAxisLabel='Value'
        />
      </Box>
    );
  }
}
