"use client"

import { useEffect, useState } from 'react'

const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre mi' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')

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

  const isScrolled = activeSection !== 'hero'

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-shell">
        {isScrolled && <span className="nav-owner">Daniel Perez</span>}

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
