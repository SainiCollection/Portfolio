import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, Typography, Avatar, IconButton, LinearProgress, Button, Grid } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import styled from "styled-components";

const pastelTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#FB7185" }, // Coral accent
    background: { default: "#FFF7ED" }, // Light peach
    text: { primary: "#111827" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h2: { fontFamily: "Playfair Display, serif" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#FB7185" },
    background: { default: "#1F1F1F" },
    text: { primary: "#F9FAFB" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h2: { fontFamily: "Playfair Display, serif" },
  },
});

const Container = styled(Box)`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
`;

const TopBar = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

const Section = styled(Box)`
  margin-top: 2rem;
`;

const SkillBar = styled(Box)`
  margin: 1rem 0;
`;

export default function CreativeDesignerCV() {
  const [isDark, setIsDark] = useState(false);

  const skills = [
    { name: "Figma", value: 90 },
    { name: "Adobe XD", value: 80 },
    { name: "Illustrator", value: 70 },
  ];

  return (
    <ThemeProvider theme={isDark ? darkTheme : pastelTheme}>
      <CssBaseline />
      <Container>
        <TopBar>
          <IconButton onClick={() => setIsDark(!isDark)} color="primary">
            {isDark ? <LightMode /> : <DarkMode />}
          </IconButton>
        </TopBar>

        {/* Hero */}
        <Section display="flex" alignItems="center" gap={3}>
          <Avatar
            src="https://via.placeholder.com/120"
            alt="Hannah Smith"
            sx={{ width: 120, height: 120 }}
          />
          <Box>
            <Typography variant="h2">Hannah Smith</Typography>
            <Typography variant="h6">UI/UX Designer</Typography>
          </Box>
        </Section>

        {/* About Me */}
        <Section>
          <Typography variant="h5" color="primary">About Me</Typography>
          <Typography>
            Creative and detail-oriented UI/UX designer with a passion for crafting beautiful, user-centered digital experiences.
          </Typography>
        </Section>

        {/* Skills */}
        <Section>
          <Typography variant="h5" color="primary">Skills</Typography>
          {skills.map((skill) => (
            <SkillBar key={skill.name}>
              <Typography>{skill.name}</Typography>
              <LinearProgress variant="determinate" value={skill.value} sx={{ height: 10, borderRadius: 5 }} color="primary" />
            </SkillBar>
          ))}
        </Section>

        {/* Work */}
        <Section>
          <Typography variant="h5" color="primary">Work</Typography>
          <Typography>Freelance Designer — 2021–Now</Typography>
        </Section>

        {/* Portfolio */}
        <Section>
          <Typography variant="h5" color="primary">Portfolio</Typography>
          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={4}>
              <Box sx={{ width: "100%", height: 100, bgcolor: "primary.main", borderRadius: 2 }} />
              <Typography>ABC Brand Redesign</Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ width: "100%", height: 100, bgcolor: "primary.main", borderRadius: 2 }} />
              <Typography>XYZ App UI</Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ width: "100%", height: 100, bgcolor: "primary.main", borderRadius: 2 }} />
              <Typography>Creative Landing Page</Typography>
            </Grid>
          </Grid>
        </Section>

        {/* Awards */}
        <Section>
          <Typography variant="h5" color="primary">Awards</Typography>
          <Typography>Best Student Designer 2020</Typography>
        </Section>

        {/* Education */}
        <Section>
          <Typography variant="h5" color="primary">Education</Typography>
          <Typography>Diploma in Design, Creative Arts School</Typography>
        </Section>

        {/* Contact */}
        <Section>
          <Typography variant="h5" color="primary">Contact</Typography>
          <Typography>Email: hannah.designs@email.com</Typography>
          <Typography>Behance: behance.net/hannahdesigns</Typography>
          <Typography>Instagram: @hannah_designs</Typography>
        </Section>
      </Container>
    </ThemeProvider>
  );
}
