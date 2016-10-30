import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Tabs, Tab } from 'grommet';
import { Map } from 'react-d3-map';
import { Table } from '../components';

const mapConf = {
  width: 1400,
  height: 600,
  scale: 4000,
  scaleExtent: [1 << 12, 1 << 13],
  center: [111, 36]
};

class Device extends Component {
  render() {
    const { records, labels } = this.props;
    return (
      <Box pad="small">
        <Tabs>
          <Tab title="Location">
            <Box size="large">
              <Map {...mapConf}/>
            </Box>
            <Table data={records} fields={labels} />
          </Tab>
          <Tab title="Model" />
          <Tab title="Customer" />
        </Tabs>
      </Box>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    records: state.device.records,
    labels: state.device.labels
  };
};

export default connect(mapStateToProps)(Device);
