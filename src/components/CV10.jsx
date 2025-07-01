import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  Divider,
  Grid,
  Chip,
  Avatar,
  IconButton,
} from "@mui/material";
import { LinkedIn, GitHub, LightMode, DarkMode } from "@mui/icons-material";
import styled from "styled-components";

// Themes
const themes = [
  {
    name: "Classic B&W",
    bg: "#FFFFFF",
    text: "#111111",
    accent: "#000000",
    headerFont: "Merriweather, serif",
    bodyFont: "Libre Baskerville, serif",
  },
  {
    name: "Charcoal Cream",
    bg: "#2C2C2C",
    text: "#F5F5DC",
    accent: "#FFFFFF",
    headerFont: "Merriweather, serif",
    bodyFont: "Libre Baskerville, serif",
  },
  {
    name: "Warm Gray",
    bg: "#F5F5F5",
    text: "#111111",
    accent: "#333333",
    headerFont: "Merriweather, serif",
    bodyFont: "Libre Baskerville, serif",
  },
  {
    name: "Deep Brown",
    bg: "#3B2F2F",
    text: "#F5F5DC",
    accent: "#FFFFFF",
    headerFont: "Merriweather, serif",
    bodyFont: "Libre Baskerville, serif",
  },
];

const Container = styled(Box)`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
`;

const PageNumber = styled(Box)`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.85rem;
`;

export default function LuxurySerifBWCV() {
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
      h3: { fontFamily: active.headerFont, fontWeight: 700 },
      h4: { fontFamily: active.headerFont, fontWeight: 700 },
      h5: { fontFamily: active.headerFont, fontWeight: 600 },
    },
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        {/* Hero Block */}
        <Box textAlign="center">
          <Typography variant="h3">Tanya Roy</Typography>
          <Typography>Phone: +91 9123456789 | tanya.roy@email.com</Typography>
          <Typography>Bhubaneswar, Odisha, India</Typography>
          <IconButton color="primary"><LinkedIn /></IconButton>
          <IconButton color="primary"><GitHub /></IconButton>
          <IconButton onClick={nextTheme} color="primary">
            {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>

        {/* Summary Quote */}
        <Divider sx={{ my: 4, borderWidth: 2 }} />
        <Typography
          variant="h5"
          sx={{
            fontStyle: "italic",
            borderLeft: `6px solid ${active.accent}`,
            pl: 2,
          }}
        >
          “Luxury never goes out of style. Neither does clean design.”
        </Typography>
        <Divider sx={{ my: 4, borderWidth: 2 }} />

        {/* Skills */}
        <Typography variant="h5">Skills</Typography>
        <ul>
          {["Design Strategy", "UX Research", "Prototyping"].map((skill) => (
            <li key={skill}>
              <Typography>{skill}</Typography>
            </li>
          ))}
        </ul>

        {/* Languages & Interests */}
        <Box mt={4}>
          <Typography variant="h5">Languages & Interests</Typography>
          <Box mt={1} display="flex" gap={1} flexWrap="wrap">
            <Chip label="English" />
            <Chip label="Hindi" />
            <Chip label="Odia" />
            <Chip label="✈️ Travel" />
            <Chip label="🚗 Luxury Cars" />
            <Chip label="🎨 Art" />
          </Box>
        </Box>

        <PageNumber>— Page 1 —</PageNumber>

        <Divider sx={{ my: 4, borderWidth: 2 }} />

        {/* Page 2 */}
        <Typography variant="h5">Experience</Typography>
        <Typography>Creative Director @ Luxe Studio (2020–Now)</Typography>

        <Typography variant="h5" mt={4}>Education</Typography>
        <Typography>M.Des, NID</Typography>

        <Typography variant="h5" mt={4}>Projects</Typography>
        <Typography>Luxury Branding Kit</Typography>
        <Typography>High-End Website</Typography>

        <Typography variant="h5" mt={4}>Certificates & Achievements</Typography>
        <Typography>Google UX Design</Typography>
        <Typography>Speaker at Design Days</Typography>

        <Typography variant="h5" mt={4}>Awards</Typography>
        <Typography>🏆 Top Designer 2023</Typography>

        <PageNumber>— Page 2 —</PageNumber>

        <Divider sx={{ my: 4, borderWidth: 2 }} />

        <Box textAlign="center" mt={2}>
          <Typography variant="caption">Signature: Tanya Roy</Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
