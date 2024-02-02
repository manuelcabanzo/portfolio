import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minWidth: {
        'container' : '40rem'
      },
      maxWidth: {
        'cardContainer' : '41rem'
      },
      maxHeight: {
        'openCard' : '30rem'
      },
      backgroundColor: {
        'blackity' : '#111111',
        'pink' : '#f15bb5'
      },
      height: {
        'right' : '9.6rem',
        'game' : '41rem'
      },
      width : {
        'game' : '41rem'
      },
      textColor: {
        'button' : '#240046',
        'buttonafter' : '#f15bb5'
      }
    },
  },
  plugins: [],
}
export default config
