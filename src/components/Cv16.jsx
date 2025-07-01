import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Button,
  Avatar,
} from "@mui/material";
import styled from "styled-components";

// === Theme + Layout Config ===
const themes = [
  {
    name: "Theme 1",
    font: "'Inter', sans-serif",
    layout: "left-name",
  },
  {
    name: "Theme 2",
    font: "'Manrope', sans-serif",
    layout: "center-stack",
  },
  {
    name: "Theme 3",
    font: "'IBM Plex Sans', sans-serif",
    layout: "split-grid",
  },
];

const CVContainer = styled(Box)`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  background: #ffffff;
  color: #000000;
  font-family: ${({ font }) => font};
`;

const Accent = styled(Box)`
  height: 2px;
  background: #1e40af;
  margin: 0.5rem 0 1rem;
`;

export default function SimpleBlockLayoutCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const t = themes[themeIndex];

  const nextTheme = () =>
    setThemeIndex((prev) => (prev + 1) % themes.length);

  const sections = {
    skills: [
      "Branding",
      "Graphic Design",
      "Logo Design",
      "UI/UX",
      "Figma",
      "Adobe Illustrator",
      "Photoshop",
      "InDesign",
      "Typography",
      "Print Design",
      "Packaging",
    ],
    languages: ["English", "Hindi"],
    interests: ["Art Exhibits", "Calligraphy", "Blogging", "Photography"],
  };

  return (
    <CVContainer font={t.font}>
      {/* === Theme 1: Left Name === */}
      {t.layout === "left-name" && (
        <>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h3" fontWeight="bold">
                Ananya Sharma
              </Typography>
              <Typography variant="h6">Creative Brand Designer</Typography>
            </Box>
            <Box textAlign="right">
              <Typography>+91 9112345678</Typography>
              <Typography>ananya.sharma@email.com</Typography>
              <Typography>Jaipur, India</Typography>
              <Typography>
                LinkedIn: /ananyasharma | Behance: /ananyadesign | Portfolio: ananya.design
              </Typography>
            </Box>
          </Box>
          <Accent />
        </>
      )}

      {/* === Theme 2: Center Stack === */}
      {t.layout === "center-stack" && (
        <>
          <Box textAlign="center">
            <Typography variant="h3" fontWeight="bold">
              Ananya Sharma
            </Typography>
            <Typography variant="h6">Creative Brand Designer</Typography>
            <Typography>
              +91 9112345678 | ananya.sharma@email.com | Jaipur, India
            </Typography>
            <Typography>
              LinkedIn: /ananyasharma | Behance: /ananyadesign | Portfolio: ananya.design
            </Typography>
          </Box>
          <Accent />
        </>
      )}

      {/* === Theme 3: Split Grid === */}
      {t.layout === "split-grid" && (
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h3" fontWeight="bold">
              Ananya Sharma
            </Typography>
            <Typography variant="h6">Creative Brand Designer</Typography>
          </Grid>
          <Grid item xs={4} textAlign="right">
            <Avatar sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              +91 9112345678 | ananya.sharma@email.com | Jaipur, India
            </Typography>
            <Typography>
              LinkedIn: /ananyasharma | Behance: /ananyadesign | Portfolio: ananya.design
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Accent />
          </Grid>
        </Grid>
      )}

      {/* === Summary === */}
      <Typography variant="h6">Summary</Typography>
      <Typography paragraph>
        “Creative Designer with 5+ years building visual stories, logos,
        packaging and campaigns for modern brands. Passionate about minimalist
        aesthetics and clear brand messages.”
      </Typography>

      {/* === Skills === */}
      <Typography variant="h6">Skills</Typography>
      <Grid container spacing={1}>
        {sections.skills.map((skill) => (
          <Grid item key={skill}>
            <Chip label={skill} />
          </Grid>
        ))}
      </Grid>

      {/* === Languages & Interests === */}
      <Typography variant="h6" mt={2}>
        Languages & Interests
      </Typography>
      <Grid container spacing={1}>
        {sections.languages.map((lang) => (
          <Grid item key={lang}>
            <Chip label={lang} />
          </Grid>
        ))}
        {sections.interests.map((interest) => (
          <Grid item key={interest}>
            <Chip label={interest} />
          </Grid>
        ))}
      </Grid>

      {/* === Experience === */}
      <Typography variant="h6" mt={2}>
        Experience
      </Typography>
      <Box>
        <Typography>Brand Designer @ XYZ Creative (2021–Now)</Typography>
        <ul>
          <li>Delivered 40+ full brand identity kits</li>
          <li>Managed client presentations and approvals</li>
          <li>Coordinated print-ready files with printers</li>
        </ul>
        <Typography>Junior Designer @ ABC Studio (2019–2021)</Typography>
        <ul>
          <li>Created social & digital ad creatives</li>
          <li>Assisted senior designers with client proposals</li>
          <li>Contributed to team brainstorming sessions</li>
        </ul>
        <Typography>Intern Designer @ Creativa Agency (2018–2019)</Typography>
        <ul>
          <li>Supported logo design tasks</li>
          <li>Learned layout & typography</li>
        </ul>
      </Box>

      {/* === Education === */}
      <Typography variant="h6" mt={2}>
        Education
      </Typography>
      <Typography>BA Design, Delhi University, 2020</Typography>
      <Typography>Diploma in Graphic Design, Arena Multimedia, 2018</Typography>

      {/* === Projects === */}
      <Typography variant="h6" mt={2}>
        Projects
      </Typography>
      <Typography>Urban Luxe Brand Identity</Typography>
      <Typography>NGO Campaign Posters</Typography>
      <Typography>Lifestyle Packaging Design</Typography>
      <Typography>Fashion Lookbook</Typography>

      {/* === Certificates === */}
      <Typography variant="h6" mt={2}>
        Certificates
      </Typography>
      <Typography>Adobe Certified Designer</Typography>
      <Typography>Google UX Design Specialization</Typography>
      <Typography>Typography Masterclass</Typography>

      {/* === Achievements === */}
      <Typography variant="h6" mt={2}>
        Achievements
      </Typography>
      <ul>
        <li>Featured in Design India 2023</li>
        <li>Guest Speaker at Creative Conclave</li>
        <li>Behance Top Project 2022</li>
      </ul>

      {/* === Awards === */}
      <Typography variant="h6" mt={2}>
        Awards
      </Typography>
      <Typography>Rising Star Designer</Typography>
      <Typography>Best Packaging Design 2023</Typography>

      {/* === Theme Switch Button === */}
      <Box textAlign="center" mt={4}>
        <Button onClick={nextTheme} variant="contained">
          Switch Theme ({t.name})
        </Button>
      </Box>
    </CVContainer>
  );
}
