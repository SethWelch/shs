import { alpha, createTheme } from "@mui/material/styles";

export const colors = {
  navy: "#0B2545",
  navyDeep: "#071A33",
  blue: "#13497B",
  teal: "#0E9594",
  tealDark: "#0B7A79",
  tealSoft: "#E3F4F3",
  ink: "#0F1B2D",
  body: "#44546A",
  muted: "#6B7A90",
  line: "#E3E8EF",
  canvas: "#F5F8FB",
  white: "#FFFFFF",
};

const headingFont = '"Plus Jakarta Sans Variable", "Inter Variable", system-ui, sans-serif';
const bodyFont = '"Inter Variable", system-ui, -apple-system, "Segoe UI", sans-serif';

const theme = createTheme({
  palette: {
    primary: { main: colors.navy, dark: colors.navyDeep, contrastText: "#fff" },
    secondary: { main: colors.teal, dark: colors.tealDark, contrastText: "#fff" },
    text: { primary: colors.ink, secondary: colors.body },
    background: { default: colors.white, paper: colors.white },
    divider: colors.line,
    error: { main: "#B42318" },
    success: { main: colors.tealDark },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: bodyFont,
    h1: {
      fontFamily: headingFont,
      fontWeight: 800,
      fontSize: "clamp(2.25rem, 1.4rem + 3.2vw, 3.75rem)",
      lineHeight: 1.08,
      letterSpacing: "-0.025em",
      color: colors.ink,
    },
    h2: {
      fontFamily: headingFont,
      fontWeight: 800,
      fontSize: "clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)",
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      color: colors.ink,
    },
    h3: {
      fontFamily: headingFont,
      fontWeight: 700,
      fontSize: "1.2rem",
      lineHeight: 1.35,
      letterSpacing: "-0.01em",
      color: colors.ink,
    },
    h4: { fontFamily: headingFont, fontWeight: 700 },
    h5: { fontFamily: headingFont, fontWeight: 700 },
    overline: {
      fontFamily: bodyFont,
      fontWeight: 600,
      fontSize: "0.8rem",
      letterSpacing: "0.12em",
      lineHeight: 1.6,
      color: colors.tealDark,
    },
    body1: { fontSize: "1.0625rem", lineHeight: 1.7, color: colors.body },
    body2: { fontSize: "0.95rem", lineHeight: 1.65, color: colors.body },
    button: { fontWeight: 600, textTransform: "none", letterSpacing: 0 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        body: { backgroundColor: colors.white, WebkitFontSmoothing: "antialiased" },
        "[id]": { scrollMarginTop: "88px" },
        "::selection": { background: alpha(colors.teal, 0.2) },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
          "*": { transition: "none !important", animation: "none !important" },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 10, padding: "10px 20px", fontSize: "0.975rem" },
        sizeLarge: { padding: "13px 26px", fontSize: "1.025rem" },
        outlined: { borderWidth: 1.5, "&:hover": { borderWidth: 1.5 } },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: colors.white,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: colors.teal },
        },
        notchedOutline: { borderColor: colors.line },
      },
    },
    MuiInputLabel: {
      styleOverrides: { root: { "&.Mui-focused": { color: colors.tealDark } } },
    },
  },
});

export default theme;
