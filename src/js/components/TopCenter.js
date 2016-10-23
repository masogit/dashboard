/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import { Box, Header, Heading } from 'grommet';
import WorldMap from 'grommet/components/WorldMap';

export default class TopCenter extends Component {
  render() {
    return (
      <Box pad="small">
        <Header>
          <Heading tag='h3' strong={true}>WORLDWIDE DEVICE DISTRIBUTION</Heading>
        </Header>
        <Box size="large">
          <WorldMap series={[
              { continent: 'NorthAmerica', colorIndex: 'graph-1' },
              { continent: 'SouthAmerica', colorIndex: 'accent-1' },
              { continent: 'Europe', colorIndex: 'unset' },
              { continent: 'Africa', colorIndex: 'graph-2' },
              { continent: 'Asia', colorIndex: 'graph-3' },
              { continent: 'Australia', colorIndex: 'graph-4' }
          ]} />
        </Box>
      </Box>
    );
  }
}
