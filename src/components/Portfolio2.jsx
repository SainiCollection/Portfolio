import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
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
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardMedia,
  Toolbar,
  Drawer
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
  Contacts,
  Close
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Unique color theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#6C63FF', // Vibrant purple
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FF6584', // Pink accent
    },
    background: {
      default: '#FAFAFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D3748',
      secondary: '#718096',
    },
  },
  typography: {
    fontFamily: '"Manrope", "Inter", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '4rem',
      lineHeight: 1.2,
      letterSpacing: '-0.05em',
    },
    h2: {
      fontWeight: 800,
      fontSize: '3rem',
      lineHeight: 1.3,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 28px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          '&:hover': {
            transform: 'translateY(-2px)',
          },
          transition: 'transform 0.2s',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(0,0,0,0.05)',
          boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 30px rgba(0,0,0,0.08)',
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
    console.log({ name, email, message });
    alert('Thank you for your message! I will get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  const navItems = [
    { name: 'Home', icon: <Home />, id: 'home' },
    { name: 'About', icon: <Info />, id: 'about' },
    { name: 'Skills', icon: <Build />, id: 'skills' },
    { name: 'Work', icon: <BusinessCenter />, id: 'work' },
    { name: 'Projects', icon: <Code />, id: 'projects' },
    { name: 'Contact', icon: <Contacts />, id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* Navigation */}
        <AppBar 
          position="fixed" 
          sx={{ 
            bgcolor: 'background.paper', 
            color: 'text.primary', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
            borderBottom: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
                JS
              </Typography>
              
              {/* Replace Hidden mdDown with Box component */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    color="inherit"
                    onClick={() => scrollToSection(item.id)}
                    sx={{ fontWeight: 600, color: 'text.primary' }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
              
              {/* Replace Hidden mdUp with Box component */}
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ color: 'text.primary' }}
                >
                  <Menu />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            sx: {
              width: '280px',
              bgcolor: 'background.paper',
              p: 2,
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            <IconButton onClick={handleDrawerToggle}>
              <Close />
            </IconButton>
          </Box>
          <List sx={{ mt: 2 }}>
            {navItems.map((item) => (
              <ListItem 
                button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  '&:hover': {
                    bgcolor: 'primary.light',
                    color: 'primary.main',
                  }
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{ fontWeight: 600 }} 
                />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>

          {/* Hero Section */}
          <Box id="home" sx={{ 
            py: 15,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '100%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, rgba(108,99,255,0) 70%)',
              zIndex: 0,
            }
          }}>
            <Container maxWidth="lg">
              <Grid container alignItems="center" spacing={6}>
                <Grid item xs={12} md={6}>
                  <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                    <Typography 
                      variant="h1" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 800,
                        background: 'linear-gradient(90deg, #6C63FF 0%, #FF6584 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block'
                      }}
                    >
                      Jatin Sharma
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                      Frontend Developer & UI Specialist
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, maxWidth: '90%', fontSize: '1.2rem' }}>
                      I create beautiful, functional digital experiences with modern web technologies.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<Download />}
                        sx={{ color: 'white' }}
                      >
                        Download CV
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        onClick={() => scrollToSection('contact')}
                        sx={{ borderWidth: '2px', '&:hover': { borderWidth: '2px' } }}
                      >
                        Let's Talk
                      </Button>
                    </Box>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
                  >
                    <Box
                      sx={{
                        width: 320,
                        height: 320,
                        borderRadius: '24px',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(108,99,255,0.3)',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(135deg, rgba(108,99,255,0.8) 0%, rgba(255,101,132,0.6) 100%)',
                          zIndex: 1,
                        }
                      }}
                    >
                      <Avatar
                        alt="Jatin Sharma"
                        src="/profile.jpg"
                        sx={{ 
                          width: '100%', 
                          height: '100%', 
                          fontSize: '5rem',
                          position: 'relative',
                          zIndex: 2
                        }}
                      >
                        <Person sx={{ fontSize: 'inherit' }} />
                      </Avatar>
                    </Box>
                    <Box 
                      component={motion.div}
                      animate={{
                        rotate: 360,
                        transition: {
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear'
                        }
                      }}
                      sx={{
                        position: 'absolute',
                        top: '-50px',
                        left: '-50px',
                        width: '420px',
                        height: '420px',
                        borderRadius: '50%',
                        border: '2px dashed rgba(108,99,255,0.3)',
                        zIndex: 0,
                      }}
                    />
                  </motion.div>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* About Me */}
          <Box id="about" sx={{ py: 10, bgcolor: 'background.paper', position: 'relative' }}>
            <Container maxWidth="lg">
              <motion.div initial="hidden" animate="visible" variants={slideUp}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                  <Typography variant="h2" gutterBottom>
                    About Me
                  </Typography>
                  <Divider sx={{ 
                    width: 80, 
                    height: 4, 
                    bgcolor: 'secondary.main', 
                    mx: 'auto',
                    borderRadius: 2
                  }} />
                </Box>
                
                <Grid container spacing={6} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      p: 4,
                      bgcolor: 'background.default',
                      borderRadius: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                        Hello, I'm Jatin
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                        A passionate frontend developer with over 2 years of experience creating 
                        modern web applications with React, Material-UI, and other cutting-edge technologies.
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                        I specialize in building responsive, accessible, and performant user interfaces 
                        that deliver exceptional user experiences.
                      </Typography>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            bgcolor: 'primary.light',
                            p: 2,
                            borderRadius: 2
                          }}>
                            <Work color="primary" sx={{ mr: 1 }} />
                            <Typography>Delhi, India</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            bgcolor: 'primary.light',
                            p: 2,
                            borderRadius: 2
                          }}>
                            <Email color="primary" sx={{ mr: 1 }} />
                            <Typography>jatin@email.com</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Paper elevation={0} sx={{ 
                      p: 4, 
                      bgcolor: 'background.default',
                      borderRadius: 4,
                      height: '100%'
                    }}>
                      <Typography variant="h5" color="text.secondary" gutterBottom>
                        My Skills
                      </Typography>
                      <Box sx={{ mb: 4 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Frontend Development
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3 }}>
                          {['React', 'Material-UI', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'].map((skill) => (
                            <Chip 
                              key={skill} 
                              label={skill} 
                              color="primary" 
                              variant="filled"
                              sx={{ 
                                borderRadius: 1, 
                                fontWeight: 600,
                                bgcolor: 'primary.light',
                                color: 'primary.main'
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                      
                      <Box sx={{ mb: 4 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Tools & Platforms
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                          {['VS Code', 'Figma', 'Git', 'GitHub', 'Firebase', 'Vercel'].map((tool) => (
                            <Chip 
                              key={tool} 
                              label={tool} 
                              color="secondary" 
                              variant="filled"
                              sx={{ 
                                borderRadius: 1, 
                                fontWeight: 600,
                                bgcolor: 'secondary.light',
                                color: 'secondary.main'
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </motion.div>
            </Container>
          </Box>

          {/* Skills */}
          <Box id="skills" sx={{ py: 10, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
              <motion.div initial="hidden" animate="visible" variants={slideUp}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                  <Typography variant="h2" gutterBottom>
                    My Expertise
                  </Typography>
                  <Divider sx={{ 
                    width: 80, 
                    height: 4, 
                    bgcolor: 'secondary.main', 
                    mx: 'auto',
                    borderRadius: 2
                  }} />
                </Box>
                
                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}>
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                      <Card>
                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                          <Box sx={{ 
                            width: 80, 
                            height: 80, 
                            bgcolor: 'primary.light', 
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3
                          }}>
                            <Code sx={{ fontSize: 36, color: 'primary.main' }} />
                          </Box>
                          <Typography variant="h4" gutterBottom>
                            Frontend Development
                          </Typography>
                          <Typography variant="body1" color="text.secondary" paragraph>
                            Building responsive and interactive user interfaces with React, Material-UI, and modern CSS.
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                      <Card>
                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                          <Box sx={{ 
                            width: 80, 
                            height: 80, 
                            bgcolor: 'secondary.light', 
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3
                          }}>
                            <DesignServices sx={{ fontSize: 36, color: 'secondary.main' }} />
                          </Box>
                          <Typography variant="h4" gutterBottom>
                            UI/UX Design
                          </Typography>
                          <Typography variant="body1" color="text.secondary" paragraph>
                            Creating beautiful, intuitive interfaces with attention to detail and user experience.
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                      <Card>
                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                          <Box sx={{ 
                            width: 80, 
                            height: 80, 
                            bgcolor: 'primary.light', 
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3
                          }}>
                            <Build sx={{ fontSize: 36, color: 'primary.main' }} />
                          </Box>
                          <Typography variant="h4" gutterBottom>
                            Problem Solving
                          </Typography>
                          <Typography variant="body1" color="text.secondary" paragraph>
                            Analyzing complex problems and implementing efficient, scalable solutions.
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
            </Container>
          </Box>

          {/* Work Experience */}
          <Box id="work" sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
              <motion.div initial="hidden" animate="visible" variants={slideUp}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                  <Typography variant="h2" gutterBottom>
                    Work Experience
                  </Typography>
                  <Divider sx={{ 
                    width: 80, 
                    height: 4, 
                    bgcolor: 'secondary.main', 
                    mx: 'auto',
                    borderRadius: 2
                  }} />
                </Box>
                
                <Box sx={{ 
                  position: 'relative',
                  maxWidth: 800,
                  mx: 'auto',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: { xs: 16, sm: 24 },
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    bgcolor: 'divider',
                  }
                }}>
                  {[
                    {
                      title: 'Frontend Developer – Freelance',
                      period: 'Jan 2023 – Present',
                      responsibilities: [
                        'Developed 10+ responsive React applications for diverse clients',
                        'Transformed design mockups into functional, pixel-perfect UIs',
                        'Implemented state management solutions using Context API and Redux',
                        'Optimized applications for performance and SEO best practices'
                      ]
                    },
                    {
                      title: 'Frontend Intern – XYZ Tech',
                      period: 'Jul 2022 – Dec 2022',
                      responsibilities: [
                        'Contributed to internal admin portal using Material UI',
                        'Collaborated with designers to implement UI components',
                        'Participated in code reviews and agile development process',
                        'Fixed bugs and improved existing features'
                      ]
                    }
                  ].map((exp, index) => (
                    <Box
                      key={index}
                      sx={{ 
                        position: 'relative',
                        pl: { xs: 6, sm: 8 },
                        mb: 6,
                      }}
                    >
                      <Box sx={{ 
                        position: 'absolute',
                        left: { xs: 8, sm: 16 },
                        top: 0,
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        bgcolor: 'secondary.main',
                        zIndex: 1,
                        border: '4px solid white',
                        transform: 'translateX(-50%)'
                      }} />
                      
                      <Card elevation={0} sx={{ 
                        p: 4,
                        bgcolor: 'background.default',
                        position: 'relative',
                        overflow: 'visible',
                      }}>
                        <Typography variant="h4" gutterBottom>
                          {exp.title}
                        </Typography>
                        <Chip 
                          label={exp.period} 
                          color="primary" 
                          variant="outlined"
                          size="small"
                          sx={{ mb: 3, fontWeight: 600 }}
                        />
                        <List dense sx={{ listStyleType: 'disc', pl: 2 }}>
                          {exp.responsibilities.map((item, i) => (
                            <ListItem key={i} sx={{ display: 'list-item', pl: 0, mb: 1 }}>
                              <ListItemText 
                                primary={item} 
                                primaryTypographyProps={{ variant: 'body1' }}
                              />
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
          <Box id="projects" sx={{ py: 10, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
              <motion.div initial="hidden" animate="visible" variants={slideUp}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                  <Typography variant="h2" gutterBottom>
                    Featured Projects
                  </Typography>
                  <Divider sx={{ 
                    width: 80, 
                    height: 4, 
                    bgcolor: 'secondary.main', 
                    mx: 'auto',
                    borderRadius: 2
                  }} />
                </Box>
                
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="240"
                          image="/project1.jpg"
                          alt="Inventory Management Dashboard"
                          sx={{ objectFit: 'cover' }}
                        />
                        <CardContent sx={{ p: 4 }}>
                          <Typography variant="h4" gutterBottom>
                            Inventory Management
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                            {['React', 'MUI', 'Chart.js', 'Firebase'].map((tech) => (
                              <Chip 
                                key={tech} 
                                label={tech} 
                                color="primary" 
                                size="small"
                                variant="outlined"
                                sx={{ fontWeight: 600 }}
                              />
                            ))}
                          </Box>
                          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                            A comprehensive inventory management system with real-time analytics, 
                            user authentication, and CRUD operations.
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button 
                              variant="contained" 
                              color="primary"
                              href="#" 
                              target="_blank"
                              sx={{ flex: 1 }}
                            >
                              Live Demo
                            </Button>
                            <Button 
                              variant="outlined" 
                              color="primary"
                              href="#" 
                              target="_blank"
                              sx={{ flex: 1 }}
                            >
                              View Code
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="240"
                          image="/project2.jpg"
                          alt="Portfolio Website"
                          sx={{ objectFit: 'cover' }}
                        />
                        <CardContent sx={{ p: 4 }}>
                          <Typography variant="h4" gutterBottom>
                            Modern Portfolio
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                            {['React', 'Styled-Components', 'Framer Motion'].map((tech) => (
                              <Chip 
                                key={tech} 
                                label={tech} 
                                color="primary" 
                                size="small"
                                variant="outlined"
                                sx={{ fontWeight: 600 }}
                              />
                            ))}
                          </Box>
                          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                            A modern, responsive portfolio website with animations, 
                            theme switching, and contact form functionality.
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button 
                              variant="contained" 
                              color="primary"
                              href="#" 
                              target="_blank"
                              sx={{ flex: 1 }}
                            >
                              Live Demo
                            </Button>
                            <Button 
                              variant="outlined" 
                              color="primary"
                              href="#" 
                              target="_blank"
                              sx={{ flex: 1 }}
                            >
                              View Code
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
            </Container>
          </Box>

          {/* Contact */}
          <Box id="contact" sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
              <motion.div initial="hidden" animate="visible" variants={slideUp}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                  <Typography variant="h2" gutterBottom>
                    Get In Touch
                  </Typography>
                  <Divider sx={{ 
                    width: 80, 
                    height: 4, 
                    bgcolor: 'secondary.main', 
                    mx: 'auto',
                    borderRadius: 2
                  }} />
                </Box>
                
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h4" gutterBottom>
                        Let's work together
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                        Have a project in mind or want to discuss potential opportunities? 
                        Feel free to reach out - I'd love to hear from you!
                      </Typography>
                      
                      <Box sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Email color="primary" sx={{ mr: 2, fontSize: 32 }} />
                          <Box>
                            <Typography variant="subtitle1">Email</Typography>
                            <Typography variant="body1" color="text.secondary">
                              jatin@email.com
                            </Typography>
                          </Box>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Work color="primary" sx={{ mr: 2, fontSize: 32 }} />
                          <Box>
                            <Typography variant="subtitle1">Location</Typography>
                            <Typography variant="body1" color="text.secondary">
                              Delhi, India
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      
                      <Box>
                        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                          Connect with me
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
                      </Box>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Card elevation={0} sx={{ bgcolor: 'background.default' }}>
                      <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" gutterBottom>
                          Send a message
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
                            sx={{ mb: 3 }}
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
                            sx={{ mb: 3 }}
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
          py: 6, 
          bgcolor: 'primary.dark', 
          color: 'white',
        }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
                  Jatin Sharma
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Frontend Developer & UI Specialist creating modern web experiences.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton
                    color="inherit"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener"
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener"
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener"
                  >
                    <Twitter />
                  </IconButton>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Quick Links
                </Typography>
                <List dense sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {navItems.map((item) => (
                    <ListItem 
                      key={item.id} 
                      sx={{ 
                        width: 'auto', 
                        p: 0,
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      <Button
                        color="inherit"
                        onClick={() => scrollToSection(item.id)}
                        sx={{ 
                          fontWeight: 500,
                          color: 'white',
                          textTransform: 'none',
                          p: 0
                        }}
                      >
                        {item.name}
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
            
            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 4 }} />
            
            <Typography align="center">
              © {new Date().getFullYear()} Jatin Sharma. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;