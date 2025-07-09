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
  Button,
  LinearProgress,
  Container,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  CloudDownload,
  OpenInNew,
  LightMode,
  DarkMode,
  Print,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import { toPng } from "html-to-image";

// Themes
const themes = [
  {
    name: "Teal-White",
    bg: "#FFFFFF",
    text: "#111827",
    accent: "#14B8A6",
    headerFont: "Inter, sans-serif",
    bodyFont: "IBM Plex Sans, sans-serif",
  },
  {
    name: "Midnight Blue",
    bg: "#0F172A",
    text: "#FFFFFF",
    accent: "#3B82F6",
    headerFont: "Inter, sans-serif",
    bodyFont: "IBM Plex Sans, sans-serif",
  },
  {
    name: "Warm Sand",
    bg: "#F5F5DC",
    text: "#111827",
    accent: "#D97706",
    headerFont: "Inter, sans-serif",
    bodyFont: "IBM Plex Sans, sans-serif",
  },
  {
    name: "Slate Black",
    bg: "#1E293B",
    text: "#FFFFFF",
    accent: "#14B8A6",
    headerFont: "Inter, sans-serif",
    bodyFont: "IBM Plex Sans, sans-serif",
  },
];

const CVContainer = styled(Box)`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  position: relative;
  background: ${({ theme }) => theme.palette.background.default};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  @media print {
    box-shadow: none;
    padding: 1.5rem !important;
    max-width: 100% !important;
    margin: 0 !important;
  }
`;

const Section = styled(Box)`
  margin-bottom: 2rem;
`;

const SectionTitle = styled(Typography)`
  font-weight: 700 !important;
  margin-bottom: 1rem !important;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
`;

const SkillBar = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SkillLabel = styled(Typography)`
  min-width: 120px;
  font-weight: 500 !important;
`;

const ProjectCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.palette.primary.main}30;
  border-radius: 8px;
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.palette.primary.main}80;
  }
`;

const PrintHide = styled(Box)`
  @media print {
    display: none !important;
  }
`;

export default function PortfolioCVHybrid() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];
  const cvRef = useRef();

  const theme = createTheme({
    palette: {
      mode: themeIndex === 1 || themeIndex === 3 ? "dark" : "light",
      background: { default: active.bg, paper: active.bg },
      text: { primary: active.text },
      primary: { main: active.accent },
    },
    typography: {
      fontFamily: active.bodyFont,
      h4: { 
        fontFamily: active.headerFont, 
        fontWeight: 700,
        letterSpacing: 0.5
      },
      h5: { 
        fontFamily: active.headerFont, 
        fontWeight: 600,
        letterSpacing: 0.5
      },
      body1: { lineHeight: 1.6 }
    },
    components: {
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: 8,
            borderRadius: 4
          }
        }
      }
    }
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (cvRef.current) {
      toPng(cvRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "vikas-joshi-cv.png";
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
            {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
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
            startIcon={<CloudDownload />} 
            onClick={handleDownload}
          >
            Download PNG
          </Button>
        </PrintHide>

        <CVContainer ref={cvRef}>
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h4" sx={{ fontFamily: active.headerFont }}>
              Vikas Joshi
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Frontend Developer & UI/UX Designer
            </Typography>
          </Box>

          {/* Hero */}
          <Grid container spacing={4} mt={2}>
            <Grid item xs={12} md={3}>
              <Avatar
                src="https://via.placeholder.com/200"
                sx={{ 
                  width: 200, 
                  height: 200,
                  border: `3px solid ${active.accent}`
                }}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Box>
                <Typography variant="body1" mb={1}>
                  <Box component="span" fontWeight="bold">Phone:</Box> +91 9112345678
                </Typography>
                <Typography variant="body1" mb={1}>
                  <Box component="span" fontWeight="bold">Email:</Box> vikas.joshi@email.com
                </Typography>
                <Typography variant="body1" mb={1}>
                  <Box component="span" fontWeight="bold">Location:</Box> Lucknow, UP, India
                </Typography>
                <Box mt={1}>
                  <IconButton color="primary"><LinkedIn /></IconButton>
                  <IconButton color="primary"><GitHub /></IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Summary */}
          <Section mt={4}>
            <Typography
              variant="h5"
              sx={{ 
                fontStyle: "italic", 
                borderLeft: `4px solid ${active.accent}`, 
                pl: 2,
                color: "primary.main"
              }}
            >
              "Frontend Dev + Designer. Build it. Brand it. Ship it."
            </Typography>
          </Section>

          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              {/* Skills */}
              <Section>
                <SectionTitle variant="h5" color="primary">Technical Skills</SectionTitle>
                {[
                  { skill: "React", level: 95 },
                  { skill: "Next.js", level: 90 },
                  { skill: "Material UI", level: 85 },
                  { skill: "Three.js", level: 75 },
                  { skill: "Figma", level: 80 },
                  { skill: "TypeScript", level: 85 },
                  { skill: "Node.js", level: 70 },
                ].map((item) => (
                  <SkillBar key={item.skill}>
                    <SkillLabel>{item.skill}</SkillLabel>
                    <LinearProgress 
                      variant="determinate" 
                      value={item.level} 
                      color="primary" 
                      sx={{ flexGrow: 1, ml: 2 }}
                    />
                  </SkillBar>
                ))}
              </Section>

              {/* Experience */}
              <Section>
                <SectionTitle variant="h5" color="primary">Professional Experience</SectionTitle>
                <Box mb={3}>
                  <Typography variant="subtitle1" fontWeight={600}>Senior Frontend Developer</Typography>
                  <Typography color="primary" fontStyle="italic">Tech Innovations Pvt Ltd | 2021–Present</Typography>
                  <Typography variant="body2" mt={1}>
                    • Developed responsive web applications using React and Next.js<br/>
                    • Created design systems used across 10+ products<br/>
                    • Reduced page load times by 40% through optimization
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>UI/UX Designer</Typography>
                  <Typography color="primary" fontStyle="italic">Digital Creations | 2019–2021</Typography>
                  <Typography variant="body2" mt={1}>
                    • Designed user interfaces for SaaS applications<br/>
                    • Created interactive prototypes using Figma<br/>
                    • Collaborated with developers on implementation
                  </Typography>
                </Box>
              </Section>

              {/* Education */}
              <Section>
                <SectionTitle variant="h5" color="primary">Education</SectionTitle>
                <Box mb={2}>
                  <Typography fontWeight={600}>B.Sc Computer Science</Typography>
                  <Typography>Aligarh Muslim University | 2015–2019</Typography>
                  <Typography color="textSecondary">CGPA: 8.7/10</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>Diploma in UI/UX Design</Typography>
                  <Typography>Design Institute of India | 2018</Typography>
                </Box>
              </Section>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={6}>
              {/* Projects */}
              <Section>
                <SectionTitle variant="h5" color="primary">Featured Projects</SectionTitle>
                <Grid container spacing={2} mt={1}>
                  {[
                    { 
                      title: "Portfolio Showcase", 
                      desc: "Interactive portfolio with 3D elements using Three.js",
                      tech: ["React", "Three.js", "Framer Motion"]
                    },
                    { 
                      title: "SaaS Analytics Dashboard", 
                      desc: "Real-time analytics platform for business metrics",
                      tech: ["Next.js", "Material UI", "Chart.js"]
                    },
                    { 
                      title: "3D Product Showcase", 
                      desc: "Immersive e-commerce experience with 3D product visualization",
                      tech: ["React", "Three.js", "Blender"]
                    }
                  ].map((project) => (
                    <Grid item xs={12} key={project.title}>
                      <ProjectCard>
                        <CardContent>
                          <Typography variant="h6" fontWeight={600}>{project.title}</Typography>
                          <Typography variant="body2" mt={1} mb={2}>
                            {project.desc}
                          </Typography>
                          <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                            {project.tech.map(tech => (
                              <Chip key={tech} label={tech} color="primary" size="small" />
                            ))}
                          </Box>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            startIcon={<OpenInNew />}
                          >
                            View Project
                          </Button>
                        </CardContent>
                      </ProjectCard>
                    </Grid>
                  ))}
                </Grid>
              </Section>

              {/* Certificates & Achievements */}
              <Section>
                <SectionTitle variant="h5" color="primary">Certifications</SectionTitle>
                <Box mb={2}>
                  <Typography fontWeight={500}>• Meta Frontend Professional Certificate</Typography>
                  <Typography fontWeight={500}>• Google UX Design Professional Certificate</Typography>
                  <Typography fontWeight={500}>• AWS Certified Cloud Practitioner</Typography>
                </Box>
                
                <SectionTitle variant="h5" color="primary">Achievements</SectionTitle>
                <Typography>
                  • Created India's first interactive VR portfolio<br/>
                  • Featured in "Top 50 Designers to Watch" list<br/>
                  • Open source contributor to Material UI
                </Typography>
              </Section>

              {/* Languages & Interests */}
              <Section>
                <SectionTitle variant="h5" color="primary">Languages</SectionTitle>
                <Box mb={2} display="flex" gap={1}>
                  <Chip label="English (Professional)" color="primary" />
                  <Chip label="Hindi (Native)" color="primary" />
                </Box>
                
                <SectionTitle variant="h5" color="primary">Interests</SectionTitle>
                <Box display="flex" gap={1}>
                  <Chip label="🎨 3D Art" color="primary" />
                  <Chip label="✨ Web Animation" color="primary" />
                  <Chip label="📱 UI Experimentation" color="primary" />
                </Box>
              </Section>

              {/* Awards */}
              <Section>
                <SectionTitle variant="h5" color="primary">Awards</SectionTitle>
                <Box>
                  <Typography fontWeight={500}>🏆 Top 50 Designer Showcase - 2023</Typography>
                  <Typography variant="body2" color="textSecondary">Design Excellence Awards</Typography>
                  
                  <Typography fontWeight={500} mt={1}>🥇 Best UI Innovation - 2022</Typography>
                  <Typography variant="body2" color="textSecondary">India Tech Summit</Typography>
                </Box>
              </Section>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: "primary.main" }} />
          <Box textAlign="center">
            <Typography variant="body2">
              Designed with React & Material UI • vikas-joshi-portfolio.com
            </Typography>
          </Box>
        </CVContainer>
      </Container>
    </ThemeProvider>
  );
}