import React from 'react';
import { Box, Grid, Typography, Paper, Divider, Link, List, ListItem, ListItemText, Chip } from '@mui/material';
import { LinkedIn, GitHub, Twitter, Email, Phone } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FloatingCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '20px',
  transformStyle: 'preserve-3d',
  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
  boxShadow: '0 30px 50px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
    boxShadow: '0 40px 70px rgba(0, 0, 0, 0.3)'
  },
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: '30px',
    background: 'linear-gradient(45deg, #ff0080, #00ffcc, #ff8c00)',
    zIndex: -1,
    transform: 'translateZ(-30px)',
    filter: 'blur(20px)'
  }
}));

const SectionHeader = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  display: 'inline-block'
}));

const Portfolio3D = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: 4,
      perspective: '1000px'
    }}>
      <FloatingCard elevation={24}>
        <Grid container spacing={4}>
          
          {/* Header Section */}
          <Grid item xs={12} textAlign="center">
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, letterSpacing: 2 }}>
              POHON ROY
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
              <Chip icon={<Phone />} label="+91 9876543210" />
              <Chip icon={<Email />} label="pohonroy@example.com" />
            </Box>
            <Typography variant="h6" gutterBottom>
              Kolkata, West Bengal, India
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
              <Link href="#"><LinkedIn sx={{ fontSize: 40 }} /></Link>
              <Link href="#"><GitHub sx={{ fontSize: 40 }} /></Link>
              <Link href="#"><Twitter sx={{ fontSize: 40 }} /></Link>
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>
          
          {/* Summary */}
          <Grid item xs={12}>
            <SectionHeader variant="h4">SUMMARY</SectionHeader>
            <Typography>
              Full-stack developer with 5+ years of experience specializing in React, Node.js, and cloud architecture. 
              Passionate about creating responsive web applications with modern UI/UX design principles. 
              Proven track record of delivering scalable solutions for fintech and e-commerce industries.
            </Typography>
          </Grid>
          
          {/* Skills */}
          <Grid item xs={12} md={6}>
            <SectionHeader variant="h4">SKILLS</SectionHeader>
            <Grid container spacing={1}>
              {['React', 'Node.js', 'MongoDB', 'Express', 'Material-UI', 'AWS', 'Docker', 
                'GraphQL', 'TypeScript', 'Python', 'CI/CD', 'Jest'].map((skill) => (
                <Grid item key={skill}>
                  <Chip label={skill} color="primary" variant="outlined" />
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          {/* Languages */}
          <Grid item xs={12} md={6}>
            <SectionHeader variant="h4">LANGUAGES</SectionHeader>
            <List>
              {[
                { language: 'English', level: 'Fluent' },
                { language: 'Hindi', level: 'Native' },
                { language: 'Bengali', level: 'Native' },
                { language: 'Spanish', level: 'Intermediate' }
              ].map((lang, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemText 
                    primary={lang.language} 
                    secondary={lang.level} 
                    secondaryTypographyProps={{ color: 'text.secondary' }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          
          {/* Experience */}
          <Grid item xs={12}>
            <SectionHeader variant="h4">EXPERIENCE</SectionHeader>
            <Box>
              <Typography variant="h6" gutterBottom>
                Senior Full-stack Developer | Tech Innovations Ltd
              </Typography>
              <Typography color="text.secondary" gutterBottom>Jan 2021 - Present | Kolkata</Typography>
              <Typography>
                - Led development of 3 React applications serving 50k+ monthly users<br />
                - Reduced API response time by 75% through query optimization<br />
                - Mentored 5 junior developers in React best practices
              </Typography>
            </Box>
            
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Full-stack Developer | Digital Solutions Inc
              </Typography>
              <Typography color="text.secondary" gutterBottom>Mar 2019 - Dec 2020 | Mumbai</Typography>
              <Typography>
                - Developed e-commerce platform handling ₹2Cr+ monthly transactions<br />
                - Implemented JWT authentication for 100k+ users<br />
                - Integrated payment gateways (Razorpay, Stripe)
              </Typography>
            </Box>
          </Grid>
          
          {/* Education */}
          <Grid item xs={12} md={6}>
            <SectionHeader variant="h4">EDUCATION</SectionHeader>
            <Box>
              <Typography variant="h6">B.Tech in Computer Science</Typography>
              <Typography color="text.secondary">IIT Kharagpur</Typography>
              <Typography color="text.secondary">2015 - 2019 | CGPA: 9.2/10</Typography>
            </Box>
            
            <Box mt={2}>
              <Typography variant="h6">Higher Secondary</Typography>
              <Typography color="text.secondary">St. Xavier's College</Typography>
              <Typography color="text.secondary">2013 - 2015 | 95.4%</Typography>
            </Box>
          </Grid>
          
          {/* Certificates */}
          <Grid item xs={12} md={6}>
            <SectionHeader variant="h4">CERTIFICATES</SectionHeader>
            <List dense>
              {[
                'AWS Certified Solutions Architect - Associate',
                'Google Cloud Professional Developer',
                'Microsoft Certified: Azure Developer Associate',
                'Docker Certified Associate'
              ].map((cert, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemText primary={cert} />
                </ListItem>
              ))}
            </List>
          </Grid>
          
          {/* Projects */}
          <Grid item xs={12}>
            <SectionHeader variant="h4">PROJECTS</SectionHeader>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>HealthTrack Pro</Typography>
                  <Typography>
                    AI-powered health monitoring system with React frontend and Node.js microservices
                  </Typography>
                  <Chip label="React" size="small" sx={{ mt: 1 }} />
                  <Chip label="TensorFlow.js" size="small" sx={{ mt: 1, ml: 1 }} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>FinEdge Analytics</Typography>
                  <Typography>
                    Real-time financial dashboard for stock market analysis with WebSocket integration
                  </Typography>
                  <Chip label="WebSockets" size="small" sx={{ mt: 1 }} />
                  <Chip label="D3.js" size="small" sx={{ mt: 1, ml: 1 }} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          
          {/* Achievements & Awards */}
          <Grid item xs={12} md={6}>
            <SectionHeader variant="h4">ACHIEVEMENTS</SectionHeader>
            <List>
              {[
                '1st Prize - National Hackathon 2020',
                'Google Code-in Finalist 2018',
                'Open Source Contributor of the Month - GitHub 2021',
                'Microsoft MVP 2022'
              ].map((item, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
          
          {/* Interests */}
          <Grid item xs={12} md={6}>
            <SectionHeader variant="h4">INTERESTS</SectionHeader>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['Photography', 'Traveling', 'Robotics', 'Blockchain', 'Open Source', 
                'AI Research', 'Chess'].map((interest) => (
                <Chip key={interest} label={interest} color="secondary" />
              ))}
            </Box>
          </Grid>
        </Grid>
      </FloatingCard>
    </Box>
  );
};

export default Portfolio3D;