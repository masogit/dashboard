import React, { Component } from 'react';
import { Box, Menu, Button, Icons } from 'grommet';
const { More, Close, Shift } = Icons.Base;
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
  }

  addBox(box, root, direction) {
    // clean parent
    box.props.direction = direction;
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

    this.setState({
      box: root
    });
  }

  deleteBox(box, root) {
    if (box.child) {
      box.child = null;
    } else if (root.key != box.key) {
      this.removeFromRoot(box.key, root, root);
    }
    // For render root
    this.setState({
      box: root
    });
  }

  removeFromRoot(key, box, root) {
    if (box.child && box.child instanceof Array) {
      let removed = remove(box.child, child => {
        return child.key == key;
      });

      if (box.child.length == 0)
        box.child = null;

      if (removed.length == 0)
        box.child.forEach(child => {
          this.removeFromRoot(key, child, root);
        });
    }
  }

  buildBox(box, root) {
    let child;
    if (box.child && box.child instanceof Array) {
      box.props.separator = "none";
      child = (
        <Box {...box.props} flex={true}>
          { box.child.map((child) => this.buildBox(child, root))}
        </Box>
      );
    }

    return (
      <Box separator="all" flex={true} justify="center" align="center" {...box.props}>
        {!box.child && this.buildMenu(box, root)}
        {child}
      </Box>
    );
  }

  buildMenu(box, root) {
    return (
      <Menu icon={<More />} closeOnClick={false} inline={true} direction="row" justify="between">
        <Box direction="row">
          <Button icon={<Shift className="icon_rotate90"/>} onClick={this.addBox.bind(this, box, root, 'column')}/>
          <Button icon={<Shift />} onClick={this.addBox.bind(this, box, root, 'row')}/>
          {
            !(box.child instanceof Array && box.child.length > 0) &&
            <Button icon={<Close />} onClick={this.deleteBox.bind(this, box, root)}/>
          }
        </Box>
        <BoxPropsMenu />
      </Menu>
    );
  }

  render() {
    let { box } = this.state;
    return (
        <Box flex={true}>
            {this.buildBox(box, box)}
        </Box>
    );
  }
}

