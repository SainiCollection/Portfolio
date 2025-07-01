import React, { useState } from "react";
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
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Web,
  Twitter,
  Download,
  LightMode,
  DarkMode,
} from "@mui/icons-material";
import styled from "styled-components";

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

const Container = styled(Box)`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  background: #fff;
`;

const StickyCTA = styled(Box)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #fff;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export default function CorporateBlockCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];

  const theme = createTheme({
    palette: {
      background: { default: active.bg },
      text: { primary: active.text },
      primary: { main: active.accent },
    },
    typography: {
      fontFamily: active.bodyFont,
      h4: { fontFamily: active.headerFont, fontWeight: 700 },
      h5: { fontFamily: active.headerFont, fontWeight: 600 },
    },
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Redux", level: 80 },
    { name: "TypeScript", level: 80 },
    { name: "TailwindCSS", level: 85 },
    { name: "MUI", level: 90 },
    { name: "Figma", level: 80 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        {/* Header */}
        <Box mb={2}>
          <Typography variant="h4" color="primary">Vishal Saini</Typography>
          <Typography variant="h6">Frontend Team Lead</Typography>
          <Typography>
            +91 9876543210 | vishal.saini@email.com | Gurgaon, Haryana, India
          </Typography>
          <Box mt={1}>
            <IconButton color="primary"><LinkedIn /></IconButton>
            <IconButton color="primary"><GitHub /></IconButton>
            <IconButton color="primary"><Web /></IconButton>
            <IconButton color="primary"><Twitter /></IconButton>
            <IconButton color="primary" onClick={nextTheme}>
              {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Summary */}
        <Typography variant="h5" color="primary">Summary</Typography>
        <Typography mb={2}>
          "Frontend Team Lead with 6+ years building scalable React applications & leading agile teams."
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Skills */}
        <Typography variant="h5" color="primary">Skills</Typography>
        <Grid container spacing={2} mt={1}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} key={skill.name}>
              <Typography>{skill.name}</Typography>
              <LinearProgress variant="determinate" value={skill.level} />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Languages & Interests */}
        <Typography variant="h5" color="primary">Languages & Interests</Typography>
        <Box display="flex" gap={1} flexWrap="wrap" mt={1}>
          {["English", "Hindi", "Punjabi", "UI Design", "Open Source", "Public Speaking"].map((item) => (
            <Chip key={item} label={item} color="primary" />
          ))}
        </Box>

        <Typography align="center" mt={4}>— Page 1 —</Typography>

        <Divider sx={{ my: 2 }} />

        {/* Experience */}
        <Typography variant="h5" color="primary">Experience</Typography>
        <Box mt={1}>
          <Typography variant="h6">Frontend Team Lead @ ABC Solutions (2022–Now)</Typography>
          <ul>
            <li><Typography>Leading a team of 8 developers</Typography></li>
            <li><Typography>Delivered 5 large scale React projects</Typography></li>
            <li><Typography>Mentoring junior developers</Typography></li>
          </ul>
          <Typography variant="h6" mt={2}>Senior Frontend Developer @ XYZ Pvt Ltd (2019–2022)</Typography>
          <ul>
            <li><Typography>Built custom UI libraries</Typography></li>
            <li><Typography>Improved performance by 30%</Typography></li>
          </ul>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Education */}
        <Typography variant="h5" color="primary">Education</Typography>
        <Typography>B.Tech CSE, Delhi Technological University, 2017</Typography>

        <Divider sx={{ my: 2 }} />

        {/* Projects */}
        <Typography variant="h5" color="primary">Projects</Typography>
        <ul>
          <li><Typography>E-commerce Admin Dashboard</Typography></li>
          <li><Typography>Custom CMS Platform</Typography></li>
          <li><Typography>Team Collaboration Tool</Typography></li>
        </ul>

        <Divider sx={{ my: 2 }} />

        {/* Certificates & Achievements */}
        <Typography variant="h5" color="primary">Certificates & Achievements</Typography>
        <ul>
          <li><Typography>Google UX Design Professional</Typography></li>
          <li><Typography>Meta Frontend Developer</Typography></li>
          <li><Typography>Employee of the Year 2023</Typography></li>
          <li><Typography>Speaker at React Summit 2024</Typography></li>
        </ul>

        <Divider sx={{ my: 2 }} />

        {/* Awards */}
        <Typography variant="h5" color="primary">Awards</Typography>
        <Typography>🏆 Best Team Lead Award 2023</Typography>

        <Typography align="center" mt={4}>— Page 2 —</Typography>

        {/* Footer */}
        <Typography align="center" variant="caption">www.vishal.codes</Typography>
      </Container>

      <StickyCTA>
        <Button variant="contained" color="primary" startIcon={<Download />}>
          Download PDF
        </Button>
        <Button variant="outlined" color="primary" sx={{ ml: 2 }}>
          View Online
        </Button>
      </StickyCTA>
    </ThemeProvider>
  );
}
