import React, { useState, useRef } from 'react';
import { 
  Box, Button, Container, CssBaseline, Grid, IconButton, 
  Paper, ThemeProvider, Typography, createTheme, 
  TextField, TextareaAutosize, InputAdornment, Switch, Avatar
} from '@mui/material';
import { Print, Download, LightMode, DarkMode, Edit, Save } from '@mui/icons-material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const ProfessionalCVTemplate = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState('Roboto');
  const [editingSection, setEditingSection] = useState(null);
  const cvRef = useRef(null);

  // CV data with state for all editable fields
  const [cvData, setCvData] = useState({
    personal: {
      fullName: "Alex Johnson",
      title: "Senior Frontend Developer",
      phone: "+1 (555) 123-4567",
      email: "alex.johnson@example.com",
      city: "San Francisco",
      country: "USA",
      socialLinks: [
        { name: "LinkedIn", url: "linkedin.com/in/alexjohnson" },
        { name: "GitHub", url: "github.com/alexjohnson" },
        { name: "Portfolio", url: "alexjohnson.dev" }
      ],
      avatarInitials: "AJ"
    },
    summary: "Senior Frontend Developer with 8+ years of experience building responsive and performant web applications. Specialized in React ecosystem with a strong focus on user experience and clean code architecture. Passionate about mentoring junior developers and implementing modern frontend practices.",
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
        id: 1,
        title: "Senior Frontend Developer",
        company: "Tech Innovations Inc.",
        period: "Jan 2020 - Present",
        description: "Leading frontend development for enterprise SaaS platform serving 500+ clients.",
        achievements: [
          "Reduced page load time by 40% through code optimization and lazy loading",
          "Mentored 5 junior developers, improving team velocity by 25%",
          "Implemented design system used across 15+ company products"
        ]
      },
      {
        id: 2,
        title: "Frontend Developer",
        company: "Digital Solutions LLC",
        period: "Mar 2017 - Dec 2019",
        description: "Developed customer-facing applications for e-commerce clients.",
        achievements: [
          "Created reusable component library saving 200+ development hours annually",
          "Improved conversion rate by 18% through UI/UX enhancements",
          "Migrated legacy jQuery application to modern React stack"
        ]
      }
    ],
    education: [
      {
        id: 1,
        degree: "M.S. Computer Science",
        institution: "Stanford University",
        period: "2013 - 2015",
        description: "Specialized in Human-Computer Interaction"
      },
      {
        id: 2,
        degree: "B.S. Software Engineering",
        institution: "University of California",
        period: "2009 - 2013",
        description: "Minor in Digital Design, GPA: 3.8/4.0"
      }
    ],
    projects: [
      {
        id: 1,
        name: "E-commerce Platform",
        technologies: "React, Node.js, MongoDB, Stripe",
        description: "Full-featured online shopping platform with payment processing"
      },
      {
        id: 2,
        name: "Project Management Dashboard",
        technologies: "React, Redux, Material-UI, Firebase",
        description: "Real-time collaborative project management tool"
      }
    ],
    certificates: [
      "AWS Certified Solutions Architect (2022)",
      "Google Professional Cloud Developer (2021)",
      "React Advanced Concepts Certification (2020)"
    ],
    languages: [
      { name: "English", proficiency: "Native" },
      { name: "Spanish", proficiency: "Professional" },
      { name: "French", proficiency: "Intermediate" }
    ],
    interests: ["Open Source Contribution", "Photography", "Hiking", "AI Research"]
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);
  
  const handleFontChange = (font) => {
    setFontFamily(font);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#64b5f6' : '#1565c0',
      },
      secondary: {
        main: darkMode ? '#ffb74d' : '#e64a19',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f7fa',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: fontFamily,
      h1: { fontSize: '2.4rem', fontWeight: 700, letterSpacing: '0.5px' },
      h2: { fontSize: '1.8rem', fontWeight: 600, marginBottom: '0.5rem' },
      h3: { fontSize: '1.4rem', fontWeight: 500 },
      h4: { fontSize: '1.1rem', fontWeight: 500 },
      body1: { fontSize: '0.95rem', lineHeight: '1.7' },
      body2: { fontSize: '0.9rem', color: 'text.secondary' },
    },
    shape: {
      borderRadius: 12,
    },
  });

  const handlePrint = () => {
    window.print();
  };

  const downloadPDF = () => {
    const input = cvRef.current;
    html2canvas(input, { scale: 3 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('professional-cv.pdf');
    });
  };

  // Handle field updates
  const handleFieldChange = (section, field, value, index = null) => {
    setCvData(prev => {
      const newData = {...prev};
      
      if (index !== null && Array.isArray(newData[section])) {
        // For array fields (skills, experience, etc.)
        newData[section] = [...newData[section]];
        newData[section][index] = {...newData[section][index], [field]: value};
      } else if (index !== null && newData[section][index]) {
        // For nested arrays (like achievements in experience)
        newData[section] = [...newData[section]];
        newData[section][index] = {...newData[section][index]};
        newData[section][index][field] = value;
      } else if (section === 'personal') {
        // For personal info
        newData.personal = {...newData.personal, [field]: value};
      } else {
        // For simple fields (summary)
        newData[section] = value;
      }
      
      return newData;
    });
  };

  // Handle array item updates (add/remove)
  const handleArrayItemChange = (section, action, index = null, item = null) => {
    setCvData(prev => {
      const newData = {...prev};
      
      if (action === 'add') {
        newData[section] = [...newData[section], item];
      } else if (action === 'remove') {
        newData[section] = newData[section].filter((_, i) => i !== index);
      } else if (action === 'update') {
        newData[section] = [...newData[section]];
        newData[section][index] = item;
      }
      
      return newData;
    });
  };

  // Render edit controls
  const renderEditControls = (section, index = null) => {
    return (
      <Box sx={{ 
        position: 'absolute', 
        top: 16, 
        right: 16,
        display: 'flex',
        gap: 1
      }}>
        {editingSection === `${section}-${index}` ? (
          <IconButton 
            size="small" 
            color="primary"
            onClick={() => setEditingSection(null)}
          >
            <Save />
          </IconButton>
        ) : (
          <IconButton 
            size="small" 
            color="primary"
            onClick={() => setEditingSection(`${section}-${index}`)}
          >
            <Edit fontSize="small" />
          </IconButton>
        )}
      </Box>
    );
  };

  // Render editable text field
  const renderEditableField = (section, field, value, index = null, multiline = false) => {
    if (editingSection === `${section}-${index}`) {
      return (
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          value={value}
          onChange={(e) => handleFieldChange(section, field, e.target.value, index)}
          multiline={multiline}
          minRows={multiline ? 3 : 1}
          InputProps={{
            sx: {
              fontSize: 'inherit',
              fontWeight: 'inherit',
              lineHeight: 'inherit',
              padding: multiline ? '8px' : '0',
            }
          }}
        />
      );
    }
    return <>{value}</>;
  };

  // Render personal info section
  const renderPersonalInfo = () => {
    return (
      <Box sx={{ 
        mb: 4, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        padding: 3,
        backgroundColor: darkMode ? '#2a2a2a' : '#f0f4f8',
        borderRadius: 2,
        boxShadow: 1
      }}>
        {renderEditControls('personal')}
        
        <Box>
          <Typography variant="h1" sx={{ 
            color: 'primary.main',
            fontWeight: 800,
            letterSpacing: '-0.5px',
            mb: 1
          }}>
            {editingSection === 'personal' ? (
              <TextField
                fullWidth
                variant="standard"
                value={cvData.personal.fullName}
                onChange={(e) => handleFieldChange('personal', 'fullName', e.target.value)}
                InputProps={{
                  sx: {
                    fontSize: '2.4rem',
                    fontWeight: 800,
                  }
                }}
              />
            ) : cvData.personal.fullName}
          </Typography>
          
          <Typography variant="h4" sx={{ 
            fontWeight: 400,
            color: 'text.secondary',
            letterSpacing: '1px',
            mb: 3
          }}>
            {editingSection === 'personal' ? (
              <TextField
                fullWidth
                variant="standard"
                value={cvData.personal.title}
                onChange={(e) => handleFieldChange('personal', 'title', e.target.value)}
                InputProps={{
                  sx: {
                    fontSize: '1.4rem',
                    fontWeight: 400,
                  }
                }}
              />
            ) : cvData.personal.title}
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>Phone:</Typography>
                {editingSection === 'personal' ? (
                  <TextField
                    fullWidth
                    variant="standard"
                    value={cvData.personal.phone}
                    onChange={(e) => handleFieldChange('personal', 'phone', e.target.value)}
                  />
                ) : (
                  <Typography variant="body1">{cvData.personal.phone}</Typography>
                )}
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>Email:</Typography>
                {editingSection === 'personal' ? (
                  <TextField
                    fullWidth
                    variant="standard"
                    value={cvData.personal.email}
                    onChange={(e) => handleFieldChange('personal', 'email', e.target.value)}
                  />
                ) : (
                  <Typography variant="body1">{cvData.personal.email}</Typography>
                )}
              </Box>
            </Grid>
            
            <Grid item xs={6}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>Location:</Typography>
                {editingSection === 'personal' ? (
                  <Box>
                    <TextField
                      fullWidth
                      variant="standard"
                      value={cvData.personal.city}
                      onChange={(e) => handleFieldChange('personal', 'city', e.target.value)}
                      sx={{ mb: 1 }}
                    />
                    <TextField
                      fullWidth
                      variant="standard"
                      value={cvData.personal.country}
                      onChange={(e) => handleFieldChange('personal', 'country', e.target.value)}
                    />
                  </Box>
                ) : (
                  <Typography variant="body1">{cvData.personal.city}, {cvData.personal.country}</Typography>
                )}
              </Box>
              
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>Social:</Typography>
                {editingSection === 'personal' ? (
                  <Box>
                    {cvData.personal.socialLinks.map((link, index) => (
                      <Box key={index} sx={{ display: 'flex', gap: 1, mb: 1 }}>
                        <TextField
                          variant="standard"
                          placeholder="Platform"
                          value={link.name}
                          onChange={(e) => handleFieldChange('personal', 'socialLinks', [
                            ...cvData.personal.socialLinks.slice(0, index),
                            { ...link, name: e.target.value },
                            ...cvData.personal.socialLinks.slice(index + 1)
                          ])}
                          sx={{ width: '30%' }}
                        />
                        <TextField
                          variant="standard"
                          placeholder="URL"
                          value={link.url}
                          onChange={(e) => handleFieldChange('personal', 'socialLinks', [
                            ...cvData.personal.socialLinks.slice(0, index),
                            { ...link, url: e.target.value },
                            ...cvData.personal.socialLinks.slice(index + 1)
                          ])}
                          sx={{ flex: 1 }}
                        />
                      </Box>
                    ))}
                    <Button 
                      variant="outlined" 
                      size="small"
                      onClick={() => handleArrayItemChange('personal', 'add', null, { name: '', url: '' })}
                    >
                      Add Social Link
                    </Button>
                  </Box>
                ) : (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {cvData.personal.socialLinks.map((link, index) => (
                      <Typography key={index} variant="body1">
                        {link.name}: {link.url}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
        
        <Avatar sx={{ 
          width: 120, 
          height: 120, 
          fontSize: '3rem',
          bgcolor: 'primary.main',
          color: 'primary.contrastText'
        }}>
          {editingSection === 'personal' ? (
            <TextField
              variant="standard"
              value={cvData.personal.avatarInitials}
              onChange={(e) => handleFieldChange('personal', 'avatarInitials', e.target.value)}
              InputProps={{
                inputProps: {
                  style: { 
                    textAlign: 'center',
                    fontSize: '3rem',
                    color: '#fff',
                    width: '60px'
                  }
                }
              }}
              sx={{
                '& .MuiInput-root': {
                  '&:before': { border: 'none' },
                  '&:after': { border: 'none' }
                }
              }}
            />
          ) : cvData.personal.avatarInitials}
        </Avatar>
      </Box>
    );
  };

  // Render skills section
  const renderSkills = () => {
    return (
      <Box sx={{ 
        mb: 4,
        padding: 3,
        backgroundColor: darkMode ? '#2a2a2a' : '#f0f4f8',
        borderRadius: 2,
        boxShadow: 1,
        position: 'relative'
      }}>
        {renderEditControls('skills')}
        
        <Typography variant="h2" sx={{ mb: 3 }}>Technical Skills</Typography>
        
        <Grid container spacing={2}>
          {cvData.skills.map((skill, index) => (
            <Grid item xs={6} key={index}>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  {editingSection === 'skills' ? (
                    <TextField
                      fullWidth
                      variant="standard"
                      value={skill.name}
                      onChange={(e) => handleFieldChange('skills', 'name', e.target.value, index)}
                    />
                  ) : (
                    <Typography variant="body1">{skill.name}</Typography>
                  )}
                  {editingSection === 'skills' ? (
                    <TextField
                      variant="standard"
                      value={skill.level}
                      onChange={(e) => handleFieldChange('skills', 'level', e.target.value, index)}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                        inputProps: { style: { width: '40px' } }
                      }}
                      sx={{ width: '80px' }}
                    />
                  ) : (
                    <Typography variant="body2">{skill.level}%</Typography>
                  )}
                </Box>
                
                <Box sx={{ 
                  height: 8, 
                  borderRadius: 4,
                  backgroundColor: darkMode ? '#424242' : '#e0e0e0',
                  overflow: 'hidden'
                }}>
                  <Box sx={{ 
                    height: '100%', 
                    width: `${skill.level}%`, 
                    backgroundColor: 'primary.main',
                    borderRadius: 4
                  }} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        
        {editingSection === 'skills' && (
          <Button 
            variant="outlined" 
            fullWidth
            onClick={() => handleArrayItemChange('skills', 'add', null, { name: '', level: 80 })}
            sx={{ mt: 2 }}
          >
            Add Skill
          </Button>
        )}
      </Box>
    );
  };

  // Render experience section
  const renderExperience = () => {
    return (
      <Box sx={{ 
        mb: 4,
        padding: 3,
        backgroundColor: darkMode ? '#2a2a2a' : '#f0f4f8',
        borderRadius: 2,
        boxShadow: 1,
        position: 'relative'
      }}>
        {renderEditControls('experience')}
        
        <Typography variant="h2" sx={{ mb: 3 }}>Work Experience</Typography>
        
        {cvData.experience.map((exp, index) => (
          <Box key={exp.id} sx={{ mb: 3, position: 'relative' }}>
            {editingSection === 'experience' && (
              <Box sx={{ position: 'absolute', top: -10, right: 0 }}>
                <Button 
                  size="small" 
                  color="error"
                  onClick={() => handleArrayItemChange('experience', 'remove', index)}
                >
                  Remove
                </Button>
              </Box>
            )}
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {editingSection === 'experience' ? (
                <TextField
                  fullWidth
                  variant="standard"
                  value={exp.title}
                  onChange={(e) => handleFieldChange('experience', 'title', e.target.value, index)}
                  sx={{ mr: 2 }}
                />
              ) : (
                <Typography variant="h3">{exp.title}</Typography>
              )}
              {editingSection === 'experience' ? (
                <TextField
                  variant="standard"
                  value={exp.period}
                  onChange={(e) => handleFieldChange('experience', 'period', e.target.value, index)}
                />
              ) : (
                <Typography variant="body2" color="text.secondary">{exp.period}</Typography>
              )}
            </Box>
            
            <Box sx={{ mb: 1 }}>
              {editingSection === 'experience' ? (
                <TextField
                  fullWidth
                  variant="standard"
                  value={exp.company}
                  onChange={(e) => handleFieldChange('experience', 'company', e.target.value, index)}
                />
              ) : (
                <Typography variant="body1" color="primary.main" fontStyle="italic">
                  {exp.company}
                </Typography>
              )}
            </Box>
            
            <Box sx={{ mb: 1 }}>
              {editingSection === 'experience' ? (
                <TextareaAutosize
                  minRows={2}
                  value={exp.description}
                  onChange={(e) => handleFieldChange('experience', 'description', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    fontFamily: fontFamily,
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    backgroundColor: 'transparent',
                    color: darkMode ? '#fff' : '#333',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
              ) : (
                <Typography variant="body1">{exp.description}</Typography>
              )}
            </Box>
            
            <Box component="ul" sx={{ pl: 2, mt: 1 }}>
              {exp.achievements.map((achievement, aIndex) => (
                <li key={aIndex} style={{ marginBottom: '8px' }}>
                  {editingSection === 'experience' ? (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <TextField
                        fullWidth
                        variant="standard"
                        value={achievement}
                        onChange={(e) => handleFieldChange('experience', 'achievements', e.target.value, index, aIndex)}
                      />
                      <IconButton 
                        size="small" 
                        color="error"
                        onClick={() => {
                          const newAchievements = [...exp.achievements];
                          newAchievements.splice(aIndex, 1);
                          handleFieldChange('experience', 'achievements', newAchievements, index);
                        }}
                      >
                        ✕
                      </IconButton>
                    </Box>
                  ) : (
                    <Typography variant="body1">• {achievement}</Typography>
                  )}
                </li>
              ))}
              
              {editingSection === 'experience' && (
                <li>
                  <Button 
                    size="small"
                    onClick={() => {
                      const newAchievements = [...exp.achievements, ""];
                      handleFieldChange('experience', 'achievements', newAchievements, index);
                    }}
                  >
                    Add Achievement
                  </Button>
                </li>
              )}
            </Box>
          </Box>
        ))}
        
        {editingSection === 'experience' && (
          <Button 
            variant="outlined" 
            fullWidth
            onClick={() => handleArrayItemChange('experience', 'add', null, {
              id: Date.now(),
              title: "New Position",
              company: "Company Name",
              period: "2023 - Present",
              description: "Description of your role and responsibilities",
              achievements: ["Your first achievement"]
            })}
            sx={{ mt: 2 }}
          >
            Add Experience
          </Button>
        )}
      </Box>
    );
  };

  // Render education section
  const renderEducation = () => {
    return (
      <Box sx={{ 
        mb: 4,
        padding: 3,
        backgroundColor: darkMode ? '#2a2a2a' : '#f0f4f8',
        borderRadius: 2,
        boxShadow: 1,
        position: 'relative'
      }}>
        {renderEditControls('education')}
        
        <Typography variant="h2" sx={{ mb: 3 }}>Education</Typography>
        
        {cvData.education.map((edu, index) => (
          <Box key={edu.id} sx={{ mb: 3, position: 'relative' }}>
            {editingSection === 'education' && (
              <Box sx={{ position: 'absolute', top: -10, right: 0 }}>
                <Button 
                  size="small" 
                  color="error"
                  onClick={() => handleArrayItemChange('education', 'remove', index)}
                >
                  Remove
                </Button>
              </Box>
            )}
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {editingSection === 'education' ? (
                <TextField
                  fullWidth
                  variant="standard"
                  value={edu.degree}
                  onChange={(e) => handleFieldChange('education', 'degree', e.target.value, index)}
                  sx={{ mr: 2 }}
                />
              ) : (
                <Typography variant="h3">{edu.degree}</Typography>
              )}
              {editingSection === 'education' ? (
                <TextField
                  variant="standard"
                  value={edu.period}
                  onChange={(e) => handleFieldChange('education', 'period', e.target.value, index)}
                />
              ) : (
                <Typography variant="body2" color="text.secondary">{edu.period}</Typography>
              )}
            </Box>
            
            <Box sx={{ mb: 1 }}>
              {editingSection === 'education' ? (
                <TextField
                  fullWidth
                  variant="standard"
                  value={edu.institution}
                  onChange={(e) => handleFieldChange('education', 'institution', e.target.value, index)}
                />
              ) : (
                <Typography variant="body1">{edu.institution}</Typography>
              )}
            </Box>
            
            <Box>
              {editingSection === 'education' ? (
                <TextareaAutosize
                  minRows={2}
                  value={edu.description}
                  onChange={(e) => handleFieldChange('education', 'description', e.target.value, index)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    fontFamily: fontFamily,
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    backgroundColor: 'transparent',
                    color: darkMode ? '#fff' : '#333',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
              ) : (
                <Typography variant="body2">{edu.description}</Typography>
              )}
            </Box>
          </Box>
        ))}
        
        {editingSection === 'education' && (
          <Button 
            variant="outlined" 
            fullWidth
            onClick={() => handleArrayItemChange('education', 'add', null, {
              id: Date.now(),
              degree: "Degree Name",
              institution: "Institution Name",
              period: "2020 - 2024",
              description: "Description of your education"
            })}
            sx={{ mt: 2 }}
          >
            Add Education
          </Button>
        )}
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Control Panel */}
        <Paper sx={{ 
          mb: 4, 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          p: 3,
          borderRadius: 2,
          boxShadow: 2,
          '@media print': {
            display: 'none'
          }
        }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            PROFESSIONAL CV BUILDER
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LightMode sx={{ color: darkMode ? 'text.disabled' : 'primary.main' }} />
              <Switch 
                checked={darkMode} 
                onChange={toggleDarkMode} 
                color="primary"
                sx={{ mx: 1 }}
              />
              <DarkMode sx={{ color: darkMode ? 'primary.main' : 'text.disabled' }} />
            </Box>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button 
                variant={fontFamily === 'Roboto' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => handleFontChange('Roboto')}
                sx={{ textTransform: 'none' }}
              >
                Roboto
              </Button>
              <Button 
                variant={fontFamily === 'Montserrat' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => handleFontChange('Montserrat')}
                sx={{ textTransform: 'none' }}
              >
                Montserrat
              </Button>
              <Button 
                variant={fontFamily === 'Lato' ? 'contained' : 'outlined'}
                size="small"
                onClick={() => handleFontChange('Lato')}
                sx={{ textTransform: 'none' }}
              >
                Lato
              </Button>
            </Box>
          </Box>
          
          <Box>
            <Button 
              variant="contained" 
              startIcon={<Print />}
              onClick={handlePrint}
              sx={{ mr: 2 }}
            >
              Print
            </Button>
            <Button 
              variant="contained" 
              color="secondary"
              startIcon={<Download />}
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
            width: '210mm',
            minHeight: '297mm',
            mx: 'auto',
            p: '25mm',
            display: 'flex',
            flexDirection: 'column',
            background: darkMode ? 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)' : 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            '@media print': {
              boxShadow: 'none',
              width: '100%',
              height: '100%',
              margin: 0,
              padding: '20mm',
            }
          }}
        >
          {/* Header */}
          {renderPersonalInfo()}
          
          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={5}>
              {renderSkills()}
              
              {/* Languages */}
              <Box sx={{ 
                mb: 4,
                padding: 3,
                backgroundColor: darkMode ? '#2a2a2a' : '#f0f4f8',
                borderRadius: 2,
                boxShadow: 1,
                position: 'relative'
              }}>
                {renderEditControls('languages')}
                
                <Typography variant="h2" sx={{ mb: 3 }}>Languages</Typography>
                
                {cvData.languages.map((lang, index) => (
                  <Box key={index} sx={{ mb: 2, position: 'relative' }}>
                    {editingSection === 'languages' && (
                      <IconButton 
                        size="small" 
                        color="error"
                        sx={{ position: 'absolute', top: -10, right: 0 }}
                        onClick={() => handleArrayItemChange('languages', 'remove', index)}
                      >
                        ✕
                      </IconButton>
                    )}
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      {editingSection === 'languages' ? (
                        <TextField
                          fullWidth
                          variant="standard"
                          value={lang.name}
                          onChange={(e) => handleFieldChange('languages', 'name', e.target.value, index)}
                        />
                      ) : (
                        <Typography variant="body1">{lang.name}</Typography>
                      )}
                      {editingSection === 'languages' ? (
                        <TextField
                          variant="standard"
                          value={lang.proficiency}
                          onChange={(e) => handleFieldChange('languages', 'proficiency', e.target.value, index)}
                        />
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {lang.proficiency}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
                
                {editingSection === 'languages' && (
                  <Button 
                    variant="outlined" 
                    fullWidth
                    onClick={() => handleArrayItemChange('languages', 'add', null, { name: '', proficiency: '' })}
                    sx={{ mt: 2 }}
                  >
                    Add Language
                  </Button>
                )}
              </Box>
              
              {/* Interests */}
              <Box sx={{ 
                padding: 3,
                backgroundColor: darkMode ? '#2a2a2a' : '#f0f4f8',
                borderRadius: 2,
                boxShadow: 1,
                position: 'relative'
              }}>
                {renderEditControls('interests')}
                
                <Typography variant="h2" sx={{ mb: 3 }}>Interests</Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {editingSection === 'interests' ? (
                    <>
                      {cvData.interests.map((interest, index) => (
                        <Box key={index} sx={{ position: 'relative' }}>
                          <TextField
                            variant="outlined"
                            size="small"
                            value={interest}
                            onChange={(e) => handleFieldChange('interests', null, [
                              ...cvData.interests.slice(0, index),
                              e.target.value,
                              ...cvData.interests.slice(index + 1)
                            ])}
                          />
                          <IconButton 
                            size="small" 
                            color="error"
                            sx={{ position: 'absolute', top: 0, right: 0, transform: 'translate(50%, -50%)' }}
                            onClick={() => handleArrayItemChange('interests', 'remove', index)}
                          >
                            ✕
                          </IconButton>
                        </Box>
                      ))}
                      <Button 
                        variant="outlined" 
                        size="small"
                        onClick={() => handleArrayItemChange('interests', 'add', null, "New Interest")}
                      >
                        Add Interest
                      </Button>
                    </>
                  ) : (
                    cvData.interests.map((interest, index) => (
                      <Typography key={index} variant="body1">
                        • {interest}
                      </Typography>
                    ))
                  )}
                </Box>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item xs={7}>
              {/* Summary */}
              <Box sx={{ 
                mb: 4,
                padding: 3,
                backgroundColor: darkMode ? '#2a2a2a' : '#f0f4f8',
                borderRadius: 2,
                boxShadow: 1,
                position: 'relative'
              }}>
                {renderEditControls('summary')}
                
                <Typography variant="h2" sx={{ mb: 2 }}>Professional Summary</Typography>
                
                {editingSection === 'summary' ? (
                  <TextareaAutosize
                    minRows={5}
                    value={cvData.summary}
                    onChange={(e) => handleFieldChange('summary', null, e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontFamily: fontFamily,
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      backgroundColor: 'transparent',
                      color: darkMode ? '#fff' : '#333',
                      border: '1px solid #ccc',
                      borderRadius: '6px'
                    }}
                  />
                ) : (
                  <Typography variant="body1">{cvData.summary}</Typography>
                )}
              </Box>
              
              {renderExperience()}
              {renderEducation()}
              
              {/* Projects */}
              <Box sx={{ 
                mb: 4,
                padding: 3,
                backgroundColor: darkMode ? '#2a2a2a' : '#f0f4f8',
                borderRadius: 2,
                boxShadow: 1,
                position: 'relative'
              }}>
                {renderEditControls('projects')}
                
                <Typography variant="h2" sx={{ mb: 3 }}>Projects</Typography>
                
                {cvData.projects.map((project, index) => (
                  <Box key={project.id} sx={{ mb: 3, position: 'relative' }}>
                    {editingSection === 'projects' && (
                      <Box sx={{ position: 'absolute', top: -10, right: 0 }}>
                        <Button 
                          size="small" 
                          color="error"
                          onClick={() => handleArrayItemChange('projects', 'remove', index)}
                        >
                          Remove
                        </Button>
                      </Box>
                    )}
                    
                    <Box sx={{ mb: 1 }}>
                      {editingSection === 'projects' ? (
                        <TextField
                          fullWidth
                          variant="standard"
                          value={project.name}
                          onChange={(e) => handleFieldChange('projects', 'name', e.target.value, index)}
                        />
                      ) : (
                        <Typography variant="h4" fontWeight="bold">{project.name}</Typography>
                      )}
                    </Box>
                    
                    <Box sx={{ mb: 1 }}>
                      {editingSection === 'projects' ? (
                        <TextField
                          fullWidth
                          variant="standard"
                          value={project.technologies}
                          onChange={(e) => handleFieldChange('projects', 'technologies', e.target.value, index)}
                        />
                      ) : (
                        <Typography variant="body2" fontStyle="italic" color="text.secondary">
                          {project.technologies}
                        </Typography>
                      )}
                    </Box>
                    
                    <Box>
                      {editingSection === 'projects' ? (
                        <TextareaAutosize
                          minRows={3}
                          value={project.description}
                          onChange={(e) => handleFieldChange('projects', 'description', e.target.value, index)}
                          style={{
                            width: '100%',
                            padding: '8px',
                            fontFamily: fontFamily,
                            fontSize: '0.95rem',
                            lineHeight: '1.7',
                            backgroundColor: 'transparent',
                            color: darkMode ? '#fff' : '#333',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                          }}
                        />
                      ) : (
                        <Typography variant="body1" sx={{ mt: 0.5 }}>{project.description}</Typography>
                      )}
                    </Box>
                  </Box>
                ))}
                
                {editingSection === 'projects' && (
                  <Button 
                    variant="outlined" 
                    fullWidth
                    onClick={() => handleArrayItemChange('projects', 'add', null, {
                      id: Date.now(),
                      name: "Project Name",
                      technologies: "Technologies Used",
                      description: "Project description"
                    })}
                    sx={{ mt: 2 }}
                  >
                    Add Project
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default ProfessionalCVTemplate;