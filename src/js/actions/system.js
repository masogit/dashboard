import { TYPE } from '../constants';

export function toggleSidebar(dispatch) {
  return () => dispatch({
    type: TYPE.TOGGLE_SIDEBAR
  });
};

