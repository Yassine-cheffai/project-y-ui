import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { SigningButtons } from "./LandingPage";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    textFieldRoot: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      textAlign: "center",
    },
  })
);

interface Props {}

export default function Signin(props: Props) {
  const classes = useStyles();

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
          <Grid container spacing={3}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Paper>
                <form
                  className={classes.textFieldRoot}
                  noValidate
                  autoComplete="off"
                >
                  <TextField id="standard-basic" label="e-mail" />
                  <TextField
                    id="standard-basic"
                    label="password"
                    type="password"
                    autoComplete="current-password"
                  />
                  <Button variant="contained" color="primary">
                    Sign In
                  </Button>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </main>
      </div>
    </div>
  );
}
