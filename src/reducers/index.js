import {combineReducers} from 'redux';

import {STATE_NAME as TODO_STATE_NAME, default as ToDoReducer}  from '../containers/ToDo/reducers';

const rootReducer = combineReducers({
    [TODO_STATE_NAME]: ToDoReducer,
});

export default rootReducer;