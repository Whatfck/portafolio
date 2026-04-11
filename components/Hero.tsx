import { Locale, getDictionary } from '@/lib/dictionaries'

export default function Hero({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).hero

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">{dict.eyebrow}</p>
          <h1>{dict.name}</h1>
          <p className="hero-role">{dict.role}</p>
          <p className="hero-copy">
            {dict.copy}
          </p>

          <div className="hero-actions">
            <a className="button button-linkedin" href="https://www.linkedin.com/in/daniel-perez-blank" target="_blank" rel="noreferrer">
              <i className="button-icon fa-brands fa-linkedin" aria-hidden="true"></i>
              <span className="button-label">LinkedIn</span>
            </a>
            <a className="button button-github" href="https://github.com/Whatfck" target="_blank" rel="noreferrer">
              <i className="button-icon fa-brands fa-github" aria-hidden="true"></i>
              <span className="button-label">GitHub</span>
            </a>
            <a className="button button-cv" href="#" target="_blank" rel="noreferrer">
              <i className="button-icon fa-solid fa-file" aria-hidden="true"></i>
              <span className="button-label">{dict.btn_cv}</span>
            </a>
          </div>
        </div>

        <div className="hero-photo" aria-label="Placeholder de foto">
          <span>Foto</span>
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue" aria-label={lang === 'es' ? 'Ir abajo' : 'Scroll down'}>
        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
      </a>
    </section>
  )
}
