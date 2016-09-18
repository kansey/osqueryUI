import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import query from './query';

const rootReducer = combineReducers({
  query,
  routing
});

export default rootReducer;
