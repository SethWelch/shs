import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  body: string;
};

function ServiceBox({ title, body }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        backgroundColor: "#000080",
        color: "white",
        maxWidth: { xs: "100%", sm: "340px", md: "340px" },
        borderRadius: "8px",
      }}
    >
      <Typography
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          fontFamily: "Raleway",
          mb: 2,
          fontSize: "1.2rem",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ textAlign: "left", fontSize: "1rem" }}>
        {body}
      </Typography>
    </Box>
  );
}

export default ServiceBox;
