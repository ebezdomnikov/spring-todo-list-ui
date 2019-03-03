import React from 'react';
import TaskList from "../components/TaskList";
//
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
//
import {getEditId, getList, getSelectedId} from "../utils/getters";
import {TaskListContainerProps, TaskType} from "../types";
import {default as actions} from "../actions";
import TaskContainer from "./TaskContainer";

class UnDoneTaskListContainer extends React.Component<TaskListContainerProps> {

    componentDidMount(): void {
        this.props.actions.initTodoList();
    }

    render() {
        const {list} = this.props;
        const filteredList = Object.values(list).filter((task: TaskType) => !task.done);
        return <TaskList>
            {filteredList.map((task: TaskType): any => <TaskContainer id={task.id} />)}
        </TaskList>
    }
}

const mapStateToProps = (state: Object): Object => ({
    list: getList(state),
    selectedId: getSelectedId(state),
    editId: getEditId(state),
});

const mapDispatchToProps = (dispatch: any): Object => ({
    actions: bindActionCreators(actions as any, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnDoneTaskListContainer);