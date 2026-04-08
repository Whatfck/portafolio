export default function Contact() {
  return (
    <section id="contact" className="scroll-section contact-section">
      <div className="contact-header">
        <h2>Contacto</h2>
        <p className="contact-kicker">Hablemos</p>
        <p className="contact-intro">
          Si quieres colaborar, tienes una propuesta o simplemente deseas conversar sobre
          tecnologia, escribeme.
        </p>
      </div>

      <div className="contact-grid">
        <aside className="contact-info">
          <article className="contact-card">
            <span className="contact-card-badge">01</span>
            <h3>Email</h3>
            <p className="contact-card-line">Canal principal para propuestas y colaboraciones.</p>
            <a className="contact-card-link" href="mailto:danieleperez12@gmail.com">
              danieleperez12@gmail.com
            </a>
          </article>

          <article className="contact-card">
            <span className="contact-card-badge">02</span>
            <h3>LinkedIn</h3>
            <p className="contact-card-line">Contacto profesional y networking.</p>
            <a
              className="contact-card-link"
              href="https://www.linkedin.com/in/daniel-perez-blank"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/daniel-perez-blank
            </a>
          </article>

          <article className="contact-card">
            <span className="contact-card-badge">03</span>
            <h3>GitHub</h3>
            <p className="contact-card-line">Repositorio de proyectos y experimentos.</p>
            <a className="contact-card-link" href="https://github.com/Whatfck" target="_blank" rel="noreferrer">
              github.com/Whatfck
            </a>
          </article>

          <div className="contact-bar">
            <p className="contact-note">Disponible para colaboraciones freelance y remotas.</p>
            <p className="contact-note">Tiempo de respuesta estimado: 24 a 48 horas.</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
