import { useState } from "react";
import VideoList from "./components/VideoList";
import AddVideo from "./components/AddVideo";
import BookmarkFilter from "./components/BookmarkFilter";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  header: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  content: {
    marginTop: theme.spacing(8),
  },
  appBar: {
    backgroundColor: "#3f51b5",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  appTitle: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [videos, setVideos] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  const toggleBookmark = (id) => {
    setVideos(
      videos.map((video) =>
        video.id === id ? { ...video, bookmarked: !video.bookmarked } : video
      )
    );
  };

  const filteredVideos = showBookmarks
    ? videos.filter((video) => video.bookmarked)
    : videos;

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.appTitle}>
            Video Library
          </Typography>
          <BookmarkFilter setShowBookmarks={setShowBookmarks} />
        </Toolbar>
      </AppBar>
      <Container className={classes.content}>
        <AddVideo addVideo={addVideo} />
        <VideoList videos={filteredVideos} toggleBookmark={toggleBookmark} />
      </Container>
    </div>
  );
}

export default App;
