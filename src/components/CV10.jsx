import React, { useState, useRef } from "react";
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
  Button,
  Container,
  List,
  ListItem,
} from "@mui/material";
import { LinkedIn, GitHub, LightMode, DarkMode, Print, Download } from "@mui/icons-material";
import styled from "@emotion/styled";
import { toPng } from "html-to-image";

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

const CVContainer = styled(Box)`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  position: relative;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.palette.background.default};

  @media print {
    box-shadow: none;
    padding: 1.5rem !important;
    max-width: 100% !important;
    margin: 0 !important;
  }
`;

const Section = styled(Box)`
  margin-bottom: 2rem;
`;

const SectionTitle = styled(Typography)`
  font-weight: 700 !important;
  margin-bottom: 1rem !important;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 2px;
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;

const PrintHide = styled(Box)`
  @media print {
    display: none !important;
  }
`;

const ExperienceItem = styled(Box)`
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 16px;
  border-left: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

const PageNumber = styled(Box)`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.85rem;
`;

export default function LuxurySerifBWCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];
  const cvRef = useRef();

  const theme = createTheme({
    palette: {
      mode: "light",
      background: { default: active.bg, paper: active.bg },
      text: { primary: active.text },
      primary: { main: active.accent },
    },
    typography: {
      fontFamily: active.bodyFont,
      h3: { 
        fontFamily: active.headerFont, 
        fontWeight: 700,
        letterSpacing: 1.5
      },
      h4: { 
        fontFamily: active.headerFont, 
        fontWeight: 700,
        letterSpacing: 1
      },
      h5: { 
        fontFamily: active.headerFont, 
        fontWeight: 600,
        letterSpacing: 1
      },
      body1: { lineHeight: 1.6 }
    },
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (cvRef.current) {
      toPng(cvRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "tanya-roy-cv.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error("Error downloading CV:", err);
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <PrintHide display="flex" justifyContent="flex-end" mb={2}>
          <IconButton onClick={nextTheme} color="primary" sx={{ mr: 1 }}>
            {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
          </IconButton>
          <Button 
            variant="outlined" 
            startIcon={<Print />} 
            onClick={handlePrint}
            sx={{ mr: 1 }}
          >
            Print
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<Download />} 
            onClick={handleDownload}
          >
            Download
          </Button>
        </PrintHide>

        <CVContainer ref={cvRef}>
          {/* Hero Block */}
          <Box textAlign="center" mb={4}>
            <Typography variant="h3" sx={{ letterSpacing: 2 }}>
              Tanya Roy
            </Typography>
            <Typography variant="h6" color="textSecondary" mt={1}>
              Luxury Brand Creative Director
            </Typography>
            <Typography mt={1}>Phone: +91 9123456789</Typography>
            <Typography>Email: tanya.roy@email.com</Typography>
            <Typography>Bhubaneswar, Odisha, India</Typography>
            <Box mt={1}>
              <IconButton color="primary"><LinkedIn /></IconButton>
              <IconButton color="primary"><GitHub /></IconButton>
            </Box>
          </Box>

          {/* Summary Quote */}
          <Divider sx={{ my: 4, borderWidth: 2, borderColor: "primary.main" }} />
          <Typography
            variant="h5"
            sx={{
              fontStyle: "italic",
              borderLeft: `6px solid ${active.accent}`,
              pl: 2,
              textAlign: "center",
              maxWidth: "700px",
              margin: "auto",
              letterSpacing: 0.5
            }}
          >
            “Luxury never goes out of style. Neither does clean design.”
          </Typography>
          <Divider sx={{ my: 4, borderWidth: 2, borderColor: "primary.main" }} />

          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              <Section>
                <SectionTitle variant="h5" color="primary">Professional Profile</SectionTitle>
                <Typography>
                  Creative Director with 10+ years of experience in luxury brand design. 
                  Specialized in creating timeless visual identities for high-end fashion 
                  and lifestyle brands. Passionate about craftsmanship and attention to detail.
                </Typography>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Core Competencies</SectionTitle>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>— Brand Strategy & Positioning</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>— Luxury Visual Identity Systems</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>— Art Direction & Photography</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>— High-End Packaging Design</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>— Editorial Design & Typography</Typography>
                  </ListItem>
                </List>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Technical Skills</SectionTitle>
                <Grid container spacing={1}>
                  {[
                    "Adobe Creative Suite", "Figma", "Sketch", 
                    "InDesign", "Photoshop", "Illustrator",
                    "Premiere Pro", "After Effects"
                  ].map((skill) => (
                    <Grid item key={skill}>
                      <Chip label={skill} variant="outlined" />
                    </Grid>
                  ))}
                </Grid>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Education</SectionTitle>
                <Box mb={2}>
                  <Typography fontWeight={600}>Master of Design</Typography>
                  <Typography>National Institute of Design | 2010-2012</Typography>
                  <Typography color="textSecondary">Specialization: Visual Communication</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>BFA in Graphic Design</Typography>
                  <Typography>College of Art, Delhi | 2006-2010</Typography>
                </Box>
              </Section>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={6}>
              <Section>
                <SectionTitle variant="h5" color="primary">Professional Experience</SectionTitle>
                
                <ExperienceItem>
                  <Typography variant="subtitle1" fontWeight={600}>Creative Director</Typography>
                  <Typography color="primary" fontStyle="italic">Luxe Studio | 2020–Present</Typography>
                  <Typography variant="body2" mt={1}>
                    • Lead creative vision for luxury fashion clients including Gucci, Dior, and Hermès<br/>
                    • Developed brand identities increasing client recognition by 40%<br/>
                    • Directed photoshoots with world-renowned photographers<br/>
                    • Managed team of 12 designers and art directors
                  </Typography>
                </ExperienceItem>
                
                <ExperienceItem>
                  <Typography variant="subtitle1" fontWeight={600}>Senior Art Director</Typography>
                  <Typography color="primary" fontStyle="italic">Vogue India | 2015–2020</Typography>
                  <Typography variant="body2" mt={1}>
                    • Designed 24+ magazine covers and editorial spreads<br/>
                    • Created visual concepts for high-profile fashion features<br/>
                    • Collaborated with luxury brands on special editions<br/>
                    • Won 3 design awards for innovative layouts
                  </Typography>
                </ExperienceItem>
                
                <ExperienceItem>
                  <Typography variant="subtitle1" fontWeight={600}>Design Lead</Typography>
                  <Typography color="primary" fontStyle="italic">Taj Hotels | 2012–2015</Typography>
                  <Typography variant="body2" mt={1}>
                    • Developed brand identity for luxury hotel chain<br/>
                    • Designed premium packaging for hospitality products<br/>
                    • Created art installations for hotel lobbies and suites
                  </Typography>
                </ExperienceItem>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">Key Projects</SectionTitle>
                <Box mb={2}>
                  <Typography fontWeight={600}>Luxury Branding Kit</Typography>
                  <Typography variant="body2">
                    Comprehensive identity system for high-end watchmaker, including packaging, 
                    typography, and retail experience design.
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography fontWeight={600}>Artisan Perfume Collection</Typography>
                  <Typography variant="body2">
                    Luxury packaging and visual identity for niche fragrance line using 
                    sustainable materials and artisanal techniques.
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>Heritage Jewelry Campaign</Typography>
                  <Typography variant="body2">
                    Art direction for 200-year-old jewelry brand, blending tradition with 
                    contemporary aesthetics.
                  </Typography>
                </Box>
              </Section>
            </Grid>
          </Grid>

          <Grid container spacing={4} mt={1}>
            <Grid item xs={12} md={6}>
              <Section>
                <SectionTitle variant="h5" color="primary">Languages</SectionTitle>
                <Box mt={1} display="flex" gap={1} flexWrap="wrap">
                  <Chip label="English (Fluent)" color="primary" />
                  <Chip label="Hindi (Native)" color="primary" />
                  <Chip label="Odia (Native)" color="primary" />
                  <Chip label="French (Intermediate)" color="primary" />
                </Box>
              </Section>
            </Grid>
            <Grid item xs={12} md={6}>
              <Section>
                <SectionTitle variant="h5" color="primary">Interests</SectionTitle>
                <Box mt={1} display="flex" gap={1} flexWrap="wrap">
                  <Chip label="✈️ Travel" color="primary" />
                  <Chip label="🚗 Luxury Cars" color="primary" />
                  <Chip label="🎨 Art Collection" color="primary" />
                  <Chip label="📚 Design History" color="primary" />
                  <Chip label="🍷 Wine Tasting" color="primary" />
                </Box>
              </Section>
            </Grid>
          </Grid>

          <Grid container spacing={4} mt={1}>
            <Grid item xs={12} md={6}>
              <Section>
                <SectionTitle variant="h5" color="primary">Certifications</SectionTitle>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>• Google UX Design Professional Certificate</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>• Luxury Brand Management (Parsons)</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>• Advanced Typography (Central Saint Martins)</Typography>
                  </ListItem>
                </List>
              </Section>
            </Grid>
            <Grid item xs={12} md={6}>
              <Section>
                <SectionTitle variant="h5" color="primary">Awards & Recognition</SectionTitle>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>🏆 Top Designer Award 2023 (Design India)</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>🏅 Luxury Creative of the Year 2022 (Luxe Magazine)</Typography>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <Typography>⭐️ 10 Under 40 Design Leaders (Vogue India)</Typography>
                  </ListItem>
                </List>
              </Section>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderWidth: 2, borderColor: "primary.main" }} />
          <Box textAlign="center" mt={2}>
            <Typography variant="h6" sx={{ fontFamily: active.headerFont }}>
              Tanya Roy
            </Typography>
            <Typography variant="caption">Creative Director & Brand Strategist</Typography>
          </Box>
        </CVContainer>
      </Container>
    </ThemeProvider>
  );
}