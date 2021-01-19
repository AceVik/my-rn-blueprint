import { getType, ActionType } from 'typesafe-actions';
import {
  authenticate,
  SessionAction
} from '../actions';
import { createLogic } from '../index';

import { Session } from '../../entities';

// AUTHENTICATE

export const authenticateLogic = createLogic<ActionType<typeof authenticate.request>, SessionAction>({
  type: getType(authenticate.request),
  process({ action, dispatch }, done) {

    const {
      username,
      password
    } = action.payload;

    // api call simulation
    (new Promise<Session>(function (resolve, reject) {
      resolve({
        uid: 1,
        username: username,
        roles: ['user'],
        api_token: password,
        api_token_expires: 10000
      });
    }))
      .then(data => dispatch(authenticate.success(data)))
      .catch(error => dispatch(authenticate.failure(error)))
      .finally(done);
  }
});

export const authenticateSuccessLogic = createLogic<ActionType<typeof authenticate.success>>({
  type: getType(authenticate.success),
  process({ action, navigator }, done) {
    navigator?.navigate('Home');
    // display success message for action.payload.username
    done();
  }
});

export const authenticateFailureLogic = createLogic({
  type: getType(authenticate.failure),
  process({ navigator }, done) {
    // navigator?.navigate('Login'); if required
    // display error message
    done();
  }
});