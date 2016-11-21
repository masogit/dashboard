/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import Map from './Map.js';
import { Box } from 'grommet';
import Card1 from './Card1.js';
import Warpper from './Warpper.js';

export default class Full_Map extends Component {

  render() {
    // const events = [{
    //   name: 'mouseenter',
    //   func: (obj, item, index) => {
    //     obj[0][index].style.fill = '#9e9e9e';
    //   }
    // }, {
    //   name: 'mouseout',
    //   func: (obj, item, index) => {
    //     obj[0][index].style.fill = '';
    //   }
    // }];
    return (
      <Warpper name='Full Map'>
        <Map >
          <Box size='large' colorIndex='brand'>
            <Card1 />
          </Box>
        </Map>
      </Warpper>
    );
  }
}
