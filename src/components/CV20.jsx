import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
  Switch,
  LinearProgress,
  Avatar,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Styled components
const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(2),
  textTransform: "uppercase",
  letterSpacing: "1px",
}));

const SkillBadge = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.5),
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.primary.dark
      : theme.palette.primary.light,
  color: theme.palette.getContrastText(
    theme.palette.mode === "dark"
      ? theme.palette.primary.dark
      : theme.palette.primary.light
  ),
  borderRadius: "20px",
  display: "inline-block",
  margin: theme.spacing(0.5),
  fontSize: "0.85rem",
}));

// CV Template Component
const CVTemplate = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState("Roboto");
  const cvRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const handleFontChange = (font) => {
    setFontFamily(font);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#90caf9" : "#3f51b5",
      },
      secondary: {
        main: darkMode ? "#ffb74d" : "#f50057",
      },
      background: {
        default: darkMode ? "#121212" : "#f5f5f5",
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
    },
    typography: {
      fontFamily: fontFamily,
      h1: { fontSize: "2.2rem", fontWeight: 700, letterSpacing: "1px" },
      h2: { fontSize: "1.6rem", fontWeight: 600 },
      h3: { fontSize: "1.2rem", fontWeight: 500 },
      h4: { fontSize: "1rem", fontWeight: 500 },
      body1: { fontSize: "0.9rem", lineHeight: "1.6" },
      body2: { fontSize: "0.85rem", color: "text.secondary" },
    },
  });

  const handlePrint = () => {
    window.print();
  };

  const downloadPDF = () => {
    const input = cvRef.current;
    html2canvas(input, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("professional-cv.pdf");
    });
  };

  // Sample CV data
  const cvData = {
    fullName: "Alex Johnson",
    title: "Senior Frontend Developer",
    phone: "+1 (555) 123-4567",
    email: "alex.johnson@example.com",
    city: "San Francisco",
    country: "USA",
    socialLinks: [
      { name: "LinkedIn", url: "linkedin.com/in/alexjohnson" },
      { name: "GitHub", url: "github.com/alexjohnson" },
      { name: "Portfolio", url: "alexjohnson.dev" },
    ],
    summary:
      "Senior Frontend Developer with 8+ years of experience building responsive and performant web applications. Specialized in React ecosystem with a strong focus on user experience and clean code architecture. Passionate about mentoring junior developers and implementing modern frontend practices.",
    skills: [
      { name: "React.js", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Material-UI", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "CSS/SCSS", level: 90 },
      { name: "GraphQL", level: 80 },
    ],
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "Tech Innovations Inc.",
        period: "Jan 2020 - Present",
        description:
          "Leading frontend development for enterprise SaaS platform serving 500+ clients.",
        achievements: [
          "Reduced page load time by 40% through code optimization and lazy loading",
          "Mentored 5 junior developers, improving team velocity by 25%",
          "Implemented design system used across 15+ company products",
        ],
      },
      {
        title: "Frontend Developer",
        company: "Digital Solutions LLC",
        period: "Mar 2017 - Dec 2019",
        description:
          "Developed customer-facing applications for e-commerce clients.",
        achievements: [
          "Created reusable component library saving 200+ development hours annually",
          "Improved conversion rate by 18% through UI/UX enhancements",
          "Migrated legacy jQuery application to modern React stack",
        ],
      },
      {
        title: "Web Developer",
        company: "Creative Web Agency",
        period: "Jun 2015 - Feb 2017",
        description: "Built responsive websites for diverse client portfolio.",
        achievements: [
          "Delivered 30+ client projects with 100% satisfaction rate",
          "Implemented responsive designs that worked across all device sizes",
          "Reduced development time by implementing reusable templates",
        ],
      },
    ],
    education: [
      {
        degree: "M.S. Computer Science",
        institution: "Stanford University",
        period: "2013 - 2015",
        description: "Specialized in Human-Computer Interaction",
      },
      {
        degree: "B.S. Software Engineering",
        institution: "University of California",
        period: "2009 - 2013",
        description: "Minor in Digital Design, GPA: 3.8/4.0",
      },
    ],
    projects: [
      {
        name: "E-commerce Platform",
        technologies: "React, Node.js, MongoDB, Stripe",
        description: "Full-featured online shopping platform with payment processing",
      },
      {
        name: "Project Management Dashboard",
        technologies: "React, Redux, Material-UI, Firebase",
        description: "Real-time collaborative project management tool",
      },
    ],
    certificates: [
      "AWS Certified Solutions Architect (2022)",
      "Google Professional Cloud Developer (2021)",
      "React Advanced Concepts Certification (2020)",
    ],
    achievements: [
      "Employee of the Year 2021 - Tech Innovations Inc.",
      "Best Open Source Contribution 2019 - React Community",
      "Top Performer Award 2018 - Digital Solutions LLC",
    ],
    languages: [
      { name: "English", proficiency: "Native" },
      { name: "Spanish", proficiency: "Professional" },
      { name: "French", proficiency: "Intermediate" },
    ],
    interests: [
      "Open Source Contribution",
      "Photography",
      "Hiking",
      "AI Research",
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Control Panel */}
        <Paper
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            p: 3,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Professional CV Builder
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LightModeIcon
                sx={{ color: darkMode ? "text.disabled" : "primary.main" }}
              />
              <Switch
                checked={darkMode}
                onChange={toggleDarkMode}
                color="primary"
                sx={{ mx: 1 }}
              />
              <DarkModeIcon
                sx={{ color: darkMode ? "primary.main" : "text.disabled" }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant={fontFamily === "Roboto" ? "contained" : "outlined"}
                size="small"
                onClick={() => handleFontChange("Roboto")}
                sx={{ textTransform: "none" }}
              >
                Roboto
              </Button>
              <Button
                variant={fontFamily === "Arial" ? "contained" : "outlined"}
                size="small"
                onClick={() => handleFontChange("Arial")}
                sx={{ textTransform: "none" }}
              >
                Arial
              </Button>
              <Button
                variant={fontFamily === "Georgia" ? "contained" : "outlined"}
                size="small"
                onClick={() => handleFontChange("Georgia")}
                sx={{ textTransform: "none" }}
              >
                Georgia
              </Button>
            </Box>
          </Box>

          <Box>
            <Button
              variant="contained"
              startIcon={<PrintIcon />}
              onClick={handlePrint}
              sx={{ mr: 2 }}
            >
              Print
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DownloadIcon />}
              onClick={downloadPDF}
            >
              Download PDF
            </Button>
          </Box>
        </Paper>

        {/* CV Container - A4 Size */}
        <Paper
          ref={cvRef}
          elevation={3}
          sx={{
            width: "210mm",
            minHeight: "297mm",
            mx: "auto",
            p: "25mm",
            display: "flex",
            flexDirection: "column",
            "@media print": {
              boxShadow: "none",
              width: "100%",
              height: "100%",
              margin: 0,
              padding: "20mm",
            },
          }}
        >
          {/* Header */}
          <Box
            sx={{
              mb: 4,
              borderBottom: "2px solid",
              borderColor: "primary.main",
              pb: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                width: 120,
                height: 120,
                mr: 4,
                fontSize: "3rem",
                bgcolor: "primary.main",
              }}
            >
              AJ
            </Avatar>
            <Box>
              <Typography variant="h1" sx={{ color: "primary.main" }}>
                {cvData.fullName}
              </Typography>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 400 }}>
                {cvData.title}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <PhoneIcon sx={{ mr: 1, fontSize: "1rem" }} />
                    <Typography variant="body1">{cvData.phone}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <EmailIcon sx={{ mr: 1, fontSize: "1rem" }} />
                    <Typography variant="body1">{cvData.email}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <LocationOnIcon sx={{ mr: 1, fontSize: "1rem" }} />
                    <Typography variant="body1">
                      {cvData.city}, {cvData.country}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <LinkIcon sx={{ mr: 1, fontSize: "1rem" }} />
                    <Typography variant="body1">
                      {cvData.socialLinks[0].url}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={7}>
              {/* Summary */}
              <Section>
                <SectionTitle variant="h2">Professional Summary</SectionTitle>
                <Typography variant="body1">{cvData.summary}</Typography>
              </Section>

              {/* Experience */}
              <Section>
                <SectionTitle variant="h2">Work Experience</SectionTitle>
                {cvData.experience.map((exp, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="h3">{exp.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {exp.period}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      fontStyle="italic"
                      color="primary.main"
                    >
                      {exp.company}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {exp.description}
                    </Typography>
                    <Box
                      component="ul"
                      sx={{ pl: 2, mt: 1, listStyleType: "square" }}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>
                          <Typography variant="body1">{achievement}</Typography>
                        </li>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Section>

              {/* Projects */}
              <Section>
                <SectionTitle variant="h2">Projects</SectionTitle>
                {cvData.projects.map((project, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="h4" fontWeight="bold">
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontStyle="italic"
                      color="text.secondary"
                    >
                      {project.technologies}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 0.5 }}>
                      {project.description}
                    </Typography>
                  </Box>
                ))}
              </Section>
            </Grid>

            {/* Right Column */}
            <Grid item xs={5}>
              {/* Skills */}
              <Section>
                <SectionTitle variant="h2">Technical Skills</SectionTitle>
                {cvData.skills.map((skill, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography variant="body1">{skill.name}</Typography>
                      <Typography variant="body2">{skill.level}%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "action.disabledBackground",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "primary.main",
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Section>

              {/* Education */}
              <Section>
                <SectionTitle variant="h2">Education</SectionTitle>
                {cvData.education.map((edu, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="h3">{edu.degree}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {edu.period}
                      </Typography>
                    </Box>
                    <Typography variant="body1">{edu.institution}</Typography>
                    <Typography variant="body2">{edu.description}</Typography>
                  </Box>
                ))}
              </Section>

              {/* Certificates */}
              <Section>
                <SectionTitle variant="h2">Certifications</SectionTitle>
                <Box component="ul" sx={{ pl: 2 }}>
                  {cvData.certificates.map((cert, index) => (
                    <li key={index}>
                      <Typography variant="body1">{cert}</Typography>
                    </li>
                  ))}
                </Box>
              </Section>

              {/* Languages */}
              <Section>
                <SectionTitle variant="h2">Languages</SectionTitle>
                <Grid container spacing={1}>
                  {cvData.languages.map((lang, index) => (
                    <React.Fragment key={index}>
                      <Grid item xs={6}>
                        <Typography>{lang.name}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography color="text.secondary">
                          {lang.proficiency}
                        </Typography>
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </Section>

              {/* Interests */}
              <Section>
                <SectionTitle variant="h2">Interests</SectionTitle>
                <Typography variant="body1">
                  {cvData.interests.join(", ")}
                </Typography>
              </Section>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <style>{`
        body.dark-mode {
          background-color: #121212 !important;
          color: #f5f5f5 !important;
        }
      `}</style>
    </ThemeProvider>
  );
};

export default CVTemplate;