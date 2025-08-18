import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        accent: '#5855EE',
        dark: '#000000',
        silver: '#6B6B6B',
        primary: '#ffffff',
      },
      spacing: {
        4.5: '1.15rem',
        7.5: '1.87rem',
        12.5: '3.25rem',
        13: '3.5rem',
        14.5: '3.75rem',
        24.5: '6.25rem',
      },
    },
  },
  plugins: [],
}

export default config
