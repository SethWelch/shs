import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import { Link as RouterLink } from "react-router-dom";
import office from "../assets/images/office-hero.jpg";
import { Section, SectionHeader } from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import ProfileCard from "../components/ProfileCard";
import { approach, services, team } from "../data/content";
import { colors } from "../theme";

function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: colors.canvas,
        borderBottom: `1px solid ${colors.line}`,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${colors.line} 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to right, black, transparent 60%)",
          opacity: 0.8,
        }}
      />
      <Box sx={{ position: "relative", maxWidth: 1200, mx: "auto", px: { xs: 2.5, sm: 4 }, py: { xs: 7, md: 12 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Chip
              label="Healthcare compliance & cybersecurity"
              sx={{
                bgcolor: colors.tealSoft,
                color: colors.tealDark,
                fontWeight: 600,
                mb: 3,
              }}
            />
            <Typography variant="h1">
              Compliance and security{" "}
              <Box component="span" sx={{ color: colors.teal }}>
                expertise
              </Box>{" "}
              for health systems
            </Typography>
            <Typography sx={{ mt: 3, fontSize: { xs: "1.125rem", md: "1.25rem" }, maxWidth: 520 }}>
              If you think compliance experts or security officers are expensive, wait until you see
              what amateurs cost.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4.5 }}>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
              >
                Schedule an assessment
              </Button>
              <Button component={RouterLink} to="/#services" variant="outlined" color="primary" size="large">
                Explore services
              </Button>
            </Stack>
            <Stack
              direction="row"
              sx={{ mt: 5, flexWrap: "wrap", columnGap: 3, rowGap: 1.25, color: colors.muted }}
            >
              {["HIPAA", "CMS Promoting Interoperability", "SAFER Guides", "CARF"].map((s) => (
                <Stack key={s} direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
                  <CheckCircleRoundedIcon sx={{ fontSize: 18, color: colors.teal }} />
                  <Typography sx={{ fontSize: "0.9rem", fontWeight: 500, color: colors.body }}>{s}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", pl: { md: 2 }, pb: { xs: 4, md: 0 } }}>
              <Box
                component="img"
                src={office}
                alt="Consultants meeting around a conference table"
                sx={{
                  display: "block",
                  width: "100%",
                  aspectRatio: { xs: "4 / 3", md: "5 / 5.2" },
                  objectFit: "cover",
                  objectPosition: "58% center",
                  borderRadius: 5,
                  boxShadow: "0 30px 60px -30px rgba(11,37,69,0.45)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 16, md: -24 },
                  bottom: { xs: 0, md: 32 },
                  bgcolor: "#fff",
                  borderRadius: 3,
                  p: 2,
                  pr: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  boxShadow: "0 18px 40px -16px rgba(11,37,69,0.35)",
                  border: `1px solid ${colors.line}`,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: colors.navy,
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <InsightsRoundedIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: colors.ink, fontSize: "0.95rem", lineHeight: 1.3 }}>
                    Assess · Report · Remediate
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: colors.muted, lineHeight: 1.4 }}>
                    Every gap tracked to closure
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="What we do"
        title="Services built around the standards you answer to"
        intro="From federal EHR programs to accreditation, we help your organization meet requirements with confidence."
      />
      <Grid container spacing={3}>
        {services.map((s) => (
          <Grid key={s.title} size={{ xs: 12, sm: 6, lg: 4 }}>
            <ServiceCard {...s} />
          </Grid>
        ))}
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Box
            sx={{
              height: "100%",
              minHeight: 240,
              p: { xs: 3, md: 3.5 },
              borderRadius: 4,
              bgcolor: colors.navy,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundImage: `radial-gradient(circle at 100% 0%, rgba(14,149,148,0.45), transparent 55%)`,
            }}
          >
            <Box>
              <Typography variant="h3" component="h3" sx={{ color: "#fff" }}>
                Not sure where to start?
              </Typography>
              <Typography variant="body2" sx={{ mt: 1.5, color: "rgba(255,255,255,0.75)" }}>
                Tell us about your organization and we'll recommend the assessment that fits.
              </Typography>
            </Box>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{ alignSelf: "flex-start", mt: 3 }}
            >
              Talk to an expert
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" sx={{ bgcolor: colors.canvas, borderTop: `1px solid ${colors.line}`, borderBottom: `1px solid ${colors.line}` }}>
      <Grid container spacing={{ xs: 6, md: 10 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="overline" component="p">
            About us
          </Typography>
          <Typography variant="h2" sx={{ mt: 1 }}>
            We tell you what should be keeping leadership up at night
          </Typography>
          <Typography sx={{ mt: 3 }}>
            Strategic Healthcare Solutions employs a team of regulatory and cybersecurity experts that
            assist hospitals and health systems across the country with compliance.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            This dedicated team will perform assessments, identify gaps and vulnerabilities, generate
            executive dashboards, and project manage issues to closure — then show you how to mitigate
            those risks.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gap: 2 }}>
            {approach.map((step, i) => (
              <Box
                component="li"
                key={step.title}
                sx={{
                  display: "flex",
                  gap: 2.5,
                  p: 3,
                  bgcolor: "#fff",
                  borderRadius: 4,
                  border: `1px solid ${colors.line}`,
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 700,
                    color: colors.tealDark,
                    bgcolor: colors.tealSoft,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </Box>
                <Box>
                  <Typography variant="h3" component="h3">
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 0.75 }}>
                    {step.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}

function Team() {
  return (
    <Section id="team">
      <SectionHeader
        eyebrow="Our team"
        title="The people behind the work"
        align="center"
      />
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {team.map((m) => (
          <Grid key={m.name} size={{ xs: 6, md: 3 }}>
            <ProfileCard {...m} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

const dashboardRows = [
  { label: "Security risk", value: 82, tone: colors.teal },
  { label: "HIPAA privacy", value: 64, tone: colors.teal },
  { label: "SAFER Guides", value: 48, tone: "#F2A541" },
  { label: "CMS PI measures", value: 91, tone: colors.teal },
];

function DashboardPreview() {
  return (
    <Box
      aria-hidden
      sx={{
        bgcolor: "#fff",
        borderRadius: 4,
        p: { xs: 2.5, sm: 3.5 },
        boxShadow: "0 40px 80px -30px rgba(0,0,0,0.5)",
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography sx={{ fontWeight: 700, color: colors.ink }}>Compliance posture</Typography>
        <Chip size="small" label="Executive view" sx={{ bgcolor: colors.tealSoft, color: colors.tealDark, fontWeight: 600 }} />
      </Stack>
      <Stack spacing={2.25}>
        {dashboardRows.map((r) => (
          <Box key={r.label}>
            <Typography sx={{ fontSize: "0.85rem", color: colors.body, mb: 0.75 }}>{r.label}</Typography>
            <Box sx={{ height: 8, borderRadius: 99, bgcolor: colors.canvas, overflow: "hidden" }}>
              <Box sx={{ width: `${r.value}%`, height: "100%", borderRadius: 99, bgcolor: r.tone }} />
            </Box>
          </Box>
        ))}
      </Stack>
      <Grid container spacing={1.5} sx={{ mt: 3 }}>
        {[
          { k: "Open", c: "#F2A541" },
          { k: "In progress", c: colors.blue },
          { k: "Closed", c: colors.teal },
        ].map((s) => (
          <Grid key={s.k} size={4}>
            <Box sx={{ border: `1px solid ${colors.line}`, borderRadius: 2.5, p: 1.5 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: s.c, mb: 1 }} />
              <Typography sx={{ fontSize: "0.8rem", color: colors.muted }}>{s.k}</Typography>
              <Box sx={{ mt: 0.75, height: 6, width: "60%", borderRadius: 99, bgcolor: colors.line }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function Insights() {
  return (
    <Section
      id="insights"
      sx={{
        bgcolor: colors.navy,
        backgroundImage: `radial-gradient(circle at 85% 20%, rgba(14,149,148,0.35), transparent 45%)`,
      }}
    >
      <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SectionHeader
            light
            eyebrow="Insights"
            title="Turn assessment data into decisions"
            intro="Transform data into actionable insights with comprehensive executive dashboards that make risk visible to the people who own it."
          />
          <Stack spacing={2} sx={{ mt: -2 }}>
            {[
              "See your compliance and security posture at a glance",
              "Prioritize remediation by risk, not by guesswork",
              "Track every finding from discovery to closure",
            ].map((t) => (
              <Stack key={t} direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                <CheckCircleRoundedIcon sx={{ color: "#7FD6D3", mt: "3px" }} />
                <Typography sx={{ color: "rgba(255,255,255,0.88)" }}>{t}</Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <DashboardPreview />
        </Grid>
      </Grid>
    </Section>
  );
}

function CallToAction() {
  return (
    <Section sx={{ py: { xs: 8, md: 10 } }}>
      <Box
        sx={{
          borderRadius: 5,
          border: `1px solid ${colors.line}`,
          bgcolor: colors.canvas,
          p: { xs: 4, md: 6 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Box sx={{ maxWidth: 620 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.6rem", md: "2rem" } }}>
            Ready to find your gaps before an auditor does?
          </Typography>
          <Typography sx={{ mt: 1.5 }}>
            Start a conversation with our team about your compliance and security priorities.
          </Typography>
        </Box>
        <Button
          component={RouterLink}
          to="/contact"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{ flexShrink: 0 }}
        >
          Contact us
        </Button>
      </Box>
    </Section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team />
      <Insights />
      <CallToAction />
    </>
  );
}

export default Home;
