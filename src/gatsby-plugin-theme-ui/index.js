import baseTheme from '@theme-ui/preset-base';
import codeStyles from '@theme-ui/prism/presets/theme-ui';

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  m: 0,
  mt: 1,
  mb: 1,
};
const baseFontWeights = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

const theme = {
  ...baseTheme,
  /* THEME OPTIONS */
  useColorSchemeMediaQuery: true,
  /* COLORS */
  colors: {
    ...baseTheme.colors,
    text: '#4f4f4f',
    background: '#fff',
    primary: '#e06961',
    accent: '#d84136',
    // A contrast color for emphasizing UI
    secondary: '#777',
    // A background color for highlighting text
    highlight: '#ffefd5',
    // A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
    muted: '#cbd5e0',
    toggleIcon: '#2d3748',
    link: '#2b6cb0',
    code: '#4f4f4f',
    modes: {
      dark: {
        text: '#fff',
        background: '#1a202c',
        // primary: '#f0c',
        secondary: '#999',
        highlight: '#fbc02d',
        toggleIcon: '#cbd5e0',
      },
    },
  },
  /* TYPOGRAPHY */
  fonts: {
    ...baseTheme.fonts,
    body: ['"Avenir Next"', baseTheme.fonts.body].join(', '),
    heading: '"Avenir Next"',
    home: 'Courier New',
    story: 'Charter, "Avenir Next"',
  },
  fontWeights: {
    ...baseFontWeights,
    body: baseFontWeights.normal,
    heading: baseFontWeights.medium,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
    story: 1.5,
  },
  /* DIMENSIONS */
  breakpoints: ['640px', 'calc(768px + 1px)'],
  sizes: {
    container: 768,
  },
  /* HTML ELEMENT STYLES */
  styles: {
    ...baseTheme.styles,
    a: { variant: 'links.primary' },
    p: { marginY: [3, 4] },
    h1: {
      ...heading,
      fontSize: 6,
      fontWeight: 'semibold',
      mt: 4,
      mb: 2,
    },
    h2: {
      ...heading,
      fontSize: 5,
      fontWeight: 'bold',
      mt: [1, 2],
      mb: [3, 4],
    },
    h3: { ...heading, fontSize: 4, mt: [2, 3], mb: [2, 3] },
    h4: { ...heading, fontSize: 3 },
    h5: { ...heading, fontSize: 2 },
    h6: { ...heading, fontSize: 1 },
    hr: {
      bg: 'muted',
      border: 0,
      height: '1px',
      m: 3,
    },
    code: {
      ...codeStyles,
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
        fill: 'accent',
      },
    },
    navigation: {
      variant: 'links.primary',
      textDecoration: 'none',
    },
    primary: {
      color: 'primary',
      '&:hover': {
        cursor: 'pointer',
        color: 'accent',
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
  messages: {
    cookieConsent: {
      color: '#4f4f4f',
      fontSize: 1,
    },
  },
  typography: {
    story: {
      blockquote: {
        fontFamily: 'story',
        fontStyle: 'italic',
        textAlign: 'center',
        marginY: [6],
        letterSpacing: '0.1em',
        p: { m: 0 },
      },
      '.section-h2': {
        mb: 0,
        mt: [7],
        pt: [6],
        borderTop: '1px solid',
        borderColor: 'muted',
      },
      h2: {
        fontFamily: 'story',
        fontStyle: 'italic',
        fontSize: 3,
        fontWeight: 'normal',
        textAlign: 'center',
        backgroundColor: 'background',
        position: 'sticky',
        top: '-1px',
        paddingY: [2, 3],
        m: 0,
      },
      chapterTitle: {
        backgroundColor: 'background',
        fontFamily: 'story',
        fontStyle: 'italic',
        fontSize: 7,
        fontWeight: 'normal',
        textAlign: 'center',
        mt: 0,
        mb: [5, 6],
      },
      p: {
        fontSize: 3,
        whiteSpace: 'break-spaces',
        lineHeight: 'story',
        marginY: 5,
      },
      'p + p': {
        textIndent: '2.5rem',
      },
      pre: {
        textAlign: 'center',
      },
    },
  },
  badges: {
    draft: {
      backgroundColor: 'highlight',
      borderRadius: '4px',
      border: '1px solid',
      borderColor: 'muted',
      paddingX: 1,
      fontSize: 1,
      fontWeight: 'semibold',
    },
  },
};

export default theme;
