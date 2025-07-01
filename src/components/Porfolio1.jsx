import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardMedia
} from '@mui/material';
import {
  Email,
  GitHub,
  LinkedIn,
  Twitter,
  Download,
  Work,
  School,
  Code,
  DesignServices,
  Person,
  Menu,
  Home,
  Info,
  Build,
  BusinessCenter,
  CastForEducation,
  Contacts
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Professional theme setup
const theme = createTheme({
  palette: {
    primary: {
      main: '#2962ff', // More professional blue
    },
    secondary: {
      main: '#ff6d00', // Professional orange accent
    },
    background: {
      default: '#f9f9f9',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1.1rem',
      color: 'text.secondary',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '10px 24px',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          },
        },
      },
    },
  },
});

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Portfolio = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, message });
    alert('Message sent! I will get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  const navItems = [
    { name: 'Home', icon: <Home />, id: 'home' },
    { name: 'About', icon: <Info />, id: 'about' },
    { name: 'Skills', icon: <Build />, id: 'skills' },
    { name: 'Experience', icon: <BusinessCenter />, id: 'experience' },
    { name: 'Projects', icon: <Code />, id: 'projects' },
    { name: 'Education', icon: <CastForEducation />, id: 'education' },
    { name: 'Contact', icon: <Contacts />, id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Navigation */}
        <AppBar position="fixed" sx={{ bgcolor: 'background.paper', color: 'text.primary', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Jatin Sharma
              </Typography>
              
              {isMobile ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                >
                  <Menu />
                </IconButton>
              ) : (
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      color="inherit"
                      onClick={() => scrollToSection(item.id)}
                      sx={{ fontWeight: 500 }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>

        {/* Mobile Drawer */}
        {isMobile && (
          <Paper
            sx={{
              position: 'fixed',
              top: 64,
              right: mobileOpen ? 0 : '-100%',
              width: '70%',
              height: 'calc(100vh - 64px)',
              zIndex: 1200,
              transition: 'right 0.3s ease',
              pt: 2,
              boxShadow: '-2px 0 10px rgba(0,0,0,0.1)'
            }}
          >
            <List>
              {navItems.map((item) => (
                <ListItem button key={item.id} onClick={() => scrollToSection(item.id)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        )}

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>

          {/* Hero Section */}
          <Box id="home" sx={{ 
            py: 15, 
            background: 'linear-gradient(135deg, #2962ff 0%, #6200ea 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
              opacity: 0.3,
            }
          }}>
            <Container maxWidth="lg">
              <Grid container alignItems="center" spacing={6}>
                <Grid item xs={12} md={6}>
                  <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                    <Typography variant="h1" gutterBottom>
                      Jatin Sharma
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 400, mb: 3 }}>
                      Frontend Developer | React & MUI Specialist
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 4, maxWidth: '80%' }}>
                      I build fast, responsive & modern web applications with clean code and pixel-perfect designs.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        startIcon={<Download />}
                        sx={{ color: 'white' }}
                      >
                        Download CV
                      </Button>
                      <Button
                        variant="outlined"
                        color="inherit"
                        size="large"
                        onClick={() => scrollToSection('contact')}
                        sx={{ borderWidth: '2px', '&:hover': { borderWidth: '2px' } }}
                      >
                        Contact Me
                      </Button>
                    </Box>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Box
                      sx={{
                        width: 300,
                        height: 300,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        border: '8px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                      }}
                    >
                      {/* Replace with your actual image */}
                      <Avatar
                        alt="Jatin Sharma"
                        src="/profile.jpg" // Add your profile image
                        sx={{ width: '100%', height: '100%', fontSize: '5rem' }}
                      >
                        <Person sx={{ fontSize: 'inherit' }} />
                      </Avatar>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* About Me */}
          <Box id="about" sx={{ py: 10, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
              <motion.div initial="hidden" animate="visible" variants={slideUp}>
                <Typography variant="h2" align="center" gutterBottom>
                  About Me
                </Typography>
                <Divider sx={{ 
                  width: 80, 
                  height: 4, 
                  bgcolor: 'secondary.main', 
                  mx: 'auto', 
                  mb: 6,
                  borderRadius: 2
                }} />
                
                <Grid container spacing={6} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      Who am I?
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: '1.1rem' }}>
                      I'm a passionate frontend developer with expertise in React.js and Material-UI. 
                      I specialize in building modern, responsive web applications with clean, 
                      maintainable code and exceptional user experiences.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: '1.1rem' }}>
                      With a keen eye for design and attention to detail, I bridge the gap between 
                      design and technology to deliver pixel-perfect implementations.
                    </Typography>
                    
                    <Grid container spacing={2} sx={{ mt: 4 }}>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Work color="primary" sx={{ mr: 1 }} />
                          <Typography>Delhi, India</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Email color="primary" sx={{ mr: 1 }} />
                          <Typography>jatin@email.com</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <School color="primary" sx={{ mr: 1 }} />
                          <Typography>B.Tech CSE</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <DesignServices color="primary" sx={{ mr: 1 }} />
                          <Typography>2+ Years Experience</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Paper elevation={0} sx={{ 
                      p: 3, 
                      bgcolor: 'background.paper',
                      borderRadius: 3,
                      height: '100%'
                    }}>
                      <Typography variant="h6" color="text.secondary" gutterBottom>
                        My Skills
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3 }}>
                        {['React', 'Material-UI', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'].map((skill) => (
                          <Chip 
                            key={skill} 
                            label={skill} 
                            color="primary" 
                            variant="outlined"
                            sx={{ borderRadius: 1, fontWeight: 500 }}
                          />
                        ))}
                      </Box>
                      
                      <Typography variant="h6" color="text.secondary" gutterBottom sx={{ mt: 3 }}>
                        Tools I Use
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        {['VS Code', 'Figma', 'Git', 'GitHub', 'Firebase', 'Vercel'].map((tool) => (
                          <Chip 
                            key={tool} 
                            label={tool} 
                            color="secondary" 
                            variant="outlined"
                            sx={{ borderRadius: 1, fontWeight: 500 }}
                          />
                        ))}
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </motion.div>
            </Container>
          </Box>

          {/* Skills */}
          <Box id="skills" sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
              <motion.div initial="hidden" animate="visible" variants={slideUp}>
                <Typography variant="h2" align="center" gutterBottom>
                  My Expertise
                </Typography>
                <Divider sx={{ 
                  width: 80, 
                  height: 4, 
                  bgcolor: 'secondary.main', 
                  mx: 'auto', 
                  mb: 6,
                  borderRadius: 2
                }} />
                
                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}>
                    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                      <Card>
                        <CardContent sx={{ p: 4 }}>
                          <Box sx={{ 
                            width: 60, 
                            height: 60, 
                            bgcolor: 'primary.light', 
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 3
                          }}>
                            <Code sx={{ fontSize: 32, color: 'primary.main' }} />
                          </Box>
                          <Typography variant="h4" gutterBottom>
                            Frontend Development
                          </Typography>
                          <Typography variant="body1" color="text.secondary" paragraph>
                            Building responsive and interactive user interfaces with modern frameworks and libraries.
                          </Typography>
                          <Divider sx={{ my: 2 }} />
                          <Typography variant="subtitle2" gutterBottom>
                            Technologies:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind', 'MUI'].map((skill) => (
                              <Chip 
                                key={skill} 
                                label={skill} 
                                size="small"
                                sx={{ borderRadius: 1 }}
                              />
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                      <Card>
                        <CardContent sx={{ p: 4 }}>
                          <Box sx={{ 
                            width: 60, 
                            height: 60, 
                            bgcolor: 'secondary.light', 
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 3
                          }}>
                            <DesignServices sx={{ fontSize: 32, color: 'secondary.main' }} />
                          </Box>
                          <Typography variant="h4" gutterBottom>
                            UI/UX Design
                          </Typography>
                          <Typography variant="body1" color="text.secondary" paragraph>
                            Creating beautiful and intuitive user experiences with attention to detail.
                          </Typography>
                          <Divider sx={{ my: 2 }} />
                          <Typography variant="subtitle2" gutterBottom>
                            Tools:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {['Figma', 'Adobe XD', 'Framer Motion', 'Canva'].map((skill) => (
                              <Chip 
                                key={skill} 
                                label={skill} 
                                size="small"
                                sx={{ borderRadius: 1 }}
                              />
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                      <Card>
                        <CardContent sx={{ p: 4 }}>
                          <Box sx={{ 
                            width: 60, 
                            height: 60, 
                            bgcolor: 'primary.light', 
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 3
                          }}>
                            <Build sx={{ fontSize: 32, color: 'primary.main' }} />
                          </Box>
                          <Typography variant="h4" gutterBottom>
                            Other Skills
                          </Typography>
                          <Typography variant="body1" color="text.secondary" paragraph>
                            Comprehensive skillset to deliver complete solutions from concept to deployment.
                          </Typography>
                          <Divider sx={{ my: 2 }} />
                          <Typography variant="subtitle2" gutterBottom>
                            Skills:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {['Git', 'GitHub', 'Firebase', 'Vercel', 'REST APIs'].map((skill) => (
                              <Chip 
                                key={skill} 
                                label={skill} 
                                size="small"
                                sx={{ borderRadius: 1 }}
                              />
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
            </Container>
          </Box>

          {/* Experience */}
          <Box id="experience" sx={{ py: 10, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
              <motion.div initial="hidden" animate="visible" variants={slideUp}>
                <Typography variant="h2" align="center" gutterBottom>
                  Work Experience
                </Typography>
                <Divider sx={{ 
                  width: 80, 
                  height: 4, 
                  bgcolor: 'secondary.main', 
                  mx: 'auto', 
                  mb: 6,
                  borderRadius: 2
                }} />
                
                <Box sx={{ 
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: { xs: '20px', md: '50%' },
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    bgcolor: 'divider',
                    transform: 'translateX(-2px)',
                  }
                }}>
                  {[
                    {
                      title: 'Frontend Developer – Freelance',
                      period: 'Jan 2023 – Present',
                      responsibilities: [
                        'Built 10+ responsive React dashboards for clients across various industries',
                        'Converted Figma/Adobe XD designs into production-ready UIs with pixel-perfect accuracy',
                        'Implemented state management solutions using Context API and Redux',
                        'Optimized applications for performance and SEO best practices'
                      ],
                      align: 'left'
                    },
                    {
                      title: 'Frontend Intern – XYZ Tech',
                      period: 'Jul 2022 – Dec 2022',
                      responsibilities: [
                        'Contributed to internal admin portal using Material UI and React',
                        'Collaborated with designers to implement UI components',
                        'Participated in code reviews and team meetings',
                        'Fixed bugs and improved existing features'
                      ],
                      align: 'right'
                    }
                  ].map((exp, index) => (
                    <Box
                      key={index}
                      sx={{ 
                        position: 'relative',
                        mb: 6,
                        pl: { xs: 6, md: exp.align === 'left' ? 0 : '50%' },
                        pr: { xs: 0, md: exp.align === 'left' ? '50%' : 0 },
                        textAlign: { xs: 'left', md: exp.align }
                      }}
                    >
                      <Box sx={{ 
                        position: 'absolute',
                        left: { xs: '-8px', md: exp.align === 'left' ? 'calc(50% - 14px)' : '-8px' },
                        top: 0,
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        bgcolor: 'secondary.main',
                        zIndex: 1,
                        border: '4px solid white'
                      }} />
                      
                      <Card elevation={3} sx={{ 
                        p: 4,
                        position: 'relative',
                        overflow: 'visible',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '24px',
                          [exp.align]: { xs: '-8px', md: exp.align === 'left' ? '-8px' : '-8px' },
                          width: 0,
                          height: 0,
                          borderStyle: 'solid',
                          borderWidth: '8px 8px 8px 0',
                          borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
                          display: { xs: 'none', md: 'block' },
                          transform: exp.align === 'left' ? 'none' : 'rotate(180deg)'
                        }
                      }}>
                        <Typography variant="h4" gutterBottom>
                          {exp.title}
                        </Typography>
                        <Chip 
                          label={exp.period} 
                          color="primary" 
                          variant="outlined"
                          size="small"
                          sx={{ mb: 2 }}
                        />
                        <List dense sx={{ listStyleType: 'disc', pl: 2 }}>
                          {exp.responsibilities.map((item, i) => (
                            <ListItem key={i} sx={{ display: 'list-item', pl: 0 }}>
                              <ListItemText primary={item} />
                            </ListItem>
                          ))}
                        </List>
                      </Card>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Container>
          </Box>

          {/* Projects */}
          <Box id="projects" sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
              <motion.div initial="hidden" animate="visible" variants={slideUp}>
                <Typography variant="h2" align="center" gutterBottom>
                  Featured Projects
                </Typography>
                <Divider sx={{ 
                  width: 80, 
                  height: 4, 
                  bgcolor: 'secondary.main', 
                  mx: 'auto', 
                  mb: 6,
                  borderRadius: 2
                }} />
                
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/project1.jpg" // Add your project image
                        alt="Inventory Management Dashboard"
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" gutterBottom>
                          Inventory Management Dashboard
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {['React', 'MUI', 'Chart.js', 'Firebase'].map((tech) => (
                            <Chip 
                              key={tech} 
                              label={tech} 
                              color="primary" 
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                        <Typography variant="body1" paragraph>
                          A comprehensive inventory management system with real-time analytics, 
                          user authentication, and CRUD operations.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                          <Button 
                            variant="contained" 
                            color="primary"
                            href="#" // Add your live demo link
                            target="_blank"
                          >
                            Live Demo
                          </Button>
                          <Button 
                            variant="outlined" 
                            color="primary"
                            href="#" // Add your GitHub link
                            target="_blank"
                          >
                            View Code
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/project2.jpg" // Add your project image
                        alt="Portfolio Website"
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" gutterBottom>
                          Portfolio Website
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {['React', 'Styled-Components', 'Framer Motion'].map((tech) => (
                            <Chip 
                              key={tech} 
                              label={tech} 
                              color="primary" 
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                        <Typography variant="body1" paragraph>
                          A modern, responsive portfolio website with theme switching, 
                          animations, and contact form functionality.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                          <Button 
                            variant="contained" 
                            color="primary"
                            href="#" // Add your live demo link
                            target="_blank"
                          >
                            Live Demo
                          </Button>
                          <Button 
                            variant="outlined" 
                            color="primary"
                            href="#" // Add your GitHub link
                            target="_blank"
                          >
                            View Code
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </motion.div>
            </Container>
          </Box>

          {/* Education & Certifications */}
          <Box id="education" sx={{ py: 10, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
              <motion.div initial="hidden" animate="visible" variants={slideUp}>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h2" gutterBottom>
                      Education
                    </Typography>
                    <Divider sx={{ 
                      width: 80, 
                      height: 4, 
                      bgcolor: 'secondary.main', 
                      mb: 4,
                      borderRadius: 2
                    }} />
                    
                    <Card elevation={3}>
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                          <School sx={{ 
                            fontSize: 40, 
                            color: 'primary.main', 
                            mr: 2 
                          }} />
                          <Box>
                            <Typography variant="h4">
                              B.Tech in Computer Science
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                              ABC University, Delhi (2020–2024)
                            </Typography>
                          </Box>
                        </Box>
                        <Typography variant="body1" paragraph>
                          Graduated with honors in Computer Science and Engineering. 
                          Specialized in web development and human-computer interaction.
                        </Typography>
                        <Box sx={{ 
                          display: 'inline-block',
                          bgcolor: 'primary.light',
                          px: 2,
                          py: 1,
                          borderRadius: 1
                        }}>
                          <Typography variant="body1" color="primary">
                            CGPA: 8.2/10
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Typography variant="h2" gutterBottom>
                      Certifications
                    </Typography>
                    <Divider sx={{ 
                      width: 80, 
                      height: 4, 
                      bgcolor: 'secondary.main', 
                      mb: 4,
                      borderRadius: 2
                    }} />
                    
                    <Card elevation={3}>
                      <CardContent sx={{ p: 4 }}>
                        <List sx={{ width: '100%' }}>
                          {[
                            {
                              title: 'Advanced React and Redux',
                              issuer: 'Udemy',
                              year: '2023'
                            },
                            {
                              title: 'Frontend Development Specialization',
                              issuer: 'Coursera',
                              year: '2022'
                            },
                            {
                              title: 'JavaScript: The Advanced Concepts',
                              issuer: 'Zero To Mastery',
                              year: '2022'
                            },
                            {
                              title: 'Responsive Web Design',
                              issuer: 'freeCodeCamp',
                              year: '2021'
                            }
                          ].map((cert, index) => (
                            <React.Fragment key={index}>
                              <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 40 }}>
                                  <School color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                  primary={cert.title}
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                      >
                                        {cert.issuer}
                                      </Typography>
                                      {` — ${cert.year}`}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              {index < 3 && <Divider component="li" />}
                            </React.Fragment>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </motion.div>
            </Container>
          </Box>

          {/* Contact */}
          <Box id="contact" sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
              <motion.div initial="hidden" animate="visible" variants={slideUp}>
                <Typography variant="h2" align="center" gutterBottom>
                  Get In Touch
                </Typography>
                <Divider sx={{ 
                  width: 80, 
                  height: 4, 
                  bgcolor: 'secondary.main', 
                  mx: 'auto', 
                  mb: 6,
                  borderRadius: 2
                }} />
                
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                      Contact Information
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                      Feel free to reach out for collaborations or just a friendly hello. 
                      I'll try my best to get back to you!
                    </Typography>
                    
                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Email color="primary" sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle1">Email</Typography>
                          <Typography variant="body1" color="text.secondary">
                            jatin@email.com
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Work color="primary" sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle1">Location</Typography>
                          <Typography variant="body1" color="text.secondary">
                            Delhi, India
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    
                    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                      Follow Me
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <IconButton
                        color="primary"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener"
                        sx={{ 
                          bgcolor: 'primary.light',
                          '&:hover': { bgcolor: 'primary.light' }
                        }}
                      >
                        <GitHub />
                      </IconButton>
                      <IconButton
                        color="primary"
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener"
                        sx={{ 
                          bgcolor: 'primary.light',
                          '&:hover': { bgcolor: 'primary.light' }
                        }}
                      >
                        <LinkedIn />
                      </IconButton>
                      <IconButton
                        color="primary"
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener"
                        sx={{ 
                          bgcolor: 'primary.light',
                          '&:hover': { bgcolor: 'primary.light' }
                        }}
                      >
                        <Twitter />
                      </IconButton>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                      <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" gutterBottom>
                          Send Me a Message
                        </Typography>
                        <form onSubmit={handleSubmit}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            variant="outlined"
                            margin="normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            sx={{ mb: 2 }}
                          />
                          <TextField
                            fullWidth
                            label="Your Email"
                            variant="outlined"
                            margin="normal"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            sx={{ mb: 2 }}
                          />
                          <TextField
                            fullWidth
                            label="Your Message"
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            sx={{ mb: 3 }}
                          />
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                          >
                            Send Message
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </motion.div>
            </Container>
          </Box>
        </Box>

        {/* Footer */}
        <Box component="footer" sx={{ 
          py: 4, 
          bgcolor: 'primary.dark', 
          color: 'white',
          textAlign: 'center'
        }}>
          <Container maxWidth="lg">
            <Typography variant="h6" gutterBottom>
              Jatin Sharma
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Frontend Developer | React & MUI Specialist
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  onClick={() => scrollToSection(item.id)}
                  sx={{ fontWeight: 500 }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', mb: 3 }} />
            <Typography>
              © {new Date().getFullYear()} Jatin Sharma. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio; 