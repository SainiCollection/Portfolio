// src/App.jsx
// This file is now extremely clean. Its sole purpose is to wrap the entire application
// logic within the AppProvider component.
// No state, no complex logic, just rendering the core application provider.

// import React from 'react';
import AppProvider from './app/AppProvider'; // Import the AppProvider component

const App = () => {
  return (
    // AppProvider encapsulates all the global application state, logic,
    // and layout elements like the Header and Router.
    <AppProvider />
  );
};

export default App;