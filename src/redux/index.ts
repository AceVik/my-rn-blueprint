export * from './reducers/sessionReducer';
export * from './reducers/navigationReducer';

import { createStore, combineReducers, applyMiddleware, compose, AnyAction, Dispatch, Action } from 'redux';
import { createLogic as _createLogic, createLogicMiddleware } from 'redux-logic';
import { NavigationContainerRef } from '@react-navigation/native';
import { TypeConstant } from 'typesafe-actions';

import { ThemeState, themeReducer } from './reducers/themeReducer';
import { SessionState, sessionReducer } from './reducers/sessionReducer';
import { NavigationState, navigationReducer } from './reducers/navigationReducer';

/*const persistConfig = {
    key: 'root',
    storage,
    blacklist: [ 'i18n', 'router', 'notification' ]
};*/

const reducers = combineReducers({
  theme: themeReducer,
  session: sessionReducer,
  navigation: navigationReducer
});

// const persistedReducer = persistReducer(persistConfig, reducers);

export interface StateType {
  theme: ThemeState;
  session: SessionState;
  navigation: NavigationState;
}

const logics: any[] = [
  // createLogic wrapper auto adds logics
];

class DependencyInjectionDependencies {
  get navigator(): NavigationContainerRef | null {
    return store.getState().navigation.navigator;
  }

  // authorizedClient: axiosClient
  // unauthorizedClient: axiosClient
  // ...
}
interface DependencyInjectionDefaultTypes<A = AnyAction> {
  action: A;
  getState: () => StateType;

  // TODO: Some other default dependencies available
};

export type DependencyInjectionTypes<A = AnyAction> = DependencyInjectionDependencies & DependencyInjectionDefaultTypes<A>;
export type DI<A = AnyAction> = DependencyInjectionTypes<A>;

type Done = () => void;
export interface LogicOptions<TAction extends Action<any> = AnyAction, TDispatchAction extends Action<any> = AnyAction> {
  type: TypeConstant;
  cancelType?: TypeConstant;
  latest?: boolean;
  debounce?: number;
  throttle?: number;
  warnTimeout?: number;

  process: (deps: DI<TAction> & { dispatch: Dispatch<TDispatchAction> }, done: Done) => void;

  noAutoAdd?: boolean;
}

// EXAMPLE!
// createLogic wrapper to fix type-compatibility (TODO: not fully implemented)
export function createLogic<TAction extends Action<any> = AnyAction, TDispatchAction extends Action<any> = AnyAction>({
  type,
  cancelType,
  latest,
  debounce,
  throttle,
  warnTimeout,

  process,

  noAutoAdd = false
}: LogicOptions<TAction, TDispatchAction>) {
  const logic = _createLogic({
    type,
    cancelType,
    latest,
    debounce,
    throttle,
    warnTimeout,
    process: function (deps, dispatch, done) {
      return process({ ...deps, dispatch } as any, done);
    }
  });

  if (!noAutoAdd) {
    logics.push(logic);
  }
  
  return logic;
}

const deps = new DependencyInjectionDependencies();

const logicMiddleware = createLogicMiddleware<StateType, DependencyInjectionDependencies>(logics, deps);
const middleware = applyMiddleware(
  logicMiddleware
);

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(middleware);

export const store = createStore(reducers, enhancer);
// export const persistor = persistStore(store);