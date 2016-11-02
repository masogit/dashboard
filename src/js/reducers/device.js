import { TYPE } from '../constants';

const initialState = {
  records: [],
  types: []
};

const handlers = {
  [TYPE.LOAD_ALL_DEVICES]: (state, action) => ({records: action.devices}),
  [TYPE.INIT_DEVICE_TYPE]: (state, action) => ({types: action.deviceTypes})
};

export default function (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return {...state, ...handler(state, action)};
};
