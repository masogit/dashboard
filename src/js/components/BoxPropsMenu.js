import React, { Component } from 'react';
import { Anchor, Box, Menu, CheckBox, Label } from 'grommet';

const FIXED_SIZES = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];
const RELATIVE_SIZES = ['full', '1/2', '1/3', '2/3', '1/4', '3/4'];
const SIZES = FIXED_SIZES.concat(RELATIVE_SIZES);

export default class BoxPropsMenu extends Component {

  updateSize(label, size) {
    let { boxProps } = this.props;
    let Size = {};
    if (label == 'Height')
      Size.height = size;
    if (label == 'Width')
      Size.width = size;

    Object.assign(boxProps, {size: Size});
    this.props.onUpdate(boxProps);
  }

  renderMenuSize(label) {
    const items = SIZES.map((size, i) => {
      return <Anchor key={i} label={size} onClick={this.updateSize.bind(this, label, size)}/>;
    });
    return <Menu label={label}>{items}</Menu>;
  }

  render() {
    return (
      <Menu inline={false} closeOnClick={false} dropAlign={{ right: 'right', top: 'top' }}>
        <Box direction="row">
          { this.renderMenuSize('Height') }
          { this.renderMenuSize('Width') }
        </Box>
      </Menu>
    );
  }
}
