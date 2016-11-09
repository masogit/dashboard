import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import header from './header';
import device from './device';
import deck from './deck';

const reducers = combineReducers({
  deck,
  header,
  device
});

export default createStore(reducers, applyMiddleware(thunkMiddleware));
