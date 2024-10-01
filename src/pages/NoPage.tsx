import { Box } from "@mui/material";

function NoPage() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 64px)",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>404</p>
      <p style={{ fontSize: 18, fontWeight: 600 }}>Page not found</p>
    </Box>
  );
}

export default NoPage;
