import React, { useState } from "react";
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
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  CloudDownload,
  OpenInNew,
  LightMode,
  DarkMode,
} from "@mui/icons-material";
import styled from "styled-components";

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

const Container = styled(Box)`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  position: relative;
`;

const Sidebar = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StickyCTA = styled(Box)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 1rem;
`;

export default function PortfolioCVHybrid() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];

  const theme = createTheme({
    palette: {
      mode: themeIndex === 1 || themeIndex === 3 ? "dark" : "light",
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h3" sx={{ fontFamily: active.headerFont }}>
            Vikas Joshi
          </Typography>
          <IconButton onClick={nextTheme} color="primary">
            {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>

        {/* Hero */}
        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} md={3}>
            <Avatar
              src="https://via.placeholder.com/200"
              sx={{ width: 200, height: 200 }}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Sidebar>
              <Typography>Frontend Dev + Designer</Typography>
              <Typography>Phone: +91 9112345678</Typography>
              <Typography>Email: vikas.joshi@email.com</Typography>
              <Typography>Lucknow, UP, India</Typography>
              <Box mt={1}>
                <IconButton color="primary"><LinkedIn /></IconButton>
                <IconButton color="primary"><GitHub /></IconButton>
              </Box>
            </Sidebar>
          </Grid>
        </Grid>

        {/* Summary */}
        <Box my={4}>
          <Typography
            variant="h5"
            sx={{ fontStyle: "italic", borderLeft: `4px solid ${active.accent}`, pl: 2 }}
          >
            “Frontend Dev + Designer. Build it. Brand it. Ship it.”
          </Typography>
        </Box>

        {/* Skills */}
        <Typography variant="h5" color="primary">Skills</Typography>
        {["React", "Next.js", "MUI", "Three.js", "Figma"].map((skill) => (
          <Box key={skill} my={1}>
            <Typography>{skill}</Typography>
            <LinearProgress variant="determinate" value={80} color="primary" />
          </Box>
        ))}

        {/* Projects */}
        <Box my={4}>
          <Typography variant="h5" color="primary">Projects</Typography>
          <Grid container spacing={2} mt={1}>
            {["Portfolio Site", "SaaS Dashboard", "3D Showcase"].map((project) => (
              <Grid item xs={12} md={4} key={project}>
                <Box
                  sx={{
                    border: `1px solid ${active.accent}`,
                    borderRadius: 2,
                    p: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography>{project}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 1 }}
                  >
                    View Project
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Experience */}
        <Box my={4}>
          <Typography variant="h5" color="primary">Experience</Typography>
          <Typography>Freelance Frontend Developer (2021–Now)</Typography>
        </Box>

        {/* Education */}
        <Box my={4}>
          <Typography variant="h5" color="primary">Education</Typography>
          <Typography>B.Sc Computer Science, AMU</Typography>
        </Box>

        {/* Certificates + Achievements */}
        <Box my={4}>
          <Typography variant="h5" color="primary">Certificates & Achievements</Typography>
          <Typography>Meta Frontend Cert</Typography>
          <Typography>Built India’s first VR Portfolio</Typography>
        </Box>

        {/* Languages & Interests */}
        <Box my={4}>
          <Typography variant="h5" color="primary">Languages & Interests</Typography>
          <Box mt={1} display="flex" gap={1}>
            <Chip label="English" color="primary" />
            <Chip label="Hindi" color="primary" />
            <Chip label="🎨 3D Art" color="primary" />
            <Chip label="✨ Web Animation" color="primary" />
          </Box>
        </Box>

        {/* Awards */}
        <Box my={4}>
          <Typography variant="h5" color="primary">Awards</Typography>
          <Typography>🏆 Top 50 Designer Showcase</Typography>
        </Box>

        {/* Sticky CTA */}
        <StickyCTA>
          <Button variant="contained" color="primary" startIcon={<CloudDownload />}>
            Download PDF
          </Button>
          <Button variant="outlined" color="primary" startIcon={<OpenInNew />}>
            View Online
          </Button>
        </StickyCTA>
      </Container>
    </ThemeProvider>
  );
}
