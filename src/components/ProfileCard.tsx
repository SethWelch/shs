import { Avatar, Box, Typography } from "@mui/material";
import { colors } from "../theme";
import type { TeamMember } from "../data/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

function ProfileCard({ name, title, credentials, image }: TeamMember) {
  return (
    <Box
      sx={{
        height: "100%",
        textAlign: "center",
        p: { xs: 2, sm: 3.5 },
        borderRadius: 4,
        bgcolor: "#fff",
        border: `1px solid ${colors.line}`,
      }}
    >
      <Avatar
        src={image}
        alt={name}
        sx={{
          width: { xs: 96, sm: 136 },
          height: { xs: 96, sm: 136 },
          mx: "auto",
          mb: 2.5,
          bgcolor: colors.tealSoft,
          color: colors.tealDark,
          fontSize: 40,
          fontWeight: 700,
          boxShadow: `0 0 0 6px #fff, 0 0 0 7px ${colors.line}`,
        }}
      >
        {initials(name)}
      </Avatar>
      <Typography variant="h3" component="h3">
        {name}
      </Typography>
      {credentials && (
        <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, color: colors.tealDark, mt: 0.5, letterSpacing: "0.04em" }}>
          {credentials}
        </Typography>
      )}
      <Typography variant="body2" sx={{ mt: 0.5, color: colors.muted }}>
        {title}
      </Typography>
    </Box>
  );
}

export default ProfileCard;
