import React, { Component } from 'react';
import { Box, Object as Tree } from 'grommet';
import { connect } from 'react-redux';

class DeviceModel extends Component {
  render() {
    const { model } = this.props.params;
    const { types } = this.props;
    let type = types.filter((type) => {
      return type.name == model;
    })[0];

    return (
        <Box>
            <Tree data={type} />
        </Box>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    types: state.device.types
  };
};

export default connect(mapStateToProps)(DeviceModel);
