import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import header from './header';
import device from './device';
import menu from './menu';

const types = {
  ACTIVE: 'module_active',
  LOGIN: 'app_login'
};

export { types }; // MUST put before reducers define

const reducers = combineReducers({
  header,
  device,
  menu
});

export default createStore(reducers, applyMiddleware(thunkMiddleware));
