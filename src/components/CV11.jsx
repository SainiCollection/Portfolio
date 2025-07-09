import React, { useState, useRef } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Grid,
  Typography,
  Divider,
  IconButton,
  Chip,
  Button,
  LinearProgress,
  Container,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Web,
  Twitter,
  Download,
  LightMode,
  DarkMode,
  Print,
  CheckCircle,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import { toPng } from "html-to-image";

// 4 Themes
const themes = [
  {
    name: "Royal Blue",
    accent: "#1E40AF",
    bg: "#FFFFFF",
    text: "#111827",
    headerFont: "Inter, sans-serif",
    bodyFont: "Inter, sans-serif",
  },
  {
    name: "Charcoal Gray",
    accent: "#2D2D2D",
    bg: "#F9FAFB",
    text: "#111827",
    headerFont: "Manrope, sans-serif",
    bodyFont: "Manrope, sans-serif",
  },
  {
    name: "Deep Teal",
    accent: "#0F766E",
    bg: "#FFFFFF",
    text: "#111827",
    headerFont: "Manrope, sans-serif",
    bodyFont: "Manrope, sans-serif",
  },
  {
    name: "Warm Olive",
    accent: "#5B5B00",
    bg: "#FFFFFF",
    text: "#111827",
    headerFont: "Inter, sans-serif",
    bodyFont: "Inter, sans-serif",
  },
];

const CVContainer = styled(Box)`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  background: ${({ theme }) => theme.palette.background.default};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  @media print {
    box-shadow: none;
    padding: 1.5rem !important;
    max-width: 100% !important;
    margin: 0 !important;
  }
`;

const Section = styled(Box)`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled(Typography)`
  font-weight: 700 !important;
  margin-bottom: 1rem !important;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
`;

const PrintHide = styled(Box)`
  @media print {
    display: none !important;
  }
`;

const ExperienceItem = styled(Box)`
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 16px;
  border-left: 2px solid ${({ theme }) => theme.palette.primary.main};
  
  &::before {
    content: "";
    position: absolute;
    left: -6px;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default function CorporateBlockCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];
  const cvRef = useRef();

  const theme = createTheme({
    palette: {
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

  const skills = [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Redux", level: 85 },
    { name: "TailwindCSS", level: 90 },
    { name: "Material UI", level: 95 },
    { name: "Figma", level: 80 },
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (cvRef.current) {
      toPng(cvRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "vishal-saini-cv.png";
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
            startIcon={<Download />} 
            onClick={handleDownload}
          >
            Download
          </Button>
        </PrintHide>

        <CVContainer ref={cvRef}>
          {/* Header */}
          <Box mb={3} textAlign="center">
            <Typography variant="h4" color="primary">Vishal Saini</Typography>
            <Typography variant="h6">Frontend Team Lead</Typography>
            <Box mt={1}>
              <Typography>+91 9876543210 | vishal.saini@email.com</Typography>
              <Typography>Gurgaon, Haryana, India</Typography>
            </Box>
            <Box mt={1}>
              <IconButton color="primary"><LinkedIn /></IconButton>
              <IconButton color="primary"><GitHub /></IconButton>
              <IconButton color="primary"><Web /></IconButton>
              <IconButton color="primary"><Twitter /></IconButton>
            </Box>
          </Box>

          <Divider sx={{ my: 2, borderColor: "primary.main" }} />

          {/* Summary */}
          <Section>
            <SectionTitle variant="h5" color="primary">Professional Summary</SectionTitle>
            <Typography>
              Frontend Team Lead with 6+ years of experience building scalable React applications 
              and leading agile teams. Specialized in modern JavaScript frameworks and UI/UX design. 
              Passionate about mentoring developers and creating efficient development processes.
            </Typography>
          </Section>

          <Divider sx={{ my: 2, borderColor: "primary.main" }} />

          <Grid container spacing={3}>
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              {/* Skills */}
              <Section>
                <SectionTitle variant="h5" color="primary">Technical Skills</SectionTitle>
                <Grid container spacing={2}>
                  {skills.map((skill) => (
                    <Grid item xs={12} key={skill.name}>
                      <Typography variant="body2" fontWeight={500}>{skill.name}</Typography>
                      <LinearProgress 
                        variant="determinate" 
                        value={skill.level} 
                        color="primary" 
                      />
                    </Grid>
                  ))}
                </Grid>
              </Section>

              {/* Languages & Interests */}
              <Section>
                <SectionTitle variant="h5" color="primary">Languages</SectionTitle>
                <Box display="flex" gap={1} flexWrap="wrap" mt={1}>
                  <Chip label="English (Professional)" color="primary" />
                  <Chip label="Hindi (Native)" color="primary" />
                  <Chip label="Punjabi (Native)" color="primary" />
                </Box>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Interests</SectionTitle>
                <Box display="flex" gap={1} flexWrap="wrap" mt={1}>
                  <Chip label="UI/UX Design" color="primary" />
                  <Chip label="Open Source" color="primary" />
                  <Chip label="Public Speaking" color="primary" />
                  <Chip label="Tech Blogging" color="primary" />
                </Box>
              </Section>

              {/* Education */}
              <Section>
                <SectionTitle variant="h5" color="primary">Education</SectionTitle>
                <Box>
                  <Typography fontWeight={600}>B.Tech Computer Science</Typography>
                  <Typography>Delhi Technological University | 2013-2017</Typography>
                  <Typography color="textSecondary">CGPA: 8.7/10</Typography>
                </Box>
              </Section>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={6}>
              {/* Experience */}
              <Section>
                <SectionTitle variant="h5" color="primary">Professional Experience</SectionTitle>
                
                <ExperienceItem>
                  <Typography variant="subtitle1" fontWeight={600}>Frontend Team Lead</Typography>
                  <Typography color="primary" fontStyle="italic">ABC Solutions | 2022–Present</Typography>
                  <Typography variant="body2" mt={1}>
                    • Lead team of 8 developers building enterprise React applications<br/>
                    • Reduced production bugs by 40% through improved testing processes<br/>
                    • Implemented CI/CD pipeline reducing deployment time by 65%<br/>
                    • Mentored 3 junior developers to senior level
                  </Typography>
                </ExperienceItem>
                
                <ExperienceItem>
                  <Typography variant="subtitle1" fontWeight={600}>Senior Frontend Developer</Typography>
                  <Typography color="primary" fontStyle="italic">XYZ Pvt Ltd | 2019–2022</Typography>
                  <Typography variant="body2" mt={1}>
                    • Developed custom UI component library used across 12+ products<br/>
                    • Optimized application performance improving Lighthouse scores by 35%<br/>
                    • Implemented design system reducing development time by 30%<br/>
                    • Collaborated with UX designers on product interfaces
                  </Typography>
                </ExperienceItem>
              </Section>

              {/* Projects */}
              <Section>
                <SectionTitle variant="h5" color="primary">Key Projects</SectionTitle>
                <Box mb={2}>
                  <Typography fontWeight={600}>E-commerce Admin Dashboard</Typography>
                  <Typography variant="body2">
                    Comprehensive management platform for online retailers. Built with React, 
                    Material UI, and Node.js. Handles 500K+ monthly transactions.
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography fontWeight={600}>Custom CMS Platform</Typography>
                  <Typography variant="body2">
                    Headless CMS solution for content editors. Features drag-and-drop interface 
                    and real-time collaboration.
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>Team Collaboration Tool</Typography>
                  <Typography variant="body2">
                    Real-time project management application with task tracking and reporting features.
                  </Typography>
                </Box>
              </Section>
            </Grid>
          </Grid>

          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} md={6}>
              {/* Certificates */}
              <Section>
                <SectionTitle variant="h5" color="primary">Certifications</SectionTitle>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <Typography>Google UX Design Professional</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <Typography>Meta Frontend Developer Certification</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <Typography>AWS Certified Developer</Typography>
                  </ListItem>
                </List>
              </Section>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Achievements */}
              <Section>
                <SectionTitle variant="h5" color="primary">Achievements</SectionTitle>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>• Employee of the Year 2023</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>• Speaker at React Summit 2024</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>• Top Contributor to Open Source Libraries</Typography>
                  </ListItem>
                </List>
              </Section>
            </Grid>
          </Grid>

          <Section>
            <SectionTitle variant="h5" color="primary">Awards</SectionTitle>
            <Box display="flex" alignItems="center">
              <Typography fontWeight={600}>🏆 Best Team Lead Award 2023</Typography>
              <Typography variant="body2" ml={1}>| Tech Excellence Conference</Typography>
            </Box>
          </Section>

          <Divider sx={{ my: 2, borderColor: "primary.main" }} />
          <Box textAlign="center">
            <Typography variant="body2">www.vishal.codes | vishal.saini@email.com</Typography>
          </Box>
        </CVContainer>
      </Container>
    </ThemeProvider>
  );
}