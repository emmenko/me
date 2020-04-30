import baseTheme from '@theme-ui/preset-base';

export default {
  ...baseTheme,
  /* THEME OPTIONS */
  useColorSchemeMediaQuery: true,
  /* COLORS */
  colors: {
    ...baseTheme.colors,
    text: '#4f4f4f',
    background: '#fff',
    primary: '#e06961',
    primaryHover: '#d84136',
    // A contrast color for emphasizing UI
    secondary: '#c0c',
    // A background color for highlighting text
    highlight: '#e0e',
    // A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
    muted: '#f6f6ff',
    link: '#2b6cb0',
    toggleIcon: '#2d3748',
    modes: {
      dark: {
        text: '#fff',
        background: '#1a202c',
        // primary: '#f0c',
        secondary: '#0cf',
        highlight: '#f0c',
        muted: '#011',
        toggleIcon: '#cbd5e0',
      },
    },
  },
  /* TYPOGRAPHY */
  fonts: {
    ...baseTheme.fonts,
    heading: 'Courier New',
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  /* DIMENSIONS */
  breakpoints: ['640px', '768px', '1024px'],
  sizes: {
    container: 768,
  },
  /* HTML ELEMENT STYLES */
  styles: {
    ...baseTheme.styles,
    a: {
      color: 'primary',
      '&:hover': {
        cursor: 'pointer',
        color: 'primaryHover',
      },
    },
  },
  /* VARIANTS */
  links: {
    icons: {
      cursor: 'pointer',
      '> svg': {
        fill: 'primary',
      },
      '&:hover > svg': {
        fill: 'primaryHover',
      },
    },
  },
  buttons: {
    flat: {
      background: 'none',
      border: 'none',
      color: 'link',
      cursor: 'pointer',
      padding: 0,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
};
