import { CHANGE_QUERY, SET_RES, SET_ERROR, SET_EMPTY_RES } from '../actions/query';

const initialState = {
    query: '',
    error: '',
    response: {},
}

export default function query(state = initialState, action) {
  switch (action.type) {
    case CHANGE_QUERY:
      return Object.assign({}, state, { query: action.query });
    case SET_RES:
      return Object.assign({}, state, { response: action.response, error:''});
    case SET_ERROR:
      return Object.assign({}, state, { error: action.error });
    case SET_EMPTY_RES:
      return Object.assign({}, state, {response: action.response, error: action.error});
    default:
      return state;
  }
}
