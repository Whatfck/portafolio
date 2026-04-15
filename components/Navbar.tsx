"use client"

import { useEffect, useState } from 'react'
import { Locale, getDictionary } from '@/lib/dictionaries'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar({ lang }: { lang: Locale }) {
  const [activeSection, setActiveSection] = useState('hero')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const router = useRouter()
  const pathname = usePathname()

  const dict = getDictionary(lang).navbar

  const links = [
    { href: '#hero', label: dict.hero },
    { href: '#about', label: dict.about },
    { href: '#skills', label: dict.skills },
    { href: '#experience', label: dict.experience },
    { href: '#projects', label: dict.projects },
    { href: '#testimonials', label: dict.testimonials },
    { href: '#contact', label: dict.contact },
  ]

  const mobileSectionLabels: Record<string, string> = {
    about: dict.about,
    skills: dict.skills,
    experience: dict.experience,
    projects: dict.projects,
    testimonials: dict.testimonials,
    contact: dict.contact,
  }

  useEffect(() => {
    let ticking = false

    const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'testimonials', 'contact']

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

  const toggleLang = () => {
    const targetLang = lang === 'en' ? 'es' : 'en'
    const newPath = pathname.replace(`/${lang}`, `/${targetLang}`)
    router.push(newPath)
  }

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-shell">
        {isScrolled && <span className="nav-owner">Daniel Perez</span>}
        {isScrolled && currentMobileSection && <span className="nav-mobile-section">{currentMobileSection}</span>}

        <div className="nav-theme-toggle">
          <button
            type="button"
            className="nav-toggle-btn"
            onClick={toggleLang}
            aria-label="Cambiar idioma / Change language"
            title="Cambiar idioma / Change language"
          >
            {lang === 'en' ? 'EN' : 'ES'}
          </button>

          <div className="nav-toggle-divider"></div>

          <button
            type="button"
            className="nav-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? dict.aria_light : dict.aria_dark}
            title={theme === 'dark' ? dict.aria_light : dict.aria_dark}
          >
            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true"></i>
          </button>
        </div>

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
