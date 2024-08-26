import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "./components/Button";

type Props = {
  title?: string;
};

export default function DrawerAppBar({ title = "" }: Props) {
  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{
            minHeight: "80px !important",
            height: "80px",
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 1, sm: 4 },
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "left",
                fontSize: { xs: "1rem", sm: "1.8rem" },
                fontWeight: "bold",
                color: "navy",
                fontFamily: "Raleway",
                cursor: "pointer",
              }}
            >
              {title}
            </Typography>
          </Link>

          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
