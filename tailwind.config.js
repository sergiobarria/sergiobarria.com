const defaultTheme = require('tailwindcss/defaultTheme')

// TODO: If not used, remove tailwind forms and tailwind selection variant from plugins

module.exports = {
  content: ['./src/pages/**/**.tsx', './src/components/**/*.tsx'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
      },
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
      // textColor: ['selection'],
      // backgroundColor: ['selection'],
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // require('tailwindcss-selection-variant'),
  ],
}

// colors: {
//   ...colors,
// },
// extend: {
//   colors: {
//     'main-light': '#a9bcfa',
//     main: '#5378F5',
//     'main-dark': '#4260c4',
//     primary: '#5378F5',
//     secondary: '#33D399',
//     tertiary: '#F56647',
//     accent: '#f23333',
//   },
//   backgroundImage: () => ({
//     'services-img': 'url(/static/layout-assets/what-i-do.png)',
//   }),
//   minHeight: {
//     services: '50rem',
//     service: '25rem',
//     120: '30rem',
//     'post-card': '15rem',
//     '3/4': '75vh',
//     '8/10': '80vh',
//     '9/10': '90vh',
//   },
//   width: {
//     120: '30rem',
//   },
//   height: {
//     100: '25rem',
//   },
//   zIndex: {
//     '-10': '-10',
//   },
//   borderColor: {
//     skin: {
//       accent: 'var(--color-button-border)',
//     },
//   },
//   backgroundColor: {
//     skin: {
//       fill: 'var(--color-fill)',
//     },
//   },
//   keyframes: {
//     'fade-in': {
//       '0%': {
//         opacity: 0,
//       },

//       '100%': {
//         opacity: 1,
//       },
//     },
//     'fade-out': {
//       '0%': {
//         opacity: 1,
//       },

//       '100%': {
//         opacity: 0,
//       },
//     },
//   },
//   animation: {
//     'fade-in': 'fade-in 0.5s ease-out',
//     'fade-out': 'fade-out 0.5s ease-out',
//   },
//   fontFamily: {
//     sans: ['Inter', ...defaultTheme.fontFamily.sans],
//     londrina: ['Londrina Outline', ...defaultTheme.fontFamily.sans],
//   },
//   typography: theme => ({
//     DEFAULT: {
//       css: {
//         color: theme('colors.gray.700'),
//         a: {
//           color: 'var(--color-main)',
//           '&:hover': {
//             color: 'var(--color-main-hover)',
//           },
//           code: { color: 'var(--color-main)' },
//         },
//         h2: {
//           color: theme('colors.gray.900'),
//         },
//         'h4, h5, h6': {
//           color: theme('colors.gray.900'),
//           'scroll-margin-top': defaultTheme.spacing[32],
//         },
//         code: {
//           color: 'var(--color-main)',
//           backgroundColor: theme('colors.gray.100'),
//           paddingLeft: '4px',
//           paddingRight: '4px',
//           paddingTop: '2px',
//           paddingBottom: '2px',
//           borderRadius: '0.25rem',
//         },
//         'code:before': {
//           content: 'none',
//         },
//         'code:after': {
//           content: 'none',
//         },
//         hr: { borderColor: theme('colors.gray.200') },
//         'ol li:before': {
//           fontWeight: '600',
//           color: 'var(--color-main-light)',
//         },
//         'ul li:before': {
//           backgroundColor: 'var(--color-main-light)',
//         },
//         strong: { color: theme('colors.gray.800') },

//         // BLOCKQUOTE STYLES
//         // 'blockquote p:first-of-type::before': false,
//         'blockquote p:last-of-type::after': false,
//         'blockquote p:first-of-type::before': {
//           color: 'var(--color-main)',
//           fontWeight: 'bold',
//           fontSize: '4rem',
//           position: 'absolute',
//           top: '-1rem',
//           left: '0',
//         },
//         blockquote: {
//           color: theme('colors.gray.900'),
//           borderLeftColor: 'var(--color-main)',
//           backgroundColor: theme('colors.gray.200'),
//           padding: '1.5rem 2.5rem 1.5rem',
//           borderRadius: '0.5rem',
//           position: 'relative',
//         },
//         'blockquote > p': {
//           margin: '0px',
//           fontSize: '0.9rem',
//         },
//       },
//     },
//   }),
// },
