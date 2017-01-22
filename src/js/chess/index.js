/**
 * Created by huangling on 19/01/2017.
 */
import React, {Component} from 'react';
import Board from '../chess/Board';
import * as types from '../chess/constants';
import {connect} from 'react-redux';
import {observe} from '../chess/Game';

class Chess extends Component {
  componentWillMount() {
    this.unobserve = observe(this.props.setPosition.bind(this));
  }

  componentWillUnmount() {
    this.unobserve();
  }

  render() {
    const {position} = this.props;
    return (
      <Board knightPosition={position}/>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    position: state.chess.position
  };
};

let mapDispatchProps = (dispatch) => {
  return {
    setPosition: (position) => dispatch({type: types.SET_POSITION, position})
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Chess);

