import React, { Component } from 'react';
import { Anchor, Box, Header, Headline, Columns, Icons } from 'grommet';
// import { Widgets } from '../components';
import Widgets from '../components/AdminTemplate/Widgets';
import Warpper from '../components/Widgets/Warpper';

const { Add } = Icons.Base;

export default class WidgetsContainer extends Component {

  renderAllWidgets() {
    if (!this.props.params.name) {
      const keys = Object.keys(Widgets);
      return (
        <Columns justify="center" size="large">
          {
            keys.map((key) => {
              return (
                <Warpper name={key} status="success" style={{ height: '600px' }}>
                  {Widgets[key]}
                </Warpper>
              )
            })
          }
        </Columns>
      );
    } else
      return null;
  }

  renderOneWidget() {
    if (this.props.params.name) {
      const Widget = Widgets[this.props.params.name];
      return (
        <Widget />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <Box pad="small">
        <Header justify="between">
          <Headline size="small">All Widgets</Headline>
          <Anchor icon={<Add />} label="Add" />
        </Header>
        {this.renderAllWidgets()}
        {this.renderOneWidget()}
      </Box>
    );
  }
}
