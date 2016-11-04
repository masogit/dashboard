import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Box, Tabs, Tab, Sidebar, Legend, Heading } from 'grommet';
import { Map, MarkerGroup } from 'react-d3-map';
import { Table } from '../components';
import { deviceActions } from '../actions';

const mapConf = {
  width: 1200,
  height: 600,
  scale: 4000,
  scaleExtent: [1 << 12, 1 << 13],
  center: [100, 36]
};

class Device extends Component {
  componentDidMount() {
    this.props.actions.loadDevices();
  }

  renderMarkerGroup(records) {
    return records.map((data) => {
      return <MarkerGroup data={data}/>;
    });
  }

  renderLegends(legends) {
    return Object.keys(legends).map((key) => {
      return (
        <Box pad="small">
          <Heading uppercase={true} tag="h3">{key}</Heading>
          <Legend series={legends[key]} total={true} />
        </Box>
      );
    });
  }

  render() {
    const { records, markers, legends } = this.props;
    return (
      <Box pad="small">
        <Tabs>
          <Tab title="Location">
            <Box direction="row">
              <Sidebar full={false}>
                { this.renderLegends(legends) }
              </Sidebar>
              <Map {...mapConf}>
                { this.renderMarkerGroup(markers) }
              </Map>
            </Box>
            <Table data={records}/>
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
    markers: state.device.markers,
    legends: state.device.legends
  };
};

let mapDispatchProps = (dispatch) => ({
  actions: bindActionCreators(deviceActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchProps)(Device);
