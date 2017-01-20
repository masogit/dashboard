import { createStore, combineReducers } from 'redux';
import header from './header';
import device from './device';
import chess from './chess';

const types = {
  ACTIVE: 'module_active',
  LOGIN: 'app_login'
};

export { types }; // MUST put before reducers define

const reducers = combineReducers({
  header,
  device,
  chess
});

export default createStore(reducers);
