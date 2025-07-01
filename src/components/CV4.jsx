import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  IconButton,
  Grid,
  Link,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import styled from "styled-components";

const themes = [
  {
    name: "White",
    bg: "#FFFFFF",
    text: "#000000",
    accent: "#FFD700",
    font: "Playfair Display, serif",
    body: "Lato, sans-serif",
  },
  {
    name: "Black",
    bg: "#000000",
    text: "#FFFFFF",
    accent: "#FFD700",
    font: "Playfair Display, serif",
    body: "Lato, sans-serif",
  },
  {
    name: "Charcoal",
    bg: "#2C2C2C",
    text: "#FFFFFF",
    accent: "#FFD700",
    font: "Playfair Display, serif",
    body: "Lato, sans-serif",
  },
  {
    name: "Deep Navy",
    bg: "#1E3A8A",
    text: "#FFFFFF",
    accent: "#FFD700",
    font: "Playfair Display, serif",
    body: "Lato, sans-serif",
  },
];

const Container = styled(Box)`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
`;

const Initial = styled(Typography)`
  font-size: 8rem;
  font-weight: bold;
  opacity: 0.05;
  position: absolute;
  top: -20px;
  left: 0;
`;

const Section = styled(Box)`
  margin-top: 2rem;
`;

export default function ClassicElegantCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];

  const theme = createTheme({
    palette: {
      mode: themeIndex === 0 ? "light" : "dark",
      background: { default: active.bg },
      text: { primary: active.text },
      primary: { main: active.accent },
    },
    typography: {
      fontFamily: active.body,
      h4: { fontFamily: active.font, fontWeight: 600 },
      h5: { fontFamily: active.font, fontWeight: 600 },
    },
  });

  const nextTheme = () =>
    setThemeIndex((prev) => (prev + 1) % themes.length);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ position: "relative" }}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={nextTheme} color="primary">
            {themeIndex === 0 ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>

        {/* Decorative Initial */}
        <Initial>SK</Initial>

        {/* Page 1 */}
        <Typography variant="h4" color="primary">
          Simran Kaur
        </Typography>
        <Typography variant="h6">Content Strategist</Typography>
        <Box mt={1}>
          <Typography>Phone: +91 9123456789</Typography>
          <Typography>Email: simran.kaur@email.com</Typography>
          <Typography>Chandigarh, Punjab, India</Typography>
        </Box>
        <Box mt={1}>
          <Link href="#">LinkedIn: /simrankaur</Link> |{" "}
          <Link href="#">Behance: /simrankaurs</Link>
        </Box>

        <Section>
          <Typography variant="h5" color="primary">
            Summary
          </Typography>
          <Typography>
            Result-driven content strategist with passion for branding and storytelling.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" color="primary">
            Skills
          </Typography>
          <List>
            {["Copywriting", "SEO", "Marketing Strategy", "Branding"].map(
              (skill) => (
                <ListItem key={skill} sx={{ pl: 0 }}>
                  - {skill}
                </ListItem>
              )
            )}
          </List>
        </Section>

        <Divider sx={{ borderColor: "primary.main", my: 4 }} />

        {/* Page 2 */}
        <Section>
          <Typography variant="h5" color="primary">
            Experience
          </Typography>
          <Typography variant="subtitle1">
            Content Lead — ABC Marketing (2020–Present)
          </Typography>
          <Typography variant="subtitle1">
            Copywriter — XYZ Agency (2018–2020)
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" color="primary">
            Education
          </Typography>
          <Typography>BA English, Delhi University, 2018</Typography>
        </Section>

        <Section>
          <Typography variant="h5" color="primary">
            Projects
          </Typography>
          <Typography>Brand Revamp</Typography>
          <Typography>Social Media Campaign</Typography>
        </Section>

        <Section>
          <Typography variant="h5" color="primary">
            Certificates
          </Typography>
          <Typography>HubSpot Content Marketing</Typography>
        </Section>

        <Section>
          <Typography variant="h5" color="primary">
            Achievements
          </Typography>
          <List>
            <ListItem sx={{ pl: 0 }}>- Published Author</ListItem>
            <ListItem sx={{ pl: 0 }}>- TEDx Speaker</ListItem>
          </List>
        </Section>

        <Section>
          <Typography variant="h5" color="primary">
            Languages
          </Typography>
          <Typography>English, Punjabi, Hindi</Typography>
        </Section>

        <Section>
          <Typography variant="h5" color="primary">
            Interests
          </Typography>
          <Typography>Poetry, Reading, Public Speaking</Typography>
        </Section>

        <Section>
          <Typography variant="h5" color="primary">
            Awards
          </Typography>
          <Typography>🏅 Top Marketer Award 2021</Typography>
        </Section>
      </Container>
    </ThemeProvider>
  );
}
