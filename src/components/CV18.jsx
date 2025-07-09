import React, { useState, useRef } from 'react';
import { 
  Box, Button, Container, CssBaseline, Grid, IconButton, 
  Paper, ThemeProvider, Typography, createTheme, 
  useMediaQuery, styled 
} from '@mui/material';
import { Print, Download, Brightness4, Brightness7 } from '@mui/icons-material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Styled components
const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '@media print': {
    marginBottom: theme.spacing(1.5),
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(2),
  textTransform: 'uppercase',
  '@media print': {
    paddingBottom: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    fontSize: '1.1rem !important',
  }
}));

// Print utility style
const noPrintStyle = {
  '@media print': {
    display: 'none'
  }
};

// CV Template Component
const CVTemplate = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState('Roboto');
  const cvRef = useRef(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  
  const handleFontChange = (font) => {
    setFontFamily(font);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: fontFamily,
      h1: { fontSize: '2.5rem', fontWeight: 700 },
      h2: { fontSize: '1.8rem', fontWeight: 600 },
      h3: { fontSize: '1.4rem', fontWeight: 500 },
      body1: { fontSize: '0.95rem' },
    },
  });

  const handlePrint = () => {
    window.print();
  };

  const downloadPDF = () => {
    const input = cvRef.current;
    html2canvas(input, { 
      scale: 3,
      useCORS: true,
      logging: false,
      backgroundColor: darkMode ? '#1e1e1e' : '#ffffff'
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('professional-cv.pdf');
    });
  };

  // Sample data - FULLY DEFINED
  const cvData = {
    fullName: "John Doe",
    phone: "+1 (123) 456-7890",
    email: "john.doe@example.com",
    city: "New York",
    state: "NY",
    country: "USA",
    socialLinks: [
      { name: "LinkedIn", url: "linkedin.com/in/johndoe" },
      { name: "GitHub", url: "github.com/johndoe" },
      { name: "Portfolio", url: "johndoeportfolio.com" }
    ],
    summary: "Experienced software engineer with 5+ years specializing in React and Node.js. Passionate about creating efficient and scalable applications with clean code architecture.",
    skills: [
      "JavaScript (ES6+)", "React.js", "Node.js", "TypeScript", 
      "Redux", "Material-UI", "Express.js", "MongoDB", 
      "Git", "Docker", "AWS", "CI/CD"
    ],
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "Tech Innovations Inc.",
        period: "2020 - Present",
        description: "Lead development of customer-facing applications using React and Redux. Improved application performance by 40% through code optimization.",
        achievements: [
          "Implemented CI/CD pipeline reducing deployment time by 60%",
          "Mentored 5 junior developers in React best practices"
        ]
      },
      {
        title: "Full Stack Developer",
        company: "Digital Solutions LLC",
        period: "2018 - 2020",
        description: "Developed and maintained full-stack applications using MERN stack.",
        achievements: [
          "Redesigned legacy system improving user retention by 25%",
          "Created RESTful APIs serving 10k+ daily requests"
        ]
      }
    ],
    education: [
      {
        degree: "M.S. Computer Science",
        institution: "University of Technology",
        period: "2016 - 2018",
        description: "Specialized in Distributed Systems and Machine Learning"
      },
      {
        degree: "B.S. Software Engineering",
        institution: "State College",
        period: "2012 - 2016",
        description: "Graduated with honors"
      }
    ],
    projects: [
      {
        name: "E-commerce Platform",
        technologies: "React, Node.js, MongoDB, Stripe API",
        description: "Full-featured online shopping platform with payment processing"
      },
      {
        name: "Task Management System",
        technologies: "React, Firebase, Material-UI",
        description: "Real-time collaborative task management application"
      }
    ],
    certificates: [
      "AWS Certified Solutions Architect - Associate (2022)",
      "Google Professional Cloud Developer (2021)",
      "Microsoft Certified: Azure Developer Associate (2020)"
    ],
    achievements: [
      "Employee of the Year 2021 at Tech Innovations Inc.",
      "Best Open Source Contribution Award 2019"
    ],
    languages: [
      { name: "English", proficiency: "Native" },
      { name: "Spanish", proficiency: "Professional" },
      { name: "French", proficiency: "Intermediate" }
    ],
    interests: ["Open Source Contributions", "AI Research", "Photography", "Hiking"],
    awards: [
      "1st Place - National Coding Championship 2017",
      "Best UI Design - TechCrunch Hackathon 2019"
    ]
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4, '@media print': { py: 0 } }}>
        {/* Control Panel - hidden during print */}
        <Box sx={{ 
          mb: 4, 
          display: 'flex', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          p: 2,
          borderRadius: 1,
          bgcolor: 'background.paper',
          boxShadow: 1,
          ...noPrintStyle
        }}>
          <Box>
            <Button 
              variant="contained" 
              startIcon={<Print />}
              onClick={handlePrint}
              sx={{ mr: 2 }}
            >
              Print
            </Button>
            <Button 
              variant="outlined" 
              startIcon={<Download />}
              onClick={downloadPDF}
            >
              Download PDF
            </Button>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button 
              variant={fontFamily === 'Roboto' ? 'contained' : 'outlined'}
              size="small"
              onClick={() => handleFontChange('Roboto')}
            >
              Roboto
            </Button>
            <Button 
              variant={fontFamily === 'Arial' ? 'contained' : 'outlined'}
              size="small"
              onClick={() => handleFontChange('Arial')}
            >
              Arial
            </Button>
            <Button 
              variant={fontFamily === 'Georgia' ? 'contained' : 'outlined'}
              size="small"
              onClick={() => handleFontChange('Georgia')}
            >
              Georgia
            </Button>
            
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Box>

        {/* CV Container - A4 Size */}
        <Paper 
          ref={cvRef}
          elevation={3}
          sx={{
            width: '210mm',
            minHeight: '297mm',
            mx: 'auto',
            p: '20mm',
            display: 'flex',
            flexDirection: 'column',
            '@media print': {
              boxShadow: 'none',
              width: '100%',
              height: '100%',
              margin: 0,
              padding: '15mm',
              '& h1': { fontSize: '1.8rem !important' },
              '& h2': { fontSize: '1.3rem !important' },
              '& h3': { fontSize: '1.1rem !important' },
              '& .MuiTypography-body1': { fontSize: '0.8rem !important' },
              '& .MuiGrid-item': { padding: '0.25rem !important' },
            }
          }}
        >
          {/* Header */}
          <Box sx={{ 
            textAlign: 'center', 
            mb: 4,
            '@media print': {
              mb: 2,
              '& .MuiTypography-h1': { marginBottom: '0.25rem !important' }
            }
          }}>
            <Typography variant="h1" gutterBottom>
              {cvData.fullName}
            </Typography>
            <Typography variant="body1" sx={{ '@media print': { fontSize: '0.75rem !important' } }}>
              {cvData.city}, {cvData.state}, {cvData.country} | 
              {cvData.phone} | 
              {cvData.email}
            </Typography>
            <Box sx={{ mt: 1, '@media print': { mt: 0.5 } }}>
              {cvData.socialLinks.map((link, index) => (
                <Typography 
                  key={index} 
                  component="span" 
                  sx={{ 
                    mr: 2,
                    '@media print': {
                      mr: 1,
                      fontSize: '0.7rem !important',
                      display: 'block'
                    }
                  }}
                >
                  {link.name}: {link.url}
                </Typography>
              ))}
            </Box>
          </Box>

          <Grid container spacing={4} sx={{ '@media print': { spacing: 0 } }}>
            {/* Left Column */}
            <Grid item xs={7}>
              {/* Summary */}
              <Section>
                <SectionTitle variant="h2">Summary</SectionTitle>
                <Typography variant="body1">{cvData.summary}</Typography>
              </Section>

              {/* Experience */}
              <Section>
                <SectionTitle variant="h2">Professional Experience</SectionTitle>
                {cvData.experience.map((exp, index) => (
                  <Box key={index} sx={{ mb: 3, '@media print': { mb: 1.5 } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h3">{exp.title}</Typography>
                      <Typography>{exp.period}</Typography>
                    </Box>
                    <Typography fontStyle="italic">{exp.company}</Typography>
                    <Typography variant="body1" sx={{ mt: 1, '@media print': { mt: 0.5 } }}>
                      {exp.description}
                    </Typography>
                    <ul style={{ marginTop: 4, marginBottom: 4, paddingLeft: 20 }}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>
                          <Typography variant="body1">{achievement}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                ))}
              </Section>

              {/* Projects */}
              <Section>
                <SectionTitle variant="h2">Projects</SectionTitle>
                {cvData.projects.map((project, index) => (
                  <Box key={index} sx={{ mb: 2, '@media print': { mb: 1 } }}>
                    <Typography fontWeight="bold">{project.name}</Typography>
                    <Typography variant="body1" fontStyle="italic">{project.technologies}</Typography>
                    <Typography variant="body1">{project.description}</Typography>
                  </Box>
                ))}
              </Section>
            </Grid>

            {/* Right Column */}
            <Grid item xs={5}>
              {/* Skills */}
              <Section>
                <SectionTitle variant="h2">Skills</SectionTitle>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {cvData.skills.map((skill, index) => (
                    <Paper 
                      key={index} 
                      sx={{ 
                        p: 1, 
                        bgcolor: 'primary.light', 
                        color: 'primary.contrastText',
                        '@media print': {
                          padding: '0.2rem 0.5rem !important',
                          fontSize: '0.7rem !important'
                        }
                      }}
                    >
                      {skill}
                    </Paper>
                  ))}
                </Box>
              </Section>

              {/* Education */}
              <Section>
                <SectionTitle variant="h2">Education</SectionTitle>
                {cvData.education.map((edu, index) => (
                  <Box key={index} sx={{ mb: 2, '@media print': { mb: 1 } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography fontWeight="bold">{edu.degree}</Typography>
                      <Typography>{edu.period}</Typography>
                    </Box>
                    <Typography>{edu.institution}</Typography>
                    <Typography variant="body1">{edu.description}</Typography>
                  </Box>
                ))}
              </Section>

              {/* Certificates */}
              <Section>
                <SectionTitle variant="h2">Certificates</SectionTitle>
                <ul style={{ marginTop: 4, paddingLeft: 20 }}>
                  {cvData.certificates.map((cert, index) => (
                    <li key={index} style={{ marginBottom: 4 }}>
                      <Typography variant="body1">{cert}</Typography>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Languages */}
              <Section>
                <SectionTitle variant="h2">Languages</SectionTitle>
                <Grid container spacing={1}>
                  {cvData.languages.map((lang, index) => (
                    <React.Fragment key={index}>
                      <Grid item xs={6}>
                        <Typography>{lang.name}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{lang.proficiency}</Typography>
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </Section>

              {/* Interests */}
              <Section>
                <SectionTitle variant="h2">Interests</SectionTitle>
                <Typography variant="body1">
                  {cvData.interests.join(', ')}
                </Typography>
              </Section>
            </Grid>
          </Grid>

          {/* Awards & Achievements */}
          <Section>
            <SectionTitle variant="h2">Awards & Achievements</SectionTitle>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h3">Achievements</Typography>
                <ul style={{ marginTop: 4, paddingLeft: 20 }}>
                  {cvData.achievements.map((achievement, index) => (
                    <li key={index} style={{ marginBottom: 4 }}>
                      <Typography variant="body1">{achievement}</Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h3">Awards</Typography>
                <ul style={{ marginTop: 4, paddingLeft: 20 }}>
                  {cvData.awards.map((award, index) => (
                    <li key={index} style={{ marginBottom: 4 }}>
                      <Typography variant="body1">{award}</Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </Section>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default CVTemplate;