import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Avatar,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import styled from "styled-components";
import { Print, Download, Palette } from "@mui/icons-material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useReactToPrint } from "react-to-print";

// === Theme Config ===
const themes = [
  {
    name: "Professional Blue",
    fonts: "'Lora', serif, 'Roboto', sans-serif",
    layout: "sidebar-left",
    primary: "#1e40af",
    secondary: "#3b82f6",
    bg: "#ffffff",
  },
  {
    name: "Elegant Green",
    fonts: "'Merriweather', serif, 'Open Sans', sans-serif",
    layout: "top-full-split",
    primary: "#047857",
    secondary: "#10b981",
    bg: "#f9fafb",
  },
  {
    name: "Modern Charcoal",
    fonts: "'Space Grotesk', sans-serif, 'Work Sans', sans-serif",
    layout: "big-name-pic",
    primary: "#1f2937",
    secondary: "#4b5563",
    bg: "#f3f4f6",
  },
];

const CVContainer = styled(Box)`
  max-width: 1100px;
  margin: auto;
  padding: 2rem;
  background: ${({ bg }) => bg};
  color: #000000;
  font-family: ${({ font }) => font};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  position: relative;
  
  @media print {
    padding: 1rem;
    max-width: 100%;
    box-shadow: none;
    
    .no-print {
      display: none;
    }
  }
`;

const Accent = styled(Box)`
  height: 3px;
  background: ${({ primary }) => primary};
  margin: 0.5rem 0 1rem;
`;

const SectionTitle = styled(Typography)`
  color: ${({ primary }) => primary} !important;
  font-weight: 600 !important;
  margin-bottom: 0.5rem !important;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ContactInfo = styled(Typography)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  
  &:before {
    content: "•";
    margin-right: 8px;
    color: ${({ primary }) => primary};
  }
`;

export default function SidebarSplitLayoutCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const t = themes[themeIndex];
  const cvRef = useRef();

  const nextTheme = () =>
    setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: "Ananya_Sharma_CV",
    pageStyle: `
      @page {
        size: A4;
        margin: 10mm;
      }
      body {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    `,
  });

  const handleDownloadPDF = () => {
    if (cvRef.current) {
      html2canvas(cvRef.current, { 
        scale: 3,
        useCORS: true,
        backgroundColor: t.bg
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 0;
        
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save("Ananya_Sharma_CV.pdf");
      });
    }
  };

  const data = {
    name: "Ananya Sharma",
    role: "Creative Brand Designer",
    phone: "+91 9112345678",
    email: "ananya.sharma@email.com",
    city: "Jaipur, India",
    socials: [
      { label: "LinkedIn", value: "/ananyasharma" },
      { label: "Behance", value: "/ananyadesign" },
      { label: "Portfolio", value: "ananya.design" },
    ],
    summary:
      "Creative Designer with 5+ years building visual stories, logos, packaging and campaigns for modern brands. Passionate about minimalist aesthetics and clear brand messages.",
    skills: [
      "Branding",
      "Graphic Design",
      "Logo Design",
      "UI/UX",
      "Figma",
      "Adobe Illustrator",
      "Photoshop",
      "InDesign",
      "Typography",
      "Print Design",
      "Packaging",
    ],
    languages: ["English (Fluent)", "Hindi (Native)"],
    interests: ["Art Exhibits", "Calligraphy", "Blogging", "Photography"],
    experience: [
      {
        title: "Senior Brand Designer",
        company: "XYZ Creative",
        period: "2021–Present",
        points: [
          "Delivered 40+ full brand identity kits",
          "Managed client presentations and approvals",
          "Coordinated print-ready files with printers",
          "Mentored 5 junior designers",
        ],
      },
      {
        title: "Junior Designer",
        company: "ABC Studio",
        period: "2019–2021",
        points: [
          "Created social & digital ad creatives",
          "Assisted senior designers with client proposals",
          "Contributed to team brainstorming sessions",
        ],
      },
      {
        title: "Intern Designer",
        company: "Creativa Agency",
        period: "2018–2019",
        points: ["Supported logo design tasks", "Learned layout & typography"],
      },
    ],
    education: [
      {
        degree: "BA Design",
        institution: "Delhi University",
        year: "2020"
      },
      {
        degree: "Diploma in Graphic Design",
        institution: "Arena Multimedia",
        year: "2018"
      },
    ],
    projects: [
      "Urban Luxe Brand Identity",
      "NGO Campaign Posters",
      "Lifestyle Packaging Design",
      "Fashion Lookbook",
    ],
  };

  return (
    <CVContainer ref={cvRef} font={t.fonts} bg={t.bg}>
      {/* Header with controls */}
      <Box position="absolute" top={16} right={16} className="no-print">
        <IconButton onClick={nextTheme} sx={{ color: t.primary }}>
          <Palette />
        </IconButton>
        <IconButton onClick={handlePrint} sx={{ color: t.primary }}>
          <Print />
        </IconButton>
        <IconButton onClick={handleDownloadPDF} sx={{ color: t.primary }}>
          <Download />
        </IconButton>
      </Box>

      {/* === Theme 1: Sidebar Left === */}
      {t.layout === "sidebar-left" && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} sx={{ borderRight: `1px solid ${t.primary}20`, pr: 2 }}>
            <Box textAlign="center" mb={3}>
              <Avatar sx={{ 
                width: 120, 
                height: 120, 
                margin: '0 auto 16px',
                border: `3px solid ${t.primary}`
              }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>{data.name}</Typography>
              <Typography variant="h6" sx={{ color: t.primary, fontWeight: 600 }}>{data.role}</Typography>
            </Box>
            
            <SectionTitle variant="h6" primary={t.primary}>Contact</SectionTitle>
            <ContactInfo primary={t.primary}>{data.phone}</ContactInfo>
            <ContactInfo primary={t.primary}>{data.email}</ContactInfo>
            <ContactInfo primary={t.primary}>{data.city}</ContactInfo>
            
            <Box mt={2}>
              {data.socials.map((s) => (
                <ContactInfo key={s.label} primary={t.primary}>
                  {s.label}: <Box component="span" sx={{ fontWeight: 500 }}>{s.value}</Box>
                </ContactInfo>
              ))}
            </Box>
            
            <Accent primary={t.primary} />
            <SectionTitle variant="h6" primary={t.primary}>Skills</SectionTitle>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {data.skills.map((skill) => (
                <Chip 
                  key={skill} 
                  label={skill} 
                  sx={{ 
                    backgroundColor: `${t.primary}10`, 
                    border: `1px solid ${t.primary}30`,
                    borderRadius: '4px',
                    fontSize: '0.85rem'
                  }} 
                />
              ))}
            </Box>
            
            <Accent primary={t.primary} />
            <SectionTitle variant="h6" primary={t.primary}>Languages</SectionTitle>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
              {data.languages.map((l) => (
                <Chip 
                  key={l} 
                  label={l} 
                  sx={{ 
                    backgroundColor: `${t.primary}10`, 
                    border: `1px solid ${t.primary}30`,
                    borderRadius: '4px',
                    fontSize: '0.85rem'
                  }} 
                />
              ))}
            </Box>
            
            <SectionTitle variant="h6" primary={t.primary}>Interests</SectionTitle>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {data.interests.map((i) => (
                <Chip 
                  key={i} 
                  label={i} 
                  sx={{ 
                    backgroundColor: `${t.primary}10`, 
                    border: `1px solid ${t.primary}30`,
                    borderRadius: '4px',
                    fontSize: '0.85rem'
                  }} 
                />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <SectionTitle variant="h6" primary={t.primary}>Summary</SectionTitle>
            <Typography paragraph sx={{ lineHeight: 1.7, mb: 3 }}>{data.summary}</Typography>
            
            <SectionTitle variant="h6" primary={t.primary}>Experience</SectionTitle>
            {data.experience.map((exp) => (
              <Box key={exp.title} mb={3}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{exp.title}</Typography>
                <Typography variant="body2" sx={{ color: t.primary, fontStyle: 'italic' }}>
                  {exp.company} • {exp.period}
                </Typography>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                  {exp.points.map((pt) => (
                    <li key={pt} style={{ marginBottom: '0.4rem' }}>{pt}</li>
                  ))}
                </ul>
              </Box>
            ))}
            
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <SectionTitle variant="h6" primary={t.primary}>Projects</SectionTitle>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {data.projects.map((p) => (
                    <li key={p} style={{ marginBottom: '0.4rem' }}>{p}</li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={6}>
                <SectionTitle variant="h6" primary={t.primary}>Education</SectionTitle>
                {data.education.map((e) => (
                  <Box key={e.degree} mb={2}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{e.degree}</Typography>
                    <Typography variant="body2">{e.institution}</Typography>
                    <Typography variant="body2" sx={{ color: t.primary }}>{e.year}</Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}

      {/* === Theme 2: Top Full + Split === */}
      {t.layout === "top-full-split" && (
        <>
          <Box textAlign="center" mb={3}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>{data.name}</Typography>
            <Typography variant="h6" sx={{ color: t.primary, fontWeight: 600 }}>{data.role}</Typography>
            <Accent primary={t.primary} />
            <Typography sx={{ fontWeight: 500 }}>{data.phone} | {data.email} | {data.city}</Typography>
            <Box mt={1} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              {data.socials.map((s) => (
                <Typography key={s.label} sx={{ fontWeight: 500 }}>
                  {s.label}: <Box component="span" sx={{ fontWeight: 600 }}>{s.value}</Box>
                </Typography>
              ))}
            </Box>
          </Box>
          
          <Accent primary={t.primary} />
          <SectionTitle variant="h6" primary={t.primary}>Summary</SectionTitle>
          <Typography paragraph sx={{ lineHeight: 1.7, mb: 3 }}>{data.summary}</Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h6" primary={t.primary}>Skills</SectionTitle>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                {data.skills.map((skill) => (
                  <Chip 
                    key={skill} 
                    label={skill} 
                    sx={{ 
                      backgroundColor: `${t.primary}10`, 
                      border: `1px solid ${t.primary}30`,
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }} 
                  />
                ))}
              </Box>
              
              <SectionTitle variant="h6" primary={t.primary}>Languages</SectionTitle>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                {data.languages.map((l) => (
                  <Chip 
                    key={l} 
                    label={l} 
                    sx={{ 
                      backgroundColor: `${t.primary}10`, 
                      border: `1px solid ${t.primary}30`,
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }} 
                  />
                ))}
              </Box>
              
              <SectionTitle variant="h6" primary={t.primary}>Interests</SectionTitle>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {data.interests.map((i) => (
                  <Chip 
                    key={i} 
                    label={i} 
                    sx={{ 
                      backgroundColor: `${t.primary}10`, 
                      border: `1px solid ${t.primary}30`,
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }} 
                  />
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h6" primary={t.primary}>Experience</SectionTitle>
              {data.experience.map((exp) => (
                <Box key={exp.title} mb={3}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{exp.title}</Typography>
                  <Typography variant="body2" sx={{ color: t.primary, fontStyle: 'italic' }}>
                    {exp.company} • {exp.period}
                  </Typography>
                  <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    {exp.points.map((pt) => (
                      <li key={pt} style={{ marginBottom: '0.4rem' }}>{pt}</li>
                    ))}
                  </ul>
                </Box>
              ))}
              
              <SectionTitle variant="h6" primary={t.primary}>Projects</SectionTitle>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {data.projects.map((p) => (
                  <li key={p} style={{ marginBottom: '0.4rem' }}>{p}</li>
                ))}
              </ul>
              
              <SectionTitle variant="h6" primary={t.primary}>Education</SectionTitle>
              {data.education.map((e) => (
                <Box key={e.degree} mb={2}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{e.degree}</Typography>
                  <Typography variant="body2">{e.institution}</Typography>
                  <Typography variant="body2" sx={{ color: t.primary }}>{e.year}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </>
      )}

      {/* === Theme 3: Big Name + Pic === */}
      {t.layout === "big-name-pic" && (
        <>
          <Grid container spacing={2} alignItems="center" mb={3}>
            <Grid item xs={8}>
              <Typography variant="h3" sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>{data.name}</Typography>
              <Typography variant="h5" sx={{ color: t.primary, fontWeight: 600 }}>{data.role}</Typography>
            </Grid>
            <Grid item xs={4} textAlign="right">
              <Avatar sx={{ 
                width: 120, 
                height: 120, 
                border: `3px solid ${t.primary}`,
                margin: '0 auto'
              }} />
            </Grid>
          </Grid>
          
          <Box sx={{ 
            backgroundColor: `${t.primary}10`, 
            padding: '1rem',
            borderRadius: '8px',
            mb: 3
          }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography sx={{ fontWeight: 500 }}>{data.phone}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ fontWeight: 500 }}>{data.email}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ fontWeight: 500 }}>{data.city}</Typography>
              </Grid>
            </Grid>
          </Box>
          
          <Box mb={2} sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
            {data.socials.map((s) => (
              <Typography key={s.label} sx={{ fontWeight: 500 }}>
                {s.label}: <Box component="span" sx={{ fontWeight: 600 }}>{s.value}</Box>
              </Typography>
            ))}
          </Box>
          
          <Accent primary={t.primary} />
          <SectionTitle variant="h6" primary={t.primary}>Summary</SectionTitle>
          <Typography paragraph sx={{ lineHeight: 1.7, mb: 3 }}>{data.summary}</Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h6" primary={t.primary}>Skills</SectionTitle>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 3 }}>
                {data.skills.map((skill) => (
                  <Chip 
                    key={skill} 
                    label={skill} 
                    sx={{ 
                      backgroundColor: `${t.primary}10`, 
                      border: `1px solid ${t.primary}30`,
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }} 
                  />
                ))}
              </Box>
              
              <SectionTitle variant="h6" primary={t.primary}>Languages</SectionTitle>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 3 }}>
                {data.languages.map((l) => (
                  <Chip 
                    key={l} 
                    label={l} 
                    sx={{ 
                      backgroundColor: `${t.primary}10`, 
                      border: `1px solid ${t.primary}30`,
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }} 
                  />
                ))}
              </Box>
              
              <SectionTitle variant="h6" primary={t.primary}>Interests</SectionTitle>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {data.interests.map((i) => (
                  <Chip 
                    key={i} 
                    label={i} 
                    sx={{ 
                      backgroundColor: `${t.primary}10`, 
                      border: `1px solid ${t.primary}30`,
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }} 
                  />
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <SectionTitle variant="h6" primary={t.primary}>Experience</SectionTitle>
              {data.experience.map((exp) => (
                <Box key={exp.title} mb={3}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{exp.title}</Typography>
                  <Typography variant="body2" sx={{ color: t.primary, fontStyle: 'italic' }}>
                    {exp.company} • {exp.period}
                  </Typography>
                  <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    {exp.points.map((pt) => (
                      <li key={pt} style={{ marginBottom: '0.4rem' }}>{pt}</li>
                    ))}
                  </ul>
                </Box>
              ))}
            </Grid>
          </Grid>
          
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <SectionTitle variant="h6" primary={t.primary}>Projects</SectionTitle>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {data.projects.map((p) => (
                  <li key={p} style={{ marginBottom: '0.4rem' }}>{p}</li>
                ))}
              </ul>
            </Grid>
            <Grid item xs={6}>
              <SectionTitle variant="h6" primary={t.primary}>Education</SectionTitle>
              {data.education.map((e) => (
                <Box key={e.degree} mb={2}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{e.degree}</Typography>
                  <Typography variant="body2">{e.institution}</Typography>
                  <Typography variant="body2" sx={{ color: t.primary }}>{e.year}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </>
      )}

      {/* === Theme Switch === */}
      <Box textAlign="center" mt={4} className="no-print">
        <Button 
          variant="contained" 
          onClick={nextTheme}
          startIcon={<Palette />}
          sx={{ 
            backgroundColor: t.primary,
            '&:hover': { backgroundColor: t.primary }
          }}
        >
          Switch Theme ({t.name})
        </Button>
      </Box>
    </CVContainer>
  );
}