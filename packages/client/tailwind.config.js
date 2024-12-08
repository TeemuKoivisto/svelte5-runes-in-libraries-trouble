import { screens } from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      ...screens
    }
  }
}
