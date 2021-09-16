import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { IntroductionSlideShow } from "./Carousel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface Props {}

const SigningButtons = (props: any) => {
  return (
    <div
      className={props.styling}
      style={{
        marginLeft: "auto",
        marginRight: 0,
      }}
    >
      <Button variant="contained" color="default">
        Sign In
      </Button>
      <Button variant="contained" color="default">
        Sign Up
      </Button>
    </div>
  );
};

const DashboardButton = (props: any) => {
  return (
    <div
      className={props.styling}
      style={{
        marginLeft: "auto",
        marginRight: 0,
      }}
    >
      <Button variant="contained" color="default">
        DashBoard
      </Button>
    </div>
  );
};
export default function LandingPage(props: Props) {
  const classes = useStyles();
  const [isLoggedIn, setisLoggedIn] = useState(true);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Topic Tracker
          </Typography>
          {isLoggedIn ? (
            <DashboardButton styling={classes.root} />
          ) : (
            <SigningButtons styling={classes.root} />
          )}
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <IntroductionSlideShow />
      </main>
    </div>
  );
}
