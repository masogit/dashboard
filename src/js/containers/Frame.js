import React, { Component } from 'react';
import { Box } from 'grommet';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Frame extends Component {
  render () {
    return (
      <Box full={true}>
        <Header/>
        <Box flex={true} direction="row">
          <Box separator="right" style={{width: '200px'}}>Sidebar</Box>
          <Box>{this.props.children}</Box>
        </Box>
        <Footer />
      </Box>
    );
  }
}

