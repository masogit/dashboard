import { createStore, combineReducers } from 'redux';
import header from './header';
import device from './device';

const types = {
  ACTIVE: 'module_active',
  LOGIN: 'app_login'
};

export { types }; // MUST put before reducers define

const reducers = combineReducers({
  header,
  device
});

export default createStore(reducers);
