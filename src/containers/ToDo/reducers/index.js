import {createReducer} from "../../../utils";
import * as Enum from "../constants/enum";
import C from "../constants/todo.constants";

export const STATE_NAME = 'todo';

const tasks = {
    "1": { id: "1", text: "I need to change thw wheel", done: false, favorite: false},
    "2": { id: "2", text: "Rent BWM for one day", done: false, favorite: false},
    "3": { id: "3", text: "Change hemmersbach to something better", done: false, favorite: false},
    "4": { id: "4", text: "Learn German!", done: false, favorite: false},
};

const initialState = {
    [Enum.STATE_ITEMS]: tasks,
    [Enum.STATE_SELECTED]: "", // can be one one at the time
    [Enum.STATE_EDIT]: "", // can be one one at the time
};

const setDone = (state, {payload: {id}}) => ({
    ...state,
    [Enum.STATE_ITEMS]: {
        ...state[Enum.STATE_ITEMS],
        [id]: {
            ...state[Enum.STATE_ITEMS][id],
            done: true,
        }
    }
});

const setUnDone = (state, {payload: {id}}) => ({
    ...state,
    [Enum.STATE_ITEMS]: {
        ...state[Enum.STATE_ITEMS],
        [id]: {
            ...state[Enum.STATE_ITEMS][id],
            done: false,
        }
    }
});

const setFavorite = (state, {payload: {id}}) => ({
    ...state,
    [Enum.STATE_ITEMS]: {
        ...state[Enum.STATE_ITEMS],
        [id]: {
            ...state[Enum.STATE_ITEMS][id],
            favorite: true,
        }
    }
});

const setUnFavorite = (state, {payload: {id}}) => ({
    ...state,
    [Enum.STATE_ITEMS]: {
        ...state[Enum.STATE_ITEMS],
        [id]: {
            ...state[Enum.STATE_ITEMS][id],
            favorite: false,
        }
    }
});

const setItems = (state, {payload: {items}}) => ({
    ...state,
    [Enum.STATE_ITEMS]: items,
});

const setSelect = (state, {payload: {id}}) => ({
    ...state,
    [Enum.STATE_SELECTED]: id,
});

const setEditMode = (state, {payload: {id}}) => ({
    ...state,
    [Enum.STATE_EDIT]: id,
});

const setViewMode = (state, {payload: {id}}) => ({
    ...state,
    [Enum.STATE_EDIT]: null,
});

const setText = (state, {payload: {id, text}}) => ({
    ...state,
    [Enum.STATE_ITEMS]: {
        ...state[Enum.STATE_ITEMS],
        [id]: {
            ...state[Enum.STATE_ITEMS][id],
            text: text,
        }
    }
});

const ToDoReducer = createReducer(initialState, {
    [C.TODO_SET_DONE]: setDone,
    [C.TODO_SET_UN_DONE]: setUnDone,
    [C.TODO_SET_FAVORITE]: setFavorite,
    [C.TODO_SET_UN_FAVORITE]: setUnFavorite,
    [C.TODO_SET_ITEMS]: setItems,
    [C.TODO_VIEW_MODE]: setViewMode,
    [C.TODO_EDIT_MODE]: setEditMode,
    [C.TODO_SELECT]: setSelect,
    [C.TODO_SET_TEXT]: setText,
});

export default ToDoReducer;