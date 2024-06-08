import Modal from "react-modal";
import { Button, Typography, Box } from "@material-ui/core";

Modal.setAppElement("#root");

function VideoPlayer({ video, onClose }) {
  return (
    <Modal
      isOpen
      onRequestClose={onClose}
      style={{
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          position: "relative",
          inset: "auto",
          padding: "20px",
          paddingTop: "40px",
          width: "50rem",
          height: "40rem",
        },
      }}
    >
      <Typography variant="h4" gutterBottom>
        {video.title}
      </Typography>
      <video width="100%" controls>
        <source src={video.file} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box mt={2}>
        <Button variant="contained" color="secondary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default VideoPlayer;
