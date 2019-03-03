// import React from 'react'
import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';

import {createLogicMiddleware} from 'redux-logic';

import rootReducer from '../reducers'
import logic from '../logic';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logicMiddleware = createLogicMiddleware(logic);

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(logicMiddleware)
));

export default store;