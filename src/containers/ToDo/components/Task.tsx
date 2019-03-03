import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import IconFavorite from "@material-ui/icons/Favorite";
import IconUnFavorite from "@material-ui/icons/FavoriteBorder";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {TaskComponentProps} from '../types';
import {withStyles} from "@material-ui/core";
import {MouseEventHandler} from "react";
import {EventHandler} from "react";

const stylesContainer = {
    minHeight: "48px",
    marginBottom: "5px",
    '&:hover': {
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    },
};

const styles = {
    container: stylesContainer,
    containerSelected: {
        ...stylesContainer,
        backgroundColor: "#c6cfff",
    },
    text: {
        lineHeight: "48px",
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
            done: props.done,
            favorite: props.favorite,
        };
    }

    _handlerTextChange = (e: React.ChangeEvent) => {
        this.props.onTextChange(e, this.props.id);
        e.stopPropagation();
    };

    _handlerChange = (e: React.ChangeEvent) => {
        const newValue = !this.state.done;
        this.setState({
            done: newValue,
        }, () => {
            setTimeout(() => {
                if (newValue) {
                    this.props.onTaskDone(e, this.props.id)
                } else {
                    this.props.onTaskUnDone(e, this.props.id)
                }
            }, 200);
        });
        e.stopPropagation();
    };

    _handleClick = (e: React.MouseEvent): void => {
        this.props.onTaskClick(e, this.props.id);
        e.stopPropagation();
    };

    _handlerChangeFavorite = (e: React.MouseEvent) => {
        const newValue = !this.state.favorite;
        this.setState({
            favorite: newValue,
        }, () => {
            setTimeout(() => {
                if (newValue) {
                    this.props.onTaskFavorite(e, this.props.id)
                } else {
                    this.props.onTaskUnFavorite(e, this.props.id)
                }
            }, 200);
        });
        e.stopPropagation();
    };

    _handlerOnDoubleClick = (e: React.MouseEvent) => {
        this.props.onDoubleClick(e, this.props.id);
        e.stopPropagation();
    };

    _handlerOnKeyPress = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13 || e.key === 'Enter') {
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


    render() {
        const {text, classes, favorite, edit, selected} = this.props;
        const {done} = this.state;
        return <>
            <ClickAwayListener onClickAway={this._handlerOnClickAway}>
                <Grid container
                      className={selected?classes.containerSelected:classes.container}
                      component={Paper}
                      justify="flex-start"
                      wrap="nowrap"
                      onDoubleClick={this._handlerOnDoubleClick}
                      onClick={this._handleClick}
                >
                    <div>
                        <Checkbox onChange={this._handlerChange} checked={done}/>
                    </div>
                    <div className={classes.text}>
                        {edit ? <TextField onKeyPress={this._handlerOnKeyPress} onChange={this._handlerTextChange} value={text}/>
                            : text
                        }
                    </div>
                    <div className={classes.favorite}>
                        {favorite
                            ? <IconFavorite onClick={this._handlerChangeFavorite} />
                            : <IconUnFavorite onClick={this._handlerChangeFavorite} />
                        }
                    </div>
                </Grid>
            </ClickAwayListener>
        </>;
    }
}


export default withStyles(styles as any)(Task);
