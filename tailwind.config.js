/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#F7F6F2',
        panel: '#FFFFFF',
        line: '#E6E3DB',
        mist: '#5C6470',
        frost: '#1B1F27',
        teal: '#24549C',
        cyan: '#24549C',
        blue: '#24549C',
        emerald: '#1F7A4D',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 14px 40px -18px rgba(36, 84, 156, 0.28)',
        card: '0 1px 2px rgba(27, 31, 39, 0.05), 0 10px 30px -18px rgba(27, 31, 39, 0.14)',
      },
    },
  },
  plugins: [],
}
