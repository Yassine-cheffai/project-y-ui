import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    paper: {
      marginTop: theme.spacing(0),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(0),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(0),
    },
    checkboxes: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space - between",
    },
  })
);

interface Props {}

export default function Signup(props: Props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <main className={classes.content}>
          <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="title"
                      label="Topic Title"
                      name="title"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="description"
                      label="Short Description"
                      id="description"
                    />
                  </Grid>
                  <div>
                    <h3>Track on:</h3>
                    <Checkbox color="primary" /> Twitter
                    <br />
                    <Checkbox color="primary" /> Reddit
                    <br />
                    <Checkbox color="primary" /> Quora
                  </div>
                </Grid>
              </form>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
}
