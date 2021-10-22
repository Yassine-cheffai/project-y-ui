import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { SigningButtons } from "./LandingPage";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import axios from "axios";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
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

export default function Signin(props: Props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayMessageError, setdisplayMessageError] = useState(false);
  let history = useHistory();

  const submit = () => {
    console.log(email);
    console.log(password);
    console.log(process.env.REACT_APP_BACKEND_URL);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/signin/`,
        { email, password },
        { headers: { Authorization: "Bearer token123" } }
      )
      .then((response) => {
        console.log(response);
        history.push("/dashboard");
      })
      .catch((error) => {
        //show error
        console.log(error);
        setdisplayMessageError(true);
      });
  };

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Topic Tracker
              </Link>
            </Typography>
            <SigningButtons styling={classes.root} />
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}></Avatar>
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  //type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={submit}
                >
                  Sign In
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link
                      to="/signup"
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      Don't have an account yet? Sign up
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            {displayMessageError ? (
              <Alert severity="warning">Login Error</Alert>
            ) : (
              ""
            )}
          </Container>
        </main>
      </div>
    </div>
  );
}
