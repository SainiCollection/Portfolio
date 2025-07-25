// src/pages/BuildResumePage/index.jsx
// This page provides options for the user to start building their resume.
import React from 'react';
import { Box, Typography, Button, Paper, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Icon for back button
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // Icon for 'Create new'
import UploadFileIcon from '@mui/icons-material/UploadFile'; // Icon for 'Upload existing'
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

// Redux Toolkit imports if needed (e.g., to read selectedTemplateId directly)
// import { useSelector } from 'react-redux';

// `onNavigate` prop is passed down from AppRoutes, which comes from AppProvider's `navigate`
const BuildResumePage = ({ onNavigate }) => {
  // Access selectedTemplateId from Redux store if needed for this page's logic/display.
  // const selectedTemplateId = useSelector((state) => state.resume.selectedTemplateId);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'calc(100vh - 180px)', // Adjust height based on header
        px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        py: 4,
        bgcolor: 'customColors.grayBg', // Custom gray background from theme
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1024px' }}> {/* Max width for content */}
        {/* "Back to templates" button */}
        <Button
          // Use onNavigate prop, which is already configured for react-router-dom paths
          onClick={() => onNavigate('/templates')} // Navigates back to the template selection page path
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'primary.main',
            textTransform: 'none', // Prevent uppercase text
            mb: 4,
            '&:hover': { textDecoration: 'underline', bgcolor: 'transparent' }, // Underline on hover
          }}
        >
          <ArrowBackIcon sx={{ mr: 0.5 }} /> {/* Back arrow icon */}
          Back to templates
        </Button>

        <Typography variant="h4" component="h1" sx={{ fontWeight: 'extrabold', color: 'text.primary', textAlign: 'center', mb: 6 }}>
          How would you like to build your resume?
        </Typography>

        {/* Option cards: "Start with new" and "Upload existing" */}
        <Stack
          direction={{ xs: 'column', md: 'row' }} // Stack vertically on small, horizontally on medium+
          spacing={3} // Gap between cards
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          {/* Card 1: Start with a new resume */}
          <Paper
            elevation={2} // MUI shadow (similar to Tailwind shadow-md)
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 4,
              borderRadius: '12px',
              width: '100%',
              maxWidth: { xs: '100%', md: '50%' }, // Responsive width
              '&:hover': { boxShadow: 4 }, // Higher shadow on hover
              transition: 'box-shadow 0.3s', // Smooth transition
            }}
          >
            <Box sx={{ p: 2, bgcolor: 'success.light', borderRadius: '50%', mb: 3 }}>
              <AddCircleOutlineIcon sx={{ fontSize: '3rem', color: 'success.main' }} /> {/* Icon */}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1, textAlign: 'center' }}>
              Start with a new resume
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, textAlign: 'center' }}>
              Get step-by-step support with expert content suggestions at your fingertips!
            </Typography>
            <Button
              // Use onNavigate prop for path '/header-input'
              onClick={() => onNavigate('/header-input')} // Navigates to the header input page path
              variant="contained"
              color="primary"
              sx={{ px: 4, py: 1.5, fontWeight: 'semibold' }}
            >
              Create new
            </Button>
          </Paper>

          {/* Card 2: Upload an existing resume */}
          <Paper
            elevation={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 4,
              borderRadius: '12px',
              width: '100%',
              maxWidth: { xs: '100%', md: '50%' },
              '&:hover': { boxShadow: 4 },
              transition: 'box-shadow 0.3s',
            }}
          >
            <Box sx={{ p: 2, bgcolor: 'warning.light', borderRadius: '50%', mb: 3 }}>
              <UploadFileIcon sx={{ fontSize: '3rem', color: 'warning.main' }} /> {/* Icon */}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1, textAlign: 'center' }}>
              Upload an existing resume
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, textAlign: 'center' }}>
              Edit your resume using expertly generated content in a fresh, new design.
            </Typography>
            <Button
              variant="contained"
              color="secondary" // Uses secondary color from theme
              sx={{ px: 4, py: 1.5, fontWeight: 'semibold' }}
            >
              Choose file
            </Button>
          </Paper>
        </Stack>

        <Typography variant="caption" sx={{ color: 'text.disabled', textAlign: 'center', display: 'block', mb: 1 }}>
          Acceptable file types: DOC, DOCX, PDF, HTML, RTF, TXT
        </Typography>
        <Button sx={{ display: 'block', mx: 'auto', color: 'primary.main', textTransform: 'none', mb: 6, '&:hover': { textDecoration: 'underline' } }}>
          More upload options <Box component="span" sx={{ display: 'inline-block', transform: 'rotate(90deg)', fontSize: '0.8rem', ml: 0.5 }}>›</Box>
        </Button>

        {/* Bottom Navigation Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderTop: 1, borderColor: 'grey.200', pt: 3 }}>
          <Button
            onClick={() => onNavigate('/templates')} // Navigates back using path
            variant="outlined" // Outlined button style
            sx={{
              px: 3, py: 1.5,
              borderColor: 'grey.300', color: 'text.secondary',
              '&:hover': { bgcolor: 'grey.100' },
              fontWeight: 'semibold'
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ px: 3, py: 1.5, fontWeight: 'semibold' }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BuildResumePage;