import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Tabs, Tab } from 'grommet';
import { Table } from '../components';

class Device extends Component {
  render() {
    const { records, labels } = this.props;
    return (
      <Box pad="small">
        <Tabs>
          <Tab title="First Title" />
          <Tab title="Second Title" />
          <Tab title="Third Title" />
        </Tabs>
        <Table data={records} fields={labels} />
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
