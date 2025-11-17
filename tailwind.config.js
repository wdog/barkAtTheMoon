/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './themes/barkAtTheMoon/layouts/**/*.html',
    './layouts/**/*.html',
    './content/**/*.{html,md}',
  ],
  darkMode: 'class', // Use class-based dark mode
  theme: {
    colors: {
      // Essential colors
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',

      // Default primary color palette (sky blue)
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      // Slate palette for both light and dark mode
      gray: {
        50: '#f8fafc',   // Very light slate for light mode backgrounds
        100: '#f1f5f9',  // Light backgrounds
        200: '#e2e8f0',  // Borders, dividers
        300: '#cbd5e1',  // Subtle text, disabled states
        400: '#94a3b8',  // Placeholder text
        500: '#64748b',  // Secondary text
        600: '#475569',  // Body text (light mode)
        700: '#334155',  // Headings, emphasis
        800: '#1e293b',  // Dark mode backgrounds
        900: '#0f172a',  // Dark mode primary background
        950: '#020617',  // Darkest backgrounds
      },
      // Purple palette for series tags
      purple: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
        950: '#3b0764',
      },
    },
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
}
