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
        backgroundColor: "navy",
        border: "2px solid white",
        borderRadius: "4px",
        padding: "8px 16px",
        color: "white",
        fontWeight: { xs: 500, sm: "bold" },
        fontSize: { xs: ".75rem", sm: "1rem" },
        "&:hover": {
          backgroundColor: "rgba(0, 0, 128, 0.8)",
          color: "white",
        },
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
