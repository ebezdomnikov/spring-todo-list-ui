import React from "react";
import uuid from "uuid/v1";
import get from "lodash/get";

import TextField from "@material-ui/core/TextField";
import connect from "./connect";

import { IToDoActions, TaskType } from "../../types";

interface NewTaskContainerProps {
    actions: IToDoActions;
    value: string;
}

class NewTaskContainer extends React.Component<NewTaskContainerProps> {
    state = {
        value: "",
    };

    _handleOnChange = (event: React.ChangeEvent): void => {
        //const {actions} = this.props;
        //actions.
        this.setState({ value: get(event, "target.value", "") });
    };
    _handleKeyDown = (event: React.KeyboardEvent): void => {
        if (event.key !== "Enter") {
            return;
        }
        event.persist();
        const { value } = this.state;
        this.setState({ value: "" }, () => {
            const { actions } = this.props;
            actions.todoAdd({ value, id: uuid() });
        });
    };

    render(): any {
        // const { id, selected, edit, text, done, favorite } = this.props;
        const { value } = this.state;
        return (
            <TextField
                value={value}
                onChange={this._handleOnChange}
                onKeyDown={this._handleKeyDown}
                fullWidth
            />
        );
    }
}

export default connect(NewTaskContainer);
