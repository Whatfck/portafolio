export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">Portafolio 2026</p>
          <h1>Daniel Perez</h1>
          <p className="hero-role">Estudiante Ing. Software</p>
          <p className="hero-copy">
            Enfocado en backend, arquitectura y rendimiento para construir software robusto y soluciones eficientes.
          </p>

          <div className="hero-actions">
            <a className="button button-linkedin" href="https://www.linkedin.com/in/daniel-perez-blank" target="_blank" rel="noreferrer">
              <span className="button-icon" aria-hidden="true">in</span>
              LinkedIn
            </a>
            <a className="button button-github" href="https://github.com/Whatfck" target="_blank" rel="noreferrer">
              <span className="button-icon" aria-hidden="true">gh</span>
              GitHub
            </a>
            <a className="button button-cv" href="#" target="_blank" rel="noreferrer">
              <span className="button-icon" aria-hidden="true">cv</span>
              Ver CV
            </a>
          </div>
        </div>

        <div className="hero-photo" aria-label="Placeholder de foto">
          <span>Foto</span>
        </div>
      </div>
    </section>
  )
}
