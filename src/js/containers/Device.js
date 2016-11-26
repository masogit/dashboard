import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Box, Legend, Heading } from 'grommet';
import { Table } from '../components';
import { deviceActions } from '../actions';

class Device extends Component {
  componentDidMount() {
    this.props.actions.loadDevices();
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
    const { records, legends } = this.props;
    return (
      <Box pad="small" direction="row">
        <Box>{this.renderLegends(legends)}</Box>
        <Table data={records} />
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
