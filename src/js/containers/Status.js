import React, { Component } from 'react';
import { Box } from 'grommet';

export default class Customer extends Component {
  render() {
    const { param } = this.props.params;
    return (
        <Box>
            This is Status: {param}.
        </Box>
    );
  }
}
