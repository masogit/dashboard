import { TYPE } from '../constants';

const initialState = {
  msgs: []
};

const handlers = {
  [TYPE.MSG_RECEIVE]: (state, action) => {
    let msg = action.msg;
    state.msgs.push(msg);
    return { msgs: state.msgs };
  }
};

export default function (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return {...state, ...handler(state, action) };
};
