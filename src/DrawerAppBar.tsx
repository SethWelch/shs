import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

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
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "left",
                fontSize: { xs: "1.25rem", sm: "1.8rem" },
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
            <Button
              sx={{
                backgroundColor: "navy",
                border: "2px solid white",
                borderRadius: "4px",
                padding: "8px 16px",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Contact Us
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
