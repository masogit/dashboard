import React, { Component } from 'react';
// import { Tile, Box, Tiles} from 'grommet';
import { renderBrushed } from '../constants/Map_brush';
import { Widgets } from '../components';
const { Map, Grid } = Widgets;
// import echarts from 'echarts';
export default class Home extends Component {

  // componentDidMount() {
  //   const chart1 = echarts.getInstanceByDom(document.getElementById('map_chart').children[0]);
  //   const chart2 = echarts.getInstanceByDom(document.getElementById('grid_chart'));
  //   chart1.group = 'group1';
  //   chart2.group = 'group1';
  //   echarts.connect('group1');

  // }
  render() {
    return (
      <div>
        <Map onBrushSelected={renderBrushed} />
        <Grid />
      </div>
    );
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
