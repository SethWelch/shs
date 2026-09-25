import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { navLinks } from "../data/content";
import { colors } from "../theme";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: colors.navy,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 } }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, gap: 2 }}>
          <Box
            component={RouterLink}
            to="/"
            aria-label="Strategic Healthcare Solutions home"
            sx={{ display: "flex", alignItems: "center", mr: "auto", minWidth: 0 }}
          >
            <Box
              component="img"
              src={logo}
              alt="Strategic Healthcare Solutions"
              sx={{ height: { xs: 24, sm: 30 }, width: "auto", maxWidth: "100%", filter: "brightness(1.35)" }}
            />
          </Box>

          <Box component="nav" sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
            {navLinks.map((l) => (
              <Button
                key={l.hash}
                component={RouterLink}
                to={`/#${l.hash}`}
                sx={{
                  color: "rgba(255,255,255,0.82)",
                  px: 1.75,
                  "&:hover": { color: "#fff", bgcolor: "rgba(255,255,255,0.06)" },
                }}
              >
                {l.label}
              </Button>
            ))}
          </Box>

          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="secondary"
            sx={{ display: { xs: "none", sm: "inline-flex" }, ml: { md: 1 } }}
          >
            Contact us
          </Button>

          <IconButton
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { md: "none" }, color: "#fff" }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: 280, bgcolor: colors.navy, color: "#fff", p: 2 } } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((l) => (
            <ListItemButton
              key={l.hash}
              component={RouterLink}
              to={`/#${l.hash}`}
              onClick={() => setOpen(false)}
              sx={{ borderRadius: 2 }}
            >
              <ListItemText primary={l.label} slotProps={{ primary: { sx: { fontWeight: 600 } } }} />
            </ListItemButton>
          ))}
        </List>
        <Button
          component={RouterLink}
          to="/contact"
          onClick={() => setOpen(false)}
          variant="contained"
          color="secondary"
          fullWidth
          size="large"
          sx={{ mt: 2 }}
        >
          Contact us
        </Button>
      </Drawer>
    </AppBar>
  );
}
