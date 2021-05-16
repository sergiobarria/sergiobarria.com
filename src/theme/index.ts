import { Theme } from 'theme-ui';

export const theme: Theme = {
  colors: {
    text: '#343D48', // body color and primary color
    text_secondary: '#02073E', // secondary body color
    heading: '#0F2137', // primary heading color
    heading_secondary: '#0F2137', // heading color
    background: '#FFFFFF', // body background color
    background_secondary: '#F9FBFD', // secondary background color
    border_color: '#E5ECF4', // border color
    yellow: '#FFA740', // border color
    primary: '##EC3750', // primary button and link color
    secondary: '#2563FF', // secondary color - can be used for hover states
    muted: '#E4E4E4', // muted color
    accent: '#609', // a contrast color for emphasizing UI
    // modes: {
    //   dark: {
    //     text: '#fff',
    //     background: '#000',
    //     primary: '#0cf',
    //     secondary: '#09c',
    //     muted: '#111',
    //   },
    // },
  },
  breakpoints: [
    '480px',
    '640px',
    '768px',
    '1024px',
    '1220px',
    '1366px',
    '1620px',
  ],

  fonts: {
    body: 'Nunito Sans, Quicksand, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Nunito Sans, Quicksand, inherit',
    monospace: 'Nunito Sans, Quicksand, Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};
