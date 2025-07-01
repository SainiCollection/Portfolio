import React, { useState, useRef } from 'react';
import { 
  Box, Button, Container, CssBaseline, Grid, IconButton, 
  Paper, ThemeProvider, Typography, createTheme, 
  useMediaQuery, styled, Switch, FormControlLabel, 
  LinearProgress, Avatar, Divider, Chip
} from '@mui/material';
import { Print, Download, LightMode, DarkMode } from '@mui/icons-material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Styled components with modern design
const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.mode === 'dark' ? 
    theme.palette.background.paper : theme.palette.grey[50],
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(3),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '60px',
    height: '4px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '2px',
  },
}));

const SkillBadge = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: '6px',
  fontWeight: 500,
  backgroundColor: theme.palette.mode === 'dark' ? 
    theme.palette.primary.dark : theme.palette.primary.light,
  color: theme.palette.getContrastText(
    theme.palette.mode === 'dark' ? 
      theme.palette.primary.dark : theme.palette.primary.light
  ),
}));

// CV Template Component
const ModernCVTemplate = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState('Poppins');
  const cvRef = useRef(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  
  const handleFontChange = (font) => {
    setFontFamily(font);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#64b5f6' : '#1565c0',
      },
      secondary: {
        main: darkMode ? '#ffb74d' : '#e64a19',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f7fa',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: fontFamily,
      h1: { fontSize: '2.4rem', fontWeight: 700, letterSpacing: '0.5px' },
      h2: { fontSize: '1.8rem', fontWeight: 600, marginBottom: '0.5rem' },
      h3: { fontSize: '1.4rem', fontWeight: 500 },
      h4: { fontSize: '1.1rem', fontWeight: 500 },
      body1: { fontSize: '0.95rem', lineHeight: '1.7' },
      body2: { fontSize: '0.9rem', color: 'text.secondary' },
    },
    shape: {
      borderRadius: 12,
    },
  });

  const handlePrint = () => {
    window.print();
  };

  const downloadPDF = () => {
    const input = cvRef.current;
    html2canvas(input, { scale: 3 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('professional-cv.pdf');
    });
  };

  // Sample CV data
  const cvData = {
    fullName: "Sarah Williams",
    title: "Senior UX Designer",
    phone: "+1 (415) 555-1234",
    email: "sarah.williams@example.com",
    city: "San Francisco",
    country: "USA",
    socialLinks: [
      { name: "LinkedIn", url: "linkedin.com/in/sarahwilliams" },
      { name: "Dribbble", url: "dribbble.com/sarahwilliams" },
      { name: "Behance", url: "behance.net/sarahwilliams" }
    ],
    summary: "Creative Senior UX Designer with 7+ years of experience creating intuitive and engaging user experiences for web and mobile applications. Passionate about user-centered design, design systems, and accessibility. Proven track record of improving user satisfaction and business metrics through thoughtful design solutions.",
    skills: [
      { name: "User Research", level: 95 },
      { name: "UI Design", level: 90 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 85 },
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 85 },
      { name: "User Testing", level: 90 },
      { name: "Design Systems", level: 85 },
    ],
    experience: [
      {
        title: "Senior UX Designer",
        company: "InnovateTech Inc.",
        period: "2020 - Present",
        description: "Lead designer for enterprise SaaS products serving Fortune 500 companies.",
        achievements: [
          "Redesigned core product dashboard, increasing user engagement by 45%",
          "Created comprehensive design system used across 12 products",
          "Mentored junior designers and conducted design workshops"
        ]
      },
      {
        title: "UX Designer",
        company: "Digital Solutions Co.",
        period: "2017 - 2020",
        description: "Designed user experiences for e-commerce and fintech applications.",
        achievements: [
          "Improved checkout conversion rate by 28% through UX enhancements",
          "Conducted user research studies with 500+ participants",
          "Collaborated with developers to implement responsive designs"
        ]
      },
      {
        title: "Junior UI Designer",
        company: "Creative Studio",
        period: "2015 - 2017",
        description: "Created visual designs for websites and mobile applications.",
        achievements: [
          "Designed 30+ client websites with positive feedback",
          "Developed brand identities for startups",
          "Learned UX principles and methodologies"
        ]
      }
    ],
    education: [
      {
        degree: "M.S. Human-Computer Interaction",
        institution: "Stanford University",
        period: "2013 - 2015",
        description: "Focus on UX Research and Design"
      },
      {
        degree: "B.A. Graphic Design",
        institution: "California College of Arts",
        period: "2009 - 2013",
        description: "Minor in Psychology"
      }
    ],
    projects: [
      {
        name: "Healthcare App Redesign",
        technologies: "Figma, User Testing, Accessibility",
        description: "Complete redesign of healthcare application improving accessibility and user satisfaction scores"
      },
      {
        name: "E-commerce Design System",
        technologies: "Design Tokens, Component Library, Documentation",
        description: "Created comprehensive design system for large e-commerce platform"
      }
    ],
    certificates: [
      "NN/g UX Certification",
      "Google UX Design Professional Certificate",
      "Accessibility for Designers Certification"
    ],
    achievements: [
      "Design Award 2022 - Best Enterprise Application",
      "Employee of the Year 2021",
      "Top Performer Award 2019"
    ],
    languages: [
      { name: "English", proficiency: "Native" },
      { name: "Spanish", proficiency: "Professional" },
      { name: "French", proficiency: "Conversational" }
    ],
    interests: ["Photography", "Hiking", "User Psychology", "Design Conferences"]
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Control Panel */}
        <Paper sx={{ 
          mb: 4, 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          p: 3,
          borderRadius: 2,
          boxShadow: 2
        }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            PROFESSIONAL CV BUILDER
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LightMode sx={{ color: darkMode ? 'text.disabled' : 'primary.main' }} />
              <Switch 
                checked={darkMode} 
                onChange={toggleDarkMode} 
                color="primary"
                sx={{ mx: 1 }}
              />
              <DarkMode sx={{ color: darkMode ? 'primary.main' : 'text.disabled' }} />
            </Box>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button 
                variant={fontFamily === 'Poppins' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => handleFontChange('Poppins')}
                sx={{ textTransform: 'none' }}
              >
                Poppins
              </Button>
              <Button 
                variant={fontFamily === 'Montserrat' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => handleFontChange('Montserrat')}
                sx={{ textTransform: 'none' }}
              >
                Montserrat
              </Button>
              <Button 
                variant={fontFamily === 'Lato' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => handleFontChange('Lato')}
                sx={{ textTransform: 'none' }}
              >
                Lato
              </Button>
            </Box>
          </Box>
          
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
              variant="contained" 
              color="secondary"
              startIcon={<Download />}
              onClick={downloadPDF}
            >
              Download PDF
            </Button>
          </Box>
        </Paper>

        {/* CV Container - A4 Size */}
        <Paper 
          ref={cvRef}
          elevation={3}
          sx={{
            width: '210mm',
            minHeight: '297mm',
            mx: 'auto',
            p: '25mm',
            display: 'flex',
            flexDirection: 'column',
            background: darkMode ? 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            '@media print': {
              boxShadow: 'none',
              width: '100%',
              height: '100%',
              margin: 0,
              padding: '20mm',
            }
          }}
        >
          {/* Header */}
          <Box sx={{ 
            mb: 4, 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Box>
              <Typography variant="h1" sx={{ 
                color: 'primary.main',
                fontWeight: 800,
                letterSpacing: '-0.5px',
                mb: 1
              }}>
                {cvData.fullName}
              </Typography>
              <Typography variant="h4" sx={{ 
                fontWeight: 400,
                color: 'text.secondary',
                letterSpacing: '1px'
              }}>
                {cvData.title}
              </Typography>
            </Box>
            <Avatar sx={{ 
              width: 120, 
              height: 120, 
              fontSize: '3rem',
              bgcolor: 'primary.main',
              color: 'primary.contrastText'
            }}>
              SW
            </Avatar>
          </Box>
          
          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={5}>
              {/* Contact Information */}
              <Section>
                <SectionTitle variant="h2">Contact</SectionTitle>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>Phone:</Typography>
                  <Typography variant="body1">{cvData.phone}</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>Email:</Typography>
                  <Typography variant="body1">{cvData.email}</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>Location:</Typography>
                  <Typography variant="body1">{cvData.city}, {cvData.country}</Typography>
                </Box>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>Social:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {cvData.socialLinks.map((link, index) => (
                      <Chip 
                        key={index}
                        label={link.name}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ borderRadius: '4px' }}
                      />
                    ))}
                  </Box>
                </Box>
              </Section>

              {/* Skills */}
              <Section>
                <SectionTitle variant="h2">Skills</SectionTitle>
                {cvData.skills.map((skill, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1">{skill.name}</Typography>
                      <Typography variant="body2">{skill.level}%</Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        backgroundColor: 'action.disabledBackground',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 'primary.main',
                          borderRadius: 4
                        }
                      }} 
                    />
                  </Box>
                ))}
              </Section>

              {/* Languages */}
              <Section>
                <SectionTitle variant="h2">Languages</SectionTitle>
                {cvData.languages.map((lang, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body1">{lang.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {lang.proficiency}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Section>

              {/* Interests */}
              <Section>
                <SectionTitle variant="h2">Interests</SectionTitle>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {cvData.interests.map((interest, index) => (
                    <Chip 
                      key={index} 
                      label={interest} 
                      size="small" 
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Section>
            </Grid>

            {/* Right Column */}
            <Grid item xs={7}>
              {/* Summary */}
              <Section>
                <SectionTitle variant="h2">Profile</SectionTitle>
                <Typography variant="body1">{cvData.summary}</Typography>
              </Section>

              {/* Experience */}
              <Section>
                <SectionTitle variant="h2">Experience</SectionTitle>
                {cvData.experience.map((exp, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h3">{exp.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{exp.period}</Typography>
                    </Box>
                    <Typography variant="body1" color="primary.main" sx={{ fontStyle: 'italic', mb: 1 }}>
                      {exp.company}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>{exp.description}</Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} style={{ marginBottom: '8px' }}>
                          <Typography variant="body1">• {achievement}</Typography>
                        </li>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Section>

              <Grid container spacing={3}>
                {/* Education */}
                <Grid item xs={6}>
                  <Section>
                    <SectionTitle variant="h2">Education</SectionTitle>
                    {cvData.education.map((edu, index) => (
                      <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600 }}>{edu.degree}</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>{edu.institution}</Typography>
                        <Typography variant="body2" color="text.secondary">{edu.period}</Typography>
                        <Typography variant="body2">{edu.description}</Typography>
                      </Box>
                    ))}
                  </Section>
                </Grid>

                {/* Projects */}
                <Grid item xs={6}>
                  <Section>
                    <SectionTitle variant="h2">Projects</SectionTitle>
                    {cvData.projects.map((project, index) => (
                      <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600 }}>{project.name}</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 1 }}>
                          {project.technologies.split(', ').map((tech, i) => (
                            <Chip key={i} label={tech} size="small" color="primary" variant="outlined" />
                          ))}
                        </Box>
                        <Typography variant="body2">{project.description}</Typography>
                      </Box>
                    ))}
                  </Section>
                </Grid>
              </Grid>

              {/* Certificates & Achievements */}
              <Grid container spacing={3} sx={{ mt: 0 }}>
                <Grid item xs={6}>
                  <Section>
                    <SectionTitle variant="h2">Certificates</SectionTitle>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {cvData.certificates.map((cert, index) => (
                        <li key={index} style={{ marginBottom: '8px' }}>
                          <Typography variant="body1">• {cert}</Typography>
                        </li>
                      ))}
                    </Box>
                  </Section>
                </Grid>
                <Grid item xs={6}>
                  <Section>
                    <SectionTitle variant="h2">Achievements</SectionTitle>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {cvData.achievements.map((achievement, index) => (
                        <li key={index} style={{ marginBottom: '8px' }}>
                          <Typography variant="body1">• {achievement}</Typography>
                        </li>
                      ))}
                    </Box>
                  </Section>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
          {/* Footer */}
          <Divider sx={{ my: 3 }} />
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 'auto',
            pt: 2
          }}>
            <Typography variant="body2" color="text.secondary">
              References available upon request
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last updated: {new Date().toLocaleDateString()}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default ModernCVTemplate;