import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Box, Tabs, Tab } from 'grommet';
import { Map, MarkerGroup } from 'react-d3-map';
import { Table } from '../components';
import { deviceActions } from '../actions';

const mapConf = {
  width: 1400,
  height: 600,
  scale: 4000,
  scaleExtent: [1 << 12, 1 << 13],
  center: [111, 36]
};

class Device extends Component {
  componentDidMount() {
    this.props.actions.loadDevices();
  }

  renderMarkerGroup(records) {
    return records.map((record) => {
      var data = {
          "type": "Feature",
          "properties": {
            "text": record.name
          },
          "geometry": {
              "type": "Point",
              "coordinates": [record.longitude, record.latitude]
          }
      }
      return <MarkerGroup data={data}/>
    });
  }

  render() {
    const { records } = this.props;
    return (
      <Box pad="small">
        <Tabs>
          <Tab title="Location">
            <Box size="large">
              <Map {...mapConf}>
                { this.renderMarkerGroup(records) }
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
    records: state.device.records
  };
};

let mapDispatchProps = (dispatch) => ({
  actions: bindActionCreators(deviceActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchProps)(Device);
