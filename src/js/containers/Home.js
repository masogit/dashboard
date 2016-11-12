import React, { Component } from 'react';
// import { Tile, Box, Tiles} from 'grommet';
import {
  TopCenter//,
  // TopLeft,
  // MiddleLeft,
  // MiddleRight,
  // BottomLeft
} from '../components/index';

import Map from '../components/Map_chart';

export default class Home extends Component {


  render() {
    return <Map />;
    // return (
    //   <Box flex={true} colorIndex="light-2">
    //     <Box style={{flexGrow: 1}}>
    //       <Tiles fill={true} flex={true}>
    //         <Tile pad={{vertical: 'medium'}}>
    //           <Box justify="start">
    //             <TopLeft/>
    //             <MiddleLeft/>
    //           </Box>
    //         </Tile>
    //         <Tile pad="medium" margin="small" >
    //           <TopCenter/>
    //         </Tile>
    //       </Tiles>
    //     </Box>
    //     <Box style={{flexGrow: 1}}>
    //       <Tiles fill={true} flex={true}>
    //         <Tile pad={{vertical: 'medium'}}>
    //           <Box margin={{left: 'large'}} flex={true}><BottomLeft title='SYSTEM HEALTH SUMMARY'/></Box>
    //         </Tile>
    //         <Tile pad="medium" margin="small" >
    //           <MiddleRight/>
    //         </Tile>
    //       </Tiles>
    //     </Box>
    //   </Box>
    // );
  }
}
