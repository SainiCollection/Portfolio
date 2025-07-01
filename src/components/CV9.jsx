import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  Grid,
  IconButton,
  Avatar,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  LightMode,
  DarkMode,
  CheckCircle,
} from "@mui/icons-material";
import styled from "styled-components";
import QRCode from "react-qr-code";

// 4 Themes
const themes = [
  {
    name: "Corporate Blue",
    bg: "#FFFFFF",
    text: "#111827",
    accent: "#2563EB",
    headerFont: "Manrope, sans-serif",
    bodyFont: "Open Sans, sans-serif",
  },
  {
    name: "Navy Gold",
    bg: "#FFFFFF",
    text: "#111827",
    accent: "#C084FC",
    headerFont: "Manrope, sans-serif",
    bodyFont: "Open Sans, sans-serif",
  },
  {
    name: "Cool Gray",
    bg: "#F3F4F6",
    text: "#111827",
    accent: "#6B7280",
    headerFont: "Manrope, sans-serif",
    bodyFont: "Open Sans, sans-serif",
  },
  {
    name: "Forest Green",
    bg: "#FFFFFF",
    text: "#111827",
    accent: "#16A34A",
    headerFont: "Manrope, sans-serif",
    bodyFont: "Open Sans, sans-serif",
  },
];

const Container = styled(Box)`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
`;

export default function CorporateBlueGridCV() {
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
      h4: { fontFamily: active.headerFont, fontWeight: 700 },
      h5: { fontFamily: active.headerFont, fontWeight: 600 },
    },
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        {/* Top Bar */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h4">Ritu Kapoor</Typography>
          <Typography variant="h6" color="primary">
            Senior Software Engineer
          </Typography>
          <Box>
            <Typography>Phone: +91 9876054321</Typography>
            <Typography>Email: ritu.kapoor@email.com</Typography>
            <IconButton color="primary"><LinkedIn /></IconButton>
            <IconButton color="primary"><GitHub /></IconButton>
            <IconButton onClick={nextTheme} color="primary">
              {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Box>
        </Grid>

        {/* Page 1 */}
        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" color="primary">Summary</Typography>
            <Typography>
              “Senior Software Engineer with enterprise product delivery expertise.”
            </Typography>

            <Box mt={2}>
              <Typography variant="h5" color="primary">Skills</Typography>
              {["React", "Redux", "Node", "Java", "Cloud"].map((skill) => (
                <Typography key={skill}>— {skill}</Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Avatar
              src="https://via.placeholder.com/200"
              sx={{ width: 200, height: 200, mb: 2 }}
            />
            <Typography>Indore, MP, India</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Page 2 */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" color="primary">Experience</Typography>
            <Typography>Tech Lead @ Infosys (2021–Now)</Typography>

            <Typography variant="h5" color="primary" mt={4}>Education</Typography>
            <Typography>M.Tech Software Engineering, IIT BHU</Typography>

            <Typography variant="h5" color="primary" mt={4}>Projects</Typography>
            <ul>
              <li>SaaS Platform</li>
              <li>ERP System</li>
            </ul>

            <Typography variant="h5" color="primary" mt={4}>Certificates</Typography>
            <Typography>
              <CheckCircle color="primary" fontSize="small" /> AWS Cloud Practitioner
            </Typography>

            <Typography variant="h5" color="primary" mt={4}>Achievements</Typography>
            <Typography>
              <CheckCircle color="primary" fontSize="small" /> Best Tech Lead Award
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" color="primary">Languages & Interests</Typography>
            <Box mt={1} display="flex" gap={1} flexWrap="wrap">
              <Chip label="English" color="primary" />
              <Chip label="Hindi" color="primary" />
              <Chip label="📚 Reading" color="primary" />
              <Chip label="🏸 Badminton" color="primary" />
            </Box>

            <Typography variant="h5" color="primary" mt={4}>Awards</Typography>
            <Typography>🏅 Employee of the Year</Typography>

            <Box mt={4}>
              <Typography variant="h5" color="primary">View Online</Typography>
              <QRCode value="https://ritukapoor.com" size={80} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
