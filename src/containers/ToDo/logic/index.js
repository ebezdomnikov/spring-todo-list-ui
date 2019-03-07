import {createLogic} from "redux-logic";
import get from 'lodash/get';
import C from '../constants/todo.constants';
import A from '../actions';
import ToDoService from "../services/ToDoService";
import {getList} from "../utils/getters";

const service = new ToDoService();

const getAllData = createLogic({
    type: C.TODO_INIT,
    process({getState, action}, dispatch, done) {
        service
            .getAll()
            .then(response => {
                let data = {};
                response.data.data.forEach(e => {
                   data[e.id] = e;
                });

                dispatch(A.todoSetItems({items: data}));
            })
            .finally(done);
    }
});


const setDone = createLogic({
    type: C.TODO_SET_DONE,
    process({getState, action}, dispatch, done) {
        service
            .done(action.payload.id)
            .then(response => {
                let data = {};
                response.data.data.forEach(e => {
                    data[e.id] = e;
                });

                dispatch(A.todoSetItems({items: data}));
            })
            .finally(done);
    }
});

const setUnDone = createLogic({
    type: C.TODO_SET_UN_DONE,
    process({getState, action}, dispatch, done) {
        service
            .undone(action.payload.id)
            .then(response => {
                let data = {};
                response.data.data.forEach(e => {
                    data[e.id] = e;
                });

                dispatch(A.todoSetItems({items: data}));
            })
            .finally(done);
    }
});

const setFavorite = createLogic({
    type: C.TODO_SET_FAVORITE,
    process({getState, action}, dispatch, done) {
        service
            .favorite(action.payload.id)
            .then(response => {
                let data = {};
                response.data.data.forEach(e => {
                    data[e.id] = e;
                });

                dispatch(A.todoSetItems({items: data}));
            })
            .finally(done);
    }
});
const setUnFavorite = createLogic({
    type: C.TODO_SET_UN_FAVORITE,
    process({getState, action}, dispatch, done) {
        service
            .unfavorite(action.payload.id)
            .then(response => {
                let data = {};
                response.data.data.forEach(e => {
                    data[e.id] = e;
                });

                dispatch(A.todoSetItems({items: data}));
            })
            .finally(done);
    }
});

const updateTextLogic = createLogic({
    type: C.TODO_SAVE_TEXT,
    process({getState, action}, dispatch, done) {
        const state = getState();
        const id = action.payload.id;
        const text = get(getList(state), [id, 'text'], '');

        service
            .updateText(id, text)
            .then(response => {
                let data = {};
                response.data.data.forEach(e => {
                    data[e.id] = e;
                });

                dispatch(A.todoSetItems({items: data}));
            })
            .finally(done);
    }
});
export default [
    getAllData,
    setDone,
    setUnDone,
    setFavorite,
    setUnFavorite,
    updateTextLogic,
]
