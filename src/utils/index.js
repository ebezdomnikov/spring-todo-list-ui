/**
 * Copyright (C) Hemmersbach GmbH & Co. KG - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created   : 11.01.2017
 * Author   : SDoellner <stefan.doellner@hemmersbach.com>
 */
export const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
};


/**
 * @param {String} type - action type
 * @param {...String} argNames - one or more names for additional action keys
 * @returns {function} a function that accepts action values for the keys
 */
export const makeActionCreator = (type, ...argNames) => (...args) => {
    let action = {type}; // action =  { type: type } e.g. { type: REFRESH_TICKET }
    argNames.forEach((argName, index) => {
        action[argName] = args[index]; // for each argName assign arg value from (...args) e.g. action['ticketId'] = id;
    });
    return action;
};