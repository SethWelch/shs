import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  body: string;
  backgroundColor?: string;
  variant?: "light" | "medium" | "dark";
};

function ServiceCard({ title, body, variant = "dark" }: Props) {
  const getVariant = () => {
    if (variant === "light") {
      return {
        backgroundColor: "#2c6fa7",
        color: "white",
      };
    } else if (variant === "medium") {
      return {
        backgroundColor: "#07355b",
        color: "white",
      };
    } else {
      return {
        backgroundColor: "#041933",
        color: "white",
      };
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: { xs: "100%", sm: "300px", md: "300px" },
        borderRadius: 0,
        border: "1px solid",
        boxShadow: "5px 5px 5px grey",
        overflow: "hidden",
        p: 1,
        minHeight: 300,
        height: "100%",
        ...getVariant(),
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "Raleway",
          fontSize: "1.2rem",
          p: "16px 8px",
          minHeight: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ borderBottom: "1px solid white", mx: 2 }} />
      <Typography
        sx={{
          textAlign: "left",
          fontSize: "1rem",
          p: "16px 16px 0 16px",
        }}
      >
        {body}
      </Typography>
    </Box>
  );
}

export default ServiceCard;
