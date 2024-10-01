import {
  Alert,
  AlertProps,
  Box,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import abstract from "../assets/images/abstract.jpg";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Button from "../components/Button";
import _ from "lodash";

import { useEffect, useState } from "react";

import emailjs from "@emailjs/browser";

import email from "../email.json";

const emptyAlert = { open: false, message: "", severity: "" };

function Contact() {
  const [alert, setAlert] = useState(emptyAlert);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState(false);

  useEffect(() => emailjs.init(email.public), []);

  const submitCheck = () => {
    const { name, email, phone, message } = form;

    if (!name || !email || !phone || !message) {
      setError(true);
    } else {
      setError(false);
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const serviceId = email.id;
    const templateId = email.template;

    try {
      await emailjs.send(serviceId, templateId, {
        name: form.name,
        email: form.email,
        company: form.company,
        phone: form.phone,
        message: form.message,
      });
      setAlert({
        open: true,
        message: "Email sent successfully",
        severity: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: "Email failed to send",
        severity: "error",
      });
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "bisque",
        height: "calc(100vh - 60px)",
        backgroundImage: `url(${abstract})`,
        backgroundSize: "cover",
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={alert.open}
        onClose={() => setAlert(emptyAlert)}
      >
        <Alert
          onClose={() => setAlert(emptyAlert)}
          severity={alert.severity as AlertProps["severity"]}
          variant="filled"
          sx={{
            width: "100%",
            background: alert.severity === "error" ? "darkred" : "navy",
          }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
      <Grid
        container
        sx={{
          border: "1px solid darkgrey",
          background: "white",
          boxShadow: 2,
          padding: 2,
          maxWidth: 800,
          position: "absolute",
          top: { xs: "60px", sm: "25%" },
          height: { xs: "fit-content", sm: "auto" },
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
              sheryl@strategichealthcaresolutions.org
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
            <TextField
              required
              error={error && !form.name}
              label="Name"
              sx={{ width: "100%" }}
              inputProps={{ maxLength: 64 }}
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </Grid>
          <Grid item xs>
            <TextField
              label="Company"
              sx={{ width: "100%" }}
              inputProps={{ maxLength: 64 }}
              value={form.company}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, company: e.target.value }))
              }
            />
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
            <TextField
              required
              error={error && !form.email}
              label="Email"
              sx={{ width: "100%" }}
              inputProps={{ maxLength: 64 }}
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </Grid>
          <Grid item xs>
            <TextField
              required
              error={error && !form.phone}
              label="Phone"
              sx={{ width: "100%" }}
              inputProps={{ maxLength: 30 }}
              value={form.phone}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message"
            sx={{ width: "100%" }}
            minRows={4}
            maxRows={4}
            multiline
            inputProps={{ maxLength: 500 }}
            value={form.message}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, message: e.target.value }))
            }
            required
            error={error && !form.message}
          />
          <Box sx={{ textAlign: "end" }}>{form.message.length || 0}/500</Box>
        </Grid>
        <Button sx={{ ml: "auto" }} onClick={submitCheck}>
          Send
        </Button>
      </Grid>
    </Box>
  );
}

export default Contact;
