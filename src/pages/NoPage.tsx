import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../theme";

function NoPage() {
  return (
    <Box
      sx={{
        flex: 1,
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        py: 10,
        bgcolor: colors.canvas,
      }}
    >
      <Typography variant="overline" component="p">
        Error 404
      </Typography>
      <Typography variant="h2" component="h1" sx={{ mt: 1 }}>
        Page not found
      </Typography>
      <Typography sx={{ mt: 2, maxWidth: 440 }}>
        The page you're looking for doesn't exist or has moved.
      </Typography>
      <Button component={RouterLink} to="/" variant="contained" size="large" sx={{ mt: 4 }}>
        Back to home
      </Button>
    </Box>
  );
}

export default NoPage;
