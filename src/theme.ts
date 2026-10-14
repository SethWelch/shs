import { alpha, createTheme } from "@mui/material/styles";

// Shared with src/styles/site.css (the CSS custom properties there use the same values).
export const colors = {
  navy: "#0B1F3F",
  navyDeep: "#06142B",
  gold: "#C9A25A",
  goldDark: "#9C7A3A",
  goldLight: "#E2C58C",
  goldSoft: "#F6EFE1",
  ink: "#0F1B2D",
  body: "#46546A",
  muted: "#6E7B8F",
  line: "#E4E7EC",
  canvas: "#F6F7F9",
  white: "#FFFFFF",
};

export const serifFont = '"EB Garamond", Georgia, serif';
export const sansFont = '"Source Sans 3 Variable", "Source Sans 3", system-ui, -apple-system, "Segoe UI", sans-serif';

const theme = createTheme({
  palette: {
    primary: { main: colors.navy, dark: colors.navyDeep, contrastText: "#fff" },
    secondary: { main: colors.gold, dark: colors.goldDark, contrastText: colors.navyDeep },
    text: { primary: colors.ink, secondary: colors.body },
    background: { default: colors.white, paper: colors.white },
    divider: colors.line,
    error: { main: "#B42318" },
    success: { main: "#1E7F5C" },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: sansFont,
    h1: { fontFamily: serifFont, fontWeight: 700, lineHeight: 1.08, color: colors.ink },
    h2: {
      fontFamily: serifFont,
      fontWeight: 700,
      fontSize: "clamp(2rem, 1.4rem + 1.8vw, 3rem)",
      lineHeight: 1.1,
      color: colors.ink,
    },
    h3: { fontFamily: serifFont, fontWeight: 700 },
    h4: { fontFamily: serifFont, fontWeight: 700 },
    h5: { fontFamily: serifFont, fontWeight: 700 },
    overline: {
      fontWeight: 600,
      fontSize: "0.8rem",
      letterSpacing: "0.28em",
      lineHeight: 1.6,
      color: colors.gold,
    },
    body1: { fontSize: "1.0625rem", lineHeight: 1.7, color: colors.body },
    body2: { fontSize: "0.95rem", lineHeight: 1.65, color: colors.body },
    button: { fontWeight: 600, textTransform: "none", letterSpacing: 0 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: colors.white, WebkitFontSmoothing: "antialiased" },
        "::selection": { background: alpha(colors.gold, 0.25) },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 6, padding: "10px 20px", fontSize: "1rem" },
        sizeLarge: { padding: "13px 26px", fontSize: "1.05rem" },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: `linear-gradient(180deg, #17396B, ${colors.navy})`,
            "&:hover": { background: colors.navyDeep },
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: colors.white,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: colors.gold },
        },
        notchedOutline: { borderColor: colors.line },
      },
    },
    MuiInputLabel: {
      styleOverrides: { root: { "&.Mui-focused": { color: colors.goldDark } } },
    },
  },
});

export default theme;
