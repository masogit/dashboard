import { createStore, combineReducers } from 'redux';
import chess from './chess';

const reducers = combineReducers({
  chess
});

export default createStore(reducers);
