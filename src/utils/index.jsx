// src/utils/index.js
// This file contains shared utility functions and static data.

// Helper function to generate a unique ID (simple for demonstration purposes).
// This is used to create unique 'id' values for templates if they don't have them pre-defined.
export const generateId = () => Math.random().toString(36).substring(2, 9);

// Dummy data for resume templates.
// This array contains a list of predefined resume templates with various properties
// like name, color scheme, headshot presence, graphics style, column layout,
// and whether they are recommended.
//
// NOTE TO USER: The `templateImage` URLs below are sourced from public domain
// or CC0 licensed image platforms (like Unsplash via source.unsplash.com or
// other similar image services for illustrative purposes). In a real production
// application, you would host these images yourself or ensure proper licensing
// and CDN usage for optimal performance and reliability.
export const initialTemplates = [
  {
    id: generateId(),
    name: 'Modern Professional',
    colorScheme: 'Orange',
    headshot: 'Yes',
    graphics: 'Minimal',
    columns: 'Two',
    isRecommended: false,
    content: {
      heading: 'DIYA AGARWAL',
      skills: ['HTML', 'CSS', 'JavaScript'],
      experience: '2 years Web Development',
      summary: 'Passionate frontend developer with a knack for creating beautiful UIs.',
    },
    // Real-looking template image
    templateImage: 'https://images.unsplash.com/photo-1541339907198-e087565f425c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: generateId(),
    name: 'Clean & Classic',
    colorScheme: 'DarkBlue',
    headshot: 'No',
    graphics: 'Yes',
    columns: 'One',
    isRecommended: true,
    content: {
      heading: 'DIYA AGARWAL',
      skills: ['React', 'Node.js', 'MongoDB'],
      experience: '3 years Fullstack Development',
      summary: 'Experienced fullstack developer specializing in MERN stack applications.',
    },
    // Real-looking template image
    templateImage: 'https://images.unsplash.com/photo-1533617300445-ce0262147321?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: generateId(),
    name: 'Creative Portfolio',
    colorScheme: 'LightBlue',
    headshot: 'Yes',
    graphics: 'Extensive',
    columns: 'Two',
    isRecommended: true,
    content: {
      heading: 'DIYA AGARWAL',
      skills: ['Python', 'Data Science', 'Machine Learning'],
      experience: '4 years Data Analysis',
      summary: 'Data scientist passionate about extracting insights from complex datasets.',
    },
    // Real-looking template image
    templateImage: 'https://images.unsplash.com/photo-1601736636734-72534a6ee129?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: generateId(),
    name: 'Minimalist Grid',
    colorScheme: 'Black',
    headshot: 'Yes',
    graphics: 'Minimal',
    columns: 'Two',
    isRecommended: false,
    content: {
      heading: 'John Doe',
      skills: ['Project Management', 'Team Leadership'],
      experience: '5 years Project Lead',
      summary: 'Certified Project Manager with a proven track record of successful project delivery.',
    },
    // Real-looking template image
    templateImage: 'https://images.unsplash.com/photo-1563986768494-b20f9a2e6f21?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: generateId(),
    name: 'Infographic Style',
    colorScheme: 'Green',
    headshot: 'No',
    graphics: 'Extensive',
    columns: 'One',
    isRecommended: false,
    content: {
      heading: 'Jane Smith',
      skills: ['Content Writing', 'SEO', 'Digital Marketing'],
      experience: '3 years Content Creator',
      summary: 'Creative content writer focused on SEO-optimized and engaging digital copy.',
    },
    // Real-looking template image
    templateImage: 'https://images.unsplash.com/photo-1541746972966-d416b2089552?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: generateId(),
    name: 'Bold & Elegant',
    colorScheme: 'Red',
    headshot: 'Yes',
    graphics: 'Minimal',
    columns: 'Two',
    isRecommended: false,
    content: {
      heading: 'Robert Brown',
      skills: ['UX/UI Design', 'Figma', 'User Research'],
      experience: '4 years UX Designer',
      summary: 'User-centered designer creating intuitive and aesthetically pleasing interfaces.',
    },
    // Real-looking template image
    templateImage: 'https://images.unsplash.com/photo-1541339907198-e087565f425c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  // Adding more varied real-looking images for the remaining templates (using source.unsplash.com for variety)
  ...Array.from({ length: 37 }).map((_, i) => ({
    id: generateId(),
    name: `Dynamic Design ${i + 7}`,
    colorScheme: ['Orange', 'DarkBlue', 'LightBlue', 'Black', 'Green', 'Red'][Math.floor(Math.random() * 6)],
    headshot: Math.random() > 0.5 ? 'Yes' : 'No',
    graphics: ['Minimal', 'Yes', 'Extensive'][Math.floor(Math.random() * 3)],
    columns: ['One', 'Two'][Math.floor(Math.random() * 2)],
    isRecommended: Math.random() > 0.7, // Randomly set some as recommended
    content: {
        heading: `User ${i + 7}`,
        skills: ['Skill A', 'Skill B', 'Skill C'],
        experience: `${(i % 5) + 1} years Experience`,
        summary: `A dedicated professional with varied experience.`,
    },
    // Using Unsplash source URLs for a wider variety of real-looking template images
    templateImage: `https://source.unsplash.com/random/300x400/?resume,cv,document&sig=${i}`
  }))
];

// Helper to map `colorScheme` name (from `initialTemplates`) to actual MUI theme palette colors.
// This function needs the `theme` object (accessed via `useTheme()` hook in components)
// to correctly resolve the custom color values defined in `src/theme/index.js`.
export const getColorHex = (colorScheme, theme) => {
  switch (colorScheme) {
    // Access custom colors defined in the MUI theme palette.
    // E.g., `theme.palette.customColors.orange` will give the hex value of orange.
    case 'Orange': return theme.palette.customColors.orange;
    case 'DarkBlue': return theme.palette.customColors.darkBlue;
    case 'LightBlue': return theme.palette.customColors.lightBlue;
    case 'Black': return theme.palette.customColors.black;
    case 'Green': return theme.palette.customColors.green;
    case 'Red': return theme.palette.customColors.red;
    default: return theme.palette.customColors.black; // Default to black if color not found
  }
};
