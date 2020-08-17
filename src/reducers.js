import { combineReducers } from 'redux';

export default (injectedReducers = {}) =>
  combineReducers({
    stub: () => {},
    ...injectedReducers,
  });
