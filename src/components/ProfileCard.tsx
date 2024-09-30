import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

type ProfileCardProps = {
  name: string;
  title: string;
  image?: string;
};

function ProfileCard({ name, title, image }: ProfileCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#07355b",
        padding: "16px 24px",
        boxShadow: "5px 5px 5px grey",
      }}
    >
      <Box
        id="image-container"
        sx={{
          background: "lightBlue",
          borderRadius: 40,
          display: "flex",
          width: "fit-content",
          mb: 2,
        }}
      >
        {image ? (
          <img
            style={{
              width: "100%",
              maxWidth: 200,
              borderTopLeftRadius: "50% 50%",
              borderTopRightRadius: "50% 50%",
              borderBottomRightRadius: "50% 50%",
              borderBottomLeftRadius: "50% 50%",
            }}
            src={`${image}`}
            alt="placeholder"
          />
        ) : (
          <Box
            sx={{
              height: 200,
              width: 200,
              fontSize: 120,
              color: "midnightblue",
            }}
          >
            <PersonIcon sx={{ fontSize: 200 }} />
          </Box>
        )}
      </Box>
      <Box>
        <label
          style={{
            width: "100%",
            display: "block",
            fontSize: 20,
            fontWeight: 600,
            color: "white",
            textWrap: "nowrap",
          }}
        >
          {name}
        </label>
        <label
          style={{
            width: "100%",
            display: "block",
            color: "white",
            textWrap: "nowrap",
          }}
        >
          {title}
        </label>
      </Box>
    </Box>
  );
}

export default ProfileCard;
