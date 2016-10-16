import React, { Component } from 'react';
import { Box, Header, Footer } from 'grommet';

export default class Frame extends Component {
  render () {
    return (
      <Box full={true}>
        <Header separator='bottom'>Header</Header>
        <Box flex={true} direction="row">
          <Box separator="right" style={{width: '200px'}}>Sidebar</Box>
          <Box>{this.props.children}</Box>
        </Box>
        <Footer separator='top'>Footer</Footer>
      </Box>
    );
  }
}
