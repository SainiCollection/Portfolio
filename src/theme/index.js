// src/theme/index.js
// This file defines your custom Material-UI theme.
// It centralizes all design tokens like colors, typography, and component overrides.
// This makes your design consistent and easy to manage across the entire application.

import { createTheme } from '@mui/material/styles';

// Define your custom MUI theme
const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif', // Set global font to Inter
  },
  palette: {
    primary: {
      main: '#2563EB', // Blue-600 equivalent for primary actions (buttons, links)
    },
    secondary: {
      main: '#F59E0B', // Yellow-500 equivalent for secondary actions
    },
    // Custom colors matching the Tailwind equivalents for specific UI elements.
    // These are accessible via `theme.palette.customColors.colorName`
    customColors: {
      black: '#374151', // Dark grey for text/backgrounds (e.g., sidebar)
      darkBlue: '#3B82F6', // A darker blue for certain elements/template colors
      lightBlue: '#60A5FA', // A lighter blue for certain elements/template colors
      green: '#10B981', // For success indicators (e.g., checkmarks, completed steps)
      orange: '#FF7F00', // For highlights/template headers
      red: '#EF4444', // For error/attention
      grayBg: '#F3F4F6', // For light gray backgrounds (e.g., page background)
      grayLight: '#E5E7EB', // For light grey borders/dividers
      textPrimary: '#1F2937', // Main text color (almost black, for headings)
      textSecondary: '#4B5563', // Secondary text color (dark grey, for body text)
      textMuted: '#6B7280', // Muted text color (medium grey)
    },
  },
  // Component style overrides to ensure consistent UI across default MUI components.
  // These apply global styles to all instances of these MUI components.
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Apply rounded corners to all buttons
          textTransform: 'none', // Prevent uppercase text for better readability
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px', // Apply rounded corners to text fields
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // Mimics Tailwind's shadow-sm for the app bar
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Apply rounded corners to cards
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Mimics Tailwind's shadow-lg
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '12px', // Apply rounded corners to dialogs (Modals)
        },
      },
    },
  },
});

export default theme;