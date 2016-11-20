/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import { Box, Heading, Header, Menu, Anchor} from 'grommet';
import { AreaChart } from 'react-d3';

var myDate = new Date();
const areaData = [
  {
    name: "series1",
    values: [
      { x: myDate, y: 20.5 },
      { x: myDate.setDate(myDate.getDate() + 1), y: 4.2 },
      { x: myDate.setDate(myDate.getDate() + 2), y: 10 },
      { x: myDate.setDate(myDate.getDate() + 3), y: 0 },
      { x: myDate.setDate(myDate.getDate() + 4), y: 25 }
    ]
  },
  {
    name: "series2",
    values: [
      { x: myDate, y: 3.2 },
      { x: myDate.setDate(myDate.getDate() + 1), y: 5 },
      { x: myDate.setDate(myDate.getDate() + 2), y: 11.2 },
      { x: myDate.setDate(myDate.getDate() + 3), y: 15 },
      { x: myDate.setDate(myDate.getDate() + 4), y: 21 }
    ]
  }
];

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
    return (
      <Box style={{width: '100%'}} pad='small'>
        <Header justify='between'>
          <Heading tag='h3' strong={true}>{title}</Heading>
          <Menu direction='row'>
            <Anchor label='RESPONSE TIME'/>
            <Anchor label='ERROR RATE'/>
          </Menu>
        </Header>
        <Box direction="row">
          <AreaChart
            data={areaData}
            width={800}
            height={250}
            viewBoxObject={{
              x: 0,
              y: 0,
              height: 300,
              width: 1000
            }}
            xAxisTickInterval={{unit: 'year', interval: 2}}
          />
        </Box>
      </Box>
    );
  }
}

