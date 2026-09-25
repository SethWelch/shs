import { Box, Container, Typography, type SxProps, type Theme } from "@mui/material";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
  maxWidth?: "md" | "lg" | "xl";
};

export function Section({ id, children, sx, maxWidth = "lg" }: SectionProps) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 }, ...sx }}>
      <Container maxWidth={maxWidth} sx={{ px: { xs: 2.5, sm: 4 } }}>
        {children}
      </Container>
    </Box>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: 680,
        mx: align === "center" ? "auto" : 0,
        mb: { xs: 5, md: 7 },
      }}
    >
      <Typography variant="overline" component="p" sx={light ? { color: "#7FD6D3" } : undefined}>
        {eyebrow}
      </Typography>
      <Typography variant="h2" sx={{ mt: 1, ...(light && { color: "#fff" }) }}>
        {title}
      </Typography>
      {intro && (
        <Typography
          sx={{ mt: 2, fontSize: "1.125rem", ...(light && { color: "rgba(255,255,255,0.75)" }) }}
        >
          {intro}
        </Typography>
      )}
    </Box>
  );
}
