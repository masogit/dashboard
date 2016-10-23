/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import { Box, Header, Heading } from 'grommet';
import { LineChart } from 'react-d3';

const lineData = [
  {
    name: "series1",
    values: [ { x: 0, y: 20 }, { x: 24, y: 10 } ],
    strokeWidth: 3,
    strokeDashArray: "5,5"
  },
  {
    name: "series2",
    values: [ { x: 70, y: 82 }, { x: 76, y: 82 } ]
  }
];

export default class TopRight extends Component {
  render() {
    return (
      <Box pad="small">
        <Header>
          <Heading tag='h3' strong={true}>ERROR RATE</Heading>
        </Header>
        <LineChart
          legend={true}
          data={lineData}
          width='100%'
          height={250}
          viewBoxObject={{x: 0, y: 0, width: 500, height: 400 }}
          yAxisLabel="Altitude"
          xAxisLabel="Elapsed Time (sec)"
          gridHorizontal={true}
        />
      </Box>
    );
  }
}
