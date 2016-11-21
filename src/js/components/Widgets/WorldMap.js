/**
 * Created by huling on 10/22/2016.
 */
import React, { Component } from 'react';
import WorldMap from 'grommet/components/WorldMap';
import Warpper from './Warpper';

export default class World_Map extends Component {
  render() {
    return (
      <Warpper name='WORLDWIDE DEVICE DISTRIBUTION'>        
        <WorldMap series={[
            { continent: 'NorthAmerica', colorIndex: 'graph-1' },
            { continent: 'SouthAmerica', colorIndex: 'accent-1' },
            { continent: 'Europe', colorIndex: 'unset' },
            { continent: 'Africa', colorIndex: 'graph-2' },
            { continent: 'Asia', colorIndex: 'graph-3' },
            { continent: 'Australia', colorIndex: 'graph-4' }
        ]} />
      </Warpper>
    );
  }
}
