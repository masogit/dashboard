import { TYPE } from '../constants';
// import { remove } from 'lodash';
const initialState = {
  box: {
    key: getID(),
    direction: 'column',
    child: null
  }
};

function getID() {
  return (Math.random() + 1).toString(36).substring(7);
};

function findBox(key, box = initialState.box) {
  if (box.key == key)
    return box;
  else {
    if (box.child && box.child.key == key)
      return box.child;
    if (box.child && box.child instanceof Array) {
      box.child.forEach((child) => {
        findBox(child.key, child);
      });
    }
  }
}

// function rmParent(key, box) {
//   if (box.child && box.child instanceof Array) {
//     let removed = remove(box.child, child => {
//       return child.key == key;
//     });

//     if (box.child.length == 0)
//       box.child = null;

//     if (removed.length == 0)
//       box.child.forEach(child => {
//         rmParent(key, child);
//       });
//   }
// }

const handlers = {
  [TYPE.DECK_ADD_BOX]: (state, action) => {
    let root = {...state.box};
    let box = findBox(action.key, root);
    if (!box.child)
      box.child = [{
        key: getID(),
        direction: 'row',
        child: null
      }, {
        key: getID(),
        direction: 'row',
        child: null
      }];
    else if (box.child instanceof Array)
      box.child.push({
        key: getID(),
        direction: 'row',
        child: null
      });
    else {
      var child = box.child;
      box.child = [{
        key: getID(),
        direction: 'row',
        child: child
      }, {
        key: getID(),
        direction: 'row',
        child: null
      }];
    }
    return {box: root};
  },
  [TYPE.DECK_DEL_BOX]: (state, action) => {
    let root = {...state.box};
    // let box = findBox(action.key, root);
    // box = null;
    return {box: {...root}};
  },
  [TYPE.DECK_SET_BOX]: (state, action) => {
    // let box = Object.assign({}, action.box);
    return {box: {...action.box}};
  }
};

export default function (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return {...state, ...handler(state, action)};
};
