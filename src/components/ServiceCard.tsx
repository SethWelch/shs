import { Box, Typography } from "@mui/material";
import { colors } from "../theme";
import type { Service } from "../data/content";

function ServiceCard({ title, tag, body, icon: Icon }: Service) {
  return (
    <Box
      component="article"
      sx={{
        height: "100%",
        p: { xs: 3, md: 3.5 },
        borderRadius: 4,
        border: `1px solid ${colors.line}`,
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        transition: "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          borderColor: "transparent",
          boxShadow: "0 18px 40px -18px rgba(11,37,69,0.28)",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 3,
            display: "grid",
            placeItems: "center",
            bgcolor: colors.tealSoft,
            color: colors.tealDark,
          }}
        >
          <Icon />
        </Box>
        <Typography
          component="span"
          sx={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: colors.muted,
            border: `1px solid ${colors.line}`,
            borderRadius: 99,
            px: 1.25,
            py: 0.25,
          }}
        >
          {tag}
        </Typography>
      </Box>
      <Typography variant="h3" component="h3">
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {body}
      </Typography>
    </Box>
  );
}

export default ServiceCard;
