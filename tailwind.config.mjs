/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Alice', 'serif'],
      },
      colors: {
        eggshell: '#f4f1de',
        'burnt-peach': '#e07a5f',
        'twilight-indigo': '#3d405b',
        'muted-teal': '#81b29a',
        'apricot-cream': '#f2cc8f',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                opacity: 0.8,
              },
            },
            code: {
              color: 'inherit',
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
            },
            'pre code': {
              backgroundColor: 'transparent',
            },
          },
        },
        invert: {
          css: {
            code: {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            pre: {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          },
        },
      },
    },
  },
  plugins: [],
};

