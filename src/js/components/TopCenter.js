/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import Map from './Map.js';
import { Box } from 'grommet';
import BottomRight from './BottomRight.js';

export default class TopCenter extends Component {

  render() {
    const events = [{
      name: 'mouseenter',
      func: (obj, item, index) => {
        obj[0][index].style.fill = '#9e9e9e';
      }
    }, {
      name: 'mouseout',
      func: (obj, item, index) => {
        obj[0][index].style.fill = '';
      }
    }];
    return (
      <Map events={events}>
        <Box size='large' colorIndex='brand'>
          <BottomRight />
        </Box>
      </Map>
    );
  }
}
