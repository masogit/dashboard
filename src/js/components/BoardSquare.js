/**
 * Created by huangling on 21/01/2017.
 */
import React, {Component} from 'react';
import update from 'react/lib/update';
import {ItemTypes} from '../constants';
import {DropTarget, DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Box from './Box';

const squareTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    component.moveBox(item.id, left, top);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}


class BoardSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: props.boxes
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newBox) {
      this.setState({boxes: this.state.boxes.concat(nextProps.newBox)});
    }
  }

  moveBox(id, left, top) {
    this.setState(update(this.state, {
      boxes: {
        [id]: {
          $merge: {
            left: left,
            top: top
          }
        }
      }
    }));
  }

  render() {
    const {hideSourceOnDrag, connectDropTarget} = this.props;
    const {boxes} = this.state;

    return connectDropTarget(
      <div className="board">
        {boxes.map((box, index) => {
          const {left, top, title} = box;
          return (
            <Box key={index}
                 id={index}
                 left={left}
                 top={top}
                 hideSourceOnDrag={hideSourceOnDrag}>
              {title}
            </Box>
          );
        })}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DropTarget(ItemTypes.Text, squareTarget, collect)(BoardSquare));

