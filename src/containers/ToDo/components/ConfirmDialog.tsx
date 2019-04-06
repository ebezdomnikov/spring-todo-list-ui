import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

interface ConfirmDialogProps {
    title: string,
    content: string,
    onConfirm: any
    onReject: any,
    open: boolean,
}

class ConfirmDialog extends React.Component<ConfirmDialogProps>
{
    render() {
        const {title, content, onConfirm, onReject, open} = this.props;

        return <Dialog open={open}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{content}</DialogContent>
            <DialogActions>
                <Button onClick={onConfirm} color="primary">
                    Yes
                </Button>
                <Button onClick={onReject} color="primary" autoFocus>
                    No
                </Button>
            </DialogActions>
        </Dialog>
    }
}

export default ConfirmDialog;