import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Readex Pro Variable', ...defaultTheme.fontFamily.sans],
            },
            typography: {
                quoteless: {
                    css: {
                        'blockquote p:first-of-type::before': { content: 'none' },
                        'blockquote p:first-of-type::after': { content: 'none' },
                    },
                },
            },
        },
    },
    plugins: [typography, forms],
} satisfies Config;
