import React, { Component} from 'react';
import { Box } from 'grommet';
import { Deck } from './index';

export default class NoFound extends Component {
  render() {
    return (
        <Box full={true}>
          <Deck present={true}/>
        </Box>
    );
  }
}
