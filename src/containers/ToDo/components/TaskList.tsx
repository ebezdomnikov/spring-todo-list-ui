import React from 'react';
import {TaskListComponentProps} from "../types";

class TaskList extends React.Component<TaskListComponentProps> {
    render() {
        return <>
            {this.props.children}
        </>
        ;
    }
}

export default TaskList;
