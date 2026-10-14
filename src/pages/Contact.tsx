import { useEffect, useState } from "react";
import {
  Alert,
  type AlertProps,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import emailjs from "@emailjs/browser";
import email from "../email.json";
import { CONTACT_EMAIL } from "../data/content";
import { colors } from "../theme";

const emptyAlert = { open: false, message: "", severity: "" };
const emptyForm = { name: "", email: "", company: "", phone: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Field = keyof typeof emptyForm;

function Contact() {
  const [alert, setAlert] = useState(emptyAlert);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => emailjs.init(email.public), []);

  const emailInvalid = !!form.email && !EMAIL_RE.test(form.email);

  const update = (field: Field) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email: address, phone, message } = form;
    if (!name || !address || !phone || !message || emailInvalid) {
      setError(true);
      return;
    }
    setError(false);
    setSending(true);
    try {
      await emailjs.send(email.id, email.template, { ...form });
      setAlert({ open: true, message: "Thanks — your message was sent. We'll be in touch soon.", severity: "success" });
      setForm(emptyForm);
    } catch (err) {
      setAlert({ open: true, message: "Your message failed to send. Please try again or email us directly.", severity: "error" });
      console.log(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <Box sx={{ bgcolor: colors.canvas, py: { xs: 6, md: 10 } }}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={alert.open}
        autoHideDuration={6000}
        onClose={() => setAlert(emptyAlert)}
      >
        <Alert
          onClose={() => setAlert(emptyAlert)}
          severity={alert.severity as AlertProps["severity"]}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>

      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4 } }}>
        <Grid
          container
          sx={{
            borderRadius: 1.4,
            overflow: "hidden",
            bgcolor: "#fff",
            border: `1px solid ${colors.line}`,
            boxShadow: "0 30px 60px -40px rgba(11,37,69,0.35)",
          }}
        >
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              bgcolor: colors.navy,
              color: "#fff",
              p: { xs: 4, md: 6 },
              backgroundImage: `radial-gradient(circle at 0% 100%, rgba(201,162,90,0.3), transparent 55%)`,
            }}
          >
            <Typography variant="overline" component="p" sx={{ color: colors.goldLight }}>
              Contact
            </Typography>
            <Typography variant="h2" component="h1" sx={{ color: "#fff", mt: 1 }}>
              Let's talk about your compliance priorities
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.75)", mt: 2 }}>
              Send us a note and a member of our team will follow up to learn about your organization.
            </Typography>

            <Stack spacing={1.75} sx={{ mt: 4 }}>
              {[
                "An initial conversation about your goals",
                "A recommended assessment scope",
                "Clear next steps and timeline",
              ].map((t) => (
                <Stack key={t} direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                  <CheckCircleRoundedIcon sx={{ color: colors.goldLight, fontSize: 20, mt: "3px" }} />
                  <Typography sx={{ color: "rgba(255,255,255,0.88)", fontSize: "1rem" }}>{t}</Typography>
                </Stack>
              ))}
            </Stack>

            <Box sx={{ mt: 5, pt: 4, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <Typography sx={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", mb: 1 }}>
                Prefer email?
              </Typography>
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                sx={{
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: 600,
                  wordBreak: "break-all",
                  textDecorationColor: "rgba(255,255,255,0.4)",
                }}
              >
                <MailOutlineRoundedIcon fontSize="small" />
                {CONTACT_EMAIL}
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 3, sm: 4, md: 6 } }}>
            <Typography variant="h4" component="h2" sx={{ fontSize: "1.5rem", color: colors.ink }}>
              Send us a message
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5, mb: 4, color: colors.muted }}>
              Fields marked * are required.
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    autoComplete="name"
                    error={error && !form.name}
                    slotProps={{ htmlInput: { maxLength: 64 } }}
                    value={form.name}
                    onChange={update("name")}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Organization"
                    autoComplete="organization"
                    slotProps={{ htmlInput: { maxLength: 64 } }}
                    value={form.company}
                    onChange={update("company")}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    label="Email"
                    autoComplete="email"
                    error={(error && !form.email) || (error && emailInvalid)}
                    helperText={error && emailInvalid ? "Enter a valid email address" : undefined}
                    slotProps={{ htmlInput: { maxLength: 64 } }}
                    value={form.email}
                    onChange={update("email")}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    type="tel"
                    label="Phone"
                    autoComplete="tel"
                    error={error && !form.phone}
                    slotProps={{ htmlInput: { maxLength: 30 } }}
                    value={form.phone}
                    onChange={update("phone")}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    minRows={5}
                    maxRows={8}
                    label="How can we help?"
                    error={error && !form.message}
                    helperText={`${form.message.length}/500`}
                    slotProps={{
                      htmlInput: { maxLength: 500 },
                      formHelperText: { sx: { textAlign: "right", mx: 0 } },
                    }}
                    value={form.message}
                    onChange={update("message")}
                  />
                </Grid>
              </Grid>
              <Stack
                direction={{ xs: "column-reverse", sm: "row" }}
                spacing={2}
                sx={{ mt: 3, justifyContent: "space-between", alignItems: { sm: "center" } }}
              >
                <Typography variant="body2" sx={{ color: colors.muted, fontSize: "0.85rem" }}>
                  Please don't include patient or other protected health information.
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  loading={sending}
                  endIcon={<SendRoundedIcon />}
                  sx={{ flexShrink: 0 }}
                >
                  Send message
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
