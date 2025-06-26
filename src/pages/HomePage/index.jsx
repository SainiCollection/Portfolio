// src/pages/HomePage/index.jsx
// This component represents the application's home or landing page.
// It now integrates the 3D scroll effect component.

import React from 'react';
import { Box, Typography } from '@mui/material'; // MUI components for layout and text
import ThreeDScrollEffect from '../../Components/Common/ThreeDScrollEffect'; // Import the new 3D component

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 180px)', // Adjust height based on header to fill remaining space
        p: 2, // Padding
        textAlign: 'center', // Center text alignment
      }}
    >
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'extrabold', color: 'text.primary', mb: 2 }}>
        Welcome to Resume Now!
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
        Build your professional resume quickly and easily.
      </Typography>

      {/* Integration of the 3D scroll effect component */}
      {/* We wrap it in a Box to control its width and margins within the page layout */}
      <Box sx={{ width: '100%', maxWidth: '600px', mb: 4, mt: 4 }}>
        <ThreeDScrollEffect />
      </Box>

      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Navigate to the Templates page to get started or learn more about our features.
      </Typography>
    </Box>
  );
};

export default HomePage;