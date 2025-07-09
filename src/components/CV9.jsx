import React, { useState, useRef } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  Grid,
  IconButton,
  Avatar,
  Chip,
  Button,
  Divider,
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
  LightMode,
  DarkMode,
  CheckCircle,
  Print,
  Download,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import { toPng } from "html-to-image";
import QRCode from "react-qr-code";

// 4 Themes
const themes = [
  {
    name: "Corporate Blue",
    bg: "#FFFFFF",
    text: "#111827",
    accent: "#2563EB",
    headerFont: "Manrope, sans-serif",
    bodyFont: "Open Sans, sans-serif",
  },
  {
    name: "Navy Gold",
    bg: "#FFFFFF",
    text: "#111827",
    accent: "#C084FC",
    headerFont: "Manrope, sans-serif",
    bodyFont: "Open Sans, sans-serif",
  },
  {
    name: "Cool Gray",
    bg: "#F3F4F6",
    text: "#111827",
    accent: "#6B7280",
    headerFont: "Manrope, sans-serif",
    bodyFont: "Open Sans, sans-serif",
  },
  {
    name: "Forest Green",
    bg: "#FFFFFF",
    text: "#111827",
    accent: "#16A34A",
    headerFont: "Manrope, sans-serif",
    bodyFont: "Open Sans, sans-serif",
  },
];

const CVContainer = styled(Box)`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  position: relative;
  background: ${({ theme }) => theme.palette.background.default};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

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

export default function CorporateBlueGridCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];
  const cvRef = useRef();

  const theme = createTheme({
    palette: {
      mode: "light",
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
      MuiChip: {
        styleOverrides: {
          root: {
            marginRight: 1,
            marginBottom: 1,
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
          link.download = "ritu-kapoor-cv.png";
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
          <Grid container justifyContent="space-between" alignItems="center" mb={4}>
            <Box>
              <Typography variant="h4">Ritu Kapoor</Typography>
              <Typography variant="h6" color="primary">
                Senior Software Engineer
              </Typography>
            </Box>
            <Avatar
              src="https://via.placeholder.com/150"
              sx={{ 
                width: 120, 
                height: 120,
                border: `3px solid ${active.accent}`
              }}
            />
          </Grid>

          {/* Contact Info */}
          <Box mb={4} display="flex" justifyContent="space-between">
            <Box>
              <Typography>+91 9876054321</Typography>
              <Typography>ritu.kapoor@email.com</Typography>
              <Typography>Indore, MP, India</Typography>
            </Box>
            <Box>
              <IconButton color="primary"><LinkedIn /></IconButton>
              <IconButton color="primary"><GitHub /></IconButton>
            </Box>
          </Box>

          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} md={8}>
              <Section>
                <SectionTitle variant="h5" color="primary">Professional Summary</SectionTitle>
                <Typography>
                  Senior Software Engineer with 8+ years of experience in enterprise software development.
                  Specialized in building scalable web applications using modern JavaScript frameworks
                  and cloud technologies. Proven track record of leading teams to deliver complex projects
                  on time.
                </Typography>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Technical Skills</SectionTitle>
                <Grid container spacing={1}>
                  {[
                    "React", "Redux", "Node.js", "Java", "AWS", 
                    "Microservices", "Docker", "Kubernetes", "TypeScript",
                    "GraphQL", "MongoDB", "PostgreSQL"
                  ].map((skill) => (
                    <Grid item key={skill}>
                      <Chip label={skill} color="primary" variant="outlined" />
                    </Grid>
                  ))}
                </Grid>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Professional Experience</SectionTitle>
                
                <ExperienceItem>
                  <Typography variant="subtitle1" fontWeight={600}>Tech Lead</Typography>
                  <Typography color="primary" fontStyle="italic">Infosys | 2021–Present</Typography>
                  <Typography variant="body2" mt={1}>
                    • Led team of 8 developers in building enterprise SaaS platform<br/>
                    • Reduced deployment time by 60% through CI/CD implementation<br/>
                    • Architected microservices solution handling 500K+ requests/day<br/>
                    • Mentored junior developers in React best practices
                  </Typography>
                </ExperienceItem>
                
                <ExperienceItem>
                  <Typography variant="subtitle1" fontWeight={600}>Senior Software Engineer</Typography>
                  <Typography color="primary" fontStyle="italic">Tech Solutions Pvt Ltd | 2018–2021</Typography>
                  <Typography variant="body2" mt={1}>
                    • Developed RESTful APIs for financial services platform<br/>
                    • Implemented frontend components using React and Redux<br/>
                    • Improved application performance by 40% through optimization<br/>
                    • Collaborated with UX designers on product interfaces
                  </Typography>
                </ExperienceItem>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Education</SectionTitle>
                <Box mb={2}>
                  <Typography fontWeight={600}>M.Tech Software Engineering</Typography>
                  <Typography>IIT BHU | 2014–2016</Typography>
                  <Typography color="textSecondary">CGPA: 9.2/10</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>B.Tech Computer Science</Typography>
                  <Typography>NIT Bhopal | 2010–2014</Typography>
                </Box>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Key Projects</SectionTitle>
                <Box mb={3}>
                  <Typography fontWeight={600}>Enterprise SaaS Platform</Typography>
                  <Typography variant="body2">
                    Led development of cloud-based SaaS solution for enterprise resource planning.
                    Built with React, Node.js, and MongoDB. Serves 200+ clients with 99.9% uptime.
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>ERP System Modernization</Typography>
                  <Typography variant="body2">
                    Modernized legacy ERP system using microservices architecture. Reduced transaction
                    processing time by 65% and improved system reliability.
                  </Typography>
                </Box>
              </Section>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={4}>
              <Section>
                <SectionTitle variant="h5" color="primary">Certifications</SectionTitle>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <Typography>AWS Certified Solutions Architect</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <Typography>Google Cloud Professional Developer</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <Typography>Microsoft Certified: Azure Developer</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <Typography>Scrum Master Certification</Typography>
                  </ListItem>
                </List>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Achievements</SectionTitle>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <Typography>Best Tech Lead Award 2023</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <Typography>Patent for Optimization Algorithm</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <Typography>Published 5 technical papers</Typography>
                  </ListItem>
                </List>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Languages</SectionTitle>
                <Box mt={1} display="flex" gap={1} flexWrap="wrap">
                  <Chip label="English (Fluent)" color="primary" />
                  <Chip label="Hindi (Native)" color="primary" />
                </Box>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Interests</SectionTitle>
                <Box mt={1} display="flex" gap={1} flexWrap="wrap">
                  <Chip label="📚 Technical Reading" color="primary" />
                  <Chip label="🏸 Badminton" color="primary" />
                  <Chip label="🌍 Travel" color="primary" />
                  <Chip label="🧠 AI Research" color="primary" />
                </Box>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Awards</SectionTitle>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>🏅 Employee of the Year 2022</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>🏆 Innovation Award 2021</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>⭐️ Top Performer (3 consecutive years)</Typography>
                  </ListItem>
                </List>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Online Profile</SectionTitle>
                <Box mt={2} textAlign="center">
                  <QRCode 
                    value="https://ritukapoor.com" 
                    size={120} 
                    bgColor={active.bg}
                    fgColor={active.text}
                  />
                  <Typography variant="body2" mt={1}>
                    ritukapoor.com
                  </Typography>
                </Box>
              </Section>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: "primary.main" }} />
          <Box textAlign="center">
            <Typography variant="body2">
              Designed with React & Material UI • © 2023 Ritu Kapoor
            </Typography>
          </Box>
        </CVContainer>
      </Container>
    </ThemeProvider>
  );
}