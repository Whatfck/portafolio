import { Locale, getDictionary } from '@/lib/dictionaries'

export default function Hero({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).hero

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          {dict.eyebrow && (
            <p className="hero-eyebrow">
              <span>{dict.eyebrow}</span>
            </p>
          )}
          <h1>{dict.name}</h1>
          <p className="hero-role">{dict.role}</p>
          <p className="hero-copy">
            {dict.copy}
          </p>

          <div className="hero-actions">
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
          </div>
        </div>

        <div className="hero-photo-wrapper">
          <div className="hero-photo tech-card" aria-label={lang === 'es' ? `Foto de ${dict.name}` : `Photo of ${dict.name}`}>
            <img src={dict.photo_url} alt={dict.photo_alt} loading="eager" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue" aria-label={lang === 'es' ? 'Ir abajo' : 'Scroll down'}>
        <i className="fa-solid fa-angle-down" aria-hidden="true"></i>
      </a>
    </section>
  )
}
