import React, { useState, useRef } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  IconButton,
  Chip,
  Divider,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import { LinkedIn, Web, LightMode, DarkMode, Print, Download } from "@mui/icons-material";
import { useReactToPrint } from "react-to-print";
import styled from "@emotion/styled";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Themes
const themes = [
  {
    name: "White-Navy",
    leftBg: "#FFFFFF",
    rightBg: "#1E3A8A",
    textLeft: "#111827",
    textRight: "#F9FAFB",
    accent: "#1E3A8A",
    font: "Merriweather, serif",
  },
  {
    name: "White-Charcoal",
    leftBg: "#FFFFFF",
    rightBg: "#374151",
    textLeft: "#111827",
    textRight: "#F9FAFB",
    accent: "#374151",
    font: "IBM Plex Sans, sans-serif",
  },
  {
    name: "Off White-Teal",
    leftBg: "#F9FAFB",
    rightBg: "#0D9488",
    textLeft: "#111827",
    textRight: "#F9FAFB",
    accent: "#0D9488",
    font: "DM Sans, sans-serif",
  },
  {
    name: "Cream-Burgundy",
    leftBg: "#FAF3E0",
    rightBg: "#7C2D12",
    textLeft: "#111827",
    textRight: "#F9FAFB",
    accent: "#7C2D12",
    font: "Cabin, sans-serif",
  },
];

const CVContainer = styled(Box)`
  display: flex;
  min-height: 100vh;
  position: relative;
  width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    min-height: auto;
  }

  @media print {
    flex-direction: row;
    height: auto;
    min-height: 0;
    width: 100%;
    box-shadow: none;
  }
`;

const LeftColumn = styled(Box)`
  flex: 1;
  padding: 2.5rem;
  position: relative;
  z-index: 1;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.05);

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media print {
    padding: 1.5rem !important;
    box-shadow: none;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

const RightColumn = styled(Box)`
  flex: 1;
  padding: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media print {
    padding: 1.5rem !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

const DividerLine = styled(Box)`
  width: 2px;
  background: #d1d5db;
  
  @media (max-width: 900px) {
    width: 100%;
    height: 2px;
  }

  @media print {
    display: none;
  }
`;

const SectionTitle = styled(Typography)`
  font-weight: 700 !important;
  margin-bottom: 1rem !important;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: currentColor;
  }
`;

const PrintHide = styled(Box)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  gap: 10px;

  @media print {
    display: none !important;
  }
`;

export default function SplitColumnCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];
  const cvRef = useRef();

  const theme = createTheme({
    palette: {
      background: { default: active.leftBg },
      text: { primary: active.textLeft },
    },
    typography: {
      fontFamily: active.font,
      h4: { fontWeight: 700 },
      h5: { fontWeight: 600 },
    },
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: "Shivani_Rana_CV",
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .left-col-print {
        background-color: ${active.leftBg} !important;
        color: ${active.textLeft} !important;
      }
      .right-col-print {
        background-color: ${active.rightBg} !important;
        color: ${active.textRight} !important;
      }
    `,
  });

  const handleDownloadPDF = () => {
    if (cvRef.current) {
      html2canvas(cvRef.current, { 
        scale: 3,
        useCORS: true,
        backgroundColor: active.leftBg
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 0;
        
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save("Shivani_Rana_CV.pdf");
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CVContainer ref={cvRef}>
        <PrintHide>
          <IconButton onClick={nextTheme} sx={{ color: active.textLeft, border: `1px solid ${active.textLeft}` }}>
            {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
          </IconButton>
          <Button 
            variant="outlined" 
            startIcon={<Print />} 
            onClick={handlePrint}
            sx={{ 
              color: active.textLeft, 
              borderColor: active.textLeft,
              '&:hover': {
                backgroundColor: `${active.accent}20`,
                borderColor: active.accent
              }
            }}
          >
            Print
          </Button>
          <Button 
            variant="contained" 
            startIcon={<Download />} 
            onClick={handleDownloadPDF}
            sx={{ 
              backgroundColor: active.accent, 
              color: active.textRight,
              '&:hover': {
                backgroundColor: `${active.accent}D0`
              }
            }}
          >
            PDF
          </Button>
        </PrintHide>

        {/* Left Column */}
        <LeftColumn className="left-col-print" sx={{ background: active.leftBg, color: active.textLeft }}>
          <Box textAlign="center" mb={4}>
            <Avatar
              src="https://via.placeholder.com/150"
              sx={{ 
                width: 120, 
                height: 120, 
                margin: "auto",
                border: `3px solid ${active.accent}`,
                mb: 2
              }}
            />
            <Typography variant="h4" mb={1}>Shivani Rana</Typography>
            <Typography variant="h6" color={active.accent} fontWeight={600}>
              Senior Product Designer
            </Typography>
          </Box>

          <SectionTitle variant="h6">Contact</SectionTitle>
          <Typography mb={0.5}>Delhi, India</Typography>
          <Typography mb={0.5}>+91 9876012345</Typography>
          <Typography mb={2}>shivani.rana@email.com</Typography>
          <Box mb={3}>
            <IconButton sx={{ color: active.textLeft }}><LinkedIn /></IconButton>
            <IconButton sx={{ color: active.textLeft }}><Web /></IconButton>
          </Box>

          <SectionTitle variant="h6">Professional Profile</SectionTitle>
          <Typography mb={3}>
            Product designer with 5+ years of experience creating intuitive user experiences 
            for SaaS platforms. Passionate about user-centered design and design systems.
          </Typography>

          <SectionTitle variant="h6">Technical Skills</SectionTitle>
          <Grid container spacing={1} mb={3}>
            {[
              "UI/UX Design", "Figma", "Prototyping", "User Research", 
              "Design Systems", "Interaction Design", "Wireframing", "Usability Testing"
            ].map((s) => (
              <Grid item key={s}>
                <Chip 
                  label={s} 
                  sx={{ 
                    backgroundColor: `${active.accent}20`, 
                    color: active.textLeft,
                  }} 
                />
              </Grid>
            ))}
          </Grid>

          <SectionTitle variant="h6">Languages</SectionTitle>
          <Box display="flex" gap={1} flexWrap="wrap" mb={3}>
            <Chip 
              label="English (Professional)" 
              sx={{ 
                backgroundColor: `${active.accent}20`, 
                color: active.textLeft,
              }} 
            />
            <Chip 
              label="Hindi (Native)" 
              sx={{ 
                backgroundColor: `${active.accent}20`, 
                color: active.textLeft,
              }} 
            />
          </Box>

          <SectionTitle variant="h6">Interests</SectionTitle>
          <Box display="flex" gap={1} flexWrap="wrap">
            <Chip 
              label="Sketching" 
              sx={{ 
                backgroundColor: `${active.accent}20`, 
                color: active.textLeft,
              }} 
            />
            <Chip 
              label="Journaling" 
              sx={{ 
                backgroundColor: `${active.accent}20`, 
                color: active.textLeft,
              }} 
            />
            <Chip 
              label="Photography" 
              sx={{ 
                backgroundColor: `${active.accent}20`, 
                color: active.textLeft,
              }} 
            />
            <Chip 
              label="Travel" 
              sx={{ 
                backgroundColor: `${active.accent}20`, 
                color: active.textLeft,
              }} 
            />
          </Box>
        </LeftColumn>

        <DividerLine />

        {/* Right Column */}
        <RightColumn className="right-col-print" sx={{ background: active.rightBg, color: active.textRight }}>
          <SectionTitle variant="h6" sx={{ color: active.textRight }}>
            Professional Experience
          </SectionTitle>
          <Box mb={3}>
            <Typography variant="subtitle1" fontWeight={600}>Senior Product Designer</Typography>
            <Typography fontStyle="italic" mb={1}>ABC Design Studio | 2021–Present</Typography>
            <List dense>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 24, color: active.textRight }}>
                  •
                </ListItemIcon>
                <Typography>Led redesign of SaaS platform increasing user engagement by 35%</Typography>
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 24, color: active.textRight }}>
                  •
                </ListItemIcon>
                <Typography>Created design system used across 5 products</Typography>
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 24, color: active.textRight }}>
                  •
                </ListItemIcon>
                <Typography>Mentored 3 junior designers in UX best practices</Typography>
              </ListItem>
            </List>
          </Box>

          <Box mb={3}>
            <Typography variant="subtitle1" fontWeight={600}>Product Designer</Typography>
            <Typography fontStyle="italic" mb={1}>Tech Innovations | 2019–2021</Typography>
            <List dense>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 24, color: active.textRight }}>
                  •
                </ListItemIcon>
                <Typography>Designed mobile app with 500K+ downloads</Typography>
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 24, color: active.textRight }}>
                  •
                </ListItemIcon>
                <Typography>Conducted user research leading to 40% improvement in conversion</Typography>
              </ListItem>
            </List>
          </Box>

          <SectionTitle variant="h6" sx={{ color: active.textRight }}>
            Education
          </SectionTitle>
          <Box mb={3}>
            <Typography variant="subtitle1" fontWeight={600}>Bachelor of Design</Typography>
            <Typography>National Institute of Fashion Technology | 2015–2019</Typography>
            <Typography fontStyle="italic">Specialization: User Experience Design</Typography>
          </Box>

          <SectionTitle variant="h6" sx={{ color: active.textRight }}>
            Key Projects
          </SectionTitle>
          <Box mb={3}>
            <Typography variant="subtitle1" fontWeight={600}>Fintech App Redesign</Typography>
            <Typography>
              Complete overhaul of banking app resulting in 25% increase in daily active users
            </Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="subtitle1" fontWeight={600}>Enterprise Branding Kit</Typography>
            <Typography>
              Comprehensive design system for B2B SaaS company with 100+ components
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h6" sx={{ color: active.textRight }}>
                Certifications
              </SectionTitle>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <Typography>• Google UX Design Professional</Typography>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Typography>• Adobe Creative Suite Expert</Typography>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Typography>• Interaction Design Foundation</Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h6" sx={{ color: active.textRight }}>
                Awards
              </SectionTitle>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <Typography>🏆 Best Designer 2023</Typography>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Typography>🏅 UX Innovation Award</Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </RightColumn>
      </CVContainer>
    </ThemeProvider>
  );
}