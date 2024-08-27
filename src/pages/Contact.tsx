import { Box, Grid, TextField, Typography } from "@mui/material";
import abstract from "../assets/images/abstract.jpg";

import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Button from "../components/Button";

function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "bisque",
        height: "calc(100vh - 80px)",
        backgroundImage: `url(${abstract})`,
        backgroundSize: "cover",
      }}
    >
      <Grid
        container
        sx={{
          border: "1px solid darkgrey",
          background: "white",
          boxShadow: 2,
          padding: 2,
          maxWidth: 800,
          position: "absolute",
          top: { xs: "80px", sm: "25%" },
          height: { xs: "100%", sm: "auto" },
        }}
        gap={1}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Raleway",
            fontWeight: "bold",
            width: "100%",
            textAlign: "left",
          }}
        >
          Contact Us
        </Typography>

        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <PhoneIcon />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Raleway",
                fontWeight: "bold",
                width: "100%",
                textAlign: "left",
              }}
            >
              555-555-5555
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AlternateEmailIcon />
            <Typography
              sx={{
                fontFamily: "Raleway",
                width: "100%",
                textAlign: "left",
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              email@strategichealthcaresolutions.org
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "100%", display: "flex", my: 2 }}>
          <Box
            sx={{
              borderBottom: "1px solid grey",
              width: "100%",
              height: "50%",
            }}
          />
          <Typography
            variant="h5"
            sx={{ fontFamily: "Raleway", fontWeight: "bold", px: 2 }}
          >
            Or
          </Typography>
          <Box
            sx={{
              borderBottom: "1px solid grey",
              width: "100%",
              height: "50%",
            }}
          />
        </Box>

        <Typography
          variant="h5"
          sx={{ fontFamily: "Raleway", fontWeight: "bold" }}
        >
          Send Us A Message
        </Typography>
        <Grid
          container
          item
          xs={12}
          gap={1}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid item xs>
            <TextField label="Name" sx={{ width: "100%" }} />
          </Grid>
          <Grid item xs>
            <TextField label="Company" sx={{ width: "100%" }} />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          gap={1}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid item xs>
            <TextField label="Email" sx={{ width: "100%" }} />
          </Grid>
          <Grid item xs>
            <TextField label="Phone" sx={{ width: "100%" }} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message"
            sx={{ width: "100%" }}
            minRows={4}
            maxRows={4}
            multiline
          />
        </Grid>
        <Button sx={{ ml: "auto" }}>Send</Button>
      </Grid>
    </Box>
  );
}

export default Contact;
