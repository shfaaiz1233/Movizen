import { Button, Container, Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

const EmailSection = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: "120px",
        color: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        flexFlow: "column",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h3" align="center">
          Unlimited movies, TV shows, and more.
        </Typography>
        <Typography variant="h4" align="center" sx={{ marginTop: "10px" }}>
          Watch anywhere. Cancel anytime.
        </Typography>
        <br />
        <Typography variant="h6" align="center">
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Container fixed>
          <Container
            maxWidth="sm"
            sx={{
              display: "block",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <input
              type="email"
              style={{
                margin: "5px",
                minWidth: "250px",
                height: "35px",
                borderRadius: "5px",
                backgroundColor: "whitesmoke",
                color: "grey",
                textAlign: "center",
              }}
            />
            <Button
              variant="contained"
              color="success"
              sx={{ backgroundColor: "#3ec70b", fontWeight: "bold" }}
            >
              {"Get Started >"}
            </Button>
          </Container>
        </Container>
      </ThemeProvider>
    </Container>
  );
};

export default EmailSection;
