/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Support toggling dark mode via a class on the html element
  theme: {
    extend: {
      colors: {
        // Executive Software Architect Palette Tokens
        base: {
          light: '#FCFAF7', // Alabaster
          dark: '#0B0C10',  // Midnight Slate
        },
        surface: {
          light: '#FFFFFF',
          dark: '#12141D',  // Slate Surface
        },
        editorial: {
          charcoal: '#1C1E24',
          ivory: '#F5F4F0',
        },
        accent: {
          crimson: '#DC2626',
          red: '#EF4444',
          blueprint: '#1A73E8',
          blueprintDark: '#3B82F6',
        },
        grid: {
          light: '#E6E2DB', // Warm Grid Line
          dark: '#1E2230',  // CAD Dark Grid
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      backgroundImage: {
        // Diagonal hatching grid for buttons and accents on hover
        'hatch-light': 'repeating-linear-gradient(45deg, rgba(28,30,36,0.05) 0px, rgba(28,30,36,0.05) 2px, transparent 2px, transparent 8px)',
        'hatch-dark': 'repeating-linear-gradient(45deg, rgba(245,244,240,0.05) 0px, rgba(245,244,240,0.05) 2px, transparent 2px, transparent 8px)',
      }
    },
  },
  plugins: [],
}
