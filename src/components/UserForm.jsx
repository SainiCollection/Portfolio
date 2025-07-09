import React, { useState } from 'react';
import {
  Box, Paper, Typography, TextField, Grid, Button, Avatar, Stack,
  Radio, RadioGroup, FormControlLabel, LinearProgress, Snackbar, Alert
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

function UserForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [formData, setFormData] = useState({
    profilePhoto: '',
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    designation: '',
    email: '',
    phoneNo: '',
    socialLink: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePhoto') {
      setFormData({ ...formData, profilePhoto: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.dob || !formData.gender || !formData.designation) {
        setError('Please complete all required fields.');
        return false;
      }
    }
    if (step === 2) {
      if (!formData.email || !formData.phoneNo) {
        setError('Please complete all required fields.');
        return false;
      }
    }
    if (step === 3) {
      if (!formData.city || !formData.state || !formData.pincode) {
        setError('Please complete all required fields.');
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Form data:', formData);
      setSuccess(true);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#f5f6f8',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        p: { xs: 2, sm: 4 }
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          width: '100%',
          maxWidth: 900,
          my: 'auto'
        }}
      >
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Create Your Profile
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(step / totalSteps) * 100}
          sx={{ height: 8, borderRadius: 4, mb: 3 }}
        />
        <Typography variant="subtitle1" align="center" color="text.secondary" mb={3}>
          Step {step} of {totalSteps}
        </Typography>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <Stack spacing={3} alignItems="center" mb={4}>
                    <Avatar
                      src={formData.profilePhoto ? URL.createObjectURL(formData.profilePhoto) : ''}
                      sx={{ width: 140, height: 140 }}
                    />
                    <Button variant="outlined" component="label">
                      Upload Photo
                      <input type="file" hidden name="profilePhoto" accept="image/*" onChange={handleChange} />
                    </Button>
                  </Stack>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formData.dob}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Gender</Typography>
                      <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                      </RadioGroup>
                    </Grid>
                  </Grid>
                  <Box mt={4} display="flex" justifyContent="flex-end">
                    <Button variant="contained" onClick={handleNext} sx={{ bgcolor: '#1a73e8' }}>
                      Next
                    </Button>
                  </Box>
                </>
              )}

              {step === 2 && (
                <>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Social Link"
                        name="socialLink"
                        value={formData.socialLink}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Box mt={4} display="flex" justifyContent="space-between">
                    <Button variant="outlined" onClick={handlePrev}>
                      Previous
                    </Button>
                    <Button variant="contained" onClick={handleNext} sx={{ bgcolor: '#1a73e8' }}>
                      Next
                    </Button>
                  </Box>
                </>
              )}

              {step === 3 && (
                <>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>
                  <Box mt={4} display="flex" justifyContent="space-between">
                    <Button variant="outlined" onClick={handlePrev}>
                      Previous
                    </Button>
                    <Button type="submit" variant="contained" sx={{ bgcolor: '#1a73e8' }}>
                      Save Profile
                    </Button>
                  </Box>
                </>
              )}
            </form>
          </motion.div>
        </AnimatePresence>

        <Snackbar open={!!error} autoHideDuration={4000} onClose={() => setError('')}>
          <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
        <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)}>
          <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
            Profile saved successfully!
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
}

export default UserForm;
    