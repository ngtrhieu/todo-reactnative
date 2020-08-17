import { createStore, applyMiddleware, compose } from 'redux';
import sagaMiddleware from './sagaMiddleware';
import createReducer from './reducers';

const configureStore = (initialState = {}) => {
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }
  }

  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
};

export default configureStore;
