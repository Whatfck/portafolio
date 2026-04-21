"use client"

import { motion } from 'framer-motion'
import { Locale, getDictionary } from '@/lib/dictionaries'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const },
  },
}

const photoVariants = {
  hidden: { opacity: 0, scale: 0.94, x: 24 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.75, ease: 'easeOut' as const, delay: 0.25 },
  },
}

export default function Hero({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).hero

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-inner"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="hero-content">
          {dict.eyebrow && (
            <motion.p className="hero-eyebrow" variants={itemVariants}>
              <span>{dict.eyebrow}</span>
            </motion.p>
          )}
          <motion.h1 variants={itemVariants}>{dict.name}</motion.h1>
          <motion.p className="hero-role" variants={itemVariants}>{dict.role}</motion.p>
          <motion.p className="hero-copy" variants={itemVariants}>
            {dict.copy}
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a className="button button-linkedin" href={dict.linkedin_url} target="_blank" rel="noreferrer">
              <i className="button-icon fa-brands fa-linkedin" aria-hidden="true"></i>
              <span className="button-label">{dict.linkedin_label}</span>
            </a>
            <a className="button button-github" href={dict.github_url} target="_blank" rel="noreferrer">
              <i className="button-icon fa-brands fa-github" aria-hidden="true"></i>
              <span className="button-label">{dict.github_label}</span>
            </a>
            <a className="button button-cv" href={dict.cv_url} target="_blank" rel="noreferrer">
              <i className="button-icon fa-solid fa-file" aria-hidden="true"></i>
              <span className="button-label">{dict.btn_cv}</span>
            </a>
          </motion.div>
        </div>

        <motion.div className="hero-photo-wrapper" variants={photoVariants}>
          <div
            className="hero-photo tech-card"
            aria-label={lang === 'es' ? `Foto de ${dict.name}` : `Photo of ${dict.name}`}
          >
            <img src={dict.photo_url} alt={dict.photo_alt} loading="eager" />
          </div>
        </motion.div>
      </motion.div>

      <a href="#about" className="hero-scroll-cue" aria-label={lang === 'es' ? 'Ir abajo' : 'Scroll down'}>
        <i className="fa-solid fa-angle-down" aria-hidden="true"></i>
      </a>
    </section>
  )
}
