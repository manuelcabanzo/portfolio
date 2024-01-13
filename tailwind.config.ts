import type { Config } from 'tailwindcss'

const config: Config = {
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
        'pardogray' : '#eaeaea'
      }
    },
  },
  plugins: [],
}
export default config
