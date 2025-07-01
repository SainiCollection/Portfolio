import React, { useState, useRef } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  Grid,
  Chip,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import { LinkedIn, GitHub, Print, LightMode, DarkMode } from "@mui/icons-material";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";

// Themes
const themes = [
  {
    name: "Warm Gray",
    primary: "#374151",
    bg: "#F9FAFB",
    accent: "#6B7280",
    font: "'Libre Baskerville', serif",
  },
  {
    name: "Soft Olive",
    primary: "#475569",
    bg: "#F3F4F6",
    accent: "#9CA3AF",
    font: "'Lora', serif",
  },
  {
    name: "Light Tan",
    primary: "#4B5563",
    bg: "#FAF7F2",
    accent: "#D1D5DB",
    font: "'Poppins', sans-serif",
  },
  {
    name: "Off Black",
    primary: "#111827",
    bg: "#F9FAFB",
    accent: "#6B7280",
    font: "'Montserrat', sans-serif",
  },
];

const Container = styled(Box)`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
`;

export default function NeoClassicResume() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];
  const printRef = useRef();

  const theme = createTheme({
    palette: {
      background: { default: active.bg },
      primary: { main: active.primary },
      text: { primary: active.primary },
    },
    typography: {
      fontFamily: active.font,
    },
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container ref={printRef}>
        {/* Header */}
        <Box textAlign="center" mb={3}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>Ananya Sharma</Typography>
          <Typography variant="subtitle1">Graphic Designer</Typography>
          <Typography variant="body2">
            +91 9112345678 | ananya.sharma@email.com | Jaipur, India
          </Typography>
          <Typography variant="body2">
            LinkedIn: /ananyasharma | Behance: /ananyadesign
          </Typography>
          <IconButton color="primary" onClick={nextTheme}>
            {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
          </IconButton>
          <IconButton color="primary" onClick={handlePrint}>
            <Print />
          </IconButton>
        </Box>

        {/* Big Quote */}
        <Box textAlign="center" mb={4} p={2}>
          <Typography variant="h6" sx={{ fontStyle: "italic" }}>
            "Designing brands with timeless elegance and bold stories."
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Layout */}
        <Grid container spacing={4}>
          {/* Left */}
          <Grid item xs={12} md={5}>
            <Typography variant="h6" color="primary">Skills</Typography>
            {["Graphic Design", "Branding"].map((s) => (
              <Chip key={s} label={s} sx={{ m: 0.5 }} />
            ))}

            <Box mt={3}>
              <Typography variant="h6" color="primary">Languages</Typography>
              {["English", "Hindi"].map((lang) => (
                <Chip key={lang} label={lang} sx={{ m: 0.5 }} />
              ))}
            </Box>

            <Box mt={3}>
              <Typography variant="h6" color="primary">Interests</Typography>
              {["Art", "Travel"].map((interest) => (
                <Chip key={interest} label={interest} sx={{ m: 0.5 }} />
              ))}
            </Box>
          </Grid>

          {/* Right */}
          <Grid item xs={12} md={7}>
            <Typography variant="h6" color="primary">Experience</Typography>
            <Typography>Brand Designer @ XYZ Creative</Typography>
            <Typography variant="body2">2021–Now</Typography>

            <Box mt={3}>
              <Typography variant="h6" color="primary">Education</Typography>
              <Typography>BA Design, DU, 2020</Typography>
            </Box>

            <Box mt={3}>
              <Typography variant="h6" color="primary">Projects</Typography>
              <Typography>Brand Identity, Social Campaign</Typography>
            </Box>

            <Box mt={3}>
              <Typography variant="h6" color="primary">Certificates</Typography>
              <Typography>Adobe Illustrator</Typography>
            </Box>

            <Box mt={3}>
              <Typography variant="h6" color="primary">Achievements</Typography>
              <Typography>Design India 2023</Typography>
            </Box>

            <Box mt={3}>
              <Typography variant="h6" color="primary">Awards</Typography>
              <Typography>Rising Star Designer</Typography>
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary" onClick={handlePrint}>
            Download PDF
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
