import React from "react";
import { FormControlLabel, Checkbox, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  filter: {
    marginBottom: theme.spacing(2),
  },
}));

function BookmarkFilter({ setShowBookmarks }) {
  const classes = useStyles();

  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={(e) => setShowBookmarks(e.target.checked)}
          color="default"
        />
      }
      label="Show Bookmarked Videos Only"
      className={classes.filter}
    />
  );
}

export default BookmarkFilter;
