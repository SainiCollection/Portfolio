/* eslint-disable no-unused-vars */
// src/components/Layout/Header/index.jsx
// This component renders the top application bar with navigation and sidebar toggle.
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon for sidebar toggle
import DescriptionIcon from '@mui/icons-material/Description'; // Icon for "Resume Now." logo
import { useNavigate, useSearchParams } from 'react-router-dom'; // Import useNavigate hook
import { jwtDecode } from "jwt-decode"

const Header = ({ onNavigate, onToggleSidebar }) => {
  // const navigateRouter = useNavigate(); // Get the navigate function from react-router-dom
  // Unified navigate handler for buttons that also updates sidebar
  const handleNavigationClick = (path) => {
    // onNavigate is the universal navigation function from AppProvider
    // It already handles `useNavigate` and sidebar logic.
    onNavigate(path);

  };

  /////////
  const app_name = process.env.REACT_APP_APP_NAME
  const app_url = process.env.REACT_APP_APP_URL
  const redirect_url = process.env.REACT_APP_REDIRECT_URL

  console.log(app_name)
  console.log(app_url)
  console.log(redirect_url)
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token')
  if (token) {
    localStorage.setItem("token", token);
  }
  console.log(token);
  const tokens = localStorage.getItem(token)


  // alert(token)
  // const decodedToken = jwtDecode(token)
  // debugger

  // console.log(decodedToken.id, decodedToken.userName, decodedToken.email)
  let decodedToken = null;
  if (typeof token === 'string' && token.trim() !== '') {
    try {
      decodedToken = jwtDecode(token);

      console.log(decodedToken.id, decodedToken.userName, decodedToken.email)
      // console.log(decodedToken.id, decodedToken.userName, decodedToken.email);
    } catch (e) {
      console.error('Invalid token:', e);
    }
  } else {
    console.log('No token found in URL');
  }
  /////////////


  return (
    // AppBar is a Material-UI component for the top application bar.
    <AppBar Bar position="static" sx={{ bgcolor: 'white', boxShadow: 1, py: 1 }}>
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

          {tokens ? (
            <>
              <Button
                variant="text"
                sx={{
                  color: 'text.secondary',
                  bgcolor: 'grey.200',
                  '&:hover': { bgcolor: 'grey.300' },
                  px: 2,
                  py: 1,
                }}
              >
                Profile
              </Button>
              <Button
                onClick={() => { localStorage.removeItem("token"); }}
                variant="text"
                sx={{
                  color: 'text.secondary',
                  bgcolor: 'grey.200',
                  '&:hover': { bgcolor: 'grey.300' },
                  px: 2,
                  py: 1,
                }}
              >
                logout
              </Button>
            </>
          ) : (
            <Button
              onClick={() => window.location.href = `${redirect_url}/login?appName=${app_name}&redirectUrl=${app_url}`}
              variant="text"
              sx={{
                color: 'text.secondary',
                bgcolor: 'grey.200',
                '&:hover': { bgcolor: 'grey.300' },
                px: 2,
                py: 1,
              }}
            >
              Login
            </Button>
          )}

          <Button
            onClick={() => window.location.href = `${redirect_url}/signup?appName=${app_name}&redirectUrl=${app_url}`}
            variant="text" // Text button style
            sx={{
              color: 'text.secondary',
              bgcolor: 'grey.200',
              '&:hover': { bgcolor: 'grey.300' },
              px: 2,
              py: 1,
            }}
          >
            Signup
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