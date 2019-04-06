import React from 'react';
import isArray from "lodash/isArray";
import TaskList from "../components/TaskList";
//
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
//
import {getEditId, getSelectedId, getUnDoneList} from "../utils/getters";
import {TaskListContainerProps, TaskType} from "../types";
import {default as actions} from "../actions";
import TaskContainer from "./TaskContainer";

class UnDoneTaskListContainer extends React.Component<TaskListContainerProps> {

    static defaultProps = {
        list: [],
    };

    render() {
        const {list} = this.props;
        return <TaskList>
            {isArray(list) ? list.map((task: TaskType): any => <TaskContainer id={task.id} />) : null}
        </TaskList>
    }
}

const mapStateToProps = (state: Object): Object => ({
    list: getUnDoneList(state),
    selectedId: getSelectedId(state),
    editId: getEditId(state),
});

const mapDispatchToProps = (dispatch: any): Object => ({
    actions: bindActionCreators(actions as any, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnDoneTaskListContainer);