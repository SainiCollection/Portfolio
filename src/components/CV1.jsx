import React, { useState, useRef } from "react";
import { 
  ThemeProvider, createTheme, CssBaseline, Box, Typography, Avatar, 
  Button, Chip, Divider, IconButton, Grid, Paper, Container, Link
} from "@mui/material";
import { LightMode, DarkMode, Print, Download, Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";
import { styled } from "@mui/system";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
    background: { default: "#f8f9fa", paper: "#ffffff" },
    text: { primary: "#2d3748" },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h4: { fontWeight: 700, letterSpacing: 0.5 },
    h5: { fontWeight: 600, fontSize: "1.3rem" },
    h6: { fontWeight: 600, fontSize: "1.1rem" },
    subtitle1: { color: "#4a5568" }
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4
        }
      }
    }
  }
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#ce93d8" },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#e2e8f0" },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h4: { fontWeight: 700, letterSpacing: 0.5 },
    h5: { fontWeight: 600, fontSize: "1.3rem" },
    h6: { fontWeight: 600, fontSize: "1.1rem" },
    subtitle1: { color: "#a0aec0" }
  }
});

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: 900,
  margin: "2rem auto",
  padding: "2rem",
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[4],
  borderRadius: 12,
  position: "relative",
  "@media print": {
    boxShadow: "none",
    padding: 0,
    margin: 0,
    maxWidth: "210mm",
    width: "210mm",
    minHeight: "297mm"
  }
}));

const ActionBar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
  "@media print": {
    display: "none"
  }
}));

const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2.5),
  marginTop: theme.spacing(3),
  borderRadius: 10,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1]
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontWeight: 500
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1)
}));

export default function ProfessionalCV() {
  const [isDark, setIsDark] = useState(false);
  const cvRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  const downloadPDF = () => {
    const input = cvRef.current;
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: isDark ? "#121212" : "#ffffff"
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save("professional_cv.pdf");
    });
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <StyledContainer ref={cvRef}>
        <style>
          {`
            @media print {
              html, body, #root {
                width: 210mm;
                min-height: 297mm;
                margin: 0;
                padding: 0;
                overflow: hidden;
              }
              body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
                background: white !important;
              }
              .no-print {
                display: none;
              }
            }
          `}
        </style>

        <ActionBar className="no-print">
          <IconButton onClick={() => setIsDark(!isDark)} color="primary">
            {isDark ? <LightMode /> : <DarkMode />}
          </IconButton>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<Print />}
            onClick={handlePrint}
            size="small"
          >
            Print
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            startIcon={<Download />}
            onClick={downloadPDF}
            size="small"
          >
            PDF
          </Button>
        </ActionBar>

        {/* Header Section */}
        <Box display="flex" alignItems="center" gap={3} mb={3}>
          <Avatar
            src="https://via.placeholder.com/120"
            alt="John Deo"
            sx={{ width: 120, height: 120, border: "3px solid", borderColor: "primary.main" }}
          />
          <Box>
            <Typography variant="h4">John Deo</Typography>
            <Typography variant="subtitle1" mt={0.5}>
              Senior Frontend Developer
            </Typography>
            <Box display="flex" gap={2} mt={1.5}>
              <Chip icon={<Email />} label="john.deo@email.com" size="small" />
              <Chip icon={<Phone />} label="+91 9999999999" size="small" />
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={8}>
            <Section>
              <Typography variant="h5" color="primary" gutterBottom>
                Professional Summary
              </Typography>
              <Typography variant="body1">
                Passionate frontend developer with 5+ years experience in building responsive and 
                accessible web applications using React, Material-UI, and Next.js. Proven ability to 
                lead development teams and deliver high-quality solutions for enterprise clients.
              </Typography>
            </Section>

            <Section>
              <Typography variant="h5" color="primary" gutterBottom>
                Work Experience
              </Typography>
              
              <Box mb={3}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6">
                    <b>ABC Tech Pvt Ltd</b>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    2021–Present
                  </Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Senior Frontend Developer
                </Typography>
                <ul>
                  <li><Typography variant="body2">Built scalable UI components with React & Material-UI serving 50k+ monthly users</Typography></li>
                  <li><Typography variant="body2">Led frontend development team for enterprise dashboard projects</Typography></li>
                  <li><Typography variant="body2">Improved application performance by 40% through code optimization</Typography></li>
                </ul>
              </Box>
              
              <Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6">
                    <b>XYZ Solutions</b>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    2019–2021
                  </Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Frontend Developer
                </Typography>
                <ul>
                  <li><Typography variant="body2">Developed e-commerce platform with React and Redux</Typography></li>
                  <li><Typography variant="body2">Implemented responsive designs for mobile and desktop</Typography></li>
                  <li><Typography variant="body2">Collaborated with UX designers to implement user interfaces</Typography></li>
                </ul>
              </Box>
            </Section>

            <Section>
              <Typography variant="h5" color="primary" gutterBottom>
                Key Projects
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={0} sx={{ p: 2, height: "100%", borderLeft: "3px solid", borderColor: "primary.main" }}>
                    <Typography variant="h6" gutterBottom>
                      Portfolio Website
                    </Typography>
                    <Typography variant="body2">
                      Modern portfolio site with dark mode, animations, and responsive design
                    </Typography>
                    <Box mt={1.5}>
                      <SkillChip label="React" size="small" />
                      <SkillChip label="Material-UI" size="small" />
                      <SkillChip label="Framer Motion" size="small" />
                    </Box>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Paper elevation={0} sx={{ p: 2, height: "100%", borderLeft: "3px solid", borderColor: "primary.main" }}>
                    <Typography variant="h6" gutterBottom>
                      Inventory Dashboard
                    </Typography>
                    <Typography variant="body2">
                      Enterprise inventory management system with real-time analytics
                    </Typography>
                    <Box mt={1.5}>
                      <SkillChip label="Next.js" size="small" />
                      <SkillChip label="Redux" size="small" />
                      <SkillChip label="Chart.js" size="small" />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Section>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            <Section>
              <Typography variant="h5" color="primary" gutterBottom>
                Technical Skills
              </Typography>
              <Box>
                <Typography variant="subtitle1" fontWeight={600} mt={1}>
                  Frontend
                </Typography>
                <Box display="flex" flexWrap="wrap" mt={1}>
                  {["React", "Material-UI", "Next.js", "TypeScript", "Redux", "JavaScript", "HTML5", "CSS3"].map(skill => (
                    <SkillChip key={skill} label={skill} color="primary" size="small" />
                  ))}
                </Box>
                
                <Typography variant="subtitle1" fontWeight={600} mt={2}>
                  Tools & Methods
                </Typography>
                <Box display="flex" flexWrap="wrap" mt={1}>
                  {["Git", "Jest", "Webpack", "CI/CD", "Agile", "Scrum"].map(skill => (
                    <SkillChip key={skill} label={skill} color="secondary" size="small" />
                  ))}
                </Box>
              </Box>
            </Section>

            <Section>
              <Typography variant="h5" color="primary" gutterBottom>
                Education
              </Typography>
              <Box mb={2}>
                <Typography variant="h6">
                  <b>B.Tech Computer Science</b>
                </Typography>
                <Typography variant="body2">XYZ University</Typography>
                <Typography variant="body2" color="text.secondary">2016-2020 | GPA: 9.2/10</Typography>
              </Box>
              
              <Box>
                <Typography variant="h6">
                  <b>Higher Secondary</b>
                </Typography>
                <Typography variant="body2">St. Xavier's College</Typography>
                <Typography variant="body2" color="text.secondary">2014-2016 | 95.4%</Typography>
              </Box>
            </Section>

            <Section>
              <Typography variant="h5" color="primary" gutterBottom>
                Certifications
              </Typography>
              <ul style={{ paddingLeft: 20, marginTop: 0 }}>
                <li><Typography variant="body2">Google UX Design Professional Certificate</Typography></li>
                <li><Typography variant="body2">AWS Certified Cloud Practitioner</Typography></li>
                <li><Typography variant="body2">Microsoft Certified: Azure Fundamentals</Typography></li>
              </ul>
            </Section>

            <Section>
              <Typography variant="h5" color="primary" gutterBottom>
                Contact
              </Typography>
              <ContactItem>
                <Email fontSize="small" />
                <Typography variant="body2">john.deo@email.com</Typography>
              </ContactItem>
              <ContactItem>
                <Phone fontSize="small" />
                <Typography variant="body2">+91 9999999999</Typography>
              </ContactItem>
              <ContactItem>
                <LinkedIn fontSize="small" />
                <Link href="#" variant="body2">linkedin.com/in/johndeo</Link>
              </ContactItem>
              <ContactItem>
                <GitHub fontSize="small" />
                <Link href="#" variant="body2">github.com/johndeo</Link>
              </ContactItem>
            </Section>
          </Grid>
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
}
