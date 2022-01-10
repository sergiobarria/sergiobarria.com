const defaultTheme = require('tailwindcss/defaultTheme')

// TODO: If not used, remove tailwind forms and tailwind selection variant from plugins

module.exports = {
  content: ['./src/pages/**/**.tsx', './src/components/**/*.tsx'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Inconsolata', ...defaultTheme.fontFamily.sans],
        // sans: ['Inter', ...defaultTheme.fontFamily.sans],
        // sans: ['Operator Mono', ...defaultTheme.fontFamily.sans],
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
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // require('tailwindcss-selection-variant'),
  ],
}
