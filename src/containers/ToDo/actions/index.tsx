import {makeActionCreator} from "../../../utils";
import C from "../constants/todo.constants";
import {IToDoActions} from "../types";

const todoSetDone: Function = makeActionCreator(C.TODO_SET_DONE, "payload");
const todoSetUnDone: Function = makeActionCreator(C.TODO_SET_UN_DONE, "payload");

const todoSetFavorite: Function = makeActionCreator(C.TODO_SET_FAVORITE, "payload");
const todoSetUnFavorite: Function = makeActionCreator(C.TODO_SET_UN_FAVORITE, "payload");

const initTodoList: Function = makeActionCreator(C.TODO_INIT, "payload");

const todoSetItems: Function = makeActionCreator(C.TODO_SET_ITEMS, "payload");

const todoEditMode: Function = makeActionCreator(C.TODO_EDIT_MODE, "payload");
const todoViewMode: Function = makeActionCreator(C.TODO_VIEW_MODE, "payload");

const todoSelect: Function = makeActionCreator(C.TODO_SELECT, "payload");
const todoSetText: Function = makeActionCreator(C.TODO_SET_TEXT, "payload");
const todoSaveText: Function = makeActionCreator(C.TODO_SAVE_TEXT, "payload");

const actions: IToDoActions = {
    initTodoList,
    todoSetDone,
    todoSetUnDone,
    todoSetFavorite,
    todoSetUnFavorite,
    todoSetItems,
    todoEditMode,
    todoViewMode,
    todoSelect,
    todoSetText,
    todoSaveText
};

export default actions;
