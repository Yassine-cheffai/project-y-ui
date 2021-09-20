import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { IntroductionSlideShow } from "./Carousel";
import { Link } from "react-router-dom";

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
        <Link
          to="/signin"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          Sign In
        </Link>
      </Button>
      <Button variant="contained" color="default">
        <Link
          to="/signup"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          Sign Up
        </Link>
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
        <Link
          to="/dashboard"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          DashBoard
        </Link>
      </Button>
    </div>
  );
};

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#3f52b5", textAlign: "center" }}>
      <p style={{ color: "white", padding: "10px" }}>
        Contact: yacincheffai@gmail.com
      </p>
    </div>
  );
};
export default function LandingPage(props: Props) {
  const classes = useStyles();
  const [isLoggedIn] = useState(false);

  return (
    <div>
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
      <Contact />
    </div>
  );
}
