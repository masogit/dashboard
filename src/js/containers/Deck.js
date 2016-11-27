import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Anchor, Box, Menu, Button, Icons, Layer, Header, Headline } from 'grommet';
const { Trash, Shift, AddCircle, Configure, Play, Save, Clear } = Icons.Base;
import { BoxPropsMenu, Widgets } from '../components';
import { TYPE } from '../constants';
import { Link } from 'react-router';
import { deckActions } from '../actions';

class Deck extends Component {
  constructor(props) {
    super();
    this.state = {
      layer: null
    };
  }

  componentWillMount() {
    this.props.actions.getDecks();
  }

  buildBox(box) {
    let child;
    if (box.child && box.child instanceof Array) {
      box.props.separator = "none";
      child = (
        <Box {...box.props} flex={true}>
          {box.child.map((child) => this.buildBox(child))}
        </Box>
      );
    }
    let Widget = box.component && Widgets[box.component];
    let position = !box.component ? { justify: 'center', align: 'center' } : {};
    return (
      <Box key={box.key} separator={(!box.child && !this.props.present) ? 'all' : 'none'} flex={true} {...position} {...box.props}>
        {!this.props.present && this.buildMenu(box)}
        {child}
        {box.component && Widget}
      </Box>
    );
  }

  buildMenu(box) {
    return (
      <Menu closeOnClick={false} direction="row" colorIndex={box.child ? 'grey-4-a' : ''}
        inline={!box.props.direction || (box.props.direction == 'column') || !box.child} >
        <Box direction={box.direction == 'column' ? 'row' : 'row'}>
          <Button icon={<Shift className={(!box.props.direction || box.props.direction == 'column') ? 'icon_rotate90' : ''} />}
            onClick={this.toggleDirection.bind(this, box)} />
          {
            !box.component &&
            <Button icon={<AddCircle />} onClick={this.props.addBox.bind(this, box, this.props.box)} />
          }
          {
            !(box.child instanceof Array && box.child.length > 0) &&
            <Button icon={<Trash />} onClick={this.props.deleteBox.bind(this, box, this.props.box)} />
          }
          <Button icon={<Configure />} onClick={this.openConfigure.bind(this, box)} />
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

  openConfigure(box) {
    let layer = (
      <Layer align="right" onClose={this.closeConfigure.bind(this)} closer={true}>
        <BoxPropsMenu boxProps={box.props} currentBox={box} component={box.component} />
      </Layer>
    );

    this.setState({ layer });
  }

  closeConfigure() {
    this.setState({ layer: null });
  }

  render() {
    let { box, present } = this.props;
    let workspace = (
      <Box flex={true}>
        {this.buildBox(box)}
        {this.state.layer}
      </Box>
    );

    if (present)
      return workspace;
    else
      return (
        <Box flex={true} pad="small">
          <Header justify="between">
            <Headline size="small">Layout Designer</Headline>
            <Menu inline={true} direction="row">
              <Anchor icon={<Play />} label="Preview" tag={Link} to="/preview" />
              <Anchor icon={<Save />} label="Save" onClick={this.props.actions.setDecks.bind(this, this.props.box)} />
              <Anchor icon={<Clear />} label="Reset" onClick={this.props.resetBox} />
            </Menu>
          </Header>
          {workspace}
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
  actions: bindActionCreators(deckActions, dispatch),
  resetBox: () => dispatch({ type: TYPE.DECK_RESET_BOX }),
  addBox: (box, root) => dispatch({ type: TYPE.DECK_ADD_BOX, box: box, root: root }),
  deleteBox: (box, root) => dispatch({ type: TYPE.DECK_DEL_BOX, box: box, root: root }),
  setBox: (box) => dispatch({ type: TYPE.DECK_SET_BOX, box: box })
});

export default connect(mapStateToProps, mapDispatchProps)(Deck);
