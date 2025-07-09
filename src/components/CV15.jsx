import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import {
  LinkedIn,
  Print,
  LightMode,
  DarkMode,
  SaveAlt,
} from "@mui/icons-material";
import styled from "styled-components";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// === Themes ===
const themes = [
  {
    name: "Royal Blue",
    accent: "#3B82F6",
    bg: "#FFFFFF",
    text: "#111827",
    font: "'Inter', sans-serif",
  },
  {
    name: "Deep Olive",
    accent: "#556B2F",
    bg: "#FFFFFF",
    text: "#1F2937",
    font: "'Manrope', sans-serif",
  },
  {
    name: "Warm Gray",
    accent: "#6B7280",
    bg: "#FAFAFA",
    text: "#111827",
    font: "'Poppins', sans-serif",
  },
  {
    name: "Charcoal Black",
    accent: "#111827",
    bg: "#FFFFFF",
    text: "#111827",
    font: "'Space Grotesk', sans-serif",
  },
];

const Container = styled(Box)`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  background: ${({ bg }) => bg};
  color: ${({ text }) => text};
  font-family: ${({ font }) => font};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  min-height: 100vh;
  
  @media print {
    padding: 1rem;
    max-width: 100%;
    box-shadow: none;
    
    .no-print {
      display: none;
    }
  }
`;

const Section = styled(Box)`
  margin: 1.5rem 0;
`;

const DividerAccent = styled(Divider)`
  border-color: ${({ accent }) => accent};
  margin: 0.8rem 0;
  border-width: 2px;
`;

const IconButtonStyled = styled(IconButton)`
  border: 1px solid ${({ accent }) => accent};
  margin: 0 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ accent }) => accent};
    color: white;
  }
`;

const DownloadButton = styled(Button)`
  background-color: ${({ accent }) => accent};
  color: white;
  margin-top: 1rem;
  padding: 10px 24px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${({ accent }) => accent};
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

export default function CreativeBrandDesignerCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const t = themes[themeIndex];
  const printRef = useRef();

  const nextTheme = () =>
    setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
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
    if (printRef.current) {
      html2canvas(printRef.current, { 
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

  return (
    <Container bg={t.bg} text={t.text} font={t.font} ref={printRef}>
      {/* === Header === */}
      <Box textAlign="center" position="relative" pb={2}>
        <Box position="absolute" top={0} right={0} className="no-print">
          <IconButtonStyled accent={t.accent} onClick={nextTheme}>
            {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
          </IconButtonStyled>
          <IconButtonStyled accent={t.accent} onClick={handlePrint}>
            <Print />
          </IconButtonStyled>
          <IconButtonStyled accent={t.accent} onClick={handleDownloadPDF}>
            <SaveAlt />
          </IconButtonStyled>
        </Box>
        
        <Typography variant="h3" sx={{ fontWeight: "bold", marginTop: 4, letterSpacing: '0.5px' }}>
          Ananya Sharma
        </Typography>
        <Typography variant="h5" sx={{ 
          color: t.accent, 
          fontWeight: 600, 
          letterSpacing: 1,
          textShadow: '0px 1px 2px rgba(0,0,0,0.1)',
          mt: 1
        }}>
          Creative Brand Designer
        </Typography>
        <Typography variant="body1" mt={2} sx={{ fontWeight: 500 }}>
          +91 9112345678 | ananya.sharma@email.com | Jaipur, Rajasthan, India
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          LinkedIn: /ananyasharma | Behance: /ananyadesign | Portfolio: ananya.design
        </Typography>
      </Box>

      {/* === Summary === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ 
          color: t.accent, 
          fontWeight: 700, 
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Professional Summary
        </Typography>
        <Typography variant="body1" mt={1} sx={{ lineHeight: 1.7 }}>
          Creative Brand Designer with 4+ years of experience crafting modern brand identities,
          visual campaigns, and high-impact graphics for startups and agencies worldwide.
          Specialized in transforming brand visions into compelling visual narratives that
          resonate with target audiences and drive engagement.
        </Typography>
      </Section>

      {/* === Skills === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ 
          color: t.accent, 
          fontWeight: 700, 
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Core Competencies
        </Typography>
        <Grid container spacing={1} mt={1}>
          {[
            "Branding Strategy", "Visual Identity Design", "Logo Design", 
            "Packaging Design", "UI/UX Design", "Figma", 
            "Adobe Creative Suite", "Typography", "Art Direction"
          ].map((s) => (
            <Grid item key={s}>
              <Chip 
                label={s} 
                sx={{ 
                  backgroundColor: `${t.accent}20`, 
                  color: t.text,
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  padding: '4px 8px'
                }} 
              />
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* === Languages & Interests === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ 
          color: t.accent, 
          fontWeight: 700, 
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Languages & Interests
        </Typography>
        <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
          {["English (Fluent)", "Hindi (Native)"].map((l) => (
            <Chip 
              key={l} 
              label={l} 
              sx={{ 
                backgroundColor: `${t.accent}20`, 
                color: t.text,
                fontWeight: 500,
                fontSize: '0.9rem'
              }} 
            />
          ))}
          {["Art Exhibitions", "Travel Blogging", "Calligraphy", "Minimalist Design"].map((i) => (
            <Chip 
              key={i} 
              label={i} 
              sx={{ 
                backgroundColor: `${t.accent}20`, 
                color: t.text,
                fontWeight: 500,
                fontSize: '0.9rem'
              }} 
            />
          ))}
        </Box>
      </Section>

      {/* === Page Break === */}
      <Box sx={{ pageBreakAfter: "always" }}></Box>

      {/* === Experience === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ 
          color: t.accent, 
          fontWeight: 700, 
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Professional Experience
        </Typography>
        
        <Box mt={2}>
          <Typography variant="h6" fontWeight={600} sx={{ fontSize: '1.1rem' }}>
            Senior Brand Designer @ XYZ Creative
          </Typography>
          <Typography variant="subtitle1" fontStyle="italic" color={t.accent} sx={{ mt: 0.5 }}>
            2021 – Present | Jaipur, Rajasthan
          </Typography>
          <ul style={{ 
            paddingLeft: '1.5rem', 
            marginTop: '0.5rem',
            listStyleType: 'circle'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>Led comprehensive brand development for 30+ startups across diverse industries</li>
            <li style={{ marginBottom: '0.5rem' }}>Designed visual identities, brand guidelines, and marketing collateral packages</li>
            <li style={{ marginBottom: '0.5rem' }}>Collaborated with development teams to ensure seamless digital implementation</li>
            <li>Mentored junior designers and managed client relationships</li>
          </ul>
        </Box>
        
        <Box mt={2}>
          <Typography variant="h6" fontWeight={600} sx={{ fontSize: '1.1rem' }}>
            Junior Designer @ ABC Studio
          </Typography>
          <Typography variant="subtitle1" fontStyle="italic" color={t.accent} sx={{ mt: 0.5 }}>
            2019 – 2021 | New Delhi
          </Typography>
          <ul style={{ 
            paddingLeft: '1.5rem', 
            marginTop: '0.5rem',
            listStyleType: 'circle'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>Created social media campaigns with 200% engagement growth for key clients</li>
            <li style={{ marginBottom: '0.5rem' }}>Produced print collateral for high-profile industry events</li>
            <li>Assisted in developing pitch materials for $500k+ client projects</li>
          </ul>
        </Box>
      </Section>

      {/* === Education === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ 
          color: t.accent, 
          fontWeight: 700, 
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Education
        </Typography>
        <Box mt={1}>
          <Typography variant="h6" fontWeight={600} sx={{ fontSize: '1.1rem' }}>
            BA in Graphic Design
          </Typography>
          <Typography variant="subtitle1" fontStyle="italic" color={t.accent} sx={{ mt: 0.5 }}>
            Delhi University | 2016 – 2020
          </Typography>
          <Typography>Specialized in Brand Identity Systems</Typography>
        </Box>
      </Section>

      {/* === Projects === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ 
          color: t.accent, 
          fontWeight: 700, 
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Signature Projects
        </Typography>
        <Box mt={1}>
          <Typography variant="h6" fontWeight={600} sx={{ fontSize: '1.1rem' }}>
            Urban Chic Lifestyle Brand
          </Typography>
          <Typography>Complete visual identity system including packaging, web UI, and marketing collateral</Typography>
        </Box>
        <Box mt={1}>
          <Typography variant="h6" fontWeight={600} sx={{ fontSize: '1.1rem' }}>
            Social Awareness Campaign
          </Typography>
          <Typography>Visual storytelling assets for national NGO reaching 2M+ viewers</Typography>
        </Box>
      </Section>

      {/* === Certificates & Achievements === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ 
          color: t.accent, 
          fontWeight: 700, 
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Accolades & Credentials
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ borderLeft: `3px solid ${t.accent}`, pl: 1.5, py: 0.5 }}>
              <Typography fontWeight={600}>Adobe Certified Expert</Typography>
              <Typography>Illustrator Specialist</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ borderLeft: `3px solid ${t.accent}`, pl: 1.5, py: 0.5 }}>
              <Typography fontWeight={600}>Google UX Design</Typography>
              <Typography>Professional Certificate</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ borderLeft: `3px solid ${t.accent}`, pl: 1.5, py: 0.5 }}>
              <Typography fontWeight={600}>Design India Spotlight</Typography>
              <Typography>Featured Designer 2023</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ borderLeft: `3px solid ${t.accent}`, pl: 1.5, py: 0.5 }}>
              <Typography fontWeight={600}>Dribbble Community</Typography>
              <Typography>Top 10% Designer</Typography>
            </Box>
          </Grid>
        </Grid>
      </Section>

      {/* === Awards === */}
      <Section>
        <DividerAccent accent={t.accent} />
        <Typography variant="h6" sx={{ 
          color: t.accent, 
          fontWeight: 700, 
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Awards
        </Typography>
        <Box mt={1} display="flex" alignItems="center">
          <Box sx={{ 
            backgroundColor: `${t.accent}20`, 
            borderRadius: '50%', 
            width: 40, 
            height: 40, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mr: 2
          }}>
            <span role="img" aria-label="trophy">🏆</span>
          </Box>
          <Typography variant="h6" fontWeight={600} sx={{ fontSize: '1.1rem' }}>
            Rising Star Designer Award 2022
          </Typography>
        </Box>
      </Section>

      {/* === Footer === */}
      <Box textAlign="center" mt={4} className="no-print">
        <DownloadButton 
          variant="contained" 
          onClick={handleDownloadPDF}
          accent={t.accent}
          startIcon={<SaveAlt />}
          sx={{ borderRadius: '30px' }}
        >
          Download PDF Portfolio
        </DownloadButton>
        <Typography variant="body2" mt={2} color="textSecondary">
          Crafted with passion • ananya.design
        </Typography>
      </Box>
    </Container>
  );
}