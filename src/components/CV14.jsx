import React, { useState, useRef } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  Grid,
  Chip,
  Divider,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { LinkedIn, GitHub, Print, LightMode, DarkMode } from "@mui/icons-material";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const themes = [
  {
    name: "Warm Gray",
    primary: "#374151",
    secondary: "#6B7280",
    bg: "#F9FAFB",
    accent: "#D1D5DB",
    font: "'Libre Baskerville', serif",
  },
  {
    name: "Soft Olive",
    primary: "#475569",
    secondary: "#64748B",
    bg: "#F3F4F6",
    accent: "#9CA3AF",
    font: "'Lora', serif",
  },
  {
    name: "Light Tan",
    primary: "#4B5563",
    secondary: "#6B7280",
    bg: "#FAF7F2",
    accent: "#E5E7EB",
    font: "'Poppins', sans-serif",
  },
  {
    name: "Off Black",
    primary: "#111827",
    secondary: "#1F2937",
    bg: "#F9FAFB",
    accent: "#6B7280",
    font: "'Montserrat', sans-serif",
  },
];

const ResumeContainer = ({ children, printRef }) => (
  <Box
    ref={printRef}
    sx={{
      maxWidth: 900,
      minHeight: '100vh',
      margin: 'auto',
      padding: { xs: 2, sm: 4 },
      backgroundColor: 'background.default',
      position: 'relative',
      '@media print': {
        padding: 0,
        maxWidth: '100%',
        minHeight: 0,
      }
    }}
  >
    {children}
  </Box>
);

const SectionTitle = ({ children }) => (
  <Typography variant="h6" sx={{
    fontWeight: 600,
    letterSpacing: 1,
    marginBottom: 2,
    borderBottom: '2px solid',
    borderColor: 'primary.main',
    display: 'inline-block',
    paddingBottom: 0.5,
    width: '100%'
  }}>
    {children}
  </Typography>
);

const ExperienceItem = ({ position, company, duration, location, children }) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{position}</Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>{company}</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{duration}</Typography>
    </Box>
    <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>{location}</Typography>
    <Typography variant="body2" component="div">
      {children}
    </Typography>
  </Box>
);

const BulletPoint = ({ children }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 0.5 }}>
    <Typography variant="body2" sx={{ mr: 1 }}>•</Typography>
    <Typography variant="body2">{children}</Typography>
  </Box>
);

export default function ProfessionalResume() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];
  const printRef = useRef();
  const isMobile = useMediaQuery('(max-width:600px)');

  const theme = createTheme({
    palette: {
      background: { default: active.bg },
      primary: { main: active.primary },
      secondary: { main: active.secondary },
      text: { primary: active.primary, secondary: active.secondary },
    },
    typography: {
      fontFamily: active.font,
      h4: { fontWeight: 700, letterSpacing: 0.5 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      subtitle1: { fontWeight: 500 },
      body2: { lineHeight: 1.6 }
    },
    components: {
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            margin: '4px 4px 4px 0',
            borderColor: active.accent,
            backgroundColor: 'transparent'
          }
        }
      }
    }
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Ananya_Sharma_Resume",
    pageStyle: `
      @page {
        size: A4;
        margin: 10mm;
      }
      body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      @media print {
        .no-print {
          display: none;
        }
      }
    `,
  });

  const handleDownloadPDF = () => {
    if (printRef.current) {
      html2canvas(printRef.current, { 
        scale: 3,
        useCORS: true,
        backgroundColor: active.bg
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
        pdf.save("Ananya_Sharma_Resume.pdf");
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResumeContainer printRef={printRef}>
        {/* Header with controls */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 4,
          position: 'relative',
          pt: 2
        }}>
          <Box sx={{ 
            position: 'absolute', 
            top: 0, 
            right: 0,
            display: 'flex',
            '@media print': {
              display: 'none'
            }
          }} className="no-print">
            <IconButton onClick={nextTheme} color="primary">
              {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
            </IconButton>
            <IconButton onClick={handlePrint} color="primary">
              <Print />
            </IconButton>
          </Box>
          
          <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: 1.5 }}>
            Ananya Sharma
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 500, color: 'text.secondary', mt: 1 }}>
            Senior Graphic Designer
          </Typography>
          
          <Grid container spacing={1} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <Typography variant="body2">+91 9112345678</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">•</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">ananya.sharma@email.com</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">•</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">Jaipur, India</Typography>
            </Grid>
          </Grid>
          
          <Grid container spacing={1} justifyContent="center" sx={{ mt: 1 }}>
            <Grid item>
              <Button 
                variant="outlined" 
                startIcon={<LinkedIn />}
                size="small"
                sx={{ 
                  textTransform: 'none',
                  borderColor: 'primary.main',
                  color: 'text.primary'
                }}
              >
                /ananyasharma
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                startIcon={<GitHub />}
                size="small"
                sx={{ 
                  textTransform: 'none',
                  borderColor: 'primary.main',
                  color: 'text.primary'
                }}
              >
                /ananyadesign
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Professional Summary */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 4, 
          p: 2,
          borderLeft: `4px solid ${active.primary}`,
          backgroundColor: 'rgba(0,0,0,0.03)'
        }}>
          <Typography variant="body1" sx={{ fontStyle: "italic", lineHeight: 1.6 }}>
            "Creative graphic designer with 6+ years of experience crafting compelling brand identities. 
            Specialized in luxury branding and visual storytelling. Passionate about creating designs 
            that blend timeless elegance with modern aesthetics."
          </Typography>
        </Box>

        <Divider sx={{ my: 2, borderWidth: 1, borderColor: active.accent }} />

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={5}>
            <Box mb={3}>
              <SectionTitle>SKILLS</SectionTitle>
              <Box>
                {["Brand Identity", "Typography", "Adobe Creative Suite", "UI/UX Design", 
                  "Print Design", "Illustration", "Art Direction", "Packaging Design"].map((s) => (
                  <Chip key={s} label={s} variant="outlined" />
                ))}
              </Box>
            </Box>

            <Box mb={3}>
              <SectionTitle>LANGUAGES</SectionTitle>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography>English <Typography variant="caption">(Fluent)</Typography></Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Hindi <Typography variant="caption">(Native)</Typography></Typography>
                </Grid>
              </Grid>
            </Box>

            <Box mb={3}>
              <SectionTitle>AWARDS</SectionTitle>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>Rising Star Designer Award</Typography>
              <Typography variant="caption">Design India, 2023</Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 600, mt: 1 }}>Best Brand Identity</Typography>
              <Typography variant="caption">Creative Circle, 2022</Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 600, mt: 1 }}>Design Excellence Award</Typography>
              <Typography variant="caption">National Design Forum, 2021</Typography>
            </Box>

            <Box mb={3}>
              <SectionTitle>CERTIFICATIONS</SectionTitle>
              <Box>
                <BulletPoint>Adobe Certified Expert (Illustrator, Photoshop)</BulletPoint>
                <BulletPoint>Brand Strategy Masterclass - School of Visual Arts</BulletPoint>
                <BulletPoint>UX Design Principles - Interaction Design Foundation</BulletPoint>
                <BulletPoint>Advanced Typography - CalArts</BulletPoint>
              </Box>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={7}>
            <Box mb={3}>
              <SectionTitle>EXPERIENCE</SectionTitle>
              
              <ExperienceItem
                position="Senior Brand Designer"
                company="XYZ Creative Studio"
                duration="2021 - Present"
                location="Jaipur, India"
              >
                <BulletPoint>Lead brand identity projects for clients in luxury and lifestyle sectors, increasing client retention by 40%</BulletPoint>
                <BulletPoint>Manage design team and client relationships for high-profile accounts with budgets exceeding ₹50L</BulletPoint>
                <BulletPoint>Reduced production time by 30% through workflow optimization and template development</BulletPoint>
                <BulletPoint>Mentored 5 junior designers, improving team output quality and project delivery times</BulletPoint>
              </ExperienceItem>
              
              <ExperienceItem
                position="Graphic Designer"
                company="DesignHub Agency"
                duration="2018 - 2021"
                location="Delhi, India"
              >
                <BulletPoint>Created marketing materials for 50+ clients across various industries, maintaining 95% client satisfaction rate</BulletPoint>
                <BulletPoint>Developed social media campaigns with 200% engagement growth for key accounts</BulletPoint>
                <BulletPoint>Designed packaging solutions for FMCG clients that increased shelf appeal and sales by 15-25%</BulletPoint>
                <BulletPoint>Won "Employee of the Year" in 2020 for exceptional design work and client feedback</BulletPoint>
              </ExperienceItem>
            </Box>

            <Box mb={3}>
              <SectionTitle>EDUCATION</SectionTitle>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>BA in Graphic Design</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Delhi University</Typography>
                  <Typography variant="body2">2015 - 2018</Typography>
                </Box>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>GPA: 3.8/4.0 | Specialization: Brand Identity</Typography>
              </Box>
              
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Diploma in Digital Arts</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">National Institute of Design</Typography>
                  <Typography variant="body2">2014 - 2015</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {!isMobile && (
          <Box sx={{ 
            textAlign: 'center', 
            mt: 4,
            '@media print': {
              display: 'none'
            }
          }} className="no-print">
            <Button 
              variant="contained" 
              startIcon={<Print />}
              onClick={handleDownloadPDF}
              sx={{ 
                backgroundColor: 'primary.main',
                color: active.bg,
                '&:hover': { 
                  backgroundColor: 'primary.dark',
                  boxShadow: 2
                },
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              Download PDF
            </Button>
          </Box>
        )}
      </ResumeContainer>
    </ThemeProvider>
  );
}