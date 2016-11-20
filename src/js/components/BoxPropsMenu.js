import React, { Component } from 'react';
import { Anchor, Box, Menu, Header, Title, CheckBox, SearchInput, Split } from 'grommet';
import { WidgetNames } from './index';

const COLOR_INDEX = [
  'brand',
  'accent-1', 'accent-2', 'accent-3',
  'neutral-1', 'neutral-2', 'neutral-3',
  'grey-1', 'grey-2', 'grey-3', 'grey-4',
  'light-1', 'light-2',
  'critical', 'warning', 'ok', 'unknown'
];
const MARGIN_SIZES = ['small', 'medium', 'large', 'none'];
const FIXED_SIZES = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];
const PAD_SIZES = ['small', 'medium', 'large', 'none'];
const oneOf = {
  flex: ['grow', 'shrink', true, false],
  justify: ['start', 'center', 'between', 'end'],
  align: ['start', 'center', 'end', 'baseline', 'stretch'],
  alignContent: ['start', 'center', 'end', 'between', 'around', 'stretch'],
  alignSelf: ['start', 'center', 'end', 'stretch'],
  textAlign: ['left', 'center', 'right'],
  colorIndex: COLOR_INDEX,
  separator: ['top', 'bottom', 'left', 'right', 'horizontal', 'vertical', 'all', 'none']
};
const sharp = {
  margin: {
    bottom: MARGIN_SIZES,
    horizontal: MARGIN_SIZES,
    left: MARGIN_SIZES,
    right: MARGIN_SIZES,
    top: MARGIN_SIZES,
    vertical: MARGIN_SIZES
  },
  pad: {
    between: PAD_SIZES,
    horizontal: PAD_SIZES,
    vertical: PAD_SIZES
  }
};

// const RELATIVE_SIZES = ['full', '1/2', '1/3', '2/3', '1/4', '3/4'];
// const SIZES = FIXED_SIZES.concat(RELATIVE_SIZES);

export default class BoxPropsMenu extends Component {
  constructor() {
    super();
    this.state={
      size: this.renderSize
    };
  }

  updateSharp(key, attr, value) {
    let { boxProps } = this.props;
    let sharp = boxProps[key] || {};
    sharp[attr] = value;

    boxProps[key] = sharp;
    this.props.onUpdate(boxProps);
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
    if (key == 'flex') {
      if (boxProps.style) {
        delete boxProps.style.height;
        delete boxProps.style.width;
      }
      delete boxProps.size;
    }

    this.props.onUpdate(boxProps);
  }

  updateStyle(key, value) {
    let { boxProps } = this.props;
    const {style: style = {}} = boxProps;
    style[key] = value;
    Object.assign(boxProps, {style});

    if (key == 'height' || key == 'width')
      boxProps.flex = false;

    this.props.onUpdate(boxProps);
  }

  renderSizeProps(key) {
    let { boxProps: {size: size = {}} } = this.props;
    return (
      <SearchInput placeHolder={key} suggestions={FIXED_SIZES} defaultValue={size[key]}
                        onSelect={(selected) => {
                          this.updateSize(key, selected.suggestion);
                          selected.target.value = selected.suggestion;
                        }}
                        onDOMChange={(e) => {
                          if (Number.isInteger(Number(e.target.value)))
                            this.updateStyle(key, e.target.value + 'px');
                        }} />
    );
  }

  renderSize() {
    return (
      <Header pad="small" justify="between">
        <Title>Size</Title>
        { this.renderSizeProps('height') }
        { this.renderSizeProps('width') }
      </Header>
    );
  }

  // reverse, primary, responsive, announce, appCentered, focusable, wrap
  renderBool(type) {
    const prop = this.props.boxProps[type];
    return (
      <Header pad="small" justify="between">
        <Title>{type}</Title>
        <CheckBox toggle={true} checked={prop}
                  onChange={(e) => this.updateProps(type, e.target.checked)} />
      </Header>
    );
  }

  renderWidgetsMenus() {
    const { component, onBind } = this.props;
    let menus = WidgetNames.map((key, index) => {
      return <Anchor key={index} label={key} onClick={() => onBind(key)}/>;
    });
    return (
      <Header pad="small" justify="between">
        <Title>Widgets</Title>
        <Menu label={`Component: ${component || ''}`}>{menus}</Menu>
      </Header>
    );
  }

  renderOneOf({label, prop, types}) {
    const { boxProps } = this.props;
    let currentValue = boxProps[prop] || '';
    const menus = types.map((type, index) => {
      return (<Anchor key={index} label={String(type)} onClick={() => {
        this.updateProps(prop, type);
        // this.refs[prop].props.label = type;
      }} />);
    });
    return(
      <Header pad="small" justify="between">
        <Title>{label}</Title>
        <Menu ref={prop} label={currentValue} inline={false}>{menus}</Menu>
      </Header>
    );
  }

  renderAllOneOf() {
    return Object.keys(oneOf).map((key) => {
      return this.renderOneOf({
        label: key, prop: key, types: oneOf[key]
      });
    });
  }

  renderAllSharp() {
    return Object.keys(sharp).map((key, index) => {
      const attrSelects = Object.keys(sharp[key]).map((attr, index) => {
        let menus = sharp[key][attr].map((prop, index) => {
          return <Anchor key={index} label={prop} onClick={() => this.updateSharp(key, attr, prop)}/>;
        });
        return <Menu label={attr} key={index}>{menus}</Menu>;
      });
      return(
        <Header pad="small" justify="between" key={index}>
          <Title>{key}</Title>
          <Box>{ attrSelects }</Box>
        </Header>
      );
    });
  }

  render() {
    return (
      <Box>
        { this.renderWidgetsMenus() }
        { this.renderSize() }
        <Split showOnResponsive="both">
          { this.renderAllOneOf() }
          { this.renderAllSharp() }
        </Split>
      </Box>
    );
  }
}
