import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';
// import storage from 'localforage';

import { environment } from './configs/config';

import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

  const env = environment.indexOf('#') > -1 ? 'development' : environment;

  const logger = createLogger();

  // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware)
  ];

  // Enable logger only when rendering on client and during development.
  if(env === 'development') {
    enhancers.push(composeEnhancer(applyMiddleware(logger)));
  }


  let store = createStore(
              rootReducer,
              undefined,
              compose(...enhancers),
          );
          sagaMiddleware.run(rootSaga);

  return { store }

}
