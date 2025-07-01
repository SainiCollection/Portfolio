import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, Typography, Avatar, Button, Chip, Divider, IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import styled from "styled-components";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#3B82F6" },
    background: { default: "#F9FAFB" },
    text: { primary: "#111827" },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#3B82F6" },
    background: { default: "#111827" },
    text: { primary: "#F9FAFB" },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
});

const Container = styled(Box)`
  max-width: 800px;
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

const SkillChip = styled(Chip)`
  margin: 0.3rem;
`;

export default function CorporateCV() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container>
        <TopBar>
          <IconButton onClick={() => setIsDark(!isDark)} color="primary">
            {isDark ? <LightMode /> : <DarkMode />}
          </IconButton>
        </TopBar>

        {/* Hero */}
        <Section display="flex" alignItems="center" gap={2}>
          <Avatar
            src="https://via.placeholder.com/100"
            alt="Profile Pic"
            sx={{ width: 100, height: 100 }}
          />
          <Box>
            <Typography variant="h4">John Deo</Typography>
            <Typography variant="subtitle1">Senior Frontend Developer</Typography>
          </Box>
        </Section>

        <Divider sx={{ marginY: 2 }} />

        {/* Summary */}
        <Section>
          <Typography variant="h6" color="primary">Summary</Typography>
          <Typography>
            Passionate frontend developer with 5+ years experience in building responsive web apps using React, MUI, and Next.js.
          </Typography>
        </Section>

        {/* Skills */}
        <Section>
          <Typography variant="h6" color="primary">Skills</Typography>
          <Box display="flex" flexWrap="wrap">
            {["React", "MUI", "Next.js", "TypeScript"].map(skill => (
              <SkillChip key={skill} label={skill} color="primary" />
            ))}
          </Box>
        </Section>

        {/* Work Experience */}
        <Section>
          <Typography variant="h6" color="primary">Work Experience</Typography>
          <Typography variant="subtitle1"><b>ABC Tech Pvt Ltd</b> (2021–Present)</Typography>
          <Typography variant="body2">Senior Frontend Developer</Typography>
          <Typography variant="body2">• Building scalable UIs with React & MUI.</Typography>
          <Typography variant="body2">• Leading frontend team for dashboard projects.</Typography>
        </Section>

        {/* Education */}
        <Section>
          <Typography variant="h6" color="primary">Education</Typography>
          <Typography variant="subtitle1">B.Tech CSE, XYZ University (2020)</Typography>
        </Section>

        {/* Projects */}
        <Section>
          <Typography variant="h6" color="primary">Projects</Typography>
          <Typography>Portfolio Website</Typography>
          <Button variant="outlined" color="primary" size="small" sx={{ my: 1 }}>View</Button>
          <Typography>Inventory Dashboard</Typography>
          <Button variant="outlined" color="primary" size="small">View</Button>
        </Section>

        {/* Certifications */}
        <Section>
          <Typography variant="h6" color="primary">Certifications</Typography>
          <Typography>Google UX Design</Typography>
        </Section>

        {/* Contact */}
        <Section>
          <Typography variant="h6" color="primary">Contact</Typography>
          <Typography>Email: john.deo@email.com</Typography>
          <Typography>Phone: +91 9999999999</Typography>
          <Typography>LinkedIn: linkedin.com/in/johndeo</Typography>
          <Typography>GitHub: github.com/johndeo</Typography>
        </Section>
      </Container>
    </ThemeProvider>
  );
}
