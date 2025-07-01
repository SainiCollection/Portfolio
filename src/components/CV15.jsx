import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Divider,
  Button,
  IconButton,
  LinearProgress,
} from "@mui/material";
import {
  LinkedIn,
  Instagram,
  Print,
  LightMode,
  DarkMode,
  SaveAlt,
} from "@mui/icons-material";
import styled from "styled-components";
import { useReactToPrint } from "react-to-print";

// === Themes ===
const themes = [
  {
    name: "Royal Blue",
    accent: "#3B82F6",
    bg: "#FFFFFF",
    text: "#111827",
    font: "'Inter', sans-serif",
  },
  {
    name: "Deep Olive",
    accent: "#556B2F",
    bg: "#FFFFFF",
    text: "#1F2937",
    font: "'Manrope', sans-serif",
  },
  {
    name: "Warm Gray",
    accent: "#6B7280",
    bg: "#FAFAFA",
    text: "#111827",
    font: "'Poppins', sans-serif",
  },
  {
    name: "Charcoal Black",
    accent: "#111827",
    bg: "#FFFFFF",
    text: "#111827",
    font: "'Space Grotesk', sans-serif",
  },
];

const Container = styled(Box)`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  background: ${({ bg }) => bg};
  color: ${({ text }) => text};
  font-family: ${({ font }) => font};
`;

const Section = styled(Box)`
  margin: 2rem 0;
`;

const DividerAccent = styled(Divider)`
  border-color: ${({ accent }) => accent};
  margin: 1rem 0;
`;

export default function CreativeBrandDesignerCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const t = themes[themeIndex];
  const printRef = useRef();

  const nextTheme = () =>
    setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <Container bg={t.bg} text={t.text} font={t.font} ref={printRef}>
      {/* === Header === */}
      <Box textAlign="center">
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Ananya Sharma
        </Typography>
        <Typography variant="h6" sx={{ color: t.accent }}>
          Creative Brand Designer
        </Typography>
        <Typography variant="body2">
          +91 9112345678 | ananya.sharma@email.com | Jaipur, Rajasthan, India
        </Typography>
        <Typography variant="body2">
          LinkedIn: /ananyasharma | Behance: /ananyadesign | Portfolio: ananya.design
        </Typography>

        <Box mt={2}>
          <IconButton onClick={nextTheme}>
            {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
          </IconButton>
          <IconButton onClick={handlePrint}>
            <Print />
          </IconButton>
        </Box>
      </Box>

      {/* === Summary === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ color: t.accent }}>
          Summary
        </Typography>
        <Typography variant="body1">
          "Creative Brand Designer with 4+ years crafting modern brand identities,
          visual campaigns, and high-impact graphics for startups and agencies worldwide."
        </Typography>
      </Section>

      {/* === Skills === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ color: t.accent }}>
          Skills
        </Typography>
        <Grid container spacing={1}>
          {[
            "Branding Strategy",
            "Graphic Design",
            "Logo Design",
            "Packaging",
            "UI Design",
            "Figma",
            "Adobe Illustrator",
            "Photoshop",
            "InDesign",
          ].map((s) => (
            <Grid item key={s}>
              <Chip label={s} />
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* === Languages & Interests === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ color: t.accent }}>
          Languages & Interests
        </Typography>
        <Grid container spacing={1}>
          {["English", "Hindi"].map((l) => (
            <Grid item key={l}>
              <Chip label={l} />
            </Grid>
          ))}
          {["Art Exhibitions", "Travel Blogging", "Calligraphy"].map((i) => (
            <Grid item key={i}>
              <Chip label={i} />
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* === Page Break === */}
      <Box sx={{ pageBreakAfter: "always" }}></Box>

      {/* === Experience === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ color: t.accent }}>
          Experience
        </Typography>
        <Box mt={1}>
          <Typography>Brand Designer @ XYZ Creative (2021–Now)</Typography>
          <ul>
            <li>Led over 30 branding projects for startups</li>
            <li>Designed visual identities, brand guidelines, marketing assets</li>
            <li>Coordinated with developers for seamless digital handoffs</li>
          </ul>
        </Box>
        <Box mt={1}>
          <Typography>Junior Designer @ ABC Studio (2019–2021)</Typography>
          <ul>
            <li>Created social media creatives, print collaterals</li>
            <li>Assisted senior designers with client pitches</li>
          </ul>
        </Box>
      </Section>

      {/* === Education === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ color: t.accent }}>
          Education
        </Typography>
        <Typography>BA Design, Delhi University, 2020</Typography>
      </Section>

      {/* === Projects === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ color: t.accent }}>
          Projects
        </Typography>
        <Typography>
          Urban Chic Brand Identity — Complete branding kit for lifestyle brand
        </Typography>
        <Typography>
          Social Awareness Campaign — Designed visual assets for NGO initiative
        </Typography>
      </Section>

      {/* === Certificates & Achievements === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ color: t.accent }}>
          Certificates & Achievements
        </Typography>
        <Typography>Adobe Certified Illustrator Expert</Typography>
        <Typography>Google UX Design Professional</Typography>
        <Typography>Featured in Design India 2023</Typography>
        <Typography>Dribbble Spotlight Designer</Typography>
      </Section>

      {/* === Awards === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ color: t.accent }}>
          Awards
        </Typography>
        <Typography>🏆 Rising Star Designer 2022</Typography>
      </Section>

      {/* === Footer === */}
      <Box textAlign="center" mt={3}>
        <Typography variant="body2">
          Page 2 — ananya.design
        </Typography>
        <Button variant="contained" onClick={handlePrint} sx={{ mt: 1 }}>
          Download PDF
        </Button>
      </Box>
    </Container>
  );
}
