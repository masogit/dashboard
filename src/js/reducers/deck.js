import { TYPE } from '../constants';
import { remove } from 'lodash';

const initBox = {
  key: getID(),
  props: {},
  child: null,
  component: null
};

const initialState = {
  all: [],
  box: initBox
};

function getID() {
  return (Math.random() + 1).toString(36).substring(7);
};

function removeFromRoot(key, box) {
  if (box.child && box.child instanceof Array) {
    let removed = remove(box.child, child => {
      return child.key == key;
    });

    if (box.child.length == 0) {
      box.child = null;
      box.props.justify = 'center';
      box.props.align = 'center';
    }

    if (removed.length == 0)
      box.child.forEach(child => {
        removeFromRoot(key, child);
      });
  }
}

const handlers = {
  [TYPE.DECK_SET_ALL]: (state, action) => {
    let decks = action.decks;
    return { all: decks };
  },
  [TYPE.DECK_ADD_BOX]: (state, action) => {
    let box = action.box;
    box.props.justify = null;
    box.props.align = null;

    if (!box.child)
      box.child = [{
        key: getID(),
        props: {},
        child: null
      }, {
        key: getID(),
        props: {},
        child: null
      }];
    else if (box.child instanceof Array)
      box.child.push({
        key: getID(),
        props: {},
        child: null
      });
    else {
      var child = box.child;
      box.child = [{
        key: getID(),
        props: {},
        child: child
      }, {
        key: getID(),
        props: {},
        child: null
      }];
    }
    return { box: {...action.root } };
  },
  [TYPE.DECK_DEL_BOX]: (state, action) => {
    let box = action.box;
    if (box.component) {
      box.component = null;
    } else if (action.root.key != box.key) {
      removeFromRoot(box.key, action.root);
    }
    return { box: {...action.root } };
  },
  [TYPE.DECK_SET_BOX]: (state, action) => {
    // let box = Object.assign({}, action.box);
    return { box: {...action.box } };
  },
  [TYPE.DECK_RESET_BOX]: (state, action) => {
    return { box: initBox };
  }
};

export default function (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return {...state, ...handler(state, action) };
};
