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
  Card,
  CardContent,
  Link,
  Button,
  Container
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Twitter,
  Download as DownloadIcon,
  LightMode,
  DarkMode,
  Star,
  EmojiEvents,
  Print
} from "@mui/icons-material";
import styled from "@emotion/styled";
import { toPng } from "html-to-image";

// 4 Themes + Fonts
const themes = [
  {
    name: "Dark Charcoal",
    bg: "#2C2C2C",
    text: "#F5F5DC",
    accent: "#3B82F6",
    font: "Manrope, sans-serif",
  },
  {
    name: "Light Cream",
    bg: "#F5F5DC",
    text: "#2C2C2C",
    accent: "#3B82F6",
    font: "Inter, sans-serif",
  },
  {
    name: "Blue Gray",
    bg: "#1E293B",
    text: "#F5F5DC",
    accent: "#3B82F6",
    font: "Fira Sans, sans-serif",
  },
  {
    name: "Soft Olive",
    bg: "#556B2F",
    text: "#F5F5DC",
    accent: "#3B82F6",
    font: "Source Sans Pro, sans-serif",
  },
];

const CVContainer = styled(Box)`
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  position: relative;
  background: ${({ theme }) => theme.palette.background.default};
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  @media print {
    box-shadow: none;
    padding: 1.5rem !important;
    max-width: 100% !important;
    margin: 0 !important;
  }
`;

const SectionCard = styled(Card)`
  background: ${({ theme }) => 
    theme.palette.mode === 'light' 
      ? 'rgba(255, 255, 255, 0.8)' 
      : 'rgba(255, 255, 255, 0.05)'};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media print {
    box-shadow: none;
    background: ${({ theme }) => 
      theme.palette.mode === 'light' ? '#fff' : 'rgba(255,255,255,0.05)'} !important;
  }
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
  border-left: 3px solid ${({ theme }) => theme.palette.primary.main};
  
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

export default function UltraProfessionalCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];
  const cvRef = useRef();

  const theme = createTheme({
    palette: {
      mode: themeIndex === 1 ? "light" : "dark",
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
            marginRight: 1,
            marginBottom: 1
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
          link.download = "priya-desai-cv.png";
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
            {themeIndex === 1 ? <DarkMode /> : <LightMode />}
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
            startIcon={<DownloadIcon />} 
            onClick={handleDownload}
          >
            Download
          </Button>
        </PrintHide>

        <CVContainer ref={cvRef}>
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h4" color="primary">
              Priya Desai
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Senior Fullstack Developer
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {/* Left Column */}
            <Grid item xs={12} md={5}>
              <SectionCard>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={5}>
                      <Avatar
                        src="https://via.placeholder.com/150"
                        sx={{ 
                          width: 120, 
                          height: 120,
                          border: `3px solid ${active.accent}`
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={7}>
                      <Typography variant="body1">
                        <Box component="span" fontWeight="bold">Phone:</Box> +91 9876012345
                      </Typography>
                      <Typography variant="body1">
                        <Box component="span" fontWeight="bold">Email:</Box> priya.desai@email.com
                      </Typography>
                      <Typography variant="body1">
                        <Box component="span" fontWeight="bold">Location:</Box> Pune, Maharashtra
                      </Typography>
                      <Box mt={1}>
                        <IconButton color="primary"><LinkedIn /></IconButton>
                        <IconButton color="primary"><GitHub /></IconButton>
                        <IconButton color="primary"><Twitter /></IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </SectionCard>

              <SectionCard>
                <CardContent>
                  <SectionTitle variant="h5" color="primary">
                    Skills
                  </SectionTitle>
                  <Grid container spacing={1}>
                    {[
                      "React", "Next.js", "Node.js", "TypeScript", 
                      "GraphQL", "Material UI", "Tailwind CSS", "Redux",
                      "Express", "MongoDB", "PostgreSQL", "AWS",
                      "Docker", "Jest", "Cypress", "CI/CD"
                    ].map(skill => (
                      <Grid item xs={6} key={skill}>
                        <Chip label={skill} color="primary" variant="outlined" />
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </SectionCard>

              <SectionCard>
                <CardContent>
                  <SectionTitle variant="h5" color="primary">
                    Languages
                  </SectionTitle>
                  <Box mt={1}>
                    <Chip label="English (Professional)" color="primary" />
                    <Chip label="Hindi (Fluent)" color="primary" />
                    <Chip label="Marathi (Native)" color="primary" />
                  </Box>
                </CardContent>
              </SectionCard>

              <SectionCard>
                <CardContent>
                  <SectionTitle variant="h5" color="primary">
                    Interests
                  </SectionTitle>
                  <Box mt={1}>
                    <Chip label="📷 Photography" color="primary" />
                    <Chip label="✍️ Technical Writing" color="primary" />
                    <Chip label="🎤 Public Speaking" color="primary" />
                    <Chip label="🧘 Yoga & Meditation" color="primary" />
                  </Box>
                </CardContent>
              </SectionCard>

              <SectionCard>
                <CardContent>
                  <SectionTitle variant="h5" color="primary">
                    Awards
                  </SectionTitle>
                  <Box mt={1}>
                    <Box display="flex" alignItems="center" mb={1}>
                      <EmojiEvents color="primary" sx={{ mr: 1 }} />
                      <Typography><b>Innovation Award 2023</b> - ZYX Digital</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Star color="primary" sx={{ mr: 1 }} />
                      <Typography><b>Top Performer</b> - Tech Excellence Summit 2022</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </SectionCard>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={7}>
              <SectionCard>
                <CardContent>
                  <SectionTitle variant="h5" color="primary">
                    Professional Summary
                  </SectionTitle>
                  <Typography>
                    Senior Fullstack Developer with 5+ years of experience building scalable web applications. 
                    Specialized in React ecosystems with expertise in design systems and component libraries. 
                    Passionate about creating maintainable codebases and mentoring junior developers.
                  </Typography>
                </CardContent>
              </SectionCard>

              <SectionCard>
                <CardContent>
                  <SectionTitle variant="h5" color="primary">
                    Experience
                  </SectionTitle>
                  
                  <ExperienceItem>
                    <Typography variant="subtitle1" fontWeight={600}>Senior Fullstack Developer</Typography>
                    <Typography color="primary" fontStyle="italic">ZYX Digital | 2022–Present</Typography>
                    <Typography variant="body2" mt={1}>
                      • Led development of enterprise SaaS platform serving 100K+ users<br/>
                      • Created design system used across 15+ products<br/>
                      • Reduced bundle size by 40% through code optimization<br/>
                      • Mentored 3 junior developers in React best practices
                    </Typography>
                  </ExperienceItem>
                  
                  <ExperienceItem>
                    <Typography variant="subtitle1" fontWeight={600}>Frontend Developer</Typography>
                    <Typography color="primary" fontStyle="italic">LMN Studio | 2020–2022</Typography>
                    <Typography variant="body2" mt={1}>
                      • Developed responsive UIs for e-commerce platforms<br/>
                      • Implemented component library reducing dev time by 30%<br/>
                      • Optimized performance achieving 95+ Lighthouse scores<br/>
                      • Collaborated with designers on UI/UX improvements
                    </Typography>
                  </ExperienceItem>
                </CardContent>
              </SectionCard>

              <SectionCard>
                <CardContent>
                  <SectionTitle variant="h5" color="primary">
                    Education
                  </SectionTitle>
                  <Box mb={2}>
                    <Typography fontWeight={600}>Master of Computer Applications</Typography>
                    <Typography>Pune University | 2017–2020</Typography>
                    <Typography color="textSecondary">CGPA: 9.1/10</Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight={600}>Bachelor of Science (Computer Science)</Typography>
                    <Typography>Mumbai University | 2014–2017</Typography>
                  </Box>
                </CardContent>
              </SectionCard>

              <SectionCard>
                <CardContent>
                  <SectionTitle variant="h5" color="primary">
                    Projects
                  </SectionTitle>
                  <Box mt={2}>
                    <Typography fontWeight={600}>Design System Library</Typography>
                    <Typography variant="body2">
                      Comprehensive React component library with 50+ components used across company products. 
                      Implemented Storybook documentation and automated testing.
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Typography fontWeight={600}>SaaS Analytics Dashboard</Typography>
                    <Typography variant="body2">
                      Real-time analytics platform processing 1M+ events daily. 
                      Built with React, GraphQL, and Node.js. Reduced data load times by 65%.
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Typography fontWeight={600}>E-commerce Platform</Typography>
                    <Typography variant="body2">
                      Full-featured e-commerce solution with payment integration. 
                      Served 500+ merchants with 99.9% uptime.
                    </Typography>
                  </Box>
                </CardContent>
              </SectionCard>

              <SectionCard>
                <CardContent>
                  <SectionTitle variant="h5" color="primary">
                    Certifications
                  </SectionTitle>
                  <Box mt={1}>
                    <Typography>
                      • Meta Frontend Professional Certificate (Coursera)
                    </Typography>
                    <Typography>
                      • AWS Certified Developer - Associate
                    </Typography>
                    <Typography>
                      • Google Cloud Professional Developer
                    </Typography>
                    <Typography>
                      • React Advanced Concepts (Frontend Masters)
                    </Typography>
                  </Box>
                </CardContent>
              </SectionCard>

              <SectionCard>
                <CardContent>
                  <SectionTitle variant="h5" color="primary">
                    Achievements
                  </SectionTitle>
                  <Box mt={1}>
                    <Box display="flex" alignItems="center" mb={1}>
                      <Star color="primary" sx={{ mr: 1 }} />
                      <Typography>Speaker at React Conf India 2023</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Star color="primary" sx={{ mr: 1 }} />
                      <Typography>Published 15+ technical articles on Medium</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </SectionCard>
            </Grid>
          </Grid>
        </CVContainer>
      </Container>
    </ThemeProvider>
  );
}