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
  Divider,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  LightMode,
  DarkMode,
} from "@mui/icons-material";
import styled from "styled-components";

// 4 themes
const themes = [
  {
    name: "Black-White",
    bg: "#FFFFFF",
    text: "#000000",
    accent: "#000000",
    headerFont: "Playfair Display, serif",
    bodyFont: "Lora, serif",
  },
  {
    name: "Off-White Pink",
    bg: "#FDF2F8",
    text: "#111827",
    accent: "#DB2777",
    headerFont: "Playfair Display, serif",
    bodyFont: "Lora, serif",
  },
  {
    name: "Gray-Charcoal",
    bg: "#F3F4F6",
    text: "#111827",
    accent: "#374151",
    headerFont: "Playfair Display, serif",
    bodyFont: "Lora, serif",
  },
  {
    name: "Soft Beige",
    bg: "#F5F5DC",
    text: "#111827",
    accent: "#C0A060",
    headerFont: "Playfair Display, serif",
    bodyFont: "Lora, serif",
  },
];

const Container = styled(Box)`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
`;

const BorderBox = styled(Box)`
  border: 1px solid #00000030;
  border-radius: 0px;
  padding: 2rem;
  margin: 1rem 0;
`;

export default function EditorialMagazineCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];

  const theme = createTheme({
    palette: {
      mode: "light",
      background: { default: active.bg },
      text: { primary: active.text },
      primary: { main: active.accent },
    },
    typography: {
      fontFamily: active.bodyFont,
      h3: {
        fontFamily: active.headerFont,
        fontWeight: 700,
      },
      h5: {
        fontFamily: active.headerFont,
        fontWeight: 600,
      },
    },
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h3">Neha Bhatt</Typography>
          <IconButton onClick={nextTheme} color="primary">
            {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h5">Editorial Designer</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Avatar
              src="https://via.placeholder.com/200"
              sx={{ width: 200, height: 200 }}
            />
          </Grid>
        </Grid>

        {/* Contact */}
        <BorderBox>
          <Typography>Phone: +91 9876001234</Typography>
          <Typography>Email: neha.bhatt@email.com</Typography>
          <Typography>Kolkata, WB, India</Typography>
          <Box mt={1}>
            <IconButton color="primary"><LinkedIn /></IconButton>
            <IconButton color="primary"><GitHub /></IconButton>
          </Box>
        </BorderBox>

        {/* Summary */}
        <BorderBox>
          <Typography
            variant="h5"
            sx={{ fontStyle: "italic", borderLeft: `4px solid ${active.accent}`, pl: 2 }}
          >
            “Bringing editorial elegance to digital design. Detail obsessed, story driven.”
          </Typography>
        </BorderBox>

        {/* 2-Column Layout */}
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <BorderBox>
              <Typography variant="h5">Skills</Typography>
              {["UX Writing", "Figma", "Adobe Suite", "Content Strategy"].map(skill => (
                <Typography key={skill}>— {skill}</Typography>
              ))}
            </BorderBox>

            <BorderBox>
              <Typography variant="h5">Languages</Typography>
              <Box mt={1} display="flex" gap={1}>
                <Chip label="English" color="primary" />
                <Chip label="Bengali" color="primary" />
                <Chip label="Hindi" color="primary" />
              </Box>
            </BorderBox>

            <BorderBox>
              <Typography variant="h5">Interests</Typography>
              <Box mt={1} display="flex" gap={1}>
                <Chip label="📷 Photography" color="primary" />
                <Chip label="📝 Fashion Blogging" color="primary" />
              </Box>
            </BorderBox>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={8}>
            <BorderBox>
              <Typography variant="h5">Experience</Typography>
              <Typography>Design Lead @ Vogue Digital (2021–Now)</Typography>
            </BorderBox>

            <BorderBox>
              <Typography variant="h5">Education</Typography>
              <Typography>MA Mass Communication, Jadavpur University</Typography>
            </BorderBox>

            <BorderBox>
              <Typography variant="h5">Projects</Typography>
              <Typography>Digital Magazine Redesign</Typography>
              <Typography>Storytelling Platform</Typography>
            </BorderBox>

            <BorderBox>
              <Typography variant="h5">Certificates</Typography>
              <Typography>Adobe Creative Expert</Typography>
            </BorderBox>

            <BorderBox>
              <Typography variant="h5">Achievements</Typography>
              <Typography>Speaker at Design India</Typography>
            </BorderBox>

            <BorderBox>
              <Typography variant="h5">Awards</Typography>
              <Typography>🏆 Editorial Designer of the Year</Typography>
            </BorderBox>
          </Grid>
        </Grid>

        {/* Footer */}
        <Divider sx={{ my: 4 }} />
        <Box textAlign="center">
          <Typography variant="body2">
            Page 2 of 2 — Neha Bhatt
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
