import React, { useState, useRef } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  IconButton,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import { LinkedIn, GitHub, Print, LightMode, DarkMode, Download } from "@mui/icons-material";
import { useReactToPrint } from "react-to-print";
import styled from "@emotion/styled";
import { toPng } from "html-to-image";

// Themes
const themes = [
  {
    name: "Sky Blue",
    primary: "#0EA5E9",
    text: "#111827",
    bg: "#F0F9FF",
    font: "Fira Sans, sans-serif",
    accent: "#0369A1",
  },
  {
    name: "Sunset Orange",
    primary: "#FB923C",
    text: "#111827",
    bg: "#FFF7ED",
    font: "Inter, sans-serif",
    accent: "#EA580C",
  },
  {
    name: "Mint Green",
    primary: "#10B981",
    text: "#111827",
    bg: "#ECFDF5",
    font: "Nunito, sans-serif",
    accent: "#047857",
  },
  {
    name: "Classic Black",
    primary: "#111827",
    text: "#F9FAFB",
    bg: "#1F2937",
    font: "Manrope, sans-serif",
    accent: "#4B5563",
  },
];

const Container = styled(Box)`
  max-width: 1100px;
  margin: auto;
  padding: 2rem;
  background: ${({ theme }) => theme.palette.background.default};
`;

const PrintHide = styled(Box)`
  @media print {
    display: none !important;
  }
`;

const SkillCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

const SkillTitle = styled(Typography)`
  font-weight: 600 !important;
  margin-bottom: 1rem !important;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default function CardDeckCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];
  const cvRef = useRef();

  const theme = createTheme({
    palette: {
      background: { default: active.bg },
      primary: { main: active.primary },
      text: { primary: active.text },
      accent: { main: active.accent },
    },
    typography: {
      fontFamily: active.font,
      h4: { fontWeight: 700 },
      h5: { fontWeight: 600 },
    },
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  });

  const handleDownload = () => {
    if (cvRef.current) {
      toPng(cvRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "arjun-gupta-cv.png";
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
      <Container ref={cvRef}>
        <PrintHide display="flex" justifyContent="flex-end" mb={2} gap={1}>
          <IconButton onClick={nextTheme} color="primary">
            {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
          </IconButton>
          <Button 
            variant="outlined" 
            startIcon={<Print />} 
            onClick={handlePrint}
          >
            Print
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<Download />} 
            onClick={handleDownload}
          >
            Download PNG
          </Button>
        </PrintHide>

        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Avatar
            src="https://via.placeholder.com/120"
            sx={{ 
              width: 120, 
              height: 120, 
              margin: "auto",
              border: `3px solid ${active.primary}`,
              mb: 2
            }}
          />
          <Typography variant="h4" color="primary" gutterBottom>
            Arjun Gupta
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Senior Frontend Engineer
          </Typography>
          <Typography variant="body1">Chandigarh, India</Typography>
          <Typography variant="body2">+91 9876098765 | arjun.gupta@email.com</Typography>
          <Box mt={1}>
            <IconButton color="primary"><LinkedIn /></IconButton>
            <IconButton color="primary"><GitHub /></IconButton>
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderColor: "primary.main" }} />

        <Grid container spacing={3}>
          {/* Summary */}
          <Grid item xs={12} md={6}>
            <SkillCard>
              <CardContent>
                <SkillTitle variant="h6" color="primary">
                  Professional Summary
                </SkillTitle>
                <Typography>
                  Senior Frontend Engineer with 5+ years of experience building scalable 
                  React applications. Specialized in component architecture and performance 
                  optimization. Passionate about creating intuitive user experiences and 
                  mentoring junior developers.
                </Typography>
              </CardContent>
            </SkillCard>
          </Grid>

          {/* Skills */}
          <Grid item xs={12} md={6}>
            <SkillCard>
              <CardContent>
                <SkillTitle variant="h6" color="primary">
                  Technical Skills
                </SkillTitle>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {["React", "TypeScript", "Next.js", "Redux", "Material UI", 
                    "Firebase", "GraphQL", "Jest", "Cypress", "Webpack"].map((s) => (
                    <Chip key={s} label={s} color="primary" variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </SkillCard>
          </Grid>

          {/* Experience */}
          <Grid item xs={12} md={6}>
            <SkillCard>
              <CardContent>
                <SkillTitle variant="h6" color="primary">
                  Professional Experience
                </SkillTitle>
                <Box mb={2}>
                  <Typography fontWeight={600}>Senior Frontend Engineer</Typography>
                  <Typography color="primary" fontStyle="italic">Tech Innovations Pvt Ltd | 2022–Present</Typography>
                  <Typography variant="body2" mt={1}>
                    • Led migration to TypeScript across 5 product lines<br/>
                    • Reduced bundle size by 40% through optimization<br/>
                    • Implemented CI/CD pipeline reducing deployment time by 60%
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>Frontend Developer</Typography>
                  <Typography color="primary" fontStyle="italic">Digital Solutions | 2020–2022</Typography>
                  <Typography variant="body2" mt={1}>
                    • Developed reusable component library<br/>
                    • Improved Lighthouse scores by 35%<br/>
                    • Mentored 3 junior developers
                  </Typography>
                </Box>
              </CardContent>
            </SkillCard>
          </Grid>

          {/* Education */}
          <Grid item xs={12} md={6}>
            <SkillCard>
              <CardContent>
                <SkillTitle variant="h6" color="primary">
                  Education
                </SkillTitle>
                <Box mb={2}>
                  <Typography fontWeight={600}>B.Sc Information Technology</Typography>
                  <Typography>Panjab University | 2017–2021</Typography>
                  <Typography color="text.secondary">CGPA: 9.2/10</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>Diploma in Web Development</Typography>
                  <Typography>Udemy | 2020</Typography>
                </Box>
              </CardContent>
            </SkillCard>
          </Grid>

          {/* Projects */}
          <Grid item xs={12} md={6}>
            <SkillCard>
              <CardContent>
                <SkillTitle variant="h6" color="primary">
                  Key Projects
                </SkillTitle>
                <Box mb={2}>
                  <Typography fontWeight={600}>Enterprise CRM Tool</Typography>
                  <Typography variant="body2">
                    Custom CRM solution for sales teams with real-time analytics and reporting.
                    Built with React, Redux, and Firebase.
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>Portfolio Generator</Typography>
                  <Typography variant="body2">
                    Drag-and-drop portfolio builder with 30+ templates and custom domain support.
                  </Typography>
                </Box>
              </CardContent>
            </SkillCard>
          </Grid>

          {/* Certificates */}
          <Grid item xs={12} md={6}>
            <SkillCard>
              <CardContent>
                <SkillTitle variant="h6" color="primary">
                  Certifications
                </SkillTitle>
                <Box>
                  <Typography>• Google UX Design Professional</Typography>
                  <Typography>• AWS Certified Developer</Typography>
                  <Typography>• Meta Frontend Developer</Typography>
                  <Typography>• React Advanced Concepts</Typography>
                </Box>
              </CardContent>
            </SkillCard>
          </Grid>

          {/* Achievements */}
          <Grid item xs={12} md={6}>
            <SkillCard>
              <CardContent>
                <SkillTitle variant="h6" color="primary">
                  Achievements
                </SkillTitle>
                <Box>
                  <Typography>• Speaker at React India Conference 2023</Typography>
                  <Typography>• Published 5 technical articles on Medium</Typography>
                  <Typography>• Top Contributor to Open Source Projects</Typography>
                </Box>
              </CardContent>
            </SkillCard>
          </Grid>

          {/* Awards */}
          <Grid item xs={12} md={6}>
            <SkillCard>
              <CardContent>
                <SkillTitle variant="h6" color="primary">
                  Awards
                </SkillTitle>
                <Box>
                  <Typography>🏆 Innovation Award 2023</Typography>
                  <Typography>🏅 Employee of the Year 2022</Typography>
                  <Typography>⭐️ Top Performer (3 consecutive quarters)</Typography>
                </Box>
              </CardContent>
            </SkillCard>
          </Grid>

          {/* Languages + Interests */}
          <Grid item xs={12} md={12}>
            <SkillCard>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <SkillTitle variant="h6" color="primary">
                      Languages
                    </SkillTitle>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {["English (Fluent)", "Hindi (Native)", "Punjabi (Native)"].map((item) => (
                        <Chip key={item} label={item} color="primary" />
                      ))}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SkillTitle variant="h6" color="primary">
                      Interests
                    </SkillTitle>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {["Photography", "Tech Blogging", "Open Source", "Hiking"].map((item) => (
                        <Chip key={item} label={item} color="primary" />
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </SkillCard>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "primary.main" }} />
        <Box textAlign="center">
          <Typography variant="body2">Designed with React & Material UI • arjungupta.me</Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}