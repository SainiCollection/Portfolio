/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Box, Paper, Typography, TextField, Grid, Button, Avatar, Stack,
  Radio, RadioGroup, FormControlLabel, LinearProgress, Snackbar, Alert
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import axios from 'axios';

// 1. Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  dob: Yup.string().required('Date of Birth is required'),
  gender: Yup.string().required('Gender is required'),
  designation: Yup.string().required('Designation is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNo: Yup.number().typeError('Must be a number').required('Phone Number is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  pinCode: Yup.number().typeError('Must be a number').required('Pincode is required'),
  country: Yup.string().required('Country is required'),
});

const initialValues = {
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
  pinCode: '',
  country: '',
};

function UserForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const user = useSelector(state => state.user);
  console.log("this is from ", user.userName); // fix typo: userName not username

  // 2. Handle file upload
  const handleFileChange = (e, setFieldValue) => {
    setFieldValue('profilePhoto', e.target.files[0]);
    console.log(`=>=>${e.target.files[0]}`);

  };

  // 3. Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(`this is =>${typeof (values.firstName)}`);
    try {
      const data = new FormData();
      data.append('firstName', values.firstName);
      data.append('lastName', values.lastName);
      data.append('dob', values.dob);
      data.append('gender', values.gender);
      data.append('designation', values.designation);
      data.append('email', values.email);
      data.append('phoneNo', Number(values.phoneNo));
      data.append('socialLink', values.socialLink);
      data.append('city', values.city);
      data.append('state', values.state);
      data.append('pinCode', Number(values.pinCode));
      data.append('country', values.country);
      data.append('userName', user.userName);
      data.append('userId', Number(user.id));
      if (values.profilePhoto) {
        data.append('profilePhoto', values.profilePhoto);
        console.log('uploading file ', values.profilePhoto.name);
      }
      const response = await axios.post(
        "https://portfoliobackend-ol8m.onrender.com/api/v1/portfolio/register",
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      setSuccess(true);
      setError('');
      resetForm();
      setStep(1);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess(false);
    }
    setSubmitting(false);
  };

  // 4. Render the form
  return (
    <Box sx={{
      bgcolor: '#f5f6f8',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      p: { xs: 2, sm: 4 }
    }}>
      <Paper elevation={3} sx={{
        p: { xs: 3, sm: 5 },
        borderRadius: 3,
        width: '100%',
        maxWidth: 900,
        my: 'auto'
      }}>
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

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, setFieldValue, isSubmitting }) => (
            <Form>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {step === 1 && (
                    <>
                      <Stack spacing={3} alignItems="center" mb={4}>
                        <Avatar
                          src={values.profilePhoto ? URL.createObjectURL(values.profilePhoto) : ''}
                          sx={{ width: 140, height: 140 }}
                        />
                        <Button variant="outlined" component="label">
                          Upload Photo
                          <input
                            type="file"
                            hidden
                            name="profilePhoto"
                            accept="image/*"
                            onChange={e => handleFileChange(e, setFieldValue)}
                          />
                        </Button>
                      </Stack>
                      <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.firstName && Boolean(errors.firstName)}
                            helperText={touched.firstName && errors.firstName}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.lastName && Boolean(errors.lastName)}
                            helperText={touched.lastName && errors.lastName}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Date of Birth"
                            name="dob"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={values.dob}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.dob && Boolean(errors.dob)}
                            helperText={touched.dob && errors.dob}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Designation"
                            name="designation"
                            value={values.designation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.designation && Boolean(errors.designation)}
                            helperText={touched.designation && errors.designation}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="body1">Gender</Typography>
                          <RadioGroup
                            row
                            name="gender"
                            value={values.gender}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                          </RadioGroup>
                          {touched.gender && errors.gender && (
                            <Typography color="error" variant="caption">{errors.gender}</Typography>
                          )}
                        </Grid>
                      </Grid>
                      <Box mt={4} display="flex" justifyContent="flex-end">
                        <Button
                          variant="contained"
                          onClick={() => setStep(2)}
                          sx={{ bgcolor: '#1a73e8' }}
                        >
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
                            // disabled
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Phone Number"
                            name="phoneNo"
                            type="number"
                            value={values.phoneNo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.phoneNo && Boolean(errors.phoneNo)}
                            helperText={touched.phoneNo && errors.phoneNo}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Social Link"
                            name="socialLink"
                            value={values.socialLink}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                      </Grid>
                      <Box mt={4} display="flex" justifyContent="space-between">
                        <Button variant="outlined" onClick={() => setStep(1)}>
                          Previous
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => setStep(3)}
                          sx={{ bgcolor: '#1a73e8' }}
                        >
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
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.city && Boolean(errors.city)}
                            helperText={touched.city && errors.city}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="State"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.state && Boolean(errors.state)}
                            helperText={touched.state && errors.state}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Pincode"
                            type="number"
                            name="pinCode"
                            value={values.pinCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.pinCode && Boolean(errors.pinCode)}
                            helperText={touched.pinCode && errors.pinCode}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Country"
                            name="country"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.country && Boolean(errors.country)}
                            helperText={touched.country && errors.country}
                          />
                        </Grid>
                      </Grid>
                      <Box mt={4} display="flex" justifyContent="space-between">
                        <Button variant="outlined" onClick={() => setStep(2)}>
                          Previous
                        </Button>
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{ bgcolor: '#1a73e8' }}
                          disabled={isSubmitting}
                        >
                          Save Profile
                        </Button>
                      </Box>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </Form>
          )}
        </Formik>

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
