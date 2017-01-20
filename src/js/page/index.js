/**
 * Created by huangling on 19/01/2017.
 */
import React, {Component} from 'react';
import Board from './chess/Board';

export default class Chess extends Component {
  // componentDidMount() {
  //   setInterval(() => this.props.setPosition([
  //     Math.floor(Math.random() * 8),
  //     Math.floor(Math.random() * 8)
  //   ]), 500);
  // }

  render() {
    return (
      <Board knightPosition={[0, 0]}/>
    );
  }
}

