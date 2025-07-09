import React, { useState, useRef } from "react";
import { 
  ThemeProvider, createTheme, CssBaseline, Box, Typography, Avatar, 
  IconButton, LinearProgress, Button, Grid, Paper, Container, 
  Divider, Chip
} from "@mui/material";
import { LightMode, DarkMode, Print, Download, Mail, Instagram } from "@mui/icons-material";
import styled from "@mui/system/styled";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Custom styled components
const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2.5),
  marginTop: theme.spacing(3),
  borderRadius: 12,
  backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 30, 30, 0.85)',
  boxShadow: theme.shadows[2],
  border: `1px solid ${theme.palette.divider}`,
}));

const SkillBarContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1.5, 0),
}));

const PortfolioItem = styled(Paper)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(2),
  borderRadius: 12,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

// Themes
const pastelTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#FB7185" },
    secondary: { main: "#94A3B8" },
    background: { 
      default: "linear-gradient(135deg, #FFF7ED 0%, #FFFBEB 100%)", 
      paper: "rgba(255, 255, 255, 0.9)"
    },
    text: { primary: "#1E293B" },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h2: { 
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      letterSpacing: 0.5,
    },
    h4: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.3rem",
    },
    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
    },
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 10,
          borderRadius: 5,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#FB7185" },
    secondary: { main: "#94A3B8" },
    background: { 
      default: "linear-gradient(135deg, #1F1F1F 0%, #2D2D2D 100%)", 
      paper: "rgba(30, 30, 30, 0.9)" 
    },
    text: { primary: "#F1F5F9" },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h2: { 
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      letterSpacing: 0.5,
    },
    h4: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.3rem",
    },
    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
    },
  },
});

export default function ProfessionalDesignerCV() {
  const [isDark, setIsDark] = useState(false);
  const cvRef = useRef(null);

  const skills = [
    { name: "Figma", value: 90 },
    { name: "Adobe XD", value: 85 },
    { name: "Illustrator", value: 80 },
    { name: "Photoshop", value: 75 },
    { name: "User Research", value: 85 },
    { name: "Prototyping", value: 90 },
  ];

  const portfolioItems = [
    { 
      title: "ABC Brand Redesign", 
      description: "Complete brand identity refresh for tech startup",
      tags: ["Branding", "UI Design"]
    },
    { 
      title: "XYZ App UI", 
      description: "Mobile app interface for fitness tracking",
      tags: ["Mobile UI", "UX Research"]
    },
    { 
      title: "Creative Landing Page", 
      description: "Interactive landing page for design agency",
      tags: ["Web Design", "Interaction"]
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  const downloadPDF = () => {
    const input = cvRef.current;
    
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: isDark ? "#1F1F1F" : "#FFF7ED"
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save("designer_portfolio.pdf");
    });
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : pastelTheme}>
      <CssBaseline />
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap');
          
          @media print {
            .no-print {
              display: none !important;
            }
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
              background: white !important;
            }
            .print-content {
              padding: 0 !important;
              margin: 0 !important;
              box-shadow: none !important;
              background: white !important;
            }
          }
        `}
      </style>
      
      <Container 
        maxWidth="md" 
        ref={cvRef}
        className="print-content"
        sx={{
          py: 4,
          background: isDark 
            ? 'linear-gradient(135deg, #1F1F1F 0%, #2D2D2D 100%)' 
            : 'linear-gradient(135deg, #FFF7ED 0%, #FFFBEB 100%)',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        {/* Control buttons */}
        <Box 
          className="no-print" 
          sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            position: 'sticky',
            top: 16,
            zIndex: 1000,
            mb: 3,
            gap: 1
          }}
        >
          <Button 
            variant="outlined" 
            startIcon={<Print />}
            onClick={handlePrint}
            size="small"
            sx={{ 
              backgroundColor: 'background.paper',
              textTransform: 'none',
              fontWeight: 500
            }}
          >
            Print
          </Button>
          <Button 
            variant="contained" 
            startIcon={<Download />}
            onClick={downloadPDF}
            size="small"
            sx={{ 
              backgroundColor: 'primary.main',
              color: 'white',
              textTransform: 'none',
              fontWeight: 500,
              '&:hover': { backgroundColor: 'primary.dark' }
            }}
          >
            PDF
          </Button>
          <IconButton 
            onClick={() => setIsDark(!isDark)} 
            sx={{ 
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            {isDark ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>

        {/* Header Section */}
        <Box 
          display="flex" 
          alignItems="center" 
          gap={3} 
          mb={4}
          sx={{ 
            flexDirection: { xs: 'column', sm: 'row' }, 
            textAlign: { xs: 'center', sm: 'left' },
            '& .MuiAvatar-root': {
              border: '3px solid',
              borderColor: 'primary.main',
              boxShadow: 3
            }
          }}
        >
          <Avatar
            alt="Hannah Smith"
            sx={{ 
              width: 150, 
              height: 150,
              bgcolor: 'primary.main',
              fontSize: '4rem'
            }}
          >
            HS
          </Avatar>
          <Box>
            <Typography variant="h2" gutterBottom sx={{ color: 'primary.main' }}>
              Hannah Smith
            </Typography>
            <Typography variant="h4" gutterBottom>
              UI/UX & Product Designer
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 1.5, 
              mt: 2, 
              flexWrap: 'wrap', 
              justifyContent: { xs: 'center', sm: 'flex-start' } 
            }}>
              <Chip icon={<Mail />} label="hannah.designs@email.com" size="small" />
              <Chip icon={<Instagram />} label="@hannah_designs" size="small" />
            </Box>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={7}>
            {/* About Me */}
            <Section>
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                About Me
              </Typography>
              <Typography variant="body1">
                Creative and detail-oriented UI/UX designer with 5+ years of experience crafting 
                beautiful, user-centered digital experiences. Passionate about solving complex 
                problems through intuitive design and creating engaging interfaces that delight users.
              </Typography>
            </Section>

            {/* Skills */}
            <Section>
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                Design Skills
              </Typography>
              <Grid container spacing={2}>
                {skills.map((skill) => (
                  <Grid item xs={12} sm={6} key={skill.name}>
                    <SkillBarContainer>
                      <Box display="flex" justifyContent="space-between" mb={0.5}>
                        <Typography variant="body1">{skill.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{skill.value}%</Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={skill.value} 
                        color="primary" 
                        sx={{
                          '& .MuiLinearProgress-bar': {
                            borderRadius: '5px'
                          }
                        }}
                      />
                    </SkillBarContainer>
                  </Grid>
                ))}
              </Grid>
            </Section>

            {/* Work Experience */}
            <Section>
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                Professional Experience
              </Typography>
              
              <Box mb={3}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" fontWeight={600}>
                    Senior Product Designer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    2021–Present
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" mb={1.5}>
                  DesignStudio Inc • San Francisco, CA
                </Typography>
                <ul style={{ marginTop: 0, paddingLeft: 20 }}>
                  <li><Typography variant="body1">Led redesign of flagship SaaS product used by 50k+ businesses</Typography></li>
                  <li><Typography variant="body1">Created design system that improved team efficiency by 40%</Typography></li>
                  <li><Typography variant="body1">Conducted user research that informed major product pivots</Typography></li>
                </ul>
              </Box>
              
              <Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" fontWeight={600}>
                    UI/UX Designer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    2018–2021
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" mb={1.5}>
                  CreativeMinds Agency • New York, NY
                </Typography>
                <ul style={{ marginTop: 0, paddingLeft: 20 }}>
                  <li><Typography variant="body1">Designed interfaces for 15+ clients across fintech, health, and e-commerce</Typography></li>
                  <li><Typography variant="body1">Created prototypes that increased client approval rate by 35%</Typography></li>
                  <li><Typography variant="body1">Mentored junior designers in UX best practices</Typography></li>
                </ul>
              </Box>
            </Section>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={5}>
            {/* Portfolio */}
            <Section>
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                Featured Projects
              </Typography>
              <Grid container spacing={2}>
                {portfolioItems.map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <PortfolioItem elevation={0}>
                      <Box sx={{ 
                        width: "100%", 
                        height: 120, 
                        borderRadius: 2,
                        background: `linear-gradient(45deg, ${isDark ? '#2D3748, #4A5568' : '#FB7185, #FECACA'})`,
                        mb: 1.5
                      }} />
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mb={1.5}>
                        {item.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {item.tags.map((tag, i) => (
                          <Chip key={i} label={tag} size="small" color="secondary" />
                        ))}
                      </Box>
                    </PortfolioItem>
                  </Grid>
                ))}
              </Grid>
            </Section>

            {/* Education */}
            <Section>
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                Education
              </Typography>
              <Box mb={2}>
                <Typography variant="h6" fontWeight={600}>
                  MFA in Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Parsons School of Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2016–2018 • New York, NY
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  BFA in Visual Arts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rhode Island School of Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2012–2016 • Providence, RI
                </Typography>
              </Box>
            </Section>

            {/* Awards */}
            <Section>
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                Awards & Recognition
              </Typography>
              <ul style={{ paddingLeft: 20, marginTop: 0 }}>
                <li><Typography variant="body1">Awwwards Site of the Day (2022)</Typography></li>
                <li><Typography variant="body1">CSS Design Awards - Special Kudos (2021)</Typography></li>
                <li><Typography variant="body1">Best Student Designer Award (2018)</Typography></li>
                <li><Typography variant="body1">Adobe Design Achievement Semifinalist (2017)</Typography></li>
              </ul>
            </Section>

            {/* Tools */}
            <Section>
              <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                Tools & Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['Figma', 'Sketch', 'Adobe CC', 'InVision', 'Framer', 'Webflow', 'Miro', 'Zeplin'].map(tool => (
                  <Chip key={tool} label={tool} size="small" />
                ))}
              </Box>
            </Section>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}