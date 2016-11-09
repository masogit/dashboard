import React, { Component } from 'react';
import { Anchor, Menu, CheckBox } from 'grommet';

export default class BoxPropsMenu extends Component {
  render() {
    return (
      <Menu inline={false} closeOnClick={false} dropAlign={{ right: 'right', top: 'top' }}>
        <Anchor label="Bind a component" />
        <CheckBox label="Flex" toggle={true} />
      </Menu>
    );
  }
}
