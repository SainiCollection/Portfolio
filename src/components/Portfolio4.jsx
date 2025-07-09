import React from 'react';
import { Box, Grid, Typography, Paper, Divider, Link, List, ListItem, ListItemText, Chip } from '@mui/material';
import { LinkedIn, GitHub, Twitter, Email, Phone } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FloatingCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'perspective(1000px) translateZ(30px)',
    boxShadow: '0 35px 60px -10px rgba(0, 0, 0, 0.3)'
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)',
    zIndex: -1,
    transform: 'translateZ(-20px)',
    borderRadius: '16px'
  }
}));

const SectionHeader = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  fontWeight: 600,
  color: theme.palette.primary.dark
}));

const Portfolio4D = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f0f4ff 0%, #f8f0ff 100%)',
      padding: 4,
      perspective: '1000px'
    }}>
      <FloatingCard elevation={8}>
        <Grid container spacing={4}>
          
          {/* Header Section */}
          <Grid item xs={12} textAlign="center">
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, letterSpacing: 1.5 }}>
              POHON ROY
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
              <Chip icon={<Phone />} label="+91 9876543210" variant="outlined" />
              <Chip icon={<Email />} label="pohonroy@example.com" variant="outlined" />
            </Box>
            <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
              Kolkata, West Bengal, India
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
              <Link href="#"><LinkedIn sx={{ fontSize: 32, color: '#0A66C2' }} /></Link>
              <Link href="#"><GitHub sx={{ fontSize: 32, color: '#181717' }} /></Link>
              <Link href="#"><Twitter sx={{ fontSize: 32, color: '#1DA1F2' }} /></Link>
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <Divider sx={{ my: 2, bgcolor: 'divider' }} />
          </Grid>
          
          {/* Summary */}
          <Grid item xs={12}>
            <SectionHeader variant="h5">PROFESSIONAL SUMMARY</SectionHeader>
            <Typography variant="body1" paragraph>
              Full-stack developer with 5+ years of experience specializing in React, Node.js, and cloud architecture. 
              Passionate about creating responsive web applications with modern UI/UX design principles. 
              Proven track record of delivering scalable solutions for fintech and e-commerce industries.
            </Typography>
          </Grid>
          
          {/* Skills */}
          <Grid item xs={12} md={6}>
            <SectionHeader variant="h5">TECHNICAL SKILLS</SectionHeader>
            <Grid container spacing={1} sx={{ mt: 1 }}>
              {['React', 'Node.js', 'MongoDB', 'Express', 'Material-UI', 'AWS', 'Docker', 
                'GraphQL', 'TypeScript', 'Python', 'CI/CD', 'Jest'].map((skill) => (
                <Grid item key={skill}>
                  <Chip label={skill} color="primary" variant="outlined" sx={{ borderRadius: 1 }} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          {/* Languages */}
          <Grid item xs={12} md={6}>
            <SectionHeader variant="h5">LANGUAGES</SectionHeader>
            <List dense sx={{ py: 0 }}>
              {[
                { language: 'English', level: 'Fluent' },
                { language: 'Hindi', level: 'Native' },
                { language: 'Bengali', level: 'Native' },
                { language: 'Spanish', level: 'Intermediate' }
              ].map((lang, index) => (
                <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                  <ListItemText 
                    primary={lang.language} 
                    secondary={lang.level} 
                    secondaryTypographyProps={{ color: 'text.secondary', variant: 'body2' }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          
          {/* Experience */}
          <Grid item xs={12}>
            <SectionHeader variant="h5">WORK EXPERIENCE</SectionHeader>
            <Box mb={3}>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                Senior Full-stack Developer | Tech Innovations Ltd
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>Jan 2021 - Present | Kolkata</Typography>
              <Typography variant="body2" component="div" sx={{ pl: 1 }}>
                <ul style={{ marginTop: 0, paddingLeft: 20 }}>
                  <li>Led development of 3 React applications serving 50k+ monthly users</li>
                  <li>Reduced API response time by 75% through query optimization</li>
                  <li>Mentored 5 junior developers in React best practices</li>
                </ul>
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                Full-stack Developer | Digital Solutions Inc
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>Mar 2019 - Dec 2020 | Mumbai</Typography>
              <Typography variant="body2" component="div" sx={{ pl: 1 }}>
                <ul style={{ marginTop: 0, paddingLeft: 20 }}>
                  <li>Developed e-commerce platform handling ₹2Cr+ monthly transactions</li>
                  <li>Implemented JWT authentication for 100k+ users</li>
                  <li>Integrated payment gateways (Razorpay, Stripe)</li>
                </ul>
              </Typography>
            </Box>
          </Grid>
          
          {/* Education */}
          <Grid item xs={12} md={6}>
            <SectionHeader variant="h5">EDUCATION</SectionHeader>
            <Box mb={2}>
              <Typography variant="h6" fontWeight={600}>B.Tech in Computer Science</Typography>
              <Typography variant="subtitle2" color="text.secondary">IIT Kharagpur</Typography>
              <Typography variant="body2" color="text.secondary">2015 - 2019 | CGPA: 9.2/10</Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" fontWeight={600}>Higher Secondary</Typography>
              <Typography variant="subtitle2" color="text.secondary">St. Xavier's College</Typography>
              <Typography variant="body2" color="text.secondary">2013 - 2015 | 95.4%</Typography>
            </Box>
          </Grid>
          
          {/* Certificates */}
          <Grid item xs={12} md={6}>
            <SectionHeader variant="h5">CERTIFICATIONS</SectionHeader>
            <List dense sx={{ py: 0 }}>
              {[
                'AWS Certified Solutions Architect - Associate',
                'Google Cloud Professional Developer',
                'Microsoft Certified: Azure Developer Associate',
                'Docker Certified Associate'
              ].map((cert, index) => (
                <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                  <ListItemText 
                    primary={cert} 
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          
          {/* Projects */}
          <Grid item xs={12}>
            <SectionHeader variant="h5">KEY PROJECTS</SectionHeader>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2, height: '100%', borderRadius: 2, bgcolor: 'background.paper' }}>
                  <Typography variant="h6" gutterBottom fontWeight={600}>HealthTrack Pro</Typography>
                  <Typography variant="body2">
                    AI-powered health monitoring system with React frontend and Node.js microservices
                  </Typography>
                  <Box sx={{ mt: 1.5 }}>
                    <Chip label="React" size="small" sx={{ mr: 0.5 }} />
                    <Chip label="TensorFlow.js" size="small" />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2, height: '100%', borderRadius: 2, bgcolor: 'background.paper' }}>
                  <Typography variant="h6" gutterBottom fontWeight={600}>FinEdge Analytics</Typography>
                  <Typography variant="body2">
                    Real-time financial dashboard for stock market analysis with WebSocket integration
                  </Typography>
                  <Box sx={{ mt: 1.5 }}>
                    <Chip label="WebSockets" size="small" sx={{ mr: 0.5 }} />
                    <Chip label="D3.js" size="small" />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          
          {/* Achievements */}
          <Grid item xs={12} md={6}>
            <SectionHeader variant="h5">ACHIEVEMENTS</SectionHeader>
            <List dense sx={{ py: 0 }}>
              {[
                '1st Prize - National Hackathon 2020',
                'Google Code-in Finalist 2018',
                'Open Source Contributor of the Month - GitHub 2021',
                'Microsoft MVP 2022'
              ].map((item, index) => (
                <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                  <ListItemText 
                    primary={item} 
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          
          {/* Interests */}
          <Grid item xs={12} md={6}>
            <SectionHeader variant="h5">INTERESTS</SectionHeader>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['Photography', 'Traveling', 'Robotics', 'Blockchain', 'Open Source', 
                'AI Research', 'Chess'].map((interest) => (
                <Chip 
                  key={interest} 
                  label={interest} 
                  size="small"
                  sx={{ borderRadius: 1 }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </FloatingCard>
    </Box>
  );
};

export default Portfolio4D;