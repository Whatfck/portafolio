"use client"

import { useEffect, useState } from 'react'

const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre mi' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
]

const mobileSectionLabels: Record<string, string> = {
  about: 'Sobre mi',
  projects: 'Proyectos',
  contact: 'Contacto',
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    let ticking = false

    const sectionIds = ['hero', 'about', 'projects', 'contact']

    const updateActiveSection = () => {
      const header = document.querySelector('.site-header') as HTMLElement | null
      const triggerPoint = (header?.offsetHeight ?? 0) + 24

      const currentSection = sectionIds.find((sectionId) => {
        const section = document.getElementById(sectionId)

        if (!section) {
          return false
        }

        const rect = section.getBoundingClientRect()
        return rect.top <= triggerPoint && rect.bottom > triggerPoint
      })

      setActiveSection(currentSection ?? 'hero')
    }

    const onScrollOrResize = () => {
      if (ticking) {
        return
      }

      ticking = true
      requestAnimationFrame(() => {
        updateActiveSection()
        ticking = false
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme)
      return
    }

    setTheme(systemPrefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const isScrolled = activeSection !== 'hero'
  const currentMobileSection = mobileSectionLabels[activeSection]

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    window.localStorage.setItem('theme', nextTheme)
  }

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-shell">
        {isScrolled && <span className="nav-owner">Daniel Perez</span>}
        {isScrolled && currentMobileSection && <span className="nav-mobile-section">{currentMobileSection}</span>}

        <button
          type="button"
          className="nav-theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true"></i>
          <span>{theme === 'dark' ? 'Claro' : 'Oscuro'}</span>
        </button>

        <nav className="navbar" aria-label="Navegacion principal">
          <ul className="navbar-links">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? 'is-active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
