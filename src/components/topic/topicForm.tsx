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

interface Props {
  title: string;
  setTitle: any;
  description: string;
  setDescription: any;
  tracks: string[];
  setTracks: any;
}

export default function TopicForm(props: Props) {
  const classes = useStyles();

  const handleCheckBoxChange = (event: any, track: any) => {
    if (event.target.checked) {
      props.tracks.push(track);
      props.setTracks(props.tracks);
    } else {
      const index = props.tracks.indexOf(track);
      if (index > -1) {
        props.tracks.splice(index, 1);
      }
      props.setTracks(props.tracks);
    }
    console.log(props.tracks);
  };

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
                      value={props.title}
                      onChange={(event) => {
                        props.setTitle && props.setTitle(event.target.value);
                      }}
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
                      value={props.description}
                      onChange={(event) => {
                        props.setDescription &&
                          props.setDescription(event.target.value);
                      }}
                    />
                  </Grid>
                  <div>
                    <h3>Track on:</h3>
                    <Checkbox
                      color="primary"
                      onChange={(event) => {
                        handleCheckBoxChange(event, "twitter");
                      }}
                    />
                    Twitter
                    <br />
                    <Checkbox
                      color="primary"
                      onChange={(event) => {
                        handleCheckBoxChange(event, "reddit");
                      }}
                    />
                    Reddit
                    <br />
                    <Checkbox
                      color="primary"
                      onChange={(event) => {
                        handleCheckBoxChange(event, "quora");
                      }}
                    />
                    Quora
                    <br />
                    <Checkbox color="primary" disabled /> Facebook (coming soon)
                    <br />
                    <Checkbox color="primary" disabled /> Instagram (coming
                    soon)
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
