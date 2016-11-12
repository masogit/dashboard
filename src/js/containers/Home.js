import React, { Component } from 'react';
import { Box, Title, Columns} from 'grommet';
import { Widgets } from '../components';

export default class Home extends Component {

  render() {
    return (
      <Columns justify="center">
      {
        Object.keys(Widgets).map((key) => {
          let Widget = Widgets[key];
          return (
            <Box separator="all" margin="small">
              <Box colorIndex="neutral-1" pad="small"><Title>{key}</Title></Box>
              <Widget />
            </Box>
          );
        })
      }
      </Columns>
    );
  }
}
