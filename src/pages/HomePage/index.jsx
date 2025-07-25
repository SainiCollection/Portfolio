// src/pages/HomePage/index.jsx
// This component represents the application's home or landing page.
// It now integrates the 3D scroll effect component and an example TemplateCard.

import React from 'react';
import { Box, Typography } from '@mui/material';
import ThreeDScrollEffect from '../../Components/Common/ThreeDScrollEffect';
import TemplateCard from '../../Components/Templates/TemplateCard'; // Import TemplateCard
import { initialTemplates } from '../../utils'; // Import initialTemplates for dummy data

const HomePage = () => {
  // Get a sample template to display on the homepage
  // For demonstration, let's pick the first template or any specific one.
  const sampleTemplate = initialTemplates[0];

  // Dummy function for onChooseTemplate if you add buttons on the home page card
  // In a real scenario, this might navigate to the template selection page or build page
  const handleChooseSampleTemplate = (templateId) => {
    console.log(`Sample Template ${templateId} chosen on homepage!`);
    // You might want to navigate to '/build-resume' or '/templates' here
    // For this example, we'll just log.
  };

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
      <Box sx={{ width: '100%', maxWidth: '600px', mb: 4, mt: 4 }}>
        <ThreeDScrollEffect />
      </Box>

      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
        Navigate to the Templates page to get started or learn more about our features.
      </Typography>

      {/* Example of TemplateCard on the Home Page */}
      {sampleTemplate && (
        <Box sx={{ width: '100%', maxWidth: '384px', mt: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2 }}>
            Featured Template
          </Typography>
          <TemplateCard
            template={sampleTemplate}
            onChooseTemplate={handleChooseSampleTemplate}
          />
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
