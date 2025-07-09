import React, { useState, useRef } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  IconButton,
  Avatar,
  Grid,
  Chip,
  LinearProgress,
  Divider,
  Link,
  Button,
  Container
} from "@mui/material";
import { LinkedIn, GitHub, Twitter, LightMode, DarkMode, Print, Download } from "@mui/icons-material";
import styled from "@emotion/styled";
import { toPng } from "html-to-image";

// Theme & Font setup
const themes = [
  {
    name: "Classic White",
    bg: "#FFFFFF",
    section: "#F9FAFB",
    text: "#111827",
    accent: "#10B981",
    font: "Inter, sans-serif",
  },
  {
    name: "Light Gray",
    bg: "#F3F4F6",
    section: "#E5E7EB",
    text: "#111827",
    accent: "#10B981",
    font: "Roboto, sans-serif",
  },
  {
    name: "Mint Green",
    bg: "#ECFDF5",
    section: "#D1FAE5",
    text: "#111827",
    accent: "#10B981",
    font: "Open Sans, sans-serif",
  },
  {
    name: "Dark Mode",
    bg: "#111827",
    section: "#1F2937",
    text: "#FFFFFF",
    accent: "#10B981",
    font: "Ubuntu, sans-serif",
  },
];

const CVContainer = styled(Box)`
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  position: relative;
  box-shadow: ${({ theme }) => 
    theme.palette.mode === 'light' 
      ? '0 4px 20px rgba(0,0,0,0.08)' 
      : '0 4px 20px rgba(255,255,255,0.08)'};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.background.default};

  @media print {
    box-shadow: none;
    padding: 1.5rem !important;
    max-width: 100% !important;
    margin: 0 !important;
  }
`;

const Section = styled(Box)`
  background: ${(props) => props.bg};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  @media print {
    background: ${({ theme }) => 
      theme.palette.mode === 'light' ? '#fff' : '#1a1a1a'} !important;
    padding: 1rem !important;
    margin: 0.75rem 0 !important;
  }
`;

const SectionTitle = styled(Typography)`
  font-weight: 700 !important;
  margin-bottom: 1rem !important;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;

const ProgressContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillLabel = styled(Typography)`
  min-width: 120px;
  font-weight: 500 !important;
`;

const PrintHide = styled(Box)`
  @media print {
    display: none !important;
  }
`;

const ExperienceItem = styled(Box)`
  border-left: 3px solid ${({ theme }) => theme.palette.primary.main};
  padding-left: 16px;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: -6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default function ProfessionalCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];
  const cvRef = useRef();

  const theme = createTheme({
    palette: {
      mode: themeIndex === 3 ? "dark" : "light",
      background: { default: active.bg, paper: active.bg },
      text: { primary: active.text },
      primary: { main: active.accent },
    },
    typography: {
      fontFamily: active.font,
      h4: { fontWeight: 700, letterSpacing: 0.5 },
      h5: { fontWeight: 600, letterSpacing: 0.5 },
      body1: { lineHeight: 1.6 }
    },
    components: {
      MuiChip: {
        styleOverrides: {
          root: {
            marginRight: 4,
            marginBottom: 4
          }
        }
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: 6,
            borderRadius: 5
          }
        }
      }
    }
  });

  const nextTheme = () =>
    setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (cvRef.current) {
      toPng(cvRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "rohan-verma-cv.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error("Error downloading CV:", err);
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <PrintHide display="flex" justifyContent="flex-end" mb={2}>
          <IconButton onClick={nextTheme} color="primary" sx={{ mr: 1 }}>
            {themeIndex === 3 ? <LightMode /> : <DarkMode />}
          </IconButton>
          <Button 
            variant="outlined" 
            startIcon={<Print />} 
            onClick={handlePrint}
            sx={{ mr: 1 }}
          >
            Print
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<Download />} 
            onClick={handleDownload}
          >
            Download
          </Button>
        </PrintHide>

        <CVContainer ref={cvRef}>
          {/* Header Section */}
          <Section bg={active.section}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h4" color="primary">Rohan Verma</Typography>
                <Typography variant="h6" sx={{ letterSpacing: 1.5, mt: 0.5 }}>
                  Senior Full Stack Developer
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }}>
                  "Passionate about building scalable web applications with modern JavaScript stacks"
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                <Avatar
                  src="https://via.placeholder.com/150"
                  sx={{ width: 120, height: 120, border: `3px solid ${active.accent}` }}
                />
              </Grid>
            </Grid>
          </Section>

          <Grid container spacing={3}>
            {/* Left Column */}
            <Grid item xs={12} md={5}>
              <Section bg={active.section}>
                <SectionTitle variant="h5" color="primary">Contact</SectionTitle>
                <Box>
                  <Typography>+91 9988776655</Typography>
                  <Typography>rohan.verma@email.com</Typography>
                  <Typography>Mumbai, Maharashtra, India</Typography>
                  <Box mt={2} display="flex">
                    <IconButton color="primary"><LinkedIn /></IconButton>
                    <IconButton color="primary"><GitHub /></IconButton>
                    <IconButton color="primary"><Twitter /></IconButton>
                  </Box>
                </Box>
              </Section>

              <Section bg={active.section}>
                <SectionTitle variant="h5" color="primary">Skills</SectionTitle>
                <Box mt={2}>
                  <ProgressContainer>
                    <SkillLabel>React</SkillLabel>
                    <LinearProgress variant="determinate" value={95} color="primary" sx={{ flexGrow: 1 }} />
                  </ProgressContainer>
                  <ProgressContainer>
                    <SkillLabel>Node.js</SkillLabel>
                    <LinearProgress variant="determinate" value={90} color="primary" sx={{ flexGrow: 1 }} />
                  </ProgressContainer>
                  <ProgressContainer>
                    <SkillLabel>Express</SkillLabel>
                    <LinearProgress variant="determinate" value={85} color="primary" sx={{ flexGrow: 1 }} />
                  </ProgressContainer>
                  <ProgressContainer>
                    <SkillLabel>MongoDB</SkillLabel>
                    <LinearProgress variant="determinate" value={80} color="primary" sx={{ flexGrow: 1 }} />
                  </ProgressContainer>
                  <ProgressContainer>
                    <SkillLabel>REST APIs</SkillLabel>
                    <LinearProgress variant="determinate" value={90} color="primary" sx={{ flexGrow: 1 }} />
                  </ProgressContainer>
                </Box>
              </Section>

              <Section bg={active.section}>
                <SectionTitle variant="h5" color="primary">Languages</SectionTitle>
                <Box mt={1}>
                  <Chip label="English (Fluent)" color="primary" />
                  <Chip label="Hindi (Native)" color="primary" />
                  <Chip label="Marathi (Native)" color="primary" />
                </Box>
              </Section>

              <Section bg={active.section}>
                <SectionTitle variant="h5" color="primary">Interests</SectionTitle>
                <Box mt={1}>
                  <Chip label="🏏 Cricket" color="primary" />
                  <Chip label="📝 Tech Blogging" color="primary" />
                  <Chip label="🚀 Open Source" color="primary" />
                  <Chip label="🎮 Game Development" color="primary" />
                </Box>
              </Section>

              <Section bg={active.section}>
                <SectionTitle variant="h5" color="primary">Awards</SectionTitle>
                <Box mt={1}>
                  <Typography fontWeight={500}>🏆 Best Employee 2023</Typography>
                  <Typography variant="body2" color="textSecondary">DEF Corp</Typography>
                  
                  <Typography fontWeight={500} mt={2}>🏅 Hackathon Winner 2022</Typography>
                  <Typography variant="body2" color="textSecondary">Tech Innovators Challenge</Typography>
                </Box>
              </Section>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={7}>
              <Section bg={active.section}>
                <SectionTitle variant="h5" color="primary">Professional Summary</SectionTitle>
                <Typography>
                  Full-stack developer with 5+ years of experience building scalable web applications. 
                  Specialized in MERN stack with expertise in cloud deployment and CI/CD pipelines. 
                  Passionate about clean code architecture and mentoring junior developers.
                </Typography>
              </Section>

              <Section bg={active.section}>
                <SectionTitle variant="h5" color="primary">Experience</SectionTitle>
                
                <ExperienceItem>
                  <Typography variant="subtitle1" fontWeight={600}>Senior Software Engineer</Typography>
                  <Typography color="primary" fontStyle="italic">DEF Corp | 2021–Present</Typography>
                  <Typography variant="body2" mt={1}>
                    • Led development of enterprise SaaS platform serving 50K+ users<br/>
                    • Reduced API response time by 40% through query optimization<br/>
                    • Implemented CI/CD pipeline reducing deployment time by 70%<br/>
                    • Mentored 5 junior developers in React best practices
                  </Typography>
                </ExperienceItem>
                
                <ExperienceItem>
                  <Typography variant="subtitle1" fontWeight={600}>Software Developer Intern</Typography>
                  <Typography color="primary" fontStyle="italic">GHI Tech | Jan 2020–Jun 2020</Typography>
                  <Typography variant="body2" mt={1}>
                    • Developed RESTful APIs for e-commerce platform<br/>
                    • Created admin dashboard with React and Material UI<br/>
                    • Implemented JWT authentication system<br/>
                    • Reduced server costs by 25% through query optimization
                  </Typography>
                </ExperienceItem>
              </Section>

              <Section bg={active.section}>
                <SectionTitle variant="h5" color="primary">Education</SectionTitle>
                <Box mb={2}>
                  <Typography fontWeight={600}>B.Sc in Information Technology</Typography>
                  <Typography>University of Mumbai | 2017–2020</Typography>
                  <Typography color="textSecondary">CGPA: 9.2/10</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>Diploma in Web Development</Typography>
                  <Typography>Coders Academy | 2016–2017</Typography>
                </Box>
              </Section>

              <Section bg={active.section}>
                <SectionTitle variant="h5" color="primary">Projects</SectionTitle>
                <Grid container spacing={2} mt={1}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 2, borderLeft: `3px solid ${active.accent}`, background: 'rgba(16, 185, 129, 0.05)' }}>
                      <Typography fontWeight={600}>Task Manager Pro</Typography>
                      <Typography variant="body2" mt={1}>
                        Full-stack task management system with real-time updates
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 2, borderLeft: `3px solid ${active.accent}`, background: 'rgba(16, 185, 129, 0.05)' }}>
                      <Typography fontWeight={600}>Portfolio Builder</Typography>
                      <Typography variant="body2" mt={1}>
                        Drag-and-drop portfolio generator with 20+ templates
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 2, borderLeft: `3px solid ${active.accent}`, background: 'rgba(16, 185, 129, 0.05)' }}>
                      <Typography fontWeight={600}>E-commerce CMS</Typography>
                      <Typography variant="body2" mt={1}>
                        Headless CMS for product management with analytics
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Section>

              <Section bg={active.section}>
                <SectionTitle variant="h5" color="primary">Certifications</SectionTitle>
                <Box mt={1}>
                  <Chip label="AWS Certified Developer - Associate" color="primary" />
                  <Chip label="Google Cloud Professional Developer" color="primary" />
                  <Chip label="Docker Certified Associate" color="primary" />
                  <Chip label="MongoDB Certified Developer" color="primary" />
                </Box>
              </Section>
            </Grid>
          </Grid>
        </CVContainer>
      </Container>
    </ThemeProvider>
  );
}