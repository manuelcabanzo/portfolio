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
        'pardogray' : '#111111',
        'bg' : '#111111'
      },
      height: {
        'right' : '9.6rem'
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
