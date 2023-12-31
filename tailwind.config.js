/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'dm': ['DM Sans', 'sans-serif'],
      },
    },
    colors:{
      'primaryColor': '#E85C4D',
      'secondaryColor': '#1E1B19',
      'whiteColor': '#FFFFFF',
      'lightGrayColor': '#D2D2D1',
      'darkGrayColor': '#8A8F97',
      'transparent' : 'transparent'
    },
  },
  plugins: [],
}
