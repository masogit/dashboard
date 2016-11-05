import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import header from './header';
import device from './device';

const reducers = combineReducers({
  header,
  device
});

export default createStore(reducers, applyMiddleware(thunkMiddleware));
