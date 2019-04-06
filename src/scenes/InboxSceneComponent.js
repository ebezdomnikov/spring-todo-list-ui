import React from "react";
import { MainContainer } from "../containers/ToDo";
import logic from "../containers/ToDo/logic";
import { STATE_NAME, default as reducer } from "../containers/ToDo/reducers";
// import LogicRegistry from "../logic/logicRegistry";
// import reducerRegistry from "../reducers/reducerRegistry";
import withRegistry from "../store/withRegistry";

class InboxSceneComponent extends React.Component {
    render() {
        return <MainContainer />;
    }
}

export default withRegistry({
    logic,
    reducerName: STATE_NAME,
    reducer,
})(InboxSceneComponent);
