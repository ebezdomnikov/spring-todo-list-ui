import React from "react";
import UnDoneTaskListContainer from "../UnDoneTaskListContainer";
import DoneTaskListContainer from "../DoneTaskListContainer";
import connect from "./connect";
import { MainContainerProps } from "../../types";

class InboxSceneComponent extends React.Component<MainContainerProps> {
    componentDidMount(): void {
        this.props.actions.initTodoList();
    }

    render() {
        const { hasDoneItems, hasUnDoneItems } = this.props;
        return (
            <>
                {hasUnDoneItems && (
                    <div>
                        Not done list:
                        <UnDoneTaskListContainer />
                    </div>
                )}
                {hasDoneItems && (
                    <div>
                        done list:
                        <DoneTaskListContainer />
                    </div>
                )}
            </>
        );
    }
}

export default connect(InboxSceneComponent);
