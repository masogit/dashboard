import React, { Component } from 'react';
import { Tile, Box, Tiles } from 'grommet';
import {
  TopCenter,
  TopLeft,
  TopRight,
  MiddleCenter,
  MiddleLeft,
  MiddleRight,
  BottomCenter,
  BottomLeft,
  BottomRight} from '../components/index';

export default class Home extends Component {
  render() {
    return (
      <Box flex={true}>
        <Box style={{flexGrow: 1}}>
          <Tiles fill={true} flex={true}>
            <Tile  align="center" pad="medium" margin="small" >
              <TopLeft/>
            </Tile>
            <Tile  align="center" pad="medium" margin="small" >
              <TopCenter/>
            </Tile>
            <Tile  align="center" pad="medium" margin="small" >
              <TopRight/>
            </Tile>
          </Tiles>
        </Box>
        <Box style={{flexGrow: 1}}>
          <Tiles fill={true} flex={true}>
            <Tile  align="center" pad="medium" margin="small" >
              <MiddleLeft/>
            </Tile>
            <Tile  align="center" pad="medium" margin="small" >
              <MiddleCenter/>
            </Tile>
            <Tile  align="center" pad="medium" margin="small" >
              <MiddleRight/>
            </Tile>
          </Tiles>
        </Box>
        <Box style={{flexGrow: 1}}>
          <Tiles fill={true} flex={true}>
            <Tile  align="center" pad="medium" margin="small"  style={{flexGrow: 6}}>
              <BottomLeft />
            </Tile>
            <Tile  align="center" pad="medium" margin="small">
              <BottomCenter/>
            </Tile>
            <Tile  align="center" pad="medium" margin="small">
              <BottomRight/>
            </Tile>
          </Tiles>
        </Box>
      </Box>
    );
  }
}
