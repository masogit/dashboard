import React, { Component } from 'react';
import { Anchor, Box, Header, Headline, Columns, Icons } from 'grommet';
import { Widgets } from '../components';

const { Add } = Icons.Base;

export default class WidgetsContainer extends Component {

  render() {
    return (
      <Box pad="small">
        <Header justify="between">
          <Headline size="small">All Widgets</Headline>
          <Anchor icon={<Add />} label="Add" />
        </Header>
        <Columns justify="center">
          {
            Object.keys(Widgets).map((key, index) => {
              const Widget = Widgets[key];
              return <Widget key={index} />;
            })
          }
        </Columns>
      </Box>
    );
  }
}
