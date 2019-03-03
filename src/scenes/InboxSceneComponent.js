import React from 'react';
import { UnDoneTaskListContainer } from "../containers/ToDo";
import { DoneTaskListContainer } from "../containers/ToDo";

class InboxSceneComponent extends React.Component {
    render() {
        return <>
            <div>
                Not done list:
                <UnDoneTaskListContainer />
            </div>
            <div>
                done list:
                <DoneTaskListContainer />
            </div>
        </>
    }
}

export default InboxSceneComponent;
