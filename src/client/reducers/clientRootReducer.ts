import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import { clientStateReducer } from './clientStateReducer';

export const clientRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  clientState: clientStateReducer
});
