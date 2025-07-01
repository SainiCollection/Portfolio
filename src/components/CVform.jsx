import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Box, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  IconButton, 
  MenuItem, 
  Select,
  FormControl,
  InputLabel,
  Avatar,
  Divider,
  Chip,
  FormControlLabel,
  Switch
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  CloudUpload as CloudUploadIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Language as LanguageIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  CardMembership as CardMembershipIcon,
  Star as StarIcon,
  Translate as TranslateIcon,
  Favorite as FavoriteIcon,
  EmojiEvents as EmojiEventsIcon
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a modern theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
      contrastText: '#fff'
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
      '"Inter"',
      '"Helvetica"',
      '"Arial"',
      'sans-serif'
    ].join(','),
    h4: {
      fontWeight: 700,
      color: '#2c3e50',
    },
    h5: {
      fontWeight: 600,
      color: '#2c3e50',
      fontSize: '1.2rem',
    },
    subtitle1: {
      color: '#7f8c8d',
      fontSize: '0.9rem',
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          marginBottom: '12px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          '&:before': {
            display: 'none',
          },
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 16px',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          }
        }
      }
    }
  },
});

const CVForm = () => {
  // Main form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    country: '',
    socialLinks: [{ platform: 'LinkedIn', url: '' }],
    summary: '',
    skills: ['JavaScript', 'React'],
    experience: [{
      position: 'Frontend Developer',
      company: 'Tech Innovations',
      startDate: '2020-01',
      endDate: '2023-12',
      description: 'Developed responsive web applications using React and MUI',
    }],
    education: [{
      degree: 'B.S. Computer Science',
      institution: 'University of Technology',
      year: '2016-2020',
    }],
    projects: [{
      title: 'E-commerce Dashboard',
      description: 'Built a comprehensive dashboard for online retailers',
      technologies: 'React, Node.js, MongoDB',
    }],
    certificates: ['AWS Certified Developer'],
    achievements: ['Employee of the Year 2022'],
    languages: [{ language: 'English', proficiency: 'Native' }],
    interests: ['Photography', 'Hiking'],
    awards: ['Best Design Award 2021'],
  });
  
  const [photo, setPhoto] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Handle input changes
  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // Handle array fields
  const handleArrayChange = (field, index) => (e) => {
    const newArray = [...formData[field]];
    newArray[index] = e.target.value;
    setFormData({ ...formData, [field]: newArray });
  };

  // Handle object fields
  const handleObjectChange = (field, index, subfield) => (e) => {
    const newArray = [...formData[field]];
    newArray[index] = { ...newArray[index], [subfield]: e.target.value };
    setFormData({ ...formData, [field]: newArray });
  };

  // Handle social links
  const handleSocialLinkChange = (index, field) => (e) => {
    const newLinks = [...formData.socialLinks];
    newLinks[index] = { ...newLinks[index], [field]: e.target.value };
    setFormData({ ...formData, socialLinks: newLinks });
  };

  // Add a new item
  const addItem = (field, template) => {
    setFormData({ ...formData, [field]: [...formData[field], template] });
  };

  // Remove an item
  const removeItem = (field, index) => {
    const newArray = [...formData[field]];
    newArray.splice(index, 1);
    setFormData({ ...formData, [field]: newArray });
  };

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('CV Data Saved Successfully!');
  };

  // Social media icons
  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'LinkedIn': return <LinkedInIcon />;
      case 'GitHub': return <GitHubIcon />;
      case 'Twitter': return <TwitterIcon />;
      default: return <LanguageIcon />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        bgcolor: darkMode ? '#121212' : 'background.default', 
        minHeight: '100vh',
        py: 4,
        transition: 'background-color 0.3s'
      }}>
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: darkMode ? '#fff' : 'primary.main' }}>
              Professional CV Builder
            </Typography>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
              label={darkMode ? "Dark Mode" : "Light Mode"}
              sx={{ color: darkMode ? '#fff' : 'text.primary' }}
            />
          </Box>
          
          <Paper elevation={3} sx={{ 
            borderRadius: 3, 
            overflow: 'hidden',
            bgcolor: darkMode ? '#1e1e1e' : 'background.paper',
            color: darkMode ? '#e0e0e0' : 'text.primary'
          }}>
            <Box sx={{ 
              bgcolor: 'primary.main', 
              color: '#fff', 
              p: 3, 
              textAlign: 'center',
              position: 'relative'
            }}>
              <Box sx={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                height: '4px', 
                bgcolor: 'secondary.main' 
              }} />
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Create Your Professional CV
              </Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                Fill in your details to create a standout resume
              </Typography>
            </Box>
            
            <Box sx={{ p: 3 }}>
              <form onSubmit={handleSubmit}>
                {/* Personal Info & Photo */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 3, 
                  mb: 4,
                  alignItems: 'flex-start'
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    minWidth: 150 
                  }}>
                    <Avatar
                      src={photo}
                      sx={{ 
                        width: 120, 
                        height: 120, 
                        mb: 2,
                        border: '3px solid',
                        borderColor: 'secondary.main'
                      }}
                    />
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<CloudUploadIcon />}
                      size="small"
                      sx={{ bgcolor: darkMode ? '#333' : '#f5f5f5', color: darkMode ? '#fff' : 'text.primary' }}
                    >
                      Upload Photo
                      <input type="file" hidden onChange={handlePhotoUpload} />
                    </Button>
                  </Box>
                  
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          value={formData.fullName}
                          onChange={handleChange('fullName')}
                          required
                          variant="outlined"
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          value={formData.phone}
                          onChange={handleChange('phone')}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange('email')}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          fullWidth
                          label="City"
                          value={formData.city}
                          onChange={handleChange('city')}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          fullWidth
                          label="State"
                          value={formData.state}
                          onChange={handleChange('state')}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          fullWidth
                          label="Country"
                          value={formData.country}
                          onChange={handleChange('country')}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 3 }} />
                
                {/* Social Links */}
                <Accordion defaultExpanded sx={{ bgcolor: darkMode ? '#252525' : '#fafafa' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <LanguageIcon sx={{ color: 'secondary.main' }} />
                      <Typography variant="h5">Social Links</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    {formData.socialLinks.map((link, index) => (
                      <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                        <Grid item xs={12} sm={5}>
                          <FormControl fullWidth>
                            <InputLabel>Platform</InputLabel>
                            <Select
                              value={link.platform}
                              onChange={handleSocialLinkChange(index, 'platform')}
                              label="Platform"
                            >
                              <MenuItem value="LinkedIn">LinkedIn</MenuItem>
                              <MenuItem value="GitHub">GitHub</MenuItem>
                              <MenuItem value="Twitter">Twitter</MenuItem>
                              <MenuItem value="Portfolio">Portfolio</MenuItem>
                              <MenuItem value="Other">Other</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="URL"
                            value={link.url}
                            onChange={handleSocialLinkChange(index, 'url')}
                          />
                        </Grid>
                        <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
                          <IconButton 
                            onClick={() => removeItem('socialLinks', index)}
                            disabled={formData.socialLinks.length === 1}
                            color="error"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    ))}
                    <Button 
                      startIcon={<AddIcon />}
                      onClick={() => addItem('socialLinks', { platform: 'LinkedIn', url: '' })}
                      variant="outlined"
                      sx={{ mt: 1 }}
                    >
                      Add Social Link
                    </Button>
                  </AccordionDetails>
                </Accordion>
                
                {/* Summary */}
                <Accordion defaultExpanded sx={{ bgcolor: darkMode ? '#252525' : '#fafafa', mt: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CardMembershipIcon sx={{ color: 'secondary.main' }} />
                      <Typography variant="h5">Professional Summary</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TextField
                      fullWidth
                      multiline
                      minRows={4}
                      label="Summary"
                      value={formData.summary}
                      onChange={handleChange('summary')}
                      placeholder="Describe your professional background, skills, and career goals..."
                    />
                  </AccordionDetails>
                </Accordion>
                
                {/* Skills */}
                <Accordion defaultExpanded sx={{ bgcolor: darkMode ? '#252525' : '#fafafa', mt: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <StarIcon sx={{ color: 'secondary.main' }} />
                      <Typography variant="h5">Skills</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={1} sx={{ mb: 2 }}>
                      {formData.skills.map((skill, index) => (
                        <Grid item key={index}>
                          <Chip
                            label={skill}
                            onDelete={() => removeItem('skills', index)}
                            sx={{ mr: 1, mb: 1 }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <TextField
                        fullWidth
                        label="Add Skill"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            if (e.target.value.trim()) {
                              addItem('skills', e.target.value.trim());
                              e.target.value = '';
                            }
                          }
                        }}
                        variant="outlined"
                        size="small"
                      />
                      <Button 
                        startIcon={<AddIcon />}
                        onClick={() => {
                          const input = document.querySelector('input[label="Add Skill"]');
                          if (input && input.value.trim()) {
                            addItem('skills', input.value.trim());
                            input.value = '';
                          }
                        }}
                        variant="outlined"
                      >
                        Add
                      </Button>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                
                {/* Experience */}
                <Accordion defaultExpanded sx={{ bgcolor: darkMode ? '#252525' : '#fafafa', mt: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <WorkIcon sx={{ color: 'secondary.main' }} />
                      <Typography variant="h5">Work Experience</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    {formData.experience.map((exp, index) => (
                      <Box key={index} sx={{ 
                        mb: 4, 
                        p: 3, 
                        borderLeft: '3px solid', 
                        borderColor: 'secondary.main',
                        bgcolor: darkMode ? '#1a1a1a' : '#f5f5f5',
                        borderRadius: '0 8px 8px 0'
                      }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Position"
                              value={exp.position}
                              onChange={handleObjectChange('experience', index, 'position')}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Company"
                              value={exp.company}
                              onChange={handleObjectChange('experience', index, 'company')}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Start Date"
                              type="month"
                              value={exp.startDate}
                              onChange={handleObjectChange('experience', index, 'startDate')}
                              InputLabelProps={{ shrink: true }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="End Date"
                              type="month"
                              value={exp.endDate}
                              onChange={handleObjectChange('experience', index, 'endDate')}
                              InputLabelProps={{ shrink: true }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              multiline
                              minRows={3}
                              label="Description"
                              value={exp.description}
                              onChange={handleObjectChange('experience', index, 'description')}
                            />
                          </Grid>
                          <Grid item xs={12} sx={{ textAlign: 'right' }}>
                            <IconButton 
                              onClick={() => removeItem('experience', index)}
                              disabled={formData.experience.length === 1}
                              color="error"
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Box>
                    ))}
                    <Button 
                      startIcon={<AddIcon />}
                      onClick={() => addItem('experience', {
                        position: '',
                        company: '',
                        startDate: '',
                        endDate: '',
                        description: '',
                      })}
                      variant="outlined"
                    >
                      Add Experience
                    </Button>
                  </AccordionDetails>
                </Accordion>
                
                {/* Education */}
                <Accordion defaultExpanded sx={{ bgcolor: darkMode ? '#252525' : '#fafafa', mt: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <SchoolIcon sx={{ color: 'secondary.main' }} />
                      <Typography variant="h5">Education</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    {formData.education.map((edu, index) => (
                      <Grid container spacing={2} key={index} sx={{ mb: 3 }}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Degree"
                            value={edu.degree}
                            onChange={handleObjectChange('education', index, 'degree')}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Institution"
                            value={edu.institution}
                            onChange={handleObjectChange('education', index, 'institution')}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Year"
                            value={edu.year}
                            onChange={handleObjectChange('education', index, 'year')}
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'right' }}>
                          <IconButton 
                            onClick={() => removeItem('education', index)}
                            disabled={formData.education.length === 1}
                            color="error"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    ))}
                    <Button 
                      startIcon={<AddIcon />}
                      onClick={() => addItem('education', {
                        degree: '',
                        institution: '',
                        year: '',
                      })}
                      variant="outlined"
                    >
                      Add Education
                    </Button>
                  </AccordionDetails>
                </Accordion>
                
                {/* Projects */}
                <Accordion defaultExpanded sx={{ bgcolor: darkMode ? '#252525' : '#fafafa', mt: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CodeIcon sx={{ color: 'secondary.main' }} />
                      <Typography variant="h5">Projects</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    {formData.projects.map((proj, index) => (
                      <Box key={index} sx={{ 
                        mb: 3, 
                        p: 2, 
                        border: '1px solid', 
                        borderColor: 'divider',
                        borderRadius: 2
                      }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Project Title"
                              value={proj.title}
                              onChange={handleObjectChange('projects', index, 'title')}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              multiline
                              minRows={2}
                              label="Description"
                              value={proj.description}
                              onChange={handleObjectChange('projects', index, 'description')}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Technologies"
                              value={proj.technologies}
                              onChange={handleObjectChange('projects', index, 'technologies')}
                            />
                          </Grid>
                          <Grid item xs={12} sx={{ textAlign: 'right' }}>
                            <IconButton 
                              onClick={() => removeItem('projects', index)}
                              disabled={formData.projects.length === 1}
                              color="error"
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Box>
                    ))}
                    <Button 
                      startIcon={<AddIcon />}
                      onClick={() => addItem('projects', {
                        title: '',
                        description: '',
                        technologies: '',
                      })}
                      variant="outlined"
                    >
                      Add Project
                    </Button>
                  </AccordionDetails>
                </Accordion>
                
                {/* Additional Sections */}
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6}>
                    {/* Certificates */}
                    <Accordion sx={{ bgcolor: darkMode ? '#252525' : '#fafafa' }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <CardMembershipIcon sx={{ color: 'secondary.main' }} />
                          <Typography variant="h5">Certificates</Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        {formData.certificates.map((cert, index) => (
                          <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                            <Grid item xs={11}>
                              <TextField
                                fullWidth
                                label={`Certificate ${index + 1}`}
                                value={cert}
                                onChange={handleArrayChange('certificates', index)}
                              />
                            </Grid>
                            <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
                              <IconButton 
                                onClick={() => removeItem('certificates', index)}
                                disabled={formData.certificates.length === 1}
                                color="error"
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                        ))}
                        <Button 
                          startIcon={<AddIcon />}
                          onClick={() => addItem('certificates', '')}
                          variant="outlined"
                        >
                          Add Certificate
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                    
                    {/* Languages */}
                    <Accordion sx={{ bgcolor: darkMode ? '#252525' : '#fafafa', mt: 2 }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <TranslateIcon sx={{ color: 'secondary.main' }} />
                          <Typography variant="h5">Languages</Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        {formData.languages.map((lang, index) => (
                          <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                            <Grid item xs={5}>
                              <TextField
                                fullWidth
                                label="Language"
                                value={lang.language}
                                onChange={handleObjectChange('languages', index, 'language')}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                fullWidth
                                label="Proficiency"
                                value={lang.proficiency}
                                onChange={handleObjectChange('languages', index, 'proficiency')}
                              />
                            </Grid>
                            <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
                              <IconButton 
                                onClick={() => removeItem('languages', index)}
                                disabled={formData.languages.length === 1}
                                color="error"
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                        ))}
                        <Button 
                          startIcon={<AddIcon />}
                          onClick={() => addItem('languages', {
                            language: '',
                            proficiency: ''
                          })}
                          variant="outlined"
                        >
                          Add Language
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    {/* Achievements */}
                    <Accordion sx={{ bgcolor: darkMode ? '#252525' : '#fafafa' }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <EmojiEventsIcon sx={{ color: 'secondary.main' }} />
                          <Typography variant="h5">Achievements</Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        {formData.achievements.map((achievement, index) => (
                          <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                            <Grid item xs={11}>
                              <TextField
                                fullWidth
                                label={`Achievement ${index + 1}`}
                                value={achievement}
                                onChange={handleArrayChange('achievements', index)}
                              />
                            </Grid>
                            <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
                              <IconButton 
                                onClick={() => removeItem('achievements', index)}
                                disabled={formData.achievements.length === 1}
                                color="error"
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                        ))}
                        <Button 
                          startIcon={<AddIcon />}
                          onClick={() => addItem('achievements', '')}
                          variant="outlined"
                        >
                          Add Achievement
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                    
                    {/* Interests */}
                    <Accordion sx={{ bgcolor: darkMode ? '#252525' : '#fafafa', mt: 2 }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <FavoriteIcon sx={{ color: 'secondary.main' }} />
                          <Typography variant="h5">Interests</Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box sx={{ mb: 2 }}>
                          {formData.interests.map((interest, index) => (
                            <Chip
                              key={index}
                              label={interest}
                              onDelete={() => removeItem('interests', index)}
                              sx={{ mr: 1, mb: 1 }}
                              color="primary"
                            />
                          ))}
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                          <TextField
                            fullWidth
                            label="Add Interest"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                if (e.target.value.trim()) {
                                  addItem('interests', e.target.value.trim());
                                  e.target.value = '';
                                }
                              }
                            }}
                            variant="outlined"
                            size="small"
                          />
                          <Button 
                            startIcon={<AddIcon />}
                            onClick={() => {
                              const input = document.querySelector('input[label="Add Interest"]');
                              if (input && input.value.trim()) {
                                addItem('interests', input.value.trim());
                                input.value = '';
                              }
                            }}
                            variant="outlined"
                          >
                            Add
                          </Button>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>
                
                {/* Form Actions */}
                <Box sx={{ 
                  mt: 4, 
                  display: 'flex', 
                  justifyContent: 'center',
                  gap: 2
                }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    size="large"
                    type="submit"
                    sx={{ 
                      px: 4,
                      bgcolor: 'primary.main',
                      '&:hover': { bgcolor: 'primary.dark' }
                    }}
                  >
                    Save CV Data
                  </Button>
                </Box>
              </form>
            </Box>
          </Paper>
          
          <Box sx={{ 
            mt: 3, 
            textAlign: 'center', 
            color: darkMode ? '#b0b0b0' : 'text.secondary',
            fontSize: '0.9rem'
          }}>
            <Typography>© 2023 Professional CV Builder | All rights reserved</Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CVForm;