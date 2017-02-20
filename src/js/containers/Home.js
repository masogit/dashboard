import React, { Component } from 'react';
import { Tile, Box, Tiles} from 'grommet';
import {
  TopCenter,
  TopLeft,
  TopRight,
  MiddleLeft,
  MiddleRight,
  BottomCenter
 } from '../components/index';

export default class Home extends Component {
  render() {
    return (
      <Box flex={true}>
        <Box style={{flexGrow: 1}}>
          <Tiles fill={true} flex={true}>
            <Tile pad="medium" margin="small" >
              <TopLeft/>
            </Tile>
            <Tile pad="medium" margin="small" >
              <TopCenter/>
            </Tile>
            <Tile pad="medium" margin="small" >
              <TopRight/>
            </Tile>
          </Tiles>
        </Box>
        <Box style={{flexGrow: 1}}>
          <Tiles fill={true} flex={true}>
            <Tile pad="medium" margin="small" >
              <MiddleLeft/>
            </Tile>
            <Tile pad="medium" margin="small" >
              <BottomCenter title='RECENT EVENTS'/>
            </Tile>
            <Tile pad="medium" margin="small" >
              <MiddleRight/>
            </Tile>
          </Tiles>
        </Box>
      </Box>
    );
  }
}
