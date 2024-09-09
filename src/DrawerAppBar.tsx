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
            minHeight: "60px !important",
            height: "60px",
            background: "linear-gradient(45deg, black, transparent)",
            display: "flex",
            justifyContent: "space-between",
            pl: { xs: 0, sm: 1 },
            pr: { xs: 1, sm: 4 },
          }}
        >
          <Link
            to="/"
            style={{ textDecoration: "none", display: "flex", marginRight: 4 }}
          >
            <img
              style={{
                width: "100%",
                maxWidth: 350,
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
