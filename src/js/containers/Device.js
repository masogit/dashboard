import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Tabs, Tab } from 'grommet';
import WorldMap from 'grommet/components/WorldMap';
import { Table } from '../components';

class Device extends Component {
  render() {
    const { records, labels } = this.props;
    return (
      <Box pad="small">
        <Tabs>
          <Tab title="Location">
            <Box size="large">
              <WorldMap series={[
                  { continent: 'NorthAmerica', colorIndex: 'graph-1' },
                  { continent: 'SouthAmerica', colorIndex: 'accent-1' },
                  { continent: 'Europe', colorIndex: 'unset' },
                  { continent: 'Africa', colorIndex: 'graph-2' },
                  { continent: 'Asia', colorIndex: 'graph-3' },
                  { continent: 'Australia', colorIndex: 'graph-4' }
              ]} />
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
