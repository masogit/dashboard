import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import header from './header';
import device from './device';
import deck from './deck';
import system from './system';

const reducers = combineReducers({
  system,
  deck,
  header,
  device
});

export default createStore(reducers, applyMiddleware(thunkMiddleware));
