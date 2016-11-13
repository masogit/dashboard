import React, { Component } from 'react';
import { Anchor, Box, Menu, Header, Title, CheckBox, SearchInput } from 'grommet';
import { WidgetNames } from './index';

const FIXED_SIZES = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];
const RELATIVE_SIZES = ['full', '1/2', '1/3', '2/3', '1/4', '3/4'];
const SIZES = FIXED_SIZES.concat(RELATIVE_SIZES);
const COLOR_INDEX = [
  'brand',
  'accent-1', 'accent-2', 'accent-3',
  'neutral-1', 'neutral-2', 'neutral-3',
  'grey-1', 'grey-2', 'grey-3', 'grey-4',
  'light-1', 'light-2',
  'critical', 'warning', 'ok', 'unknown'
];

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

  updateProps(key, value) {
    let { boxProps } = this.props;
    boxProps[key] = value;
    if (key == 'flex')
      boxProps.size = {};

    this.props.onUpdate(boxProps);
  }

  updateStyle(key, value) {
    let { boxProps } = this.props;
    let style = boxProps.style || {};
    style.key = value;

    if (key == 'height' || key == 'width')
      boxProps.flex = false;

    this.props.onUpdate(boxProps);
  }

  renderSizeMenu(key) {
    let { boxProps: {size: size = {}} } = this.props;
    return <SearchInput placeHolder={key} suggestions={SIZES} defaultValue={size[key]}
                        onSelect={(selected) => {
                          this.updateSize(key, selected.suggestion);
                          selected.target.value = selected.suggestion;
                        }}
                        onDOMChange={(e) => {
                          if (Number.isNaN(e.target.value))
                            this.updateStyle(key, e.target.value + 'px');
                        }}/>;
  }

  renderSize() {
    return (
      <Header pad="small">
        <Title>size</Title>
        { this.renderSizeMenu('height') }
        { this.renderSizeMenu('width') }
      </Header>
    );
  }

  // reverse, primary, responsive, announce, appCentered, focusable, wrap
  renderBool(type) {
    const prop = this.props.boxProps[type];
    return (
      <Header pad="small">
        <Title>{type}</Title>
        <CheckBox toggle={true} label={type} checked={prop} onChange={(e) => this.updateProps(type, e.target.checked)} />
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
        <Menu label={`Component: ${component || ''}`}>{menus}</Menu>
      </Header>
    );
  }

  renderColor() {
    const { boxProps } = this.props;
    let { colorIndex } = boxProps;
    const menus = COLOR_INDEX.map((color, index) => {
      return <Anchor key={index} label={color} onClick={this.updateProps.bind(this, 'colorIndex', color)} />;
    });
    return(
      <Header pad="small">
        <Title>Color</Title>
        <Menu label={`Index: ${colorIndex || ''}`}>{menus}</Menu>
        <input type='color' />
      </Header>
    );
  }

  render() {
    return (
      <Box size="large">
        <Header><Title>Box Properties</Title></Header>
        { this.renderSize() }
        { this.renderWidgetsMenus() }
        { this.renderBool('flex') }
        { this.renderColor() }
      </Box>
    );
  }
}
