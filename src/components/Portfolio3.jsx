// src/App.js
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActionArea, 
  Button, 
  IconButton, 
  Paper,
  useScrollTrigger,
  Fade
} from '@mui/material';
import { 
  ArrowUpward, 
  Menu, 
  GitHub, 
  LinkedIn, 
  Instagram, 
  MailOutline,
  Close
} from '@mui/icons-material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';

// Custom theme with playful colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#6C63FF',
    },
    secondary: {
      main: '#FF6584',
    },
    background: {
      default: '#f9f7fe',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

// Gradient animation for backgrounds
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Styled components
const GradientBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundSize: '200% 200%',
  animation: `${gradientAnimation} 8s ease infinite`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  color: 'white',
  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
}));

const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
    },
  },
}));

const AnimatedCardMedia = styled(CardMedia)({
  transition: 'transform 0.5s ease',
  height: 240,
});

const FloatingActionButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.1)',
  },
  transition: 'transform 0.3s ease',
}));

const projects = [
  {
    id: 1,
    title: 'E-commerce UI Design',
    description: 'Modern shopping experience with intuitive navigation',
    category: 'UI Design',
    likes: 124,
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly banking interface',
    category: 'App Design',
    likes: 98,
  },
  {
    id: 3,
    title: 'Travel Booking Platform',
    description: 'Seamless travel planning experience',
    category: 'Web Design',
    likes: 156,
  },
  {
    id: 4,
    title: 'Food Delivery Dashboard',
    description: 'Restaurant management dashboard',
    category: 'Dashboard',
    likes: 87,
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    description: 'Health and activity monitoring',
    category: 'App Design',
    likes: 203,
  },
  {
    id: 6,
    title: 'Music Streaming Service',
    description: 'Next-gen audio experience',
    category: 'UI Design',
    likes: 142,
  },
];

const skills = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'Illustration', level: 90 },
  { name: 'Animation', level: 85 },
  { name: 'Prototyping', level: 80 },
  { name: 'Frontend Dev', level: 75 },
];

// Scroll to top component
function ScrollTop({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fade in={trigger}>
      <div onClick={handleClick} role="presentation">
        {children}
      </div>
    </Fade>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        background: 'linear-gradient(to bottom, #f9f7fe, #f0edff)', 
        minHeight: '100vh',
        overflowX: 'hidden',
      }}>
        {/* Header/Navigation */}
        <Box component="header" sx={{ 
          py: 3, 
          position: 'sticky', 
          top: 0, 
          zIndex: 1000, 
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255,255,255,0.8)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h4" component="div" sx={{ 
                  fontWeight: 800, 
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}>
                  DesignFolio
                </Typography>
              </Grid>
              
              <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box sx={{ display: 'flex', gap: 4 }}>
                  {['Home', 'Work', 'About', 'Contact'].map((item) => (
                    <Button key={item} color="inherit" sx={{ 
                      fontWeight: 600,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '0%',
                        height: '2px',
                        backgroundColor: theme.palette.primary.main,
                        transition: 'width 0.3s ease',
                      },
                      '&:hover:after': {
                        width: '100%',
                      }
                    }}>
                      {item}
                    </Button>
                  ))}
                </Box>
              </Grid>
              
              <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
                <IconButton onClick={() => setMenuOpen(true)}>
                  <Menu />
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Hero Section */}
        <Box sx={{ py: 10 }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
                  Creative <Box component="span" sx={{ color: 'primary.main' }}>Design</Box> Solutions for Digital Products
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', color: 'text.secondary' }}>
                  I create beautiful, functional interfaces with a focus on user experience and modern design principles.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button variant="contained" color="primary" size="large" sx={{ 
                    borderRadius: 50, 
                    px: 4, 
                    py: 1.5,
                    fontWeight: 600,
                    boxShadow: `0 4px 20px ${theme.palette.primary.light}`,
                  }}>
                    View Projects
                  </Button>
                  <Button variant="outlined" color="primary" size="large" sx={{ 
                    borderRadius: 50, 
                    px: 4, 
                    py: 1.5,
                    fontWeight: 600,
                  }}>
                    Contact Me
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    width: '100%',
                    height: '100%',
                    borderRadius: theme.shape.borderRadius,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    zIndex: -1,
                  },
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -20,
                    right: -20,
                    width: '100%',
                    height: '100%',
                    borderRadius: theme.shape.borderRadius,
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, #ffa62b)`,
                    zIndex: -2,
                  }
                }}>
                  <Box component="img" 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                    alt="Design work" 
                    sx={{ 
                      width: '100%', 
                      borderRadius: theme.shape.borderRadius,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    }} 
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Projects Section */}
        <Box sx={{ py: 10, backgroundColor: 'rgba(255,255,255,0.6)' }}>
          <Container maxWidth="lg">
            <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 6 }}>
              Featured <Box component="span" sx={{ color: 'primary.main' }}>Projects</Box>
            </Typography>
            
            {/* Category Filters */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: 2,
              mb: 6,
            }}>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? 'contained' : 'outlined'}
                  color="primary"
                  onClick={() => setActiveFilter(category)}
                  sx={{
                    borderRadius: 50,
                    px: 3,
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  {category}
                </Button>
              ))}
            </Box>
            
            {/* Project Grid */}
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <AnimatedCard>
                    <CardActionArea>
                      <AnimatedCardMedia
                        image={`https://source.unsplash.com/random/600x400/?design,${project.id}`}
                        title={project.title}
                      />
                      <CardContent sx={{ position: 'relative' }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mt: 2,
                        }}>
                          <Box sx={{ 
                            backgroundColor: 'rgba(108, 99, 255, 0.1)', 
                            color: 'primary.main',
                            borderRadius: 50,
                            px: 2,
                            py: 0.5,
                            fontWeight: 600,
                            fontSize: '0.8rem',
                          }}>
                            {project.category}
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Box sx={{ 
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: theme.palette.secondary.main,
                            }} />
                            <Typography variant="body2">
                              {project.likes}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Skills Section */}
        <Box sx={{ py: 10 }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" component="h2" sx={{ mb: 4 }}>
                  My <Box component="span" sx={{ color: 'primary.main' }}>Skills</Box> & Expertise
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                  With over 5 years of experience in digital design, I've developed a versatile skill set that allows me to tackle any design challenge.
                </Typography>
                <GradientBox sx={{ mb: 4 }}>
                  <Typography variant="h3" component="h3" sx={{ mb: 2, color: 'white' }}>
                    Design Philosophy
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    I believe in creating designs that are not only visually stunning but also intuitive and accessible to all users. Every pixel has a purpose.
                  </Typography>
                </GradientBox>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ 
                  p: 4, 
                  borderRadius: theme.shape.borderRadius,
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(10px)',
                }}>
                  {skills.map((skill) => (
                    <Box key={skill.name} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1" fontWeight={600}>{skill.name}</Typography>
                        <Typography variant="body1" color="text.secondary">{skill.level}%</Typography>
                      </Box>
                      <Box sx={{ 
                        height: 10, 
                        width: '100%', 
                        backgroundColor: 'rgba(0,0,0,0.05)', 
                        borderRadius: 5,
                        overflow: 'hidden',
                      }}>
                        <Box sx={{ 
                          height: '100%', 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                          borderRadius: 5,
                          transition: 'width 1s ease',
                        }} />
                      </Box>
                    </Box>
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Footer */}
        <Box component="footer" sx={{ 
          py: 8, 
          backgroundColor: 'rgba(0,0,0,0.03)',
          borderTop: '1px solid rgba(0,0,0,0.05)',
        }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h4" component="div" sx={{ 
                  fontWeight: 800, 
                  mb: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  DesignFolio
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                  Creating beautiful digital experiences that make an impact.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  {[GitHub, LinkedIn, Instagram, MailOutline].map((Icon, index) => (
                    <IconButton key={index} sx={{ 
                      backgroundColor: 'rgba(0,0,0,0.05)',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                      }
                    }}>
                      <Icon />
                    </IconButton>
                  ))}
                </Box>
              </Grid>
              
              <Grid item xs={12} md={8}>
                <Grid container spacing={4}>
                  {['Services', 'Resources', 'Company'].map((category) => (
                    <Grid item xs={12} sm={4} key={category}>
                      <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 700 }}>
                        {category}
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item) => (
                          <Button 
                            key={item} 
                            color="inherit" 
                            sx={{ 
                              justifyContent: 'flex-start',
                              textTransform: 'none',
                              fontWeight: 500,
                              color: 'text.secondary',
                              '&:hover': {
                                color: 'primary.main',
                              }
                            }}
                          >
                            {item}
                          </Button>
                        ))}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            
            <Box sx={{ 
              mt: 8, 
              pt: 4, 
              borderTop: '1px solid rgba(0,0,0,0.05)',
              textAlign: 'center',
              color: 'text.secondary',
            }}>
              <Typography variant="body2">
                © {new Date().getFullYear()} DesignFolio. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Scroll to top button */}
        <ScrollTop>
          <FloatingActionButton size="medium" aria-label="scroll back to top">
            <ArrowUpward />
          </FloatingActionButton>
        </ScrollTop>

        {/* Mobile Menu */}
        {menuOpen && (
          <Box sx={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(255,255,255,0.95)',
            zIndex: 1100,
            display: 'flex',
            flexDirection: 'column',
            p: 4,
          }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'flex-end',
              mb: 6,
            }}>
              <IconButton onClick={() => setMenuOpen(false)}>
                <Close />
              </IconButton>
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              flex: 1,
            }}>
              {['Home', 'Work', 'About', 'Contact'].map((item) => (
                <Button 
                  key={item} 
                  size="large" 
                  sx={{ 
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;