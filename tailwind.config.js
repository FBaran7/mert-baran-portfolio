/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080D14',
        panel: '#101722',
        line: '#243044',
        mist: '#A7B0BF',
        frost: '#F5F7FA',
        teal: '#78C7D8',
        cyan: '#9AC7DF',
        blue: '#7F9FD3',
        emerald: '#8DBFA2',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 18px 60px -30px rgba(120, 199, 216, 0.36)',
        card: '0 24px 80px -48px rgba(0, 0, 0, 0.85)',
      },
    },
  },
  plugins: [],
}
