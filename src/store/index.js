// src/store/index.js
// This file configures the Redux store using Redux Toolkit.
import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './features/resume/resumeSlice'; // Import your resume slice reducer

// Configure the Redux store.
// configureStore automatically sets up Redux DevTools Extension,
// thunk middleware, and immutable state updates.
export const store = configureStore({
  reducer: {
    // Define your reducers here. Each key will correspond to a slice of your state.
    // E.g., `state.resume` will be managed by `resumeReducer`.
    resume: resumeReducer,
    // Add other slices here as your application grows (e.g., user: userReducer)
  },
  // Middleware setup (optional, configureStore adds defaults automatically)
  // You can add custom middleware here if needed.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // DevTools are enabled by default in development mode.
  devTools: process.env.NODE_ENV !== 'production',
});