/**
 * Created by huangling on 20/01/2017.
 */
import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';

class Board extends Component {
  render() {
    const {boxes, newBox} = this.props;

    return (
      <div style={{
        width: '500px',
        height: '500px',
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px dashed #ccc'
      }}>
        <BoardSquare boxes={boxes} newBox={newBox}/>
      </div>
    );
  }
}


export default DragDropContext(HTML5Backend)(Board);
