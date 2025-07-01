import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  IconButton,
  Chip,
  Divider,
} from "@mui/material";
import { LinkedIn, Web, LightMode, DarkMode } from "@mui/icons-material";
import styled from "styled-components";

// Themes
const themes = [
  {
    name: "White-Navy",
    leftBg: "#FFFFFF",
    rightBg: "#1E3A8A",
    textLeft: "#111827",
    textRight: "#F9FAFB",
    font: "Merriweather, serif",
  },
  {
    name: "White-Charcoal",
    leftBg: "#FFFFFF",
    rightBg: "#374151",
    textLeft: "#111827",
    textRight: "#F9FAFB",
    font: "IBM Plex Sans, sans-serif",
  },
  {
    name: "Off White-Teal",
    leftBg: "#F9FAFB",
    rightBg: "#0D9488",
    textLeft: "#111827",
    textRight: "#F9FAFB",
    font: "DM Sans, sans-serif",
  },
  {
    name: "Cream-Burgundy",
    leftBg: "#FAF3E0",
    rightBg: "#7C2D12",
    textLeft: "#111827",
    textRight: "#F9FAFB",
    font: "Cabin, sans-serif",
  },
];

const Container = styled(Box)`
  display: flex;
  height: 100vh;
`;

const Left = styled(Box)`
  flex: 1;
  padding: 3rem;
`;

const Right = styled(Box)`
  flex: 1;
  padding: 3rem;
`;

const DividerLine = styled(Box)`
  width: 2px;
  background: #d1d5db;
`;

export default function SplitColumnCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];

  const theme = createTheme({
    palette: {
      background: { default: active.leftBg },
      text: { primary: active.textLeft },
    },
    typography: {
      fontFamily: active.font,
    },
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        {/* Left */}
        <Left sx={{ background: active.leftBg, color: active.textLeft }}>
          <Typography variant="h3" mb={2}>Shivani Rana</Typography>
          <Typography variant="body1">Delhi, India</Typography>
          <Typography variant="body1">+91 9876012345</Typography>
          <Typography variant="body1">shivani.rana@email.com</Typography>
          <Box mt={1}>
            <IconButton color="inherit"><LinkedIn /></IconButton>
            <IconButton color="inherit"><Web /></IconButton>
            <IconButton color="inherit" onClick={nextTheme}>
              {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6">Skills</Typography>
          {["UI/UX Design", "Figma", "Prototyping"].map((s) => (
            <Typography key={s}>{s}</Typography>
          ))}

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6">Languages</Typography>
          <Box display="flex" gap={1}>
            <Chip label="English" />
            <Chip label="Hindi" />
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6">Interests</Typography>
          <Box display="flex" gap={1}>
            <Chip label="Sketching" />
            <Chip label="Journaling" />
          </Box>
        </Left>

        <DividerLine />

        {/* Right */}
        <Right sx={{ background: active.rightBg, color: active.textRight }}>
          <Typography variant="h6">Experience</Typography>
          <Typography>Product Designer @ ABC Design Studio</Typography>
          <Typography variant="body2">2021–Now</Typography>

          <Divider sx={{ my: 2, borderColor: "#ccc" }} />

          <Typography variant="h6">Education</Typography>
          <Typography>B.Des, NIFT, 2020</Typography>

          <Divider sx={{ my: 2, borderColor: "#ccc" }} />

          <Typography variant="h6">Projects</Typography>
          <Typography>App Redesign</Typography>
          <Typography>Branding Kit</Typography>

          <Divider sx={{ my: 2, borderColor: "#ccc" }} />

          <Typography variant="h6">Certificates</Typography>
          <Typography>Adobe Creative</Typography>

          <Divider sx={{ my: 2, borderColor: "#ccc" }} />

          <Typography variant="h6">Achievements</Typography>
          <Typography>Behance Feature</Typography>

          <Divider sx={{ my: 2, borderColor: "#ccc" }} />

          <Typography variant="h6">Awards</Typography>
          <Typography>🏆 Best Designer 2023</Typography>
        </Right>
      </Container>
    </ThemeProvider>
  );
}
