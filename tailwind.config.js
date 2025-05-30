/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00f6ff',
        'cyber-pink': '#ff00ff',
        'cyber-purple': '#9d00ff',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #00f6ff, 0 0 10px #00f6ff' },
          '100%': { textShadow: '0 0 10px #00f6ff, 0 0 20px #00f6ff, 0 0 30px #00f6ff' },
        },
      },
    },
  },
  plugins: [],
} 