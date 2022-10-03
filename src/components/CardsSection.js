import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Container } from "@mui/system";
import SwipeCards from "./SwipeCards";
import { movieCategories } from "../data/moviesCategory";
import {getFilteredArray} from "../utils/utils";

const CardsSection = (props) => {
  return (
    <Container fixed>
      {movieCategories.map((category, i) => (
        <div key={i}>
          <Divider
            textAlign="left"
            sx={{ bgcolor: "#02383C", margin: "20px 0px" }}
          >
            <Typography
              variant={window.innerWidth > 600 ? "h4" : "h5"}
              color="text.secondary"
              sx={{
                color: "#3ec70b",
                textAlign: "center",
                fontWeight: "bolder",
                fontFamily: "Libre Baskerville",
              }}
            >
              {category}
            </Typography>
          </Divider>
          <SwipeCards data={getFilteredArray(props.data,category)} />
        </div>
      ))}
    </Container>
  );
};

export default CardsSection;
