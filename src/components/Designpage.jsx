import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Card,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom"; 

// === Import all your CVs ===
import CV1 from "../components/CV1";
import CV2 from "../components/CV2";
import CV3 from "../components/CV3";
import CV4 from "../components/CV4";
import CV5 from "../components/CV5";
import CV6 from "../components/CV6";
import CV7 from "../components/CV7";
import CV8 from "../components/CV8";
import CV9 from "../components/CV9";
import CV10 from "../components/CV10";
import CV11 from "../components/CV11";
import CV12 from "../components/CV12";
import CV13 from "../components/CV13";
import CV14 from "../components/CV14";
import CV15 from "../components/CV15";
import CV16 from "../components/CV16";
import CV17 from "../components/CV17";
import CV18 from "../components/CV18";
import CV19 from "../components/CV19";
import CV20 from "../components/CV20";
import CV21 from "../components/CV21";
import CV22 from "../components/CV22";
import CV23 from "../components/CV23";

// === Import all your Portfolios ===
import Portfolio1 from "../components/Portfolio1";
import Portfolio2 from "../components/Portfolio2";
import Portfolio3 from "../components/Portfolio3";
import Portfolio4 from "../components/Portfolio4";

export default function DesignPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedCategory, setSelectedCategory] = useState("cv");

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const cvDesigns = [
    { id: 1, name: "Professional Classic", Component: CV1, scale: 0.25, baseWidth: 800 },
    { id: 2, name: "Modern Minimalist", Component: CV2, scale: 0.25, baseWidth: 800 },
    { id: 3, name: "Executive Style", Component: CV3, scale: 0.25, baseWidth: 800 },
    { id: 4, name: "Creative Edge", Component: CV4, scale: 0.25, baseWidth: 800 },
    { id: 5, name: "Clean Layout", Component: CV5, scale: 0.25, baseWidth: 800 },
    { id: 6, name: "Bold Look", Component: CV6, scale: 0.25, baseWidth: 800 },
    { id: 7, name: "Simple Pro", Component: CV7, scale: 0.25, baseWidth: 800 },
    { id: 8, name: "Fresh Format", Component: CV8, scale: 0.25, baseWidth: 800 },
    { id: 9, name: "Creative Vision", Component: CV9, scale: 0.25, baseWidth: 800 },
    { id: 10, name: "Elegant Design", Component: CV10, scale: 0.25, baseWidth: 800 },
    { id: 11, name: "Professional Touch", Component: CV11, scale: 0.25, baseWidth: 800 },
    { id: 12, name: "Modern Professional", Component: CV12, scale: 0.25, baseWidth: 800 },
    { id: 13, name: "Sophisticated Style", Component: CV13, scale: 0.25, baseWidth: 800 },
    { id: 14, name: "Dynamic Layout", Component: CV14, scale: 0.25, baseWidth: 800 },
    { id: 15, name: "Creative Impact", Component: CV15, scale: 0.25, baseWidth: 800 },
    { id: 16, name: "Executive Edge", Component: CV16, scale: 0.25, baseWidth: 800 },
    { id: 17, name: "Professional Appeal", Component: CV17, scale: 0.25, baseWidth: 800 },
    { id: 18, name: "Modern Elegance", Component: CV18, scale: 0.25, baseWidth: 800 },
    { id: 19, name: "Creative Professional", Component: CV19, scale: 0.25, baseWidth: 800 },
    { id: 20, name: "Bold Professionalism", Component: CV20, scale: 0.25, baseWidth: 800 },
    { id: 21, name: "Elegant Professional", Component: CV21, scale: 0.25, baseWidth: 800 },
    { id: 22, name: "Sophisticated Professional", Component: CV22, scale: 0.25, baseWidth: 800 },
    { id: 23, name: "Dynamic Professional", Component: CV23, scale: 0.25, baseWidth: 800 },
  ];

  const portfolioDesigns = [
    { id: 1, name: "Creative Portfolio", Component: Portfolio1, scale: 0.3, baseWidth: 1000 },
    { id: 2, name: "Developer Portfolio", Component: Portfolio2, scale: 0.3, baseWidth: 1000 },
    { id: 3, name: "Elegant Portfolio", Component: Portfolio3, scale: 0.3, baseWidth: 1000 },
    { id: 4, name: "Modern Portfolio", Component: Portfolio4, scale: 0.3, baseWidth: 1000 },
  ];

  const designsToShow = selectedCategory === "cv" ? cvDesigns : portfolioDesigns;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 4,
        background: "linear-gradient(to bottom, #f0f4f8, #e6edf5)",
      }}
    >
      <Container maxWidth="xl" sx={{ px: isMobile ? 1 : 3 }}>
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#1a202c",
              letterSpacing: "-0.5px",
              mb: 1,
            }}
          >
            Professional Templates
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#4a5568",
              fontSize: "1.1rem",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Select a professionally designed template to showcase your skills
            and experience
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 5,
            borderBottom: "1px solid #e2e8f0",
            mx: isMobile ? 0 : 4,
          }}
        >
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant={isMobile ? "fullWidth" : "standard"}
            textColor="primary"
            indicatorColor="primary"
            sx={{
              "& .MuiTabs-indicator": {
                height: 4,
                borderRadius: "4px 4px 0 0",
              },
            }}
          >
            <Tab
              label="CV Templates"
              value="cv"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                fontSize: isMobile ? "0.9rem" : "1rem",
                py: 2,
                px: isMobile ? 1 : 3,
                minHeight: "auto",
              }}
            />
            <Tab
              label="Portfolio Templates"
              value="portfolio"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                fontSize: isMobile ? "0.9rem" : "1rem",
                py: 2,
                px: isMobile ? 1 : 3,
                minHeight: "auto",
              }}
            />
          </Tabs>
        </Box>

        <Grid container spacing={3} justifyContent="flex-start">
          {designsToShow.map(
            ({ id, name, Component, scale, baseWidth }) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={`${selectedCategory}-${id}`}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%",
                    maxWidth: 320,
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "none",
                    background: "#ffffff",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  {/* === Individual Preview === */}
                  <Box
                    sx={{
                      background: "#f8fafc",
                      height: 260,
                      width: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      overflow: "hidden",
                      position: "relative",
                      borderTop: "1px solid #edf2f7",
                      borderBottom: "1px solid #edf2f7",
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 8,
                        background: "linear-gradient(to right, #4c6fff, #7e5cff)",
                        opacity: 0.2,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        transform: `scale(${scale})`,
                        transformOrigin: "top center",
                        pointerEvents: "none",
                        width: `${baseWidth}px`,
                      }}
                    >
                      <Component />
                    </Box>
                  </Box>

                  <Box sx={{ p: 3, pt: 2 }}>
                    <Button
                      component={Link}
                      to={`/Designpreview/${selectedCategory}/${id}`}
                      fullWidth
                      variant="contained"
                      disableElevation
                      sx={{
                        fontWeight: 700,
                        textTransform: "none",
                        fontSize: "1rem",
                        py: 1.5,
                        borderRadius: 2,
                        background: "linear-gradient(to right, #4c6fff, #7e5cff)",
                        "&:hover": {
                          background: "linear-gradient(to right, #3a5bff, #6a4cff)",
                        },
                      }}
                    >
                      Use This Template
                    </Button>
                  </Box>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
}
