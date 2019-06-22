import omit from "lodash/omit";
import { createReducer } from "../../../utils";
import * as Enum from "../constants/enum";
import C from "../constants/todo.constants";
import { DefaultTaskType } from "../types";

export const STATE_NAME = "todo";

const tasks = {};

const initialState = {
    [Enum.STATE_ITEMS]: tasks,
    [Enum.STATE_SELECTED]: "", // can be one one at the time
    [Enum.STATE_EDIT]: "", // can be one one at the time
};

const setDone = (state, { payload: { id } }) => ({
    ...state,
    [Enum.STATE_ITEMS]: {
        ...state[Enum.STATE_ITEMS],
        [id]: {
            ...state[Enum.STATE_ITEMS][id],
            done: true,
        },
    },
});

const setUnDone = (state, { payload: { id } }) => ({
    ...state,
    [Enum.STATE_ITEMS]: {
        ...state[Enum.STATE_ITEMS],
        [id]: {
            ...state[Enum.STATE_ITEMS][id],
            done: false,
        },
    },
});

const setFavorite = (state, { payload: { id } }) => ({
    ...state,
    [Enum.STATE_ITEMS]: {
        ...state[Enum.STATE_ITEMS],
        [id]: {
            ...state[Enum.STATE_ITEMS][id],
            favorite: true,
        },
    },
});

const setUnFavorite = (state, { payload: { id } }) => ({
    ...state,
    [Enum.STATE_ITEMS]: {
        ...state[Enum.STATE_ITEMS],
        [id]: {
            ...state[Enum.STATE_ITEMS][id],
            favorite: false,
        },
    },
});

const setItems = (state, { payload: { items } }) => ({
    ...state,
    [Enum.STATE_ITEMS]: items,
});

const setSelect = (state, { payload: { id } }) => ({
    ...state,
    [Enum.STATE_SELECTED]: id,
});

const setEditMode = (state, { payload: { id } }) => ({
    ...state,
    [Enum.STATE_EDIT]: id,
});

const setViewMode = (state, { payload: { id } }) => ({
    ...state,
    [Enum.STATE_EDIT]: null,
});

const setText = (state, { payload: { id, text } }) => ({
    ...state,
    [Enum.STATE_ITEMS]: {
        ...state[Enum.STATE_ITEMS],
        [id]: {
            ...state[Enum.STATE_ITEMS][id],
            text: text,
        },
    },
});

const todoDelete = (state, { payload: { id } }) => ({
    ...state,
    [Enum.STATE_ITEMS]: omit(state[Enum.STATE_ITEMS], id),
});

const addTodo = (state, { payload: { id, value } }) => {
    return {
        ...state,
        [Enum.STATE_ITEMS]: {
            ...state[Enum.STATE_ITEMS],
            [id]: {
                ...DefaultTaskType,
                id,
                text: value,
            },
        },
    };
};

const ToDoReducer = createReducer(initialState, {
    [C.TODO_ADD]: addTodo,
    [C.TODO_SET_DONE]: setDone,
    [C.TODO_SET_UN_DONE]: setUnDone,
    [C.TODO_SET_FAVORITE]: setFavorite,
    [C.TODO_SET_UN_FAVORITE]: setUnFavorite,
    [C.TODO_SET_ITEMS]: setItems,
    [C.TODO_VIEW_MODE]: setViewMode,
    [C.TODO_EDIT_MODE]: setEditMode,
    [C.TODO_SELECT]: setSelect,
    [C.TODO_SET_TEXT]: setText,
    [C.TODO_DELETE]: todoDelete,
});

export default ToDoReducer;
