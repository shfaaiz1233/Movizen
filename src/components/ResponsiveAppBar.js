import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, useLocation } from "react-router-dom";

const settings = ["Profile", "Account", "Logout"];

const ResponsiveAppBar = ({isSignedIn, setIsSignedIn}) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#02383C", color: "green", marginBottom: "30px" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={require("../images/logo.png")}
              alt=""
              style={{ height: "60px", width: "160px", cursor: "pointer" }}
              onClick={() => {
                if(isSignedIn) navigate("/main")
                else navigate("/")
              }}
            />
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={require("../images/logo.png")}
              alt=""
              style={{ height: "60px", width: "160px" }}
              onClick={() => {
                if(isSignedIn) navigate("/main")
                else navigate("/")
              }}
            />
          </Typography>
          {isSignedIn && location.pathname!=="/login"  && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      if (setting === "Logout") {
                        navigate("/");
                        setIsSignedIn(false);
                      }
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          {!isSignedIn &&location.pathname!=="/login"&&location.pathname!=="/main"  && (
            <Button
              onClick={() => {
                navigate("/login");
              }}
              variant="contained"
              color="success"
              sx={{ backgroundColor: "#3ec70b", color: "whitesmoke" }}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
