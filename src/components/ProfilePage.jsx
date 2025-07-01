import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Grid,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import { motion } from 'framer-motion';

const user = {
  profilePhoto: '', // Add image URL or leave blank
  firstName: 'John',
  lastName: 'Deo',
  designation: 'Frontend Developer',
  dob: '2003-05-19',
  gender: 'Male',
  phoneNo: '9876543210',
  email: 'john@example.com',
  socialLink: 'https://linkedin.com/in/johndeo',
  city: 'New York',
  state: 'NY',
  pincode: '10001',
};

export default function ProfilePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #1a73e8, #8e2de2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 6,
        pb: 8,
        position: 'relative',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Left Sidebar Controls */}
      <Box sx={{ position: 'absolute', top: 32, left: 32 }}>
        <Stack spacing={2} alignItems="flex-start">
          <IconButton
            sx={{
              bgcolor: 'rgba(255,255,255,0.12)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
              fontFamily: 'Inter, sans-serif',
            }}
          >
            <SettingsIcon />
          </IconButton>
          <Button
            startIcon={<EditIcon />}
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              textTransform: 'none',
              fontFamily: 'Inter, sans-serif',
              '&:hover': { borderColor: '#ddd', color: '#eee' },
            }}
          >
            Edit Profile
          </Button>
          <Button
            startIcon={<LogoutIcon />}
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              textTransform: 'none',
              fontFamily: 'Inter, sans-serif',
              '&:hover': { borderColor: '#ddd', color: '#eee' },
            }}
          >
            Sign Out
          </Button>
        </Stack>
      </Box>

      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', color: 'white', mb: 2 }}>
        <Avatar
          src={user.profilePhoto || undefined}
          alt={user.firstName}
          sx={{
            width: 140,
            height: 140,
            mx: 'auto',
            mb: 2,
            border: '4px solid white',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 0 15px rgba(255,255,255,0.6)',
            },
          }}
        />
        <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: 'Inter, sans-serif' }}>
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#f0f0f0', fontFamily: 'Inter, sans-serif' }}>
          {user.designation}
        </Typography>
      </Box>

      {/* Info Card */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          mt: { xs: 4, sm: 6 },
          px: { xs: 3, sm: 5 },
          py: 5,
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          borderRadius: 4,
          boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
          maxWidth: 920,
          width: '100%',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
          Contact Info
        </Typography>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 3 }} />

        <Grid container spacing={4}>
          {[
            ['Date of Birth', user.dob],
            ['Gender', user.gender],
            ['Phone', user.phoneNo],
            ['Email', user.email],
            ['Social Link', user.socialLink],
            ['City', user.city],
            ['State', user.state],
            ['Pincode', user.pincode],
          ].map(([label, value]) => (
            <Grid item xs={12} sm={6} md={4} key={label}>
              <Typography variant="caption" sx={{ color: '#ccc' }}>
                {label}
              </Typography>
              <Typography variant="body1" fontWeight={500} sx={{ color: 'white' }}>
                {value}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Actions */}
        <Box mt={5} display="flex" justifyContent="center" gap={3}>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #1a73e8, #8e2de2)',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: 'none',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
              },
            }}
          >
            Create CV
          </Button>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #8e2de2, #1a73e8)',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: 'none',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
              },
            }}
          >
            Create Portfolio
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
