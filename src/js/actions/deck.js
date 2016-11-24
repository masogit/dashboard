import { Rest } from 'grommet';
import { TYPE, URL } from '../constants';

export function getDecks() {
  return dispatch => {
    Rest.default.get(URL.DATA_CONF_DECK).then((res) => {
      let box = res.body;
      return dispatch({
        type: TYPE.DECK_SET_BOX,
        box
      });
    });
  }
}

export function setDecks(decks) {
  return dispatch => {
    Rest.default.post(URL.DATA_CONF_DECK, decks).then((res) => {
      let msg = res.body;
      console.log(msg);
      console.log(decks);
      return dispatch({
        type: TYPE.MSG_RECEIVE,
        msg
      });
    });
  };
}