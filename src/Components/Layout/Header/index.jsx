/* eslint-disable no-unused-vars */
// src/components/Layout/Header/index.jsx
// This component renders the top application bar with navigation and sidebar toggle.
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon for sidebar toggle
import DescriptionIcon from '@mui/icons-material/Description'; // Icon for "Resume Now." logo
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Header = ({ onNavigate, onToggleSidebar }) => {
  const navigateRouter = useNavigate(); // Get the navigate function from react-router-dom

  // Unified navigate handler for buttons that also updates sidebar
  const handleNavigationClick = (path) => {
    // onNavigate is the universal navigation function from AppProvider
    // It already handles `useNavigate` and sidebar logic.
    onNavigate(path);
  };

  return (
    // AppBar is a Material-UI component for the top application bar.
    <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 1, py: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Sidebar Toggle Button (visible only on small screens) */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { md: 'none' }, color: 'text.secondary' }}
            onClick={onToggleSidebar} // Triggers sidebar open/close in AppProvider
          >
            <MenuIcon />
          </IconButton>
          {/* "Resume Now." Logo/Title */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              typography: 'h6', // MUI typography variant
              fontWeight: 'bold',
              color: 'text.primary',
              cursor: 'pointer',
            }}
            onClick={() => handleNavigationClick('/')} // Navigates to the home page path
          >
            <DescriptionIcon sx={{ mr: 1, color: 'primary.main' }} /> {/* Icon for visual appeal */}
            Resume Now.
          </Box>
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            onClick={() => handleNavigationClick('/')} // Navigates to home path
            variant="text" // Text button style
            sx={{
              color: 'text.secondary',
              bgcolor: 'grey.200',
              '&:hover': { bgcolor: 'grey.300' },
              px: 2,
              py: 1,
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => handleNavigationClick('/templates')} // Navigates to templates page path
            variant="contained" // Filled button style
            color="primary"
            sx={{ px: 2, py: 1 }}
          >
            Templates
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;