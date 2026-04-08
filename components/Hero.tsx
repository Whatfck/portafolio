export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">Portafolio 2026</p>
          <h1>Daniel Perez</h1>
          <p className="hero-role">Estudiante Ing. Software</p>
          <p className="hero-copy">
            Enfocado en software, redes y arquitectura de servidores para crear soluciones robustas y eficientes.
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
              <span className="button-label">Ver CV</span>
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
