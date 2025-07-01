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
  LinearProgress,
  Divider,
  Link,
} from "@mui/material";
import { LinkedIn, GitHub, Twitter, LightMode, DarkMode } from "@mui/icons-material";
import styled from "styled-components";

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

const Container = styled(Box)`
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
`;

const Section = styled(Box)`
  background: ${(props) => props.bg};
  border-radius: 12px;
  padding: 2rem;
  margin: 1rem 0;
`;

export default function ProfessionalCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];

  const theme = createTheme({
    palette: {
      mode: themeIndex === 3 ? "dark" : "light",
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
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={nextTheme} color="primary">
            {themeIndex === 3 ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>

        {/* Page 1 */}
        <Section bg={active.section}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" color="primary">Rohan Verma</Typography>
              <Typography variant="h6">Software Engineer</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                "Software Engineer focused on scalable web apps using React & Node."
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="right">
              <Avatar
                src="https://via.placeholder.com/150"
                sx={{ width: 120, height: 120 }}
              />
            </Grid>
          </Grid>
        </Section>

        <Section bg={active.section}>
          <Typography variant="h5" color="primary">Contact</Typography>
          <Typography>Phone: +91 9988776655</Typography>
          <Typography>Email: rohan.verma@email.com</Typography>
          <Typography>Mumbai, Maharashtra, India</Typography>
          <Box mt={1}>
            <IconButton color="primary"><LinkedIn /></IconButton>
            <IconButton color="primary"><GitHub /></IconButton>
            <IconButton color="primary"><Twitter /></IconButton>
          </Box>
        </Section>

        <Section bg={active.section}>
          <Typography variant="h5" color="primary">Skills</Typography>
          <Grid container spacing={2} mt={1}>
            {["React", "Node.js", "Express", "MongoDB", "REST APIs"].map(skill => (
              <Grid item xs={12} md={6} key={skill}>
                <Typography>{skill}</Typography>
                <LinearProgress variant="determinate" value={80} sx={{ height: 6, borderRadius: 5 }} color="primary" />
              </Grid>
            ))}
          </Grid>
        </Section>

        <Divider sx={{ my: 4 }} />

        {/* Page 2 */}
        <Section bg={active.section}>
          <Typography variant="h5" color="primary">Experience</Typography>
          <Box mt={2} sx={{ borderLeft: `3px solid ${active.accent}`, pl: 2 }}>
            <Typography variant="subtitle1"><b>Software Engineer</b> — DEF Corp (2021–Present)</Typography>
            <Typography variant="subtitle1"><b>Intern</b> — GHI Tech (2020)</Typography>
          </Box>
        </Section>

        <Section bg={active.section}>
          <Typography variant="h5" color="primary">Education</Typography>
          <Typography>B.Sc IT, University of Mumbai, 2020</Typography>
        </Section>

        <Section bg={active.section}>
          <Typography variant="h5" color="primary">Projects</Typography>
          <Grid container spacing={2} mt={1}>
            {["Task Manager", "Portfolio Builder", "CMS"].map(proj => (
              <Grid item xs={12} md={4} key={proj}>
                <Box sx={{ border: `1px solid ${active.accent}`, borderRadius: 2, p: 2 }}>
                  <Typography>{proj}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section bg={active.section}>
          <Typography variant="h5" color="primary">Certificates</Typography>
          <Chip label="AWS Developer Associate" color="primary" />
        </Section>

        <Section bg={active.section}>
          <Typography variant="h5" color="primary">Achievements</Typography>
          <Typography>🏅 Hackathon Winner 2022</Typography>
        </Section>

        <Section bg={active.section}>
          <Typography variant="h5" color="primary">Languages</Typography>
          <Box mt={1} display="flex" gap={1}>
            <Chip label="English" color="primary" />
            <Chip label="Marathi" color="primary" />
            <Chip label="Hindi" color="primary" />
          </Box>
        </Section>

        <Section bg={active.section}>
          <Typography variant="h5" color="primary">Interests</Typography>
          <Box mt={1} display="flex" gap={1}>
            <Chip label="🏏 Cricket" color="primary" />
            <Chip label="📝 Tech Blogging" color="primary" />
          </Box>
        </Section>

        <Section bg={active.section}>
          <Typography variant="h5" color="primary">Awards</Typography>
          <Typography>🏆 Best Employee 2023</Typography>
        </Section>
      </Container>
    </ThemeProvider>
  );
}
