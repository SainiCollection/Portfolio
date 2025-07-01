import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { 
  Box, Container, Grid, Typography, Paper, Divider, 
  Chip, Avatar, List, ListItem, ListItemText, 
  ListItemAvatar, Button, Link, IconButton 
} from '@mui/material';
import { 
  Email, LocationOn, LinkedIn, GitHub, Twitter, 
  Work, School, Code, CardMembership, MilitaryTech, 
  Language, Favorite, Star 
} from '@mui/icons-material';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#3498db',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.8rem',
      marginBottom: '1rem',
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: -8,
        left: 0,
        width: 50,
        height: 4,
        backgroundColor: '#3498db',
      }
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.3rem',
    },
    body1: {
      lineHeight: 1.6,
    },
  },
});

// Portfolio data
const portfolioData = {
  fullName: "Rohan Sharma",
  email: "rohan.sharma@example.com",
  city: "Bangalore",
  state: "Karnataka",
  country: "India",
  socialLinks: {
    linkedin: "https://linkedin.com/in/rohansharma",
    github: "https://github.com/rohansharma",
    twitter: "https://twitter.com/rohansharma",
  },
  summary: "Passionate Full Stack Developer with 5+ years of experience creating scalable web applications. Specialized in React, Node.js, and cloud technologies. Committed to writing clean, efficient code and solving complex problems with elegant solutions.",
  skills: [
    "React", "Node.js", "JavaScript", "TypeScript", "MongoDB", 
    "Express", "Redux", "Material-UI", "AWS", "Docker",
    "Git", "GraphQL", "Python", "Java", "CI/CD"
  ],
  experience: [
    {
      position: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      duration: "Jan 2021 - Present",
      description: "Led development of enterprise SaaS platform using React and Node.js. Implemented microservices architecture reducing latency by 40%.",
      achievements: ["Team lead for 5 developers", "Redesigned core architecture", "Mentored junior engineers"]
    },
    {
      position: "Software Developer",
      company: "Digital Solutions Ltd.",
      duration: "Jun 2018 - Dec 2020",
      description: "Developed and maintained e-commerce platform serving 500k+ monthly users. Optimized performance leading to 30% faster load times.",
      achievements: ["Implemented CI/CD pipeline", "Created reusable component library", "Improved test coverage to 90%"]
    }
  ],
  education: [
    {
      degree: "M.S. in Computer Science",
      institution: "Indian Institute of Technology, Delhi",
      duration: "2016 - 2018",
      details: "Specialized in Distributed Systems and Cloud Computing"
    },
    {
      degree: "B.Tech in Information Technology",
      institution: "National Institute of Technology, Karnataka",
      duration: "2012 - 2016",
      details: "Graduated with honors. Minored in Data Science."
    }
  ],
  projects: [
    {
      title: "Smart Health Monitoring System",
      description: "IoT-based patient monitoring platform with real-time analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "TensorFlow"],
      link: "https://github.com/rohansharma/health-monitor"
    },
    {
      title: "E-commerce Analytics Dashboard",
      description: "Real-time sales and inventory management system with predictive analytics.",
      technologies: ["React", "Redux", "Firebase", "D3.js"],
      link: "https://github.com/rohansharma/ecom-analytics"
    }
  ],
  certificates: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022"
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google",
      date: "2021"
    }
  ],
  achievements: [
    "Employee of the Year 2022 at Tech Innovations",
    "Top 10 in National Coding Championship 2019",
    "Published 3 research papers on distributed systems"
  ],
  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Native" },
    { name: "Spanish", proficiency: "Intermediate" }
  ],
  interests: ["Open Source Contributions", "Photography", "Hiking", "AI Research", "Reading Tech Blogs"],
  awards: [
    "Best Project Award - Tech Expo 2020",
    "Innovation Grant Recipient - 2019",
    "Gold Medal in University Programming Contest"
  ]
};

// Portfolio components
const HeaderSection = () => (
  <Box sx={{ 
    backgroundColor: theme.palette.primary.main, 
    color: 'white', 
    py: 8,
    textAlign: 'center',
    mb: 4
  }}>
    <Container>
      <Avatar 
        alt={portfolioData.fullName} 
        src="/profile.jpg" 
        sx={{ 
          width: 150, 
          height: 150, 
          margin: '0 auto 1rem',
          border: '4px solid white'
        }} 
      />
      <Typography variant="h1" gutterBottom>
        {portfolioData.fullName}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 400, mb: 2 }}>
        Senior Software Engineer
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton 
          color="inherit" 
          component="a" 
          href={portfolioData.socialLinks.linkedin}
          target="_blank"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton 
          color="inherit" 
          component="a" 
          href={portfolioData.socialLinks.github}
          target="_blank"
        >
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton 
          color="inherit" 
          component="a" 
          href={portfolioData.socialLinks.twitter}
          target="_blank"
        >
          <Twitter fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  </Box>
);

const ContactInfo = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Email sx={{ mr: 1, color: theme.palette.secondary.main }} />
      <Link href={`mailto:${portfolioData.email}`} underline="hover" color="inherit">
        {portfolioData.email}
      </Link>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <LocationOn sx={{ mr: 1, color: theme.palette.secondary.main }} />
      <Typography>
        {portfolioData.city}, {portfolioData.state}, {portfolioData.country}
      </Typography>
    </Box>
  </Box>
);

const SkillsSection = () => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center' }}>
      <Code sx={{ mr: 1 }} /> Skills
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {portfolioData.skills.map((skill, index) => (
        <Chip 
          key={index} 
          label={skill} 
          color="primary" 
          variant="outlined"
          sx={{ 
            fontWeight: 500,
            borderWidth: 2,
            '&:hover': { 
              backgroundColor: theme.palette.primary.main,
              color: 'white'
            }
          }}
        />
      ))}
    </Box>
  </Box>
);

const SummarySection = () => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2">
      Professional Summary
    </Typography>
    <Typography variant="body1" paragraph>
      {portfolioData.summary}
    </Typography>
  </Box>
);

const ExperienceSection = () => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center' }}>
      <Work sx={{ mr: 1 }} /> Experience
    </Typography>
    {portfolioData.experience.map((exp, index) => (
      <Paper key={index} elevation={0} sx={{ 
        p: 3, 
        mb: 2, 
        backgroundColor: theme.palette.background.paper,
        borderLeft: `4px solid ${theme.palette.secondary.main}`
      }}>
        <Typography variant="h3" gutterBottom>
          {exp.position}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {exp.company} | {exp.duration}
        </Typography>
        <Typography variant="body1" paragraph>
          {exp.description}
        </Typography>
        <List dense>
          {exp.achievements.map((achievement, i) => (
            <ListItem key={i} sx={{ py: 0 }}>
              <ListItemAvatar sx={{ minWidth: 30 }}>
                <Star sx={{ color: theme.palette.secondary.main, fontSize: 16 }} />
              </ListItemAvatar>
              <ListItemText primary={achievement} />
            </ListItem>
          ))}
        </List>
      </Paper>
    ))}
  </Box>
);

const EducationSection = () => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center' }}>
      <School sx={{ mr: 1 }} /> Education
    </Typography>
    {portfolioData.education.map((edu, index) => (
      <Paper key={index} elevation={0} sx={{ 
        p: 3, 
        mb: 2, 
        backgroundColor: theme.palette.background.paper,
        borderLeft: `4px solid ${theme.palette.secondary.main}`
      }}>
        <Typography variant="h3" gutterBottom>
          {edu.degree}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {edu.institution} | {edu.duration}
        </Typography>
        <Typography variant="body1">
          {edu.details}
        </Typography>
      </Paper>
    ))}
  </Box>
);

const ProjectsSection = () => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center' }}>
      <Code sx={{ mr: 1 }} /> Projects
    </Typography>
    <Grid container spacing={3}>
      {portfolioData.projects.map((project, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Paper elevation={0} sx={{ 
            p: 3, 
            height: '100%',
            backgroundColor: theme.palette.background.paper,
            borderTop: `4px solid ${theme.palette.secondary.main}`
          }}>
            <Typography variant="h3" gutterBottom>
              {project.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {project.description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {project.technologies.map((tech, i) => (
                <Chip 
                  key={i} 
                  label={tech} 
                  size="small" 
                  color="secondary"
                  sx={{ fontWeight: 500 }}
                />
              ))}
            </Box>
            <Button 
              variant="outlined" 
              color="primary"
              href={project.link} 
              target="_blank"
            >
              View Project
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const CertificatesSection = () => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center' }}>
      <CardMembership sx={{ mr: 1 }} /> Certificates
    </Typography>
    <List>
      {portfolioData.certificates.map((cert, index) => (
        <ListItem key={index} sx={{ py: 1 }}>
          <ListItemAvatar>
            <CardMembership sx={{ color: theme.palette.secondary.main }} />
          </ListItemAvatar>
          <ListItemText 
            primary={cert.name} 
            secondary={`${cert.issuer} | ${cert.date}`} 
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

const AchievementsSection = () => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center' }}>
      <MilitaryTech sx={{ mr: 1 }} /> Achievements
    </Typography>
    <List>
      {portfolioData.achievements.map((achievement, index) => (
        <ListItem key={index} sx={{ py: 1 }}>
          <ListItemAvatar>
            <MilitaryTech sx={{ color: theme.palette.secondary.main }} />
          </ListItemAvatar>
          <ListItemText primary={achievement} />
        </ListItem>
      ))}
    </List>
  </Box>
);

const LanguagesSection = () => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center' }}>
      <Language sx={{ mr: 1 }} /> Languages
    </Typography>
    <Grid container spacing={2}>
      {portfolioData.languages.map((lang, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Paper elevation={0} sx={{ p: 2, backgroundColor: theme.palette.background.paper }}>
            <Typography variant="h3" sx={{ fontSize: '1.1rem', mb: 0.5 }}>
              {lang.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {lang.proficiency}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const InterestsSection = () => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center' }}>
      <Favorite sx={{ mr: 1 }} /> Interests
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {portfolioData.interests.map((interest, index) => (
        <Chip 
          key={index} 
          label={interest} 
          color="secondary" 
          variant="outlined"
          sx={{ fontWeight: 500 }}
        />
      ))}
    </Box>
  </Box>
);

const AwardsSection = () => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center' }}>
      <Star sx={{ mr: 1 }} /> Awards
    </Typography>
    <List>
      {portfolioData.awards.map((award, index) => (
        <ListItem key={index} sx={{ py: 1 }}>
          <ListItemAvatar>
            <Star sx={{ color: theme.palette.secondary.main }} />
          </ListItemAvatar>
          <ListItemText primary={award} />
        </ListItem>
      ))}
    </List>
  </Box>
);

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        pt: 0
      }}>
        <HeaderSection />
        
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid container spacing={4}>
            {/* Left Column - Personal Info */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ 
                p: 3, 
                mb: 4,
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}>
                <ContactInfo />
                <Divider sx={{ my: 3 }} />
                <SkillsSection />
                <Divider sx={{ my: 3 }} />
                <LanguagesSection />
                <Divider sx={{ my: 3 }} />
                <InterestsSection />
              </Paper>
            </Grid>
            
            {/* Right Column - Professional Details */}
            <Grid item xs={12} md={8}>
              <SummarySection />
              <ExperienceSection />
              <EducationSection />
              <ProjectsSection />
              
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <CertificatesSection />
                  <AchievementsSection />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AwardsSection />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        
        <Box sx={{ 
          backgroundColor: theme.palette.primary.main, 
          color: 'white', 
          py: 4,
          textAlign: 'center',
          mt: 4
        }}>
          <Typography variant="body1">
            © {new Date().getFullYear()} {portfolioData.fullName}. All rights reserved.
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Link href="#" color="inherit" underline="hover">Privacy Policy</Link>
            <Link href="#" color="inherit" underline="hover">Terms of Service</Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;