import * as React from "react";
import classNames from "classnames";
import isFunction from "lodash/isFunction";

import { withStyles } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import IconFavorite from "@material-ui/icons/Favorite";
import IconUnFavorite from "@material-ui/icons/FavoriteBorder";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ConfirmDialog from "./ConfirmDialog";

import { TaskComponentProps } from "../types";

const stylesContainer = {
    minHeight: "48px",
    marginBottom: "5px",
    "&:hover": {
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    },
};

const styles = {
    focused: {
        backgroundColor: "#EDE7E7",
    },
    container: stylesContainer,
    containerSelected: {
        ...stylesContainer,
        backgroundColor: "#c6cfff",
    },
    text: {
        lineHeight: "48px",
    },
    doneText: {
        textDecoration: "line-through",
    },
    favorite: {
        cursor: "pointer",
        position: "absolute",
        right: "35px",
        lineHeight: "60px",
    },
};

class Task extends React.Component<TaskComponentProps, any> {
    constructor(props: TaskComponentProps) {
        super(props);
        this.state = {
            confirmDialogOpen: false,
            done: props.done,
            favorite: props.favorite,
            menuE1: null,
            clientX: 0,
            clientY: 0,
            focused: false,
        };
    }

    _handlerTextChange = (e: React.ChangeEvent) => {
        this.props.onTextChange(e, this.props.id);
        e.stopPropagation();
    };

    _handlerChange = (e: React.ChangeEvent) => {
        const newValue = !this.state.done;
        e.persist();
        this.setState(
            {
                done: newValue,
            },
            () => {
                setTimeout(() => {
                    if (newValue) {
                        this.props.onTaskDone(e, this.props.id);
                    } else {
                        this.props.onTaskUnDone(e, this.props.id);
                    }
                }, 200);
            }
        );
        e.stopPropagation();
    };

    _handleClick = (e: React.MouseEvent): void => {
        this.props.onTaskClick(e, this.props.id);
        e.stopPropagation();
    };

    _handleMouseEnter = () => {
        this.setState({
            focused: true,
        });
    };

    _handleMouseLeave = () => {
        this.setState({
            focused: false,
        });
    };

    _handlerChangeFavorite = (e: React.MouseEvent) => {
        const newValue = !this.state.favorite;
        this.setState(
            {
                favorite: newValue,
            },
            () => {
                setTimeout(() => {
                    if (newValue) {
                        this.props.onTaskFavorite(e, this.props.id);
                    } else {
                        this.props.onTaskUnFavorite(e, this.props.id);
                    }
                }, 200);
            }
        );
        e.stopPropagation();
    };

    _handlerOnDoubleClick = (e: React.MouseEvent) => {
        this.props.onDoubleClick(e, this.props.id);
        e.stopPropagation();
    };

    _handlerOnKeyPress = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13 || e.key === "Enter") {
            this.props.onSaveTextRequest(e, this.props.id);
        }
        e.stopPropagation();
    };

    _handlerOnClickAway = (e: any): void => {
        if (this.props.edit) {
            this.props.onSaveTextRequest(e, this.props.id);
        }
        e.stopPropagation();
    };

    _handleMouseUp = (event: React.MouseEvent) => {
        if (event.button === 2) {
            this.setState({
                menuE1: event.currentTarget,
                clientX: event.clientX,
                clientY: event.clientY,
            });
        }
        event.stopPropagation();
    };

    _handleClose = () => {
        this.setState({
            menuE1: null,
            clientX: null,
            clientY: null,
        });
    };

    _handleDeleteClick = (event: React.MouseEvent) => {
        event.persist();
        this.setState({
            menuE1: null,
            clientX: null,
            clientY: null,
            confirmDialogOpen: true,
        });

        event.stopPropagation();
    };

    _handleConfirmDelete = (event: React.MouseEvent) => {
        const { id, onDeleteClick } = this.props;
        this.setState(
            {
                confirmDialogOpen: false,
            },
            () => {
                isFunction(onDeleteClick) && onDeleteClick(event, id);
            }
        );
    };

    _handleRejectDelete = (event: React.MouseEvent) => {
        this.setState({
            confirmDialogOpen: false,
        });
    };

    render() {
        const { text, classes, favorite, edit, selected } = this.props;
        const {
            done,
            menuE1,
            clientX,
            clientY,
            confirmDialogOpen,
            focused,
        } = this.state;
        const className = classNames(
            selected ? classes.containerSelected : classes.container,
            focused ? classes.focused : ""
        );

        return (
            <>
                <ClickAwayListener onClickAway={this._handlerOnClickAway}>
                    <Grid
                        container
                        className={className}
                        component={Paper}
                        justify="flex-start"
                        wrap="nowrap"
                        onMouseEnter={this._handleMouseEnter}
                        onMouseLeave={this._handleMouseLeave}
                        onMouseUp={this._handleMouseUp}
                        onContextMenu={e => {
                            e.preventDefault();
                        }}
                        onDoubleClick={this._handlerOnDoubleClick}
                        onClick={this._handleClick}
                    >
                        <div onMouseUp={this._handleMouseUp}>
                            <Checkbox
                                onChange={this._handlerChange}
                                checked={done}
                            />
                        </div>
                        <div
                            onMouseUp={this._handleMouseUp}
                            className={classNames(
                                classes.text,
                                done ? classes.doneText : ""
                            )}
                        >
                            {edit ? (
                                <TextField
                                    onKeyPress={this._handlerOnKeyPress}
                                    onChange={this._handlerTextChange}
                                    value={text}
                                />
                            ) : (
                                text
                            )}
                        </div>
                        <div
                            onMouseUp={this._handleMouseUp}
                            className={classes.favorite}
                        >
                            {favorite ? (
                                <IconFavorite
                                    onClick={this._handlerChangeFavorite}
                                />
                            ) : (
                                <IconUnFavorite
                                    onClick={this._handlerChangeFavorite}
                                />
                            )}
                        </div>
                    </Grid>
                </ClickAwayListener>
                <ConfirmDialog
                    open={confirmDialogOpen}
                    title={"Confirmation"}
                    content={"Do you want to remove it?"}
                    onConfirm={this._handleConfirmDelete}
                    onReject={this._handleRejectDelete}
                />
                <Menu
                    onClose={this._handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{
                        left: clientX,
                        top: clientY,
                    }}
                    open={Boolean(menuE1)}
                >
                    <MenuItem onClick={this._handleDeleteClick}>
                        Delete
                    </MenuItem>
                </Menu>
            </>
        );
    }
}

export default withStyles(styles as any)(Task);
