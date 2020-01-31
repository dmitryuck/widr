import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { clientRootReducer } from './reducers/clientRootReducer';

export const history = createBrowserHistory();

export default function configureStore(preloadedState: any) {
  const store = createStore(
    clientRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      ),
    ),
  );

  return store;
}