import React, { Component } from 'react';
import { Box } from 'grommet';

export default class Customer extends Component {
  render() {
    const { name } = this.props.params;
    return (
        <Box>
            This is Customer: {name}.
        </Box>
    );
  }
}
