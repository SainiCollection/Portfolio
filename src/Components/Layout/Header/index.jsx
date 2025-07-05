/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// src/components/Layout/Header/index.jsx
// This component renders the top application bar with navigation and sidebar toggle.
import React, { use, useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon for sidebar toggle
import DescriptionIcon from '@mui/icons-material/Description'; // Icon for "Resume Now." logo
import { Link,useNavigate, useSearchParams } from 'react-router-dom'; // Import useNavigate hook
import { jwtDecode } from "jwt-decode"
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '../../../store/features/userSlice';
import { setUserProfile } from '../../../store/features/userProfileSlice';

const Header = ({ onNavigate, onToggleSidebar }) => {
  const user = useSelector(state => state.user);
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
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

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [searchParams] = useSearchParams();
  const [decodedToken, setDecodedToken] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hasPortfolio, setHasPortfolio] = useState(null);
 const navigate = useNavigate()
  const open = Boolean(anchorEl);

  // const [data, setData] = useState("jatin_451");

  // console.log(decodedToken?.userName, decodedToken?.email, decodedToken?.id);
  //////////

  // useEffect(() => {

  //   const fetchUserProfile = async () => {
  //     try {
  //       const url = `https://portfoliobackend-ol8m.onrender.com/api/v1/portfolio/all-details/manoj_382`;
  //       const response = await axios.get(url);
  //       dispatch(setUserProfile(response.data)); // store all payload data in redux
  //       console.log("Fetched user profile:", response.data);
  //     } catch (e) {
  //       console.log("error in userprofile", e);
  //       dispatch(setUserProfile(null));
  //     }
  //   };
  //   if (user.userName) {
  //     fetchUserProfile();
  //   }
  // }, [user.userName, dispatch]);


  useEffect(() => {
    dispatch(setUser({ userName: decodedToken?.userName, email: decodedToken?.email, id: decodedToken?.id }));
    if (isLoggedIn && decodedToken?.userName) {
      const fetchUser = async () => {
        try {
          const user = await axios.get(`https://portfoliobackend-ol8m.onrender.com/api/v1/portfolio/user-details/${decodedToken?.userName}`);
          dispatch(setUserProfile(user.data)); // store all payload data in redux

          if (user) {
            setHasPortfolio(true);
          }
          else {
            setHasPortfolio(false);
          }
        } catch (error) {
          console.log("Server error->", error)
        }
      }
      fetchUser();
    } else {
      // dispatch(clearUser());
      // setHasPortfolio(false);
    };
  }, [isLoggedIn, decodedToken?.userName, dispatch]);

  /////////////
  useEffect(() => {
    // Fetch all users details on mount
    const fetchData = async () => {
      try {
        const response = await axios.get("https://portfoliobackend-ol8m.onrender.com/api/v1/portfolio/all-users-details");
        console.log(response.data);
        // setData(response.data); // Uncomment if you want to store the data
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchData();
  }, []);

  // if (data === decodedToken?.userName) {
  //   console.log("Name matched", data);
  // } else {
  //   console.log("Name not matched");
  // }

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      // co=nole.log(decodedToken.userName);
      try {
        setDecodedToken(jwtDecode(token))
      } catch (e) {
        setDecodedToken(null);
      }


    }
  }, [searchParams]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setDecodedToken(null);
    alert("logout successful");
    const url = new URL(window.location);
    url.searchParams.delete("token");
    window.history.replaceState({}, document.title, url.pathname + url.search);
    navigate("/")
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  /////////////

  console.log("this0", hasPortfolio);

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



          {isLoggedIn ? (
            hasPortfolio ? (
              <>
                <IconButton onClick={handleProfileClick} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    {decodedToken?.userName?.[0]?.toUpperCase() || 'not'}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        mt: 1.5,
                        minWidth: 150,
                        borderRadius: 2,
                      },
                    },
                  }}
                >
                  <MenuItem>
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>Profile</Link>
                  </MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button onClick={handleLogout}>Logout</Button>
                <Button
                  onClick={() => handleNavigationClick('/userform')}
                  variant="contained"
                  color="primary"
                  sx={{ px: 2, py: 1 }}
                >
                  Create Portfolio
                </Button>
              </>

            )
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


        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;