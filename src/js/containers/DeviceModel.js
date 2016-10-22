import React, { Component } from 'react';
import { Box } from 'grommet';

export default class DeviceModel extends Component {
  render() {
    const { model } = this.props.params;
    return (
        <Box>
            This is Model: {model}.
        </Box>
    );
  }
}
