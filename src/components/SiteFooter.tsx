import { Box, Container, IconButton, Link, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { CONTACT_EMAIL, LINKEDIN_URL, navLinks } from "../data/content";
import { colors } from "../theme";

const linkSx = {
  color: "rgba(255,255,255,0.72)",
  textDecoration: "none",
  fontSize: "0.95rem",
  "&:hover": { color: "#fff" },
};

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: colors.navyDeep, color: "#fff", mt: "auto" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4 }, py: { xs: 6, md: 8 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 8 }}
          sx={{ justifyContent: "space-between" }}
        >
          <Box sx={{ maxWidth: 380 }}>
            <Box component="img" src={logo} alt="Strategic Healthcare Solutions" sx={{ height: 26, maxWidth: "100%", filter: "brightness(1.35)" }} />
            <Typography sx={{ mt: 2, color: "rgba(255,255,255,0.65)", fontSize: "0.95rem" }}>
              Regulatory and cybersecurity expertise for hospitals and health systems across the country.
            </Typography>
          </Box>

          <Stack direction="row" spacing={{ xs: 6, md: 10 }}>
            <Stack spacing={1.25}>
              <Typography sx={{ fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", color: "rgba(255,255,255,0.5)" }}>
                COMPANY
              </Typography>
              {navLinks.map((l) => (
                <Link key={l.hash} component={RouterLink} to={`/#${l.hash}`} sx={linkSx}>
                  {l.label}
                </Link>
              ))}
            </Stack>
            <Stack spacing={1.25}>
              <Typography sx={{ fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", color: "rgba(255,255,255,0.5)" }}>
                CONTACT
              </Typography>
              <Link component={RouterLink} to="/contact" sx={linkSx}>
                Send a message
              </Link>
              <Link href={`mailto:${CONTACT_EMAIL}`} sx={{ ...linkSx, display: "inline-flex", alignItems: "center", gap: 0.75 }}>
                <MailOutlineRoundedIcon fontSize="small" /> Email us
              </Link>
            </Stack>
          </Stack>
        </Stack>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem" }}>
            © {new Date().getFullYear()} Strategic Healthcare Solutions
          </Typography>
          <IconButton
            component="a"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Strategic Healthcare Solutions on LinkedIn"
            sx={{ color: "rgba(255,255,255,0.75)", "&:hover": { color: "#fff" } }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
