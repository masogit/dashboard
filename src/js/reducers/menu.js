// import { types } from './index';
const menu = require('../../../conf/menu.json');
const initialState = menu;

export default function (state = initialState, action) {
  switch (action.type) {
      // case types.LOGIN:
      //     return { ...state, ...{ user: { name: action.login } } };
    default:
      return state;
  }
}
