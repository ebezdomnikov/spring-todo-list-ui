import { connect } from "react-redux";
import get from "lodash/get";
import { getEditId, getSelectedId, getTask } from "../../utils/getters";
import { bindActionCreators } from "redux";
import { default as actions } from "../../actions";
import { TaskType } from "../../types";

const mapStateToProps = (state: Object, ownProps: any): Object => {
    const task: TaskType = getTask(state, ownProps.id);
    return {
        text: get(task, "text", ""),
        done: get(task, "done", ""),
        favorite: get(task, "favorite", ""),
        selected: getSelectedId(state) === ownProps.id,
        edit: getEditId(state) === ownProps.id,
    };
};

const mapDispatchToProps = (dispatch: any): Object => ({
    actions: bindActionCreators(actions as any, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
);
