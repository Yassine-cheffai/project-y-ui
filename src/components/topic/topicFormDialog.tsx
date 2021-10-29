import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TopicForm from "./topicForm";
import axios from "axios";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tracks, setTracks] = useState<string[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
    setTracks([]);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/add_topic/`,
        { title, description, tracks },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        setOpen(false);
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Topic
      </Button>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Topic</DialogTitle>
        <DialogContent>
          <TopicForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            tracks={tracks}
            setTracks={setTracks}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
