import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  Avatar,
  IconButton,
  Chip,
  Grid,
  Button,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Twitter,
  LightMode,
  DarkMode,
} from "@mui/icons-material";
import styled from "styled-components";

// Themes
const themes = [
  { name: "Neon Blue", color: "#3B82F6", font: "Poppins, sans-serif" },
  { name: "Neon Pink", color: "#EC4899", font: "Inter, sans-serif" },
  { name: "Mint Green", color: "#10B981", font: "Roboto, sans-serif" },
  { name: "Sunset Orange", color: "#FB923C", font: "Merriweather, serif" },
];

const GlassCard = styled(Box)`
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  padding: 2rem;
  margin: 1rem 0;
  color: white;
`;

const GradientBackground = styled(Box)`
  min-height: 100vh;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  padding: 2rem;
`;

export default function GlassmorphismCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: themes[themeIndex].color },
    },
    typography: {
      fontFamily: themes[themeIndex].font,
    },
  });

  const nextTheme = () =>
    setThemeIndex((prev) => (prev + 1) % themes.length);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GradientBackground>
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={nextTheme} variant="outlined" color="primary">
            Switch Theme
          </Button>
        </Box>

        {/* PAGE 1 */}
        <GlassCard>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" color="primary">
                Aarav Sharma
              </Typography>
              <Typography variant="body1">
                Phone: +91 9876543210
              </Typography>
              <Typography variant="body1">
                Email: aarav.sharma@email.com
              </Typography>
              <Typography variant="body1">
                Bangalore, Karnataka, India
              </Typography>
              <Box mt={2}>
                <IconButton color="primary">
                  <LinkedIn />
                </IconButton>
                <IconButton color="primary">
                  <GitHub />
                </IconButton>
                <IconButton color="primary">
                  <Twitter />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Avatar
                src="https://via.placeholder.com/150"
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
          </Grid>
        </GlassCard>

        <GlassCard>
          <Typography variant="h5" color="primary">
            Summary
          </Typography>
          <Typography mt={1}>
            Creative React Developer with 4+ years experience in building
            stunning UIs with modern frameworks.
          </Typography>
        </GlassCard>

        <GlassCard>
          <Typography variant="h5" color="primary">
            Skills
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
            {["React", "MUI", "Next.js", "Figma", "TailwindCSS"].map((skill) => (
              <Chip key={skill} label={skill} color="primary" />
            ))}
          </Box>
        </GlassCard>

        {/* PAGE 2 */}
        <GlassCard>
          <Typography variant="h5" color="primary">
            Experience
          </Typography>
          <Typography mt={1}><b>Frontend Developer</b> — XYZ Tech (2022–Present)</Typography>
          <Typography mt={1}><b>Junior Developer</b> — ABC Studio (2020–2022)</Typography>
        </GlassCard>

        <GlassCard>
          <Typography variant="h5" color="primary">
            Education
          </Typography>
          <Typography>B.Tech CSE, NIT Trichy, 2020</Typography>
        </GlassCard>

        <GlassCard>
          <Typography variant="h5" color="primary">
            Projects
          </Typography>
          <Typography>E-commerce UI</Typography>
          <Typography>Portfolio Generator</Typography>
          <Typography>Admin Dashboard</Typography>
        </GlassCard>

        <GlassCard>
          <Typography variant="h5" color="primary">
            Certificates
          </Typography>
          <Typography>Google UX Design</Typography>
          <Typography>Meta Frontend</Typography>
        </GlassCard>

        <GlassCard>
          <Typography variant="h5" color="primary">
            Achievements
          </Typography>
          <Typography>Best UI Dev Award 2023</Typography>
        </GlassCard>

        <GlassCard>
          <Typography variant="h5" color="primary">
            Languages
          </Typography>
          <Box display="flex" gap={1} mt={1}>
            <Chip label="English" color="primary" />
            <Chip label="Hindi" color="primary" />
          </Box>
        </GlassCard>

        <GlassCard>
          <Typography variant="h5" color="primary">
            Interests
          </Typography>
          <Box display="flex" gap={1} mt={1}>
            <Chip label="🎮 Gaming" color="primary" />
            <Chip label="✈️ Travel" color="primary" />
            <Chip label="🎨 Design" color="primary" />
          </Box>
        </GlassCard>

        <GlassCard>
          <Typography variant="h5" color="primary">
            Awards
          </Typography>
          <Typography>🏆 Employee of the Year</Typography>
        </GlassCard>
      </GradientBackground>
    </ThemeProvider>
  );
}
