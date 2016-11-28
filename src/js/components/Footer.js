import React, { Component } from 'react';
import { Footer, Box } from 'grommet';

export default class FooterArea extends Component {
  render() {
    return (
      <Footer separator='top' direction="row" justify="between" pad={{ horizontal: 'small' }}>
        <Box><strong>Copyright © 2016-2017 <a href="http://masogit.github.io">Maso Studio</a>.</strong></Box>
        <Box direction="row"><strong>Version - </strong> 0.0.1</Box>
      </Footer>
    );
  }
}
