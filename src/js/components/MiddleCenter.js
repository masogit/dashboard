/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import { Box, Header, Heading } from 'grommet';
import { Table } from '../components';

const initialState = {
  records: [
    {'NO.': '123123', NAME: 'Device 01', PRESSURE: '123p', TEMP: '38C', TIME: '2016-10-10 20:00:00', AGENT: 'DDD'},
    {'NO.': '123123', NAME: 'Device 01', PRESSURE: '123p', TEMP: '38C', TIME: '2016-10-10 20:00:00', AGENT: 'DDD'},
    {'NO.': '123123', NAME: 'Device 01', PRESSURE: '123p', TEMP: '38C', TIME: '2016-10-10 20:00:00', AGENT: 'DDD'},
    {'NO.': '123123', NAME: 'Device 01', PRESSURE: '123p', TEMP: '38C', TIME: '2016-10-10 20:00:00', AGENT: 'DDD'}
  ],
  labels: "NO.,NAME,PRESSURE,TEMP,TIME,AGENT"
};

export default class MiddleCenter extends Component {
  render() {
    const { records, labels } = initialState;
    return (
      <Box pad="small">
        <Header>
          <Heading tag='h3' strong={true}>ALARM VALUE</Heading>
        </Header>
        <Table data={records} fields={labels} />
      </Box>
    );
  }
}
