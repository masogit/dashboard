/**
 * Created by huangling on 20/01/2017.
 */
import * as types from '../chess/constants';

const initialState = {
  position: [1, 7]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_POSITION:
      return {...state, ...{position: action.position}};
    default:
      return state;
  }
}
