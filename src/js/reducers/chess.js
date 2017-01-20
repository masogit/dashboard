/**
 * Created by huangling on 20/01/2017.
 */
import * as types from '../page/chess/constants';

const initialState = {
  position: [0, 0]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_POSITION:
      return {...state, ...{position: action.position}};
    default:
      return state;
  }
}
