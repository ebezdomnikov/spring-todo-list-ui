import { createLogic } from "redux-logic";
import get from "lodash/get";
import C from "../constants/todo.constants";
import A from "../actions";
import ToDoService from "../services/ToDoService";
import { getList } from "../utils/getters";

const service = new ToDoService();

const getAllData = createLogic({
    type: C.TODO_INIT,
    process({ getState, action }, dispatch, done) {
        service
            .getAll()
            .then(response => {
                let data = {};
                response.data.data.forEach(e => {
                    data[e.id] = e;
                });
                dispatch(A.todoSetItems({ items: data }));
            })
            .then(done);
    },
});

const setDone = createLogic({
    type: C.TODO_SET_DONE,
    process({ getState, action }, dispatch, done) {
        service
            .done(action.payload.id)
            .then(response => {
                let data = {};
                response.data.data.forEach(e => {
                    data[e.id] = e;
                });

                dispatch(A.todoSetItems({ items: data }));
            })
            .then(done);
    },
});

const setUnDone = createLogic({
    type: C.TODO_SET_UN_DONE,
    process({ getState, action }, dispatch, done) {
        service
            .undone(action.payload.id)
            .then(response => {
                let data = {};
                response.data.data.forEach(e => {
                    data[e.id] = e;
                });

                dispatch(A.todoSetItems({ items: data }));
            })
            .then(done);
    },
});

const setFavorite = createLogic({
    type: C.TODO_SET_FAVORITE,
    process({ getState, action }, dispatch, done) {
        service
            .favorite(action.payload.id)
            .then(response => {
                let data = {};
                response.data.data.forEach(e => {
                    data[e.id] = e;
                });

                dispatch(A.todoSetItems({ items: data }));
            })
            .then(done);
    },
});
const setUnFavorite = createLogic({
    type: C.TODO_SET_UN_FAVORITE,
    process({ getState, action }, dispatch, done) {
        service
            .unfavorite(action.payload.id)
            .then(response => {
                let data = {};
                response.data.data.forEach(e => {
                    data[e.id] = e;
                });

                dispatch(A.todoSetItems({ items: data }));
            })
            .then(done);
    },
});

const updateTextLogic = createLogic({
    type: C.TODO_SAVE_TEXT,
    process({ getState, action }, dispatch, done) {
        const state = getState();
        const id = action.payload.id;
        const text = get(getList(state), [id, "text"], "");

        service
            .updateText(id, text)
            .then(response => {
                let data = {};
                response.data.data.forEach(e => {
                    data[e.id] = e;
                });
                dispatch(A.todoSetItems({ items: data }));
            })
            .then(done);
    },
});

const createNewLogic = createLogic({
    type: C.TODO_ADD,
    process({ getState, action }, dispatch, done) {
        const id = action.payload.id;
        const text = action.payload.value;
        service.create(id, text).then(done);
    },
});

const deleteTodoLogic = createLogic({
    type: C.TODO_DELETE,
    process({ getState, action }, dispatch, done) {
        const id = action.payload.id;
        service.delete(id).then(done);
    },
});

export default [
    createNewLogic,
    getAllData,
    setDone,
    setUnDone,
    setFavorite,
    setUnFavorite,
    updateTextLogic,
    deleteTodoLogic,
];
