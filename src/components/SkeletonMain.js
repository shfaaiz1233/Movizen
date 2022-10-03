import Skeleton from "@mui/material/Skeleton";
import { Container } from "@mui/system";
import { movieCategories } from "../data/moviesCategory";
import Stack from "@mui/material/Stack";
const SkeletonMain = () => {
  return (
    <Container fixed>
      {movieCategories.map((category, i) => (
        <div key={i}>
          <Skeleton animation="wave" height={70}/>
          <Stack direction="row" spacing = {10}>
          {[1, 2, 3, 4, 5].map((x, i) => (
              <Skeleton key={i} variant="rounded" width={150} height={250} />
          ))}
          </Stack>
        </div>
      ))}
    </Container>
  );
};

export default SkeletonMain;
