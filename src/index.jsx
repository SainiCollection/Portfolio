// src/main.jsx (Your project's root entry file)
// This file sets up global providers (Redux, MUI Theme, Auth, Router)
// and renders the main application component. It's kept as clean as possible.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import the App component

// Material-UI Imports for global theming and baseline CSS
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/index.js'; // Import your custom MUI theme

// Redux Toolkit Import for global state management
import { Provider } from 'react-redux';
import { store } from './store/index.js'; // Import your Redux store

// React Router DOM Imports for client-side routing
import { BrowserRouter } from 'react-router-dom';

// Authentication Context Provider for protected routes
import { AuthContextProvider } from './utils/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Redux Provider: Makes the Redux store available to all components wrapped inside it. */}
    <Provider store={store}>
      {/* Material-UI ThemeProvider: Applies your custom theme to all MUI components. */}
      <ThemeProvider theme={theme}>
        {/* CssBaseline: Provides a consistent CSS baseline across browsers,
            handling default margins, etc., for a clean slate. */}
        <CssBaseline />
        {/* BrowserRouter: Enables client-side routing using the HTML5 history API.
            It must wrap your entire application where routing is needed. */}
        <BrowserRouter>
          {/* AuthContextProvider: Provides authentication state to components,
              crucial for protected routes. */}
          <AuthContextProvider>
            {/* The main application component. All application logic starts here. */}
            <App />
          </AuthContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);