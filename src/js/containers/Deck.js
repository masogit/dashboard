import React, { Component } from 'react';
import { Box, Menu, Button, Icons } from 'grommet';
const { Trash, Shift, AddCircle } = Icons.Base;
import { BoxPropsMenu } from '../components';
import { remove } from 'lodash';

function getID() {
  return (Math.random() + 1).toString(36).substring(7);
};

export default class Deck extends Component {
  constructor() {
    super();
    this.state = {
      box: {
        key: getID(),
        props:{},
        child: null
      }
    };
    this.onUpdate.bind(this);
  }

  onUpdate(box, props) {
    props.flex = false;
    Object.assign(box.props, props);
    this.setState({ box: this.state.box });
  }

  addBox(box) {
    // clean parent
    // box.props.direction = direction;
    box.props.justify = null;
    box.props.align = null;

    if (!box.child)
      box.child = [{
        key: getID(),
        props:{},
        child: null
      }, {
        key: getID(),
        props:{},
        child: null
      }];
    else if (box.child instanceof Array)
      box.child.push({
        key: getID(),
        props:{},
        child: null
      });
    else {
      var child = box.child;
      box.child = [{
        key: getID(),
        props:{},
        child: child
      }, {
        key: getID(),
        props:{},
        child: null
      }];
    }

    this.setState({ box: this.state.box });
  }

  deleteBox(box) {
    if (box.child) {
      box.child = null;
    } else if (this.state.box.key != box.key) {
      this.removeFromRoot(box.key, this.state.box);
    }

    this.setState({ box: this.state.box });
  }

  removeFromRoot(key, box) {
    if (box.child && box.child instanceof Array) {
      let removed = remove(box.child, child => {
        return child.key == key;
      });

      if (box.child.length == 0)
        box.child = null;

      if (removed.length == 0)
        box.child.forEach(child => {
          this.removeFromRoot(key, child);
        });
    }
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

    return (
      <Box separator={!box.child ? 'all' : 'none'} flex={true} justify="center" align="center" {...box.props}>
        {/*!box.child && */this.buildMenu(box)}
        {child}
      </Box>
    );
  }

  buildMenu(box) {
    return (
      <Menu closeOnClick={false} direction="row" justify="between" colorIndex={box.child ? 'grey-4-a' : ''}
            inline={!box.props.direction || (box.props.direction == 'column') || !box.child} >
        <Box direction={box.direction == 'row' ? 'column' : 'row'}>
          <Button icon={<Shift className={(!box.props.direction || box.props.direction == 'column') ? 'icon_rotate90' : ''}/>}
                  onClick={this.toggleDirection.bind(this, box)}/>
          <Button icon={<AddCircle />} onClick={this.addBox.bind(this, box)}/>
          {
            !(box.child instanceof Array && box.child.length > 0) &&
            <Button icon={<Trash />} onClick={this.deleteBox.bind(this, box)}/>
          }
        </Box>
        <BoxPropsMenu onUpdate={(props) => this.onUpdate(box, props)} boxProps={box.props}/>
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

    this.setState({ box: this.state.box });
  }

  render() {
    let { box } = this.state;
    return (
        <Box flex={true}>
            {this.buildBox(box)}
        </Box>
    );
  }
}

