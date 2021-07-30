import { createStore, compose, applyMiddleware } from 'redux';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import { enableBatching } from 'redux-batched-actions';



export const history = createHistory();
const router = routerMiddleware(history);

const middleware = [thunk, router];

const enhancers = compose(
  applyMiddleware(...middleware),
  (window.devToolsExtension && process.env.NODE_ENV !== 'production') ?
    window.devToolsExtension() : f => f
);


export default function configureStore(initialState = {}) {
  const store = createStore(enableBatching(rootReducer), initialState, enhancers);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line
    );
  }

  return store;
}