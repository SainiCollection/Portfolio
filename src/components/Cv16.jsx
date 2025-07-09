import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Button,
  Avatar,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styled from "styled-components";
import { Print, SaveAlt } from "@mui/icons-material";
import { useReactToPrint } from "react-to-print";

// === Theme + Layout Config ===
const themes = [
  {
    name: "Professional",
    font: "'Inter', sans-serif",
    layout: "left-name",
    accent: "#1e40af",
    bg: "#ffffff",
    text: "#111827",
  },
  {
    name: "Modern",
    font: "'Manrope', sans-serif",
    layout: "center-stack",
    accent: "#0c4a6e",
    bg: "#f8fafc",
    text: "#1e293b",
  },
  {
    name: "Creative",
    font: "'IBM Plex Sans', sans-serif",
    layout: "split-grid",
    accent: "#7e22ce",
    bg: "#fdf4ff",
    text: "#3b0764",
  },
];

const CVContainer = styled(Box)`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2.5rem;
  background: ${({ bg }) => bg};
  color: ${({ text }) => text};
  font-family: ${({ font }) => font};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  
  @media print {
    box-shadow: none;
    margin: 0;
    padding: 1.5rem;
    max-width: 100%;
    
    .no-print {
      display: none;
    }
  }
`;

const AccentBar = styled(Box)`
  height: 4px;
  background: ${({ accent }) => accent};
  margin: 0.5rem 0 1.5rem;
  border-radius: 2px;
`;

const SectionTitle = styled(Typography)`
  font-weight: 700 !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem !important;
  color: ${({ accent }) => accent} !important;
`;

const SkillChip = styled(Chip)`
  background-color: ${({ accent }) => `${accent}15`} !important;
  border: 1px solid ${({ accent }) => `${accent}30`} !important;
  font-weight: 500 !important;
`;

export default function SimpleBlockLayoutCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const t = themes[themeIndex];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const printRef = useRef();

  const nextTheme = () =>
    setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const sections = {
    skills: [
      "Brand Strategy",
      "Visual Identity",
      "Logo Design",
      "UI/UX Design",
      "Figma",
      "Adobe Creative Suite",
      "Typography",
      "Print Design",
      "Packaging",
      "Art Direction",
      "Illustration",
    ],
    languages: ["English (Fluent)", "Hindi (Native)"],
    interests: ["Art Exhibitions", "Calligraphy", "Travel Blogging", "Photography"],
  };

  return (
    <>
      <Box textAlign="center" mb={2} className="no-print">
        <Button 
          onClick={nextTheme} 
          variant="outlined" 
          sx={{ mr: 1, borderColor: t.accent, color: t.text }}
        >
          Switch Theme ({t.name})
        </Button>
        <IconButton onClick={handlePrint} sx={{ color: t.accent }}>
          <Print />
        </IconButton>
        <IconButton onClick={handlePrint} sx={{ color: t.accent }}>
          <SaveAlt />
        </IconButton>
      </Box>
      
      <CVContainer 
        ref={printRef} 
        font={t.font} 
        bg={t.bg} 
        text={t.text}
      >
        {/* === Header === */}
        {t.layout === "left-name" && (
          <>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <Box>
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                  Ananya Sharma
                </Typography>
                <Typography variant="h5" color={t.accent} fontWeight={600}>
                  Creative Brand Designer
                </Typography>
              </Box>
              <Box textAlign={isMobile ? "left" : "right"} mt={isMobile ? 2 : 0}>
                <Typography>+91 9112345678</Typography>
                <Typography>ananya.sharma@email.com</Typography>
                <Typography>Jaipur, Rajasthan, India</Typography>
                <Typography>
                  Portfolio: ananya.design
                </Typography>
              </Box>
            </Box>
            <AccentBar accent={t.accent} />
          </>
        )}

        {t.layout === "center-stack" && (
          <>
            <Box textAlign="center">
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Ananya Sharma
              </Typography>
              <Typography variant="h5" color={t.accent} fontWeight={600}>
                Creative Brand Designer
              </Typography>
              <Typography mt={1}>
                +91 9112345678 | ananya.sharma@email.com | Jaipur, India
              </Typography>
              <Typography>
                LinkedIn: /ananyasharma | Behance: /ananyadesign | Portfolio: ananya.design
              </Typography>
            </Box>
            <AccentBar accent={t.accent} />
          </>
        )}

        {t.layout === "split-grid" && (
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" fontWeight="bold">
                Ananya Sharma
              </Typography>
              <Typography variant="h5" color={t.accent} fontWeight={600}>
                Creative Brand Designer
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign={isMobile ? "left" : "right"}>
              <Box display="flex" justifyContent={isMobile ? "flex-start" : "flex-end"}>
                <Avatar sx={{ 
                  width: 100, 
                  height: 100, 
                  border: `3px solid ${t.accent}` 
                }} />
              </Box>
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
              <AccentBar accent={t.accent} />
            </Grid>
          </Grid>
        )}

        {/* === Summary === */}
        <SectionTitle variant="h6" accent={t.accent}>
          Professional Summary
        </SectionTitle>
        <Typography paragraph>
          Creative Brand Designer with 5+ years of experience crafting compelling visual identities 
          and brand systems for diverse clients. Specializes in transforming brand visions into 
          cohesive visual narratives across digital and print mediums. Passionate about minimalist 
          aesthetics and creating meaningful brand experiences.
        </Typography>

        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            {/* === Skills === */}
            <SectionTitle variant="h6" accent={t.accent}>
              Core Skills
            </SectionTitle>
            <Grid container spacing={1}>
              {sections.skills.map((skill) => (
                <Grid item key={skill}>
                  <SkillChip label={skill} accent={t.accent} />
                </Grid>
              ))}
            </Grid>

            {/* === Languages & Interests === */}
            <SectionTitle variant="h6" accent={t.accent} mt={2}>
              Languages & Interests
            </SectionTitle>
            <Grid container spacing={1}>
              {sections.languages.map((lang) => (
                <Grid item key={lang}>
                  <SkillChip label={lang} accent={t.accent} />
                </Grid>
              ))}
              {sections.interests.map((interest) => (
                <Grid item key={interest}>
                  <SkillChip label={interest} accent={t.accent} />
                </Grid>
              ))}
            </Grid>

            {/* === Education === */}
            <SectionTitle variant="h6" accent={t.accent} mt={2}>
              Education
            </SectionTitle>
            <Box>
              <Typography fontWeight={600}>BA in Graphic Design</Typography>
              <Typography>Delhi University | 2016 - 2020</Typography>
              <Typography gutterBottom>Specialized in Brand Identity Systems</Typography>
              
              <Typography fontWeight={600}>Diploma in Digital Design</Typography>
              <Typography>Arena Multimedia | 2018</Typography>
            </Box>

            {/* === Certificates === */}
            <SectionTitle variant="h6" accent={t.accent} mt={2}>
              Certifications
            </SectionTitle>
            <Box>
              <Typography>• Adobe Certified Expert (Illustrator)</Typography>
              <Typography>• Google UX Design Professional</Typography>
              <Typography>• Typography Masterclass Certification</Typography>
              <Typography>• Brand Strategy Specialization</Typography>
            </Box>

            {/* === Achievements === */}
            <SectionTitle variant="h6" accent={t.accent} mt={2}>
              Achievements
            </SectionTitle>
            <Box>
              <Typography>• Featured in Design India Magazine 2023</Typography>
              <Typography>• Guest Speaker at Creative Conclave 2022</Typography>
              <Typography>• Behance Top Project (3x featured)</Typography>
              <Typography>• Dribbble Community Spotlight</Typography>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            {/* === Experience === */}
            <SectionTitle variant="h6" accent={t.accent}>
              Professional Experience
            </SectionTitle>
            
            <Box mb={2}>
              <Typography variant="h6" fontWeight={600}>
                Senior Brand Designer @ XYZ Creative
              </Typography>
              <Typography fontStyle="italic" color={t.accent}>
                2021 – Present | Jaipur, India
              </Typography>
              <ul>
                <li>Led brand development for 30+ clients across diverse industries</li>
                <li>Designed comprehensive visual identity systems including logos, color palettes, and typography</li>
                <li>Created brand guidelines and marketing collateral packages</li>
                <li>Collaborated with development teams to ensure digital implementation</li>
                <li>Mentored junior designers and managed client relationships</li>
              </ul>
            </Box>
            
            <Box mb={2}>
              <Typography variant="h6" fontWeight={600}>
                Junior Designer @ ABC Studio
              </Typography>
              <Typography fontStyle="italic" color={t.accent}>
                2019 – 2021 | New Delhi, India
              </Typography>
              <ul>
                <li>Created social media campaigns with 200% engagement growth</li>
                <li>Produced print collateral for high-profile industry events</li>
                <li>Assisted in developing pitch materials for $500k+ client projects</li>
                <li>Contributed to team brainstorming and conceptual development</li>
              </ul>
            </Box>
            
            <Box mb={2}>
              <Typography variant="h6" fontWeight={600}>
                Design Intern @ Creativa Agency
              </Typography>
              <Typography fontStyle="italic" color={t.accent}>
                2018 – 2019 | New Delhi, India
              </Typography>
              <ul>
                <li>Supported senior designers in logo development and branding</li>
                <li>Assisted in photo editing and layout design</li>
                <li>Prepared presentation materials for client meetings</li>
              </ul>
            </Box>

            {/* === Projects === */}
            <SectionTitle variant="h6" accent={t.accent} mt={2}>
              Key Projects
            </SectionTitle>
            <Box mb={1}>
              <Typography fontWeight={600}>Urban Luxe Lifestyle Brand</Typography>
              <Typography>Complete visual identity system including packaging, web UI, and marketing collateral</Typography>
            </Box>
            <Box mb={1}>
              <Typography fontWeight={600}>Social Awareness Campaign</Typography>
              <Typography>Visual storytelling assets for national NGO reaching 2M+ viewers</Typography>
            </Box>
            <Box mb={1}>
              <Typography fontWeight={600}>Sustainable Packaging Design</Typography>
              <Typography>Eco-friendly packaging solution for FMCG brand</Typography>
            </Box>
            <Box mb={1}>
              <Typography fontWeight={600}>Fashion Lookbook 2023</Typography>
              <Typography>Editorial design for emerging fashion label</Typography>
            </Box>

            {/* === Awards === */}
            <SectionTitle variant="h6" accent={t.accent} mt={2}>
              Awards & Recognition
            </SectionTitle>
            <Box>
              <Typography>• Rising Star Designer Award 2022</Typography>
              <Typography>• Best Packaging Design - India Design Awards 2023</Typography>
              <Typography>• Creative Excellence Award - Design Forum 2021</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* === Footer === */}
        <Box textAlign="center" mt={4} className="no-print">
          <Button 
            variant="contained" 
            onClick={handlePrint}
            sx={{
              backgroundColor: t.accent,
              color: "white",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              '&:hover': {
                backgroundColor: t.accent,
                opacity: 0.9
              }
            }}
            startIcon={<SaveAlt />}
          >
            Download CV
          </Button>
          <Typography variant="body2" mt={2} color="textSecondary">
            Designed with passion • ananya.design
          </Typography>
        </Box>
      </CVContainer>
    </>
  );
}