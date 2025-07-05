// src/store/features/userProfileSlice.js
import { createSlice } from '@reduxjs/toolkit';

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
export default userProfileSlice.reducer;