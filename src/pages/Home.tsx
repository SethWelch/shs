import { Box, Grid, IconButton, Typography } from '@mui/material'
import office from '../assets/images/office.jpg'
import office2 from '../assets/images/office-extended.png'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Home() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          alignItems: 'stretch',
          minHeight: { xs: 300, sm: 300, md: 600 },
          backgroundImage: { xs: 'unset', sm: 'unset', md: `url(${office2})` },
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: { xs: 2, sm: 6 },
            height: 'auto',
            maxWidth: 700,
            minHeight: { xs: 300, sm: 300, md: 600 },
            background:
              'linear-gradient(to right, rgba(248,249,250,1) 40%,rgba(248,249,250,.65) 80%, rgba(248,249,250,0) 100%)',
          }}
        >
          <Typography
            sx={{
              textAlign: 'left',
              fontWeight: 'bolder',
              fontSize: { xs: '2rem', sm: '3.5rem' },
              fontFamily: 'Raleway',
              lineHeight: '1.2',
              color: 'navy',
              textShadow: '#ffffff 4px 2px 10px',
            }}
          >
            Compliance and Security Expertise
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'left',
              mt: 2,
              color: 'black',
              width: '80%',
              textShadow: '#ffffff 4px 2px 10px',
            }}
          >
            If you think compliance experts or security officers are expensive,
            wait until you see what amateurs cost.
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
          <img
            style={{
              width: '100%',
              maxWidth: 800,
            }}
            src={`${office}`}
            alt="placeholder"
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#f8f9fa',
          borderBottom: '1px solid lightgray',
          py: 4,
          px: 2,
          gap: 2,
        }}
      >
        <SectionHeader
          title="About Us"
          sx={{ textAlign: { sm: 'center', md: 'center', lg: 'left' } }}
        />
        <Typography
          variant="h6"
          sx={{ textAlign: 'left', fontSize: '1.25rem', maxWidth: '800px' }}
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
          display: 'flex',
          justifyContent: 'center',
          py: { xs: 4, sm: 8 },
          background: '#f8f9fa',
          borderBottom: '1px solid lightgray',
        }}
      >
        <Box>
          <SectionHeader title="Our Services" sx={{ marginBottom: 4 }} />
          <Grid
            container
            justifyContent={{
              xs: 'center',
              sm: 'center',
              md: 'center',
              lg: 'start',
            }}
            gap={1}
          >
            <Grid item sx={{ m: 0, position: 'relative' }}>
              <ServiceCard
                variant="light"
                title="CMS Promoting Interoperability Compliance"
                body="Assistance with meeting CMS requirements for electronic health records and promoting interoperability to enhance patient care."
              />
            </Grid>
            <Grid item sx={{ m: 0, position: 'relative' }}>
              <ServiceCard
                variant="medium"
                title="Security & Privacy Risk Assessments"
                body="Evaluating potential risks and vulnerabilities to the confidentiality, integrity, and availability of electronic protected health information."
              />
            </Grid>
            <Grid item sx={{ m: 0, position: 'relative' }}>
              <ServiceCard
                title="SAFER Guide Facilitation and Completion"
                body="Guiding healthcare organizations through SAFER Guides to ensure the safe and secure use of electronic health records."
              />
            </Grid>
            <Grid item sx={{ m: 0, position: 'relative' }}>
              <ServiceCard
                variant="medium"
                title="HIPAA Compliance Assessments"
                body="Comprehensive assessments to ensure compliance with the Health Insurance Portability and Accountability Act regulations."
              />
            </Grid>
            <Grid item sx={{ m: 0, position: 'relative' }}>
              <ServiceCard
                variant="light"
                title="CARF Assessments"
                body="Specialized assistance with Commission on Accreditation of Rehabilitation Facilities (CARF) standards for quality and results."
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ py: { xs: 4, sm: 8 } }}>
        <SectionHeader title="Insights" sx={{ marginBottom: 2 }} />
        <Typography sx={{ fontSize: '1.25rem' }}>
          Transform data into actionable insights with our comprehensive
          executive dashboards...
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          height: '60px',
          background: 'black',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: 2,
          borderTop: '1px solid lightgray',
          px: 4,
        }}
      >
        <Typography sx={{ color: 'white', fontSize: 18 }}>
          ©2024 Strategic Healthcare Solutions
        </Typography>
        <Box>
          <IconButton
            aria-label="linkedin"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/company/strategic-healthcare-solutions-llc/',
                '_blank'
              )
            }
          >
            <LinkedInIcon sx={{ color: 'white', height: 36, width: 36 }} />
          </IconButton>
        </Box>
      </Box>
    </>
  )
}

export default Home
