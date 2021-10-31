import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

export default function DeleteTopicConfirmation(props: any) {
  const handleTopicDelete = () => {
    let token = localStorage.getItem("token");
    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/delete_topic/${props.topic}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(function (response: any) {
        props.handleTopicsUpdate();
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`Are you sure you want to delete this topic (${props.topicTitle})?`}
      </DialogTitle>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleTopicDelete();
            props.handleClose();
          }}
          color="primary"
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
