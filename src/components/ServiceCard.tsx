import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  body: string;
};

function ServiceCard({ title, body }: Props) {
  const backgroundColor = "#000080";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: { xs: "100%", sm: "340px", md: "340px" },
        borderRadius: 2,
        border: "1px solid",
        boxShadow: 2,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundColor: backgroundColor,
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            fontWeight: "bold",
            fontFamily: "Raleway",
            fontSize: "1.2rem",
            p: 2,
            color: "white",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            textAlign: "left",
            fontSize: "1rem",
            background: "white",
            p: 2,
          }}
        >
          {body}
        </Typography>
      </Box>
    </Box>
  );
}

export default ServiceCard;
