import { ActionType, createAsyncAction, createAction } from 'typesafe-actions';
import { Session, UserCredentials } from '../../entities';

export const authenticate = createAsyncAction(
  '@@AUTH/REQUEST', 
  '@@AUTH/REQUEST_SUCCESS', 
  '@@AUTH/REQUEST_FAILURE', 
  '@@AUTH/REQUEST_CANCEL'
)<UserCredentials, Session, { error: any; }>();

export const renewApiToken = createAsyncAction(
  '@@API_TOKEN_AUTH/REQUEST', 
  '@@API_TOKEN_AUTH/REQUEST_SUCCESS', 
  '@@API_TOKEN_AUTH/REQUEST_FAILURE', 
  '@@API_TOKEN_AUTH/REQUEST_CANCEL'
)<undefined, Session, { error: any; }, undefined>();

export const logout = createAction('@@AUTH/RESET')<undefined>();

export type SessionAction = ActionType<
    typeof authenticate |
    typeof renewApiToken |
    typeof logout
>;