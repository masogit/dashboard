import React, { Component } from 'react';
import { Columns} from 'grommet';
import { Widgets } from '../components';

export default class Home extends Component {

                // <Box colorIndex="neutral-1" pad="small"><Title>{key}</Title></Box>
  render() {
    return (
      <Columns justify="center">
        {
          Object.keys(Widgets).map((key, index) => {
            const Widget = Widgets[key];
            return <Widget key={index}/>;
          })
        }
      </Columns>
    );
  }
}
