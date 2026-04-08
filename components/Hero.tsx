export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1>Daniel Perez</h1>
          <p className="hero-role">Estudiante Ing. Software</p>
          <p className="hero-copy">
            Construyendo interfaces limpias y experiencias simples para la web.
          </p>

          <div className="hero-actions">
            <a className="button button-linkedin" href="#" target="_blank" rel="noreferrer">
              <span className="button-icon" aria-hidden="true">in</span>
              LinkedIn
            </a>
            <a className="button button-github" href="#" target="_blank" rel="noreferrer">
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
