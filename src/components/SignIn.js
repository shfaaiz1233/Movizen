import { Button, Box, Container, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from "@mui/material";
const SignIn = ({ isSignedIn, setIsSignedIn }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const eVal = "movie_zen34",
    ePass = "hahahehe";
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: "60px",
        marginBottom: "20px",
        width: "fit-content",
        height: "80vh",
        borderRadius: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <Box
        sx={{
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingBottom: "100px",
          paddingTop: "100px",
          display: "flex",
          height: "fit-content",
          width: "fit-content",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          align="left"
          color="#3ec70b"
          noWrap={true}
          fontWeight="700"
          marginBottom="20px"
        >
          Sign In
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            sx={{
              backgroundColor: "rgb(255,255,255,0.2)",
              borderRadius: "5px",
              marginTop: "20px",
            }}
            id="email"
            label="Email Address"
            variant="filled"
            color="success"
            fullWidth
            value={emailValue}
            onChange={(event) => {
              setEmailValue(event.target.value);
            }}
          />
          <TextField
            sx={{
              backgroundColor: "rgb(255,255,255,0.2)",
              borderRadius: "5px",
              marginTop: "20px",
            }}
            id="outlined-password-input"
            variant="filled"
            label="Password"
            type="password"
            color="success"
            fullWidth
            autoComplete="current-password"
            value={passwordValue}
            onChange={(event) => {
              setPasswordValue(event.target.value);
            }}
          />
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{
              backgroundColor: "#3ec70b",
              fontWeight: "bold",
              marginTop: "20px",
              borderRadius: "5px",
            }}
            onClick={() => {
              setIsClicked(true);
              if (emailValue === eVal && passwordValue === ePass) {
                setIsSignedIn(true);
                setTimeout(()=>{navigate("/main")},1500)
              }
            }}
          >
            Sign In
          </Button>
        </form>
        {isClicked && isSignedIn && (
          <Alert severity="success" sx={{ marginTop: "20px" }}>
            <AlertTitle>Logged In</AlertTitle>
            You are logged in successfully — <strong>check it out!</strong>
          </Alert>
        )}
        {isClicked && !isSignedIn && (
          <Alert severity="error" sx={{ marginTop: "20px" }}>
            <AlertTitle>Incorrect Credentials</AlertTitle>
            Forgot your password ? — <strong>Recover it!</strong>
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default SignIn;
