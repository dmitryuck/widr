import { ClientState, ClientRootState } from '../common/ClientStates';
import { Action } from '../../shared/Interfaces';


const initialState: ClientState = {
}

export function clientStateReducer(state: ClientState = initialState, action: Action) {
  return state;
}
