// src/store/features/userProfileSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: { data: null },
  reducers: {
    setUserProfile(state, action) {
      state.data = action.payload;
    },
    clearUserProfile(state) {
      state.data = null;
    },
  },
});

export const { setUserProfile, clearUserProfile } = userProfileSlice.actions;

// 🔧 PUT API call (edit profile)
export const updateUserProfile = (formData) => async (dispatch) => {
  try {
    const response = await axios.put(
      'https://portfoliobackend-ol8m.onrender.com/api/v1/portfolio/update',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    dispatch(setUserProfile(response.data));
    console.log("✅ Profile updated successfully");
  } catch (error) {
    console.error("❌ Error updating profile:", error.response?.data?.message || error.message);
  }
};

export default userProfileSlice.reducer;
  