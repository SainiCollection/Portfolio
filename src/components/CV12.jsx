import React, { useState, useRef } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  IconButton,
  Button,
} from "@mui/material";
import { LinkedIn, GitHub, Print, LightMode, DarkMode } from "@mui/icons-material";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";

// Themes
const themes = [
  {
    name: "Sky Blue",
    primary: "#0EA5E9",
    text: "#111827",
    bg: "#F0F9FF",
    font: "Fira Sans, sans-serif",
  },
  {
    name: "Sunset Orange",
    primary: "#FB923C",
    text: "#111827",
    bg: "#FFF7ED",
    font: "Inter, sans-serif",
  },
  {
    name: "Mint Green",
    primary: "#10B981",
    text: "#111827",
    bg: "#ECFDF5",
    font: "Nunito, sans-serif",
  },
  {
    name: "Classic Black",
    primary: "#111827",
    text: "#F9FAFB",
    bg: "#1F2937",
    font: "Manrope, sans-serif",
  },
];

const Container = styled(Box)`
  max-width: 1100px;
  margin: auto;
  padding: 2rem;
`;

export default function CardDeckCV() {
  const [themeIndex, setThemeIndex] = useState(0);
  const active = themes[themeIndex];
  const printRef = useRef();

  const theme = createTheme({
    palette: {
      background: { default: active.bg },
      primary: { main: active.primary },
      text: { primary: active.text },
    },
    typography: {
      fontFamily: active.font,
    },
  });

  const nextTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container ref={printRef}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h3" color="primary">Arjun Gupta</Typography>
          <Typography variant="body1">Chandigarh, India</Typography>
          <Typography variant="body2">+91 9876098765 | arjun.gupta@email.com</Typography>
          <IconButton color="primary"><LinkedIn /></IconButton>
          <IconButton color="primary"><GitHub /></IconButton>
          <IconButton color="primary" onClick={nextTheme}>
            {themeIndex % 2 === 0 ? <DarkMode /> : <LightMode />}
          </IconButton>
          <IconButton color="primary" onClick={handlePrint}><Print /></IconButton>
        </Box>

        <Grid container spacing={3}>
          {/* Summary */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="primary">Summary</Typography>
                <Typography>"Frontend Engineer with strong React & Firebase skills."</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Skills */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="primary">Skills</Typography>
                {["React", "MUI", "Firebase"].map((s) => (
                  <Chip key={s} label={s} sx={{ m: 0.5 }} />
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Experience */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="primary">Experience</Typography>
                <Typography>Frontend Engineer @ DEF Pvt Ltd</Typography>
                <Typography variant="body2">2022–Now</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Education */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="primary">Education</Typography>
                <Typography>B.Sc IT, PU, 2021</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Projects */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="primary">Projects</Typography>
                <Typography>CRM Tool</Typography>
                <Typography>Portfolio Gen</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Certificates */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="primary">Certificates</Typography>
                <Typography>Google UX</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Achievements */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="primary">Achievements</Typography>
                <Typography>Top Speaker</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Awards */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="primary">Awards</Typography>
                <Typography>Dev Award</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Languages + Interests */}
          <Grid item xs={12} md={12}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="primary">Languages & Interests</Typography>
                <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                  {["English", "Hindi", "Photography", "Tech Blogging"].map((item) => (
                    <Chip key={item} label={item} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary" onClick={handlePrint}>
            Download PDF
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
