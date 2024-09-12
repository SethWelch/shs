import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
  onClick?: () => void;
  sx?: object;
  children: React.ReactNode;
};

function Button({ onClick, sx, children }: ButtonProps) {
  return (
    <MuiButton
      sx={{
        backgroundColor: "#07075d",
        border: "1px solid white",
        borderRadius: 0,
        padding: "6px 12px",
        color: "white",
        fontWeight: { xs: 500, sm: 600 },
        fontSize: { xs: ".75rem", sm: "1rem" },
        height: "fit-content",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 128, 0.8)",
          color: "white",
        },
        whiteSpace: "nowrap",
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
