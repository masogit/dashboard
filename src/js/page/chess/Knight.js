/**
 * Created by huangling on 20/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import {ItemTypes} from 'constants';

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

export default class Knight extends Component {

  render() {
    const {connectDragSource, isDragging} = this.props;
    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>♘</span>
    );
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);