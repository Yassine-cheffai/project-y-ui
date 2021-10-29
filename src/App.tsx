import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

import Twitter from "./components/twitter/twitter";
import PlatformsNavigation from "./components/navigation/platforms";
import Grid from "@material-ui/core/Grid";
import TopicFormDialog from "./components/topic/topicFormDialog";
import DeleteTopicConfirmation from "./components/dialogs/deleteTopicConfirmation";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";

const gridStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

export default function App() {
  const classes = useStyles();
  const gridClasses = gridStyles();
  const [deletetopicDialogOpen, setdeletetopicDialogOpen] = useState(false);
  const [topicToDelete, settopicToDelete] = useState();
  const [topicToDeleteTitle, settopicToDeleteTitle] = useState();
  const [topics, setTopics] = useState([]);
  let history = useHistory();

  useEffect(() => {
    handleTopicsUpdate();
  }, [topics]);

  const handleTopicsUpdate = () => {
    let token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/get_topics/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response: any) {
        setTopics(response.data.topics);
      })
      .catch(function (error: any) {
        console.log(error);
        //setTopics([]);
      });
  };

  const handleClickdeletetopicDialogOpen = () => {
    setdeletetopicDialogOpen(true);
  };

  const handledeletetopicDialogClose = () => {
    setdeletetopicDialogOpen(false);
  };

  if (!localStorage.getItem("token")) {
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Topic 1
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div style={{ textAlign: "center", color: "#3F51B5" }}>
          <h1>
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Topic Tracker
            </Link>
          </h1>
        </div>
        <div className={classes.toolbar} />
        <List>
          {topics.map((topic: any, index) => (
            <ListItem button key={topic.topic_id}>
              <ListItemText primary={topic.topic_title} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    handleClickdeletetopicDialogOpen();
                    settopicToDelete(topic.topic_id);
                    settopicToDeleteTitle(topic.topic_title);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <DeleteTopicConfirmation
          open={deletetopicDialogOpen}
          handleClose={handledeletetopicDialogClose}
          topic={topicToDelete}
          topicTitle={topicToDeleteTitle}
          handleTopicsUpdate={handleTopicsUpdate}
        />
        <TopicFormDialog handleTopicsUpdate={handleTopicsUpdate} />

        <div
          style={{
            position: "fixed",
            bottom: 0,
            textAlign: "center",
            paddingBottom: 10,
            width: "inherit",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              localStorage.removeItem("token");
              history.push("/");
            }}
          >
            Logout
          </Button>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={gridClasses.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={gridClasses.paper}>
                <PlatformsNavigation />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={gridClasses.paper}>
                <Twitter />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}
