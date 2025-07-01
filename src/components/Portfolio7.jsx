import React, { useState, createContext, useContext } from 'react';
import { Button, TextField, Box, Container, Typography, IconButton, Chip, Grid } from '@mui/material';
import { styled, ThemeProvider } from 'styled-components';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

// ---------------------- THEMES ----------------------
const themes = {
  darkOrange: {
    background: '#1F2937',
    text: '#FFFFFF',
    accent: '#F97316',
    cardBg: '#111827',
    inputBg: '#374151',
  },
  purpleBlack: {
    background: '#0F0F1B',
    text: '#EDEDED',
    accent: '#A855F7',
    cardBg: '#1A1A2E',
    inputBg: '#2C2C40',
  },
  blueGradient: {
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    text: '#FFFFFF',
    accent: '#3B82F6',
    cardBg: '#1e3a5f',
    inputBg: '#374c69',
  },
  lightGrayBlue: {
    background: '#F3F4F6',
    text: '#1F2937',
    accent: '#2563EB',
    cardBg: '#FFFFFF',
    inputBg: '#E5E7EB',
  },
  funGradient: {
    background: 'linear-gradient(to right, #ff6ec4, #7873f5)',
    text: '#FFFFFF',
    accent: '#22D3EE',
    cardBg: 'rgba(255, 255, 255, 0.1)',
    inputBg: 'rgba(255,255,255,0.15)',
  },
};

// ---------------------- CONTEXT ----------------------
const ThemeCtx = createContext();
const useThemeMode = () => useContext(ThemeCtx);

// ---------------------- STYLED COMPONENTS ----------------------
const PageWrapper = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
`;

const Section = styled.section`
  padding: 4rem 1rem;
  text-align: center;
`;

const Card = styled.div`
  background: ${(props) => props.theme.cardBg};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  margin-top: 2rem;
`;

const Accent = styled.span`
  color: ${(props) => props.theme.accent};
`;

const Input = styled(TextField)`
  && {
    background-color: ${(props) => props.theme.inputBg};
    border-radius: 8px;
    input, textarea {
      color: ${(props) => props.theme.text};
    }
    label {
      color: ${(props) => props.theme.text};
    }
  }
`;

const ThemeSwitcher = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  display: flex;
  gap: 0.5rem;
`;

// ---------------------- COMPONENT ----------------------
export default function PortfolioPage() {
  const [themeKey, setThemeKey] = useState('darkOrange');
  const theme = themes[themeKey];

  return (
    <ThemeCtx.Provider value={{ themeKey, setThemeKey }}>
      <ThemeProvider theme={theme}>
        <PageWrapper>

          {/* Theme Switcher */}
          <ThemeSwitcher>
            {Object.keys(themes).map((key) => (
              <Button
                key={key}
                variant={themeKey === key ? 'contained' : 'outlined'}
                size="small"
                onClick={() => setThemeKey(key)}
                style={{ color: theme.accent, borderColor: theme.accent }}
              >
                {key}
              </Button>
            ))}
          </ThemeSwitcher>

          {/* Hero Section */}
          <Section>
            <Container maxWidth="lg">
              <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="h3" gutterBottom>
                    Hi, I'm <Accent>Hannah</Accent>
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    a Frontend <Accent>Developer</Accent>
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    I craft smooth, accessible, and beautiful user interfaces.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="contained" color="primary">Hire Me</Button>
                    <Button variant="outlined" color="inherit">Download CV</Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Profile"
                    style={{
                      borderRadius: '50%',
                      width: 250,
                      height: 250,
                      border: `6px solid ${theme.accent}`
                    }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Section>

          {/* About Section */}
          <Section style={{ background: theme.cardBg }}>
            <Container maxWidth="md">
              <Typography variant="h5" gutterBottom>
                About <Accent>Me</Accent>
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 700, margin: '0 auto' }}>
                I'm a passionate frontend developer focused on building responsive and accessible user interfaces using React, MUI, Tailwind, and design systems.
              </Typography>
            </Container>
          </Section>

          {/* Skills Section */}
          <Section>
            <Container maxWidth="md">
              <Typography variant="h5" gutterBottom>
                <Accent>Skills</Accent>
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                {['React', 'MUI', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Git', 'Figma'].map((skill) => (
                  <Chip key={skill} label={skill} style={{ backgroundColor: theme.accent, color: '#fff' }} />
                ))}
              </Box>
            </Container>
          </Section>

          {/* Work Experience Section */}
          <Section style={{ background: theme.cardBg }}>
            <Container maxWidth="md">
              <Typography variant="h5" gutterBottom>
                Work <Accent>Experience</Accent>
              </Typography>
              <Card>
                <Typography variant="h6">Frontend Developer – PixelTech</Typography>
                <Typography variant="body2">Jan 2023 – Present</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Developed responsive dashboards, improved performance by 30%, and worked closely with UX teams to bring designs to life.
                </Typography>
              </Card>
            </Container>
          </Section>

          {/* Projects Section */}
          <Section>
            <Container maxWidth="md">
              <Typography variant="h5" gutterBottom>
                <Accent>Projects</Accent>
              </Typography>
              <Card>
                <Typography variant="h6">Inventory Manager</Typography>
                <Typography variant="body2">Tech: React, MUI, Firebase</Typography>
                <Typography variant="body1">
                  A modern inventory system with real-time tracking, analytics, and role-based access.
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Button variant="outlined" size="small" sx={{ mr: 1 }}>Live Demo</Button>
                  <Button variant="outlined" size="small">GitHub</Button>
                </Box>
              </Card>
            </Container>
          </Section>

          {/* Education Section */}
          <Section style={{ background: theme.cardBg }}>
            <Container maxWidth="md">
              <Typography variant="h5" gutterBottom>
                <Accent>Education</Accent>
              </Typography>
              <Card>
                <Typography variant="h6">B.Sc. in Computer Science</Typography>
                <Typography variant="body2">Delhi University — 2020–2023</Typography>
              </Card>
            </Container>
          </Section>

          {/* Contact Section */}
          <Section>
            <Container maxWidth="sm">
              <Typography variant="h5" gutterBottom>
                Contact <Accent>Me</Accent>
              </Typography>
              <Card>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Input label="Full Name" variant="filled" fullWidth />
                  <Input label="Email" variant="filled" fullWidth />
                  <Input label="Phone Number" variant="filled" fullWidth />
                  <Input label="Your Message" variant="filled" fullWidth multiline rows={4} />
                  <Button variant="contained" color="primary">Send Message</Button>
                </Box>
              </Card>
            </Container>
          </Section>

          {/* Footer */}
          <Section style={{ background: theme.cardBg }}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              &copy; 2025 Hannah Portfolio. All Rights Reserved.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <IconButton><FaLinkedinIn color={theme.accent} /></IconButton>
              <IconButton><FaGithub color={theme.accent} /></IconButton>
              <IconButton><FaTwitter color={theme.accent} /></IconButton>
            </Box>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Terms &nbsp;•&nbsp; Privacy Policy
            </Typography>
          </Section>

        </PageWrapper>
      </ThemeProvider>
    </ThemeCtx.Provider>
  );
}
