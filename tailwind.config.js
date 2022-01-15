const defaultTheme = require('tailwindcss/defaultTheme');

// TODO: If not used, remove tailwind forms and tailwind selection variant from plugins

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        // sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'gray-light': 'var(--tw-clr-gray-light)',
        'gray-lighter': 'var(--tw-clr-gray-lighter)',
        'gray-regular': 'var(--tw-clr-gray-regular)',
        'gray-darker': 'var(--tw-clr-gray-darker)',
        'gray-dark': 'var(--tw-clr-gray-dark)',
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
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
