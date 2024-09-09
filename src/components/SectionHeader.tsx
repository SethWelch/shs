import { Typography, SxProps } from "@mui/material";

function SectionHeader({ title, sx }: { title: string; sx?: SxProps }) {
  return (
    <Typography
      sx={{
        textAlign: "center",
        fontWeight: "700",
        fontFamily: "Raleway",
        fontSize: "2rem",
        color: "navy",
        ...sx,
      }}
    >
      {title}
    </Typography>
  );
}

export default SectionHeader;
