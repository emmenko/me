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
  /* COLORS */
  colors: {
    text: '#424242',
    background: '#fff',
    primary: '#d84136',
    accent: '#db7572',
    secondary: '#636363',
    muted: '#bfbfbf',
    highlight: '#f5f5f5',
    code: '#2f2f2f',
    toggleIcon: '#121212',
    modes: {
      dark: {
        text: '#c9d1d9',
        background: '#0d1117',
        primary: '#e79a99',
        accent: '#e35750',
        secondary: '#8b949e',
        muted: '#e2e2e2',
        highlight: '#272727',
        code: '#232323',
        toggleIcon: '#e2e2e2',
      },
    },
  },
  /* TYPOGRAPHY */
  fonts: {
    ...baseTheme.fonts,
    home: 'Courier New',
    story: 'Charter',
  },
  fontWeights: {
    ...baseFontWeights,
    body: baseFontWeights.normal,
    heading: baseFontWeights.medium,
  },
  lineHeights: {
    body: 1.5,
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
    p: { mt: 2, mb: 3, fontSize: 2 },
    h1: { ...heading, fontSize: 5, mt: 5, mb: 4, fontWeight: 'bold' },
    h2: { ...heading, fontSize: 4, mt: 4, mb: 3, fontWeight: 'semibold' },
    h3: { ...heading, fontSize: 3, mt: 3, mb: 2, fontWeight: 'semibold' },
    h4: { ...heading, fontSize: 2, mt: 2, mb: 1 },
    h5: { ...heading, fontSize: 1 },
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
  headings: {
    page: {
      ...heading,
      fontSize: 6,
      fontWeight: 'semibold',
      mt: 4,
      mb: 3,
    },
  },
  /* VARIANTS */
  links: {
    icons: {
      cursor: 'pointer',
      textDecoration: 'none',
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
      fontWeight: 'medium',
      '&:hover': {
        cursor: 'pointer',
        color: 'accent',
      },
    },
  },
  buttons: {
    flat: {
      variant: 'links.primary',
      background: 'none',
      border: 'none',
      padding: 0,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  messages: {
    cookieConsent: {
      borderColor: 'secondary',
      backgroundColor: 'highlight',
      fontSize: 1,
    },
  },
  typography: {
    note: {
      section: {
        '&.section-h4': {
          ml: [0, 0, 3],
        },
      },
      blockquote: {
        margin: 0,
        mb: 4,
        padding: 2,
        borderLeft: '4px solid',
        borderColor: 'secondary',
        borderRadius: '2px',
        color: 'secondary',
        p: {
          margin: 0,
        },
      },
      '.gatsby-resp-image-figcaption': {
        color: 'secondary',
        fontSize: 1,
        textAlign: 'center',
      },
      // Visually group the list to the previous paragraph
      'p + ul': {
        mb: 4,
      },
      'li + li': {
        mt: 2,
      },
    },
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
      color: 'secondary',
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
