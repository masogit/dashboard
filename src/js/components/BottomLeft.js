/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import { Box, Heading, Header, Menu, Anchor, Meter} from 'grommet';
import Chart, { Layers, Base, Area, Marker, MarkerLabel,Grid,
  HotSpots, Axis } from 'grommet/components/chart/Chart';
import Status from 'grommet/components/icons/Status';

export default class BottomLeft extends Component {
  componentWillMount() {
    this.state = {
      axis_x: [{"index": 0, "label": "10 ms"}, {"index": 2, "label": "30 ms"}, {"index": 4, "label": "50 ms"}],
      axis_y: [{"index": 0, "label": "Sep12"}, {"index": 1, "label": "Sep13"}, {"index": 2, "label": "Sep14"},
        {"index": 3, "label": "Sep15"}, {"index": 4, "label": "Sep16"}, {"index": 5, "label": "Sep17"}, {
          "index": 6,
          "label": "Sep18"
        }]
    };
  }

  render() {
    const {title} = this.props;
    const {axis_x, axis_y} = this.state;
    return (
      <Box style={{width: '100%'}} pad='small'>
        <Header justify='between'>
          <Heading tag='h3' strong={true}>{title}</Heading>
          <Menu direction='row'>
            <Anchor label='RESPONSE TIME'/>
            <Anchor label='ERROR RATE'/>
          </Menu>
        </Header>
        <Chart>
          <Axis vertical={true} ticks={true} count={6} labels={axis_x}/>
          <Chart vertical={true}>
            <MarkerLabel count={12} index={11} label='test'/>
            <Base />
            <Layers width={600} height={400}>
              <Grid rows={3} />
              <Marker vertical={true} colorIndex="graph-2" count={12} index={11}/>
              <Area smooth={true} values={[100, 95, 80, 82, 75, undefined, 60, 55, 0, 15, 40, 50]} activeIndex={11}/>
              <HotSpots count={12} activeIndex={11}/>
            </Layers>
            <Axis ticks={true} count={2} labels={axis_y}/>
          </Chart>
          <Chart vertical={true}>
            <Box direction='row'>
              <Status value='ok' /><Box pad={{horizontal: 'small'}}>Database</Box>
              <Meter vertical={false} label={false} max={100} min={0} value={50} active={false}/>
            </Box>
            <Box direction='row'>
              <Status value='critical' /><Box pad={{horizontal: 'small'}}>Mail Server</Box>
              <Meter vertical={false} label={false} max={100} min={0} value={50} active={false}/>
            </Box>
            <Box direction='row'>
              <Status value='warning' /><Box pad={{horizontal: 'small'}}>Web Server</Box>
              <Meter vertical={false} label={false} max={100} min={0} value={50} active={false}/>
            </Box>
          </Chart>
        </Chart>
      </Box>
    );
  }
}

