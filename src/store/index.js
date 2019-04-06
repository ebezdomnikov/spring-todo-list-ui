// import React from 'react'
import {
    applyMiddleware,
    compose,
    combineReducers,
    createStore
} from 'redux';
import {createLogicMiddleware} from 'redux-logic';
// import rootReducer from '../reducers'
import LogicRegistry from "../logic/logicRegistry";
import reducerRegistry from "../reducers/reducerRegistry";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logicMiddleware = createLogicMiddleware([]);

logicMiddleware.monitor$.subscribe(
    x => console.log(x)
);

LogicRegistry.setSubscribeListener((logic) => {
    const res = logicMiddleware.addLogic(logic);
    console.log("subscribe:", res)
});
LogicRegistry.setUnSubscribeListener((logic) => {
    const res = logicMiddleware.replaceLogic([]);
    console.log("unsubscribe:", res)
});

const store = createStore(combineReducers({}), composeEnhancers(
    applyMiddleware(logicMiddleware)
));

reducerRegistry.setChangeListener(__reducers => {
    store.replaceReducer(combineReducers(__reducers));
});

export default store;