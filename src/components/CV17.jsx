import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Avatar,
  Button,
} from "@mui/material";
import styled from "styled-components";

// === Theme Config ===
const themes = [
  {
    name: "Theme 1",
    fonts: "'Lora', serif, 'Roboto', sans-serif",
    layout: "sidebar-left",
  },
  {
    name: "Theme 2",
    fonts: "'Merriweather', serif, 'Open Sans', sans-serif",
    layout: "top-full-split",
  },
  {
    name: "Theme 3",
    fonts: "'Space Grotesk', sans-serif, 'Work Sans', sans-serif",
    layout: "big-name-pic",
  },
];

const CVContainer = styled(Box)`
  max-width: 1100px;
  margin: auto;
  padding: 2rem;
  background: #ffffff;
  color: #000000;
  font-family: ${({ font }) => font};
`;

const Accent = styled(Box)`
  height: 3px;
  background: #1e40af;
  margin: 0.5rem 0 1rem;
`;

export default function SidebarSplitLayoutCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const t = themes[themeIndex];

  const nextTheme = () =>
    setThemeIndex((prev) => (prev + 1) % themes.length);

  const data = {
    name: "Ananya Sharma",
    role: "Creative Brand Designer",
    phone: "+91 9112345678",
    email: "ananya.sharma@email.com",
    city: "Jaipur, India",
    socials: [
      { label: "LinkedIn", value: "/ananyasharma" },
      { label: "Behance", value: "/ananyadesign" },
      { label: "Portfolio", value: "ananya.design" },
    ],
    summary:
      "Creative Designer with 5+ years building visual stories, logos, packaging and campaigns for modern brands. Passionate about minimalist aesthetics and clear brand messages.",
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
    experience: [
      {
        title: "Brand Designer @ XYZ Creative (2021–Now)",
        points: [
          "Delivered 40+ full brand identity kits",
          "Managed client presentations and approvals",
          "Coordinated print-ready files with printers",
        ],
      },
      {
        title: "Junior Designer @ ABC Studio (2019–2021)",
        points: [
          "Created social & digital ad creatives",
          "Assisted senior designers with client proposals",
          "Contributed to team brainstorming sessions",
        ],
      },
      {
        title: "Intern Designer @ Creativa Agency (2018–2019)",
        points: ["Supported logo design tasks", "Learned layout & typography"],
      },
    ],
    education: [
      "BA Design, Delhi University, 2020",
      "Diploma in Graphic Design, Arena Multimedia, 2018",
    ],
    projects: [
      "Urban Luxe Brand Identity",
      "NGO Campaign Posters",
      "Lifestyle Packaging Design",
      "Fashion Lookbook",
    ],
  };

  return (
    <CVContainer font={t.fonts}>
      {/* === Theme 1: Sidebar Left === */}
      {t.layout === "sidebar-left" && (
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography variant="h4">{data.name}</Typography>
            <Typography>{data.role}</Typography>
            <Accent />
            <Typography>{data.phone}</Typography>
            <Typography>{data.email}</Typography>
            <Typography>{data.city}</Typography>
            <Box mt={2}>
              {data.socials.map((s) => (
                <Typography key={s.label}>
                  {s.label}: {s.value}
                </Typography>
              ))}
            </Box>
            <Accent />
            <Typography variant="h6">Skills</Typography>
            {data.skills.map((skill) => (
              <Chip key={skill} label={skill} sx={{ m: 0.5 }} />
            ))}
            <Accent />
            <Typography variant="h6">Languages</Typography>
            {data.languages.map((l) => (
              <Chip key={l} label={l} sx={{ m: 0.5 }} />
            ))}
            <Typography variant="h6">Interests</Typography>
            {data.interests.map((i) => (
              <Chip key={i} label={i} sx={{ m: 0.5 }} />
            ))}
          </Grid>

          <Grid item xs={8}>
            <Typography variant="h6">Summary</Typography>
            <Typography paragraph>{data.summary}</Typography>
            <Typography variant="h6">Experience</Typography>
            {data.experience.map((exp) => (
              <Box key={exp.title} mb={2}>
                <Typography>{exp.title}</Typography>
                <ul>
                  {exp.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </Box>
            ))}
            <Typography variant="h6">Projects</Typography>
            {data.projects.map((p) => (
              <Typography key={p}>{p}</Typography>
            ))}
            <Typography variant="h6">Education</Typography>
            {data.education.map((e) => (
              <Typography key={e}>{e}</Typography>
            ))}
          </Grid>
        </Grid>
      )}

      {/* === Theme 2: Top Full + Split === */}
      {t.layout === "top-full-split" && (
        <>
          <Box textAlign="center">
            <Typography variant="h4">{data.name}</Typography>
            <Typography>{data.role}</Typography>
            <Accent />
            <Typography>{data.phone} | {data.email} | {data.city}</Typography>
            {data.socials.map((s) => (
              <Typography key={s.label}>{s.label}: {s.value}</Typography>
            ))}
          </Box>
          <Accent />
          <Typography variant="h6">Summary</Typography>
          <Typography paragraph>{data.summary}</Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h6">Skills</Typography>
              {data.skills.map((skill) => (
                <Chip key={skill} label={skill} sx={{ m: 0.5 }} />
              ))}
              <Typography variant="h6">Languages</Typography>
              {data.languages.map((l) => (
                <Chip key={l} label={l} sx={{ m: 0.5 }} />
              ))}
              <Typography variant="h6">Interests</Typography>
              {data.interests.map((i) => (
                <Chip key={i} label={i} sx={{ m: 0.5 }} />
              ))}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Experience</Typography>
              {data.experience.map((exp) => (
                <Box key={exp.title} mb={2}>
                  <Typography>{exp.title}</Typography>
                  <ul>
                    {exp.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </Box>
              ))}
              <Typography variant="h6">Projects</Typography>
              {data.projects.map((p) => (
                <Typography key={p}>{p}</Typography>
              ))}
              <Typography variant="h6">Education</Typography>
              {data.education.map((e) => (
                <Typography key={e}>{e}</Typography>
              ))}
            </Grid>
          </Grid>
        </>
      )}

      {/* === Theme 3: Big Name + Pic === */}
      {t.layout === "big-name-pic" && (
        <>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <Typography variant="h3">{data.name}</Typography>
              <Typography>{data.role}</Typography>
            </Grid>
            <Grid item xs={4} textAlign="right">
              <Avatar sx={{ width: 80, height: 80 }} />
            </Grid>
          </Grid>
          <Typography>{data.phone} | {data.email} | {data.city}</Typography>
          {data.socials.map((s) => (
            <Typography key={s.label}>{s.label}: {s.value}</Typography>
          ))}
          <Accent />
          <Typography variant="h6">Summary</Typography>
          <Typography paragraph>{data.summary}</Typography>
          <Typography variant="h6">Skills</Typography>
          {data.skills.map((skill) => (
            <Chip key={skill} label={skill} sx={{ m: 0.5 }} />
          ))}
          <Typography variant="h6">Languages</Typography>
          {data.languages.map((l) => (
            <Chip key={l} label={l} sx={{ m: 0.5 }} />
          ))}
          <Typography variant="h6">Interests</Typography>
          {data.interests.map((i) => (
            <Chip key={i} label={i} sx={{ m: 0.5 }} />
          ))}
          <Typography variant="h6">Experience</Typography>
          {data.experience.map((exp) => (
            <Box key={exp.title} mb={2}>
              <Typography>{exp.title}</Typography>
              <ul>
                {exp.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </Box>
          ))}
          <Typography variant="h6">Projects</Typography>
          {data.projects.map((p) => (
            <Typography key={p}>{p}</Typography>
          ))}
          <Typography variant="h6">Education</Typography>
          {data.education.map((e) => (
            <Typography key={e}>{e}</Typography>
          ))}
        </>
      )}

      {/* === Switch === */}
      <Box textAlign="center" mt={4}>
        <Button variant="contained" onClick={nextTheme}>
          Switch Theme ({t.name})
        </Button>
      </Box>
    </CVContainer>
  );
}
