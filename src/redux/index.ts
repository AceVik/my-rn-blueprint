import { createStore, combineReducers, applyMiddleware, compose, AnyAction } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

/*const persistConfig = {
    key: 'root',
    storage,
    blacklist: [ 'i18n', 'router', 'notification' ]
};*/

const reducers = combineReducers({
  
});

// const persistedReducer = persistReducer(persistConfig, reducers);

export interface StateType {

}

const logics: any[] = [
  
];

const deps = {

};

export interface DenepndencyType<A = AnyAction> {

};

const logicMiddleware = createLogicMiddleware<StateType, typeof deps>(logics, deps);

const middleware = applyMiddleware(
  logicMiddleware
);

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(middleware);

export const store = createStore(reducers, enhancer);
// export const persistor = persistStore(store);