import { createStore, combineReducers } from 'redux';
import header from './header';

const types = {
  ACTIVE: 'module_active'
};

export { types }; // MUST put before reducers define

const reducers = combineReducers({
  header
});

export default createStore(reducers);
