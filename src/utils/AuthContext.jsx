// src/utils/AuthContext.jsx
// This file defines a simple React Context for managing authentication status.
// It's a placeholder to demonstrate how protected routes would work.
// In a real application, this would manage actual user login/logout, tokens, etc.

import React, { createContext, useState, useContext } from 'react';

// Create the Auth Context
const AuthContext = createContext(null);

// Auth Provider Component
// This component will wrap your application to provide authentication state to all children.
export const AuthContextProvider = ({ children }) => {
  // In a real app, `user` state would come from an API call, local storage, etc.
  // For now, `isAuthenticated` simulates a logged-in user.
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to `true` by default for testing purposes
                                                            // Change to `false` to test protected routes.

  // Example login/logout functions (not used in this UI, but for demonstration)
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  // The value provided to children consumers of this context.
  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to easily consume the authentication context.
export const useAuth = () => {
  return useContext(AuthContext);
};