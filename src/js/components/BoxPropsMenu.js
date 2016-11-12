import React, { Component } from 'react';
import { Anchor, Box, Menu, Header, Title, Icons, CheckBox } from 'grommet';
const { Down } = Icons.Base;
import { WidgetNames } from './index';

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

  updateSize(key, value) {
    let { boxProps } = this.props;
    const {size: size = {}} = boxProps;
    size[key] = value;

    Object.assign(boxProps, {size, flex: false});
    this.props.onUpdate(boxProps);
  }

  renderSize(key) {
    let { boxProps: {size: size = {}} } = this.props;
    const items = SIZES.map((size, i) => {
      return <Anchor key={i} label={size} onClick={this.updateSize.bind(this, key, size)}/>;
    });
    return <Menu closeOnClick={false} label={`${key}: ${size[key] || ''}`}>{items}</Menu>;
  }

  updateBool(key, value) {
    let { boxProps } = this.props;
    boxProps[key] = value;
    boxProps.size = {};

    this.props.onUpdate(boxProps);
  }

  // reverse, primary, responsive, announce, appCentered, focusable, wrap
  renderBool(type) {
    const prop = this.props.boxProps[type];
    return (
      <Header pad="small">
        <Title>{type}</Title>
        <CheckBox toggle={true} label={type} checked={prop} onChange={(e) => this.updateBool(type, e.target.checked)} />
      </Header>
    );
  }

  renderPropsMenus() {
    return Object.keys(Box.propTypes).map((type) => {
      return <Title>{type}</Title>;
    });
  }

  renderWidgetsMenus() {
    const { component, onBind } = this.props;
    let menus = WidgetNames.map((key, index) => {
      return <Anchor key={index} label={key} onClick={() => onBind(key)}/>;
    });
    return (
      <Header pad="small">
        <Title>Widgets</Title>
        <Menu label={`Component: ${component || ''}`} dropAlign={{right: 'right', top: 'top'}}>{menus}</Menu>
      </Header>
    );
  }

  render() {
    return (
      <Box size="large">
        <Header pad="small">
          <Title>size</Title>
          { this.renderSize('height') }
          { this.renderSize('width') }
        </Header>
        { this.renderWidgetsMenus() }
        { this.renderBool('flex') }
      </Box>
    );
  }
}
