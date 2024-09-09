import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "./components/Button";
import logo from "./assets/images/logo.png";

export default function DrawerAppBar() {
  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{
            minHeight: "80px !important",
            height: "80px",
            background: "linear-gradient(45deg, black, transparent)",
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 1, sm: 4 },
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              style={{
                width: "100%",
                maxWidth: 400,
              }}
              src={`${logo}`}
              alt="logo"
            />
          </Link>

          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
