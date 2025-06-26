// src/components/Common/ChangeTemplateModal/index.jsx
// This modal allows the user to select a different resume template.
import React, { useMemo } from 'react'; // useMemo is imported correctly
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Grid, useTheme } from '@mui/material';
import { initialTemplates } from '../../../utils'; // Import static template data

const ChangeTemplateModal = ({ show, onClose, onSelectTemplate, selectedTemplateId }) => {
  const theme = useTheme(); // Access the MUI theme for consistent colors

  // --- FIX: Move Hooks to the top level, before any conditional returns ---
  // Memoize the templates to show in the modal (e.g., first 9 for a quick overview).
  const templatesToShow = useMemo(() => initialTemplates.slice(0, 9), []);
  // --- END FIX ---

  if (!show) return null; // This early return is fine, as hooks are now above it.

  // Define color options using theme palette custom colors for consistency.
  const colorOptions = [
    theme.palette.customColors.black,
    theme.palette.customColors.darkBlue,
    theme.palette.customColors.lightBlue,
    theme.palette.customColors.green,
    theme.palette.customColors.orange,
    theme.palette.customColors.red,
  ];

  return (
    <Dialog open={show} onClose={onClose} aria-labelledby="change-template-modal-title" maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontWeight: 'bold', color: 'text.primary', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Change Template
        {/* Close button for the modal */}
        <Button onClick={onClose} sx={{ minWidth: 'unset', p: 1, color: 'text.secondary' }}>
          <Box component="span" sx={{ fontSize: '1.5rem', lineHeight: 1 }}>&times;</Box>
        </Button>
      </DialogTitle>
      <DialogContent dividers> {/* `dividers` prop adds a subtle border */}
        {/* Dummy Color Palette (for visual match to original design) */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3, justifyContent: 'center' }}>
            {colorOptions.map((colorHex, index) => (
                <Box
                    key={index}
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        border: '2px solid',
                        borderColor: 'grey.300',
                        cursor: 'pointer',
                        boxShadow: 1, // MUI shadow level
                        backgroundColor: colorHex,
                    }}
                    title={`Color ${index + 1}`}
                />
            ))}
        </Box>

        {/* Grid for displaying template previews in the modal */}
        <Grid container spacing={2} sx={{ maxHeight: 400, overflowY: 'auto', pr: 1 }}>
          {templatesToShow.map(template => (
            <Grid item xs={6} sm={4} key={template.id}>
              <Box
                onClick={() => { onSelectTemplate(template.id); onClose(); }} // Call onSelectTemplate and close modal
                sx={{
                  position: 'relative',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: 2,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  border: selectedTemplateId === template.id ? '4px solid' : '1px solid', // Highlight selected template
                  borderColor: selectedTemplateId === template.id ? 'primary.main' : 'grey.200',
                  boxSizing: 'border-box', // Ensure border doesn't add to width
                  '&:hover': {
                    boxShadow: 4, // Higher shadow on hover
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                {/* "Recommended" badge */}
                {template.isRecommended && (
                  <Box sx={{
                    position: 'absolute',
                    top: 8,
                    right: 0,
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'medium',
                    px: 2,
                    py: 0.5,
                    borderTopLeftRadius: 9999,
                    borderBottomLeftRadius: 9999,
                    zIndex: 10,
                  }}>
                    REC
                  </Box>
                )}
                {/* Template preview image */}
                <Box
                  component="img"
                  src={template.templateImage || `https://placehold.co/150x200/CCCCCC/000000?text=Mini%20Preview`}
                  alt={`Template ${template.name}`}
                  sx={{
                    width: '100%',
                    height: 128, // Fixed height for consistent preview size
                    objectFit: 'cover',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                  }}
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x200/CCCCCC/000000?text=Image%20Error" }}
                />
                {/* Template name */}
                <Typography variant="body2" sx={{ p: 1.5, textAlign: 'center', fontWeight: 'medium', color: 'text.secondary' }}>
                  {template.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        {/* Select & Close button */}
        <Button
          onClick={onClose} // Simply closes the modal as selection is handled on click of template card
          variant="contained"
          color="primary"
          sx={{
            px: 4,
            py: 1.5,
          }}
        >
          Select & Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangeTemplateModal;