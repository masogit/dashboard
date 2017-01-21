/**
 * Created by huangling on 21/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import {ItemTypes} from '../constants';
import {DragSource} from 'react-dnd';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

const source = {
  beginDrag(props) {
    const {id, left, top} = props;
    return {id, left, top};
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

class Box extends Component {

  render() {
    const {hideSourceOnDrag, left, top, connectDragSource, isDragging, children} = this.props;
    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    return connectDragSource(
      <div style={{...style, left, top}}>
        {children}
      </div>
    );
  }
}

Box.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.any.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  hideSourceOnDrag: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default DragSource(ItemTypes.Text, source, collect)(Box);

