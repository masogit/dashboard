/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import { Box, Header, Heading } from 'grommet';
import { CandlestickChart } from 'react-d3';

var myDate = new Date();
const ohlcData = [
  {
    name: "AAPL",
    values: [ { x: myDate, open: 451.69, high: 456.23, low: 435, close: 439.88 },
              { x: myDate.setMonth(myDate.getMonth() + 1), open: 255, high: 300, low: 200 , close: 100 },
              { x: myDate.setMonth(myDate.getMonth() + 2), open: 138, high: 453.21, low: 435.86 , close: 449.83 },
              { x: myDate.setMonth(myDate.getMonth() + 3), open: 366, high: 453.21, low: 300 , close: 449.83 },
              { x: myDate.setMonth(myDate.getMonth() + 4), open: 100, high: 400, low: 200 , close: 200 }
    ]
  }
];

export default class MiddleRight extends Component {
  render() {
    return (
      <Box pad="small">
        <Header>
          <Heading tag='h3' strong={true}>LOGS</Heading>
        </Header>
        <CandlestickChart
          data={ohlcData}
          width={500}
          height={250}
          xAxisTickInterval={{unit: 'month', interval: 1}}
          yAxisOffset={-10}
        />
      </Box>
    );
  }
}
