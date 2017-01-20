/**
 * Created by huangling on 20/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import Square from './Square';
import Knight from './Knight';
import * as types from './constants';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Board extends Component {
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;
    const piece = (x === knightX && y === knightY) ?
      <Knight /> :
      null;

    return (
      <div key={i}
           style={{
             width: '12.5%',
             height: '12.5%'
           }}
           onClick={() => this.handleSquareClick(x, y)}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  }

  handleSquareClick(x, y) {
    if (this.canMoveKnight(x, y)) {
      this.props.setPosition([x, y]);
    }
  }

  canMoveKnight(toX, toY) {
    const [x, y] = this.props.knightPosition;
    const dx = toX - x;
    const dy = toY - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2);
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};


let mapStateToProps = (state) => {
  return {
    knightPosition: state.chess.position
  };
};

let mapDispatchProps = (dispatch) => {
  return {
    setPosition: (position) => dispatch({type: types.SET_POSITION, position})
  };
};


export default
export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchProps)(Board));
