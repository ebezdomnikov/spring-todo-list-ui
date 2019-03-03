import BaseService from "./BaseService";

interface ToDoServiceResponse {
    data: object,
    response: object,
}

class ToDoService extends BaseService<ToDoServiceResponse> {
    getAll() {
        return this._get('http://localhost:8080/todos');
    }

    done(id: string) {
        return this._patch(`http://localhost:8080/todos/done/${id}`, {})
    }

    undone(id: string) {
        return this._patch(`http://localhost:8080/todos/undone/${id}`, {})
    }

    favorite(id: string) {
        return this._patch(`http://localhost:8080/todos/favorite/${id}`, {})
    }

    unfavorite(id: string) {
        return this._patch(`http://localhost:8080/todos/unfavorite/${id}`, {})
    }

    updateText(id: string, text: string) {
        return this._post(`http://localhost:8080/todos/${id}`, {text: text});
    }
}

export default ToDoService;
