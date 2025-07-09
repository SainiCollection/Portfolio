import React from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

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

import Portfolio1 from "../components/Portfolio1";
import Portfolio2 from "../components/Portfolio2";
import Portfolio3 from "../components/Portfolio3";
import Portfolio4 from "../components/Portfolio4";

export default function Designpreview() {
  const { type, id } = useParams();

  const cvDesigns = [
    { id: 1, Component: CV1 },
    { id: 2, Component: CV2 },
    { id: 3, Component: CV3 },
    { id: 4, Component: CV4 },
    { id: 5, Component: CV5 },
    { id: 6, Component: CV6 },
    { id: 7, Component: CV7 },
    { id: 8, Component: CV8 },
    { id: 9, Component: CV9 },
    { id: 10, Component: CV10 },
    { id: 11, Component: CV11 },
    { id: 12, Component: CV12 },
    { id: 13, Component: CV13 },
    { id: 14, Component: CV14 },
    { id: 15, Component: CV15 },
    { id: 16, Component: CV16 },
    { id: 17, Component: CV17 },
    { id: 18, Component: CV18 },
    { id: 19, Component: CV19 },
    { id: 20, Component: CV20 },
    { id: 21, Component: CV21 },
    { id: 22, Component: CV22 },
    { id: 23, Component: CV23 },
  

  ];

  const portfolioDesigns = [
    { id: 1, Component: Portfolio1 },
    { id: 2, Component: Portfolio2 },
    { id: 3, Component: Portfolio3 },
    { id: 4, Component: Portfolio4 },
    // Add more portfolio designs as needed
  ];

  const designsToShow = type === "cv" ? cvDesigns : portfolioDesigns;
  const design = designsToShow.find((d) => d.id === Number(id));

  if (!design) {
    return <div>Design Not Found</div>;
  }

  const { Component } = design;

  return (
    <Box sx={{ width: "100%", my: 2 }}>
      {/* Better Back Button Toolbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          p: 2,
          borderBottom: "1px solid #eee",
          mb: 2,
          "@media print": {
            display: "none", // ✅ Print pe gayab
          },
        }}
      >
        <Button
          component={Link}
          to="/Designpage"
          variant="contained"
          color="primary"
        >
          ⬅ Back to Designs
        </Button>
      </Box>

      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          border: "1px solid #ddd",
          borderRadius: 2,
          p: 2,
        }}
      >
        <Component />
      </Box>
    </Box>
  );
}
