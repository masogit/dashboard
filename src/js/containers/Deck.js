import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box/*, Menu, CheckBox, Button, Icons*/ } from 'grommet';
// const { More, Close, Shift } = Icons.Base;
// import { TYPE } from '../constants';

class Deck extends Component {
  renderDeck() {

  }

  render() {
    let { deck } = this.props;
    return (
        <Box pad="medium">
            {this.renderDeck(deck)}
        </Box>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    deck: state.deck
  };
};

// let mapDispatchProps = (dispatch) => ({
//   addBox: (key) => dispatch({type: TYPE.DECK_ADD_BOX, key}),
//   setBox: (box) => dispatch({type: TYPE.DECK_SET_BOX, box}),
//   delBox: (key) => dispatch({type: TYPE.DECK_DEL_BOX, key}),
//   tglDir: (box, root) => {
//     if (box.direction == 'row')
//       box.direction = 'column';
//     else
//       box.direction = 'row';
//     return dispatch({type: TYPE.DECK_SET_BOX, box: root});
//   }
// });

export default connect(mapStateToProps
                    //  , mapDispatchProps
)(Deck);
