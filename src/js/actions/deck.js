import { Cookies } from 'grommet';
import { TYPE, LOCAL } from '../constants';

const initBox = {
  key: 'initBox',
  props: {},
  child: null,
  component: null
};

export function getDecks() {
  let box = Cookies.get(LOCAL.DECK) ? JSON.parse(Cookies.get(LOCAL.DECK)) : initBox;
  return dispatch => {
    return dispatch({
      type: TYPE.DECK_SET_BOX,
      box
    });
  };
  // return dispatch => {
  //   Rest.default.get(URL.DATA_CONF_DECK).then((res) => {
  //     let box = res.body;
  //     return dispatch({
  //       type: TYPE.DECK_SET_BOX,
  //       box
  //     });
  //   });
  // };
}

export function setDecks(decks) {
  Cookies.set(LOCAL.DECK, JSON.stringify(decks));
  return dispatch => {
    return dispatch({
      type: TYPE.MSG_RECEIVE,
      msg: 'save!'
    });
  };
  // return dispatch => {
  //   Rest.default.post(URL.DATA_CONF_DECK, decks).then((res) => {
  //     let msg = res.body;
  //     console.log(msg);
  //     console.log(decks);
  //     return dispatch({
  //       type: TYPE.MSG_RECEIVE,
  //       msg
  //     });
  //   });
  // };
}
