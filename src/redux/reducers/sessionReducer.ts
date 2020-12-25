import { getType } from 'typesafe-actions';
import { copyObject, getUnixTS } from '../../utils';
import {
  authenticate,
  renewApiToken,
  logout,
  SessionAction
} from '../actions';

export interface SessionState {
  uid?: number;
  username?: string;
  api_token?: string;
  roles?: string[];
  authenticated: boolean;
  loading: boolean;
  error?: any;
  api_token_expires?: number; // UNIX TS
  last_api_token_refresh?: number; // UNIX TS
  session_caching_ts?: number; // UNIX TS
}

export const INITIAL_SESSION_STATE: SessionState = {
  authenticated: false,
  loading: false
};

export const sessionReducer = (
  state: SessionState = copyObject(INITIAL_SESSION_STATE),
  action: SessionAction
): SessionState => {
  switch (action.type) {
      case getType(authenticate.request):
      case getType(renewApiToken.request):
          return { ...copyObject(INITIAL_SESSION_STATE), loading: true };

      case getType(authenticate.failure):
      case getType(renewApiToken.failure):
          return { ...state, loading: false, error: action.payload };

      case getType(authenticate.cancel):
      case getType(renewApiToken.cancel):
          return { ...state, loading: false };

      case getType(authenticate.success):
      case getType(renewApiToken.success):
        const newState = {
          ...action.payload,
          loading: false,
          authenticated: true,
          last_api_token_refresh: getUnixTS(),
          session_caching_ts: getUnixTS()
        };
        localStorage.setItem('session', JSON.stringify(newState));
        return newState;

      case getType(logout):
          return copyObject(INITIAL_SESSION_STATE);

      default:
          if (!state.session_caching_ts) {
              const cachedState = localStorage.getItem('session');

              if (cachedState) {
                  return JSON.parse(cachedState);
              }
          }

          return state;
  }
};