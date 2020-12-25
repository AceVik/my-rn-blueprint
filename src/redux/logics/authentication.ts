import { createLogic } from 'redux-logic';
import { getType } from 'typesafe-actions';
import {
  authenticate,
  renewApiToken,
  logout
} from '../actions';
import { DenepndencyType } from '../index';

// AUTHENTICATE

const authenticateLogic = createLogic({
  type: getType(authenticate.request),
  process({ action, api }: DenepndencyType, dispatch: Function, done: Function) {
      api.authenticate(action.payload.username, action.payload.password).then((response: any) => {
          const session: Session = response.data;
          dispatch(authenticate.success(session));
      }).catch((e: any) => {
          dispatch(authenticate.failure(e));
      }).finally(() => done());
  }
});

const authenticationSuccessLogic = createLogic({
  type: getType(authenticate.success),
  process({ notificationSystem, action, i18n, redirectTo }: DenepndencyType) {

      redirectTo('/');

      notificationSystem.addNotification({
          message: i18n.t('login_success', [ action.payload.username ]),
          level: 'success'
      });
  }
});

const authenticationFailureLogic = createLogic({
  type: getType(authenticate.failure),
  process({ notificationSystem, i18n }: DenepndencyType) {
      notificationSystem.addNotification({
          message: i18n.t('login_failed'),
          level: 'error'
      });
  }
});

// RENEW API TOKEN

const renewApiTokenLogic = createLogic({
  type: getType(renewApiToken.request),
  process({ api, getState }: DenepndencyType, dispatch: Function, done: Function) {
      const apiToken = getState().session.api_token;

      if(!apiToken) {
          dispatch(logout());
          return;
      }

      api.renewApiToken(apiToken).then((response: any) => {
          const session: Session = response.data;
          dispatch(renewApiToken.success(session));
      }).catch((e: any) => {
          dispatch(renewApiToken.failure(e));
      }).finally(() => done());
  }
});

const renewApiTokenFailureLogic = createLogic({
  type: getType(renewApiToken.failure),
  process({ notificationSystem, i18n }: DenepndencyType, dispatch, done) {
      notificationSystem.addNotification({
          message: i18n.t('session_expired'),
          level: 'error'
      });

      dispatch(logout());

      done();
  }
});

// LOGOUT

const logoutLogic = createLogic({
  type: getType(logout),
  process({ redirectTo }: DenepndencyType) {
      redirectTo('/login');
  }
});

export const sessionLogics = [
  authenticateLogic,
  authenticationSuccessLogic,
  authenticationFailureLogic,

  renewApiTokenLogic,
  renewApiTokenFailureLogic,

  logoutLogic
];