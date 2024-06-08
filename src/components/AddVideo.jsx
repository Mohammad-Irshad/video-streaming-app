import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    backgroundColor: "#fff",
  },
  button: {
    marginTop: theme.spacing(2),
  },
  input: {
    display: "none",
  },
  fileName: {
    marginTop: theme.spacing(1),
    fontStyle: "italic",
  },
  error: {
    color: theme.palette.error.main,
    marginTop: theme.spacing(1),
  },
}));

function AddVideo({ addVideo }) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [fileName, setFileName] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(URL.createObjectURL(file));
      setFileName(file.name);
      setFileError(false);
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
      setThumbnailError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!title) {
      setTitleError(true);
      valid = false;
    }
    if (!file) {
      setFileError(true);
      valid = false;
    }
    if (!thumbnail) {
      setThumbnailError(true);
      valid = false;
    }
    if (valid) {
      const newVideo = {
        id: Date.now(),
        title,
        file,
        thumbnail,
        bookmarked: false,
      };
      addVideo(newVideo);
      setTitle("");
      setFile(null);
      setThumbnail(null);
      setFileName("");
      setTitleError(false);
      setFileError(false);
      setThumbnailError(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.value) {
      setTitleError(false);
    }
  };

  return (
    <Paper className={classes.form}>
      <Typography variant="h6" gutterBottom>
        Add New Video
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Video Title"
              value={title}
              onChange={handleTitleChange}
              variant="outlined"
              error={titleError}
              helperText={titleError ? "Video title is required" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className={classes.input}
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button variant="contained" color="primary" component="span">
                Upload Video
              </Button>
            </label>
            {fileName && (
              <Typography variant="body2" className={classes.fileName}>
                Selected file: {fileName}
              </Typography>
            )}
            {fileError && (
              <Typography variant="body2" className={classes.error}>
                Video file is required
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              className={classes.input}
              id="thumbnail-upload"
            />
            <label htmlFor="thumbnail-upload">
              <Button variant="contained" color="primary" component="span">
                Upload Thumbnail
              </Button>
            </label>
            {thumbnail && (
              <Typography variant="body2" className={classes.fileName}>
                Thumbnail uploaded
              </Typography>
            )}
            {thumbnailError && (
              <Typography variant="body2" className={classes.error}>
                Thumbnail image is required
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Add Video
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default AddVideo;
