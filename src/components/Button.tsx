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
        fontSize: "1rem",
        fontWeight: "bold",
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
