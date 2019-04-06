import BaseService from "./BaseService";

interface ToDoServiceResponse {
    data: object;
    response: object;
}

class ToDoService extends BaseService<ToDoServiceResponse> {
    getAll() {
        return this._get("todos");
    }

    done(id: string) {
        return this._patch(`todos/done/${id}`, {});
    }

    undone(id: string) {
        return this._patch(`todos/undone/${id}`, {});
    }

    favorite(id: string) {
        return this._patch(`todos/favorite/${id}`, {});
    }

    unfavorite(id: string) {
        return this._patch(`todos/unfavorite/${id}`, {});
    }

    updateText(id: string, text: string) {
        return this._post(`todos/${id}`, { text: text });
    }

    delete(id: string) {
        return this._delete(`todos/${id}`);
    }
}

export default ToDoService;
