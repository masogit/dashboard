import { TYPE } from '../constants';

const initialState = {
  id: getID(),
  name: 'Default Deck',
  props:{},
  children: []
};

function getID() {
  return (Math.random() + 1).toString(36).substring(7);
};


const handlers = {
  [TYPE.DECK_SPLIT]: (state, action) => {

  },
  [TYPE.DECK_UPDATE]: (state, action) => {

  },
  [TYPE.DECK_REMOVE]: (state, action) => {

  }
};

export default function (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return {...state, ...handler(state, action)};
};
