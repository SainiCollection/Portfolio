import React, { useState, useRef } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  Avatar,
  IconButton,
  Chip,
  Grid,
  Button,
  Container,
} from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Twitter,
  Print,
  PictureAsPdf,
  Palette,
} from "@mui/icons-material";
import styled, { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Professional themes
const themes = [
  { name: "Deep Teal", color: "#00695c", font: "Roboto, sans-serif" },
  { name: "Burgundy", color: "#6a1b9a", font: "Poppins, sans-serif" },
  { name: "Navy Blue", color: "#0d47a1", font: "Lato, sans-serif" },
];

const Card = styled(Box)`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProfessionalBackground = styled(Box)`
  min-height: 100vh;
  background: #f5f7fa;
  padding: 2rem;

  @media print {
    background: white !important;
    padding: 0;
  }
`;

const SectionHeader = styled(Typography)`
  border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #333;
  
  @media print {
    border-color: ${({ theme }) => theme.palette.primary.dark} !important;
  }
`;

const NonPrintable = styled.div`
  @media print {
    display: none;
  }
`;

const PrintableContainer = styled(Container)`
  @media print {
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }
`;

const PrintableChip = styled(Chip)`
  @media print {
    border: 1px solid #ddd;
    background: transparent !important;
    color: #333 !important;
  }
`;

export default function ProfessionalCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const cvRef = useRef();

  const theme = createTheme({
    palette: {
      primary: { main: themes[themeIndex].color },
    },
    typography: {
      fontFamily: themes[themeIndex].font,
      allVariants: {
        color: "#333",
      },
    },
  });

  const nextTheme = () =>
    setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: "Professional_CV",
    pageStyle: `
      @page { 
        size: A4; 
        margin: 1cm;
      }
      body { 
        -webkit-print-color-adjust: exact; 
        print-color-adjust: exact;
      }
    `,
  });

  const handleDownloadPDF = () => {
    const input = cvRef.current;
    html2canvas(input, { scale: 2 }).then(canvas => {
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
      pdf.save("Professional_CV.pdf");
    });
  };

  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <ProfessionalBackground>
          <NonPrintable>
            <Box display="flex" justifyContent="flex-end" gap={1} mb={2}
              flexDirection={{ xs: "column", sm: "row" }}>
              <Button 
                onClick={nextTheme} 
                variant="outlined" 
                color="primary"
                startIcon={<Palette />}
                sx={{ mb: { xs: 1, sm: 0 } }}
              >
                Change Theme
              </Button>
              <Button 
                onClick={handleDownloadPDF} 
                variant="contained" 
                color="primary"
                startIcon={<PictureAsPdf />}
                sx={{ mb: { xs: 1, sm: 0 } }}
              >
                Download PDF
              </Button>
              <Button 
                onClick={handlePrint} 
                variant="contained" 
                color="primary"
                startIcon={<Print />}
              >
                Print CV
              </Button>
            </Box>
          </NonPrintable>

          <PrintableContainer maxWidth="md" ref={cvRef}>
            {/* Header Section */}
            <Card>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Typography variant="h3" fontWeight="bold" color="primary"
                    sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}>
                    Aarav Sharma
                  </Typography>
                  <Typography variant="h5" mt={1} fontWeight="500">
                    Senior Frontend Developer
                  </Typography>

                  <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body1">
                        <strong>Phone:</strong> +91 9876543210
                      </Typography>
                      <Typography variant="body1">
                        <strong>Email:</strong> aarav.sharma@email.com
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body1">
                        <strong>Location:</strong> Bangalore, India
                      </Typography>
                      <Typography variant="body1">
                        <strong>Portfolio:</strong> aarav-dev.com
                      </Typography>
                    </Grid>
                  </Grid>

                  <Box mt={2} display="flex" justifyContent={{ xs: "center", md: "flex-start" }}>
                    <IconButton color="primary">
                      <LinkedIn />
                    </IconButton>
                    <IconButton color="primary">
                      <GitHub />
                    </IconButton>
                    <IconButton color="primary">
                      <Twitter />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Avatar
                    src="https://via.placeholder.com/150"
                    sx={{ 
                      width: 150, 
                      height: 150,
                      border: `3px solid ${theme.palette.primary.main}`,
                    }}
                  />
                </Grid>
              </Grid>
            </Card>

            {/* Summary */}
            <Card>
              <SectionHeader variant="h5">
                Professional Summary
              </SectionHeader>
              <Typography>
                Experienced Frontend Developer with 5+ years specializing in React ecosystem and modern JavaScript. 
                Proven expertise in building scalable web applications with focus on performance, accessibility, 
                and user experience. Strong advocate for clean code practices and test-driven development.
              </Typography>
            </Card>

            {/* Main Content Grid */}
            <Grid container spacing={3}>
              {/* Left Column */}
              <Grid item xs={12} md={8}>
                {/* Experience */}
                <Card>
                  <SectionHeader variant="h5">
                    Work Experience
                  </SectionHeader>

                  <Box mb={3}>
                    <Typography variant="h6" fontWeight="600">
                      Senior Frontend Developer | Tech Innovations Inc.
                    </Typography>
                    <Typography variant="body2" fontStyle="italic">
                      Jan 2022 - Present | Bangalore, India
                    </Typography>
                    <Typography mt={1} component="div">
                      <ul style={{ marginTop: 0, paddingLeft: "20px" }}>
                        <li>Led migration of legacy codebase to modern React/TypeScript architecture</li>
                        <li>Implemented design system used by 15+ products across organization</li>
                        <li>Mentored junior developers through code reviews and technical workshops</li>
                        <li>Reduced CI/CD pipeline execution time by 35% through optimization</li>
                      </ul>
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h6" fontWeight="600">
                      Frontend Developer | Digital Solutions Ltd.
                    </Typography>
                    <Typography variant="body2" fontStyle="italic">
                      Mar 2020 - Dec 2021 | Mumbai, India
                    </Typography>
                    <Typography mt={1} component="div">
                      <ul style={{ marginTop: 0, paddingLeft: "20px" }}>
                        <li>Developed responsive UIs for enterprise SaaS applications</li>
                        <li>Implemented comprehensive test suite increasing coverage to 85%</li>
                        <li>Optimized core application workflows improving user engagement by 22%</li>
                        <li>Collaborated with UX team to implement design system components</li>
                      </ul>
                    </Typography>
                  </Box>
                </Card>

                {/* Projects */}
                <Card>
                  <SectionHeader variant="h5">
                    Key Projects
                  </SectionHeader>

                  <Box mb={2}>
                    <Typography variant="h6" fontWeight="600">
                      Financial Analytics Dashboard
                    </Typography>
                    <Typography variant="body2" fontStyle="italic">
                      React, Redux, D3.js, Highcharts
                    </Typography>
                    <Typography mt={1} component="div">
                      <ul style={{ marginTop: 0, paddingLeft: "20px" }}>
                        <li>Created real-time data visualization platform for financial data</li>
                        <li>Developed reusable chart components library</li>
                        <li>Optimized data processing reducing load time by 60%</li>
                      </ul>
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h6" fontWeight="600">
                      E-commerce Platform
                    </Typography>
                    <Typography variant="body2" fontStyle="italic">
                      Next.js, Node.js, Stripe API
                    </Typography>
                    <Typography mt={1} component="div">
                      <ul style={{ marginTop: 0, paddingLeft: "20px" }}>
                        <li>Built full-featured e-commerce solution handling 50k+ monthly users</li>
                        <li>Integrated payment processing and inventory management</li>
                        <li>Implemented server-side rendering improving SEO ranking</li>
                      </ul>
                    </Typography>
                  </Box>
                </Card>
              </Grid>

              {/* Right Column */}
              <Grid item xs={12} md={4}>
                {/* Skills */}
                <Card>
                  <SectionHeader variant="h5">
                    Technical Skills
                  </SectionHeader>

                  <Typography variant="h6" mt={1}>Core Technologies</Typography>
                  <Box display="flex" flexWrap="wrap" gap={1} mt={1} mb={2}>
                    {["React", "TypeScript", "JavaScript", "Next.js", "Node.js"].map((skill) => (
                      <PrintableChip key={skill} label={skill} color="primary" />
                    ))}
                  </Box>

                  <Typography variant="h6">State Management</Typography>
                  <Box display="flex" flexWrap="wrap" gap={1} mt={1} mb={2}>
                    {["Redux", "Context API", "MobX", "Recoil"].map((skill) => (
                      <PrintableChip key={skill} label={skill} color="primary" />
                    ))}
                  </Box>

                  <Typography variant="h6">Testing</Typography>
                  <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                    {["Jest", "React Testing", "Cypress", "Mocha"].map((skill) => (
                      <PrintableChip key={skill} label={skill} color="primary" />
                    ))}
                  </Box>
                </Card>

                {/* Education */}
                <Card>
                  <SectionHeader variant="h5">
                    Education
                  </SectionHeader>
                  <Typography variant="h6" fontWeight="600">
                    B.Tech Computer Science
                  </Typography>
                  <Typography>
                    Indian Institute of Technology, Delhi
                  </Typography>
                  <Typography variant="body2" fontStyle="italic">
                    2016 - 2020 | CGPA: 8.9/10
                  </Typography>
                </Card>

                {/* Certifications */}
                <Card>
                  <SectionHeader variant="h5">
                    Certifications
                  </SectionHeader>
                  <Typography>
                    <strong>AWS Certified Developer</strong> (2023)
                  </Typography>
                  <Typography>
                    <strong>Google Professional UX Design</strong> (2022)
                  </Typography>
                  <Typography>
                    <strong>React Advanced Concepts</strong> (2021)
                  </Typography>
                </Card>

                {/* Languages */}
                <Card>
                  <SectionHeader variant="h5">
                    Languages
                  </SectionHeader>
                  <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                    {["English (Fluent)", "Hindi (Native)", "French (Intermediate)"].map((lang) => (
                      <PrintableChip key={lang} label={lang} color="primary" />
                    ))}
                  </Box>
                </Card>
              </Grid>
            </Grid>

            {/* Achievements */}
            <Card>
              <SectionHeader variant="h5">
                Professional Achievements
              </SectionHeader>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography>
                    • Published author of "Modern React Patterns" (2023)
                  </Typography>
                  <Typography>
                    • Speaker at React India Conference (2022)
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>
                    • Winner of National Hackathon (2021)
                  </Typography>
                  <Typography>
                    • Open Source Contributor (50+ merged PRs)
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </PrintableContainer>
        </ProfessionalBackground>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}