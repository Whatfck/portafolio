'use client'

export default function ThemeToggle() {
  return (
    <button
      onClick={() => {
        const current = document.documentElement.getAttribute('data-theme') || 'light'
        const next = current === 'dark' ? 'light' : 'dark'
        document.documentElement.setAttribute('data-theme', next)
        localStorage.setItem('theme-mode', next)
      }}
      className="font-mono-tech text-xs px-3 py-1.5 border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
      aria-label="Toggle theme"
    >
      THEME
    </button>
  )
}
