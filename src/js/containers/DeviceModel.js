import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Box, Object as Tree } from 'grommet';
import { connect } from 'react-redux';
import { deviceActions } from '../actions';

class DeviceModel extends Component {
  componentWillMount() {
    this.props.actions.loadDeviceTypes();
  }
  render() {

    const { model } = this.props.params;
    const { types } = this.props;
    let type = types.filter((type) => {
      return type.name == model;
    })[0] || types[0];

    return (
      <Box>
        {
          type && <Tree data={type} />
        }
      </Box>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    types: state.device.types
  };
};

let mapDispatchProps = (dispatch) => ({
  actions: bindActionCreators(deviceActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchProps)(DeviceModel);
