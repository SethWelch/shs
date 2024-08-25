import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";

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
          }}
        >
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              fontSize: { xs: "1.25rem", sm: "1.8rem" },
              fontWeight: "bold",
              color: "navy",
              fontFamily: "Raleway",
            }}
          >
            {title}
          </Typography>
          <Box>
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
