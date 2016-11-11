import React, { Component } from 'react';
import { Anchor, Box, Menu, Title, Icons } from 'grommet';
const { Down } = Icons.Base;

const FIXED_SIZES = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];
const RELATIVE_SIZES = ['full', '1/2', '1/3', '2/3', '1/4', '3/4'];
const SIZES = FIXED_SIZES.concat(RELATIVE_SIZES);

export default class BoxPropsMenu extends Component {
  constructor() {
    super();
    this.state={
      size: this.renderSize
    };
  }

  updateSize(label, value) {
    let { boxProps } = this.props;
    const {size: size = {}} = boxProps;
    size[label] = value;

    Object.assign(boxProps, {size});
    this.props.onUpdate(boxProps);
  }

  renderSize(label) {
    let { boxProps: {size: size = {}} } = this.props;
    const items = SIZES.map((size, i) => {
      return <Anchor key={i} label={size} onClick={this.updateSize.bind(this, label, size)}/>;
    });
    return <Menu closeOnClick={false} label={`${label}: ${size[label] || ''}`}>{items}</Menu>;
  }

  renderPropsMenus() {
    return Object.keys(Box.propTypes).map((type) => {
      return <Title>{type}</Title>;
    });
  }

  render() {
    return (
      <Menu inline={false} closeOnClick={false} dropAlign={{ right: 'right', top: 'top' }} icon={<Down />}>
        <Box direction="row">
          { this.renderSize('height') }
          { this.renderSize('width') }
        </Box>
        {this.renderPropsMenus()}
      </Menu>
    );
  }
}
