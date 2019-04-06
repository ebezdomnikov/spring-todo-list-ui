import React from "react";
import get from "lodash/get";

import Task from "../../components/Task";
import connect from "./connect";

import { IToDoActions, TaskType } from "../../types";

interface TaskContainerProps extends TaskType {
    actions: IToDoActions;
    selected: boolean;
    edit: boolean;
}

class TaskContainer extends React.Component<TaskContainerProps> {
    _handleOnTextChange = (e: KeyboardEvent, taskId: string) => {
        const { actions } = this.props;
        actions.todoSetText({ id: taskId, text: get(e, "target.value", "") });
        e.stopPropagation();
    };

    _handleOnTaskClick = (e: MouseEvent) => {
        //
    };

    _handleOnTaskUnDone = (e: MouseEvent, taskId: string) => {
        const { actions } = this.props;
        actions.todoSetUnDone({ id: taskId });
        e.stopPropagation();
    };

    _handleOnTaskDone = (e: MouseEvent, taskId: string) => {
        const { actions } = this.props;
        actions.todoSetDone({ id: taskId });
        e.stopPropagation();
    };

    _handleOnTaskFavorite = (e: MouseEvent, taskId: string) => {
        const { actions } = this.props;
        actions.todoSetFavorite({ id: taskId });
        e.stopPropagation();
    };

    _handleOnTaskUnFavorite = (e: MouseEvent, taskId: string) => {
        const { actions } = this.props;
        actions.todoSetUnFavorite({ id: taskId });
        e.stopPropagation();
    };

    _handleOnDoubleClick = (e: MouseEvent, taskId: string) => {
        const { actions } = this.props;
        actions.todoEditMode({ id: taskId });
        e.stopPropagation();
    };

    _handleOnSaveTextRequest = (
        e: MouseEvent,
        taskId: string,
        text: string
    ) => {
        const { actions, id } = this.props;
        if (taskId === id) {
            actions.todoSaveText({ id: taskId, text });
            actions.todoViewMode({ id: taskId });
        }

        e.stopPropagation();
    };

    _handleOnTaskDelete = (e: MouseEvent, taskId: string) => {
        const { actions, id } = this.props;
        if (taskId === id) {
            actions.todoDelete({ id: taskId });
        }
    };

    render(): any {
        const { id, selected, edit, text, done, favorite } = this.props;

        return (
            <Task
                key={id}
                selected={selected}
                edit={edit}
                onDeleteClick={this._handleOnTaskDelete}
                onSaveTextRequest={this._handleOnSaveTextRequest}
                onDoubleClick={this._handleOnDoubleClick}
                onTextChange={this._handleOnTextChange}
                onTaskClick={this._handleOnTaskClick}
                onTaskDone={this._handleOnTaskDone}
                onTaskUnDone={this._handleOnTaskUnDone}
                onTaskFavorite={this._handleOnTaskFavorite}
                onTaskUnFavorite={this._handleOnTaskUnFavorite}
                id={id}
                text={text}
                done={done}
                favorite={favorite}
            />
        );
    }
}

export default connect(TaskContainer);
