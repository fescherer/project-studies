import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      'gray-100': '#E1E1E6',
      'gray-200': '#A9A9B2',
      'gray-400': '#7C7C8A',
      'gray-600': '#323238',
      'gray-800': '#202024',
      'gray-900': '#121214',
      'ignite-500': '#00B37E',
      'ignite-600': '#00875F',
      red: '#DB4437',
      transparent: 'transparent',
    },
  },
}
export default config
