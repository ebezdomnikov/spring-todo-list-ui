import React from "react";
import UnDoneTaskListContainer from "../UnDoneTaskListContainer";
import DoneTaskListContainer from "../DoneTaskListContainer";
import connect from "./connect";
import { MainContainerProps, MainContainerState } from "../../types";
import NewTaskContainer from "../NewTaskContainer";

class InboxSceneComponent extends React.Component<
    MainContainerProps,
    MainContainerState
> {
    state = {
        hiddenDone: false,
    };

    componentDidMount(): void {
        this.props.actions.initTodoList();
    }

    _handleOnClickHide = () => {
        this.setState(({ hiddenDone }) => ({
            hiddenDone: !hiddenDone,
        }));
    };

    _renderHideLabel = () => {
        const { hasDoneItems } = this.props;
        const { hiddenDone } = this.state;
        return hasDoneItems ? (
            hiddenDone ? (
                <span onClick={this._handleOnClickHide}>(show)</span>
            ) : (
                <span onClick={this._handleOnClickHide}>(hide)</span>
            )
        ) : null;
    };

    render() {
        const { hasDoneItems, hasUnDoneItems } = this.props;
        const { hiddenDone } = this.state;
        return (
            <>
                <div>
                    <NewTaskContainer />
                </div>
                {hasUnDoneItems && (
                    <div>
                        Not done list:
                        <UnDoneTaskListContainer />
                    </div>
                )}
                {
                    <div>
                        {hasDoneItems ? (
                            <>
                                <div>done list {this._renderHideLabel()}</div>
                                {!hiddenDone && <DoneTaskListContainer />}
                            </>
                        ) : null}
                    </div>
                }
            </>
        );
    }
}

export default connect(InboxSceneComponent);
