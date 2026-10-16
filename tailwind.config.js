/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        surface: 'var(--surface)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['var(--font-source-sans)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        'mono-tech': ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
