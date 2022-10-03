import ReactPlayer from "react-player";
import { useLocation,useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const VideoPlayer = () => {
  const location = useLocation();
  const navigate= useNavigate();
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <ReactPlayer
        width={window.innerWidth > 600 ? "80vw" : "100vw"}
        height={window.innerWidth > 600 ? "80vh" : "40vh"}
        controls
        url={location.state.source}
      />
      <Button
        variant="contained"
        color="success"
        sx={{
          backgroundColor: "#3ec70b",
          fontWeight: "bold",
          padding: "20px",
          margin: "20px 0px",
        }}
        onClick={()=>{navigate("/main")}}
      >
        <ArrowBackIcon />
        Back to the main page
      </Button>
    </Container>
  );
};

export default VideoPlayer;
