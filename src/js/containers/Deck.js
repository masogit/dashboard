import React, { Component } from 'react';
import { Box, Menu, Button, Icons, Layer } from 'grommet';
const { Trash, Shift, AddCircle, Configure } = Icons.Base;
import { BoxPropsMenu, Widgets } from '../components';
import { connect } from 'react-redux';
import { TYPE } from '../constants';

class Deck extends Component {
  constructor(props) {
    super();
    this.state = {
      layer: null
    };
  }

  onUpdate(box, props) {
    Object.assign(box.props, props);
    this.props.setBox(this.props.box);
  }

  onBind(box, compName) {
    box.component = compName;
    this.props.setBox(this.props.box);
  }

  buildBox(box) {
    let child;
    if (box.child && box.child instanceof Array) {
      box.props.separator = "none";
      child = (
        <Box {...box.props} flex={true}>
          { box.child.map((child) => this.buildBox(child))}
        </Box>
      );
    }
    let Widget = box.component && Widgets[box.component];
    let position = !box.component ? {justify: 'center', align: 'center'} : {};
    return (
      <Box separator={(!box.child && !this.props.present) ? 'all' : 'none'} flex={true} {...position} {...box.props}>
        {!this.props.present && this.buildMenu(box)}
        {child}
        {box.component && <Widget />}
      </Box>
    );
  }

  buildMenu(box) {
    return (
      <Menu closeOnClick={false} direction="row" justify="between" colorIndex={box.child ? 'grey-4-a' : ''}
            inline={!box.props.direction || (box.props.direction == 'column') || !box.child} >
        <Box direction={box.direction == 'column' ? 'row' : 'row'}>
          <Button icon={<Shift className={(!box.props.direction || box.props.direction == 'column') ? 'icon_rotate90' : ''}/>}
                  onClick={this.toggleDirection.bind(this, box)}/>
          {
            !box.component &&
            <Button icon={<AddCircle />} onClick={this.props.addBox.bind(this, box, this.props.box)}/>
          }
          {
            !(box.child instanceof Array && box.child.length > 0) &&
            <Button icon={<Trash />} onClick={this.props.deleteBox.bind(this, box, this.props.box)}/>
          }
          <Button icon={<Configure />} onClick={this.showConfigure.bind(this, box)}/>
        </Box>
      </Menu>
    );
  }

  toggleDirection(box) {
    if (!box.props.direction)
      box.props.direction = 'row';
    else if (box.props.direction == 'row')
      box.props.direction = 'column';
    else
      box.props.direction = 'row';

    this.props.setBox(this.props.box);
  }

  showConfigure(box) {
    const layer = (
      <Layer align="center" closer={true} onClose={this.closeConfigure.bind(this)}>
        <BoxPropsMenu onUpdate={(props) => this.onUpdate(box, props)} boxProps={box.props}
                      onBind={(compName) => this.onBind(box, compName)} component={box.component}/>
      </Layer>
    );
    this.setState({ layer });
  }

  closeConfigure() {
    this.setState({ layer: null });
  }

  render() {
    let { box } = this.props;
    return (
        <Box flex={true}>
          { this.buildBox(box) }
          { this.state.layer }
        </Box>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    box: state.deck.box
  };
};

let mapDispatchProps = (dispatch) => ({
  addBox: (box, root) => dispatch({type: TYPE.DECK_ADD_BOX, box: box, root: root}),
  deleteBox: (box, root) => dispatch({type: TYPE.DECK_DEL_BOX, box: box, root: root}),
  setBox: (box) => dispatch({type: TYPE.DECK_SET_BOX, box: box})
});

export default connect(mapStateToProps, mapDispatchProps)(Deck);
