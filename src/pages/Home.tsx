import { Box, Grid, Typography } from "@mui/material";
import ServiceBox from "../ServiceBox";
import office from "../assets/images/office.jpg";

function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: { xs: 2, sm: 4 },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            px: { xs: 2, sm: 6 },
            py: 4,
            maxWidth: 700,
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bolder",
              fontSize: { xs: "2rem", sm: "3.5rem" },
              fontFamily: "Raleway",
              lineHeight: "1.2",
              color: "navy",
              textShadow: "#ffffff 4px 2px 10px",
            }}
          >
            Compliance and Security Expertise
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: "left", mt: 2, color: "black" }}
          >
            If you think compliance experts or security officers are expensive,
            wait until you see what amateurs cost.
          </Typography>
        </Box>
        <img
          style={{
            width: "100%",
            maxWidth: 800,
          }}
          src={`${office}`}
          alt="placeholder"
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#f8f9fa",
          borderBottom: "1px solid lightgray",
          py: 4,
          px: 2,
          gap: 2,
        }}
      >
        <Typography
          sx={{
            textAlign: { sm: "center", md: "center", lg: "left" },
            fontWeight: "600",
            fontFamily: "Raleway",
            fontSize: "2rem",
            color: "navy",
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="h6"
          sx={{ textAlign: "left", fontSize: "1.25rem", maxWidth: "800px" }}
        >
          Strategic Healthcare Solutions employs a team of regulatory and
          cybersecurity experts that assist hospitals and health systems across
          the country with compliance. This dedicated team will perform
          assessments, identify gaps and/or vulnerabilities, generate executive
          dashboards, and project manage issues to closure. Let us tell you what
          vulnerabilities should be keeping your leadership up at night and how
          to mitigate those risks!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: { xs: 4, sm: 8 },
          background: "#f8f9fa",
          borderBottom: "1px solid lightgray",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: "600",
              mb: 4,
              fontFamily: "Raleway",
              fontSize: "2rem",
              color: "navy",
            }}
          >
            Our Services
          </Typography>
          <Grid
            container
            gap={2}
            justifyContent={{
              xs: "center",
              sm: "center",
              md: "center",
              lg: "start",
            }}
            sx={{ maxWidth: "1056px" }}
          >
            <Grid item>
              <ServiceBox
                title="CMS Promoting Interoperability Compliance"
                body="Assistance with meeting CMS requirements for electronic health records and promoting interoperability to enhance patient care."
              />
            </Grid>
            <Grid item>
              <ServiceBox
                title="Security & Privacy Risk Assessments"
                body="Evaluating potential risks and vulnerabilities to the confidentiality, integrity, and availability of electronic protected health information."
              />
            </Grid>
            <Grid item>
              <ServiceBox
                title="SAFER Guide Facilitation and Completion"
                body="Guiding healthcare organizations through SAFER Guides to ensure the safe and secure use of electronic health records."
              />
            </Grid>
            <Grid item>
              <ServiceBox
                title="HIPAA Compliance Assessments"
                body="Comprehensive assessments to ensure compliance with the Health Insurance Portability and Accountability Act regulations."
              />
            </Grid>
            <Grid item>
              <ServiceBox
                title="CARF Assessments"
                body="Specialized assistance with Commission on Accreditation of Rehabilitation Facilities (CARF) standards for quality and results."
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ py: { xs: 4, sm: 8 } }}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: "2rem",
            fontFamily: "Raleway",
            gap: 2,
            color: "navy",
          }}
        >
          Insights
        </Typography>
        <Typography sx={{ fontSize: "1.25rem" }}>
          Transform data into actionable insights with our comprehensive
          executive dashboards...
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "50px",
          background: "white",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 2,
          borderTop: "1px solid lightgray",
        }}
      >
        <Typography sx={{ color: "navy" }}>
          ©2024 Strategic Healthcare Solutions
        </Typography>
      </Box>
    </>
  );
}

export default Home;
