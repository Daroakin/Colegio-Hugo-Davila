/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          900: '#0A2342',
          800: '#0F3460',
        },
        'gold': '#C5A86D',
        'silver': '#F2F4F7',
      },
      fontFamily: {
        'serif': ['Spectral', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}