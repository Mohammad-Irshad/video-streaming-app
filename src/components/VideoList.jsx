import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Typography,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(4),
  },
  media: {
    height: 140,
  },
}));

function VideoList({ videos, toggleBookmark }) {
  const classes = useStyles();
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Grid container spacing={4}>
      {videos.map((video) => (
        <Grid item xs={12} sm={6} md={4} key={video.id}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={video.thumbnail}
              title={video.title}
            />
            <CardContent>
              <Typography variant="h6">{video.title}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => setSelectedVideo(video)}
              >
                Play
              </Button>
              <Button
                size="small"
                color="secondary"
                onClick={() => toggleBookmark(video.id)}
              >
                {video.bookmarked ? "Unbookmark" : "Bookmark"}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      {selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </Grid>
  );
}

export default VideoList;
