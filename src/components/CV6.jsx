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
  Card,
  CardContent,
  Link,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Twitter,
  Download,
  LightMode,
  DarkMode,
  Star,
  EmojiEvents,
} from "@mui/icons-material";
import styled from "styled-components";

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

const Container = styled(Box)`
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
`;

const SectionCard = styled(Card)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  margin: 1rem 0;
`;

export default function UltraProfessionalCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];

  const theme = createTheme({
    palette: {
      mode: themeIndex === 1 ? "light" : "dark",
      background: { default: active.bg },
      text: { primary: active.text },
      primary: { main: active.accent },
    },
    typography: {
      fontFamily: active.font,
      h4: { fontWeight: 700 },
      h5: { fontWeight: 600 },
    },
  });

  const nextTheme = () =>
    setThemeIndex((prev) => (prev + 1) % themes.length);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        {/* Top Bar */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" color="primary">
            Priya Desai
          </Typography>
          <IconButton onClick={nextTheme} color="primary">
            {themeIndex === 1 ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>

        {/* Hero */}
        <SectionCard>
          <CardContent>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h5">
                  Fullstack Developer
                </Typography>
                <Typography>
                  Phone: +91 9876012345
                </Typography>
                <Typography>
                  Email: priya.desai@email.com
                </Typography>
                <Typography>
                  Pune, Maharashtra, India
                </Typography>
                <Box mt={1}>
                  <IconButton color="primary"><LinkedIn /></IconButton>
                  <IconButton color="primary"><GitHub /></IconButton>
                  <IconButton color="primary"><Twitter /></IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} textAlign="right">
                <Avatar
                  src="https://via.placeholder.com/150"
                  sx={{ width: 120, height: 120 }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </SectionCard>

        {/* Summary */}
        <SectionCard>
          <CardContent>
            <Typography variant="h5" color="primary">
              Summary
            </Typography>
            <Typography>
              Fullstack Developer with deep love for design systems and component libraries.
            </Typography>
          </CardContent>
        </SectionCard>

        {/* Skills Grid */}
        <SectionCard>
          <CardContent>
            <Typography variant="h5" color="primary">
              Skills
            </Typography>
            <Grid container spacing={2} mt={1}>
              {["React", "Next.js", "MUI", "Tailwind", "GraphQL"].map(skill => (
                <Grid item xs={4} md={2} key={skill}>
                  <Chip label={skill} color="primary" />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </SectionCard>

        {/* Page 2 */}
        <SectionCard>
          <CardContent>
            <Typography variant="h5" color="primary">
              Experience
            </Typography>
            <Box mt={1}>
              <Typography><b>Fullstack Dev</b> — ZYX Digital (2022–Now)</Typography>
              <Typography><b>Frontend Dev</b> — LMN Studio (2020–2022)</Typography>
            </Box>
          </CardContent>
        </SectionCard>

        <SectionCard>
          <CardContent>
            <Typography variant="h5" color="primary">
              Education
            </Typography>
            <Typography>MCA, Pune University, 2020</Typography>
          </CardContent>
        </SectionCard>

        <SectionCard>
          <CardContent>
            <Typography variant="h5" color="primary">
              Projects
            </Typography>
            <Typography>Design System Library</Typography>
            <Typography>SaaS Dashboard</Typography>
          </CardContent>
        </SectionCard>

        <SectionCard>
          <CardContent>
            <Typography variant="h5" color="primary">
              Certificates
            </Typography>
            <Link href="#" color="primary">
              <Download /> Meta Frontend Specialization
            </Link>
          </CardContent>
        </SectionCard>

        <SectionCard>
          <CardContent>
            <Typography variant="h5" color="primary">
              Achievements
            </Typography>
            <Typography><Star /> Speaker at React Conf 2024</Typography>
          </CardContent>
        </SectionCard>

        <SectionCard>
          <CardContent>
            <Typography variant="h5" color="primary">
              Languages
            </Typography>
            <Box mt={1} display="flex" gap={1}>
              <Chip label="English" color="primary" />
              <Chip label="Marathi" color="primary" />
            </Box>
          </CardContent>
        </SectionCard>

        <SectionCard>
          <CardContent>
            <Typography variant="h5" color="primary">
              Interests
            </Typography>
            <Box mt={1} display="flex" gap={1}>
              <Chip label="📷 Photography" color="primary" />
              <Chip label="✍️ Writing" color="primary" />
              <Chip label="🎤 Public Speaking" color="primary" />
            </Box>
          </CardContent>
        </SectionCard>

        <SectionCard>
          <CardContent>
            <Typography variant="h5" color="primary">
              Awards
            </Typography>
            <Typography><EmojiEvents /> Innovation Award 2023</Typography>
          </CardContent>
        </SectionCard>

        {/* Footer */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            Page 1 of 2
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
