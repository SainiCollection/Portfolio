import React, { useState, useRef } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  Grid,
  Link,
  List,
  ListItem,
  Button,
  Container
} from "@mui/material";
import { Palette, Print, Download } from "@mui/icons-material";
import styled from "@emotion/styled";
import { toPng } from "html-to-image";
import { useReactToPrint } from "react-to-print";

const themes = [
  {
    name: "White",
    bg: "#FFFFFF",
    text: "#000000",
    accent: "#9d7e5d",
    font: "Playfair Display, serif",
    body: "Lato, sans-serif",
  },
  {
    name: "Black",
    bg: "#000000",
    text: "#FFFFFF",
    accent: "#d4af37",
    font: "Playfair Display, serif",
    body: "Lato, sans-serif",
  },
  {
    name: "Charcoal",
    bg: "#2C2C2C",
    text: "#FFFFFF",
    accent: "#c19e6b",
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

const CVContainer = styled(Box)`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  position: relative;
  box-shadow: ${({ theme }) => 
    theme.palette.mode === 'light' 
      ? '0 4px 20px rgba(0,0,0,0.08)' 
      : '0 4px 20px rgba(255,255,255,0.08)'};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.background.default};
  transition: all 0.3s ease;

  @media print {
    box-shadow: none;
    padding: 1.5rem !important;
    max-width: 100% !important;
    margin: 0 !important;
    page-break-after: avoid;
    page-break-before: avoid;
  }
`;

const Initial = styled(Typography)`
  font-size: 12rem;
  font-weight: bold;
  opacity: 0.05;
  position: absolute;
  top: -30px;
  right: 0;
  z-index: 0;
  line-height: 1;

  @media print {
    opacity: 0.07;
    font-size: 10rem;
    top: -20px;
  }
`;

const Section = styled(Box)`
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;

  @media print {
    margin-bottom: 1rem;
  }
`;

const SectionTitle = styled(Typography)`
  font-weight: 700 !important;
  letter-spacing: 1px;
  margin-bottom: 0.75rem !important;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: ${({ theme }) => theme.palette.primary.main};
  }

  @media print {
    color: ${({ theme }) => theme.palette.primary.dark} !important;
  }
`;

const PrintHide = styled(Box)`
  @media print {
    display: none !important;
  }
`;

export default function ClassicElegantCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];
  const cvRef = useRef();

  const theme = createTheme({
    palette: {
      mode: themeIndex === 0 ? "light" : "dark",
      background: { default: active.bg, paper: active.bg },
      text: { primary: active.text },
      primary: { main: active.accent },
    },
    typography: {
      fontFamily: active.body,
      h4: { 
        fontFamily: active.font, 
        fontWeight: 700,
        letterSpacing: 1.5
      },
      h5: { 
        fontFamily: active.font, 
        fontWeight: 600,
        letterSpacing: 1
      },
      body1: {
        lineHeight: 1.6
      }
    },
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: active.accent + "40"
          }
        }
      }
    }
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: "Simran_Kaur_CV",
    pageStyle: `
      @page {
        size: A4;
        margin: 0.5cm;
      }
      body { 
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    `
  });

  const handleDownload = () => {
    if (cvRef.current) {
      // Create a temporary container to preserve styles
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'fixed';
      tempContainer.style.left = '-9999px';
      tempContainer.style.width = '900px';
      tempContainer.style.backgroundColor = theme.palette.background.default;
      tempContainer.style.padding = '2rem';
      
      // Clone the CV content
      const clone = cvRef.current.cloneNode(true);
      tempContainer.appendChild(clone);
      document.body.appendChild(tempContainer);
      
      toPng(tempContainer, { 
        cacheBust: true,
        backgroundColor: theme.palette.background.default,
        width: tempContainer.offsetWidth,
        height: tempContainer.offsetHeight,
        style: {
          padding: '2rem',
          maxWidth: '900px',
          margin: 'auto'
        }
      })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "simran-kaur-cv.png";
          link.href = dataUrl;
          link.click();
          document.body.removeChild(tempContainer);
        })
        .catch((err) => {
          console.error("Error downloading CV:", err);
          document.body.removeChild(tempContainer);
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <PrintHide 
          display="flex" 
          justifyContent="flex-end" 
          mb={2}
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-end", sm: "center" }}
          gap={1}
          sx={{ position: 'relative', zIndex: 10 }}
        >
          <Button 
            onClick={nextTheme} 
            variant="outlined" 
            color="primary"
            startIcon={<Palette />}
          >
            Switch Theme
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<Download />} 
            onClick={handleDownload}
          >
            Download
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<Print />} 
            onClick={handlePrint}
          >
            Print
          </Button>
        </PrintHide>

        <CVContainer ref={cvRef} sx={{ position: "relative" }}>
          {/* Decorative Initial */}
          <Initial>SK</Initial>

          {/* Header Section */}
          <Box mb={4} position="relative" zIndex={1}>
            <Typography variant="h4" color="primary" gutterBottom
              sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}>
              Simran Kaur
            </Typography>
            <Typography variant="h6" sx={{ letterSpacing: 1.5 }}>
              Content Strategist & Brand Storyteller
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} md={4}>
              <Section>
                <SectionTitle variant="h5" color="primary">
                  Contact
                </SectionTitle>
                <Box>
                  <Typography>+91 9123456789</Typography>
                  <Typography>simran.kaur@email.com</Typography>
                  <Typography>Chandigarh, Punjab, India</Typography>
                  <Box mt={1}>
                    <Typography sx={{ display: "block", mb: 0.5 }}>
                      LinkedIn: /simrankaur
                    </Typography>
                    <Typography>
                      Behance: /simrankaurs
                    </Typography>
                  </Box>
                </Box>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">
                  Skills
                </SectionTitle>
                <List dense sx={{ py: 0 }}>
                  {[
                    "Content Strategy",
                    "Brand Storytelling",
                    "SEO Optimization",
                    "Copywriting",
                    "Social Media Marketing",
                    "Data Analytics"
                  ].map((skill) => (
                    <ListItem key={skill} sx={{ py: 0.25, px: 0 }}>
                      • {skill}
                    </ListItem>
                  ))}
                </List>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">
                  Languages
                </SectionTitle>
                <Typography>English (Fluent)</Typography>
                <Typography>Punjabi (Native)</Typography>
                <Typography>Hindi (Fluent)</Typography>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">
                  Awards
                </SectionTitle>
                <Box>
                  <Typography fontWeight={500}>Top Marketer Award 2021</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Marketing Excellence Forum
                  </Typography>
                  <Typography fontWeight={500} mt={1}>Best Content Campaign</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Digital India Summit 2020
                  </Typography>
                </Box>
              </Section>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={8}>
              <Section>
                <SectionTitle variant="h5" color="primary">
                  Profile
                </SectionTitle>
                <Typography>
                  Results-driven Content Strategist with 5+ years of experience crafting compelling brand narratives. 
                  Specialized in developing data-backed content ecosystems that drive engagement, enhance brand visibility, 
                  and increase conversion. Passionate about creating human-centered stories that resonate across digital platforms.
                </Typography>
              </Section>

              <Section>
                <SectionTitle variant="h5" color="primary">
                  Experience
                </SectionTitle>
                <Box mb={2}>
                  <Typography fontWeight={600}>Senior Content Lead</Typography>
                  <Typography color="primary" fontStyle="italic">ABC Marketing | 2020–Present</Typography>
                  <Typography variant="body2" mt={1}>
                    • Revitalized brand content strategy resulting in 40% engagement increase<br/>
                    • Managed 12-member content team across 4 product verticals<br/>
                    • Developed award-winning "Authentic Voices" campaign
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>Content Specialist</Typography>
                  <Typography color="primary" fontStyle="italic">XYZ Agency | 2018–2020</Typography>
                  <Typography variant="body2" mt={1}>
                    • Created SEO-optimized content for 20+ clients across industries<br/>
                    • Increased average client organic traffic by 65% YOY<br/>
                    • Implemented content analytics framework still in use today
                  </Typography>
                </Box>
              </Section>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Section>
                    <SectionTitle variant="h5" color="primary">
                      Education
                    </SectionTitle>
                    <Box>
                      <Typography fontWeight={600}>MA Digital Marketing</Typography>
                      <Typography>MICA, Ahmedabad | 2020</Typography>
                      <Typography mt={1} fontWeight={600}>BA English Literature</Typography>
                      <Typography>Delhi University | 2018</Typography>
                    </Box>
                  </Section>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Section>
                    <SectionTitle variant="h5" color="primary">
                      Certifications
                    </SectionTitle>
                    <Box>
                      <Typography>• HubSpot Content Marketing</Typography>
                      <Typography>• Google Analytics Professional</Typography>
                      <Typography>• SEMrush Content Marketing</Typography>
                      <Typography>• Brand Storytelling (Berkeley)</Typography>
                    </Box>
                  </Section>
                </Grid>
              </Grid>

              <Section>
                <SectionTitle variant="h5" color="primary">
                  Projects
                </SectionTitle>
                <Box mb={2}>
                  <Typography fontWeight={600}>Heritage Brands Revival</Typography>
                  <Typography variant="body2">
                    Content strategy for 5 traditional Indian brands transitioning to digital platforms. 
                    Developed multilingual content frameworks that increased market reach by 200%.
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>Sustainable Fashion Campaign</Typography>
                  <Typography variant="body2">
                    Led content creation for eco-fashion startup. Campaign generated 500K+ engagements 
                    and increased sales conversion by 35% through storytelling.
                  </Typography>
                </Box>
              </Section>
            </Grid>
          </Grid>
        </CVContainer>
      </Container>
    </ThemeProvider>
  );
}