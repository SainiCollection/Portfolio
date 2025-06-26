// src/components/Templates/Filters/index.jsx
// This component provides filter options for resume templates.
import React from 'react';
import { Box, FormControl, Select, MenuItem, Typography, useTheme } from '@mui/material';

const Filters = ({ filters, onFilterChange, templateCount }) => {
  const theme = useTheme(); // Access the MUI theme to get custom colors for the palette.

  // Define color options with hex values from the theme's customColors.
  const colorOptions = [
    { name: 'Black', value: 'Black', hex: theme.palette.customColors.black },
    { name: 'Dark Blue', value: 'DarkBlue', hex: theme.palette.customColors.darkBlue },
    { name: 'Light Blue', value: 'LightBlue', hex: theme.palette.customColors.lightBlue },
    { name: 'Green', value: 'Green', hex: theme.palette.customColors.green },
    { name: 'Orange', value: 'Orange', hex: theme.palette.customColors.orange },
    { name: 'Red', value: 'Red', hex: theme.palette.customColors.red },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small, row on medium+
        alignItems: { xs: 'flex-start', sm: 'center' }, // Align items differently based on screen size
        justifyContent: { xs: 'flex-start', sm: 'space-between' }, // Space out content
        px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        py: 2,
        bgcolor: 'grey.50', // Light grey background
        borderBottom: 1, // Bottom border
        borderColor: 'grey.200', // Border color
      }}
    >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, mb: { xs: 2, sm: 0 } }}>
        {/* Dropdown Filters using MUI FormControl and Select */}
        <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
          <Select
            value={filters.headshot}
            onChange={(e) => onFilterChange('headshot', e.target.value)} // Update filter state
            displayEmpty // Allows displaying the placeholder 'Headshot'
            inputProps={{ 'aria-label': 'Headshot filter' }}
            sx={{ borderRadius: '12px', bgcolor: 'white', boxShadow: 1, '.MuiOutlinedInput-notchedOutline': { borderColor: 'grey.300' } }}
          >
            <MenuItem value="All">Headshot</MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
          <Select
            value={filters.graphics}
            onChange={(e) => onFilterChange('graphics', e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Graphics filter' }}
            sx={{ borderRadius: '12px', bgcolor: 'white', boxShadow: 1, '.MuiOutlinedInput-notchedOutline': { borderColor: 'grey.300' } }}
          >
            <MenuItem value="All">Graphics</MenuItem>
            <MenuItem value="Minimal">Minimal</MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="Extensive">Extensive</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
          <Select
            value={filters.columns}
            onChange={(e) => onFilterChange('columns', e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Columns filter' }}
            sx={{ borderRadius: '12px', bgcolor: 'white', boxShadow: 1, '.MuiOutlinedInput-notchedOutline': { borderColor: 'grey.300' } }}
          >
            <MenuItem value="All">Columns</MenuItem>
            <MenuItem value="One">One</MenuItem>
            <MenuItem value="Two">Two</MenuItem>
          </Select>
        </FormControl>

        {/* Color Palette Filter */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: { xs: 2, sm: 0 } }}>
          <Typography variant="body2" sx={{ fontWeight: 'medium', color: 'text.secondary' }}>Color:</Typography>
          {colorOptions.map((color) => (
            <Box
              key={color.value}
              onClick={() => onFilterChange('color', color.value)}
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                cursor: 'pointer',
                border: '2px solid',
                borderColor: filters.color === color.value ? 'primary.main' : 'grey.300', // Highlight selected color
                // `ring` effect mimicked using `boxShadow` or an additional border.
                boxShadow: filters.color === color.value ? `0 0 0 2px ${theme.palette.primary.light}` : 'none',
                transition: 'all 0.2s ease-in-out',
                bgcolor: color.hex,
              }}
              title={color.name}
            />
          ))}
          {/* "All" color option */}
          <Box
            onClick={() => onFilterChange('color', 'All')}
            sx={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              border: '2px solid',
              borderColor: filters.color === 'All' ? 'primary.main' : 'grey.300',
              boxShadow: filters.color === 'All' ? `0 0 0 2px ${theme.palette.primary.light}` : 'none',
              transition: 'all 0.2s ease-in-out',
              bgcolor: 'white',
              color: 'text.disabled',
            }}
            title="All Colors"
          >
            All
          </Box>
        </Box>
      </Box>
      {/* Display template count */}
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: { xs: 2, sm: 0 } }}>
        Showing all templates ({templateCount})
      </Typography>
    </Box>
  );
};

export default Filters;