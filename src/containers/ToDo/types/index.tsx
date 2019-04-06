/**
 * Task interface
 */
export interface TaskType {
    id: string;
    text: string;
    done: boolean;
    favorite: boolean;
}

export const DefaultTaskType: TaskType = {
    id: "",
    text: "",
    done: false,
    favorite: false,
};

export interface TaskComponentProps extends TaskType {
    classes: any;
    edit: boolean;
    selected: boolean;
    onDeleteClick: Function;
    onSaveTextRequest: Function;
    onDoubleClick: Function;
    onTextChange: Function;
    onTaskClick: Function;
    onTaskDone: Function;
    onTaskFavorite: Function;
    onTaskUnDone: Function;
    onTaskUnFavorite: Function;
}

export interface TaskListComponentProps {}

export interface MainContainerProps {
    hasDoneItems: boolean;
    hasUnDoneItems: boolean;
    actions: IToDoActions;
}

export interface TaskListContainerProps extends TaskListComponentProps {
    list?: Array<TaskType>;
    actions?: IToDoActions;
}

export interface IToDoActions {
    initTodoList: Function;
    todoSetDone: Function;
    todoSetUnDone: Function;
    todoSetFavorite: Function;
    todoSetUnFavorite: Function;
    todoSetItems: Function;
    todoEditMode: Function;
    todoViewMode: Function;
    todoDelete: Function;
    todoSelect: Function;
    todoSetText: Function;
    todoSaveText: Function;
}
