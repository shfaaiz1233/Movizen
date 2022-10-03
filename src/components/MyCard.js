import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function MyCard(props) {
  let navigate = useNavigate();
  return (
    <Container fixed>
      <Card
        sx={{ width: "fit-content", height: "fit-content" }}
        onClick={() => {
          navigate("/player", {
            state: {
              source: props.source,
            },
          });
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height={window.innerWidth > 600 ? 300 : 150}
            width={"fit-content"}
            image={props.image}
            alt=""
          />
        </CardActionArea>
      </Card>
      <Typography
        gutterBottom
        variant={window.innerWidth > 600 ? "h5" : "h7"}
        component="div"
        sx={{
          textAlign: "center",
          display: "block",
          justifyContent: "center",
          color: "whitesmoke",
        }}
      >
        {props.title}
      </Typography>
    </Container>
  );
}
